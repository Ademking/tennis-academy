<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    public function registerPlayer(Request $request)
    {
        $request->validate([
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|confirmed',
            'matricule' => 'string|unique:users,matricule',
            'gender' => 'required|string',
            'birthdate' => 'date',
        ]);
        $user = new User([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'gender' => $request->gender,
            'matricule' => $request->matricule,
            'birthdate' => $request->birthdate,
            'phone' => $request->phone,
            'address' => $request->address,
            'city' => $request->city,
            'country' => $request->country,

        ]);
        $user->save();
        $user->assignRole('player');
        $token = $user->createToken('tennisacademy')->plainTextToken;
        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string'
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Your email or password is incorrect'
            ], 401);
        }
        $token = $user->createToken('tennisacademy')->plainTextToken;
        $userRole = $user->getRoleNames();
        return response()->json([
            'user' => $user,
            'token' => $token,
            'role' => $userRole[0]
        ], 201);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json([
            'message' => 'Logged out'
        ]);
    }

    public function getRole(Request $request) {
        $connectedUser = auth('sanctum')->user();
        try {
            $userRole = $connectedUser->getRoleNames();
            return response()->json([
                'role' => $userRole[0]
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'message' => 'You are not connected'
            ], 401);
        }

    }

    public function getConnectedUser(Request $request) {
        $connectedUser = auth('sanctum')->user();
        return response()->json([
            'user' => $connectedUser,
            'role' => $connectedUser->getRoleNames()[0]
        ]);
    }
}
