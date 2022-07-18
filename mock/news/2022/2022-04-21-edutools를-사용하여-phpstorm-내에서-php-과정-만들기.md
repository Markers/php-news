<div class="content">[EduTools](/education/category/edutools/) [뉴스](/education/category/news/) EduTools를 사용하여 PhpStorm 내에서 PHP 과정 만들기 
========================================

<div class="post-info">![아나스타샤 크라무시나](https://secure.gravatar.com/avatar/4d5ced830370776bb88663398109f42c?s=200&r=g)<div class="post-info__text"> [아나스타샤 크라무시나](https://blog.jetbrains.com/author/anastasiia-khramushina-jetbrains-com) <time class="publish-date" data-day="21" data-month="04" data-year="2022" datetime="2022-04-21"></time></div></div><div class="ez-toc-v2_0_17 counter-hierarchy ez-toc-transparent" id="ez-toc-container"><div class="ez-toc-title-container"> 목차

 <span class="ez-toc-title-toggle"><a class="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle" style="display: none;"></a></span> </div><nav>- [코스 만들기](#Create_a_course "코스 만들기")
- [코스에 수업 추가](#Add_lessons_to_your_course "코스에 수업 추가")
- [과제로 수업 채우기](#Fill_your_lesson_with_tasks "과제로 수업 채우기")
    - [작업 만들기](#Create_a_task "작업 만들기")
    - [작업 설명 추가](#Add_a_task_description "작업 설명 추가")
    - [자리 표시자 추가](#Add_placeholders "자리 표시자 추가")
    - [테스트 작성](#Write_tests "테스트 작성")

</nav></div> 전문 경력의 어느 시점에서 동료나 학생과 프로그래밍 지식을 공유하고 싶을 수 있습니다. 더 많은 청중과 경험을 공유하기 위해 자신의 블로그, YouTube 채널 또는 소셜 미디어 계정을 시작할 수도 있습니다. 이 중 관심 있는 것이 있다면 좋은 소식이 있습니다. 이제 PhpStorm 내에서 자신만의 교육 과정을 만들 수 있습니다! 이 기능은 무료이며 몇 번의 클릭만으로 PhpStorm에 설치할 수 있는 [EduTools 플러그인 v2022.2](https://blog.jetbrains.com/education/2022/03/04/edutools-plugin-v2022-2/) 릴리스와 함께 사용할 수 있게 되었습니다.

<figure class="wp-block-image size-full">![](https://blog.jetbrains.com/wp-content/uploads/2022/04/featured_image-2.png)</figure> [에듀툴즈 플러그인 설치](https://plugins.jetbrains.com/plugin/10081-edutools "EduTools 플러그인 설치")

 EduTools란 무엇입니까?
=================

 EduTools는 PhpStorm을 포함한 JetBrains IDE에 직접 설치할 수 있는 무료 플러그인입니다. [JetBrains 교육 제품](https://www.jetbrains.com/edu-products/) 중 하나인 플러그인은 전 세계 사용자가 PHP, Java, Kotlin, Python, Scala, JavaScript, Rust, C++ 및 Go와 같은 다양한 프로그래밍 언어를 배우고 가르칠 수 있도록 하는 것을 목표로 합니다. 700,000명 이상의 사용자가 이미 EduTools를 사용하여 프로그래밍을 배우거나 가르쳤습니다!

 코스 작성자는 EduTools의 풍부한 교육 기능을 활용하여 학생들이 프로그래밍을 배우도록 동기를 부여하고 학습 과정을 촉진하며 프로그래밍을 즐길 수 있도록 도울 수 있습니다. EduTools를 코스 작성자로 사용하여 수행할 수 있는 몇 가지 작업을 살펴보겠습니다.

 💡 대화형 과정을 만들고 이론과 실습으로 채우세요.  
 ☑️ 객관식 문제 또는 출력으로 검증된 코딩 연습과 같은 다양한 작업으로 학습자의 지식을 테스트합니다.  
 ⚙️ "여기에 입력"과 같은 사용자 지정 자리 표시자를 추가하고 이들 사이에 종속성을 생성하여 학습자가 동일한 답변을 두 번 검토할 필요가 없도록 합니다.  
 🗨️ 작업을 자동으로 확인하고 유용한 오류 메시지로 즉각적인 피드백을 제공하는 테스트를 작성하세요.  
 🖇️ 학습자가 올바른 솔루션을 찾는 데 도움이 되도록 자세한 정보 또는 관련 링크가 포함된 힌트를 추가하세요.  
 🔁 코스를 공개 또는 비공개로 다른 사람들과 공유하세요.

 귀하의 코스는 학습자가 전문 개발 도구에 대한 경험을 얻는 동안 학습자에게 실습, 대화식 학습 방법을 제공합니다. 또한 모든 과정이 JetBrains IDE에서 바로 진행되기 때문에 코드 분석, 즉석 오류 강조 표시 및 코드 완성과 같은 스마트 코딩 지원 기능을 통해 학습자는 코드 작업 방법을 더 쉽게 이해할 수 있습니다.

 코스는 어떻게 만들 수 있나요?
==================

 시작하려면 PhpStorm용 [EduTools 플러그인을 설치](https://plugins.jetbrains.com/plugin/10081-edutools) 하세요. 최신 버전의 EduTools를 설치해야 합니다.

1. **설정/기본 설정** 대화 상자(⌘ ,)에서 **플러그인** 으로 이동합니다.
2. **플러그인** 대화 상자에서 **마켓플레이스** 탭으로 전환합니다.
3. 열리는 대화 상자에서 **EduTools** 를 검색하고 **설치** 를 클릭합니다.

<figure class="wp-block-image size-full is-resized">![](https://blog.jetbrains.com/wp-content/uploads/2022/04/2022-04-21_14-40-29-1.png)</figure><span class="ez-toc-section" id="Create_a_course"></span> 코스 만들기<span class="ez-toc-section-end"></span>
--------------------------------------------------------------------------------------------------------

 나만의 교육 과정을 만들려면 시작 화면의 **내 과정** 탭으로 이동하여 점 3개 버튼( **⋮** )을 클릭하고 **과정 만들기…** 를 선택합니다. 또는 **파일 | 배우고 가르친다 | 새 과정** 을 만들고 제목, 작성자 및 설명 세부 정보를 입력합니다.

![](https://lh3.googleusercontent.com/QgwG2b9jF83dL1sDnIt8B4VdoO8-z17y-VsuTWA7tuHEY7ac7L1vrWHUDlqLCXWG87CuZKU49iHo7ZmUl9awMa-LLE8dk7edNgckBsQE2Y_Na-VmhbzqZmmvNgntTkLvmG2salHj)

<span class="ez-toc-section" id="Add_lessons_to_your_course"></span> 코스에 수업 추가<span class="ez-toc-section-end"></span>
----------------------------------------------------------------------------------------------------------------------

 IDE로 만든 모든 과정은 수업 목록으로 구성됩니다. 수업과 프레임워크 수업의 두 가지 수업 유형이 있습니다. 여러 작업을 통해 코드로 지속적으로 작업할 수 있는 프레임워크 수업에 대해 자세히 알아보려면 [교육자를 위한 프레임워크 수업 가이드를](https://plugins.jetbrains.com/plugin/10081-edutools/docs/framework-lessons-guide-for-educators.html) 참조하세요.

 새 수업을 추가하려면 프로젝트를 강조 표시하고 **파일 메뉴 | 새로운 | 수업** . 코스 구조를 보려면 **보기 | 도구 창 | 프로젝트** .

<figure class="wp-block-image size-full is-resized">![](https://blog.jetbrains.com/wp-content/uploads/2022/04/edu_course_structure_php.png)</figure><span class="ez-toc-section" id="Fill_your_lesson_with_tasks"></span> 과제로 수업 채우기<span class="ez-toc-section-end"></span>
------------------------------------------------------------------------------------------------------------------------

 각 단원에는 작업이 포함되어 있습니다. 5가지 작업 유형이 있습니다.

- Edu – 테스트로 검증된 코딩 연습.
- 출력 – 출력으로 검증된 코딩 연습.
- 이론 – 검증이 없는 이론적 학습 자료.
- 객관식 – 단일 또는 객관식 퀴즈.
- IDE – IDE 기능을 배우는 데 도움이 되는 작업입니다.

 교육 과정에서 가장 일반적인 작업 유형인 Edu 작업에 대해 자세히 살펴보겠습니다. 다른 유형의 작업에 대한 자세한 내용은 [교육자 시작 안내서](https://plugins.jetbrains.com/plugin/10081-edutools/docs/educator-start-guide.html?section=PHP) 를 참조하십시오.

### <span class="ez-toc-section" id="Create_a_task"></span> 작업 만들기<span class="ez-toc-section-end"></span>

 Edu 작업 디자인은 매우 간단합니다. 수정해야 하는 작업 파일과 작성된 코드의 유효성을 검사하는 테스트 파일이 있습니다. 새 Edu 작업을 만들려면 **파일 | 새로운 | 작업** (또는 수업을 마우스 오른쪽 버튼으로 클릭하고 **새로 만들기 | 작업** 선택)하고 목록에서 *Edu* 를 선택합니다.

![](https://lh4.googleusercontent.com/pvmS0sBPUqVzD55zi02_mHdrhTUg0gjbqXhNHR8QakyRwTW7p3Ljf5S66IDFAOqFge2pmji8D4211DpSEZys1wGHRXTHaXyKbXUoy2yX6-lVoNi10ODEfY6gXAuKnk58XIzrGuSh)

 *Task.php* 파일을 열어 연습에 필요한 코드를 작성합니다. 예를 들면 다음과 같습니다.

```
<pre class="EnlighterJSRAW" data-enlighter-group="" data-enlighter-highlight="" data-enlighter-language="generic" data-enlighter-linenumbers="" data-enlighter-lineoffset="" data-enlighter-theme="" data-enlighter-title=""> <?php
    함수 합계($숫자)
    {

    $ 합계 = 0;

    foreach($숫자를 $숫자로) {
    $sum += $숫자;
    }

    반환 $sum;
    }
```

 컨텍스트 메뉴에서 **실행** 옵션을 선택하거나 **⇧+F10** (Mac의 경우 **⌃R** )을 눌러 코드를 실행하고 예상대로 작동하는지 확인합니다.

<figure class="wp-block-image size-full is-resized">![](https://blog.jetbrains.com/wp-content/uploads/2022/04/edu_run_task_php.png)</figure>### <span class="ez-toc-section" id="Add_a_task_description"></span> 작업 설명 추가<span class="ez-toc-section-end"></span>

 이제 작업 설명을 추가할 차례입니다. **작업 설명** 패널 상단에 있는 **편집** 아이콘을 클릭하거나 *task.html* 파일을 엽니다. 여기에서 이미지, 유용한 힌트 또는 코스 내 링크를 추가하여 학습자에게 특정 수업, 작업 또는 파일을 참조할 수 있습니다. 어두운 IDE 테마를 사용할 때 별도의 스크린샷 세트를 표시하도록 플러그인에 지시할 수도 있습니다!

![](https://lh4.googleusercontent.com/My56UiDcse3PtsgSOiThBZyCtPhUPvJxI-ErBea15V4ZnICFfiA6RR7pR1iSQVho4AJe4FbDueGHyh6BYmk7bSU8fz6W93MyE1LUtiVQHPK5QEsFSHveYGGRFXKdvC3nrXan1UP1)

### <span class="ez-toc-section" id="Add_placeholders"></span> 자리 표시자 추가<span class="ez-toc-section-end"></span>

 과정을 보다 인터랙티브하게 만들기 위해 작업에 사용자 지정 답변 자리 표시자를 추가하고 작업 간의 종속성을 설정할 수 있습니다. 학습자가 채울 코드의 일부를 선택하고 컨텍스트 메뉴에서 **답변 자리 표시자 추가** 명령을 호출한 다음 자리 표시자 텍스트를 추가합니다.

![](https://lh6.googleusercontent.com/H4Qut2PcojKPvwDdBIG6FpSeu9B2PgmAuO3b9N-Pe0-stMhuihGOjWOejq6ZbbkxovxrFMc9Kl6VtWvMheyHEaXCfM6Pg9Dv9mM8vaWX1LfkDF47LhpUgAHwrJ6zCKH-y_c02IMN)

 다음 작업에 자리 표시자를 추가하면 이 두 자리 표시자 간에 종속성을 만들 수 있습니다. 이 기능에 대해 자세히 알아보려면 [교육자를 위한 프레임워크 수업 가이드 를](https://plugins.jetbrains.com/plugin/10081-edutools/docs/framework-lessons-guide-for-educators.html) 확인하세요.

### <span class="ez-toc-section" id="Write_tests"></span> 테스트 작성<span class="ez-toc-section-end"></span>

 사용자 정의 테스트를 작성하여 **학습자의 솔루션을 자동으로 확인하고 즉각적인 피드백을 제공할 수 있습니다** . 모든 작업에는 수정해야 하는 test/tests 디렉토리에 test.php 파일이 있습니다. 코드가 자체 테스트를 통과했는지 확인하려면 작업 설명 패널 하단에 있는 **확인** 버튼을 클릭합니다. 코드와 테스트가 정확하면 *올바른* 메시지가 표시됩니다.

![](https://lh5.googleusercontent.com/HhgM-sgF9YLY4PhUdOG2MIfgmdaA9Tvy2VSrtmuB-4dDlb0DqqW152w7MYjthi8Ko6SW0OHM0-vumqRkubGMt_gxavqzBKocydmbtGWrze8YlfC7rC3xnvYuIOjLiECgg9rgFKXs)

 코스 미리보기
========

 코스 생성을 마치면 학습자의 관점에서 코스를 보고 테스트하는 것이 좋습니다. 코스 보기를 마우스 오른쪽 버튼으로 클릭하고 **코스 생성기 | 코스 미리보기를 생성** 하여 학습자 모드에서 코스를 엽니다.

![](https://lh3.googleusercontent.com/YiMsu7Dt37qO8yZz_ynAO6ImoT1q3bQwtxcWFMwugdtZZdWrz9a3vIhd6LKaPYCg7edL9NreXx8n0LzeNGz3cT16wWVfvQN-600sJNwsNWSnRESPJ9H9HRJv64ln1aJccvlesVlL)

 이 모드에서는 코스 구조를 확인하고, **확인** 버튼을 사용하여 솔루션을 확인하고, 오답 피드백을 확인하고, 작업 설명에서 힌트와 링크를 사용할 수 있는지 확인하고, 정답 피드백을 확인할 수 있습니다.

 다른 사람과 코스 공유
=============

 코스를 공유할 수 있는 몇 가지 옵션이 있습니다. 플러그인 및 코스 저장소인 [JetBrains Marketplace](https://plugins.jetbrains.com/) 에 업로드하거나 GitHub에 푸시하거나 아카이브로 내보내 비공개로 배포할 수 있습니다. 코스가 Marketplace에 등록되면 코스에 대한 자세한 통계를 보고 코스에 대한 정보를 관리하고 평가 및 리뷰를 확인할 수 있습니다.

<figure class="wp-block-image size-full is-resized">![](https://blog.jetbrains.com/wp-content/uploads/2022/04/2022-04-21_15-06-50.png)</figure> 공유 옵션 및 기타 EduTools 기능에 대해 자세히 알아보려면 [교육자 시작 안내서](https://plugins.jetbrains.com/plugin/10081-edutools/docs/educator-start-guide.html?section=PHP#create_tasks) 를 참조하십시오. 코스 판매에 관심이 있거나 질문이나 공유하고 싶은 아이디어가 있는 경우 이에 대해 논의해 드리겠습니다. education@jetbrains.com으로 이메일을 보내주십시오.

 이제 코스 작성자의 관점에서 EduTools의 주요 기능에 대해 모두 알게 되었습니다. 코스를 만들 때 경험을 풍부하게 하기 위해 지속적으로 새로운 기능을 추가하고 플러그인에 주요 개선 사항을 릴리스합니다. 그러나 누락된 사항이 있는 경우 향후 릴리스에서 기꺼이 구현하겠습니다! 여기에 댓글을 남기거나 [Twitter](https://twitter.com/JetBrains_Edu) 에서 게시물을 공유하거나 [문제 추적기](https://youtrack.jetbrains.com/issues?q=project:%20%7BEDU%7D) 에서 문제를 만드세요.

 *교육 제품 팀*

<div class="content__row"><div class="tag-list"> [PhpStorm](/education/tag/phpstorm/)</div>- <span>공유하다</span>
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Feducation%2F2022%2F04%2F21%2Fcreate-php-courses-inside-phpstorm-with-edutools%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Feducation%2F2022%2F04%2F21%2Fcreate-php-courses-inside-phpstorm-with-edutools%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Feducation%2F2022%2F04%2F21%2Fcreate-php-courses-inside-phpstorm-with-edutools%2F)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Feducation%2F2022%2F04%2F21%2Fcreate-php-courses-inside-phpstorm-with-edutools%2F)

</div><div class="content__pagination"> [이제 PhpStorm](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-release/) 2022.1을 사용할 수 있습니다 [. PhpStorm 2022.1.1 미리 보기](https://blog.jetbrains.com/phpstorm/2022/04/phpstorm-2022-1-1-preview/)</div></div><div class="container comments-container"><div class="content"><div id="remark42"></div></div></div>