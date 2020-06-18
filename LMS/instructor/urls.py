from django.urls import path
from .views import (
    InstructorProfileView,
    InstructorManageBlog,
    InstructorBlogPostCreateView,
    InstructorManageCourse,
    InstructorCreateCourse
)

urlpatterns = [
    path('', InstructorProfileView.as_view(), name='instructor-dashboard'),
    path('instructor_blog/', InstructorManageBlog.as_view(), name='instructor-blog'),
    path('create_blog/', InstructorBlogPostCreateView.as_view(), name='create-blog-post'),
    path('instructor_courses/', InstructorManageCourse.as_view(), name='instructor-courses'),
    path('create_courses/', InstructorCreateCourse.as_view(), name='create-courses'),
]
