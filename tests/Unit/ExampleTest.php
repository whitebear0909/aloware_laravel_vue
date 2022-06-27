<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Http\Controllers\CommentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_example()
    {
        $commentController = new CommentController();

        $request = Request::create('/comments', 'POST',[
            'message'     =>  'test message',
            'author'  =>  'test author',
            'parent_comment_id' => null
        ]);

        $createCommentRes = $commentController->postComment($request);
        $this->assertEquals(200, $createCommentRes->getStatusCode());
        
        $getCommentsRes = $commentController->index();
        $this->assertEquals(200, $getCommentsRes->getStatusCode());
    }
}
