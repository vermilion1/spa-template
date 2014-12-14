import Handlebars from 'hbsfy/runtime';

const wind = window;

export const _ = wind._;
export const Backbone = wind.Backbone;
export const $ = Backbone.$ = wind.$;
export const Controller = Backbone.Controller;
export const Marionette = Backbone.Marionette;
export const Stickit = Backbone.Stickit;
export const Polyglot = wind.Polyglot;
export const moment = wind.moment;

export {Handlebars};
