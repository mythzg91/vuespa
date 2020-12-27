<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // 开始之前先清空相关数据表
        User::truncate();
        Category::truncate();
        Post::truncate();

        // 创建一个测试用户
        $user = User::factory([
            'name' => '测试账号',
            'email' => 'test@xueyuanjun.com',
            'password' => Hash::make('password'),
        ])->create();

        // 创建三个测试分类
        $cnames = ['PHP', 'Golang', 'Javascript'];
        foreach ($cnames as $cname) {
            $category = Category::factory(['name' => $cname])->create();
            // 为每个分类创建 100 篇文章
            Post::factory([
                    'category_id' => $category->id,
                    'user_id' => $user->id
                ])
                ->count(100)
                ->create();
        }
    }
}
