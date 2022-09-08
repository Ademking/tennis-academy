<?php

namespace App\Http\Controllers;

use App\Models\CoursePurchase;
use App\Http\Requests\StoreCoursePurchaseRequest;
use App\Http\Requests\UpdateCoursePurchaseRequest;

class CoursePurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreCoursePurchaseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCoursePurchaseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CoursePurchase  $coursePurchase
     * @return \Illuminate\Http\Response
     */
    public function show(CoursePurchase $coursePurchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\CoursePurchase  $coursePurchase
     * @return \Illuminate\Http\Response
     */
    public function edit(CoursePurchase $coursePurchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateCoursePurchaseRequest  $request
     * @param  \App\Models\CoursePurchase  $coursePurchase
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCoursePurchaseRequest $request, CoursePurchase $coursePurchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CoursePurchase  $coursePurchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoursePurchase $coursePurchase)
    {
        //
    }
}
