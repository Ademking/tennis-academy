<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\CoursePurchase;
use App\Models\Review;
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
        }
        return $coursePurchases;
    }
}
