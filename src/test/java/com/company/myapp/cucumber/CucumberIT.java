package com.company.myapp.cucumber;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import io.cucumber.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = "pretty",
  tags = "not @ignore",
  features = "src/test/features")

public class CucumberIT  {

}
