FROM ruby:2.6

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ADD . ./

RUN gem install bundler:2.1.4 && bundle install

EXPOSE 4000

