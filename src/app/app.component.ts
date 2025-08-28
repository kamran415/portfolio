import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio'; 
   name = 'Mohd Kamran';
  email = 'mokamran684@gmail.com';
  phone = '9519633889';
  location = 'Sitapur, UP, India';
  linkedin = 'https://www.linkedin.com/in/md-kamran-aa6812357/';
  linktree = 'http://linktr.ee/kamran_9021';

  skills = [
    'Java / Spring Boot',
    'Hibernate / Microservices',
    'Angular / Flutter',
    'AWS DynamoDB',
    'MySQL',
    'HTML / CSS / JS'
  ];

  projects = [
    {
      title: 'TechBlogs',
      desc: 'A blogging system for tech professionals to share insights and solutions.',
      stack: 'Java, JSP, Servlets, MySQL, Bootstrap, Tomcat'
    },
    {
      title: 'NoteTaker',
      desc: 'Create and manage notes efficiently with Hibernate + MySQL backend.',
      stack: 'JSP, Hibernate, HQL, MySQL, Bootstrap, Tomcat'
    }
  ];
}
