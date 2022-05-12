import React from "react";
import "./Blogs.css";

const blogs = () => {
  return (
    <div className="container my-3 px-4">
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
          If any project needs a programming environment and a runtime library
          that offers you basic programming tools/support and can compile and/or
          interpret your code. Nodejs is such as tool for the Javascript
          programming language.
          <br />
          If an application needs the ability to persistently store data in a
          way that one can efficiently query or update it later, then MongoDB is
          best for the development.
        </p>
      </div>
      <div className="mb-5">
        <h5 className="text-primary">
          What are the differences between sql and nosql databases ?
        </h5>
        <div>
          <p> The differences between sql and nosql databases are: </p>
          <table class="border border-info mx-auto my-3">
            <tr class="border border-info text-center">
              <th class="border border-info p-2">SQL</th>
              <th class="border border-info p-2">NoSQL</th>
            </tr>
            <tr class="border border-info">
              <td class="border border-info p-2">
                Relational Database Management System (RDBMS)
              </td>
              <td class="border border-info p-2">
                Non-relational or distributed database system
              </td>
            </tr>
            <tr class="border border-info">
              <td class="border border-info p-2">
                These databases have fixed or static or predefined schema
              </td>
              <td class="border border-info p-2">They have dynamic schema</td>
            </tr>
            <tr class="border border-info">
              <td class="border border-info p-2">
                These databases are not suited for hierarchical data storage.
              </td>
              <td class="border border-info p-2">
                These databases are best suited for hierarchical data storage.
              </td>
            </tr>
            <tr class="border border-info">
              <td class="border border-info p-2">
                These databases are best suited for complex queries
              </td>
              <td class="border border-info p-2">
                These databases are not so good for complex queries
              </td>
            </tr>
            <tr class="border border-info">
              <td class="border border-info p-2">Vertically Scalable</td>
              <td class="border border-info p-2">Horizontally scalable</td>
            </tr>
            <tr class="border border-info">
              <td class="border border-info p-2">Follows ACID property</td>
              <td class="border border-info p-2">
                {" "}
                Follows CAP(consistency, availability, partition tolerance)
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="mb-5">
        <h5 className="text-primary">
          What is the purpose of jwt (JSON Web Tokens) and how does it work ?
        </h5>
        <p>
          JSON Web Token (JWT) is an open standard that defines a compact and
          self-contained way for securely transmitting information between
          parties as a JSON object. This information can be verified and trusted
          because it is digitally signed. JWTs can be signed using a secret
          (with the HMAC algorithm) or a public/private key pair using RSA or
          ECDSA.
        </p>
        <p>
          In authentication, when the user successfully logs in using their
          credentials, a JSON Web Token will be returned. JWT should not keep
          longer than required. Whenever the user wants to access a protected
          route or resource, the user agent should send the JWT, typically in
          the Authorization header using the Bearer schema. This can be, in
          certain cases, a stateless authorization mechanism. The server's
          protected routes will check for a valid JWT in the Authorization
          header, and if it's present, the user will be allowed to access
          protected resources.
        </p>
      </div>
    </div>
  );
};

export default blogs;
