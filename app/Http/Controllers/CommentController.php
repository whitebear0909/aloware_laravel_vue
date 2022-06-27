<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;
use Symfony\Component\HttpFoundation\Response as Res;
use Illuminate\Support\Facades\DB;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = DB::select("
                    WITH RECURSIVE cte AS (
                        SELECT 
                            comment_id,
                            message,
                            author,
                            parent_comment_id,
                            cast(comment_id as char) AS path,
                            0 as depth
                        FROM comments
                        WHERE parent_comment_id IS NULL
                    
                    UNION ALL
                    
                        SELECT 
                            child.comment_id,
                            child.message,
                            child.author,
                            child.parent_comment_id,
                            concat(g.path, '/', cast(child.comment_id as char)) AS path,
                            depth+1 as depth
                        FROM comments child
                        JOIN cte g
                        ON g.comment_id = child.parent_comment_id
                    )
                    SELECT comment_id,
                        parent_comment_id,
                        message,
                        author,
                        path,
                        depth
                    FROM cte order by path");

        return response($comments , Res::HTTP_OK); 
    }

    public function postComment(Request $request)
    {
        $params = $request->validate([
            'author' => 'required',
            'message' => 'required',
        ]);

        $comments = Comment::create([
                        'message' => $request->get('message'),
                        'author' => $request->get('author'),
                        'parent_comment_id' => $request->get('parent_comment_id')
                    ]);

        return response($comments , Res::HTTP_OK); 
    }
}
