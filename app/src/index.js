import {Marionette, Handlebars} from './vendor';
import Application from './application';

// TODO: precompile templates

Marionette.TemplateCache.prototype.loadTemplate = function(templateId) {
  return templateId;
};

Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
  return Handlebars.compile(rawTemplate);
};

new Application().start();
