[소식](/phpstorm/category/news/) PHPStan 및 시편 지원이 곧 PhpStorm에 제공됩니다. 
=====================================

![로만 프론스키](https://secure.gravatar.com/avatar/269798998e24876e4f3ea6f6d1effdc7?s=200&r=g) [로만 프론스키](https://blog.jetbrains.com/author/rpronskiy) 



 목차

  

- [구현된 것](#Whats_implemented "구현된 내용")
- [무슨 일이야](#Whats_coming "오는 것")
- [이것은 모두 오픈 소스입니다](#This_is_all_open-source "이것은 모두 오픈 소스입니다")
- [언제 사용해 볼 수 있습니까?](#When_will_this_be_available_to_try "언제 사용해 볼 수 있습니까?")



 인기 있는 정적 분석기 PHPStan 및 Spec이 PhpStorm에서 곧 지원될 예정입니다. 더욱이 이 지원 뒤에 있는 코드는 오픈 소스가 될 것입니다.

 외부 도구로 [PHPStan](https://github.com/phpstan/phpstan) 과 [시편](https://github.com/vimeo/psalm) 을 실행하는 것은 항상 가능했습니다. 이제 커뮤니티에서 도구에 대한 상당한 관심을 보았으므로 PhpStorm에서 도구를 사용하는 경험을 개선하고자 합니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/07/quality_tools_stats.png)  
 *출처: [JetBrains 개발자 생태계 설문조사 보고서](https://www.jetbrains.com/lp/devecosystem-2020/php/#:~:text=What%20additional%20quality%20tools%20do%20you%20use%20regularly%2C%20if%20any%3F) .*

 구현된 것
------

 첫째, 우리는 PHPStan과 시편이 PhpStorm에서 일류 품질 도구로 작동하도록 하는 데 중점을 두었습니다.

- 둘 다 즉석 파일 강조 표시 및 일괄 실행 검사 기능을 통해 다른 모든 품질 도구와 마찬가지로 작동합니다.
- Docker, WSL 등과 같은 원격 인터프리터를 통해 실행할 수 있습니다.
- 작곡가.json의 PHPStan 및 시편 설정은 자동으로 감지됩니다.
- PHPStan 및 시편에 대한 설정은 해당 검사 옵션에서 구성할 수 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/07/psalm_inspection_02.png)

 무슨 일이야
-------

 PhpStorm 코드 분석에서 시편 주석에 대한 지원을 추가할 계획입니다. 이 기능은 아직 개발 초기 단계이며 가장 인기 있는 태그부터 점진적으로 지원을 출시할 예정입니다.

 또 다른 큰 부분은 배열 키 및 값 유형에 대한 지원입니다. 이 또한 활발히 개발되고 있습니다.

![](https://blog.jetbrains.com/wp-content/uploads/2020/07/array_shapes.png)

 이것은 모두 오픈 소스입니다
----------------

 우리는 PHPStan과 시편의 지원을 별도의 플러그인으로 분리하기로 결정했습니다. 둘 다 오픈 소스이며 Apache 2 라이선스에 따라 GitHub에서 이미 사용할 수 있습니다.

 <https://github.com/JetBrains/phpstorm-psalm-plugin>  
 <https://github.com/JetBrains/phpstorm-phpstan-plugin>

 커뮤니티는 이러한 정적 분석 도구에 대한 IDE의 지원을 개선하고 참여하는 것을 환영합니다.

 반면에 이러한 플러그인은 참조 예제이자 자신의 플러그인에 대한 영감의 원천으로 볼 수 있습니다. 예를 들어 Pest용 [Pest](https://github.com/pestphp/pest) [IntelliJ](https://github.com/pestphp/pest-intellij%20) 플러그인과 같이 PhpStorm에서 즐겨 사용하는 도구에 대한 지원을 만들 수 있습니다. 또는 [Laravel Idea](https://plugins.jetbrains.com/plugin/13441-laravel-idea) 와 같은 상용 솔루션을 만들 수도 있습니다.

 유료 플러그인 개발을 고려하고 있다면 JetBrains는 플러그인 공급업체가 플러그인을 더 많은 청중에게 제공할 수 있도록 하는 [Marketplace](https://plugins.jetbrains.com/marketplace) 플랫폼을 제공하고 적당한 비용으로 지불과 같은 일을 처리한다는 점을 명심하십시오.

 언제 사용해 볼 수 있습니까?
-----------------

 플러그인은 PhpStorm 2020.3과 함께 번들로 제공되며 기본적으로 활성화되어 있습니다. 즉, 2020.3의 Early Access 프로그램이 시작되는 9월경에 지원을 시도할 수 있습니다.

 ⚠️ 플러그인의 소스 코드는 이미 사용 가능하지만 PhpStorm 2020.1 또는 2020.2에서는 작동하지 않습니다.

---

 오늘은 그게 다야. 이에 대한 귀하의 생각을 듣고 싶습니다!

 JetBrains PhpStorm 팀  
 *발전을 위한 추진력*

 [PHPStan](/phpstorm/tag/phpstan/) [시편](/phpstorm/tag/psalm/) [품질 도구](/phpstorm/tag/quality-tools/) [정적 분석](/phpstorm/tag/static-analysis/)

- 공유하다
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F07%2Fphpstan-and-psalm-support-coming-to-phpstorm%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F07%2Fphpstan-and-psalm-support-coming-to-phpstorm%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F07%2Fphpstan-and-psalm-support-coming-to-phpstorm%2F&via=phpstorm)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2020%2F07%2Fphpstan-and-psalm-support-coming-to-phpstorm%2F)



 [PhpStorm 2020.2 EAP #6: 통합 유형이 여기](https://blog.jetbrains.com/phpstorm/2020/07/phpstorm-2020-2-eap-6-union-nbsp-types-are-here/) [에 있습니다 PhpStorm 2020.1.3이 출시되었습니다](https://blog.jetbrains.com/phpstorm/2020/07/phpstorm-2020-1-3-is-released/)