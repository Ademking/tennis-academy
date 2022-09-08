<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCoursePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_purchases', function (Blueprint $table) {
            $table->id();
            $table->string('card_number');
            $table->string('card_holder_name');
            $table->string('card_expiration_date');
            $table->string('card_cvv');
            $table->date('start_date');
            $table->foreignId('buyer_id')->references('id')->on('users')->onDelete('no action');
            $table->foreignId('course_id')->references('id')->on('courses')->onDelete('no action');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('course_purchases');
    }
}
