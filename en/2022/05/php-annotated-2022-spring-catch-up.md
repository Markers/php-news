[![PHP Annotated Monthly](https:/blog.jetbrains.com/wp-content/uploads/2020/01/phpstorm-PHP_Annotated_blog_1600x800.png)](https://blog.jetbrains.com/phpstorm/2022/05/php-annotated--2022-spring-catch-up/)

  

Greetings everyone,

  

It has been a while since the PHP Annotated Monthly was online, so hopefully we are back on track. With [Brent](https://twitter.com/brendt_gd) joining the PhpStorm team we want to experiment with some new things, so stay tuned!

  

In this edition, we’ll catch up on the most interesting things that have happened in the PHP world over the last couple of months. As always, it includes curated news, articles, tools, and videos.

  

  
img.alignico { margin-right: 10px; margin-top: 5px; float: left; } main ul:not(\[class\]):not(\[id\]) li, main .article-section .content ul:not(\[class\]):not(\[id\])>li { padding-bottom: 12px; } summary { display: list-item; cursor: pointer; font-style: italic; }  

News
----

  

  
*   **[PHP 7.4.29](https://www.php.net/ChangeLog-7.php#7.4.29), [PHP 8.1.5](https://www.php.net/ChangeLog-8.php#8.1.5), and [PHP 8.0.18](https://www.php.net/ChangeLog-8.php#8.0.18)**  
      
    These are security releases for Windows users, due to updates of built-in dependencies. For non-Windows users, they are just regular bug-fix updates.For PHP 7.3, updates [are no longer released](https://www.php.net/supported-versions.php), even for security problems. If you are still using PHP 7.3 or PHP 5.x versions, consider updating as soon as possible.
    
      
    
    The Symfony team has [raised](https://github.com/symfony/symfony/pull/45377) its minimum required PHP version to 8.1 in the upcoming Symfony 6.1 release. The same shift was made for [Drupal 10](https://www.drupal.org/node/3264830) and [Laravel 10](https://github.com/laravel/framework/pull/41250).
    
      
    
    Also, the recently released [Ubuntu 22.04 LTS](https://linuxconfig.org/ubuntu-22-04-features-and-release-date) comes with PHP 8.1 preinstalled.
    
  
*   **Updates from [the PHP Foundation](https://opencollective.com/phpfoundation)**  
    
      
    *   [Six sponsored developers](https://opencollective.com/phpfoundation/updates/the-php-foundation-update-march-2022) are actively working on maintaining the core.
      
    *   The [thephp.foundation](https://thephp.foundation/) website is up and running.
      
    *   A separate newsletter with insights about core developments will be published regularly. Here’s the first edition: [PHP Roundup #1](https://thephp.foundation/blog/2022/04/28/php-roundup-1/).
      
    *   [Interview with Core Developers](https://thephp.foundation/blog/2022/05/06/interview-with-core-developers/) by Sebastian Bergmann.
      
    
      
    
  
*   **[Developer Ecosystem Survey 2022](https://surveys.jetbrains.com/s3/t-developer-ecosystem-survey-2022)**  
      
    The annual survey from JetBrains is now open and, of course, there is a section about PHP. This is what the [results from last year](https://www.jetbrains.com/lp/devecosystem-2021/php/) look like. Take the survey for a chance to win one of the prizes!
  
*   **News from PHP-FIG**  
    
      
    *   [Coding Style PER (PHP Evolving Recommendation)](https://github.com/php-fig/per-coding-style) has been officially approved by PHP-FIG and will replace PSR-12. This is the first [PER](https://www.php-fig.org/bylaws/per-workflow/) document showing the “live” standard. Thanks to PERs, there will be no need to release another PSR standard every time new syntax is added to PHP. Instead, PERs will be updated according to [SemVer](https://semver.org/lang/ru/).
      
    *   A new PSR draft has been approved: [PSR-22 – Application Tracing](https://github.com/php-fig/fig-standards/blob/master/proposed/tracing.md).
      
    
      
    
  
*   **[PhpStorm 2022.1 released](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-release/)**  
      
    It comes with improvements for Blade, WordPress, ArrayShape annotations, and many more. Check out a short [What’s New](https://www.youtube.com/watch?v=gqck6bJ1JWo) video or read the [blog post](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-release/) for the full story.
  
*   **[Composer 2.3 Release](https://blog.packagist.com/composer-2-3/)**  
      
    This release brings small improvements for users and a modernized internal codebase.
    
      
    
    There was also a vulnerability discovered recently – [CVE-2022-24828: Composer Command Injection](https://blog.packagist.com/cve-2022-24828-composer-command-injection-vulnerability/). An attacker controlling a Git or Mercurial repository explicitly listed by URL in `composer.json` could use specially crafted branch names to execute commands on the machine running the composer update.
    
      
    
    Make sure your Composer is up-to-date by running `composer self-update`.
    
  
*   **[Craft CMS 4](https://craftcms.com/blog/craft-4?ref=phpannotated)**  
      
    A major update of the popular [open-source](https://github.com/craftcms/cms) CMS was released.
  

  

PHP Core
--------

  

Most of the Core news is covered in detail in the [PHP Roundup series](https://thephp.foundation/blog/2022/04/28/php-roundup-1/) from the PHP Foundation, so we’ll only mention them briefly.

  

  
*   [**Last call for PHP 8.2 release managers!**](https://externals.io/message/117595#117664)  
      
    You need to be able to commit to a 3½-year term, and have good knowledge of PHP, Git, and preferably C. There are [already](https://wiki.php.net/todo/php82#volunteers) one veteran and six rookie candidates.
  
*   ✅ [\[RFC\] Redacting parameters in back traces](https://wiki.php.net/rfc/redact_parameters_in_back_traces) #PHP8.2
  
*   ✅ [\[RFC\] Allow null and false as stand-alone types](https://wiki.php.net/rfc/null-false-standalone-types) #PHP8.2
  
*   ✅ [\[RFC\] Deprecate ${} string interpolation](https://wiki.php.net/rfc/deprecate_dollar_brace_string_interpolation) #PHP8.2
  
*   ✅ [\[RFC\] Deprecate and Remove utf8\_encode and utf8\_decode](https://wiki.php.net/rfc/remove_utf8_decode_and_utf8_encode)
  
*   ✅ [\[RFC\] Undefined Variable Error Promotion](https://wiki.php.net/rfc/undefined_variable_error_promotion)
  
*   🗳 [\[RFC\] Readonly classes](https://wiki.php.net/rfc/readonly_classes)
  
*   ❌ [\[RFC\] Sealed Classes](https://wiki.php.net/rfc/sealed_classes)
  
*   🆕 [\[RFC\] Add true type](https://wiki.php.net/rfc/true-type)
  
*   🆕 [\[RFC\] Disjunctive Normal Form Types](https://wiki.php.net/rfc/dnf_types)
  
*   [\[RFC\] final class CollectionsDeque](https://wiki.php.net/rfc/deque)  
      
    As part of an initiative to add optimized data structures to PHP, the first proposal is ready.  
      
    `Deque` – This is a two-way queue, i.e. items can be added and removed both at the beginning and at the end. It can be used instead of `SplQueue` or `SplDoublyLinkedList` to get a performance gain and reduce memory consumption.
  
*   [RFC Introduce a class-string type](https://gist.github.com/cspray/0f4e67e8731a8ea9382147707e75287f)  
      
    It’s not an official RFC, but an interesting idea to make class-string a real type, as it’s already widely used in static analyzers’ annotations.
  

  

Tools
-----

  

  
*   [CanIPHP.com](https://caniphp.com/) – It’s like caniuse.com, but for PHP features.
  
*   [clue/stream-filter](https://github.com/clue/stream-filter) – A simple and modern approach to stream filtering in PHP. You can do some [crazy stuff](https://github.com/jaem3l/unfuck) with stream filters in PHP, but also [practical things](https://github.com/dg/bypass-finals), too.
  
*   [sfx101/deck](https://github.com/sfx101/deck) – A GUI tool for quick spin-up and configuration of local web development environments, which could be useful for PHP newcomers.
  
*   [marijnvanwezel/try](https://github.com/marijnvanwezel/try) – A simple CLI tool to try Composer packages with a single command. Just install it and run: `try %vendor%/%package%`.
  
*   [frodeborli/moebius](https://github.com/frodeborli/moebius) – Golang-like coroutines for PHP versions 8.1 or above. The author used his own event-loop implementation, and even a custom testing framework.
  
*   [Crell/AttributeUtils](https://github.com/Crell/AttributeUtils) — Utilities to help ease the parsing and managing of attributes. You might be also interested in [koriym/Koriym.Attributes](https://github.com/koriym/Koriym.Attributes), which can read both doctrine/annotations and PHP 8 attributes with a doctrine annotation interface.
  
*   [spatie/visit](https://github.com/spatie/visit) – A CLI HTTP client that shows responses of any URL in a beautiful way.
  
*   [laravel/valet](https://github.com/laravel/valet) – A lightweight local dev environment for Mac. No Docker or VirtualBox, just native Nginx and PHP. It can be used for any projects, not only Laravel, and since v3 you can use [different PHP versions](https://laravel.com/docs/9.x/valet#per-site-php-versions) for each folder (project).
  
*   [roach-php/core](https://github.com/roach-php/core) – The complete web scraping toolkit for PHP.
  
*   [PHPStan 1.6.0](https://phpstan.org/blog/phpstan-1-6-0-with-conditional-return-types) – Released with support for conditional return types and integer masks.
  
*   [flow-php/etl](https://github.com/flow-php/etl) – An ETL (Extract Transform Load) data processing library for PHP with support for async processing via ReactPHP or Amphp.
  
*   [igorhrcek/wp-cli-secure-command](https://github.com/igorhrcek/wp-cli-secure-command/) – One CLI command to secure your WordPress installation.
  
*   [williarin/wordpress-interop](https://github.com/williarin/wordpress-interop) – A package based on Doctrine/DBAL for easier access to the WordPress database from other PHP applications.
  
*   [sj-i/php-profiler](https://github.com/sj-i/php-profiler) – A sampling profiler for PHP implemented in pure PHP (FFI). You can generate flame diagrams, run trace output in top-like mode, and more.
  
*   [mrsuh/php-var-sizeof](https://github.com/mrsuh/php-var-sizeof) – A function to get the memory size for any variable that promises to be more accurate [compared to memory\_get\_usage()](https://github.com/mrsuh/php-var-sizeof#var_sizeof-vs-memory_get_usage). Requires PHP 7.4 or higher with FFI.
  
*   [davidcole1340/ext-php-rs](https://github.com/davidcole1340/ext-php-rs) – Bindings for the Zend API to build PHP extensions natively in Rust.
  
*   [easysoft/phpmicro](https://github.com/easysoft/phpmicro) – A statically compiled micro PHP interpreter that can be bundled with your CLI tools to distribute them as PHP-agnostic binaries. Looking [forward](https://twitter.com/marcelpociot/status/1498244220620099588) to Marcel Pociot automating the process!
  

  

Symfony
-------

  

  
*   See [what’s coming in Symfony 6.1](https://symfony.com/blog/category/living-on-the-edge/6.1).
  
*   📺 [Harmonious Development with Symfony 6](https://symfonycasts.com/screencast/symfony) – The 2+ hour tutorial for getting started with Symfony is now fully available for free at SymfonyCasts.
  
*   [Using Symfony Form in WordPress](https://jolicode.com/blog/using-symfony-form-in-wordpress).
  
*   [“Symfony: The Fast Track” Symfony](https://symfony.com/book) is now available for Symfony 6.
  
*   [Symfony Station Communiqué – April 29, 2022](https://www.symfonystation.com/Symfony-Station-Communique-29-April-2022).
  

  

Laravel
-------

  

  
*   📺 [Laravel Origins: The Documentary](https://www.youtube.com/watch?v=mH7cgoX3K0g) – This video tells the story of why Laravel came to be, how it’s grown over the last 10 years, and what the future may hold for Taylor and the wider Laravel community.
  
*   [Laravel Idea 5.3](https://laravel-idea.com/blog/2022/5-3-release) – An update to the popular paid PhpStorm plugin comes with the Extract Blade Component refactoring, translation values, and advanced event listeners search.
  
*   [LaravelProTips.com](https://laravelprotips.com/) – A collection of useful articles and tweets.
  
*   [alexeymezenin/laravel-best-practices](https://github.com/alexeymezenin/laravel-best-practices) – More Laravel best practices.
  
*   📺 [Build a Laravel app and deploy it to production in 5 hours](https://www.youtube.com/watch?v=mmtVkDh9RGw) – A speedrun by Brent.
  
*   📺 [Xdebug 3: Laravel Sail with PhpStorm](https://www.youtube.com/watch?v=Xgn0EtB4chc).
  

  

Yii
---

  

  
*   [Yii news 2022, issue 1](https://opencollective.com/yiisoft/updates/yii-news-2022-issue-1).
  
*   [Interview Questions For Yii 2](https://www.yiiframework.com/wiki/2570/interview-questions-for-yii2) – Many of them are about PHP in general and can be useful for all job-seekers.
  

  

Misc
----

  

  
*   Comprehensive posts about [Docker for PHP developers](https://www.pascallandau.com/docker-php-tutorial/) by Pascal Landau: [Docker from scratch for PHP 8.1 Applications in 2022](https://www.pascallandau.com/blog/docker-from-scratch-for-php-applications-in-2022/), [PhpStorm, Docker and Xdebug 3 on PHP 8.1](https://www.pascallandau.com/blog/phpstorm-docker-xdebug-3-php-8-1-in-2022/), and more on his [website](https://www.pascallandau.com/blog/).
  
*   Posts on naming constructors [by Andreas Möller](https://localheinz.com/blog/2022/03/26/naming-constructors/) and [by Stefan Priebsch](https://thephp.cc/articles/how-do-you-name-constructors).
  
*   [How the Middleware Pattern works](https://doeken.org/blog/middleware-pattern-in-php) and can easily be applied in PHP.
  
*   [How To Mock Functions That Have External HTTP Requests](https://hermanradtke.com/how-to-mock-functions-that-have-external-http-requests/).
  
*   [Writing Readable PHP](https://writing-readable-php.com/) – A paid course by Freek Van der Herten and Christoph Rumpel with bite size tips that make your code a joy to read for you, your coworkers, and your future self.
  
*   [PHP Tricks: Multi-value match()](https://peakd.com/hive-168588/@crell/php-tricks-multi-value-match) — Did you know you can compare multiple values in a single match expression? Like this:  
      
    
    function mayFriend(User $u1, User $u2, Group $group): FriendPermission  
    {  
        return match (\[$u1->inGroup($group), $u2->inGroup($group)\]) {  
            \[true, true\] => FriendPermission::Allow,  
            \[true, false\] => FriendPermission::WithApproval,  
            \[false, true\] => FriendPermission::WithApproval,  
            \[false, false\] => FriendPermission::Deny,  
        };  
    }  
    
      
    
  
*   [Interfaces are not class templates](https://www.exakat.io/en/interfaces-are-not-class-templates/).
  
*   [Speeding up array\_merge()](https://www.exakat.io/en/speeding-up-array_merge/).
  
*   [All the Dynamic Syntaxes in PHP](https://www.exakat.io/en/all-the-dynamic-syntaxes-in-php/) – Good source for interview questions?
  
*   [Solving Open Source Supply Chain Security for the PHP Ecosystem](https://paragonie.com/blog/2022/01/solving-open-source-supply-chain-security-for-php-ecosystem) – An interesting post about the initiatives of the folks at Paragon IE. They are now working on a tool called [Gossamer](https://gossamer.tools/) to securely update apps and dependencies. Previously, they introduced libsodium to the PHP core, created [Paseto](https://github.com/paragonie/paseto), a safer alternative to JWT, and developed [other tools](https://github.com/paragonie).
  
*   [Service locator: an anti-pattern](https://stitcher.io/blog/service-locator-anti-pattern).
  
*   📺 [Xdebug 3: Debugging Unit Tests with PhpStorm](https://www.youtube.com/watch?v=WMGYfgzoap0).
  
*   📺 [Learn PHP The Right Way](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) – Full PHP course in 88 videos for free.
  

  

**Generics**
------------

  

PHP has seen a lot of generics-related activity lately, so we gave them their own section in this post.

  

  
*   📺 First, check out this series of videos on [Generics in PHP](https://www.youtube.com/watch?v=c8hQ1fWU_mQ&list=PL0bgkxUS9EaKyOugEDffRzsvupBE2YEoD) from Brent.
  
*   If you’d like to dive deeper, you might be interested in the post about [Generics implementation approaches](https://dev.to/mrsuh/generics-implementation-approaches-3bf0).
  
*   Try an interesting project that implements them in PHP: [mrsuh/php-generics](https://github.com/mrsuh/php-generics). Interestingly, there was a [discussion on Reddit](https://www.reddit.com/r/PHP/comments/ta5d4u/php_perfomance_mode_yay_or_nay/) about dropping the runtime type checks in PHP for performance. The tool above [implements type erasure](https://github.com/mrsuh/php-generics#type-erasure), so it could theoretically be used for such performance use cases: `composer dump-generics --type=type-erasure`.
  
*   One of the main applications of generics is collections. Check out [Comparing PHP Collections](https://dev.to/mrsuh/comparing-php-collections-5cca).
  
*   And last but not least, fun art by [@SerafimArts](https://github.com/SerafimArts): ![](https://blog.jetbrains.com/wp-content/uploads/2022/05/generics.gif)
  

  

Community
---------

  

  
*   📺 [PHP isn’t dead, featuring the Laravel Origins cast](https://www.youtube.com/watch?v=PXx9_FFZi8A).
  
*     
    
    >   
    > 
    > PHP is definitely the best array-oriented programming language
    > 
    >   
    > 
    > — Jose Diaz (@savant) [April 28, 2022](https://twitter.com/savant/status/1519785011381161984?ref_src=twsrc%5Etfw)
    
      
    
  
*     
    
    >   
    > 
    > “PHP doeSNt sCaLE”
    > 
    >   
    > 
    > ☁️ Reached 99.999% (five nines) REAL uptime for ALL my sites on a SINGLE 🤖 VPS w/ 204M reqs/mo [https://t.co/s1FQtjucz2](https://t.co/s1FQtjucz2)
    > 
    >   
    > 
    > “five nines is high availability of services, when the downtime is less than 5 minutes per year”
    > 
    >   
    > 
    > 🥳 [pic.twitter.com/VEM1Kcc5Gw](https://t.co/VEM1Kcc5Gw)
    > 
    >   
    > 
    > — @levelsio (@levelsio) [April 30, 2022](https://twitter.com/levelsio/status/1520354529421983745?ref_src=twsrc%5Etfw)
    
      
    
  

  

* * *

  

That’s all for today – thanks for reading!

  

If you have any interesting or useful links to share via PHP Annotated, please leave a comment on this post or send me a [tweet](https://twitter.com/pronskiy).

  

[Subscribe to PHP Annotated](https://info.jetbrains.com/PHP-Annotated-Subscription.html "Complete this form and get PHP Annotated Monthly delivered fresh to your email")

  

_Your JetBrains PhpStorm team_  
  
_The Drive to Develop_