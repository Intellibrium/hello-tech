package com.firstcare.discoveryregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@EnableEurekaServer
@SpringBootApplication
public class DiscoveryRegistryApplication {
    public static void main(String[] args) {
        SpringApplication.run(DiscoveryRegistryApplication.class, args);
    }
}
