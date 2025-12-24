package com.kreature.doxy

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class DoxyApplication

fun main(args: Array<String>) {
    runApplication<DoxyApplication>(*args)
}
