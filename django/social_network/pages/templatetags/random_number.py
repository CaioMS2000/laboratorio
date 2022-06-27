from django import template
import random

register = template.Library()

@register.filter()
def rand(limit: int):
    return random.randint(1, limit)