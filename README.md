# Heroes and Teams application 

In fulfilment of the solo project assignment due Monday week 7 at QA consulting.

## Index
[Brief](#brief)
   * [Solution](#solution)
   
[Architecture](#architecture)
   * [Entity Relationship Diagrams](#erd)
	
[Testing](#testing)
   * [Report](#report)

     
[Deployment](#depl)
   * [Technologies Used](#tech)
     
[Front End Design](#FE)

[Improvements for the Future](#improve)

[Authors](#auth)

[Acknowledgements](#ack)

<a name="brief"></a>
## The Brief

The brief was to create an object oriented web application that covers all the core topics and utilises the various tools covered at the Academy in the last 8 weeks.

<a name="solution"></a>
### Solution

My project consisted of making a website where users are able create/delete heroes/teams from comic books with the 
attributes of 1st issue and a description of the hero/team. Each attribute of the heroes/teams can be edited. Users are also able to
search for heroes/teams by name.

<a name="architecture"></a>
## Architecture
<a name="erd"></a>
### Entity Relationship Diagrams
#### Initial plan
![Initial ERD](/image/initialERD.jpg)

The ERD above 

#### Delivered solution
![Final ERD](/images/finalERD.jpg)

The ERD above is the final two tables 

<a name="depl"></a>
## Deployment

The building, testing and deployment process was automated using Jenkins, where jenkins would copy the needed repositroys every hour to an external directory to be then hosted by apache2. The API is ran by maven on a virtual machine via GCP (Google cloud PLATFORM).
[Jenkins Conifg](images/jenkins.jpg).

The API and front end where first tested locally before being pushed up online, postman API call requests were first used locally before the API calls were implemented into Java script.



![Deployment Pipeline](/images/ciPipeLine.jpeg)
<a name="tech"></a>
### Technologies Used

*   MySQL Database Engine - Database
*   Java - API Logic
*   JavaScript - Front End Logic
*   Draw.io - Wireframes and ERDs
*   HTML, CSS, Bootstrap Studio - Front End Design
*   Postman - API call tests
*   Apache2 - Deployment
*   Jenkins - CI Server
*   Maven - Dependency Management
*   [Git](https://github.com/AaronGlen/SoloProjFrontEnd.git) - VCS
*   [Trello](https://trello.com/b/pVnNall5/hero-team) - Project Tracking
*   GCP - Live Environment






