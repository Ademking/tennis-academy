<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\CoursePurchase;
use App\Models\Review;
use App\Models\User;
use Illuminate\Support\Carbon;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $courses = Course::with('coach')->get();
        return $courses;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $course = Course::create($request->all());
        return $course;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $reviews = Review::where('course_id', $id)->with('reviewer')->orderBy('created_at', 'desc')->get();
        $course = Course::with('coach')->find($id);
        $course->reviews = $reviews;
        return $course;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $course = Course::findOrfail($id);
        $course->update($request->all());
        return $course;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $course = Course::findOrfail($id);
        $course->delete();
        return $course;
    }

    public function purchaseCourse($id, Request $request)
    {


        $connectedUser = auth()->user();
        $coursePurchase = CoursePurchase::create([
            'card_number' => $request->cardDetails['cardNumber'],
            'card_holder_name' => $request->cardDetails['nameOnCard'],
            'card_expiration_date' => $request->cardDetails['expiryDate'],
            'card_cvv' => $request->cardDetails['cvv'],
            'start_date' => Carbon::parse($request->startDate),
            'buyer_id' => $connectedUser->id,
            'course_id' => $id,
        ]);
        return $coursePurchase;
    }

    public function reviewCourse($id, Request $request)
    {
        $connectedUser = auth()->user();
        $review = Review::create([
            'reviewer_id' => $connectedUser->id,
            'course_id' =>  $id,
            'rating' => $request->rating,
            'review' => $request->text,
        ]);
        return $review;
    }

    public function getMyCourses()
    {
        $connectedUser = auth()->user();
        $coursePurchases = CoursePurchase::where('buyer_id', $connectedUser->id)->with('course')->get();

        foreach ($coursePurchases as $coursePurchase) {
            $coursePurchase->course = Course::with('coach')->find($coursePurchase->course_id)->first();
            $coursePurchase->coach = User::find($coursePurchase->course->coach_id)->first();
        }
        return $coursePurchases;
    }

    public function isEnrolled($id)
    {
        $connectedUser = auth()->user();
        $coursePurchase = CoursePurchase::where('buyer_id', $connectedUser->id)->where('course_id', $id)->first();
        if ($coursePurchase) {
            return response()->json(['enrolled' => true]);
        } else {
            return response()->json(['enrolled' => false]);
        }
    }


    public function getGuidelines() {
        // return guidelines as a Markdown
        return response()->json(['guidelines' =>"




            ## Please follow these guidelines:
            - Courts must be watered fence to fence before every set (but not after)
            - Players must be ready to play at the scheduled time
            - Players must be on time for their matches
            - Players must be dressed in appropriate tennis attire
            - Players must be courteous to their opponents and to the officials at all times
            - Players must shake hands with their opponents before and after each match
            - Players must not use abusive language

            ## Equipment
            - Players must bring their own tennis racquets and balls
            - Players must bring their own water bottles
            - Players must bring their own towels
            - Players must bring their own sunscreen
            - Players must bring their own hats

            ## Code of behavior
            Codes of conduct/behaviour are important for clubs in establishing the expectations of members and visitors at your club. There can be different levels of the code of conduct for players, parents, coaches, officials and committee members. Below are some templates that can help your club creating your own.

            To ensure that all members, players, coaches, officials, and visitors enjoy their time at your club we recommend establishing a spectator behaviour policy and displaying it at your club. Some clubs also distribute this to their members at the start or a new membership year.


        "]);
    }

}
