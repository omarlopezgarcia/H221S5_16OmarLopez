package pe.edu.vallegrande.ipify.controller;

import pe.edu.vallegrande.ipify.model.Ipify;
import pe.edu.vallegrande.ipify.service.IpifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/ipinfo")
public class IpifyController {

    @Autowired
    private IpifyService ipifyService;

    @GetMapping("/myip")
    public Mono<Ipify> getMyIPInfo() {
        return ipifyService.getMyIPInfo();
    }

    @GetMapping("/{ip}")
    public Mono<Ipify> getIPInfo(@PathVariable String ip) {
        return ipifyService.getIPInfo(ip);
    }

    @GetMapping("/all")
    public Flux<Ipify> getAllIPInfo() {
        return ipifyService.getAllIPInfo();
    }

    @DeleteMapping("/delete/{id}")
    public Mono<ResponseEntity<Object>> deleteIPInfo(@PathVariable Long id) {
        return ipifyService.deleteIPInfo(id)
                .then(Mono.just(ResponseEntity.noContent().build()))
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }
}