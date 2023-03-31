package com.sqlserver.main.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.jdbc.DataSourceProperties;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.sqlserver.main.firstdatabase.entity.Student;
import com.zaxxer.hikari.HikariDataSource;

@Configuration
@EnableTransactionManagement
@EnableJpaRepositories(basePackages = "com.sqlserver.main.seconddatabase.repo", 
						entityManagerFactoryRef = "studentEntityManagerFactory", 
						transactionManagerRef = "studentTransactionManager")
public class StudentConfig {
	@Bean
	@ConfigurationProperties("spring.datasource.student")
	public DataSourceProperties studentDataSourceProperties() {
		return new DataSourceProperties();
	}

	@Bean
	@ConfigurationProperties("spring.datasource.student.configuration")
	public DataSource studentDataSource() {
		return studentDataSourceProperties().initializeDataSourceBuilder().type(HikariDataSource.class).build();
	}

	@Bean(name = "studentEntityManagerFactory")
	public LocalContainerEntityManagerFactoryBean studentEntityManagerFactory(EntityManagerFactoryBuilder builder) {
		return builder.dataSource(studentDataSource()).packages(Student.class).build();
	}

	@Bean(name = "studentTransactionManager")
	public PlatformTransactionManager studentTransactionManager(
			final @Qualifier("studentEntityManagerFactory") LocalContainerEntityManagerFactoryBean studentEntityManagerFactory) {
		return new JpaTransactionManager(studentEntityManagerFactory.getObject());
	}

}
