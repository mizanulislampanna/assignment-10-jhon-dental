import React from "react";

const Blogs = () => {
  return (
    <div class="container">
      <div class="row mt-5">
        <div class="col-sm border border-info rounded mx-2 my-2">
          <p className="fw-bold">
            Difference between Authorization and Authentication .
          </p>
          <p className="text-justify">
            Authentication is done before the authorization process, whereas
            authorization process is done after the authentication process. In
            authentication process, the identity of users are checked for
            providing the access to the system.
          </p>
        </div>
        <div class="col-sm border border-info rounded mx-2 my-2">
          <p className="fw-bold">
            Why are you using Firebase? what Other Option do you have to
            implement Authentication?
          </p>
          <p className="text-justify">
            Firebase Authentication aims to make building secure authentication
            systems easy, while improving the sign-in and onboarding experience
            for end users. It provides an end-to-end identity solution,
            supporting email and password accounts, phone auth, and Google,
            Twitter, Facebook, and GitHub login, and more.
          </p>
        </div>
        <div class="col-sm border border-info rounded mx-2 my-2">
          <p className="fw-bold">
            What Other Service does firebase provide than Authentication?
          </p>
          <p className="text-justify">
            There are many services which Firebase provides, Most useful of them
            are: 1. Cloud Firestore. 2. Cloud Functions. 3. Authentication.
            4.Hosting. 5.Cloud Storage. 6.Google Analytics. 7.Predictions.
            8.Cloud Messaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
