package com.kreature.doxy.api

import mu.KotlinLogging
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

private val log = KotlinLogging.logger {}

@RestController
@RequestMapping("/api")
class HealthController {

    @GetMapping("/health")
    fun health(): String {
        log.info { "health() called" }
        return "Doxy Service up and running!"
    }
}
