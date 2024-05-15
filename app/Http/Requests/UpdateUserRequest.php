<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => ['string', "max:255"],
            "email" => ['string', 'lowercase', 'email', 'max:255',],
            "password" => ["required","max:255",],
            "contact_Number" => ['numeric',"required","digits_between:9,11"],
            "type" => [ Rule::in(["tenant","owner"])],
            "address" => ['string',  "max:255"],
        ];
    }
}
