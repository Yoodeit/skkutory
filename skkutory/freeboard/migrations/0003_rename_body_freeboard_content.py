# Generated by Django 4.1.3 on 2022-11-08 18:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('freeboard', '0002_alter_freeboard_body'),
    ]

    operations = [
        migrations.RenameField(
            model_name='freeboard',
            old_name='body',
            new_name='content',
        ),
    ]
