<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('files', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->string('name');
            $table->string('type');
            $table->string('path');
            $table->string('size');
            $table->timestamps();
        });


        // Schema::create('exams', function (Blueprint $table){
        //     $table->id();
        //     $table->foreignIdFor(User::class);
        //     $table->foreignIdFor(Subject::class);
        //     $table->string('name');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files');
    }
};
