package pe.edu.vallegrande.ipify.repository;

import pe.edu.vallegrande.ipify.model.Ipify;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import reactor.core.publisher.Mono;

public interface IpifyRepository extends ReactiveCrudRepository<Ipify, Long> {
    Mono<Ipify> findByIp(String ip);
}