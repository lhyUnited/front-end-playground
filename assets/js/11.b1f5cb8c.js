(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{411:function(r,t,_){"use strict";_.r(t);var a=_(16),v=Object(a.a)({},function(){var r=this,t=r.$createElement,_=r._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[_("p",[r._v("该系列主要作为曾经的纯前端，对后台和底层的一些弥补，涉及进程、网络通信，以及对 node.js 和相关框架的学习。首先我们来补充点进程、线程的知识。")]),r._v(" "),_("h1",{attrs:{id:"进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程与线程","aria-hidden":"true"}},[r._v("#")]),r._v(" 进程与线程")]),r._v(" "),_("p",[r._v("作为一个非科班纯前端，本骚年最初也是理解不了“讲一下 socket 的工作原理”这样的问题是什么意思的[捂脸]（当然这里面涉及的东西要多少有多少）。"),_("br"),r._v("\n但是还好骚年也算是个上进的娃儿，挖也要挖一下稍微底层的一些知识来补补营养。")]),r._v(" "),_("h2",{attrs:{id:"计算机资源"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#计算机资源","aria-hidden":"true"}},[r._v("#")]),r._v(" 计算机资源")]),r._v(" "),_("p",[r._v("进程和线程涉及系统资源相关，我们先来看看计算机资源。")]),r._v(" "),_("p",[r._v("经典的冯诺依曼结构把计算机系统抽象成 CPU + 存储器 + IO，那么计算机资源无非就两种：")]),r._v(" "),_("h3",{attrs:{id:"_1-计算资源（cpu）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-计算资源（cpu）","aria-hidden":"true"}},[r._v("#")]),r._v(" 1. 计算资源（CPU）")]),r._v(" "),_("p",[r._v("计算资源是操作系统来分配的，也就是常说的操作系统的调度模块，由操作系统按照一定的规则来分配什么时候由谁来获得 CPU 的计算资源，比如分时间片。")]),r._v(" "),_("p",[r._v("早期的 CPU 都是单核，但是同一时间会有很多任务执行。但是有些任务可能是 IO 相关的，就会存在阻塞等待的状态（因为 CPU 计算速度远远比硬盘读写速度快），所以引入的 CPU 分片算法，就是将一段时间进行分片，每个分片分别执行不同的任务。")]),r._v(" "),_("h3",{attrs:{id:"_2-存储资源（内存，硬盘）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-存储资源（内存，硬盘）","aria-hidden":"true"}},[r._v("#")]),r._v(" 2. 存储资源（内存，硬盘）")]),r._v(" "),_("p",[r._v("存储资源就是内存，磁盘这些存储设备的资源。")]),r._v(" "),_("p",[r._v("操作系统使用了虚拟内存机制来管理存储器，从缓存原理的角度来说，把内存作为磁盘的缓存。进程表示一个运行的程序，程序的代码段，数据段这些都是存放在磁盘中的，在运行时加载到内存中。所以虚拟内存面向的是磁盘，虚拟页是对磁盘文件的分配，然后被缓存到物理内存的物理页中。")]),r._v(" "),_("p",[r._v("所以存储资源是操作系统由虚拟内存机制来管理和分配的。")]),r._v(" "),_("h2",{attrs:{id:"进程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程","aria-hidden":"true"}},[r._v("#")]),r._v(" 进程")]),r._v(" "),_("p",[r._v("进程，是计算机中已运行程序的实体。进程曾经是分时系统的基本运作单位。"),_("br"),r._v("\n在面向进程设计的系统中，进程是程序的基本执行实体；在面向线程设计的系统中，进程本身不是基本运行单位，而是线程的容器。"),_("br"),r._v("\n程序本身只是指令、数据及其组织形式的描述，进程才是程序（那些指令和数据）的真正运行实例。")]),r._v(" "),_("h3",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念","aria-hidden":"true"}},[r._v("#")]),r._v(" 概念")]),r._v(" "),_("p",[r._v("用户下达运行程序的命令后，就会产生进程。同一程序可产生多个进程（一对多关系），以允许同时有多位用户运行同一程序，却不会相冲突。"),_("br"),r._v("\n进程需要一些资源才能完成工作，如 CPU 使用时间、内存、文件以及 I/O 设备，且为依序逐一进行，也就是每个 CPU 核心任何时间内仅能运行一项进程。")]),r._v(" "),_("h3",{attrs:{id:"内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内容","aria-hidden":"true"}},[r._v("#")]),r._v(" 内容")]),r._v(" "),_("p",[r._v("一个计算机系统进程包括（或者说“拥有”）下列数据：")]),r._v(" "),_("ul",[_("li",[r._v("那个程序的可运行机器码的一个在内存的映像")]),r._v(" "),_("li",[r._v("分配到的内存（通常是虚拟的一个内存区域）\n"),_("blockquote",[_("p",[r._v("内存的内容包括可运行代码、特定于进程的数据（输入、输出）、调用堆栈、堆栈（用于保存运行时运输中途产生的数据）。")])])]),r._v(" "),_("li",[r._v("分配给该进程的资源的操作系统描述符，诸如文件描述符（Unix 术语）或文件句柄（Windows）、数据源和数据终端")]),r._v(" "),_("li",[r._v("安全特性，诸如进程拥有者和进程的权限集（可以容许的操作）")]),r._v(" "),_("li",[r._v("处理器状态（内文），诸如寄存器内容、物理内存定址等。当进程正在运行时，状态通常存储在寄存器，其他情况在内存")])]),r._v(" "),_("p",[r._v("由于进程拥有独立的内存地址空间，导致了进程之间无法利用直接的内存映射进行进程间通信。")]),r._v(" "),_("h3",{attrs:{id:"特征"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#特征","aria-hidden":"true"}},[r._v("#")]),r._v(" 特征")]),r._v(" "),_("ul",[_("li",[r._v("独立性：进程是系统中独立存在的实体，它可以拥有自己独立的资源，每一个进程都拥有自己私有的地址空间。在没有经过进程本身允许的情况下，一个用户进程不可以直接就访问其他进程的地址空间。")]),r._v(" "),_("li",[r._v("动态性：进程与程序的区别在于，程序只是一个静态的指令集合，而进程是一个正在系统中活动的指令集合。在进程中加入了时间的概念。进程具有自己的生命周期和各种不同的状态，这些概念在程序中都是不具备的。")]),r._v(" "),_("li",[r._v("并发性：多个进程可以在单个处理器上并发执行，多个进程之间不会互相影响。并发性(concurrency)和并行性(parallel)是两个不同的概念。并行指在同一时刻，有多条指令在多个处理器上同时执行；并发指在同一时刻，只能有一条指令执行，但多个进程指令被快速轮换执行(纳秒级)，使得在宏观上具有多个进程同时执行的效果。")])]),r._v(" "),_("h2",{attrs:{id:"线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#线程","aria-hidden":"true"}},[r._v("#")]),r._v(" 线程")]),r._v(" "),_("p",[r._v("线程是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。"),_("br"),r._v("\n一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。")]),r._v(" "),_("p",[_("strong",[r._v("线程是独立调度和分派的基本单位。")]),r._v("\n同一进程中的多条线程将共享该进程中的全部系统资源，如虚拟地址空间，文件描述符和信号处理等等。但同一进程中的多个线程有各自的调用栈（call stack），自己的寄存器环境（register context），自己的线程本地存储（thread-local storage）。"),_("br"),r._v("\n一个进程可以有很多线程，每条线程并行执行不同的任务。")]),r._v(" "),_("p",[r._v("线程解决的最大问题就是它可以很简单地表示共享资源的问题，这里说的资源指的是存储器资源，资源最后都会加载到物理内存。"),_("br"),r._v("\n一个进程的所有线程都是共享这个进程的同一个虚拟地址空间的，也就是说从线程的角度来说，它们看到的物理资源都是一样的，这样就可以通过共享变量的方式来表示共享资源，也就是直接共享内存的方式解决了线程通信的问题。而线程也表示一个独立的逻辑流，这样就完美解决了进程的一个大难题。")]),r._v(" "),_("h2",{attrs:{id:"进程-vs-线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进程-vs-线程","aria-hidden":"true"}},[r._v("#")]),r._v(" 进程 VS 线程")]),r._v(" "),_("p",[r._v("进程（process）和线程（thread）是操作系统的基本概念。"),_("br"),r._v("\n进程和线程都是一个时间段的描述，是 CPU 工作时间段的描述，不过是颗粒大小不同。")]),r._v(" "),_("ol",[_("li",[r._v("进程拥有独立的虚拟内存地址空间和内核数据结构(页表，打开文件表等)，当子进程修改了虚拟页之后，会通过写时拷贝创建真正的物理页。线程共享进程的虚拟地址空间和内核数据结构，共享同样的物理页。")]),r._v(" "),_("li",[r._v("多个进程通信只能采用进程间通信的方式，比如信号，管道，而不能直接采用简单的共享内存方式，原因是每个进程维护独立的虚拟内存空间，所以每个进程的变量采用的虚拟地址是不同的。多个线程通信就很简单，直接采用共享内存的方式，因为不同线程共享一个虚拟内存地址空间，变量寻址采用同一个虚拟内存。")]),r._v(" "),_("li",[r._v("进程上下文切换需要切换页表等重量级资源，线程上下文切换只需要切换寄存器等轻量级数据。")]),r._v(" "),_("li",[r._v("进程的用户栈独享栈空间，线程的用户栈共享虚拟内存中的栈空间，没有进程高效。")]),r._v(" "),_("li",[r._v("一个应用程序可以有多个进程，执行多个程序代码，多个线程只能执行一个程序代码，共享进程的代码段。")]),r._v(" "),_("li",[r._v("进程采用父子结构，线程采用对等结构。")])]),r._v(" "),_("p",[r._v("需要快速理解进程和线程的话，阮大神的"),_("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("《进程与线程的一个简单解释》"),_("OutboundLink")],1),r._v("里面描述挺形象的。")]),r._v(" "),_("p",[_("strong",[r._v("线程相对于进程的优点：")])]),r._v(" "),_("ol",[_("li",[r._v("开销小。")]),r._v(" "),_("li",[r._v("资源共享性好。")])]),r._v(" "),_("p",[_("strong",[r._v("线程相对于进程的缺点：")])]),r._v(" "),_("ol",[_("li",[r._v("共享资源需要耗费一定的锁资源，同步相对复杂。")]),r._v(" "),_("li",[r._v("一个线程崩溃可能导致整个进程崩溃，这个当然是自己的应用程序有问题。")])]),r._v(" "),_("h2",{attrs:{id:"理解进程与线程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#理解进程与线程","aria-hidden":"true"}},[r._v("#")]),r._v(" 理解进程与线程")]),r._v(" "),_("p",[_("strong",[r._v("一个程序至少有一个进程，一个进程至少有一个线程。")]),_("br"),r._v("\n线程的划分尺度小于进程，使得多线程程序的并发性高。进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。"),_("br"),r._v("\n相对进程而言，线程是一个更加接近于执行体的概念，它可以与同进程中的其他线程共享数据，但拥有自己的栈空间，拥有独立的执行序列。")]),r._v(" "),_("p",[_("strong",[r._v("进程和线程的主要差别在于它们是不同的操作系统资源管理方式。")]),_("br"),r._v("\n进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响。"),_("br"),r._v("\n而线程只是一个进程中的不同执行路径，线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间，一个线程死掉就等于整个进程死掉。"),_("br"),r._v("\n所以多进程的程序要比多线程的程序健壮，但在进程切换时，耗费资源较大，效率要差一些。但对于一些要求同时进行并且又要共享某些变量的并发操作，只能用线程，不能用进程。")]),r._v(" "),_("p",[_("strong",[r._v("进程是操作系统分配资源的最小单元，线程是操作系统调度的最小单元。")]),_("br"),r._v("\n进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动，进程是系统进行资源分配和调度的一个独立单位。"),_("br"),r._v("\n线程是进程的一个实体，是 CPU 调度和分派的基本单位，它是比进程更小的能独立运行的基本单位。线程自己基本上不拥有系统资源，只拥有一点在运行中必不可少的资源(如程序计数器，一组寄存器和栈)，但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源。"),_("br"),r._v("\n一个线程可以创建和撤销另一个线程；同一个进程中的多个线程之间可以并发执行。")]),r._v(" "),_("p",[r._v("进程是面向磁盘的，是操作系统分配存储资源的最小单元。"),_("br"),r._v("\n为什么不是线程呢，因为线程是在进程的基础上派生出来的。线程占有的是进程的资源，进程占有的是系统分配的资源，跟调度相关的就是 CPU 了。")]),r._v(" "),_("h2",{attrs:{id:"参考"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考","aria-hidden":"true"}},[r._v("#")]),r._v(" 参考")]),r._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.cnblogs.com/lmule/archive/2010/08/18/1802774.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("《进程和线程的区别》"),_("OutboundLink")],1)]),r._v(" "),_("li",[_("a",{attrs:{href:"http://www.cnblogs.com/tiankong101/p/4229584.html",target:"_blank",rel:"noopener noreferrer"}},[r._v("《深入理解进程和线程》"),_("OutboundLink")],1)]),r._v(" "),_("li",[_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%A1%8C%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[r._v("进程- 维基百科"),_("OutboundLink")],1)]),r._v(" "),_("li",[_("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%BA%BF%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[r._v("线程- 维基百科"),_("OutboundLink")],1)]),r._v(" "),_("li",[_("a",{attrs:{href:"http://www.jianshu.com/p/7d9686cfcfbf",target:"_blank",rel:"noopener noreferrer"}},[r._v("《单线程和多线程的简单理解》"),_("OutboundLink")],1)])]),r._v(" "),_("h1",{attrs:{id:"结束语"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#结束语","aria-hidden":"true"}},[r._v("#")]),r._v(" 结束语")]),r._v(" "),_("p",[r._v("这一节主要针对进程、线程进行了介绍，但其实里面的每一个点都可以深入探究或是发散调研。"),_("br"),r._v("\n在这个时候非科班的劣势就出来了，但其实知道缺少什么也是件好事情，也希望本骚年后面可以深入学习和理解这些原理吧。")])])},[],!1,null,null,null);t.default=v.exports}}]);