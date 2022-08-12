[튜토리얼](/phpstorm/category/tutorials/) Pest PhpStorm 플러그인이 테스트 워크플로를 개선하는 방법 
=======================================

![제트브레인](https://blog.jetbrains.com/wp-content/uploads/2021/03/jetbrains-200x200.jpg) [제트브레인](https://blog.jetbrains.com/author/jetbrains) 



![](https://blog.jetbrains.com/wp-content/uploads/2020/10/1_pest_plugin.png)

 아마도 당신은 이미 [Pest](https://pestphp.com/) 에 대해 들어본 적이 있을 것입니다. 단순성에 중점을 둔 새로운 PHP 테스트 프레임워크입니다. Pest PhpStorm 플러그인은 PhpStorm의 성장하는 생태계에 새로 추가되었습니다. 이 플러그인을 사용하면 좋아하는 IDE에서 코드를 테스트하는 것이 훨씬 더 간단하고 빨라집니다!

 플러그인 뒤에 있는 [소스 코드](https://github.com/pestphp/pest-intellij) 는 Pest 자체와 마찬가지로 오픈 소스 및 커뮤니티 기반입니다.

 플러그인 공급업체가 더 많은 청중에게 Pest와 같은 도구를 제공하고 모든 사람을 위한 업데이트를 신속하게 배포할 수 있는 플랫폼인 [JetBrains Marketplace](https://plugins.jetbrains.com/plugin/14636-pest) 에서 플러그인을 찾을 수 있습니다. "Pest"를 검색하고 거기에서 설치하십시오.

 둘러보다
-----

 PHPUnit 테스트와 마찬가지로 PhpStorm에서 직접 PEST 테스트를 실행할 수 있습니다. 테스트 내부에 캐럿을 배치하고 실행 창을 트리거하면 해당 특정 테스트에 대한 실행 구성이 생성됩니다. 특정 테스트 외부에 캐럿을 배치할 수 있지만 여전히 파일에 있어 해당 파일의 모든 테스트를 트리거할 수 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/10/2_looking_around.png)

 실행을 누르면 새 실행 구성을 사용할 수 있으며 편집할 수 있습니다. 이제 테스트를 변경하거나 Ctrl+R (Windows의 경우 Shift+F10 )을 눌러 현재 구성을 실행할 수 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/10/3_run_configuration.png)

 테스트가 있는 줄의 여백에 있는 PEST 스타일의 실행 아이콘을 클릭하여 실행 구성을 만들 수도 있습니다.

 Pest를 사용하면 `$this` 에서 함수나 메서드를 호출하여 주장을 작성할 수 있습니다. 플러그인은 자동 완성을 지원하므로 입력할 때 사용 가능한 어설션을 볼 수 있습니다!  
 Pest는 각 테스트 전에 일부 코드를 실행할 수 있습니다. 해당 코드에서 테스트 자체에서 사용할 수 있는 속성에 값을 할당할 수 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/10/4_autocompletion.png)

 이것은 여러 테스트에서 일부 데이터를 공유해야 하는 경우 매우 유용합니다. 그리고 플러그인은 정의된 속성을 자동 완성할 수 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/10/5_property_new.png)

 디버깅
----

 디버깅 코드가 필요한 경우가 많습니다. 다행히 Pest는 [Xdebug](https://xdebug.org/) 와 잘 작동합니다. 플러그인을 사용하면 디버거로 테스트를 실행할 수 있습니다. PhpStorm에서 직접 모든 디버깅 정보를 볼 수 있으며 중단점을 쉽게 추가할 수 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/10/6_debugging.png)

 Pest는 코드 커버리지도 지원합니다. 이는 우리 코드의 얼마나 많은 부분이 Pest 테스트에 포함되어 있는지 확인하고 더 많은 테스트를 추가해야 하는 위치를 쉽게 찾아낼 수 있음을 의미합니다. 플러그인은 코드 검사를 지원하며 코드 검사 결과는 PhpStorm에서 직접 볼 수도 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/10/7_code_coverage.png)

 PHPUnit과 함께 실행
---------------

 PHPUnit 및 Pest 테스트를 함께 실행할 수 있습니다. 이를 통해 기존 PHPUnit 사용자는 이전 테스트를 모두 변환할 필요가 없고 대신 필요에 따라 전환할 수 있으므로 Pest로 쉽게 전환할 수 있습니다. 플러그인은 또한 두 개의 테스트 프레임워크를 마치 하나인 것처럼 함께 실행할 수 있어야 한다는 원칙을 따릅니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/10/8_running_with_phpunit.png)

 이 게시물이 Pest와 PhpStorm용 플러그인이 무엇을 할 수 있는지에 대한 정보를 제공하기를 바랍니다. Pest에 대한 최신 정보를 얻으려면 [설명서](https://pestphp.com/) 를 빠르게 살펴보고 더 자세히 알아보고 [공식 Discord 서버](https://discord.com/invite/bMAJv82) 에서 다른 사용자와 합류하고 [Twitter에서 Pest를 팔로우](https://twitter.com/pestphp) 하세요.

 *읽어 주셔서 감사합니다!*

![올리버 니브로](https://blog.jetbrains.com/wp-content/uploads/2020/10/oliver-nybroe.jpg) 올리버 니브로  
 덴마크 코펜하겐  
 [Worksome](https://www.worksome.com/) 의 Laravel 백엔드 개발자입니다. [트위터](https://twitter.com/OliverNybroe) | [깃허브](https://github.com/olivernybroe) | [블로그](https://nybroe.dev/)

 [해충](/phpstorm/tag/pest/) [플러그인](/phpstorm/tag/plugins/) [테스트](/phpstorm/tag/testing/)

- 공유하다
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F10%2Fhow-the-pest-phpstorm-plugin-will-improve-your-testing-workflow%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F10%2Fhow-the-pest-phpstorm-plugin-will-improve-your-testing-workflow%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F10%2Fhow-the-pest-phpstorm-plugin-will-improve-your-testing-workflow%2F&via=phpstorm)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F10%2Fhow-the-pest-phpstorm-plugin-will-improve-your-testing-workflow%2F)



 [PhpStorm 2020.3 EAP #4: 사용자 정의 PHP 8 속성](https://blog.jetbrains.com/phpstorm/2020/10/phpstorm-2020-3-eap-4/) [PhpStorm 2020.3 EAP #5: 공동 개발, HTTP 클라이언트와의 Guzzle 통합 등](https://blog.jetbrains.com/phpstorm/2020/10/phpstorm-2020-3-eap-5/)