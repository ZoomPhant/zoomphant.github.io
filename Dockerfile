FROM ruby:2.7

ENV LC_ALL C.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US.UTF-8

WORKDIR /usr/src/app

ADD . ./

RUN gem install bundler:2.4.22
RUN bundle install

EXPOSE 4000

