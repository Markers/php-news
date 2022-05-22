[![PHP Annotated Monthly](https://blog.jetbrains.com/wp-content/uploads/2020/01/phpstorm-PHP_Annotated_blog_1600x800.png)](https://blog.jetbrains.com/phpstorm/2022/05/php-annotated--2022-spring-catch-up/)

안녕하세요 여러분,

PHP Annotated ~~Monthly~~가 온라인 상태가 된지 오래되었으므로 정상으로 돌아오길 바랍니다. [Brent](https://twitter.com/brendt_gd)가 PhpStorm 팀에 합류하면서 새로운 시도를 해보고 싶으니 계속 지켜봐 주세요!

이번 2022년 5월 호에서 지난 몇 달 동안 PHP 세계에서 일어난 가장 흥미로운 일들을 다룰 것입니다. 항상 그렇듯이 여기에는 선별된 뉴스, 기사, 도구 및 비디오가 포함됩니다.

News
----

* **[PHP 7.4.29](https://www.php.net/ChangeLog-7.php#7.4.29), [PHP 8.1.5](https://www.php.net/ChangeLog-8.php#8.1.5), and [PHP 8.0.18](https://www.php.net/ChangeLog-8.php#8.0.18)**

이것은 기본 제공 종속성의 업데이트로 인한 Windows 사용자를 위한 보안 릴리스입니다. Windows가 아닌 사용자의 경우 일반적인 버그 수정 업데이트일 뿐입니다. PHP 7.3는 보안 문제에 대해서도 [더 이상 릴리스되지 않습니다](https://www.php.net/supported-versions.php). PHP 7.3 또는 PHP 5.x 버전을 계속 사용하고 있다면 가능한 한 빨리 업데이트하는 것이 좋습니다.

Symfony 팀은 다가오는 Symfony 6.1 릴리스에서 최소 필수 PHP 버전을 8.1로 [업그레이드](https://github.com/symfony/symfony/pull/45377) 했습니다.
[Drupal 10](https://www.drupal.org/node/3264830) 및 [라라벨 10](https://github.com/laravel/framework/pull/41250) 에서도 동일한 변화가 발생했습니다.

또한 최근 출시된 [Ubuntu 22.04 LTS](https://linuxconfig.org/ubuntu-22-04-features-and-release-date) 에는 PHP 8.1이 기본적으로 설치되어 있습니다.

* **[PHP 재단(The PHP Foundation)](https://opencollective.com/phpfoundation) 의 업데이트**

    * [6명의 스폰서 개발자](https://opencollective.com/phpfoundation/updates/the-php-foundation-update-march-2022) 가 적극적으로 코어
      유지에 나서고 있다.
    * The [thephp.foundation](https://thephp.foundation/) website is up and running.
    * 핵심 개발에 대한 통찰력이 담긴 별도의 뉴스레터가 정기적으로 발행될 것입니다. 다음은 첫 번째
      에디션입니다. : [PHP 라운드 업 #1](https://thephp.foundation/blog/2022/04/28/php-roundup-1/).
    * [코어 개발자 인터뷰](https://thephp.foundation/blog/2022/05/06/interview-with-core-developers/) by 세바스티안 버그만(Sebastian
      Bergmann).

* **[개발자 생태계 설문조사 2022](https://surveys.jetbrains.com/s3/t-developer-ecosystem-survey-2022)**

  이제 JetBrains의 연례 설문조사가 시작되었으며 물론 PHP에 대한 섹션도 있습니다. [작년 결과](https://www.jetbrains.com/lp/devecosystem-2021/php/) 의 모습입니다. 설문조사에 참여하여 경품 중 하나를 받을 수 있는 기회를 잡으세요!

* **PHP-FIG의 뉴스**

    * [코딩 스타일 PER(PHP Evolving Recommendation)](https://github.com/php-fig/per-coding-style) PHP-FIG의 공식 승인을 받았으며 PSR-12를 대체합니다. 
    이것은 "라이브" 표준을 보여주는 최초의 [PER](https://www.php-fig.org/bylaws/per-workflow/) 문서입니다. PER 덕분에 PHP에 새로운 구문이 추가될 때마다 다른 PSR 표준을 발표할 필요가 없습니다. 
    대신 [SemVer](https://semver.org/lang/ru/) 에 따라 PER이 업데이트됩니다.

    * 새로운 PSR 초안이 승인되었습니다
    [PSR-22 – 애플리케이션 추적(Application Tracing)](https://github.com/php-fig/fig-standards/blob/master/proposed/tracing.md)

* **[새로 출시된 PhpStorm 2022.1](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-release/)**
  Blade, WordPress, ArrayShape 주석 등에 대한 개선 사항이 함께 제공됩니다. 
  짧은 [What's New](https://www.youtube.com/watch?v=gqck6bJ1JWo) 동영상을 확인하거나 [블로그 게시물](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-release/) 에서 전체 스토리를 확인하세요.

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

  `Deque` – 양방향 큐입니다. 즉, 시작과 끝에서 항목을 추가 및 제거할 수 있습니다. `SplQueue` 또는 `SplDoublyLinkedList` 대신 사용하여 성능을 높이고 메모리 소비를 줄일 수
  있습니다.

* [RFC class-string 타입 도입](https://gist.github.com/cspray/0f4e67e8731a8ea9382147707e75287f)

  공식적인 RFC는 아니지만, 정적 분석기의 주석에서 이미 널리 사용되는 class-string 을 실제 유형으로 만드는 흥미로운 아이디어입니다.

Tools
-----

* [CanIPHP.com](https://caniphp.com/) – caniuse.com 과 비슷하지만 PHP 기능을 위한 것입니다.

* [clue/stream-filter](https://github.com/clue/stream-filter) – PHP에서 스트림 필터링을 위한 간단하고 모던한 접근 방식입니다. 
PHP에서 스트림 필터를 사용하여 [미친 일](https://github.com/jaem3l/unfuck) 을 할 수 있지만 [실용적인 일](https://github.com/dg/bypass-finals) 도 할 수 있습니다.

* [sfx101/deck](https://github.com/sfx101/deck) – PHP 초보자에게 유용할 수 있는 로컬 웹 개발 환경의 빠른 스핀업 및 구성을 위한 GUI 도구입니다.

* [marijnvanwezel/try](https://github.com/marijnvanwezel/try) – 단일 명령으로 Composer 패키지를 사용해 볼 수 있는 간단한 CLI 도구입니다. 
설치 후 실행: `try %vendor%/%package%`.

* [frodeborli/moebius](https://github.com/frodeborli/moebius) – PHP 버전 8.1 이상을 위한 Golang과 유사한 코루틴. 
저자는 자신의 이벤트 루프 구현과 사용자 정의 테스트 프레임워크를 사용했습니다.

* [Crell/AttributeUtils](https://github.com/Crell/AttributeUtils) — 속성의 구문 분석 및 관리를 용이하게 하는 유틸리티. 
교리 주석 인터페이스로 교리 주석과 PHP 8 속성을 모두 읽을 수 있는 [koriym/Koriym.Attributes](https://github.com/koriym/Koriym.Attributes) 에 관심이 있을 수도 있습니다.

* [spatie/visit](https://github.com/spatie/visit) – 모든 URL의 응답을 아름답게 보여주는 CLI HTTP 클라이언트.

* [laravel/valet](https://github.com/laravel/valet) – Mac용 경량 로컬 개발 환경. Docker와 VirtualBox 가 없고 기본적으로 Nginx와 PHP만 있습니다.
  라라벨 뿐만 아니라 모든 프로젝트에서 사용할 수 있으며, v3부터는 폴더(프로젝트) 별로 [다른 PHP 버전](https://laravel.com/docs/9.x/valet#per-site-php-versions)을 사용할 수 있습니다.

* [roach-php/core](https://github.com/roach-php/core) – PHP용 완전한 웹 스크래핑 툴킷.

* [PHPStan 1.6.0](https://phpstan.org/blog/phpstan-1-6-0-with-conditional-return-types) – 조건부 반환 유형 및 정수 마스크에 대한 지원과 함께 출시되었습니다.

* [flow-php/etl](https://github.com/flow-php/etl) – ReactPHP 또는 Amphp를 통한 비동기 처리를 지원하는 PHP용 ETL(Extract Transform Load) 데이터 처리 라이브러리.

* [igorhrcek/wp-cli-secure-command](https://github.com/igorhrcek/wp-cli-secure-command/) – CLI 명령 하나로 WordPress 설치를 보호할 수 있습니다.

* [williarin/wordpress-interop](https://github.com/williarin/wordpress-interop) – 다른 PHP 응용 프로그램에서 WordPress 데이터베이스에 더 쉽게 액세스할 수 있도록 하는 Doctrine/DBAL 기반 패키지입니다.

* [sj-i/php-profiler](https://github.com/sj-i/php-profiler) – 순수 PHP(FFI)로 구현된 PHP용 샘플링 프로파일러. 플레임 다이어그램을 생성하고, top-like 모드에서 추적 출력을 실행하는 등의 작업을 수행할 수 있습니다.

* [mrsuh/php-var-sizeof](https://github.com/mrsuh/php-var-sizeof)
  – [memory_get_usage()에 비해](https://github.com/mrsuh/php-var-sizeof#var_sizeof-vs-memory_get_usage) 더 정확하다고 약속하는 모든 변수의 메모리 크기를 가져오는 함수입니다. FFI를 사용하는 PHP 7.4 이상이 필요합니다.

* [davidcole1340/ext-php-rs](https://github.com/davidcole1340/ext-php-rs) – Zend API가 Rust에서 기본적으로 PHP 확장을 빌드하기 위한 바인딩입니다.

* [easysoft/phpmicro](https://github.com/easysoft/phpmicro) – 정적 컴파일된 마이크로 PHP 인터프리터로, CLI 도구와 함께 번들되어 PHP에 구애받지 않는 바이너리로 배포할 수 있습니다.
  Marcel Pociot가 프로세스를 자동화하기를 [기대](https://twitter.com/marcelpociot/status/1498244220620099588)합니다!


Symfony
-------

* [Symfony 6.1의 새로운 기능](https://symfony.com/blog/category/living-on-the-edge/6.1)을 보세요.

* 📺 [Symfony 6과의 조화로운 개발](https://symfonycasts.com/screencast/symfony) – Symfony 시작을 위한 2시간 이상의 튜토리얼이 이제 SymfonyCasts에서 무료로 제공됩니다.

* [WordPress에서 Symfony 양식 사용](https://jolicode.com/blog/using-symfony-form-in-wordpress).

* [심포니 "Symfony: The Fast Track"](https://symfony.com/book) 이제 Symfony 6에서 사용할 수 있습니다.

* [Symfony Station Communiqué – April 29, 2022](https://www.symfonystation.com/Symfony-Station-Communique-29-April-2022).

Laravel
-------

* 📺 [태초의 라라벨: 다큐멘터리](https://www.youtube.com/watch?v=mH7cgoX3K0g) –이 비디오는 라라벨이 왜 그렇게 됐는지, 지난 10년 동안 어떻게 성장했는지, 그리고 테일러와 더 넓은 라라벨 공동체에 미래가 어떤 영향을 미칠지에 대한 이야기를 담고 있다.

* [라라벨 IDEA 5.3](https://laravel-idea.com/blog/2022/5-3-release) – 인기 있는 유료 PhpStorm 플러그인에 대한 업데이트는 Extract Blade Component 리팩터링, 변환 값 및 고급 이벤트 수신기 검색과 함께 제공됩니다.

* [LaravelProTips.com](https://laravelprotips.com/) – 유용한 기사 및 트윗 모음입니다.

* [alexeymezenin/laravel-best-practices](https://github.com/alexeymezenin/laravel-best-practices) – Laravel의 모범 사례.
Build a Laravel app and deploy it to production in 5 hours
* 📺 [5시간내에 구축하고 배포하는 라라벨 앱](https://www.youtube.com/watch?v=mmtVkDh9RGw) – 브렌트가 달리는 속도.

* 📺 [Xdebug 3: PhpStorm을 이용한 라라벨 세일(Laravel Sail)](https://www.youtube.com/watch?v=Xgn0EtB4chc).

Yii
---

* [Yii 뉴스 2022호 1호](https://opencollective.com/yiisoft/updates/yii-news-2022-issue-1).

* [Yii 2를 위한 인터뷰 질문](https://www.yiiframework.com/wiki/2570/interview-questions-for-yii2) – 대부분 PHP에 관한 것이고 모든 구직자들에게 유용한 정보일 수 있다.

Misc
----

* [PHP 개발자를 위한 도커](https://www.pascallandau.com/docker-php-tutorial/) by Pascal Landau: [2022년 PHP 8.1 애플리케이션용 도커](https://www.pascallandau.com/blog/docker-from-scratch-for-php-applications-in-2022/)에 대한 포괄적인 게시물. [PHP 8.1의 PhpStorm, Docker 및 Xdebug 3](https://www.pascallandau.com/blog/phpstorm-docker-xdebug-3-php-8-1-in-2022/) 및 기타 자세한 내용은 [웹사이트](https://www.pascallandau.com/blog/) 을 참조하십시오.

* Posts on naming constructors [by Andreas Möller](https://localheinz.com/blog/2022/03/26/naming-constructors/) and [by Stefan Priebsch](https://thephp.cc/articles/how-do-you-name-constructors).
생성자 이름 짓기에 대한 게시물 [안드레아 뮐러(Andreas Möller)](https://localheinz.com/blog/2022/03/26/naming-constructors/) 및 [스테판 프립슈(Stefan Priebsch)](https://thephp.cc/articles/how-do-you-name-constructors).

* [미들웨어 패턴의 작동 방식](https://doeken.org/blog/middleware-pattern-in-php)과 PHP에서 쉽게 적용할 수 있다.

* [외부 HTTP 요청이 있는 함수를 모의하는 방법](https://hermanradtke.com/how-to-mock-functions-that-have-external-http-requests/).

* [쓰고 읽기가 가능한 PHP](https://writing-readable-php.com/) – Freek Van der Herten와 Christoph Rumpel의 유료 강좌로 여러분과 동료, 그리고 미래의 자신을 위해 코드를 읽는 즐거움을 주는 한 입 크기 팁이 제공됩니다.


* [PHP Tricks: Multi-value match()](https://peakd.com/hive-168588/@crell/php-tricks-multi-value-match) — 다음과 같이 싱글 매치 표현식에서 여러 값을 비교할 수 있다는 것을 알고 있습니까? 

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

* [인터페이스가 클래스 템플릿이 아니다.](https://www.exakat.io/en/interfaces-are-not-class-templates/).

* [속도가 올라간 array_merge()](https://www.exakat.io/en/speeding-up-array_merge/).

* [PHP의 모든 동적 구문](https://www.exakat.io/en/all-the-dynamic-syntaxes-in-php/) – 인터뷰 질문에 좋은 자료 

* [PHP 생태계를 위한 오픈 소스 공급망 보안 해결](https://paragonie.com/blog/2022/01/solving-open-source-supply-chain-security-for-php-ecosystem) – Paragon IE의 사람들의 이니셔티브에 대한 흥미로운 게시물. 그들은 이제 [Gossamer](https:gossamer.tools)라는 도구를 사용하여 앱과 종속성을 안전하게 업데이트하고 있습니다. 이전에는 PHP 코어에 libsodium을 도입하고 JWT의 보다 안전한 대안인 [Paseto](https://github.com/paragonie/paseto)를 만들고 [기타 도구](https://github.com/paragonie)를 개발했습니다.

* [서비스 로케이터: 안티 패턴](https://stitcher.io/blog/service-locator-anti-pattern).

* 📺 [Xdebug 3: PhpStorm으로 단위 테스트 디버깅](https://www.youtube.com/watch?v=WMGYfgzoap0).

* 📺 [올바른 방법으로 PHP 배우기](https://www.youtube.com/playlist?list=PLr3d3QYzkw2xabQRUpcZ_IBk9W50M9pe-) – 88개의 동영상이 포함된 전체 PHP 과정을 무료로 제공합니다.

**Generics**
------------

PHP는 최근에 제네릭 관련 활동을 많이 보았으므로 이 포스트에서 제네릭 관련 섹션을 제공했습니다.

* 📺 먼저 이 동영상 시리즈를 확인하세요.
  Brent의 [Generics in PHP](https://www.youtube.com/watch?v=c8hQ1fWU_mQ&list=PL0bgkxUS9EaKyOugEDffRzsvupBE2YEoD).

* 더 깊이 들어가고 싶다면 게시물에 관심이 있을 수 있습니다.
  [제네릭 구현 접근 방식](https://dev.to/mrsuh/generics-implementation-approaches-3bf0) 에 대해.

* PHP로 구현하는 흥미로운 프로젝트를 시도해보세요: [mrsuh/php-generics](https://github.com/mrsuh/php-generics).
  흥미롭게도 성능을 위해 PHP에서 런타임 유형 검사를 삭제하는 것에 대해 [Reddit에 대한 토론](https://www.reddit.com/r/PHP/comments/ta5d4u/php_perfomance_mode_yay_or_nay/) 이 있었습니다. 위의 도구는 [유형 삭제 구현](https://github.com/mrsuh/php-generics#type-erasure)이므로 이론적으로 `composer dump-generics --type=type-erasure`와 같은 성능 사용 사례에 사용할 수 있습니다.

* 제네릭의 주요 응용 프로그램 중 하나는 컬렉션입니다. [PHP 컬렉션 비교하기](https://dev.to/mrsuh/comparing-php-collections-5cca)를 확인하세요.

*그리고 마지막으로 중요한 것은 [@SerafimArts](https://github.com/SerafimArts)의 재미있는 예술입니다.

![](https://blog.jetbrains.com/wp-content/uploads/2022/05/generics.gif)
