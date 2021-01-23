(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{374:function(v,_,e){"use strict";e.r(_);var t=e(16),i=Object(t.a)({},function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("第七章主要介绍 api。")]),v._v(" "),e("h2",{attrs:{id:"box2d-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#box2d-api","aria-hidden":"true"}},[v._v("#")]),v._v(" Box2D api")]),v._v(" "),e("h3",{attrs:{id:"box2d-分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#box2d-分类","aria-hidden":"true"}},[v._v("#")]),v._v(" Box2D 分类")]),v._v(" "),e("p",[v._v("Box2D 所有的 api 可参照"),e("a",{attrs:{href:"http://www.kyucon.com/doc/box2d/",target:"_blank",rel:"noopener noreferrer"}},[v._v("Box2D_api"),e("OutboundLink")],1),v._v("。")]),v._v(" "),e("p",[v._v("可发现，Box2D 具体分为三大类：")]),v._v(" "),e("ul",[e("li",[v._v("碰撞类(collision)：碰撞模块定义了形状，broad-phase 算法，碰撞的功能/查询")]),v._v(" "),e("li",[v._v("基础类(common)：包括基础系统配置、数据类型、基础数学运算")]),v._v(" "),e("li",[v._v("动力学类(dynamics)：包括模拟物理世界，刚体(body)，接触管理(contacts)，以及关节(joint)")])]),v._v(" "),e("p",[v._v("具体的说明是个人整理的，有些参照网上资源，可能不完整且有偏差。")]),v._v(" "),e("h2",{attrs:{id:"common"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#common","aria-hidden":"true"}},[v._v("#")]),v._v(" common")]),v._v(" "),e("h3",{attrs:{id:"math"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#math","aria-hidden":"true"}},[v._v("#")]),v._v(" math")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("b2Vec2")]),v._v("：二维向量")]),v._v(" "),e("li",[e("code",[v._v("b2Mat22")]),v._v("：一个由两个 b2Vec2 组成的 2*2 方阵，可直接由两个 b2Vec2（col1、col2）构造或者由一个角度值构造")]),v._v(" "),e("li",[e("code",[v._v("b2Math")]),v._v("：基本数学运算，如向量和矩阵的计算、产生随机数等")])]),v._v(" "),e("h3",{attrs:{id:"bssettings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bssettings","aria-hidden":"true"}},[v._v("#")]),v._v(" bsSettings")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("bsSettings")]),v._v("：基础系统配置，如 pi 的值、每秒的时间、每米的大小、睡眠时间等等")])]),v._v(" "),e("h2",{attrs:{id:"collisions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#collisions","aria-hidden":"true"}},[v._v("#")]),v._v(" collisions")]),v._v(" "),e("h3",{attrs:{id:"shapes-形状定义"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shapes-形状定义","aria-hidden":"true"}},[v._v("#")]),v._v(" shapes 形状定义")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("b2ShapeDef")]),v._v("：形状定义")]),v._v(" "),e("ul",[e("li",[v._v("b2ShapeDef 为形状定义")]),v._v(" "),e("li",[v._v("type 来表示形状类型")]),v._v(" "),e("li",[v._v("localPosition 来表示当前位置")]),v._v(" "),e("li",[v._v("localRotation 来表示当前角度")]),v._v(" "),e("li",[v._v("friction、density、restitution 来表示摩擦力、密度、弹性系数")]),v._v(" "),e("li",[v._v("categoryBits 和 maskBits 来表示碰撞位及位标识（可以用来过滤一些碰撞）")]),v._v(" "),e("li",[v._v("groupIndex 来表示组号，这个组号可以用来过滤还比位标识优先")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("b2CircleDef")]),v._v("：圆形")]),v._v(" "),e("ul",[e("li",[v._v("继承于 b2ShapeDef")]),v._v(" "),e("li",[v._v("type 为 e_circleShape")]),v._v(" "),e("li",[v._v("带有一个类型为 float32 的量 radius 来表示半径值")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("b2BoxDef")]),v._v("：矩形")]),v._v(" "),e("ul",[e("li",[v._v("继承于 b2ShapeDef")]),v._v(" "),e("li",[v._v("type 为 e_ boxShape")]),v._v(" "),e("li",[v._v("带有一个类型为 b2Vec2 的量 extents 来表示区域值")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("b2PolyDef")]),v._v("：凸多边形")]),v._v(" "),e("ul",[e("li",[v._v("继承于 b2ShapeDef")]),v._v(" "),e("li",[v._v("type 为 e_ polyShape")]),v._v(" "),e("li",[v._v("带有一个类型为 b2Vec2 的数组 vertices 来表示顶点")]),v._v(" "),e("li",[v._v("带有一个 int32 型的量 vertexCount 来表示顶点数，目前顶点数最多支持 8 个")])])])]),v._v(" "),e("h3",{attrs:{id:"碰撞的功能-查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#碰撞的功能-查询","aria-hidden":"true"}},[v._v("#")]),v._v(" 碰撞的功能/查询")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("b2AABB")]),v._v("：AABB 坐标")]),v._v(" "),e("ul",[e("li",[v._v("盒子，由两个向量组成，一个为 minVertex 是最小顶点，另一个为 maxVertex 是最大顶点，通过这两个顶点来表示最为普通的 AABB 框")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("b2OBB")]),v._v("：OBB 坐标")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("b2ContactID")]),v._v("：接触 ID")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("b2ContactPoint")]),v._v("：接触点")])])]),v._v(" "),e("h3",{attrs:{id:"broad-phase-算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#broad-phase-算法","aria-hidden":"true"}},[v._v("#")]),v._v(" broad-phase 算法")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("b2BroadPhase")]),v._v("：通过使用动态树降低了管理数据方面的开销，极大的降低了调用 narrow-phase 算法的次数")])]),v._v(" "),e("h2",{attrs:{id:"dynamics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dynamics","aria-hidden":"true"}},[v._v("#")]),v._v(" dynamics")]),v._v(" "),e("h3",{attrs:{id:"刚体"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刚体","aria-hidden":"true"}},[v._v("#")]),v._v(" 刚体")]),v._v(" "),e("ul",[e("li",[e("p",[e("code",[v._v("b2BodyDef")]),v._v("：")]),v._v(" "),e("ul",[e("li",[v._v("刚体定义结构")]),v._v(" "),e("li",[v._v("userData 来表示用户数据")]),v._v(" "),e("li",[v._v("shapes 来表示形状队列，目前形状数最大支持 64 个")]),v._v(" "),e("li",[v._v("position 来表示当前位置")]),v._v(" "),e("li",[v._v("rotation 来表示当前角度")]),v._v(" "),e("li",[v._v("linearVelocity 表示线速度")]),v._v(" "),e("li",[v._v("angularVelocity 来表示角速度")]),v._v(" "),e("li",[v._v("linearDamping 来表示线性阻尼")]),v._v(" "),e("li",[v._v("angularDamping 来表示角阻抗")]),v._v(" "),e("li",[v._v("allowSleep 来表示是否可以允许休眠")]),v._v(" "),e("li",[v._v("isSleeping 来表示是否正在休眠")]),v._v(" "),e("li",[v._v("preventRotation 来表示是否防止旋转")]),v._v(" "),e("li",[v._v("支持方法：AddShape(b2ShapeDef* shape)")])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("b2CollisionFilters")]),v._v("：")]),v._v(" "),e("ul",[e("li",[v._v("碰撞过滤是用来防止形状与形状之间进行碰撞的，可以用碰撞种类和组名来区别")]),v._v(" "),e("li",[v._v("Box2D 总共提供 16 种碰撞种类，每个形状都可以提定属于什么种类，那么它就可以和其他不同种类的形状碰撞")])])])]),v._v(" "),e("h3",{attrs:{id:"结点-joints"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#结点-joints","aria-hidden":"true"}},[v._v("#")]),v._v(" 结点(joints)")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("b2DistanceJoint")]),v._v("：距离连接")]),v._v(" "),e("li",[e("code",[v._v("b2DistanceJointDef")]),v._v("：距离连接定义")]),v._v(" "),e("li",[e("code",[v._v("b2GearJoint")]),v._v("：齿轮连接")]),v._v(" "),e("li",[e("code",[v._v("b2GearJointDef")]),v._v("：齿轮连接定义")]),v._v(" "),e("li",[e("code",[v._v("b2Joint")]),v._v("：连接基类")]),v._v(" "),e("li",[e("code",[v._v("b2JointDef")]),v._v("：连接定义基类")]),v._v(" "),e("li",[e("code",[v._v("b2JointEdge")]),v._v("：用于组合刚体或连接到一起.刚体相当于节点,而连接相当于边")]),v._v(" "),e("li",[e("code",[v._v("b2MouseJoint")]),v._v("：鼠标连接")]),v._v(" "),e("li",[e("code",[v._v("b2MouseJointDef")]),v._v("：鼠标连接定义")]),v._v(" "),e("li",[e("code",[v._v("b2PrismaticJoint")]),v._v("：移动连接")]),v._v(" "),e("li",[e("code",[v._v("b2PrismaticJointDef")]),v._v("：移动连接定义")]),v._v(" "),e("li",[e("code",[v._v("b2PulleyJoint")]),v._v("：滑轮连接")]),v._v(" "),e("li",[e("code",[v._v("b2PulleyJointDef")]),v._v("：滑轮连接定义")]),v._v(" "),e("li",[e("code",[v._v("b2RevoluteJoint")]),v._v("：旋转连接")]),v._v(" "),e("li",[e("code",[v._v("b2RevoluteJointDef")]),v._v("：旋转连接定义")])]),v._v(" "),e("h3",{attrs:{id:"接触管理-contacts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#接触管理-contacts","aria-hidden":"true"}},[v._v("#")]),v._v(" 接触管理(contacts)")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("b2Contact")]),v._v("：管理两个外形接触")]),v._v(" "),e("li",[e("code",[v._v("b2ContactEdge")]),v._v("：接触边用来连接多个物体和接触到一个接触表(物体是一个节点而接触相当于一个接触边)")]),v._v(" "),e("li",[e("code",[v._v("b2ContactResult")]),v._v("：记录接触结果")])])])},[],!1,null,null,null);_.default=i.exports}}]);