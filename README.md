# Docs
ZoomPhant Documentations. We are using just-the-docs, please visit [Just the Docs (just-the-docs.com)](https://just-the-docs.com/) for more.

## How to view locally

You can build a docker image and start the document server locally

1. Build image, under root directory, execute *docker-compose build*, this may take a while
2. Start up service by *docker-compose up*
3. Once started, you can access the documents locally following the direction shown in the console
   1. If you made any changes under docs folder, it will be dynamically reflect in the testing server



## How to publish

To release, just **merge you changes into master** branch and the changes will be deployed by GitHub to [https://zoomphant.github.io](https://zoomphant.github.io)