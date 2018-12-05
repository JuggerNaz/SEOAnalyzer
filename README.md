# SEOAnalyzer
An example application of simple SEO analyzer

## Pre-requisite
* [.NET core 2.0](https://dotnet.microsoft.com/download/dotnet-core/2.0)
* [nodejs](https://nodejs.org/en/)
* [phyton 2](https://www.python.org/downloads/) (phyton 2.x essential for nodejs build)
* [angular CLI](https://cli.angular.io/)

## Step to build and run
* clone this repo
* go into the clone folder run command **dotnet build**
* after that run command **dotnet run**, alternatively if it doesn't work go to **ClientApp** folder and run command **ng serve**
* open browser based on output url in command prompt ex: http://localhost:5000
* type some text or paste text in textarea and/or type url or paste url and hit enter

## Run unit test
* go inside **ClientApp** folder and run command **ng test**

## Issues
* phyton 2 system/environment path problem and cause problem to npm build, you can refer here
    * https://docs.python-guide.org/starting/install/win/
    * https://datascience.com.co/how-to-install-python-2-7-and-3-6-in-windows-10-add-python-path-281e7eae62a
