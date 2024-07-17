<?php

namespace Database\Seeders;

    use App\Models\Subject;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'username' => 'admin',
            'firstname' => 'Rocendo',
            'lastname' => 'Astillero',
            'type' => 'admin', 
            'email' => 'admin@lms.pnm.edu.ph',
        ]);

        User::factory()->create([
            'username' => 'Ron',
            'firstname' => 'Ron Neil',
            'lastname' => 'Castro',
            'address' => 'Blk3 Lot4 P1LL Sub Urban, San Isidro, Rizal',
            'type' => 'user',
            'email' => 'ron@example.com',
        ]);

        $subjects = [
            ['code' =>'TCCALC1'	, 'description' => 'Calculus 1 (Differential Calculus)', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'TCCHEM1'	, 'description' => 'Chemistry fo Engineers', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'CPEDSPL'	, 'description' => 'Computer Engineering as a Discipline', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'CPEPRO1'	, 'description' => 'Programming Logic and Design', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'MATWRLD'	, 'description' => 'Mathematics in the Modern World', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'SCITECH'	, 'description' => 'Science, Technology and Society', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'UNDSELF'	, 'description' => 'Understanding the Self', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'LVITERA'	, 'description' => 'Living in IT Era', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'PATFIT1'	, 'description' => 'Physical Activity towards Health and Fitness 1', 'year' => '1st', 'sem' => '1st'],
            ['code' =>'NSTP-01'	, 'description' => 'National Service Training Program 1', 'year' => '1st', 'sem' => '1st'],

            ['code' =>'TCCALC2'	, 'description' => 'Calculus 2 (Integral Calculus)', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'TCEPHY1'	, 'description' => 'Physics for Engineers', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'CPEPRO2'	, 'description' => 'Object Oriented Programming', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'TCEDATA'	, 'description' => 'Engineering Data Analysis', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'CPEMATH'	, 'description' => 'Discrete Mathematics', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'HISTORY'	, 'description' => 'Reading in Philippine History', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'GENDSOC'	, 'description' => 'Gender and Society', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'PATFIT2'	, 'description' => 'Physical Activity towards Health and Fitness 2', 'year' => '1st', 'sem' => '2nd'],
            ['code' =>'NSTP-02'	, 'description' => 'National Service Training Program 2', 'year' => '1st', 'sem' => '2nd'],

            ['code' =>'TCDIFFR'	, 'description' => 'Differential Equation', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'ARTAPPR'	, 'description' => 'Art Appriciation', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'CPEPRO3'	, 'description' => 'Data Structure and Algorithms', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'TCEECON'	, 'description' => 'Engineering Economics', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'TCTRICC'	, 'description' => 'Fundamentals of Electrical Circuits', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'LITEPOP'	, 'description' => 'Popular Culture and Literature', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'TCCAIDD'	, 'description' => 'Computer-Aided Drafting', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'ENTMIND'	, 'description' => 'Entrepreneural Mind', 'year' => '2nd', 'sem' => '1st'],
            ['code' =>'PATFIT3'	, 'description' => 'Physical Activity towards Health and Fitness 3', 'year' => '2nd', 'sem' => '1st'],

            ['code' =>'CPENUME'	, 'description' => 'Numerical Methods', 'year' => '2nd', 'sem' => '2nd'],
            ['code' =>'CPESOFD'	, 'description' => 'Software Design', 'year' => '2nd', 'sem' => '2nd'],
            ['code' =>'PURPCOM'	, 'description' => 'Purposive Communication', 'year' => '2nd', 'sem' => '2nd'],
            ['code' =>'TCTRONC'	, 'description' => 'Fundamentals of Electronic Circuits', 'year' => '2nd', 'sem' => '2nd'],
            ['code' =>'JOSERIZ'	, 'description' => 'Life, Works & Writings of Dr. Jose Rizal', 'year' => '2nd', 'sem' => '2nd'],
            ['code' =>'CONWRLD'	, 'description' => 'The Contemporary World', 'year' => '2nd', 'sem' => '2nd'],
            ['code' =>'PATFIT4'	, 'description' => 'Physical Activity towards Health and Fitness 4', 'year' => '2nd', 'sem' => '2nd'],

            ['code' =>'CPEOPSY'	, 'description' => 'Operating System', 'year' => '3rd', 'sem' => '1st'],
            ['code' =>'CPELOGD'	, 'description' => 'Logic Circuit and Design', 'year' => '3rd', 'sem' => '1st'],
            ['code' =>'CPEDCOM'	, 'description' => 'Data and Digital Communication', 'year' => '3rd', 'sem' => '1st'],
            ['code' =>'TCTECHN'	, 'description' => 'Technoprenuership', 'year' => '3rd', 'sem' => '1st'],
            ['code' =>'CPECONS'	, 'description' => 'Feedback and Control System', 'year' => '3rd', 'sem' => '1st'],
            ['code' =>'CPEFMSS'	, 'description' => 'Fundamentals of Mixed Signals and Sensors', 'year' => '3rd', 'sem' => '1st'],
            ['code' =>'CPECEDD'	, 'description' => 'Computer Engineering Drafting and Design', 'year' => '3rd', 'sem' => '1st'],
            ['code' =>'CPERTES'	, 'description' => 'COG Elective 1(Real-Time Embedded System)', 'year' => '3rd', 'sem' => '1st'],

            ['code' =>'CPEBOHS'	, 'description' => 'Basic Occupational Health and Safety', 'year' => '3rd', 'sem' => '2nd'],
            ['code' =>'CPECANAS', 'description' => 	'Computer and Networks and Security', 'year' => '3rd', 'sem' => '2nd'],
            ['code' =>'CPEMICRO', 'description' => 	'Microprocessor', 'year' => '3rd', 'sem' => '2nd'],
            ['code' =>'CPEMOFR'	, 'description' => 'Methods of Research', 'year' => '3rd', 'sem' => '2nd'],
            ['code' =>'CPEIHDL'	, 'description' => 'Introduction to HDL', 'year' => '3rd', 'sem' => '2nd'],
            ['code' =>'ETHICS1'	, 'description' => 'Ethics', 'year' => '3rd', 'sem' => '2nd'],
            ['code' =>'CPELAWP'	, 'description' => 'CpE Laws and Professional Practice', 'year' => '3rd', 'sem' => '2nd'],
            ['code' =>'CPESAES'	, 'description' => 'COG Elective 2(Stand-Alone Embedded System)', 'year' => '3rd', 'sem' => '2nd'],

            ['code' =>'OJT 240'	, 'description' => 'On-the-Job Training', 'year' => '4th', 'sem' => 'intersem'],

            ['code' =>'CPEESYS'	, 'description' => 'Embedded System', 'year' => '4th', 'sem' => '1st'],
            ['code' =>'CPECAAO'	, 'description' => 'Computer Architecture and Organization', 'year' => '4th', 'sem' => '1st'],
            ['code' =>'CPEETIC'	, 'description' => 'Emerging Technologies in CpE', 'year' => '4th', 'sem' => '1st'],
            ['code' =>'CPEDES1'	, 'description' => 'CpE Practice and Design 1', 'year' => '4th', 'sem' => '1st'],
            ['code' =>'CPEDSGP'	, 'description' => 'Digital Signal Processing', 'year' => '4th', 'sem' => '1st'],
            ['code' =>'CPEMAES'	, 'description' => 'COG Elective 3(Mobile Application Embedded System)', 'year' => '4th', 'sem' => '1st'],

            ['code' =>'CPEDES2'	, 'description' => 'CpE Practice and Design 2', 'year' => '4th', 'sem' => '2nd'],
            ['code' =>'CPESAFT'	, 'description' => 'Seminars and Field Trips', 'year' => '4th', 'sem' => '2nd']
            //TODO IT Subbjects
        ];

        Subject::insert($subjects);
    }
}
