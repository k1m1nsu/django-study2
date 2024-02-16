from django import template

regsiter = template.Library()

@regsiter.filter
def sub(value,arg):
    return value-arg