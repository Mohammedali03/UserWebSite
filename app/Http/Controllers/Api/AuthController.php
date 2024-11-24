<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login  (LoginRequest $request){
        $data =$request->validated();
 
     $user=User::create([
'name'=> $data['name'],
'email'=>$data['email'],
'password'=>bcrypt($data['password'])     ]);
    }
    public function signup (SignupRequest $request){}
    public function logout(Request $request){}
}
