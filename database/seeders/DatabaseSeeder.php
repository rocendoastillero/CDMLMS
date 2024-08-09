<?php

namespace Database\Seeders;

use App\Models\Subject;
use App\Models\User;
use Carbon\Carbon;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'firstname' => 'Rocendo',
            'lastname' => 'Astillero',
            'type' => 'admin',
            'email' => 'admin@lms.pnm.edu.ph',
            'phone' => '09876543211',
            'verified' => 1,
            'password' => Hash::make('deanadmin')
        ]);

        User::factory()->create([
            'firstname' => 'Ron Neil',
            'lastname' => 'Castro',
            'type' => 'user',
            'email' => 'ron@example.com',
            'phone' => '09876543212',
            'password' => Hash::make('faculty')
        ]);

        User::factory()->create([
            'firstname' => 'John',
            'lastname' => 'Doe',
            'type' => 'user',
            'email' => 'johndoe@lms.edu.ph',
            'phone' => '09876543213',
            'password' => Hash::make('faculty')
        ]);

        $subjects = [
            ['course' => 'CPE', 'code' => 'TCCALC1', 'description' => 'Calculus 1 (Differential Calculus)', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCCHEM1', 'description' => 'Chemistry fo Engineers', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEDSPL', 'description' => 'Computer Engineering as a Discipline', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEPRO1', 'description' => 'Programming Logic and Design', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'MATWRLD', 'description' => 'Mathematics in the Modern World', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'SCITECH', 'description' => 'Science, Technology and Society', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'UNDSELF', 'description' => 'Understanding the Self', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'LVITERA', 'description' => 'Living in IT Era', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'PATFIT1', 'description' => 'Physical Activity towards Health and Fitness 1', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'NSTP-01', 'description' => 'National Service Training Program 1', 'year' => '1st', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'TCCALC2', 'description' => 'Calculus 2 (Integral Calculus)', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCEPHY1', 'description' => 'Physics for Engineers', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEPRO2', 'description' => 'Object Oriented Programming', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCEDATA', 'description' => 'Engineering Data Analysis', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEMATH', 'description' => 'Discrete Mathematics', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'HISTORY', 'description' => 'Reading in Philippine History', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'GENDSOC', 'description' => 'Gender and Society', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'PATFIT2', 'description' => 'Physical Activity towards Health and Fitness 2', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'NSTP-02', 'description' => 'National Service Training Program 2', 'year' => '1st', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'TCDIFFR', 'description' => 'Differential Equation', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'ARTAPPR', 'description' => 'Art Appriciation', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEPRO3', 'description' => 'Data Structure and Algorithms', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCEECON', 'description' => 'Engineering Economics', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCTRICC', 'description' => 'Fundamentals of Electrical Circuits', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'LITEPOP', 'description' => 'Popular Culture and Literature', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCCAIDD', 'description' => 'Computer-Aided Drafting', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'ENTMIND', 'description' => 'Entrepreneural Mind', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'PATFIT3', 'description' => 'Physical Activity towards Health and Fitness 3', 'year' => '2nd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'CPENUME', 'description' => 'Numerical Methods', 'year' => '2nd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPESOFD', 'description' => 'Software Design', 'year' => '2nd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'PURPCOM', 'description' => 'Purposive Communication', 'year' => '2nd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCTRONC', 'description' => 'Fundamentals of Electronic Circuits', 'year' => '2nd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'JOSERIZ', 'description' => 'Life, Works & Writings of Dr. Jose Rizal', 'year' => '2nd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CONWRLD', 'description' => 'The Contemporary World', 'year' => '2nd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'PATFIT4', 'description' => 'Physical Activity towards Health and Fitness 4', 'year' => '2nd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'CPEOPSY', 'description' => 'Operating System', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPELOGD', 'description' => 'Logic Circuit and Design', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEDCOM', 'description' => 'Data and Digital Communication', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'TCTECHN', 'description' => 'Technoprenuership', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPECONS', 'description' => 'Feedback and Control System', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEFMSS', 'description' => 'Fundamentals of Mixed Signals and Sensors', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPECEDD', 'description' => 'Computer Engineering Drafting and Design', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPERTES', 'description' => 'COG Elective 1(Real-Time Embedded System)', 'year' => '3rd', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'CPEBOHS', 'description' => 'Basic Occupational Health and Safety', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPECANAS', 'description' =>     'Computer and Networks and Security', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEMICRO', 'description' =>     'Microprocessor', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEMOFR', 'description' => 'Methods of Research', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEIHDL', 'description' => 'Introduction to HDL', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'ETHICS1', 'description' => 'Ethics', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPELAWP', 'description' => 'CpE Laws and Professional Practice', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPESAES', 'description' => 'COG Elective 2(Stand-Alone Embedded System)', 'year' => '3rd', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'OJT 240', 'description' => 'On-the-Job Training', 'year' => '4th', 'sem' => 'intersem', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'CPEESYS', 'description' => 'Embedded System', 'year' => '4th', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPECAAO', 'description' => 'Computer Architecture and Organization', 'year' => '4th', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEETIC', 'description' => 'Emerging Technologies in CpE', 'year' => '4th', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEDES1', 'description' => 'CpE Practice and Design 1', 'year' => '4th', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEDSGP', 'description' => 'Digital Signal Processing', 'year' => '4th', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPEMAES', 'description' => 'COG Elective 3(Mobile Application Embedded System)', 'year' => '4th', 'sem' => '1st', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],

            ['course' => 'CPE', 'code' => 'CPEDES2', 'description' => 'CpE Practice and Design 2', 'year' => '4th', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')],
            ['course' => 'CPE', 'code' => 'CPESAFT', 'description' => 'Seminars and Field Trips', 'year' => '4th', 'sem' => '2nd', 'created_at' => Carbon::now()->format('Y-m-d H:i:s'), 'updated_at' => Carbon::now()->format('Y-m-d H:i:s')]
            //TODO IT Subbjects

        ];

        Subject::insert($subjects);
    }
}
