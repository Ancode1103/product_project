<?php

namespace App\Enums;


enum QuestionTypeEnum: string
{
    case Text = 'text';
    case textarea = 'textarea';
    case Select = 'select';
    case Radio = 'radio';
    case Checkbox = 'checkbox';
}