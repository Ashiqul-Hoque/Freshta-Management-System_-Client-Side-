import React from "react";
import "./Blogs.css";

const blogs = () => {
  return (
    <div className="container my-3">
      <div className="mb-5">
        <h5 className="text-primary">
          What is the difference between Javascript and nodejs ?
        </h5>
        <p>
          JavaScript’s first version was launched in 1995 and it was developed
          by Brendan Eich of Netscape. JavaScript is a high-level programming
          language that has all the functionalities normally a programming
          language has. JavaScript is an Object-oriented programming language
          that can be used on the client-side as well as on the server-side and
          developers not only use it for creating web pages but also it is used
          for game development and mobile app development.
        </p>
        <p>
          Node.js was first introduced in 2009 developed by Ryan Dahl and is a
          runtime environment for JavaScript built on Google’s v8 engine whose
          main purpose is to run JavaScript on the server and hence JavaScript
          can be executed outside of the browser. The nicest part about Node.js
          is that it never blocks I/O, is event-driven, and can be used to
          create highly scalable apps.
        </p>
        <p>
          JavaScript is a proper high-level programming language used to create
          web scripts whereas Node.js is a run time environment built on
          google’s v8 engine. JavaScript is executed in the browser whereas
          using Node.js gives us the ability to execute JavaScript outside the
          browser. JavaScript can manipulate DOM or add HTML within whereas
          Node.js doesn’t have the capability to add HTML. JavaScript is mainly
          used to create front end web applications or develop client-side
          whereas Node.js is used on the back end development that is
          server-side development JavaScript follows the standard of JavaScript
          when writing programs whereas Node.js is written in C++ while using
          the v8 engine.
        </p>
      </div>
      <div className="mb-5">
        <h5 className="text-primary">
          When should we use nodejs and when should we use mongodb ?
        </h5>
        <p>
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on the V8 engine and executes JavaScript code
          outside a web browser. Most commonly, it is used to build servers that
          can respond to web requests.
        </p>
        <p>
          MongoDB is a database engine. Code within some application or server
          uses MongoDB to save, query or update data in a database. There are
          many web servers built with nodejs that will then use MongoDB for
          storing data.
        </p>
        <p>
          Any project needs a programming environment and a runtime library that
          offers you basic programming tools/support and can compile and/or
          interpret your code. Nodejs is such as tool for the Javascript
          programming language. There are other similar tools for other
          languages such as Python, Java, PHP, C#, C++, Go, etc... So, if you
          want to write some kind of stand-alone program or server in
          Javascript, then you can use nodejs for it.
          <br />
          If your application needs the ability to persistently store data in a
          way that you can efficiently query or update it later, then you would
          typically use some form of database. There are dozens of popular
          databases. MongoDB is one such database. MariaDB, MySql, CouchDB,
          DynamoDB (on AWS), Postgres are examples of other databases. Different
          databases have different strengths (things they are best at) and
          different ways of using them so it's a whole different question to
          choose the right/best database for what you're doing.
        </p>
      </div>
      <div className="mb-5">
        <h5 className="text-primary">
          What are the differences between sql and nosql databases ?
        </h5>
        <p></p>
        <p></p>
      </div>
      <div className="mb-5">
        <h5 className="text-primary">
          What is the purpose of jwt (JSON Web Tokens) and how does it work ?
        </h5>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default blogs;
