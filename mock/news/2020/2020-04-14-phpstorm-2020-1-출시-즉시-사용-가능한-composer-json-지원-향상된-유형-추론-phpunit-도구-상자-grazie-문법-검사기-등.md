<div class="content">[소식](/phpstorm/category/news/) PhpStorm 2020.1 출시: 즉시 사용 가능한 composer.json 지원, 향상된 유형 추론, PHPUnit 도구 상자, Grazie 문법 검사기 등 
===========================================================================================

<div class="post-info">![로만 프론스키](https://secure.gravatar.com/avatar/269798998e24876e4f3ea6f6d1effdc7?s=200&r=g)<div class="post-info__text"> [로만 프론스키](https://blog.jetbrains.com/author/rpronskiy) <time class="publish-date" data-day="14" data-month="04" data-year="2020" datetime="2020-04-14"></time></div></div><div class="ez-toc-v2_0_17 counter-hierarchy ez-toc-transparent" id="ez-toc-container"><div class="ez-toc-title-container"> 목차

 <span class="ez-toc-title-toggle"><a class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle" style="display: none;"></a></span> </div><nav>- [즉시 사용 가능한 composer.json 지원](#Out-of-the-box_composerjson_support "즉시 사용 가능한 composer.json 지원")
- [PHP 유형 추론 개선](#Improvements_to_PHP_type_inference "PHP 유형 추론 개선")
- [PCOV 및 PHPDBG를 사용한 코드 커버리지](#Code_coverage_with_PCOV_and_PHPDBG "PCOV 및 PHPDBG를 사용한 코드 커버리지")
- [PHPUnit 도구 상자](#PHPUnit_Toolbox "PHPUnit 도구 상자")
- [메타데이터](#Metadata "메타데이터")
- [코드 완성에 대한 기계 학습 지원 순위](#Machine_Learning-assisted_ranking_for_code_completion "코드 완성에 대한 기계 학습 지원 순위")
- [새로운 검사](#New_inspections "새로운 검사")
- ["Move method" 리팩토링 업데이트](#Updated_Move_method_refactoring ""Move method" 리팩토링 업데이트")
- [HTTP 클라이언트의 PHP 디버그](#PHP_Debug_in_HTTP_Client "HTTP 클라이언트의 PHP 디버그")
- [그리고 PHP에 대한 몇 가지 더 작은 것들](#And_a_few_more_little_things_for_PHP "그리고 PHP에 대한 몇 가지 더 작은 것들")
- [IDE](#IDE "IDE")
    - [고급 맞춤법 검사기 및 문법 교정기](#Advanced_spell_checker_and_grammar_corrector "고급 맞춤법 검사기 및 문법 교정기")
    - [라이트에디트 모드](#LightEdit_Mode "라이트에디트 모드")
    - [이제 JetBrains Mono가 기본 글꼴입니다.](#JetBrains_Mono_is_now_the_default_font "이제 JetBrains Mono가 기본 글꼴입니다.")
    - [젠 모드](#Zen_Mode "젠 모드")
- [UI](#UI "UI")
    - [분할 터미널 세션](#Split_terminal_sessions "분할 터미널 세션")
    - [IntelliJ 라이트 테마](#IntelliJ_Light_theme "IntelliJ 라이트 테마")
    - [상태 표시줄 사용자 지정](#Customization_of_the_status_bar "상태 표시줄 사용자 지정")
- [구성](#Configuration "구성")
    - [통합 SSH 구성](#Unified_SSH_configuration "통합 SSH 구성")
    - [IDE 구성 경로가 변경되었습니다.](#The_path_to_IDE_configs_has_changed "IDE 구성 경로가 변경되었습니다.")
    - [실행 구성을 공유할 때 유연성 향상](#More_flexibility_when_sharing_Run_Configurations "실행 구성을 공유할 때 유연성 향상")
- [버전 관리](#Version_Control "버전 관리")
    - [새 커밋 도구 창](#New_Commit_tool_window "새 커밋 도구 창")
    - [개선된 Git 브랜치 워크플로](#Improved_Git_branches_workflow "개선된 Git 브랜치 워크플로")
    - [IDE에서 Git 설치](#Installing_Git_from_IDE "IDE에서 Git 설치")
    - [재작업된 Interactive Rebase 워크플로](#Reworked_Interactive_Rebase_workflow "재작업된 Interactive Rebase 워크플로")
- [데이터베이스 도구](#Database_Tools "데이터베이스 도구")
- [편물](#Web "편물")

</nav></div> **PhpStorm 2020.1이 출시되었습니다!**

 [![PHP스톰 2020.1](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-blog@2x.jpg)](https://blog.jetbrains.com/phpstorm/2020/04/phpstorm-2020-1-release/)

 이 주요 릴리스에는 즉시 사용 가능한 composer.json 지원, PCOV 및 PHPDBG를 사용한 코드 적용 범위, PHPUnit 도구 상자, 새로운 검사, 빠른 수정 및 리팩토링, 고급 문법 검사기 및 더 많은 이점이 포함됩니다.

<center><iframe allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" frameborder="0" height="315" loading="lazy" src="https://www.youtube.com/embed/9nEOF2yGk64" width="560"></iframe></center> [PhpStorm 2020.1 다운로드](https://www.jetbrains.com/phpstorm/whatsnew/)

 몇 분만 시간이 있다면 위 [의 2020.1 새로운 기능](https://www.youtube.com/watch?v=9nEOF2yGk64) 비디오를 시청하여 주요 개선 사항에 대한 개요를 확인하십시오. 시간이 더 있다면 이 새 버전에 대해 알아야 할 사항과 *모든* 변경 사항에 대한 개요를 읽으십시오. 많은 GIF가 있으므로 안전 벨트를 착용하십시오!

<span id="more-21635"></span>

<style>	
kbd {
 font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
 line-height: inherit;	
 position: relative;	
 -webkit-box-sizing: border-box;
 box-sizing: border-box;
 margin: 0;
 padding: 2px 6px 4px;
 white-space: nowrap;
 border-radius: 3px;
 border: 1px solid #cccbcb;
 color: #161616;
 background-color: #fff;
 -webkit-box-shadow: 0 2px 0px -1px #fff, 0 2px 0 #cccbcb;
 box-shadow: 0 2px 0px -1px #fff, 0 2px 0 #cccbcb;
}
blockquote {
 background-color: #fff7d7;
 padding: 18px 20px;
 font-style: normal;
 margin: 0 0 18px 0;
}
#content blockquote p {
 margin-bottom: 0px;
}
blockquote em {
 font-style: italic;
}
blockquote strong {
 font-style: bold;
}
</style><span class="ez-toc-section" id="Out-of-the-box_composerjson_support"></span> 즉시 사용 가능한 composer.json 지원<span class="ez-toc-section-end"></span>
------------------------------------------------------------------------------------------------------------------------------------------------

 이제 composer.json 파일을 편집할 때 모든 종속성 관리 작업을 직접 사용할 수 있습니다.

 컨텍스트 메뉴에서 또는 <kbd>Ctrl(⌘)+N</kbd> 을 눌러 **새 파일 composer.json 을 생성** 할 수 있습니다. 이 파일의 템플릿은 *기본 설정/설정 | 편집자 | 파일 및 코드 템플릿* .

![작곡가-json_create_600](https://blog.jetbrains.com/wp-content/uploads/2019/11/phpstorm-composer-json_create_600.png)

 **패키지를 종속성으로 추가**  
 종속성을 추가하려면 공급업체와 패키지 이름을 입력하기 시작하면 PhpStorm이 적절한 옵션을 제안합니다.  
 **버전** 필드는 이 패키지의 사용 가능한 버전을 제공합니다. 지금은 버전 범위에 대해 캐럿 또는 기타 기호를 수동으로 추가해야 하지만 다음 릴리스에서는 이것도 구현할 것입니다.

![작곡가-json_manage_dependencies](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-composer-json_manage_dependencies.png)

 PHP 및 확장의 필수 버전을 지정해야 하는 경우에도 자동 완성 기능이 작동합니다.

 패키지 팝업에서 packagist.org에서 다운로드 및 별 수에 대한 정보를 찾을 수 있습니다. 패키지 및 해당 버전에 대한 모든 정보는 packagist.org에서 가져오고 캐시됩니다.

![작곡가_패키지_정보](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-composer_package_info-1.png)

 **패키지 설치 및 업데이트**  
 composer.lock 파일이 없고 설치된 패키지가 없는 경우 PhpStorm은 `require` 및 `require-dev` 섹션 이름을 강조 표시합니다. 편집기 위의 도구 모음에서 *설치* 버튼을 클릭할 수 있습니다. 또는 <kbd>Alt(⌥)+Enter</kbd> 를 누르고 *Install packages* 를 선택하여 의도를 사용할 수 있습니다.

![작곡가-json_install-update](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-composer-json_install-update.png)

 패키지 중 일부만 다운로드한 경우 PhpStorm은 아직 설치되지 않은 패키지를 강조 표시합니다. <kbd>Alt(⌥)+Enter</kbd> 를 눌러 *패키지* *업데이트 또는 모든 패키지 업데이트* 를 선택할 수 있습니다.

 버전 요구 사항 옆에 현재 설치된 패키지 버전이 회색으로 표시됩니다.

 **파일 및 폴더로 이동**  
 <kbd>Ctrl(⌘)+클릭</kbd> 또는 <kbd>Ctrl(⌘)+B</kbd> 를 사용하면 엔터티 정의로 이동하거나 사용법을 검색할 수 있다는 것을 알고 있을 것입니다.

 composer.json에서도 작동합니다. 패키지를 <kbd>Ctrl(⌘)+클릭</kbd> 하면 프로젝트 트리에서 해당 디렉토리가 강조 표시됩니다. 파일인 경우 편집기에서 열립니다.

![작곡가-json_navigate](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-composer-json_navigate.png)

 작곡가.json의 링크를 <kbd>Ctrl(⌘)+클릭</kbd> 하거나 <kbd>Ctrl(⌘)+B</kbd> 를 누르면 브라우저에서 열립니다.

 **autoload(-dev)** **에서 자동 완성**  
 자동 완성은 프로젝트의 클래스 및 디렉터리 구조 정보를 기반으로 네임스페이스 및 폴더 경로에 대해 작동합니다.

![작곡가-json_autoload@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-composer-json_autoload@2x.png)

 파일 및 폴더로 이동 <kbd>하려면 Ctrl(⌘)+클릭</kbd> 및 <kbd>Ctrl(⌘)+B</kbd> 도 여기에서 작동합니다.

 **스크립트 개선 사항**  
 우선 파일/폴더/메소드 탐색도 작동합니다. 둘째, 명령에 대한 별칭이 지원됩니다. 셋째, 스크립트는 다음을 눌러 편집기에서 실행할 수 있습니다. ![gutter_play_tr](https://blog.jetbrains.com/wp-content/uploads/2020/01/phpstorm-gutter_play_tr.png) 스크립트 이름 근처에 있는 버튼.

 이렇게 하면 실행 구성이 자동으로 생성됩니다. 이는 디버깅에 매우 편리한 <kbd>Ctrl(⌃)+R</kbd> 단축키로 스크립트를 다시 실행할 수 있음을 의미합니다.

![작곡가-json_scripts_run-config@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-composer-json_scripts_run-config@2x-1.png)

 **코드 품질 도구**  
 개발 종속성에 FriendsOfPHP `FriendsOfPHP/PHP-CS-Fixer` 가 있는 경우 PhpStorm은 해당 검사가 활성화되어 있는지와 규칙 집합이 설정되어 있는지 확인합니다. 그렇지 않은 경우 <kbd>Alt(⌥)+Enter</kbd> 를 호출하여 수정할 수 있습니다.

![작곡가-json_quality_tools@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-composer-json_quality_tools@2x.png)

<span class="ez-toc-section" id="Improvements_to_PHP_type_inference"></span> PHP 유형 추론 개선<span class="ez-toc-section-end"></span>
---------------------------------------------------------------------------------------------------------------------------------

 형식 유추 엔진은 PhpStorm의 핵심이며 몇 가지 눈에 띄는 변경이 있었습니다.

 **중복 @var 태그 강조 표시**  
 @var 태그를 추가하는 것은 PhpStorm에 변수 유형을 제안하는 좋은 방법입니다. 그러나 유형 추론을 지속적으로 개선하고 있으므로 PhpStorm이 이미 유형을 알고 있기 때문에 이러한 선언 중 일부는 중복될 수 있습니다. 이러한 경우는 강조 표시되며 <kbd>Alt(⌥)+Enter</kbd> 및 *"@var 제거"* 빠른 수정을 사용하여 제거할 수 있습니다.

![php-type-inf_var](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-php-type-inf_var.png)

 **null 유형을 추적** 하는 것은 힘든 작업이며 PhpStorm이 실패한 곳이 있었습니다. 2020.1에서 PhpStorm은 변수가 null일 수 있는 경우와 그렇지 않은 경우를 알고 있습니다. 이 예를 확인하십시오.

![php-type-inf_null](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-php-type-inf_null.png)

![type-inference_null-guard](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-type-inference_null-guard.png)

 **초기화된 배열에 대한 코드 완성**  
 알려진 요소가 있는 배열이 있고 나중에 반복하려고 한다고 가정합니다. 유형에 대한 정보가 손실되었기 때문에 이전에는 코드 완성이 여기에서 작동하지 않았습니다. 이제 2020.1에서 모든 것이 작동합니다.

![php-type-inf_array_completion](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-php-type-inf_array_completion.png)

 **array\_map/filter의 코드 완성**  
 이제 `array_map()` 및 `array_filter()` 에 전달된 클로저 본문의 배열 항목에 대한 완료가 있습니다.

![type-inference_array_map@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-type-inference_array_map@2x.png)

<span class="ez-toc-section" id="Code_coverage_with_PCOV_and_PHPDBG"></span> PCOV 및 PHPDBG를 사용한 코드 커버리지<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------------------------

 [Xdebug](https://xdebug.org/) 를 사용하여 코드 커버리지 보고서를 얻을 수 있습니다. 그러나 주로 디버거이기 때문에 상당한 오버헤드가 있습니다. 적용 범위 보고 속도를 높이려면 [krakjoe/pcov](https://github.com/krakjoe/pcov) 확장 또는 PHP 5.6+에 내장된 PHPDBG와 같은 더 가벼운 도구를 사용할 수 있습니다.

 둘 다 이제 PhpStorm에서 지원됩니다. 테스트를 위한 실행 구성을 생성하고 설정에서 원하는 커버리지 드라이버를 선택해야 합니다. 그런 다음 ![run_coverage_tr](https://blog.jetbrains.com/wp-content/uploads/2020/01/phpstorm-run_coverage_tr-1.png) :

![코드 범위](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-code-coverage.png)

> PCOV의 [README](https://github.com/krakjoe/pcov#differences-in-reporting) 에서 Xdebug, PCOV 및 phpdbg 간의 적용 범위 보고 차이점에 대해 자세히 알아보세요.

<span class="ez-toc-section" id="PHPUnit_Toolbox"></span> PHPUnit 도구 상자<span class="ez-toc-section-end"></span>
---------------------------------------------------------------------------------------------------------------

 최근에 출시된 PHPUnit 9에서는 많은 기능이 제거되었거나 더 이상 사용되지 않는 것으로 선언되었습니다. 마이그레이션 속도를 높이고 오류를 방지하기 위해 많은 검사와 빠른 수정을 추가했습니다.

![phpunit_quick-fixes](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-phpunit_quick-fixes.png)

 또한 이제 클래스 선언에서 <kbd>Alt(⌥)+Enter</kbd> 를 호출하고 *Create New PHP Test* 를 선택하여 클래스에 대한 **새 테스트를 매우 빠르게 만들** 수 있습니다.

![phpunit_create_test@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-phpunit_create_test@2x.png)

<span class="ez-toc-section" id="Metadata"></span> 메타데이터<span class="ez-toc-section-end"></span>
------------------------------------------------------------------------------------------------

 고급 메타데이터를 사용하면 PhpStorm에 프로젝트에 대한 추가 정보를 제공하여 코드 완성 및 검사를 개선할 수 있습니다. 예를 들어, 이 기능은 [Symfony 플러그인](https://github.com/King2500/symfony-phpstorm-meta) 과 [Laravel IDE Helper](https://github.com/barryvdh/laravel-ide-helper#phpstorm-meta-for-container-instances) 에서 사용됩니다.

 메타데이터에 대한 여러 개선 사항이 PhpStorm 2020.1에 추가되었습니다.

 **override, map 및 type 지시문의 매개변수 색인**  
 이전에는 `override()` , `map()` 및 `type()` 을 사용하여 함수의 첫 번째 인수의 동작을 조정할 수 있었습니다. PhpStorm 2020.1에서는 이제 임의의 매개변수 인덱스를 지정할 수 있습니다.

![metadata_override_with_index](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-metadata_override_with_index.png)

 **\_\_get을 통한 속성 액세스**  
 매직 `__get()` 메서드를 통해 속성에 액세스하려고 하면 유형에 대한 정보가 손실됩니다. 추가 `@var` 또는 `@property` 태그를 사용할 수 있지만 항상 작동하지는 않았습니다. 이제 메타데이터를 통해 모든 것을 지정할 수 있습니다.

![메타데이터_게터](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-metadata_getters.png)

 **ArrayAccess를 구현하는 객체에 대한 키 완성**  
 메타데이터는 ArrayAccess 개체를 지원했지만 값 유형만 제안했습니다. 이제 사용 가능한 키도 자동 완성할 수 있습니다.

![메타데이터_배열액세스_키](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-metadata_arrayaccess_keys.png)

 **사용자 지정 출력 지점**  
 PhpStorm은 `die()` 및 `exit()` )와 같은 함수 또는 예외 발생을 실행 종료로 간주합니다. 그러나 응용 프로그램에는 [E\_USER\_ERROR](https://www.php.net/manual/en/errorfunc.constants.php#errorfunc.constants.errorlevels.e-user-error) 인수가 있는 간단한 `dd()` 또는 [trigger\_error()](https://www.php.net/manual/ru/function.trigger-error.php) 와 같이 더 복잡한 종료점이 있을 수 있습니다.

 PhpStorm 2020.1에서는 모든 기능을 종료점으로 표시할 수 있으며 이에 따라 제어 흐름 분석이 수정됩니다.

![메타데이터_종료점](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-metadata_exitpoint.png)

 **메타데이터를 통해 동작이 변경된 기능의 아이콘**  
 `override()` , `exitPoint()` 또는 `expectArguments()` 를 사용하여 동작이 변경된 함수는 이제 여백에 아이콘이 있습니다. 아이콘을 클릭하면 동작이 수정된 .phpstorm.meta.php 파일이 열립니다.

![metadata_guttericons](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-metadata_guttericons.png)

 *기본 설정/설정 | 편집자 | 일반 | 거터 아이콘* .

<span class="ez-toc-section" id="Machine_Learning-assisted_ranking_for_code_completion"></span> 코드 완성에 대한 기계 학습 지원 순위<span class="ez-toc-section-end"></span>
-------------------------------------------------------------------------------------------------------------------------------------------------------------

 머신 러닝을 사용한 추천 순위 지정을 통해 추천 목록을 보다 최적의 방식으로 정렬할 수 있습니다.

 **ML이 실제로 어떻게 작동하는지 확인하는 방법은 무엇입니까?**  
 기본적으로 ML 지원 순위는 비활성화되어 있습니다. <span style="text-decoration: line-through;">우리는 그것이 우리의 일자리를 빼앗는 것을 원하지 않습니다!</span> 활성화하려면 *기본 설정/설정 | 편집자 | 일반 | 코드 완성* 및 두 가지 옵션을 켭니다. 머신 러닝 및 *PHP* *기반 완성 제안 순위* 지정 .

 ***완료 팝업에 위치 변경 표시*** 옵션을 활성화하면 자동 완성 목록에 항목 순서가 어떻게 변경되었는지 표시됩니다.

![ml-완성](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-ml-completion.png)

 향후 릴리스에서 이 기능에 대한 작업을 계속 <span style="text-decoration: line-through;">하기 위해 AI 인수를 방지</span> 할 계획입니다.

<span class="ez-toc-section" id="New_inspections"></span> 새로운 검사<span class="ez-toc-section-end"></span>
--------------------------------------------------------------------------------------------------------

 **개인 속성은 지역 변수로 대체 가능**  
 속성 정의는 한 가지 방법에서만 사용되고 즉시 덮어쓰여지면 강조 표시됩니다. 이러한 경우 <kbd>Alt(⌥)+Enter 를</kbd> 사용하여 *"속성을 로컬 변수로 바꾸기"* 빠른 수정을 호출할 수 있습니다.

![inspect_private-to-local@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-inspection_private-to-local@2x.png)

 **불필요한** **속성 초기화**  
 private 속성에 클래스의 기본값이 있지만 다른 값이 생성자의 속성에 즉시 할당된다고 가정해 보겠습니다. 이 경우 기본값은 중복되며 노이즈만 추가됩니다.

 사용하지 않는 초기화는 강조 표시되며 <kbd>Alt(⌥)+Enter</kbd> 와 함께 *"중복 초기화 제거"* 빠른 수정을 사용하여 제거할 수 있습니다.

![검사_redund_prop_init@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-inspection_redund_prop_init@2x.png)

 **PHP 7.4에서 기본값에 따라 속성 유형 변경**   
![php-74_default_type_mismatch@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-php-74_default_type_mismatch@2x.png)

 **중복 삼항 연산자**  
 Phpstorm은 사소한 삼항 표현식을 강조 표시하며 <kbd>Alt(⌥)+Enter</kbd> 빠른 수정을 사용하여 더 간단한 것으로 바꿀 수 있습니다.

![삼항_중복](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-ternary_redundant.png)

 **초과 통과 참조**  
 참조에 의한 전달을 사용하면 예기치 않은 결과가 발생할 수 있으며 이것이 Nikita Popov가 PHP에서 [명시적 호출 사이트 참조에 의한 전달 주석 허용](https://wiki.php.net/rfc/explicit_send_by_ref) 을 제안한 이유 중 하나입니다.

 그 동안 PhpStorm 2020.1은 참조로 통과로 선언되었지만 그렇게 사용되지 않는 매개변수를 강조 표시합니다. <kbd>Alt(⌥)+Enter</kbd> 로 빠르게 수정하면 안전하게 제거할 수 있습니다.

![pass-by-ref_param](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-pass-by-ref_param.png)

 foreach 루프에서 pass-by-ref가 있는 배열에서도 동일하게 작동합니다.

![패스 바이 ref_array](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-pass-by-ref_array.png)

 **유형 선언만 있는 불필요한 PHPDoc 블록을 이제 해당 빠른 수정 덕분에 쉽게 제거할** 수 있습니다.

![phpdoc_remove_redundant](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-phpdoc_remove_redundant.png)

 기본적으로 검사는 정보 수준에 있으므로 아무 것도 강조 표시하지 않습니다. *중복* *PHPDoc* 블록을 강조 표시하려면 *기본 설정/설정 | 편집자 | 검사* .

<span class="ez-toc-section" id="Updated_Move_method_refactoring"></span> "Move method" 리팩토링 업데이트<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------------------

 때로는 메소드를 다른 클래스로 옮기는 것이 합리적입니다. 이 방법이 프로젝트 코드베이스 전체에서 여러 번 사용되면 PhpStorm이 도움이 될 수 있습니다.

 이전에는 먼저 메서드를 정적으로 만든 다음 다른 작업을 호출하여 메서드를 이동해야 했습니다. PhpStorm 2020.1에서 *"Move 메서드"* 리팩토링이 하나의 원자적 동작으로 재설계되었습니다. 불필요한 작업 및 팝업이 제거되었으며 모든 작업이 한 번에 완료됩니다.

 메서드 위에 커서를 놓고 <kbd>F6</kbd> (또는 <kbd>Ctrl(⌃)+T</kbd> , <kbd>3</kbd> )을 누릅니다. 그런 다음 대상 클래스를 선택하면 완료됩니다.

![move_refactoring](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-move_refactoring.png)

<span class="ez-toc-section" id="PHP_Debug_in_HTTP_Client"></span>HTTP 클라이언트의 PHP 디버그<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------

 디버깅을 시작하기 위해 더 이상 매개변수를 사용하거나 브라우저에 확장 프로그램을 설치할 필요가 없습니다. .http 파일에 HTTP 요청을 생성하고 <kbd>Alt(⌥)+Enter</kbd> 메뉴 아래에 있는 *PHP 디버그* 명령을 실행하거나 재생 아이콘을 클릭하여 실행하기만 하면 됩니다. ![gutter_play_tr](https://blog.jetbrains.com/wp-content/uploads/2020/01/phpstorm-gutter_play_tr.png) . 결과적으로 <kbd>XDEBUG\_SESSION</kbd> 쿠키가 요청에 자동으로 추가됩니다.

![http-client_php_debug](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-http-client_php_debug.png)

<span class="ez-toc-section" id="And_a_few_more_little_things_for_PHP"></span> 그리고 PHP에 대한 몇 가지 더 작은 것들<span class="ez-toc-section-end"></span>
-----------------------------------------------------------------------------------------------------------------------------------------------

 **@deprecated 요소는 구조 트리 보기에서 <span style="text-decoration: line-through;">취소선</span> 으로 표시됩니다.**  
 <kbd>Ctrl(⌘)+F12</kbd>

![deprecated_structure_view_cut](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-deprecated_structure_view_cut.png)

 **일치하는 태그에 대한 강조 표시 &lt;?php / ?&gt;**

![php_tags_highlight@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-php_tags_highlight@2x.png)

 **열기/닫기 중괄호로 이동**  
 <kbd>Shift+Ctrl+M(⌃+M)</kbd>

![jump_brace@2x](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-jump_brace@2x.png)

 **Twig에 대한 Lexer 사용자 지정**  
 예를 들어 동일한 구문을 가진 Angular를 사용하는 경우 Twig 템플릿의 태그 문자를 변경해야 하는 경우가 있습니다.  
 이제 *기본 설정/설정 | 언어 및 프레임워크 | PHP | 나뭇가지* .

<span class="ez-toc-section" id="IDE"></span> IDE <span class="ez-toc-section-end"></span>
------------------------------------------------------------------------------------------

### <span class="ez-toc-section" id="Advanced_spell_checker_and_grammar_corrector"></span> 고급 맞춤법 검사기 및 문법 교정기<span class="ez-toc-section-end"></span>

 Grazie 플러그인은 기본적으로 PhpStorm에 포함되어 있습니다. 철자 오류뿐만 아니라 문법 및 스타일 오류도 텍스트를 검사합니다. Grazie는 16개 언어를 지원하며 모든 검사는 데이터를 제3자에게 보내지 않고 로컬에서 수행됩니다.

 기본적으로 텍스트 파일에 대한 검사가 활성화되어 있습니다.  
 또한 모든 문자열 리터럴, 주석, PHPDoc 블록 및 커밋 메시지에 대해 Grazie를 활성화할 수 있습니다.

 PHP의 경우 ***설정/기본 설정 | 편집자 | 교정 | 문법*** .

![그라지](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-grazie.png)

### <span class="ez-toc-section" id="LightEdit_Mode"></span> 라이트에디트 모드<span class="ez-toc-section-end"></span>

 때로는 파일을 빠르게 살펴보거나 수정해야 할 수도 있습니다. 이러한 경우 단일 파일에 대해 전체 IDE를 여는 것은 과잉처럼 보이지만 여전히 익숙한 강조 표시 및 기타 유용한 기능을 사용하고 싶을 것입니다. 이것이 바로 LightEdit 모드가 여기에 있는 이유입니다.

 작동 방식은 다음과 같습니다. 명령줄이나 OS 컨텍스트 메뉴에서 파일을 열고 PhpStorm이 실행되고 있지 않으면 파일이 LightEdit에서 열립니다. 그러나 PhpStorm의 본격적인 인스턴스가 활성화된 경우 파일은 해당 인스턴스에서 열립니다.

![라이트 에디트](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-lightedit.png)

### <span class="ez-toc-section" id="JetBrains_Mono_is_now_the_default_font"></span> 이제 [JetBrains Mono](https://www.jetbrains.com/lp/mono/) 가 기본 글꼴입니다. <span class="ez-toc-section-end"></span>

![제트브레인스모노](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-jetbrainsmono.gif)

### <span class="ez-toc-section" id="Zen_Mode"></span> 젠 모드<span class="ez-toc-section-end"></span>

 이 모드는 주의 산만 제거 모드와 전체 화면 모드를 결합하여 방해 요소 없이 코드를 자세히 살펴볼 수 있습니다.  
 *보기에서 활성화 | 외모 | 젠 모드로 들어갑니다.*

![젠모드](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-zenmode.png)

<span class="ez-toc-section" id="UI"></span> UI <span class="ez-toc-section-end"></span>
----------------------------------------------------------------------------------------

### <span class="ez-toc-section" id="Split_terminal_sessions"></span> 분할 터미널 세션<span class="ez-toc-section-end"></span>

 새 탭을 열고 탭 간에 전환하는 대신 이제 창을 분할하고 하나의 탭에서 여러 세션을 열 수 있습니다. 이렇게 하려면 상황에 맞는 메뉴에서 ***가로/세로 분할*** 을 선택합니다.

![split_terminal](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-split_terminal.png)

### <span class="ez-toc-section" id="IntelliJ_Light_theme"></span> IntelliJ 라이트 테마<span class="ez-toc-section-end"></span>

 밝은 테마가 업데이트되었습니다. 이제 모든 운영 체제에서 동일하게 보이도록 통합되었으며 IntelliJ Light로 이름이 변경되었습니다.

### <span class="ez-toc-section" id="Customization_of_the_status_bar"></span> 상태 표시줄 사용자 지정<span class="ez-toc-section-end"></span>

 상황에 맞는 메뉴에서 IDE 창의 오른쪽 하단 모서리에 있는 상태 표시줄에 표시할 정보를 선택할 수 있습니다.

![사용자 정의_상태 표시줄](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-customize_statusbar.png)

<span class="ez-toc-section" id="Configuration"></span> 구성 <span class="ez-toc-section-end"></span>
---------------------------------------------------------------------------------------------------

### <span class="ez-toc-section" id="Unified_SSH_configuration"></span> 통합 SSH 구성<span class="ez-toc-section-end"></span>

 이전에는 배포, 원격 인터프리터 또는 SSH 터미널에서 SSH 연결을 재사용할 때마다 SSH 연결을 재구성해야 했습니다.

 이제 ***기본 설정/설정 |*** 한 곳에서 모든 SSH 연결을 추가하거나 편집할 수 있습니다. ***도구 | SSH 구성*** 을 만든 다음 필요할 때마다 필요한 만큼 자주 사용합니다.

![통합_ssh_config](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-unified_ssh_config.png)

![통합_ssh_remote_php](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-unified_ssh_remote_php.png)

### <span class="ez-toc-section" id="The_path_to_IDE_configs_has_changed"></span> IDE 구성 경로가 변경되었습니다.<span class="ez-toc-section-end"></span>

 예를 들어 macOS에서:

```
<pre class="EnlighterJSRAW" data-enlighter-language="diff" data-enlighter-linenumbers="false" data-enlighter-title=""> - ~/라이브러리/기본 설정/PhpStorm2019.3
+ ~/라이브러리/응용 프로그램 지원/JetBrains/PhpStorm2020.1
```

  
 [도움말 문서](https://www.jetbrains.com/help/phpstorm/2020.1/tuning-the-ide.html#default-dirs) 에서 자세히 알아보세요. ### <span class="ez-toc-section" id="More_flexibility_when_sharing_Run_Configurations"></span> 실행 구성을 공유할 때 유연성 향상<span class="ez-toc-section-end"></span>

 이전에는 실행 구성이 .idea 폴더에 저장되었으며 많은 사람들이 이 폴더를 `.gitignore` 전체에 추가했습니다( [더 나은 대안](https://github.com/github/gitignore/blob/master/Global/JetBrains.gitignore) 이 있음). 이제 실행 구성을 저장할 위치를 선택하고 VCS를 통해 팀원과 공유할 수 있습니다. 이는 신규 직원을 온보딩할 때 특히 편리할 수 있습니다. 프로젝트를 가져와 PhpStorm에서 열고 클릭 한 번으로 실행할 수 있습니다.

 이렇게 하려면 *실행/디버그 구성* 대화 상자에서 ***프로젝트 파일로 저장*** 옵션을 선택한 다음 기어 아이콘을 클릭하여 프로젝트에서 원하는 경로를 선택합니다.

![실행 구성_공유](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-run-configurations_share.png)

<span class="ez-toc-section" id="Version_Control"></span> 버전 관리 <span class="ez-toc-section-end"></span>
--------------------------------------------------------------------------------------------------------

### <span class="ez-toc-section" id="New_Commit_tool_window"></span> 새 커밋 도구 창<span class="ez-toc-section-end"></span>

 **커밋** 창은 비모달 모드에서 사용할 수 있으며 왼쪽에 표시됩니다. 이렇게 하면 커밋이 준비되는 동안 다른 파일을 보고 작업하는 것을 막을 수 없습니다. 또한 변경 사항에 대한 자세한 정보를 화면에 표시할 수 있습니다.

 새 **커밋** 도구 창은 **새 사용자에게 기본적으로 활성화** 되지만 이전에 PhpStorm을 설치한 사용자에게는 비활성화됩니다.

 *기본 설정 / 설정* 에서 *비모달 커밋 인터페이스 사용* 옵션을 사용하여 활성화할 수 있습니다. *버전 관리 | 커밋* .

![commit_flow](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-commit_flow.png)

### <span class="ez-toc-section" id="Improved_Git_branches_workflow"></span> 개선된 Git 브랜치 워크플로<span class="ez-toc-section-end"></span>

 현재 Git 분기는 IDE 창의 오른쪽 하단 모서리에 지정됩니다. 클릭하면 창에서 *VCS | 힘내 | 분기* 대화 상자 *.*

 여기에 검색창을 추가했습니다. **새로 고침** 버튼은 원격 분기 목록을 업데이트합니다. 그리고 각 커밋에 대해 수신(파란색) 또는 발신(녹색) 표시기를 추가했습니다.

![git_branches](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-git_branches.png)

### <span class="ez-toc-section" id="Installing_Git_from_IDE"></span> IDE에서 Git 설치<span class="ez-toc-section-end"></span>

 기존 Git 리포지토리를 복제할 때 PhpStorm은 컴퓨터에서 Git 실행 파일을 찾고 IDE에서 찾을 수 없는 경우 다운로드 및 설정을 제안합니다.

### <span class="ez-toc-section" id="Reworked_Interactive_Rebase_workflow"></span> 재작업된 Interactive Rebase 워크플로<span class="ez-toc-section-end"></span>

 Git Rebase를 사용하면 커밋 기록을 다시 작성할 수 있습니다. 이제 "임시" 커밋을 빠르게 제거하거나, 메시지를 수정하거나, 커밋 순서를 재정렬할 수 있습니다. 물론 터미널에서 이 모든 작업을 수동으로 수행할 수 있지만 PhpStorm에서는 커밋 및 diff의 내용도 볼 수 있습니다.

 시작하려면 커밋 히스토리에서 원하는 기본 커밋을 선택해야 합니다. 그런 다음 컨텍스트 메뉴 *에서 여기에서 Interactively rebase를* 선택하십시오.

![git_rebase](https://blog.jetbrains.com/wp-content/uploads/2020/04/phpstorm-git_rebase.png)

<span class="ez-toc-section" id="Database_Tools"></span> 데이터베이스 도구<span class="ez-toc-section-end"></span>
----------------------------------------------------------------------------------------------------------

 PhpStorm에는 DataGrip의 거의 모든 기능이 기본적으로 포함되어 있습니다. 새로운 기능에 대한 동료의 개요를 보려면 [데이터베이스 도구](https://www.jetbrains.com/datagrip/whatsnew/) 의 새로운 기능을 확인하세요.

<span class="ez-toc-section" id="Web"></span> 편물<span class="ez-toc-section-end"></span>
----------------------------------------------------------------------------------------

 평소와 같이 [WebStorm 2020.1의 모든 업데이트](https://www.jetbrains.com/webstorm/whatsnew/) 도 PhpStorm에 통합되었습니다.

 이 릴리스의 모든 변경 사항에 대한 전체 목록은 매우 긴 [**릴리스 노트**](https://confluence.jetbrains.com/display/PhpStorm/PhpStorm+2020.1+Release+Notes) 에서 확인할 수 있습니다.

 오늘은 그게 다야. 끝까지 읽어주셔서 감사합니다! 귀하의 질문, 제안, 버그 보고서 및 의견에 대한 귀하의 생각에도 기꺼이 답변해 드리겠습니다.

 안전 유지!  
 *JetBrains PhpStorm 팀  
 발전을 위한 추진력*

<div class="content__row"><div class="tag-list"> [2020.1](/phpstorm/tag/2020-1/) [composer.json](/phpstorm/tag/composer-json/) [Grazie](/phpstorm/tag/grazie/) [메타데이터](/phpstorm/tag/metadata/) [뉴스레터](/phpstorm/tag/newsletter/) [phpunit](/phpstorm/tag/phpunit/) [유형 추론](/phpstorm/tag/type-inference/)</div>- <span>공유하다</span>
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F04%2Fphpstorm-2020-1-release%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F04%2Fphpstorm-2020-1-release%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F04%2Fphpstorm-2020-1-release%2F&via=phpstorm)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F04%2Fphpstorm-2020-1-release%2F)

</div><div class="content__pagination"> [새 비디오 시리즈: Christoph Rumpel의 PhpStorm 팁](https://blog.jetbrains.com/phpstorm/2020/04/new-video-series-phpstorm-tips-with-christoph-rumpel/) [PhpStorm 2020.1.1 미리 보기](https://blog.jetbrains.com/phpstorm/2020/04/phpstorm-2020-1-1-preview/)</div></div><div class="container comments-container"><div class="content"><div id="remark42"></div></div></div>