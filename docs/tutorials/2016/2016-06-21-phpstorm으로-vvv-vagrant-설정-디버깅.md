[튜토리얼](/phpstorm/category/tutorials/) PhpStorm으로 VVV Vagrant 설정 디버깅 
===============================

![제트브레인](https://blog.jetbrains.com/wp-content/uploads/2021/03/jetbrains-200x200.jpg) [제트브레인](https://blog.jetbrains.com/author/jetbrains) 



 트윗으로 시작되었습니다.

> 누가 VVV 및 XDebug와 함께 PHPstorm을 사용하는지 압니까? 설정에 대한 지침이 필요합니다.
> 
>  — 앤드류 우즈(@awoods) [2016년 6월 21일](https://twitter.com/awoods/status/745095098031996929)

 최근에 우리는 프로세스를 가능한 한 간단하게 만들기 위해 PhpStorm에서 디버깅을 많이 변경했습니다. 그래서 저는 디버깅 작업을 수행하는 방법뿐만 아니라 변경해야 할 사항을 정확히 파악하는 데 사용한 프로세스에 대해 블로그를 작성하기로 결정했습니다.

 [Varying Vagrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV) 는 가능한 한 쉽게 워드프레스 작업을 할 수 있도록 설계된 Vagrant 설정입니다. 별도의 URL에서 실행되는 다양한 버전의 WordPress가 있습니다. 이 연습에서는 문서에서 권장하는 플러그인을 설치한 다음 저장소를 복제하고 'vagrant up'을 사용하여 상자를 불러오고 프로비져너를 실행했습니다.

 좋은 소식은 이것이 정말 간단했고 현재의 안정적인 버전 URL인 `http://local.wordpress.dev`에 빠르고 쉽게 내 작업 중인 WordPress 설치를 볼 수 있다는 것입니다.

 가장 먼저 한 일은 PhpStorm에서 프로젝트를 여는 것이었습니다. 나는 VVV를 `vvv`라는 이름으로 내 사용자의 홈 폴더에 있는 `www` 디렉토리에 복제했습니다. 한 프로젝트에서 다양한 버전의 워드프레스를 열어 모든 것을 혼동하고 싶지 않았기 때문에 PhpStorm의 *Open Directory* 옵션을 사용하여 `~/www/vvv/www/wordpress-default`에서 프로젝트를 열었습니다. 이것은 `http://local.wordpress.dev` URL의 웹루트에 직접 연결된 프로젝트를 열었습니다. 매핑 경로를 더 쉽게 만들기 위해 프로젝트를 루트로 만들 항목을 결정할 때 이러한 요소를 고려하는 것이 중요합니다. 자세한 내용은 나중에 설명합니다.

 이 시점에서 나는 이 방랑자 상자가 어떻게 구성되었는지 전혀 모릅니다. Apache를 사용하고 있습니까? Nginx와 PHP-FPM을 사용하고 있습니까? 누가 알아! 그다지 중요하지는 않지만 일반적으로 프로젝트를 연 후 가장 먼저 하는 일은 내가 사용할 PHP 설치를 PhpStorm에 알리는 것입니다. 이 작업을 즉시 수행하면 잠재적인 문제가 더 아래로 나타날 가능성이 줄어듭니다.

 우리가 원하는 설정은 *언어 및 프레임워크* 아래의 환경 설정 창에서 찾은 다음 *PHP* 에서 찾을 수 있습니다(저처럼 게으른 경우 CMD/CTRL+SHIFT+A를 사용하여 작업을 검색한 다음 ` *interp`* 를 입력하여 바로 이동할 수 있습니다) . 새 통역사를 정의해야 하므로 *통역사:* 드롭다운 옆에 있는 *\[…\]* 버튼을 클릭하여 *통역사* 관리 화면으로 이동합니다.

![통역사 대화 상자](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-interpreters.png)

 현재 글로벌 로컬 PHP 설치만 구성되어 있으므로 이 Vagrant 상자에 대한 새 인터프리터를 생성하여 프로젝트에 사용하도록 지시해야 합니다. 방랑자 기계를 위한 인터프리터를 만드는 것은 비교적 간단합니다. 다음 단계를 사용했습니다.

- *\[+\]* 를 클릭하여 새 인터프리터를 추가한 다음 *원격을 선택했습니다.*
- *Vagrant* 라디오 상자를 선택하고 VVV를 복제한 루트 폴더를 *Vagrant Instance Folder* 에 넣습니다. `~/www/vvv/www/wordpress-default`
- PhpStorm은 잠시 생각한 다음 나머지 정보를 올바르게 입력합니다. 완료되면 확인을 클릭합니다.
- PhpStorm이 Vagrant 상자에 연결되어 모든 것이 정상임을 확인한 다음 완료된 인터프리터 설정 대화 상자를 엽니다.

![vvv 생성 인터프리터](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-created-interpreter.png)

 여기서 주의할 사항이 몇 가지 있습니다. 먼저 다른 PhpStorm 프로젝트에서 이 인터프리터를 보고 싶지 않기 때문에 *이 프로젝트에만 표시* 상자를 선택했습니다. 또한 PHP 실행 파일이 올바르게 감지되었지만(예! PHP 7!) 디버거가 설치되어 있지 않다는 것도 확인했습니다. 이 시점에서 너무 걱정하지 않습니다. 이 시스템이 어떻게 구성되어 있는지 전혀 모르고 Xdebug가 CLI가 아닌 HTTP 요청에 대해서만 설정되어 있을 수 있습니다.

 여기에서 보는 것과 같이 다음으로 하고 싶은 것은 Xdebug가 설치되어 있는지 확인하고 설치되어 있다면 어떻게 구성되어 있는지 확인하는 것입니다. 최신 버전의 PhpStorm은 *웹 서버 디버그 유효성 검사* 도구( *실행* 메뉴 아래에 있음)와 함께 제공됩니다. 이를 실행하기 전에 PhpStorm이 로컬 파일의 위치와 이를 서버의 파일에 매핑하는 방법을 알 수 있도록 배포 서버를 만들어야 합니다. 저는 *원격 웹 서버* 를 선택했습니다.   옵션을 선택한 다음 *\[…\]* 버튼을 클릭하여 *배포 서버* 대화 상자를 엽니다.

 또한 SFTP를 사용하여 배포를 생성해야 합니다. 이것은 우리가 이미 PhpStorm에 Vagrant를 사용하고 있다고 말했기 때문에 약간 혼란스러울 수 있으며 거기에서 이것을 유추할 수 있어야 합니다. 도구가 파일을 생성할 위치를 알고 HTTP 요청을 통해 이를 호출할 수 있도록 디버그 유효성 검사 도구에 대한 배포 구성만 생성하면 됩니다. 이것은 고통스러워 보일 수 있지만 유효성 검사 도구를 실행할 수 있으려면 다음과 같이 하기만 하면 됩니다.

![vvv-배포-메인](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-deployment-main.png)![vvv 배포 매핑](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-deployment-mapping.png)

 IP 주소가 아닌 *SFTP 호스트* 로 사이트에 액세스하는 데 사용하는 URL을 어떻게 사용해야 했는지 확인하고 호스트 머신의 프로젝트 루트에서 가상 머신의 프로젝트 루트로의 간단한 매핑을 추가했습니다. . 디버거 구성 유효성 검사 도구를 실행하면 다음이 표시됩니다.

![vvv 유효성 검사 결과](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-validate-results.png)

 인터프리터를 생성할 때 이전에 우려했던 것은 정확합니다. 가상 머신의 PHP에는 Xdebug가 설치 및 구성되어 있지 않습니다. VVV 문서를 조사한 후 이것이 쉬운 수정이라는 것을 알았습니다. Vagrant 상자에 `vagrant ssh`를 입력하고 `xdebug\_on`을 실행하여 Xdebug를 설치하고 구성할 수 있습니다.

 이 스크립트가 Xdebug를 구성한 설정을 살펴보니 ` [xdebug.remote\_connect\_back`](https://xdebug.org/docs/all_settings#remote_connect_back) 설정을 사용하여 디버그 세션을 요청한 IP 주소로 되돌려 보내는 것을 선호한다는 점을 제외하고는 좋아 보였습니다. IP 주소를 수동으로 지정하는 것보다 VVV가 구성한 대로 설정을 그대로 두었습니다.

 PhpStorm으로 돌아가서 디버그 구성 유효성 검사 도구를 다시 실행할 수 있으며 이번에는 모든 것이 유망해 보입니다.

![vvv-validate-works](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-validate-works.png)

 이제 모든 것이 파란색임을 확인했으며 디버그 세션이 예상대로 작동할 것이라고 확신합니다.

 디버거를 테스트하기 위해 `index.php`를 열고 실제 WordPress 메인 파일이 필요하기 직전에 17행에 중단점을 설정했습니다. 이 시점에서 저는 실제로 디버깅하는 데 관심이 없고 스크립트가 중지되고 PhpStorm이 단계 디버깅을 사용할 수 있는 상태로 열리는지 확인하고 싶습니다. 연결을 수신한 후 Chrome으로 이동하여 내가 사용하는 Chrome 확장 프로그램을 통해 디버깅을 활성화한 다음 새로고침을 누릅니다.

 아무 일도 일어나지 않고 스크립트가 중단되지만 PhpStorm을 보면 디버거 세션이 시작된 것을 알 수 있지만 PhpStorm은 실제로 디버깅하지 않고 그냥 앉아 있는 것처럼 보입니다. 이것은 PhpStorm이 서버의 파일을 로컬 프로젝트의 파일에 매핑하는 방법을 알아낼 수 없을 때 발생하는 일반적인 문제입니다. 경로 문제가 있습니다. 열린 *디버그* 창에서 *디버거* 탭을 클릭하면 문제가 의심됨을 확인하는 메시지가 표시됩니다.

![vvv 문제](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-problem.png)

 이전에 PhpStorm에게 로컬 시스템에서 Vagrant 호스트로 파일을 매핑하는 방법을 이미 설명했지만 여기에 문제가 있습니다. 로컬 경로를 Vagrant 상자의 공유 폴더 경로인 `/vagrant`에 매핑했지만 실제 파일은 `/srv/www`에서 제공됩니다. 이것은 아마도 심볼릭 링크나 다른 속임수 때문일 것입니다. 나는 보았지만 나의 2분의 피상적인 시선으로는 그것을 알아낼 수 없었다.

 오류를 주의 깊게 살펴보면 모든 것을 황금색으로 만들기 위해 생성해야 하는 매핑이 표시됩니다. 로컬 프로젝트에서 `/srv/www/wordpress-default`를 찾을 위치를 PhpStorm에 알려야 하며 *Click to setup path mappings(경로 매핑을 설정하려면 클릭* )를 클릭하여 수행할 수 있습니다. `wordpress-default`의 로컬 경로 옆에 있는 상자에 서버의 위치를 `/srv/www/wordpress-default`로 추가하고 Enter 키를 누릅니다.

![vvv 매핑](https://blog.jetbrains.com/wp-content/uploads/2016/06/phpstorm-vvv-mapping.png)

 확인 버튼이 활성화되어야 합니다. 다시 말하지만, `/vagrant`에 이미 매핑한 공유 폴더와 `/srv/www`에 있는 웹루트 위치 사이에 불일치가 있기 때문에 이 추가 매핑만 생성하면 된다는 점을 지적할 가치가 있습니다. 대부분의 다른 구성에서는 이 작업을 수행할 필요가 없습니다.

 확인을 누르면 모든 것이 예상대로 작동하고 필요에 따라 WordPress 디버깅을 시작할 수 있습니다. 디버깅 작업을 시작하는 데 약 35분이 걸렸습니다. 주로 개발자이자 인간으로서 문제를 설명하는 디버그 창의 오류를 읽지 않았기 때문입니다. 그냥 지나쳤고 `/var/www` 폴더가 아니라 `/vagrant` 폴더의 매핑 문제라고 가정했습니다. 실제로 메시지를 읽은 후 실제로 디버깅이 작동하는 데 20초가 걸렸습니다.

 일부러 긴 글입니다. 이 문제에 대한 실제 답을 제시하기 보다는 디버깅 문제를 실제로 해결하는 과정을 단계별로 설명하고 싶었습니다. 다른 사람들이 디버깅 문제를 해결하는 데 도움이 되기를 바랍니다. 특히 경험이 없는 타사 가상 머신이나 컨테이너로 작업할 때 그렇습니다.

 도움이 되는지 알려주세요.

 *— Gary와 PhpStorm 팀*

 [PhpStorm](/phpstorm/tag/phpstorm/) [Vagrant](/phpstorm/tag/vagrant/) [vvv](/phpstorm/tag/vvv/) [WordPress](/phpstorm/tag/wordpress/) [Xdebug](/phpstorm/tag/xdebug/) [디버깅](/phpstorm/tag/debugging/)

- 공유하다
- [](https://www.facebook.com/sharer.php?u=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2016%2F06%2Fdebugging-vvv-vagrant-setup-with-phpstorm%2F)
- [](https://twitter.com/intent/tweet?source=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2016%2F06%2Fdebugging-vvv-vagrant-setup-with-phpstorm%2F&text=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2016%2F06%2Fdebugging-vvv-vagrant-setup-with-phpstorm%2F&via=phpstorm)
- [](http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fblog.jetbrains.com%2Fphpstorm%2F2016%2F06%2Fdebugging-vvv-vagrant-setup-with-phpstorm%2F)



 [](https://blog.jetbrains.com/phpstorm/2016/06/xdebug-on-demand-for-cli-php-scripts-in-phpstorm-2016-2-eap/) PhpStorm 2016.2 [PhpStorm 2016.2 EAP 162.1024](https://blog.jetbrains.com/phpstorm/2016/06/phpstorm-2016-2-eap-162-1024/) [의 CLI PHP 스크립트용 Xdebug On Demand](https://blog.jetbrains.com/phpstorm/2016/06/xdebug-on-demand-for-cli-php-scripts-in-phpstorm-2016-2-eap/) [](https://blog.jetbrains.com/phpstorm/2016/06/phpstorm-2016-2-eap-162-1024/)