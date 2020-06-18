from django import forms
from django.utils import timezone

from blog.models import Blog


# Create your form here.
class DateTimeInput(forms.DateTimeInput):
    input_type = 'date'


class CreateBlogPostFrom(forms.ModelForm):

    class Meta:
        model = Blog
        fields = [
            'title',
            'cover_image',
            'video',
            'content',
            'tags',
            'active',
            'timestamp',
            'slug',
        ]
        widgets = {
            'timestamp': DateTimeInput(),
        }

        labels = {
            'title': 'Title',
            'cover_image': 'Cover Image',
            'video': 'Video',
            'content': 'Content',
            'tags': 'Tags',
            'active': 'Active',
            'timestamp': 'Timestamp',
            'slug': 'Slug',
        }
