package pe.edu.vallegrande.ipify.service;

import pe.edu.vallegrande.ipify.model.Ipify;
import pe.edu.vallegrande.ipify.repository.IpifyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class IpifyService {

    @Autowired
    private IpifyRepository ipifyRepository;

    private final String TOKEN = "0194073900d22b";
    private final WebClient webClient = WebClient.create();

    public Mono<Ipify> getIPInfo(String ip) {
        String url = String.format("https://ipinfo.io/%s?token=%s", ip, TOKEN);

        return webClient.get()
                .uri(url)
                .retrieve()
                .bodyToMono(Ipify.class)
                .flatMap(ipify -> ipifyRepository.findByIp(ip)
                        .switchIfEmpty(ipifyRepository.save(ipify))
                        .thenReturn(ipify));
    }

    public Mono<Ipify> getMyIPInfo() {
        return webClient.get()
                .uri("https://api.ipify.org/?format=json")
                .retrieve()
                .bodyToMono(String.class)
                .flatMap(this::getIPInfo);
    }

    public Flux<Ipify> getAllIPInfo() {
        return ipifyRepository.findAll();
    }

    public Mono<Void> deleteIPInfo(Long id) {
        return ipifyRepository.deleteById(id);
    }
}