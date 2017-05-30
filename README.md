# front-end-angularjs-automate-tasks
In order to run the application properly, please follow the steps below.

# Step 1 - Setup and Download
* Download and install NetBeans with JDK 8.
* Download and install Apache Tomcat (change the http port from 8080 to 8090).
* Download the project.

# Step 2 - Create Project
Inside NetBeans IDE:
* Create a new project (Ctrl+Shift+N).
* Category: Maven, Projects: Project with existing POM.
* Click Next then Finish.
* Select location of the downloaded project then Open.

# Step 3 - Build
* Right click on the project/Build.
* Once build is done, It gives a success message on the Output tab, with the address of the .war build folder location.
* Copy the given address: "project location"\front-end-angularjs-automate-tasks-master\target\people-rest.war

# Step 4 - Deploy
* Turn Apache Tomcat Monitor ON.
* In your web browser, paste the URL: http://localhost:8090/manager/html
* Scroll down to "WAR file to deploy".
* Paste the .war address location and then deploy it.

# Step 5 - Testing
* Paste the URL: http://localhost:8090/people-rest to see the application working.

Thank you! 
