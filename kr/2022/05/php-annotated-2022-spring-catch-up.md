[![PHP Annotated Monthly](https://blog.jetbrains.com/wp-content/uploads/2020/01/phpstorm-PHP_Annotated_blog_1600x800.png)](https://blog.jetbrains.com/phpstorm/2022/05/php-annotated--2022-spring-catch-up/)

안녕하세요 여러분,

PHP Annotated ~~Monthly~~가 온라인 상태가 된지 오래되었으므로 정상으로 돌아오길 바랍니다. [Brent](https://twitter.com/brendt_gd)가 PhpStorm 팀에 합류하면서
새로운 시도를 해보고 싶으니 계속 지켜봐 주세요!

이번 2022년 5월 호에서 지난 몇 달 동안 PHP 세계에서 일어난 가장 흥미로운 일들을 다룰 것입니다. 항상 그렇듯이 여기에는 선별된 뉴스, 기사, 도구 및 비디오가 포함됩니다.

News
----

* **[PHP 7.4.29](https://www.php.net/ChangeLog-7.php#7.4.29), [PHP 8.1.5](https://www.php.net/ChangeLog-8.php#8.1.5),
  and [PHP 8.0.18](https://www.php.net/ChangeLog-8.php#8.0.18)**

이것은 기본 제공 종속성의 업데이트로 인한 Windows 사용자를 위한 보안 릴리스입니다. Windows가 아닌 사용자의 경우 일반적인 버그 수정 업데이트일 뿐입니다. PHP 7.3는 보안 문제에
대해서도 [더 이상 릴리스되지 않습니다](https://www.php.net/supported-versions.php). PHP 7.3 또는 PHP 5.x 버전을 계속 사용하고 있다면 가능한 한 빨리 업데이트하는
것이 좋습니다.

Symfony 팀은 다가오는 Symfony 6.1 릴리스에서 최소 필수 PHP 버전을 8.1로 [업그레이드](https://github.com/symfony/symfony/pull/45377) 했습니다.
[Drupal 10](https://www.drupal.org/node/3264830) 및 [라라벨 10](https://github.com/laravel/framework/pull/41250) 에서도 동일한 변화가
발생했습니다.

또한 최근 출시된 [Ubuntu 22.04 LTS](https://linuxconfig.org/ubuntu-22-04-features-and-release-date) 에는 PHP 8.1이 기본적으로 설치되어
있습니다.

* **[PHP 재단(The PHP Foundation)](https://opencollective.com/phpfoundation) 의 업데이트**

    * [6명의 스폰서 개발자](https://opencollective.com/phpfoundation/updates/the-php-foundation-update-march-2022) 가 적극적으로 코어
      유지에 나서고 있다.
    * The [thephp.foundation](https://thephp.foundation/) website is up and running.
    * 핵심 개발에 대한 통찰력이 담긴 별도의 뉴스레터가 정기적으로 발행될 것입니다. 다음은 첫 번째
      에디션입니다. : [PHP 라운드 업 #1](https://thephp.foundation/blog/2022/04/28/php-roundup-1/).
    * [코어 개발자 인터뷰](https://thephp.foundation/blog/2022/05/06/interview-with-core-developers/) by 세바스티안 버그만(Sebastian
      Bergmann).

* **[개발자 생태계 설문조사 2022](https://surveys.jetbrains.com/s3/t-developer-ecosystem-survey-2022)**

  이제 JetBrains의 연례 설문조사가 시작되었으며 물론 PHP에 대한 섹션도 있습니다. [작년 결과](https://www.jetbrains.com/lp/devecosystem-2021/php/) 의
  모습입니다. 설문조사에 참여하여 경품 중 하나를 받을 수 있는 기회를 잡으세요!

* **PHP-FIG의 뉴스**

    * [코딩 스타일 PER(PHP Evolving Recommendation)](https://github.com/php-fig/per-coding-style) PHP-FIG의 공식 승인을 받았으며
      PSR-12를 대체합니다. 이것은 "라이브" 표준을 보여주는 최초의 [PER](https://www.php-fig.org/bylaws/per-workflow/) 문서입니다. PER 덕분에 PHP에 새로운
      구문이 추가될 때마다 다른 PSR 표준을 발표할 필요가 없습니다. 대신 [SemVer](https://semver.org/lang/ru/) 에 따라 PER이 업데이트됩니다.

    * 새로운 PSR 초안이
      승인되었습니다: [PSR-22 – 애플리케이션 추적(Application Tracing)](https://github.com/php-fig/fig-standards/blob/master/proposed/tracing.md)

* **[새로 출시된 PhpStorm 2022.1](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-release/)**
  Blade, WordPress, ArrayShape 주석 등에 대한 개선 사항이 함께 제공됩니다. 짧은 [What's New](https://www.youtube.com/watch?v=gqck6bJ1JWo) 동영상을
  확인하거나 [블로그 게시물](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-release/) 에서 전체 스토리를 확인하세요.

* **[새로 출시된 Composer 2.3](https://blog.packagist.com/composer-2-3/)**

  이 릴리스는 사용자와 현대화된 내부 코드베이스를 위한 약간의 개선 사항을 제공합니다.

  최근에 발견된 취약점도 있었습니다.
  – [CVE-2022-24828: 컴포저 커멘트 인젝션](https://blog.packagist.com/cve-2022-24828-composer-command-injection-vulnerability/). 
  `composer.json`의 URL로 명시적으로 나열된 Git 또는 Mercurial 리포지토리를 제어하는 공격자는 특수하게 제작된 분기 이름을 사용하여 Composer 업데이트를 실행하는 시스템에서 명령을 실행할 수 있습니다.


  다음을 실행하여 Composer가 최신 상태인지 확인하십시오. `composer self-update`.

* **[크래프트 CMS 4](https://craftcms.com/blog/craft-4?ref=phpannotated)**

  인기 있는 [오픈 소스](https://github.com/craftcms/cms) CMS의 주요 업데이트가 릴리스되었습니다.

PHP Core
--------

Core 뉴스의 대부분은 PHP Foundation의 [PHP Roundup 시리즈](https://thephp.foundation/blog/2022/04/28/php-roundup-1/) 에서 자세히 다루므로 간략하게만 언급하겠습니다.

* [**PHP 8.2 릴리스 메니저를 위한 마지막 요청입니다!**](https://externals.io/message/117595#117664)

  3년 반을 약정할 수 있어야 하고 PHP, Git 및 C에 대한 지식이 있어야 합니다. [이미](https://wiki.php.net/todo/php82#volunteers) 베테랑 1명, 신인 6명 등 총 6명의 후보가 있습니다.

* ✅ [[RFC] 백 트레이스의 파라메터 리팩토링](https://wiki.php.net/rfc/redact_parameters_in_back_traces) #PHP8.2

* ✅ [[RFC] null 및 false를 독립 실행형 형식으로 허용](https://wiki.php.net/rfc/null-false-standalone-types) #PHP8.2

* ✅ [[RFC] ${} 문자열 사용 중단](https://wiki.php.net/rfc/deprecate_dollar_brace_string_interpolation) # PHP8.2

* ✅ [[RFC] utf8_encode 및 utf8_decode 사용 중단 및 제거](https://wiki.php.net/rfc/remove_utf8_decode_and_utf8_encode)

* ✅ [[RFC] 정의되지 않은 변수 에러 허용](https://wiki.php.net/rfc/undefined_variable_error_promotion)

* 🗳 [[RFC] 읽기 전용 클래스 (Readonly classes)](https://wiki.php.net/rfc/readonly_classes)

* ❌ [[RFC] 추상 클래스 (Sealed Classes)](https://wiki.php.net/rfc/sealed_classes)

* 🆕 [[RFC] true 타입 추가](https://wiki.php.net/rfc/true-type)

* 🆕 [[RFC] 분리정규형 타입 (Disjunctive Normal Form Types)](https://wiki.php.net/rfc/dnf_types)

* [[RFC] final class CollectionsDeque](https://wiki.php.net/rfc/deque)

  PHP에 최적화된 데이터 구조를 추가하려는 계획의 일환으로 첫 번째 제안이 준비되었습니다.

  `Deque` – 양방향 큐입니다. 즉, 시작과 끝에서 항목을 추가 및 제거할 수 있습니다. `SplQueue` 또는 `SplDoublyLinkedList` 대신 사용하여 성능을 높이고 메모리 소비를 줄일 수 있습니다.

* [RFC class-string 타입 도입](https://gist.github.com/cspray/0f4e67e8731a8ea9382147707e75287f)

  공식적인 RFC는 아니지만, 정적 분석기의 주석에서 이미 널리 사용되는 class-string 을 실제 유형으로 만드는 흥미로운 아이디어입니다.

Tools
-----

* [CanIPHP.com](https://caniphp.com/) – It’s like caniuse.com, but for PHP features.

* [clue/stream-filter](https://github.com/clue/stream-filter) – A simple and modern approach to stream filtering in PHP.
  You can do some [crazy stuff](https://github.com/jaem3l/unfuck) with stream filters in PHP, but
  also [practical things](https://github.com/dg/bypass-finals), too.

* [sfx101/deck](https://github.com/sfx101/deck) – A GUI tool for quick spin-up and configuration of local web
  development environments, which could be useful for PHP newcomers.

* [marijnvanwezel/try](https://github.com/marijnvanwezel/try) – A simple CLI tool to try Composer packages with a single
  command. Just install it and run: `try %vendor%/%package%`.

* [frodeborli/moebius](https://github.com/frodeborli/moebius) – Golang-like coroutines for PHP versions 8.1 or above.
  The author used his own event-loop implementation, and even a custom testing framework.

* [Crell/AttributeUtils](https://github.com/Crell/AttributeUtils) — Utilities to help ease the parsing and managing of
  attributes. You might be also interested in [koriym/Koriym.Attributes](https://github.com/koriym/Koriym.Attributes),
  which can read both doctrine/annotations and PHP 8 attributes with a doctrine annotation interface.

* [spatie/visit](https://github.com/spatie/visit) – A CLI HTTP client that shows responses of any URL in a beautiful
  way.

* [laravel/valet](https://github.com/laravel/valet) – A lightweight local dev environment for Mac. No Docker or
  VirtualBox, just native Nginx and PHP. It can be used for any projects, not only Laravel, and since v3 you can
  use [different PHP versions](https://laravel.com/docs/9.x/valet#per-site-php-versions) for each folder (project).

* [roach-php/core](https://github.com/roach-php/core) – The complete web scraping toolkit for PHP.

* [PHPStan 1.6.0](https://phpstan.org/blog/phpstan-1-6-0-with-conditional-return-types) – Released with support for
  conditional return types and integer masks.

* [flow-php/etl](https://github.com/flow-php/etl) – An ETL (Extract Transform Load) data processing library for PHP with
  support for async processing via ReactPHP or Amphp.

* [igorhrcek/wp-cli-secure-command](https://github.com/igorhrcek/wp-cli-secure-command/) – One CLI command to secure
  your WordPress installation.

* [williarin/wordpress-interop](https://github.com/williarin/wordpress-interop) – A package based on Doctrine/DBAL for
  easier access to the WordPress database from other PHP applications.

* [sj-i/php-profiler](https://github.com/sj-i/php-profiler) – A sampling profiler for PHP implemented in pure PHP (FFI).
  You can generate flame diagrams, run trace output in top-like mode, and more.

* [mrsuh/php-var-sizeof](https://github.com/mrsuh/php-var-sizeof) – A function to get the memory size for any variable
  that promises to be more
  accurate [compared to memory_get_usage()](https://github.com/mrsuh/php-var-sizeof#var_sizeof-vs-memory_get_usage).
  Requires PHP 7.4 or higher with FFI.

* [davidcole1340/ext-php-rs](https://github.com/davidcole1340/ext-php-rs) – Bindings for the Zend API to build PHP
  extensions natively in Rust.

* [easysoft/phpmicro](https://github.com/easysoft/phpmicro) – A statically compiled micro PHP interpreter that can be
  bundled with your CLI tools to distribute them as PHP-agnostic binaries.
  Looking [forward](https://twitter.com/marcelpociot/status/1498244220620099588) to Marcel Pociot automating the
  process!

Symfony
-------

* See [what’s coming in Symfony 6.1](https://symfony.com/blog/category/living-on-the-edge/6.1).

* 📺 [Harmonious Development with Symfony 6](https://symfonycasts.com/screencast/symfony) – The 2+ hour tutorial for
  getting started with Symfony is now fully available for free at SymfonyCasts.

* [Using Symfony Form in WordPress](https://jolicode.com/blog/using-symfony-form-in-wordpress).

* [“Symfony: The Fast Track” Symfony](https://symfony.com/book) is now available for Symfony 6.

* [Symfony Station Communiqué – April 29, 2022](https://www.symfonystation.com/Symfony-Station-Communique-29-April-2022)
  .

Laravel
-------

* 📺 [Laravel Origins: The Documentary](https://www.youtube.com/watch?v=mH7cgoX3K0g) – This video tells the story of why
  Laravel came to be, how it’s grown over the last 10 years, and what the future may hold for Taylor and the wider
  Laravel community.

* [Laravel Idea 5.3](https://laravel-idea.com/blog/2022/5-3-release) – An update to the popular paid PhpStorm plugin
  comes with the Extract Blade Component refactoring, translation values, and advanced event listeners search.

* [LaravelProTips.com](https://laravelprotips.com/) – A collection of useful articles and tweets.

* [alexeymezenin/laravel-best-practices](https://github.com/alexeymezenin/laravel-best-practices) – More Laravel best
  practices.

* 📺 [Build a Laravel app and deploy it to production in 5 hours](https://www.youtube.com/watch?v=mmtVkDh9RGw) – A
  speedrun by Brent.

* 📺 [Xdebug 3: Laravel Sail with PhpStorm](https://www.youtube.com/watch?v=Xgn0EtB4chc).

Yii
---

* [Yii news 2022, issue 1](https://opencollective.com/yiisoft/updates/yii-news-2022-issue-1).

* [Interview Questions For Yii 2](https://www.yiiframework.com/wiki/2570/interview-questions-for-yii2) – Many of them
  are about PHP in general and can be useful for all job-seekers.

Misc
----

* Comprehensive posts about [Docker for PHP developers](https://www.pascallandau.com/docker-php-tutorial/) by Pascal
  Landau: [Docker from scratch for PHP 8.1 Applications in 2022](https://www.pascallandau.com/blog/docker-from-scratch-for-php-applications-in-2022/)
  , [PhpStorm, Docker and Xdebug 3 on PHP 8.1](https://www.pascallandau.com/blog/phpstorm-docker-xdebug-3-php-8-1-in-2022/)
  , and more on his [website](https://www.pascallandau.com/blog/).

* Posts on naming constructors [by Andreas Möller](https://localheinz.com/blog/2022/03/26/naming-constructors/)
  and [by Stefan Priebsch](https://thephp.cc/articles/how-do-you-name-constructors).

* [How the Middleware Pattern works](https://doeken.org/blog/middleware-pattern-in-php) and can easily be applied in
  PHP.

* [How To Mock Functions That Have External HTTP Requests](https://hermanradtke.com/how-to-mock-functions-that-have-external-http-requests/)
  .

* [Writing Readable PHP](https://writing-readable-php.com/) – A paid course by Freek Van der Herten and Christoph Rumpel
  with bite size tips that make your code a joy to read for you, your coworkers, and your future self.

* [PHP Tricks: Multi-value match()](https://peakd.com/hive-168588/@crell/php-tricks-multi-value-match) — Did you know
  you can compare multiple values in a single match expression? Like this:

```php
function mayFriend(User $u1, User $u2, Group $group): FriendPermission  
{
    return match ([$u1->inGroup($group), $u2->inGroup($group)]) {
        [true, true] => FriendPermission::Allow,  
        [true, false] => FriendPermission::WithApproval,  
        [false, true] => FriendPermission::WithApproval,  
        [false, false] => FriendPermission::Deny,  
    };  
}
```

* [Interfaces are not class templates](https://www.exakat.io/en/interfaces-are-not-class-templates/).

* [Speeding up array_merge()](https://www.exakat.io/en/speeding-up-array_merge/).

* [All the Dynamic Syntaxes in PHP](https://www.exakat.io/en/all-the-dynamic-syntaxes-in-php/) – Good source for
  interview questions?

* [Solving Open Source Supply Chain Security for the PHP Ecosystem](https://paragonie.com/blog/2022/01/solving-open-source-supply-chain-security-for-php-ecosystem)
  – An interesting post about the initiatives of the folks at Paragon IE. They are now working on a tool
  called [Gossamer](https://gossamer.tools/) to securely update apps and dependencies. Previously, they introduced
  libsodium to the PHP core, created [Paseto](https://github.com/paragonie/paseto), a safer alternative to JWT, and
  developed [other tools](https://github.com/paragonie).

* [Service locator: an anti-pattern](https://stitcher.io/blog/service-locator-anti-pattern).

* 📺 [Xdebug 3: Debugging Unit Tests with PhpStorm](https://www.youtube.com/watch?v=WMGYfgzoap0).

* 📺 [Learn PHP The Right Way](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) – Full PHP
  course in 88 videos for free.

**Generics**
------------



PHP has seen a lot of generics-related activity lately, so we gave them their own section in this post.

* 📺 First, check out this series of videos
  on [Generics in PHP](https://www.youtube.com/watch?v=c8hQ1fWU_mQ&list=PL0bgkxUS9EaKyOugEDffRzsvupBE2YEoD) from Brent.

* If you’d like to dive deeper, you might be interested in the post
  about [Generics implementation approaches](https://dev.to/mrsuh/generics-implementation-approaches-3bf0).

* Try an interesting project that implements them in PHP: [mrsuh/php-generics](https://github.com/mrsuh/php-generics).
  Interestingly, there was
  a [discussion on Reddit](https://www.reddit.com/r/PHP/comments/ta5d4u/php_perfomance_mode_yay_or_nay/) about dropping
  the runtime type checks in PHP for performance. The tool
  above [implements type erasure](https://github.com/mrsuh/php-generics#type-erasure), so it could theoretically be used
  for such performance use cases: `composer dump-generics --type=type-erasure`.

* One of the main applications of generics is collections. Check
  out [Comparing PHP Collections](https://dev.to/mrsuh/comparing-php-collections-5cca).

* And last but not least, fun art by [@SerafimArts](https://github.com/SerafimArts):

![](https://blog.jetbrains.com/wp-content/uploads/2022/05/generics.gif)
