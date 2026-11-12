(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const Kl="180",Of=0,Nc=1,zf=2,wu=1,Tu=2,Si=3,Di=0,en=1,Ke=2,un=0,ds=1,er=2,Fc=3,Oc=4,jl=5,Xn=100,Bf=101,kf=102,Hf=103,Vf=104,Rr=200,Qa=201,Gf=202,Wf=203,tl=204,el=205,nl=206,Xf=207,il=208,Yf=209,qf=210,$f=211,Zf=212,Kf=213,jf=214,sl=0,rl=1,ol=2,nr=3,al=4,ll=5,cl=6,hl=7,Jl=0,Jf=1,Qf=2,Wi=0,Eu=1,Au=2,Cu=3,Ql=4,Ru=5,Pu=6,Du=7,zc="attached",td="detached",Iu=300,ir=301,sr=302,ul=303,fl=304,Ho=306,Yi=1e3,cs=1001,dl=1002,_n=1003,ed=1004,Yr=1005,si=1006,jo=1007,hs=1008,oi=1009,Lu=1010,Uu=1011,zr=1012,tc=1013,ms=1014,ri=1015,Yn=1016,ec=1017,nc=1018,rr=1020,Nu=35902,Fu=35899,Ou=1021,zu=1022,zn=1023,Br=1026,or=1027,ic=1028,sc=1029,Bu=1030,rc=1031,oc=1033,Do=33776,Io=33777,Lo=33778,Uo=33779,pl=35840,ml=35841,gl=35842,xl=35843,vl=36196,_l=37492,Ml=37496,yl=37808,Sl=37809,bl=37810,wl=37811,Tl=37812,El=37813,Al=37814,Cl=37815,Rl=37816,Pl=37817,Dl=37818,Il=37819,Ll=37820,Ul=37821,Nl=36492,Fl=36494,Ol=36495,zl=36283,Bl=36284,kl=36285,Hl=36286,nd=3200,ku=3201,Vo=0,id=1,wi="",wn="srgb",ar="srgb-linear",Oo="linear",be="srgb",Ss=7680,Bc=519,sd=512,rd=513,od=514,Hu=515,ad=516,ld=517,cd=518,hd=519,kc=35044,ud=35048,Hc="300 es",fi=2e3,zo=2001;class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vc=1234567;const Lr=Math.PI/180,lr=180/Math.PI;function qi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function he(s,t,e){return Math.max(t,Math.min(e,s))}function ac(s,t){return(s%t+t)%t}function fd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function dd(s,t,e){return s!==t?(e-s)/(t-s):0}function Ur(s,t,e){return(1-e)*s+e*t}function pd(s,t,e,n){return Ur(s,t,1-Math.exp(-e*n))}function md(s,t=1){return t-Math.abs(ac(s,t*2)-t)}function gd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function xd(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function vd(s,t){return s+Math.floor(Math.random()*(t-s+1))}function _d(s,t){return s+Math.random()*(t-s)}function Md(s){return s*(.5-Math.random())}function yd(s){s!==void 0&&(Vc=s);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sd(s){return s*Lr}function bd(s){return s*lr}function wd(s){return(s&s-1)===0&&s!==0}function Td(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ed(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ad(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*f,a*c);break;case"YZY":s.set(l*f,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*f,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*d,a*c);break;case"YXY":s.set(l*d,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ks(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ri={DEG2RAD:Lr,RAD2DEG:lr,generateUUID:qi,clamp:he,euclideanModulo:ac,mapLinear:fd,inverseLerp:dd,lerp:Ur,damp:pd,pingpong:md,smoothstep:gd,smootherstep:xd,randInt:vd,randFloat:_d,randFloatSpread:Md,seededRandom:yd,degToRad:Sd,radToDeg:bd,isPowerOfTwo:wd,ceilPowerOfTwo:Td,floorPowerOfTwo:Ed,setQuaternionFromProperEuler:Ad,normalize:gn,denormalize:Ks};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==d||h!==g){let p=1-a;const m=l*f+c*d+h*g+u*x,y=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const w=Math.sqrt(M),T=Math.atan2(w,m*y);p=Math.sin(p*T)/w,a=Math.sin(a*T)/w}const v=a*y;if(l=l*p+f*v,c=c*p+d*v,h=h*p+g*v,u=u*p+x*v,p===1-a){const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),d=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jo.copy(this).projectOnVector(t),this.sub(Jo)}reflect(t){return this.sub(Jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jo=new I,Gc=new Je;class se{constructor(t,e,n,i,r,o,a,l,c){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=i[0],p=i[3],m=i[6],y=i[1],M=i[4],v=i[7],w=i[2],T=i[5],C=i[8];return r[0]=o*x+a*y+l*w,r[3]=o*p+a*M+l*T,r[6]=o*m+a*v+l*C,r[1]=c*x+h*y+u*w,r[4]=c*p+h*M+u*T,r[7]=c*m+h*v+u*C,r[2]=f*x+d*y+g*w,r[5]=f*p+d*M+g*T,r[8]=f*m+d*v+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=f*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qo=new se;function Vu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Bo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cd(){const s=Bo("canvas");return s.style.display="block",s}const Wc={};function kr(s){s in Wc||(Wc[s]=!0,console.warn(s))}function Rd(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Xc=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pd(){const s={enabled:!0,workingColorSpace:ar,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===be&&(i.r=Pi(i.r),i.g=Pi(i.g),i.b=Pi(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=Qs(i.r),i.g=Qs(i.g),i.b=Qs(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wi?Oo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[ar]:{primaries:t,whitePoint:n,transfer:Oo,toXYZ:Xc,fromXYZ:Yc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Xc,fromXYZ:Yc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),s}const ge=Pd();function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let bs;class Dd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bs===void 0&&(bs=Bo("canvas")),bs.width=t.width,bs.height=t.height;const i=bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=bs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Pi(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Pi(e[n]/255)*255):e[n]=Pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Id=0;class lc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=qi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ta(i[o].image)):r.push(ta(i[o]))}else r=ta(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ta(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ld=0;const ea=new I;class pn extends pr{constructor(t=pn.DEFAULT_IMAGE,e=pn.DEFAULT_MAPPING,n=cs,i=cs,r=si,o=hs,a=zn,l=oi,c=pn.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=qi(),this.name="",this.source=new lc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ea).x}get height(){return this.source.getSize(ea).y}get depth(){return this.source.getSize(ea).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Iu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case cs:t.x=t.x<0?0:1;break;case dl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case cs:t.y=t.y<0?0:1;break;case dl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Iu;pn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,v=(d+1)/2,w=(m+1)/2,T=(h+f)/4,C=(u+x)/4,b=(g+p)/4;return M>v&&M>w?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=T/n,r=C/n):v>w?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=b/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=C/r,i=b/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-x)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ud extends pr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:n.depth},r=new pn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new lc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends Ud{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Gu extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nd extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $i{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qn):qn.fromBufferAttribute(r,o),qn.applyMatrix4(t.matrixWorld),this.expandByPoint(qn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xr),$r.subVectors(this.max,xr),ws.subVectors(t.a,xr),Ts.subVectors(t.b,xr),Es.subVectors(t.c,xr),Li.subVectors(Ts,ws),Ui.subVectors(Es,Ts),ji.subVectors(ws,Es);let e=[0,-Li.z,Li.y,0,-Ui.z,Ui.y,0,-ji.z,ji.y,Li.z,0,-Li.x,Ui.z,0,-Ui.x,ji.z,0,-ji.x,-Li.y,Li.x,0,-Ui.y,Ui.x,0,-ji.y,ji.x,0];return!na(e,ws,Ts,Es,$r)||(e=[1,0,0,0,1,0,0,0,1],!na(e,ws,Ts,Es,$r))?!1:(Zr.crossVectors(Li,Ui),e=[Zr.x,Zr.y,Zr.z],na(e,ws,Ts,Es,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const mi=[new I,new I,new I,new I,new I,new I,new I,new I],qn=new I,qr=new $i,ws=new I,Ts=new I,Es=new I,Li=new I,Ui=new I,ji=new I,xr=new I,$r=new I,Zr=new I,Ji=new I;function na(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ji.fromArray(s,r);const a=i.x*Math.abs(Ji.x)+i.y*Math.abs(Ji.y)+i.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),h=n.dot(Ji);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Fd=new $i,vr=new I,ia=new I;class xs{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Fd.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vr.subVectors(t,this.center);const e=vr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(vr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ia.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vr.copy(t.center).add(ia)),this.expandByPoint(vr.copy(t.center).sub(ia))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const gi=new I,sa=new I,Kr=new I,Ni=new I,ra=new I,jr=new I,oa=new I;class Wu{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gi.copy(this.origin).addScaledVector(this.direction,e),gi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){sa.copy(t).add(e).multiplyScalar(.5),Kr.copy(e).sub(t).normalize(),Ni.copy(this.origin).sub(sa);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Kr),a=Ni.dot(this.direction),l=-Ni.dot(Kr),c=Ni.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(sa).addScaledVector(Kr,f),d}intersectSphere(t,e){gi.subVectors(t.center,this.origin);const n=gi.dot(this.direction),i=gi.dot(gi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,gi)!==null}intersectTriangle(t,e,n,i,r){ra.subVectors(e,t),jr.subVectors(n,t),oa.crossVectors(ra,jr);let o=this.direction.dot(oa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,t);const l=a*this.direction.dot(jr.crossVectors(Ni,jr));if(l<0)return null;const c=a*this.direction.dot(ra.cross(Ni));if(c<0||l+c>o)return null;const h=-a*Ni.dot(oa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,p){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,d,g,x,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/As.setFromMatrixColumn(t,0).length(),r=1/As.setFromMatrixColumn(t,1).length(),o=1/As.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){const f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Od,t,zd)}lookAt(t,e,n){const i=this.elements;return Dn.subVectors(t,e),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Fi.crossVectors(n,Dn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Fi.crossVectors(n,Dn)),Fi.normalize(),Jr.crossVectors(Dn,Fi),i[0]=Fi.x,i[4]=Jr.x,i[8]=Dn.x,i[1]=Fi.y,i[5]=Jr.y,i[9]=Dn.y,i[2]=Fi.z,i[6]=Jr.z,i[10]=Dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],y=n[3],M=n[7],v=n[11],w=n[15],T=i[0],C=i[4],b=i[8],_=i[12],S=i[1],E=i[5],L=i[9],U=i[13],B=i[2],F=i[6],q=i[10],X=i[14],H=i[3],st=i[7],ut=i[11],ct=i[15];return r[0]=o*T+a*S+l*B+c*H,r[4]=o*C+a*E+l*F+c*st,r[8]=o*b+a*L+l*q+c*ut,r[12]=o*_+a*U+l*X+c*ct,r[1]=h*T+u*S+f*B+d*H,r[5]=h*C+u*E+f*F+d*st,r[9]=h*b+u*L+f*q+d*ut,r[13]=h*_+u*U+f*X+d*ct,r[2]=g*T+x*S+p*B+m*H,r[6]=g*C+x*E+p*F+m*st,r[10]=g*b+x*L+p*q+m*ut,r[14]=g*_+x*U+p*X+m*ct,r[3]=y*T+M*S+v*B+w*H,r[7]=y*C+M*E+v*F+w*st,r[11]=y*b+M*L+v*q+w*ut,r[15]=y*_+M*U+v*X+w*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*d-n*l*d)+x*(+e*l*d-e*c*f+r*o*f-i*o*d+i*c*h-r*l*h)+p*(+e*c*u-e*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],y=u*p*c-x*f*c+x*l*d-a*p*d-u*l*m+a*f*m,M=g*f*c-h*p*c-g*l*d+o*p*d+h*l*m-o*f*m,v=h*x*c-g*u*c+g*a*d-o*x*d-h*a*m+o*u*m,w=g*u*l-h*x*l-g*a*f+o*x*f+h*a*p-o*u*p,T=e*y+n*M+i*v+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(x*f*r-u*p*r-x*i*d+n*p*d+u*i*m-n*f*m)*C,t[2]=(a*p*r-x*l*r+x*i*c-n*p*c-a*i*m+n*l*m)*C,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*d-n*l*d)*C,t[4]=M*C,t[5]=(h*p*r-g*f*r+g*i*d-e*p*d-h*i*m+e*f*m)*C,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*m-e*l*m)*C,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*d+e*l*d)*C,t[8]=v*C,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*m-e*u*m)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*m+e*a*m)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*d-e*a*d)*C,t[12]=w*C,t[13]=(h*x*i-g*u*i+g*n*f-e*x*f-h*n*p+e*u*p)*C,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*p-e*a*p)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,x=o*h,p=o*u,m=a*u,y=l*c,M=l*h,v=l*u,w=n.x,T=n.y,C=n.z;return i[0]=(1-(x+m))*w,i[1]=(d+v)*w,i[2]=(g-M)*w,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+m))*T,i[6]=(p+y)*T,i[7]=0,i[8]=(g+M)*C,i[9]=(p-y)*C,i[10]=(1-(f+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=As.set(i[0],i[1],i[2]).length();const o=As.set(i[4],i[5],i[6]).length(),a=As.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],$n.copy(this);const c=1/r,h=1/o,u=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=u,$n.elements[9]*=u,$n.elements[10]*=u,e.setFromRotationMatrix($n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=fi,l=!1){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===fi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zo)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=fi,l=!1){const c=this.elements,h=2/(e-t),u=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===fi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===zo)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const As=new I,$n=new $t,Od=new I(0,0,0),zd=new I(1,1,1),Fi=new I,Jr=new I,Dn=new I,qc=new $t,$c=new Je;class ln{constructor(t=0,e=0,n=0,i=ln.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return qc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(qc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ln.DEFAULT_ORDER="XYZ";class Xu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Bd=0;const Zc=new I,Cs=new Je,xi=new $t,Qr=new I,_r=new I,kd=new I,Hd=new Je,Kc=new I(1,0,0),jc=new I(0,1,0),Jc=new I(0,0,1),Qc={type:"added"},Vd={type:"removed"},Rs={type:"childadded",child:null},aa={type:"childremoved",child:null};class Qe extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new I,e=new ln,n=new Je,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new se}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Kc,t)}rotateY(t){return this.rotateOnAxis(jc,t)}rotateZ(t){return this.rotateOnAxis(Jc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kc,t)}translateY(t){return this.translateOnAxis(jc,t)}translateZ(t){return this.translateOnAxis(Jc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qr.copy(t):Qr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(_r,Qr,this.up):xi.lookAt(Qr,_r,this.up),this.quaternion.setFromRotationMatrix(xi),i&&(xi.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(xi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Qc),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Vd),aa.child=t,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Qc),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Qe.DEFAULT_UP=new I(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new I,vi=new I,la=new I,_i=new I,Ps=new I,Ds=new I,th=new I,ca=new I,ha=new I,ua=new I,fa=new Me,da=new Me,pa=new Me;class ni{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Zn.subVectors(t,e),i.cross(Zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Zn.subVectors(i,e),vi.subVectors(n,e),la.subVectors(t,e);const o=Zn.dot(Zn),a=Zn.dot(vi),l=Zn.dot(la),c=vi.dot(vi),h=vi.dot(la),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_i.x),l.addScaledVector(o,_i.y),l.addScaledVector(a,_i.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return fa.setScalar(0),da.setScalar(0),pa.setScalar(0),fa.fromBufferAttribute(t,e),da.fromBufferAttribute(t,n),pa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(fa,r.x),o.addScaledVector(da,r.y),o.addScaledVector(pa,r.z),o}static isFrontFacing(t,e,n,i){return Zn.subVectors(n,e),vi.subVectors(t,e),Zn.cross(vi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Zn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Zn.cross(vi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ni.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Ps.subVectors(i,n),Ds.subVectors(r,n),ca.subVectors(t,n);const l=Ps.dot(ca),c=Ds.dot(ca);if(l<=0&&c<=0)return e.copy(n);ha.subVectors(t,i);const h=Ps.dot(ha),u=Ds.dot(ha);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ps,o);ua.subVectors(t,r);const d=Ps.dot(ua),g=Ds.dot(ua);if(g>=0&&d<=g)return e.copy(r);const x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ds,a);const p=h*g-d*u;if(p<=0&&u-h>=0&&d-g>=0)return th.subVectors(r,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(th,a);const m=1/(p+x+f);return o=x*m,a=f*m,e.copy(n).addScaledVector(Ps,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},to={h:0,s:0,l:0};function ma(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=ac(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ma(o,r,t+1/3),this.g=ma(o,r,t),this.b=ma(o,r,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=wn){const n=Yu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return ge.workingToColorSpace(dn.copy(this),t),Math.round(he(dn.r*255,0,255))*65536+Math.round(he(dn.g*255,0,255))*256+Math.round(he(dn.b*255,0,255))}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(dn.copy(this),e);const n=dn.r,i=dn.g,r=dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(dn.copy(this),e),t.r=dn.r,t.g=dn.g,t.b=dn.b,t}getStyle(t=wn){ge.workingToColorSpace(dn.copy(this),t);const e=dn.r,n=dn.g,i=dn.b;return t!==wn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(to);const n=Ur(Oi.h,to.h,e),i=Ur(Oi.s,to.s,e),r=Ur(Oi.l,to.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const dn=new Wt;Wt.NAMES=Yu;let Gd=0;class vs extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=ds,this.side=Di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Wt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==Di&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ai extends vs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tn=new I,eo=new lt;let Wd=0;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix3(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==kc&&(t.usage=this.usage),t}}class qu extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $u extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ee extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xd=0;const Hn=new $t,ga=new Qe,Is=new I,In=new $i,Mr=new $i,rn=new I;class Ve extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vu(t)?$u:qu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return ga.lookAt(t),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(rn.addVectors(In.min,Mr.min),In.expandByPoint(rn),rn.addVectors(In.max,Mr.max),In.expandByPoint(rn)):(In.expandByPoint(Mr.min),In.expandByPoint(Mr.max))}In.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)rn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(rn));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)rn.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(t,c),rn.add(Is)),i=Math.max(i,n.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new I,l[b]=new I;const c=new I,h=new I,u=new I,f=new lt,d=new lt,g=new lt,x=new I,p=new I;function m(b,_,S){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,S),f.fromBufferAttribute(r,b),d.fromBufferAttribute(r,_),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),d.sub(f),g.sub(f);const E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(E),a[b].add(x),a[_].add(x),a[S].add(x),l[b].add(p),l[_].add(p),l[S].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let b=0,_=y.length;b<_;++b){const S=y[b],E=S.start,L=S.count;for(let U=E,B=E+L;U<B;U+=3)m(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new I,v=new I,w=new I,T=new I;function C(b){w.fromBufferAttribute(i,b),T.copy(w);const _=a[b];M.copy(_),M.sub(w.multiplyScalar(w.dot(_))).normalize(),v.crossVectors(T,_);const E=v.dot(l[b])<0?-1:1;o.setXYZW(b,M.x,M.y,M.z,E)}for(let b=0,_=y.length;b<_;++b){const S=y[b],E=S.start,L=S.count;for(let U=E,B=E+L;U<B;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)rn.fromBufferAttribute(t,e),rn.normalize(),t.setXYZ(e,rn.x,rn.y,rn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Mn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const eh=new $t,Qi=new Wu,no=new xs,nh=new I,io=new I,so=new I,ro=new I,xa=new I,oo=new I,ih=new I,ao=new I;class Ae extends Qe{constructor(t=new Ve,e=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){oo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(xa.fromBufferAttribute(u,t),o?oo.addScaledVector(xa,h):oo.addScaledVector(xa.sub(e),h))}e.add(oo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(no.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(no,nh)===null||Qi.origin.distanceToSquared(nh)>(t.far-t.near)**2))&&(eh.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(eh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Qi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,w=M;v<w;v+=3){const T=a.getX(v),C=a.getX(v+1),b=a.getX(v+2);i=lo(this,m,t,n,c,h,u,T,C,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=a.getX(p),M=a.getX(p+1),v=a.getX(p+2);i=lo(this,o,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=y,w=M;v<w;v+=3){const T=v,C=v+1,b=v+2;i=lo(this,m,t,n,c,h,u,T,C,b),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const y=p,M=p+1,v=p+2;i=lo(this,o,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Yd(s,t,e,n,i,r,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Di,a),l===null)return null;ao.copy(a),ao.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ao);return c<e.near||c>e.far?null:{distance:c,point:ao.clone(),object:s}}function lo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,io),s.getVertexPosition(l,so),s.getVertexPosition(c,ro);const h=Yd(s,t,e,n,io,so,ro,ih);if(h){const u=new I;ni.getBarycoord(ih,io,so,ro,u),i&&(h.uv=ni.getInterpolatedAttribute(i,a,l,c,u,new lt)),r&&(h.uv1=ni.getInterpolatedAttribute(r,a,l,c,u,new lt)),o&&(h.normal=ni.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new I,materialIndex:0};ni.getNormal(io,so,ro,f.normal),h.face=f,h.barycoord=u}return h}class re extends Ve{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(x,p,m,y,M,v,w,T,C,b,_){const S=v/C,E=w/b,L=v/2,U=w/2,B=T/2,F=C+1,q=b+1;let X=0,H=0;const st=new I;for(let ut=0;ut<q;ut++){const ct=ut*E-U;for(let St=0;St<F;St++){const vt=St*S-L;st[x]=vt*y,st[p]=ct*M,st[m]=B,c.push(st.x,st.y,st.z),st[x]=0,st[p]=0,st[m]=T>0?1:-1,h.push(st.x,st.y,st.z),u.push(St/C),u.push(1-ut/b),X+=1}}for(let ut=0;ut<b;ut++)for(let ct=0;ct<C;ct++){const St=f+ct+F*ut,vt=f+ct+F*(ut+1),Vt=f+(ct+1)+F*(ut+1),Dt=f+(ct+1)+F*ut;l.push(St,vt,Dt),l.push(vt,Vt,Dt),H+=6}a.addGroup(d,H,_),d+=H,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function cr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function xn(s){const t={};for(let e=0;e<s.length;e++){const n=cr(s[e]);for(const i in n)t[i]=n[i]}return t}function qd(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Zu(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}const ii={clone:cr,merge:xn};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ie extends vs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cr(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ku extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zi=new I,sh=new lt,rh=new lt;class En extends Ku{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=lr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zi.x,zi.y).multiplyScalar(-t/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zi.x,zi.y).multiplyScalar(-t/zi.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ls=-90,Us=1;class Kd extends Qe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new En(Ls,Us,t,e);i.layers=this.layers,this.add(i);const r=new En(Ls,Us,t,e);r.layers=this.layers,this.add(r);const o=new En(Ls,Us,t,e);o.layers=this.layers,this.add(o);const a=new En(Ls,Us,t,e);a.layers=this.layers,this.add(a);const l=new En(Ls,Us,t,e);l.layers=this.layers,this.add(l);const c=new En(Ls,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ju extends pn{constructor(t=[],e=ir,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jd extends Cn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ju(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new re(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:un});r.uniforms.tEquirect.value=e;const o=new Ae(i,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=si),new Kd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class Yt extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jd={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jd)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class cc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Wt(t),this.density=e}clone(){return new cc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class hc extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ln,this.environmentIntensity=1,this.environmentRotation=new ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const oh=new I,ah=new Me,lh=new Me,Qd=new I,ch=new $t,co=new I,_a=new xs,hh=new $t,Ma=new Wu;class tp extends Ae{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zc,this.bindMatrix=new $t,this.bindMatrixInverse=new $t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $i),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,co),this.boundingBox.expandByPoint(co)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xs),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,co),this.boundingSphere.expandByPoint(co)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_a.copy(this.boundingSphere),_a.applyMatrix4(i),t.ray.intersectsSphere(_a)!==!1&&(hh.copy(i).invert(),Ma.copy(t.ray).applyMatrix4(hh),!(this.boundingBox!==null&&Ma.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ma)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===zc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===td?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;ah.fromBufferAttribute(i.attributes.skinIndex,t),lh.fromBufferAttribute(i.attributes.skinWeight,t),oh.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=lh.getComponent(r);if(o!==0){const a=ah.getComponent(r);ch.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Qd.copy(oh).applyMatrix4(ch),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Ju extends Qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Go extends pn{constructor(t=null,e=1,n=1,i,r,o,a,l,c=_n,h=_n,u,f){super(null,o,a,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new $t,ep=new $t;class uc{constructor(t=[],e=[]){this.uuid=qi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new $t)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new $t;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:ep;uh.multiplyMatrices(a,e[r]),uh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new uc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Go(e,t,t,zn,ri);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Ju),this.bones.push(o),this.boneInverses.push(new $t().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class tr extends Mn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ns=new $t,fh=new $t,ho=[],dh=new $i,np=new $t,yr=new Ae,Sr=new xs;class us extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,np)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),dh.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(dh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Sr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Sr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(yr.geometry=this.geometry,yr.material=this.material,yr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sr.copy(this.boundingSphere),Sr.applyMatrix4(n),t.ray.intersectsSphere(Sr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),fh.multiplyMatrices(n,Ns),yr.matrixWorld=fh,yr.raycast(t,ho);for(let o=0,a=ho.length;o<a;o++){const l=ho[o];l.instanceId=r,l.object=this,e.push(l)}ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Go(new Float32Array(i*this.count),i,this.count,ic,ri));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ya=new I,ip=new I,sp=new se;class os{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ya.subVectors(n,e).cross(ip.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ya),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sp.getNormalMatrix(t),i=this.coplanarPoint(ya).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new xs,rp=new lt(.5,.5),uo=new I;class fc{constructor(t=new os,e=new os,n=new os,i=new os,r=new os,o=new os){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],x=r[9],p=r[10],m=r[11],y=r[12],M=r[13],v=r[14],w=r[15];if(i[0].setComponents(c-o,d-h,m-g,w-y).normalize(),i[1].setComponents(c+o,d+h,m+g,w+y).normalize(),i[2].setComponents(c+a,d+u,m+x,w+M).normalize(),i[3].setComponents(c-a,d-u,m-x,w-M).normalize(),n)i[4].setComponents(l,f,p,v).normalize(),i[5].setComponents(c-l,d-f,m-p,w-v).normalize();else if(i[4].setComponents(c-l,d-f,m-p,w-v).normalize(),e===fi)i[5].setComponents(c+l,d+f,m+p,w+v).normalize();else if(e===zo)i[5].setComponents(l,f,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){ts.center.set(0,0,0);const e=rp.distanceTo(t.center);return ts.radius=.7071067811865476+e,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(uo.x=i.normal.x>0?t.max.x:t.min.x,uo.y=i.normal.y>0?t.max.y:t.min.y,uo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class op extends pn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dc extends pn{constructor(t,e,n=ms,i,r,o,a=_n,l=_n,c,h=Br,u=1){if(h!==Br&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new lc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qu extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class fs extends Ve{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,u=Math.PI/2*t,f=e,d=2*u+f,g=n*2+r,x=i+1,p=new I,m=new I;for(let y=0;y<=g;y++){let M=0,v=0,w=0,T=0;if(y<=n){const _=y/n,S=_*Math.PI/2;v=-h-t*Math.cos(S),w=t*Math.sin(S),T=-t*Math.cos(S),M=_*u}else if(y<=n+r){const _=(y-n)/r;v=-h+_*e,w=t,T=0,M=u+_*f}else{const _=(y-n-r)/n,S=_*Math.PI/2;v=h+t*Math.sin(S),w=t*Math.cos(S),T=t*Math.sin(S),M=u+f+_*u}const C=Math.max(0,Math.min(1,M/d));let b=0;y===0?b=.5/i:y===g&&(b=-.5/i);for(let _=0;_<=i;_++){const S=_/i,E=S*Math.PI*2,L=Math.sin(E),U=Math.cos(E);m.x=-w*U,m.y=v,m.z=w*L,a.push(m.x,m.y,m.z),p.set(-w*U,T,w*L),p.normalize(),l.push(p.x,p.y,p.z),c.push(S+b,C)}if(y>0){const _=(y-1)*x;for(let S=0;S<i;S++){const E=_+S,L=_+S+1,U=y*x+S,B=y*x+S+1;o.push(E,L,U),o.push(L,B,U)}}}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fs(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Ai extends Ve{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new I,h=new lt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ai(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xe extends Ve{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const x=[],p=n/2;let m=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function y(){const v=new I,w=new I;let T=0;const C=(e-t)/n;for(let b=0;b<=r;b++){const _=[],S=b/r,E=S*(e-t)+t;for(let L=0;L<=i;L++){const U=L/i,B=U*l+a,F=Math.sin(B),q=Math.cos(B);w.x=E*F,w.y=-S*n+p,w.z=E*q,u.push(w.x,w.y,w.z),v.set(F,C,q).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-S),_.push(g++)}x.push(_)}for(let b=0;b<i;b++)for(let _=0;_<r;_++){const S=x[_][b],E=x[_+1][b],L=x[_+1][b+1],U=x[_][b+1];(t>0||_!==0)&&(h.push(S,E,U),T+=3),(e>0||_!==r-1)&&(h.push(E,L,U),T+=3)}c.addGroup(m,T,0),m+=T}function M(v){const w=g,T=new lt,C=new I;let b=0;const _=v===!0?t:e,S=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;const E=g;for(let L=0;L<=i;L++){const B=L/i*l+a,F=Math.cos(B),q=Math.sin(B);C.x=_*q,C.y=p*S,C.z=_*F,u.push(C.x,C.y,C.z),f.push(0,S,0),T.x=F*.5+.5,T.y=q*.5*S+.5,d.push(T.x,T.y),g++}for(let L=0;L<i;L++){const U=w+L,B=E+L;v===!0?h.push(B,B+1,U):h.push(B+1,B,U),b+=3}c.addGroup(m,b,v===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xe(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pc extends xe{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new pc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mc extends Ve{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ee(r,3)),this.setAttribute("normal",new ee(r.slice(),3)),this.setAttribute("uv",new ee(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new I,v=new I,w=new I;for(let T=0;T<e.length;T+=3)d(e[T+0],M),d(e[T+1],v),d(e[T+2],w),l(M,v,w,y)}function l(y,M,v,w){const T=w+1,C=[];for(let b=0;b<=T;b++){C[b]=[];const _=y.clone().lerp(v,b/T),S=M.clone().lerp(v,b/T),E=T-b;for(let L=0;L<=E;L++)L===0&&b===T?C[b][L]=_:C[b][L]=_.clone().lerp(S,L/E)}for(let b=0;b<T;b++)for(let _=0;_<2*(T-b)-1;_++){const S=Math.floor(_/2);_%2===0?(f(C[b][S+1]),f(C[b+1][S]),f(C[b][S])):(f(C[b][S+1]),f(C[b+1][S+1]),f(C[b+1][S]))}}function c(y){const M=new I;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(y),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const y=new I;for(let M=0;M<r.length;M+=3){y.x=r[M+0],y.y=r[M+1],y.z=r[M+2];const v=p(y)/2/Math.PI+.5,w=m(y)/Math.PI+.5;o.push(v,1-w)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){const M=o[y+0],v=o[y+2],w=o[y+4],T=Math.max(M,v,w),C=Math.min(M,v,w);T>.9&&C<.1&&(M<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,M){const v=y*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const y=new I,M=new I,v=new I,w=new I,T=new lt,C=new lt,b=new lt;for(let _=0,S=0;_<r.length;_+=9,S+=6){y.set(r[_+0],r[_+1],r[_+2]),M.set(r[_+3],r[_+4],r[_+5]),v.set(r[_+6],r[_+7],r[_+8]),T.set(o[S+0],o[S+1]),C.set(o[S+2],o[S+3]),b.set(o[S+4],o[S+5]),w.copy(y).add(M).add(v).divideScalar(3);const E=p(w);x(T,S+0,y,E),x(C,S+2,M,E),x(b,S+4,v,E)}}function x(y,M,v,w){w<0&&y.x===1&&(o[M]=y.x-1),v.x===0&&v.z===0&&(o[M]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mc(t.vertices,t.indices,t.radius,t.details)}}class di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new lt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new I,i=[],r=[],o=[],a=new I,l=new $t;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(he(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(e===!0){let d=Math.acos(he(r[0].dot(r[t]),-1,1));d/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class gc extends di{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new lt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ap extends gc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function xc(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const fo=new I,Sa=new xc,ba=new xc,wa=new xc;class lp extends di{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(fo.subVectors(i[0],i[1]).add(i[0]),c=fo);const u=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(fo.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Sa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,x,p),ba.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,x,p),wa.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Sa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ba.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),wa.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Sa.calc(l),ba.calc(l),wa.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ph(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function cp(s,t){const e=1-s;return e*e*t}function hp(s,t){return 2*(1-s)*s*t}function up(s,t){return s*s*t}function Nr(s,t,e,n){return cp(s,t)+hp(s,e)+up(s,n)}function fp(s,t){const e=1-s;return e*e*e*t}function dp(s,t){const e=1-s;return 3*e*e*s*t}function pp(s,t){return 3*(1-s)*s*s*t}function mp(s,t){return s*s*s*t}function Fr(s,t,e,n,i){return fp(s,t)+dp(s,e)+pp(s,n)+mp(s,i)}class tf extends di{constructor(t=new lt,e=new lt,n=new lt,i=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,i.x,r.x,o.x,a.x),Fr(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class gp extends di{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Fr(t,i.x,r.x,o.x,a.x),Fr(t,i.y,r.y,o.y,a.y),Fr(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ef extends di{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xp extends di{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends di{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,i.x,r.x,o.x),Nr(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vp extends di{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Nr(t,i.x,r.x,o.x),Nr(t,i.y,r.y,o.y),Nr(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ph(a,l.x,c.x,h.x,u.x),ph(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new lt().fromArray(i))}return this}}var Vl=Object.freeze({__proto__:null,ArcCurve:ap,CatmullRomCurve3:lp,CubicBezierCurve:tf,CubicBezierCurve3:gp,EllipseCurve:gc,LineCurve:ef,LineCurve3:xp,QuadraticBezierCurve:nf,QuadraticBezierCurve3:vp,SplineCurve:sf});class _p extends di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Vl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Vl[i.type]().fromJSON(i))}return this}}class mh extends _p{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ef(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new nf(this.currentPoint.clone(),new lt(t,e),new lt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new tf(this.currentPoint.clone(),new lt(t,e),new lt(n,i),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new sf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new gc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Wo extends mh{constructor(t){super(t),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new mh().fromJSON(i))}return this}}function Mp(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=rf(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Tp(s,t,r,e)),s.length>80*e){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=e;f<i;f+=e){const d=s[f],g=s[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Hr(r,o,e,a,l,c,0),o}function rf(s,t,e,n,i){let r;if(i===Fp(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=gh(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=gh(o/n|0,s[o],s[o+1],r);return r&&hr(r,r.next)&&(Gr(r),r=r.next),r}function gs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(hr(e,e.next)||He(e.prev,e,e.next)===0)){if(Gr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Hr(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Pp(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?Sp(s,n,i,r):yp(s)){t.push(l.i,s.i,c.i),Gr(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=bp(gs(s),t),Hr(s,t,e,n,i,r,2)):o===2&&wp(s,t,e,n,i,r):Hr(gs(s),t,e,n,i,r,1);break}}}function yp(s){const t=s.prev,e=s,n=s.next;if(He(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),u=Math.min(a,l,c),f=Math.max(i,r,o),d=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Pr(i,a,r,l,o,c,g.x,g.y)&&He(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sp(s,t,e,n){const i=s.prev,r=s,o=s.next;if(He(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),p=Math.max(h,u,f),m=Gl(d,g,t,e,n),y=Gl(x,p,t,e,n);let M=s.prevZ,v=s.nextZ;for(;M&&M.z>=m&&v&&v.z<=y;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Pr(a,h,l,u,c,f,M.x,M.y)&&He(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Pr(a,h,l,u,c,f,v.x,v.y)&&He(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=p&&M!==i&&M!==o&&Pr(a,h,l,u,c,f,M.x,M.y)&&He(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==i&&v!==o&&Pr(a,h,l,u,c,f,v.x,v.y)&&He(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bp(s,t){let e=s;do{const n=e.prev,i=e.next.next;!hr(n,i)&&af(n,e,e.next,i)&&Vr(n,i)&&Vr(i,n)&&(t.push(n.i,e.i,i.i),Gr(e),Gr(e.next),e=s=i),e=e.next}while(e!==s);return gs(e)}function wp(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lp(o,a)){let l=lf(o,a);o=gs(o,o.next),l=gs(l,l.next),Hr(o,t,e,n,i,r,0),Hr(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Tp(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=rf(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(Ip(c))}i.sort(Ep);for(let r=0;r<i.length;r++)e=Ap(i[r],e);return e}function Ep(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function Ap(s,t){const e=Cp(s,t);if(!e)return t;const n=lf(e,s);return gs(n,n.next),gs(e,e.next)}function Cp(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(hr(s,e))return e;do{if(hr(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const u=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&of(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const u=Math.abs(i-e.y)/(n-e.x);Vr(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&Rp(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function Rp(s,t){return He(s.prev,s,t.prev)<0&&He(t.next,s,s.next)<0}function Pp(s,t,e,n){let i=s;do i.z===0&&(i.z=Gl(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Dp(i)}function Dp(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Gl(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ip(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function of(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Pr(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&of(s,t,e,n,i,r,o,a)}function Lp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Up(s,t)&&(Vr(s,t)&&Vr(t,s)&&Np(s,t)&&(He(s.prev,s,t.prev)||He(s,t.prev,t))||hr(s,t)&&He(s.prev,s,s.next)>0&&He(t.prev,t,t.next)>0)}function He(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function hr(s,t){return s.x===t.x&&s.y===t.y}function af(s,t,e,n){const i=mo(He(s,t,e)),r=mo(He(s,t,n)),o=mo(He(e,n,s)),a=mo(He(e,n,t));return!!(i!==r&&o!==a||i===0&&po(s,e,t)||r===0&&po(s,n,t)||o===0&&po(e,s,n)||a===0&&po(e,t,n))}function po(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function mo(s){return s>0?1:s<0?-1:0}function Up(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&af(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Vr(s,t){return He(s.prev,s,s.next)<0?He(s,t,s.next)>=0&&He(s,s.prev,t)>=0:He(s,t,s.prev)<0||He(s,s.next,t)<0}function Np(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function lf(s,t){const e=Wl(s.i,s.x,s.y),n=Wl(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gh(s,t,e,n){const i=Wl(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Gr(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Wl(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fp(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Op{static triangulate(t,e,n=2){return Mp(t,e,n)}}class Ci{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Ci.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];xh(t),vh(n,t);let o=t.length;e.forEach(xh);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,vh(n,e[l]);const a=Op.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function xh(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function vh(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class vc extends Ve{constructor(t=new Wo([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new ee(i,3)),this.setAttribute("uv",new ee(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:zp;let M,v=!1,w,T,C,b;m&&(M=m.getSpacedPoints(h),v=!0,f=!1,w=m.computeFrenetFrames(h,!1),T=new I,C=new I,b=new I),f||(p=0,d=0,g=0,x=0);const _=a.extractPoints(c);let S=_.shape;const E=_.holes;if(!Ci.isClockWise(S)){S=S.reverse();for(let Y=0,$=E.length;Y<$;Y++){const Z=E[Y];Ci.isClockWise(Z)&&(E[Y]=Z.reverse())}}function U(Y){const Z=10000000000000001e-36;let k=Y[0];for(let tt=1;tt<=Y.length;tt++){const it=tt%Y.length,ft=Y[it],kt=ft.x-k.x,Ut=ft.y-k.y,D=kt*kt+Ut*Ut,A=Math.max(Math.abs(ft.x),Math.abs(ft.y),Math.abs(k.x),Math.abs(k.y)),G=Z*A*A;if(D<=G){Y.splice(it,1),tt--;continue}k=ft}}U(S),E.forEach(U);const B=E.length,F=S;for(let Y=0;Y<B;Y++){const $=E[Y];S=S.concat($)}function q(Y,$,Z){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),Y.clone().addScaledVector($,Z)}const X=S.length;function H(Y,$,Z){let k,tt,it;const ft=Y.x-$.x,kt=Y.y-$.y,Ut=Z.x-Y.x,D=Z.y-Y.y,A=ft*ft+kt*kt,G=ft*D-kt*Ut;if(Math.abs(G)>Number.EPSILON){const J=Math.sqrt(A),at=Math.sqrt(Ut*Ut+D*D),et=$.x-kt/J,Ct=$.y+ft/J,gt=Z.x-D/at,At=Z.y+Ut/at,It=((gt-et)*D-(At-Ct)*Ut)/(ft*D-kt*Ut);k=et+ft*It-Y.x,tt=Ct+kt*It-Y.y;const pt=k*k+tt*tt;if(pt<=2)return new lt(k,tt);it=Math.sqrt(pt/2)}else{let J=!1;ft>Number.EPSILON?Ut>Number.EPSILON&&(J=!0):ft<-Number.EPSILON?Ut<-Number.EPSILON&&(J=!0):Math.sign(kt)===Math.sign(D)&&(J=!0),J?(k=-kt,tt=ft,it=Math.sqrt(A)):(k=ft,tt=kt,it=Math.sqrt(A/2))}return new lt(k/it,tt/it)}const st=[];for(let Y=0,$=F.length,Z=$-1,k=Y+1;Y<$;Y++,Z++,k++)Z===$&&(Z=0),k===$&&(k=0),st[Y]=H(F[Y],F[Z],F[k]);const ut=[];let ct,St=st.concat();for(let Y=0,$=B;Y<$;Y++){const Z=E[Y];ct=[];for(let k=0,tt=Z.length,it=tt-1,ft=k+1;k<tt;k++,it++,ft++)it===tt&&(it=0),ft===tt&&(ft=0),ct[k]=H(Z[k],Z[it],Z[ft]);ut.push(ct),St=St.concat(ct)}let vt;if(p===0)vt=Ci.triangulateShape(F,E);else{const Y=[],$=[];for(let Z=0;Z<p;Z++){const k=Z/p,tt=d*Math.cos(k*Math.PI/2),it=g*Math.sin(k*Math.PI/2)+x;for(let ft=0,kt=F.length;ft<kt;ft++){const Ut=q(F[ft],st[ft],it);N(Ut.x,Ut.y,-tt),k===0&&Y.push(Ut)}for(let ft=0,kt=B;ft<kt;ft++){const Ut=E[ft];ct=ut[ft];const D=[];for(let A=0,G=Ut.length;A<G;A++){const J=q(Ut[A],ct[A],it);N(J.x,J.y,-tt),k===0&&D.push(J)}k===0&&$.push(D)}}vt=Ci.triangulateShape(Y,$)}const Vt=vt.length,Dt=g+x;for(let Y=0;Y<X;Y++){const $=f?q(S[Y],St[Y],Dt):S[Y];v?(C.copy(w.normals[0]).multiplyScalar($.x),T.copy(w.binormals[0]).multiplyScalar($.y),b.copy(M[0]).add(C).add(T),N(b.x,b.y,b.z)):N($.x,$.y,0)}for(let Y=1;Y<=h;Y++)for(let $=0;$<X;$++){const Z=f?q(S[$],St[$],Dt):S[$];v?(C.copy(w.normals[Y]).multiplyScalar(Z.x),T.copy(w.binormals[Y]).multiplyScalar(Z.y),b.copy(M[Y]).add(C).add(T),N(b.x,b.y,b.z)):N(Z.x,Z.y,u/h*Y)}for(let Y=p-1;Y>=0;Y--){const $=Y/p,Z=d*Math.cos($*Math.PI/2),k=g*Math.sin($*Math.PI/2)+x;for(let tt=0,it=F.length;tt<it;tt++){const ft=q(F[tt],st[tt],k);N(ft.x,ft.y,u+Z)}for(let tt=0,it=E.length;tt<it;tt++){const ft=E[tt];ct=ut[tt];for(let kt=0,Ut=ft.length;kt<Ut;kt++){const D=q(ft[kt],ct[kt],k);v?N(D.x,D.y+M[h-1].y,M[h-1].x+Z):N(D.x,D.y,u+Z)}}}j(),nt();function j(){const Y=i.length/3;if(f){let $=0,Z=X*$;for(let k=0;k<Vt;k++){const tt=vt[k];O(tt[2]+Z,tt[1]+Z,tt[0]+Z)}$=h+p*2,Z=X*$;for(let k=0;k<Vt;k++){const tt=vt[k];O(tt[0]+Z,tt[1]+Z,tt[2]+Z)}}else{for(let $=0;$<Vt;$++){const Z=vt[$];O(Z[2],Z[1],Z[0])}for(let $=0;$<Vt;$++){const Z=vt[$];O(Z[0]+X*h,Z[1]+X*h,Z[2]+X*h)}}n.addGroup(Y,i.length/3-Y,0)}function nt(){const Y=i.length/3;let $=0;_t(F,$),$+=F.length;for(let Z=0,k=E.length;Z<k;Z++){const tt=E[Z];_t(tt,$),$+=tt.length}n.addGroup(Y,i.length/3-Y,1)}function _t(Y,$){let Z=Y.length;for(;--Z>=0;){const k=Z;let tt=Z-1;tt<0&&(tt=Y.length-1);for(let it=0,ft=h+p*2;it<ft;it++){const kt=X*it,Ut=X*(it+1),D=$+k+kt,A=$+tt+kt,G=$+tt+Ut,J=$+k+Ut;rt(D,A,G,J)}}}function N(Y,$,Z){l.push(Y),l.push($),l.push(Z)}function O(Y,$,Z){ht(Y),ht($),ht(Z);const k=i.length/3,tt=y.generateTopUV(n,i,k-3,k-2,k-1);P(tt[0]),P(tt[1]),P(tt[2])}function rt(Y,$,Z,k){ht(Y),ht($),ht(k),ht($),ht(Z),ht(k);const tt=i.length/3,it=y.generateSideWallUV(n,i,tt-6,tt-3,tt-2,tt-1);P(it[0]),P(it[1]),P(it[3]),P(it[1]),P(it[2]),P(it[3])}function ht(Y){i.push(l[Y*3+0]),i.push(l[Y*3+1]),i.push(l[Y*3+2])}function P(Y){r.push(Y.x),r.push(Y.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Bp(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Vl[i.type]().fromJSON(i)),new vc(n,t.options)}}const zp={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new lt(r,o),new lt(a,l),new lt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],x=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new lt(o,1-l),new lt(c,1-u),new lt(f,1-g),new lt(x,1-m)]:[new lt(a,1-l),new lt(h,1-u),new lt(d,1-g),new lt(p,1-m)]}};function Bp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class _c extends mc{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _c(t.radius,t.detail)}}class Mc extends Ve{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=he(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new lt,d=new I,g=new I,x=new I;let p=0,m=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:p=t[y+1].x-t[y].x,m=t[y+1].y-t[y].y,d.x=m*1,d.y=-p,d.z=m*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let y=0;y<=e;y++){const M=n+y*h*i,v=Math.sin(M),w=Math.cos(M);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*w,o.push(u.x,u.y,u.z),f.x=y/e,f.y=T/(t.length-1),a.push(f.x,f.y);const C=l[3*T+0]*v,b=l[3*T+1],_=l[3*T+0]*w;c.push(C,b,_)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){const v=M+y*t.length,w=v,T=v+t.length,C=v+t.length+1,b=v+1;r.push(w,T,b),r.push(C,b,T)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.points,t.segments,t.phiStart,t.phiLength)}}class Fe extends Ve{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<h;m++){const y=m*f-o;for(let M=0;M<c;M++){const v=M*u-r;g.push(v,-y,0),x.push(0,0,1),p.push(M/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const M=y+c*m,v=y+c*(m+1),w=y+1+c*(m+1),T=y+1+c*m;d.push(M,v,T),d.push(v,w,T)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fe(t.width,t.height,t.widthSegments,t.heightSegments)}}class ko extends Ve{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const f=(e-t)/i,d=new I,g=new lt;for(let x=0;x<=i;x++){for(let p=0;p<=n;p++){const m=r+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<i;x++){const p=x*(n+1);for(let m=0;m<n;m++){const y=m+p,M=y,v=y+n+1,w=y+n+2,T=y+1;a.push(M,v,T),a.push(v,w,T)}}this.setIndex(a),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class yc extends Ve{constructor(t=new Wo([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ee(i,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function c(h){const u=i.length/3,f=h.extractPoints(e);let d=f.shape;const g=f.holes;Ci.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){const y=g[p];Ci.isClockWise(y)===!0&&(g[p]=y.reverse())}const x=Ci.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){const y=g[p];d=d.concat(y)}for(let p=0,m=d.length;p<m;p++){const y=d[p];i.push(y.x,y.y,0),r.push(0,0,1),o.push(y.x,y.y)}for(let p=0,m=x.length;p<m;p++){const y=x[p],M=y[0]+u,v=y[1]+u,w=y[2]+u;n.push(M,v,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kp(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new yc(n,t.curveSegments)}}function kp(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class je extends Ve{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new I,f=new I,d=[],g=[],x=[],p=[];for(let m=0;m<=n;m++){const y=[],M=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let w=0;w<=e;w++){const T=w/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),p.push(T+v,1-M),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const M=h[m][y+1],v=h[m][y],w=h[m+1][y],T=h[m+1][y+1];(m!==0||o>0)&&d.push(M,v,T),(m!==n-1||l<Math.PI)&&d.push(v,w,T)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(x,3)),this.setAttribute("uv",new ee(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xi extends Ve{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){const x=g/i*r,p=d/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(x),u.y=(t+e*Math.cos(p))*Math.sin(x),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){const x=(i+1)*d+g-1,p=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(x,p,y),o.push(p,m,y)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Hp extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ee extends vs{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vp extends vs{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Gp extends vs{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ln,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cf extends vs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wp extends vs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Xo extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Xp extends Xo{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ta=new $t,_h=new I,Mh=new I;class Sc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fc,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;_h.setFromMatrixPosition(t.matrixWorld),e.position.copy(_h),Mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mh),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Yp extends Sc{constructor(){super(new En(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=lr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class yh extends Xo{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Sh=new $t,br=new I,Ea=new I;class qp extends Sc{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),br.setFromMatrixPosition(t.matrixWorld),n.position.copy(br),Ea.copy(n.position),Ea.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ea),n.updateMatrixWorld(),i.makeTranslation(-br.x,-br.y,-br.z),Sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh,n.coordinateSystem,n.reversedDepth)}}class hf extends Xo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bc extends Ku{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class $p extends Sc{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zp extends Xo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new $p}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Kp extends Ve{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class jp extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function bh(s,t,e,n){const i=Qp(n);switch(e){case Ou:return s*t;case ic:return s*t/i.components*i.byteLength;case sc:return s*t/i.components*i.byteLength;case Bu:return s*t*2/i.components*i.byteLength;case rc:return s*t*2/i.components*i.byteLength;case zu:return s*t*3/i.components*i.byteLength;case zn:return s*t*4/i.components*i.byteLength;case oc:return s*t*4/i.components*i.byteLength;case Do:case Io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Lo:case Uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:case xl:return Math.max(s,16)*Math.max(t,8)/4;case pl:case gl:return Math.max(s,8)*Math.max(t,8)/2;case vl:case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case bl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Al:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Nl:case Fl:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16;case zl:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kl:case Hl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Qp(s){switch(s){case oi:case Lu:return{byteLength:1,components:1};case zr:case Uu:case Yn:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case ms:case tc:case ri:return{byteLength:4,components:1};case Nu:case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);function uf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function t0(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const x=u[d];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,n0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,h0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,p0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,m0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,P0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,O0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,z0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Y0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Im=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ym=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const tg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,og=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ag=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ug=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_g=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ig=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:e0,alphahash_pars_fragment:n0,alphamap_fragment:i0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:o0,aomap_fragment:a0,aomap_pars_fragment:l0,batching_pars_vertex:c0,batching_vertex:h0,begin_vertex:u0,beginnormal_vertex:f0,bsdfs:d0,iridescence_fragment:p0,bumpmap_pars_fragment:m0,clipping_planes_fragment:g0,clipping_planes_pars_fragment:x0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:_0,color_fragment:M0,color_pars_fragment:y0,color_pars_vertex:S0,color_vertex:b0,common:w0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:E0,displacementmap_pars_vertex:A0,displacementmap_vertex:C0,emissivemap_fragment:R0,emissivemap_pars_fragment:P0,colorspace_fragment:D0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:U0,envmap_pars_fragment:N0,envmap_pars_vertex:F0,envmap_physical_pars_fragment:q0,envmap_vertex:O0,fog_vertex:z0,fog_pars_vertex:B0,fog_fragment:k0,fog_pars_fragment:H0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:G0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:Y0,lights_toon_fragment:$0,lights_toon_pars_fragment:Z0,lights_phong_fragment:K0,lights_phong_pars_fragment:j0,lights_physical_fragment:J0,lights_physical_pars_fragment:Q0,lights_fragment_begin:tm,lights_fragment_maps:em,lights_fragment_end:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:om,map_fragment:am,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:fm,morphinstance_vertex:dm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:xm,normal_fragment_begin:vm,normal_fragment_maps:_m,normal_pars_fragment:Mm,normal_pars_vertex:ym,normal_vertex:Sm,normalmap_pars_fragment:bm,clearcoat_normal_fragment_begin:wm,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:Em,iridescence_pars_fragment:Am,opaque_fragment:Cm,packing:Rm,premultiplied_alpha_fragment:Pm,project_vertex:Dm,dithering_fragment:Im,dithering_pars_fragment:Lm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Om,shadowmap_vertex:zm,shadowmask_pars_fragment:Bm,skinbase_vertex:km,skinning_pars_vertex:Hm,skinning_vertex:Vm,skinnormal_vertex:Gm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:Ym,tonemapping_pars_fragment:qm,transmission_fragment:$m,transmission_pars_fragment:Zm,uv_pars_fragment:Km,uv_pars_vertex:jm,uv_vertex:Jm,worldpos_vertex:Qm,background_vert:tg,background_frag:eg,backgroundCube_vert:ng,backgroundCube_frag:ig,cube_vert:sg,cube_frag:rg,depth_vert:og,depth_frag:ag,distanceRGBA_vert:lg,distanceRGBA_frag:cg,equirect_vert:hg,equirect_frag:ug,linedashed_vert:fg,linedashed_frag:dg,meshbasic_vert:pg,meshbasic_frag:mg,meshlambert_vert:gg,meshlambert_frag:xg,meshmatcap_vert:vg,meshmatcap_frag:_g,meshnormal_vert:Mg,meshnormal_frag:yg,meshphong_vert:Sg,meshphong_frag:bg,meshphysical_vert:wg,meshphysical_frag:Tg,meshtoon_vert:Eg,meshtoon_frag:Ag,points_vert:Cg,points_frag:Rg,shadow_vert:Pg,shadow_frag:Dg,sprite_vert:Ig,sprite_frag:Lg},wt={common:{diffuse:{value:new Wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Wt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ui={basic:{uniforms:xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:xn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)},specular:{value:new Wt(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:xn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:xn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Wt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:xn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:xn([wt.points,wt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:xn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:xn([wt.common,wt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:xn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:xn([wt.sprite,wt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:xn([wt.common,wt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:xn([wt.lights,wt.fog,{color:{value:new Wt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ui.physical={uniforms:xn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Wt(0)},specularColor:{value:new Wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const go={r:0,b:0,g:0},es=new ln,Ug=new $t;function Ng(s,t,e,n,i,r,o){const a=new Wt(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function x(M){let v=!1;const w=g(M);w===null?m(a,l):w&&w.isColor&&(m(w,1),v=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(M,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Ho)?(h===void 0&&(h=new Ae(new re(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:cr(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),es.copy(v.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(es)),h.material.toneMapped=ge.getTransfer(w.colorSpace)!==be,(u!==w||f!==w.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Ae(new Fe(2,2),new Ie({name:"BackgroundMaterial",uniforms:cr(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ge.getTransfer(w.colorSpace)!==be,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(go,Zu(s)),n.buffers.color.setClear(go.r,go.g,go.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:x,addToRenderList:p,dispose:y}}function Fg(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(S,E,L,U,B){let F=!1;const q=u(U,L,E);r!==q&&(r=q,c(r.object)),F=d(S,U,L,B),F&&g(S,U,L,B),B!==null&&t.update(B,s.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(S,E,L,U),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,E,L){const U=L.wireframe===!0;let B=n[S.id];B===void 0&&(B={},n[S.id]=B);let F=B[E.id];F===void 0&&(F={},B[E.id]=F);let q=F[U];return q===void 0&&(q=f(l()),F[U]=q),q}function f(S){const E=[],L=[],U=[];for(let B=0;B<e;B++)E[B]=0,L[B]=0,U[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:L,attributeDivisors:U,object:S,attributes:{},index:null}}function d(S,E,L,U){const B=r.attributes,F=E.attributes;let q=0;const X=L.getAttributes();for(const H in X)if(X[H].location>=0){const ut=B[H];let ct=F[H];if(ct===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ct=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ct=S.instanceColor)),ut===void 0||ut.attribute!==ct||ct&&ut.data!==ct.data)return!0;q++}return r.attributesNum!==q||r.index!==U}function g(S,E,L,U){const B={},F=E.attributes;let q=0;const X=L.getAttributes();for(const H in X)if(X[H].location>=0){let ut=F[H];ut===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor));const ct={};ct.attribute=ut,ut&&ut.data&&(ct.data=ut.data),B[H]=ct,q++}r.attributes=B,r.attributesNum=q,r.index=U}function x(){const S=r.newAttributes;for(let E=0,L=S.length;E<L;E++)S[E]=0}function p(S){m(S,0)}function m(S,E){const L=r.newAttributes,U=r.enabledAttributes,B=r.attributeDivisors;L[S]=1,U[S]===0&&(s.enableVertexAttribArray(S),U[S]=1),B[S]!==E&&(s.vertexAttribDivisor(S,E),B[S]=E)}function y(){const S=r.newAttributes,E=r.enabledAttributes;for(let L=0,U=E.length;L<U;L++)E[L]!==S[L]&&(s.disableVertexAttribArray(L),E[L]=0)}function M(S,E,L,U,B,F,q){q===!0?s.vertexAttribIPointer(S,E,L,B,F):s.vertexAttribPointer(S,E,L,U,B,F)}function v(S,E,L,U){x();const B=U.attributes,F=L.getAttributes(),q=E.defaultAttributeValues;for(const X in F){const H=F[X];if(H.location>=0){let st=B[X];if(st===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ut=st.normalized,ct=st.itemSize,St=t.get(st);if(St===void 0)continue;const vt=St.buffer,Vt=St.type,Dt=St.bytesPerElement,j=Vt===s.INT||Vt===s.UNSIGNED_INT||st.gpuType===tc;if(st.isInterleavedBufferAttribute){const nt=st.data,_t=nt.stride,N=st.offset;if(nt.isInstancedInterleavedBuffer){for(let O=0;O<H.locationSize;O++)m(H.location+O,nt.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let O=0;O<H.locationSize;O++)p(H.location+O);s.bindBuffer(s.ARRAY_BUFFER,vt);for(let O=0;O<H.locationSize;O++)M(H.location+O,ct/H.locationSize,Vt,ut,_t*Dt,(N+ct/H.locationSize*O)*Dt,j)}else{if(st.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt,st.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt);s.bindBuffer(s.ARRAY_BUFFER,vt);for(let nt=0;nt<H.locationSize;nt++)M(H.location+nt,ct/H.locationSize,Vt,ut,ct*Dt,ct/H.locationSize*nt*Dt,j)}}else if(q!==void 0){const ut=q[X];if(ut!==void 0)switch(ut.length){case 2:s.vertexAttrib2fv(H.location,ut);break;case 3:s.vertexAttrib3fv(H.location,ut);break;case 4:s.vertexAttrib4fv(H.location,ut);break;default:s.vertexAttrib1fv(H.location,ut)}}}}y()}function w(){b();for(const S in n){const E=n[S];for(const L in E){const U=E[L];for(const B in U)h(U[B].object),delete U[B];delete E[L]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const E=n[S.id];for(const L in E){const U=E[L];for(const B in U)h(U[B].object),delete U[B];delete E[L]}delete n[S.id]}function C(S){for(const E in n){const L=n[E];if(L[S.id]===void 0)continue;const U=L[S.id];for(const B in U)h(U[B].object),delete U[B];delete L[S.id]}}function b(){_(),o=!0,r!==i&&(r=i,c(r.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:b,resetDefaultState:_,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:y}}function Og(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*f[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function zg(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==zn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const b=C===Yn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==oi&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ri&&!b)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:w,maxSamples:T}}function Bg(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new os,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,M=y*4;let v=m.clippingState||null;l.value=v,v=h(g,f,M,d);for(let w=0;w!==M;++w)v[w]=e[w];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){const x=u!==null?u.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=d+x*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,v=d;M!==x;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function kg(s){let t=new WeakMap;function e(o,a){return a===ul?o.mapping=ir:a===fl&&(o.mapping=sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ul||a===fl)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jd(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const js=4,wh=[.125,.215,.35,.446,.526,.582],ls=20,Aa=new bc,Th=new Wt;let Ca=null,Ra=0,Pa=0,Da=!1;const as=(1+Math.sqrt(5))/2,Fs=1/as,Eh=[new I(-as,Fs,0),new I(as,Fs,0),new I(-Fs,0,as),new I(Fs,0,as),new I(0,as,-Fs),new I(0,as,Fs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Hg=new I;class Xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Hg}=r;Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Ra,Pa),this._renderer.xr.enabled=Da,t.scissorTest=!1,xo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ir||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),Da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Yn,format:zn,colorSpace:ar,depthBuffer:!1},i=Ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ah(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vg(r)),this._blurMaterial=Gg(r,t,e)}return i}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Aa)}_sceneToCubeUV(t,e,n,i,r){const l=new En(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Th),u.toneMapping=Wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new ai({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),p=new Ae(new re,x);let m=!1;const y=t.background;y?y.isColor&&(x.color.copy(y),t.background=null,m=!0):(x.color.copy(Th),m=!0);for(let M=0;M<6;M++){const v=M%3;v===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):v===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const w=this._cubeSize;xo(i,v*w,M>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=y}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ir||t.mapping===sr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;xo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Aa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Eh[(i-r-1)%Eh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ls-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):ls;p>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ls}`);const m=[];let y=0;for(let C=0;C<ls;++C){const b=C/x,_=Math.exp(-b*b/2);m.push(_),C===0?y+=_:C<p&&(y+=2*_)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const v=this._sizeLods[i],w=3*v*(i>M-js?i-M+js:0),T=4*(this._cubeSize-v);xo(e,w,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Aa)}}function Vg(s){const t=[],e=[],n=[];let i=s;const r=s-js+1+wh.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-js?l=wh[o-s+js-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,p=2,m=1,y=new Float32Array(x*g*d),M=new Float32Array(p*g*d),v=new Float32Array(m*g*d);for(let T=0;T<d;T++){const C=T%3*2/3-1,b=T>2?0:-1,_=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];y.set(_,x*g*T),M.set(f,p*g*T);const S=[T,T,T,T,T,T];v.set(S,m*g*T)}const w=new Ve;w.setAttribute("position",new Mn(y,x)),w.setAttribute("uv",new Mn(M,p)),w.setAttribute("faceIndex",new Mn(v,m)),t.push(w),i>js&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ah(s,t,e){const n=new Cn(s,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xo(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Gg(s,t,e){const n=new Float32Array(ls),i=new I(0,1,0);return new Ie({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Ch(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function Rh(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ul||l===fl,h=l===ir||l===sr;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Xl(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Xl(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xg(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Yg(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)t.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,g=u.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let M=0,v=y.length;M<v;M+=3){const w=y[M+0],T=y[M+1],C=y[M+2];f.push(w,T,T,C,C,w)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const w=M+0,T=M+1,C=M+2;f.push(w,T,T,C,C,w)}}else return;const p=new(Vu(f)?$u:qu)(f,1);p.version=x;const m=r.get(u);m&&t.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function qg(s,t,e){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(s.drawElementsInstanced(n,d,r,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let p=0;for(let m=0;m<g;m++)p+=d[m];e.update(p,n,1)}function u(f,d,g,x){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*x[y];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function $g(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Zg(s,t,e){const n=new WeakMap,i=new Me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let S=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var d=S;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),p===!0&&(v=3);let w=a.attributes.position.count*v,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const C=new Float32Array(w*T*4*u),b=new Gu(C,w,T,u);b.type=ri,b.needsUpdate=!0;const _=v*4;for(let E=0;E<u;E++){const L=m[E],U=y[E],B=M[E],F=w*T*4*E;for(let q=0;q<L.count;q++){const X=q*_;g===!0&&(i.fromBufferAttribute(L,q),C[F+X+0]=i.x,C[F+X+1]=i.y,C[F+X+2]=i.z,C[F+X+3]=0),x===!0&&(i.fromBufferAttribute(U,q),C[F+X+4]=i.x,C[F+X+5]=i.y,C[F+X+6]=i.z,C[F+X+7]=0),p===!0&&(i.fromBufferAttribute(B,q),C[F+X+8]=i.x,C[F+X+9]=i.y,C[F+X+10]=i.z,C[F+X+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:b,size:new lt(w,T)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Kg(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const ff=new pn,Ph=new dc(1,1),df=new Gu,pf=new Nd,mf=new ju,Dh=[],Ih=[],Lh=new Float32Array(16),Uh=new Float32Array(9),Nh=new Float32Array(4);function mr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Dh[i];if(r===void 0&&(r=new Float32Array(i),Dh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function nn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function sn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Yo(s,t){let e=Ih[t];e===void 0&&(e=new Int32Array(t),Ih[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function jg(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Jg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2fv(this.addr,t),sn(e,t)}}function Qg(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;s.uniform3fv(this.addr,t),sn(e,t)}}function tx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4fv(this.addr,t),sn(e,t)}}function ex(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Nh.set(n),s.uniformMatrix2fv(this.addr,!1,Nh),sn(e,n)}}function nx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Uh.set(n),s.uniformMatrix3fv(this.addr,!1,Uh),sn(e,n)}}function ix(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),sn(e,t)}else{if(nn(e,n))return;Lh.set(n),s.uniformMatrix4fv(this.addr,!1,Lh),sn(e,n)}}function sx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function rx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2iv(this.addr,t),sn(e,t)}}function ox(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3iv(this.addr,t),sn(e,t)}}function ax(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4iv(this.addr,t),sn(e,t)}}function lx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function cx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2uiv(this.addr,t),sn(e,t)}}function hx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;s.uniform3uiv(this.addr,t),sn(e,t)}}function ux(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4uiv(this.addr,t),sn(e,t)}}function fx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ph.compareFunction=Hu,r=Ph):r=ff,e.setTexture2D(t||r,i)}function dx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||pf,i)}function px(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||mf,i)}function mx(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||df,i)}function gx(s){switch(s){case 5126:return jg;case 35664:return Jg;case 35665:return Qg;case 35666:return tx;case 35674:return ex;case 35675:return nx;case 35676:return ix;case 5124:case 35670:return sx;case 35667:case 35671:return rx;case 35668:case 35672:return ox;case 35669:case 35673:return ax;case 5125:return lx;case 36294:return cx;case 36295:return hx;case 36296:return ux;case 35678:case 36198:case 36298:case 36306:case 35682:return fx;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return px;case 36289:case 36303:case 36311:case 36292:return mx}}function xx(s,t){s.uniform1fv(this.addr,t)}function vx(s,t){const e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function _x(s,t){const e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function Mx(s,t){const e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function yx(s,t){const e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Sx(s,t){const e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function bx(s,t){const e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function wx(s,t){s.uniform1iv(this.addr,t)}function Tx(s,t){s.uniform2iv(this.addr,t)}function Ex(s,t){s.uniform3iv(this.addr,t)}function Ax(s,t){s.uniform4iv(this.addr,t)}function Cx(s,t){s.uniform1uiv(this.addr,t)}function Rx(s,t){s.uniform2uiv(this.addr,t)}function Px(s,t){s.uniform3uiv(this.addr,t)}function Dx(s,t){s.uniform4uiv(this.addr,t)}function Ix(s,t,e){const n=this.cache,i=t.length,r=Yo(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ff,r[o])}function Lx(s,t,e){const n=this.cache,i=t.length,r=Yo(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||pf,r[o])}function Ux(s,t,e){const n=this.cache,i=t.length,r=Yo(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||mf,r[o])}function Nx(s,t,e){const n=this.cache,i=t.length,r=Yo(e,i);nn(n,r)||(s.uniform1iv(this.addr,r),sn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||df,r[o])}function Fx(s){switch(s){case 5126:return xx;case 35664:return vx;case 35665:return _x;case 35666:return Mx;case 35674:return yx;case 35675:return Sx;case 35676:return bx;case 5124:case 35670:return wx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Cx;case 36294:return Rx;case 36295:return Px;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Nx}}class Ox{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gx(e.type)}}class zx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Fx(e.type)}}class Bx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Ia=/(\w+)(\])?(\[|\.)?/g;function Fh(s,t){s.seq.push(t),s.map[t.id]=t}function kx(s,t,e){const n=s.name,i=n.length;for(Ia.lastIndex=0;;){const r=Ia.exec(n),o=Ia.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fh(e,c===void 0?new Ox(a,s,t):new zx(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Bx(a),Fh(e,u)),e=u}}}class No{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);kx(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Oh(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Hx=37297;let Vx=0;function Gx(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const zh=new se;function Wx(s){ge._getMatrix(zh,ge.workingColorSpace,s);const t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case Oo:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bh(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Gx(s.getShaderSource(t),a)}else return r}function Xx(s,t){const e=Wx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yx(s,t){let e;switch(t){case Eu:e="Linear";break;case Au:e="Reinhard";break;case Cu:e="Cineon";break;case Ql:e="ACESFilmic";break;case Pu:e="AgX";break;case Du:e="Neutral";break;case Ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const vo=new I;function qx(){ge.getLuminanceCoefficients(vo);const s=vo.x.toFixed(4),t=vo.y.toFixed(4),e=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $x(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function Zx(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kx(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Dr(s){return s!==""}function kh(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(s){return s.replace(jx,Qx)}const Jx=new Map;function Qx(s,t){let e=oe[t];if(e===void 0){const n=Jx.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Yl(e)}const tv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vh(s){return s.replace(tv,ev)}function ev(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Gh(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function nv(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===wu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tu?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Si&&(t="SHADOWMAP_TYPE_VSM"),t}function iv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ir:case sr:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sv(s){let t="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===sr&&(t="ENVMAP_MODE_REFRACTION"),t}function rv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jl:t="ENVMAP_BLENDING_MULTIPLY";break;case Jf:t="ENVMAP_BLENDING_MIX";break;case Qf:t="ENVMAP_BLENDING_ADD";break}return t}function ov(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function av(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=nv(e),c=iv(e),h=sv(e),u=rv(e),f=ov(e),d=$x(e),g=Zx(r),x=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Dr).join(`
`),m.length>0&&(m+=`
`)):(p=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),m=[Gh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?oe.tonemapping_pars_fragment:"",e.toneMapping!==Wi?Yx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,Xx("linearToOutputTexel",e.outputColorSpace),qx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Dr).join(`
`)),o=Yl(o),o=kh(o,e),o=Hh(o,e),a=Yl(a),a=kh(a,e),a=Hh(a,e),o=Vh(o),a=Vh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=y+p+o,v=y+m+a,w=Oh(i,i.VERTEX_SHADER,M),T=Oh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,w),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(E){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x)||"",U=i.getShaderInfoLog(w)||"",B=i.getShaderInfoLog(T)||"",F=L.trim(),q=U.trim(),X=B.trim();let H=!0,st=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,w,T);else{const ut=Bh(i,w,"vertex"),ct=Bh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+F+`
`+ut+`
`+ct)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(q===""||X==="")&&(st=!1);st&&(E.diagnostics={runnable:H,programLog:F,vertexShader:{log:q,prefix:p},fragmentShader:{log:X,prefix:m}})}i.deleteShader(w),i.deleteShader(T),b=new No(i,x),_=Kx(i,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(x,Hx)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=T,this}let lv=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hv(t),e.set(t,n)),n}}class hv{constructor(t){this.id=lv++,this.code=t,this.usedTimes=0}}function uv(s,t,e,n,i,r,o){const a=new Xu,l=new cv,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function p(_,S,E,L,U){const B=L.fog,F=U.geometry,q=_.isMeshStandardMaterial?L.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||q),H=X&&X.mapping===Ho?X.image.height:null,st=g[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ut=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,ct=ut!==void 0?ut.length:0;let St=0;F.morphAttributes.position!==void 0&&(St=1),F.morphAttributes.normal!==void 0&&(St=2),F.morphAttributes.color!==void 0&&(St=3);let vt,Vt,Dt,j;if(st){const ye=ui[st];vt=ye.vertexShader,Vt=ye.fragmentShader}else vt=_.vertexShader,Vt=_.fragmentShader,l.update(_),Dt=l.getVertexShaderID(_),j=l.getFragmentShaderID(_);const nt=s.getRenderTarget(),_t=s.state.buffers.depth.getReversed(),N=U.isInstancedMesh===!0,O=U.isBatchedMesh===!0,rt=!!_.map,ht=!!_.matcap,P=!!X,Y=!!_.aoMap,$=!!_.lightMap,Z=!!_.bumpMap,k=!!_.normalMap,tt=!!_.displacementMap,it=!!_.emissiveMap,ft=!!_.metalnessMap,kt=!!_.roughnessMap,Ut=_.anisotropy>0,D=_.clearcoat>0,A=_.dispersion>0,G=_.iridescence>0,J=_.sheen>0,at=_.transmission>0,et=Ut&&!!_.anisotropyMap,Ct=D&&!!_.clearcoatMap,gt=D&&!!_.clearcoatNormalMap,At=D&&!!_.clearcoatRoughnessMap,It=G&&!!_.iridescenceMap,pt=G&&!!_.iridescenceThicknessMap,Tt=J&&!!_.sheenColorMap,Xt=J&&!!_.sheenRoughnessMap,Ft=!!_.specularMap,bt=!!_.specularColorMap,Zt=!!_.specularIntensityMap,z=at&&!!_.transmissionMap,dt=at&&!!_.thicknessMap,Mt=!!_.gradientMap,Pt=!!_.alphaMap,mt=_.alphaTest>0,ot=!!_.alphaHash,Nt=!!_.extensions;let Qt=Wi;_.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Qt=s.toneMapping);const Re={shaderID:st,shaderType:_.type,shaderName:_.name,vertexShader:vt,fragmentShader:Vt,defines:_.defines,customVertexShaderID:Dt,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:O,batchingColor:O&&U._colorsTexture!==null,instancing:N,instancingColor:N&&U.instanceColor!==null,instancingMorph:N&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:ar,alphaToCoverage:!!_.alphaToCoverage,map:rt,matcap:ht,envMap:P,envMapMode:P&&X.mapping,envMapCubeUVHeight:H,aoMap:Y,lightMap:$,bumpMap:Z,normalMap:k,displacementMap:f&&tt,emissiveMap:it,normalMapObjectSpace:k&&_.normalMapType===id,normalMapTangentSpace:k&&_.normalMapType===Vo,metalnessMap:ft,roughnessMap:kt,anisotropy:Ut,anisotropyMap:et,clearcoat:D,clearcoatMap:Ct,clearcoatNormalMap:gt,clearcoatRoughnessMap:At,dispersion:A,iridescence:G,iridescenceMap:It,iridescenceThicknessMap:pt,sheen:J,sheenColorMap:Tt,sheenRoughnessMap:Xt,specularMap:Ft,specularColorMap:bt,specularIntensityMap:Zt,transmission:at,transmissionMap:z,thicknessMap:dt,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===ds&&_.alphaToCoverage===!1,alphaMap:Pt,alphaTest:mt,alphaHash:ot,combine:_.combine,mapUv:rt&&x(_.map.channel),aoMapUv:Y&&x(_.aoMap.channel),lightMapUv:$&&x(_.lightMap.channel),bumpMapUv:Z&&x(_.bumpMap.channel),normalMapUv:k&&x(_.normalMap.channel),displacementMapUv:tt&&x(_.displacementMap.channel),emissiveMapUv:it&&x(_.emissiveMap.channel),metalnessMapUv:ft&&x(_.metalnessMap.channel),roughnessMapUv:kt&&x(_.roughnessMap.channel),anisotropyMapUv:et&&x(_.anisotropyMap.channel),clearcoatMapUv:Ct&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:gt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&x(_.sheenRoughnessMap.channel),specularMapUv:Ft&&x(_.specularMap.channel),specularColorMapUv:bt&&x(_.specularColorMap.channel),specularIntensityMapUv:Zt&&x(_.specularIntensityMap.channel),transmissionMapUv:z&&x(_.transmissionMap.channel),thicknessMapUv:dt&&x(_.thicknessMap.channel),alphaMapUv:Pt&&x(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(k||Ut),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(rt||Pt),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:St,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&E.length>0,shadowMapType:s.shadowMap.type,toneMapping:Qt,decodeVideoTexture:rt&&_.map.isVideoTexture===!0&&ge.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:it&&_.emissiveMap.isVideoTexture===!0&&ge.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ke,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Nt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&_.extensions.multiDraw===!0||O)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function m(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const E in _.defines)S.push(E),S.push(_.defines[E]);return _.isRawShaderMaterial===!1&&(y(S,_),M(S,_),S.push(s.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function M(_,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){const S=g[_.type];let E;if(S){const L=ui[S];E=ii.clone(L.uniforms)}else E=_.uniforms;return E}function w(_,S){let E;for(let L=0,U=h.length;L<U;L++){const B=h[L];if(B.cacheKey===S){E=B,++E.usedTimes;break}}return E===void 0&&(E=new av(s,S,_,r),h.push(E)),E}function T(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function C(_){l.remove(_)}function b(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:b}}function fv(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function dv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Wh(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Xh(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,x,p){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},s[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=x,m.group=p),t++,m}function a(u,f,d,g,x,p){const m=o(u,f,d,g,x,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):e.push(m)}function l(u,f,d,g,x,p){const m=o(u,f,d,g,x,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,f){e.length>1&&e.sort(u||dv),n.length>1&&n.sort(f||Wh),i.length>1&&i.sort(f||Wh)}function h(){for(let u=t,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function pv(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Xh,s.set(n,[o])):i>=r.length?(o=new Xh,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Wt};break;case"SpotLight":e={position:new I,direction:new I,color:new Wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Wt,groundColor:new Wt};break;case"RectAreaLight":e={color:new Wt,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function gv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let xv=0;function vv(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function _v(s){const t=new mv,e=gv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const i=new I,r=new $t,o=new $t;function a(c){let h=0,u=0,f=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,y=0,M=0,v=0,w=0,T=0,C=0;c.sort(vv);for(let _=0,S=c.length;_<S;_++){const E=c[_],L=E.color,U=E.intensity,B=E.distance,F=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=L.r*U,u+=L.g*U,f+=L.b*U;else if(E.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(E.sh.coefficients[q],U);C++}else if(E.isDirectionalLight){const q=t.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const X=E.shadow,H=e.get(E);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[d]=H,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=E.shadow.matrix,y++}n.directional[d]=q,d++}else if(E.isSpotLight){const q=t.get(E);q.position.setFromMatrixPosition(E.matrixWorld),q.color.copy(L).multiplyScalar(U),q.distance=B,q.coneCos=Math.cos(E.angle),q.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),q.decay=E.decay,n.spot[x]=q;const X=E.shadow;if(E.map&&(n.spotLightMap[w]=E.map,w++,X.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[x]=X.matrix,E.castShadow){const H=e.get(E);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=F,v++}x++}else if(E.isRectAreaLight){const q=t.get(E);q.color.copy(L).multiplyScalar(U),q.halfWidth.set(E.width*.5,0,0),q.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=q,p++}else if(E.isPointLight){const q=t.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity),q.distance=E.distance,q.decay=E.decay,E.castShadow){const X=E.shadow,H=e.get(E);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=E.shadow.matrix,M++}n.point[g]=q,g++}else if(E.isHemisphereLight){const q=t.get(E);q.skyColor.copy(E.color).multiplyScalar(U),q.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[m]=q,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const b=n.hash;(b.directionalLength!==d||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==p||b.hemiLength!==m||b.numDirectionalShadows!==y||b.numPointShadows!==M||b.numSpotShadows!==v||b.numSpotMaps!==w||b.numLightProbes!==C)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,b.directionalLength=d,b.pointLength=g,b.spotLength=x,b.rectAreaLength=p,b.hemiLength=m,b.numDirectionalShadows=y,b.numPointShadows=M,b.numSpotShadows=v,b.numSpotMaps=w,b.numLightProbes=C,n.version=xv++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0;const p=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const M=c[m];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),u++}else if(M.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(p),d++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:n}}function Yh(s){const t=new _v(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Mv(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Yh(s),t.set(i,[a])):r>=o.length?(a=new Yh(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bv(s,t,e){let n=new fc;const i=new lt,r=new lt,o=new Me,a=new cf({depthPacking:ku}),l=new Wp,c={},h=e.maxTextureSize,u={[Di]:en,[en]:Di,[Ke]:Ke},f=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:yv,fragmentShader:Sv}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ae(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wu;let m=this.type;this.render=function(T,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const _=s.getRenderTarget(),S=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),L=s.state;L.setBlending(un),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const U=m!==Si&&this.type===Si,B=m===Si&&this.type!==Si;for(let F=0,q=T.length;F<q;F++){const X=T[F],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const st=H.getFrameExtents();if(i.multiply(st),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,H.mapSize.y=r.y)),H.map===null||U===!0||B===!0){const ct=this.type!==Si?{minFilter:_n,magFilter:_n}:{};H.map!==null&&H.map.dispose(),H.map=new Cn(i.x,i.y,ct),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const ut=H.getViewportCount();for(let ct=0;ct<ut;ct++){const St=H.getViewport(ct);o.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),L.viewport(o),H.updateMatrices(X,ct),n=H.getFrustum(),v(C,b,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Si&&y(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(_,S,E)};function y(T,C){const b=t.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Cn(i.x,i.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,b,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,b,d,x,null)}function M(T,C,b,_){let S=null;const E=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)S=E;else if(S=b.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=S.uuid,U=C.uuid;let B=c[L];B===void 0&&(B={},c[L]=B);let F=B[U];F===void 0&&(F=S.clone(),B[U]=F,C.addEventListener("dispose",w)),S=F}if(S.visible=C.visible,S.wireframe=C.wireframe,_===Si?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const L=s.properties.get(S);L.light=b}return S}function v(T,C,b,_,S){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Si)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const U=t.update(T),B=T.material;if(Array.isArray(B)){const F=U.groups;for(let q=0,X=F.length;q<X;q++){const H=F[q],st=B[H.materialIndex];if(st&&st.visible){const ut=M(T,st,_,S);T.onBeforeShadow(s,T,C,b,U,ut,H),s.renderBufferDirect(b,null,U,ut,T,H),T.onAfterShadow(s,T,C,b,U,ut,H)}}}else if(B.visible){const F=M(T,B,_,S);T.onBeforeShadow(s,T,C,b,U,F,null),s.renderBufferDirect(b,null,U,F,T,null),T.onAfterShadow(s,T,C,b,U,F,null)}}const L=T.children;for(let U=0,B=L.length;U<B;U++)v(L[U],C,b,_,S)}function w(T){T.target.removeEventListener("dispose",w);for(const b in c){const _=c[b],S=T.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const wv={[sl]:rl,[ol]:cl,[al]:hl,[nr]:ll,[rl]:sl,[cl]:ol,[hl]:al,[ll]:nr};function Tv(s,t){function e(){let z=!1;const dt=new Me;let Mt=null;const Pt=new Me(0,0,0,0);return{setMask:function(mt){Mt!==mt&&!z&&(s.colorMask(mt,mt,mt,mt),Mt=mt)},setLocked:function(mt){z=mt},setClear:function(mt,ot,Nt,Qt,Re){Re===!0&&(mt*=Qt,ot*=Qt,Nt*=Qt),dt.set(mt,ot,Nt,Qt),Pt.equals(dt)===!1&&(s.clearColor(mt,ot,Nt,Qt),Pt.copy(dt))},reset:function(){z=!1,Mt=null,Pt.set(-1,0,0,0)}}}function n(){let z=!1,dt=!1,Mt=null,Pt=null,mt=null;return{setReversed:function(ot){if(dt!==ot){const Nt=t.get("EXT_clip_control");ot?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),dt=ot;const Qt=mt;mt=null,this.setClear(Qt)}},getReversed:function(){return dt},setTest:function(ot){ot?nt(s.DEPTH_TEST):_t(s.DEPTH_TEST)},setMask:function(ot){Mt!==ot&&!z&&(s.depthMask(ot),Mt=ot)},setFunc:function(ot){if(dt&&(ot=wv[ot]),Pt!==ot){switch(ot){case sl:s.depthFunc(s.NEVER);break;case rl:s.depthFunc(s.ALWAYS);break;case ol:s.depthFunc(s.LESS);break;case nr:s.depthFunc(s.LEQUAL);break;case al:s.depthFunc(s.EQUAL);break;case ll:s.depthFunc(s.GEQUAL);break;case cl:s.depthFunc(s.GREATER);break;case hl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pt=ot}},setLocked:function(ot){z=ot},setClear:function(ot){mt!==ot&&(dt&&(ot=1-ot),s.clearDepth(ot),mt=ot)},reset:function(){z=!1,Mt=null,Pt=null,mt=null,dt=!1}}}function i(){let z=!1,dt=null,Mt=null,Pt=null,mt=null,ot=null,Nt=null,Qt=null,Re=null;return{setTest:function(ye){z||(ye?nt(s.STENCIL_TEST):_t(s.STENCIL_TEST))},setMask:function(ye){dt!==ye&&!z&&(s.stencilMask(ye),dt=ye)},setFunc:function(ye,pi,li){(Mt!==ye||Pt!==pi||mt!==li)&&(s.stencilFunc(ye,pi,li),Mt=ye,Pt=pi,mt=li)},setOp:function(ye,pi,li){(ot!==ye||Nt!==pi||Qt!==li)&&(s.stencilOp(ye,pi,li),ot=ye,Nt=pi,Qt=li)},setLocked:function(ye){z=ye},setClear:function(ye){Re!==ye&&(s.clearStencil(ye),Re=ye)},reset:function(){z=!1,dt=null,Mt=null,Pt=null,mt=null,ot=null,Nt=null,Qt=null,Re=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,w=null,T=null,C=new Wt(0,0,0),b=0,_=!1,S=null,E=null,L=null,U=null,B=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,X=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=X>=2);let st=null,ut={};const ct=s.getParameter(s.SCISSOR_BOX),St=s.getParameter(s.VIEWPORT),vt=new Me().fromArray(ct),Vt=new Me().fromArray(St);function Dt(z,dt,Mt,Pt){const mt=new Uint8Array(4),ot=s.createTexture();s.bindTexture(z,ot),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<Mt;Nt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(dt,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(dt+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ot}const j={};j[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),j[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),j[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(s.DEPTH_TEST),o.setFunc(nr),Z(!1),k(Nc),nt(s.CULL_FACE),Y(un);function nt(z){h[z]!==!0&&(s.enable(z),h[z]=!0)}function _t(z){h[z]!==!1&&(s.disable(z),h[z]=!1)}function N(z,dt){return u[z]!==dt?(s.bindFramebuffer(z,dt),u[z]=dt,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=dt),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=dt),!0):!1}function O(z,dt){let Mt=d,Pt=!1;if(z){Mt=f.get(dt),Mt===void 0&&(Mt=[],f.set(dt,Mt));const mt=z.textures;if(Mt.length!==mt.length||Mt[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,Nt=mt.length;ot<Nt;ot++)Mt[ot]=s.COLOR_ATTACHMENT0+ot;Mt.length=mt.length,Pt=!0}}else Mt[0]!==s.BACK&&(Mt[0]=s.BACK,Pt=!0);Pt&&s.drawBuffers(Mt)}function rt(z){return g!==z?(s.useProgram(z),g=z,!0):!1}const ht={[Xn]:s.FUNC_ADD,[Bf]:s.FUNC_SUBTRACT,[kf]:s.FUNC_REVERSE_SUBTRACT};ht[Hf]=s.MIN,ht[Vf]=s.MAX;const P={[Rr]:s.ZERO,[Qa]:s.ONE,[Gf]:s.SRC_COLOR,[tl]:s.SRC_ALPHA,[qf]:s.SRC_ALPHA_SATURATE,[il]:s.DST_COLOR,[nl]:s.DST_ALPHA,[Wf]:s.ONE_MINUS_SRC_COLOR,[el]:s.ONE_MINUS_SRC_ALPHA,[Yf]:s.ONE_MINUS_DST_COLOR,[Xf]:s.ONE_MINUS_DST_ALPHA,[$f]:s.CONSTANT_COLOR,[Zf]:s.ONE_MINUS_CONSTANT_COLOR,[Kf]:s.CONSTANT_ALPHA,[jf]:s.ONE_MINUS_CONSTANT_ALPHA};function Y(z,dt,Mt,Pt,mt,ot,Nt,Qt,Re,ye){if(z===un){x===!0&&(_t(s.BLEND),x=!1);return}if(x===!1&&(nt(s.BLEND),x=!0),z!==jl){if(z!==p||ye!==_){if((m!==Xn||v!==Xn)&&(s.blendEquation(s.FUNC_ADD),m=Xn,v=Xn),ye)switch(z){case ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.ONE,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,M=null,w=null,T=null,C.set(0,0,0),b=0,p=z,_=ye}return}mt=mt||dt,ot=ot||Mt,Nt=Nt||Pt,(dt!==m||mt!==v)&&(s.blendEquationSeparate(ht[dt],ht[mt]),m=dt,v=mt),(Mt!==y||Pt!==M||ot!==w||Nt!==T)&&(s.blendFuncSeparate(P[Mt],P[Pt],P[ot],P[Nt]),y=Mt,M=Pt,w=ot,T=Nt),(Qt.equals(C)===!1||Re!==b)&&(s.blendColor(Qt.r,Qt.g,Qt.b,Re),C.copy(Qt),b=Re),p=z,_=!1}function $(z,dt){z.side===Ke?_t(s.CULL_FACE):nt(s.CULL_FACE);let Mt=z.side===en;dt&&(Mt=!Mt),Z(Mt),z.blending===ds&&z.transparent===!1?Y(un):Y(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const Pt=z.stencilWrite;a.setTest(Pt),Pt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),it(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?nt(s.SAMPLE_ALPHA_TO_COVERAGE):_t(s.SAMPLE_ALPHA_TO_COVERAGE)}function Z(z){S!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),S=z)}function k(z){z!==Of?(nt(s.CULL_FACE),z!==E&&(z===Nc?s.cullFace(s.BACK):z===zf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_t(s.CULL_FACE),E=z}function tt(z){z!==L&&(q&&s.lineWidth(z),L=z)}function it(z,dt,Mt){z?(nt(s.POLYGON_OFFSET_FILL),(U!==dt||B!==Mt)&&(s.polygonOffset(dt,Mt),U=dt,B=Mt)):_t(s.POLYGON_OFFSET_FILL)}function ft(z){z?nt(s.SCISSOR_TEST):_t(s.SCISSOR_TEST)}function kt(z){z===void 0&&(z=s.TEXTURE0+F-1),st!==z&&(s.activeTexture(z),st=z)}function Ut(z,dt,Mt){Mt===void 0&&(st===null?Mt=s.TEXTURE0+F-1:Mt=st);let Pt=ut[Mt];Pt===void 0&&(Pt={type:void 0,texture:void 0},ut[Mt]=Pt),(Pt.type!==z||Pt.texture!==dt)&&(st!==Mt&&(s.activeTexture(Mt),st=Mt),s.bindTexture(z,dt||j[z]),Pt.type=z,Pt.texture=dt)}function D(){const z=ut[st];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function J(){try{s.texSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{s.texSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ct(){try{s.compressedTexSubImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{s.texStorage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{s.texStorage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function It(){try{s.texImage2D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{s.texImage3D(...arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(z){vt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),vt.copy(z))}function Xt(z){Vt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Vt.copy(z))}function Ft(z,dt){let Mt=c.get(dt);Mt===void 0&&(Mt=new WeakMap,c.set(dt,Mt));let Pt=Mt.get(z);Pt===void 0&&(Pt=s.getUniformBlockIndex(dt,z.name),Mt.set(z,Pt))}function bt(z,dt){const Pt=c.get(dt).get(z);l.get(dt)!==Pt&&(s.uniformBlockBinding(dt,Pt,z.__bindingPointIndex),l.set(dt,Pt))}function Zt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,ut={},u={},f=new WeakMap,d=[],g=null,x=!1,p=null,m=null,y=null,M=null,v=null,w=null,T=null,C=new Wt(0,0,0),b=0,_=!1,S=null,E=null,L=null,U=null,B=null,vt.set(0,0,s.canvas.width,s.canvas.height),Vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:nt,disable:_t,bindFramebuffer:N,drawBuffers:O,useProgram:rt,setBlending:Y,setMaterial:$,setFlipSided:Z,setCullFace:k,setLineWidth:tt,setPolygonOffset:it,setScissorTest:ft,activeTexture:kt,bindTexture:Ut,unbindTexture:D,compressedTexImage2D:A,compressedTexImage3D:G,texImage2D:It,texImage3D:pt,updateUBOMapping:Ft,uniformBlockBinding:bt,texStorage2D:gt,texStorage3D:At,texSubImage2D:J,texSubImage3D:at,compressedTexSubImage2D:et,compressedTexSubImage3D:Ct,scissor:Tt,viewport:Xt,reset:Zt}}function Ev(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,A){return d?new OffscreenCanvas(D,A):Bo("canvas")}function x(D,A,G){let J=1;const at=Ut(D);if((at.width>G||at.height>G)&&(J=G/Math.max(at.width,at.height)),J<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const et=Math.floor(J*at.width),Ct=Math.floor(J*at.height);u===void 0&&(u=g(et,Ct));const gt=A?g(et,Ct):u;return gt.width=et,gt.height=Ct,gt.getContext("2d").drawImage(D,0,0,et,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+et+"x"+Ct+")."),gt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),D;return D}function p(D){return D.generateMipmaps}function m(D){s.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(D,A,G,J,at=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let et=A;if(A===s.RED&&(G===s.FLOAT&&(et=s.R32F),G===s.HALF_FLOAT&&(et=s.R16F),G===s.UNSIGNED_BYTE&&(et=s.R8)),A===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(et=s.R8UI),G===s.UNSIGNED_SHORT&&(et=s.R16UI),G===s.UNSIGNED_INT&&(et=s.R32UI),G===s.BYTE&&(et=s.R8I),G===s.SHORT&&(et=s.R16I),G===s.INT&&(et=s.R32I)),A===s.RG&&(G===s.FLOAT&&(et=s.RG32F),G===s.HALF_FLOAT&&(et=s.RG16F),G===s.UNSIGNED_BYTE&&(et=s.RG8)),A===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(et=s.RG8UI),G===s.UNSIGNED_SHORT&&(et=s.RG16UI),G===s.UNSIGNED_INT&&(et=s.RG32UI),G===s.BYTE&&(et=s.RG8I),G===s.SHORT&&(et=s.RG16I),G===s.INT&&(et=s.RG32I)),A===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(et=s.RGB8UI),G===s.UNSIGNED_SHORT&&(et=s.RGB16UI),G===s.UNSIGNED_INT&&(et=s.RGB32UI),G===s.BYTE&&(et=s.RGB8I),G===s.SHORT&&(et=s.RGB16I),G===s.INT&&(et=s.RGB32I)),A===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),G===s.UNSIGNED_INT&&(et=s.RGBA32UI),G===s.BYTE&&(et=s.RGBA8I),G===s.SHORT&&(et=s.RGBA16I),G===s.INT&&(et=s.RGBA32I)),A===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),A===s.RGBA){const Ct=at?Oo:ge.getTransfer(J);G===s.FLOAT&&(et=s.RGBA32F),G===s.HALF_FLOAT&&(et=s.RGBA16F),G===s.UNSIGNED_BYTE&&(et=Ct===be?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function v(D,A){let G;return D?A===null||A===ms||A===rr?G=s.DEPTH24_STENCIL8:A===ri?G=s.DEPTH32F_STENCIL8:A===zr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===ms||A===rr?G=s.DEPTH_COMPONENT24:A===ri?G=s.DEPTH_COMPONENT32F:A===zr&&(G=s.DEPTH_COMPONENT16),G}function w(D,A){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==_n&&D.minFilter!==si?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=D.target;A.removeEventListener("dispose",T),b(A),A.isVideoTexture&&h.delete(A)}function C(D){const A=D.target;A.removeEventListener("dispose",C),S(A)}function b(D){const A=n.get(D);if(A.__webglInit===void 0)return;const G=D.source,J=f.get(G);if(J){const at=J[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&_(D),Object.keys(J).length===0&&f.delete(G)}n.remove(D)}function _(D){const A=n.get(D);s.deleteTexture(A.__webglTexture);const G=D.source,J=f.get(G);delete J[A.__cacheKey],o.memory.textures--}function S(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(A.__webglFramebuffer[J]))for(let at=0;at<A.__webglFramebuffer[J].length;at++)s.deleteFramebuffer(A.__webglFramebuffer[J][at]);else s.deleteFramebuffer(A.__webglFramebuffer[J]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[J])}else{if(Array.isArray(A.__webglFramebuffer))for(let J=0;J<A.__webglFramebuffer.length;J++)s.deleteFramebuffer(A.__webglFramebuffer[J]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let J=0;J<A.__webglColorRenderbuffer.length;J++)A.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[J]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const G=D.textures;for(let J=0,at=G.length;J<at;J++){const et=n.get(G[J]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(D)}let E=0;function L(){E=0}function U(){const D=E;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),E+=1,D}function B(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function F(D,A){const G=n.get(D);if(D.isVideoTexture&&ft(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const J=D.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,D,A);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+A)}function q(D,A){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){j(G,D,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+A)}function X(D,A){const G=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){j(G,D,A);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+A)}function H(D,A){const G=n.get(D);if(D.version>0&&G.__version!==D.version){nt(G,D,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+A)}const st={[Yi]:s.REPEAT,[cs]:s.CLAMP_TO_EDGE,[dl]:s.MIRRORED_REPEAT},ut={[_n]:s.NEAREST,[ed]:s.NEAREST_MIPMAP_NEAREST,[Yr]:s.NEAREST_MIPMAP_LINEAR,[si]:s.LINEAR,[jo]:s.LINEAR_MIPMAP_NEAREST,[hs]:s.LINEAR_MIPMAP_LINEAR},ct={[sd]:s.NEVER,[hd]:s.ALWAYS,[rd]:s.LESS,[Hu]:s.LEQUAL,[od]:s.EQUAL,[cd]:s.GEQUAL,[ad]:s.GREATER,[ld]:s.NOTEQUAL};function St(D,A){if(A.type===ri&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===si||A.magFilter===jo||A.magFilter===Yr||A.magFilter===hs||A.minFilter===si||A.minFilter===jo||A.minFilter===Yr||A.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,st[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,st[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,st[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ut[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ut[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ct[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===_n||A.minFilter!==Yr&&A.minFilter!==hs||A.type===ri&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function vt(D,A){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));const J=A.source;let at=f.get(J);at===void 0&&(at={},f.set(J,at));const et=B(A);if(et!==D.__cacheKey){at[et]===void 0&&(at[et]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),at[et].usedTimes++;const Ct=at[D.__cacheKey];Ct!==void 0&&(at[D.__cacheKey].usedTimes--,Ct.usedTimes===0&&_(A)),D.__cacheKey=et,D.__webglTexture=at[et].texture}return G}function Vt(D,A,G){return Math.floor(Math.floor(D/G)/A)}function Dt(D,A,G,J){const et=D.updateRanges;if(et.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,G,J,A.data);else{et.sort((pt,Tt)=>pt.start-Tt.start);let Ct=0;for(let pt=1;pt<et.length;pt++){const Tt=et[Ct],Xt=et[pt],Ft=Tt.start+Tt.count,bt=Vt(Xt.start,A.width,4),Zt=Vt(Tt.start,A.width,4);Xt.start<=Ft+1&&bt===Zt&&Vt(Xt.start+Xt.count-1,A.width,4)===bt?Tt.count=Math.max(Tt.count,Xt.start+Xt.count-Tt.start):(++Ct,et[Ct]=Xt)}et.length=Ct+1;const gt=s.getParameter(s.UNPACK_ROW_LENGTH),At=s.getParameter(s.UNPACK_SKIP_PIXELS),It=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let pt=0,Tt=et.length;pt<Tt;pt++){const Xt=et[pt],Ft=Math.floor(Xt.start/4),bt=Math.ceil(Xt.count/4),Zt=Ft%A.width,z=Math.floor(Ft/A.width),dt=bt,Mt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Zt),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,Zt,z,dt,Mt,G,J,A.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,gt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,At),s.pixelStorei(s.UNPACK_SKIP_ROWS,It)}}function j(D,A,G){let J=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(J=s.TEXTURE_3D);const at=vt(D,A),et=A.source;e.bindTexture(J,D.__webglTexture,s.TEXTURE0+G);const Ct=n.get(et);if(et.version!==Ct.__version||at===!0){e.activeTexture(s.TEXTURE0+G);const gt=ge.getPrimaries(ge.workingColorSpace),At=A.colorSpace===wi?null:ge.getPrimaries(A.colorSpace),It=A.colorSpace===wi||gt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let pt=x(A.image,!1,i.maxTextureSize);pt=kt(A,pt);const Tt=r.convert(A.format,A.colorSpace),Xt=r.convert(A.type);let Ft=M(A.internalFormat,Tt,Xt,A.colorSpace,A.isVideoTexture);St(J,A);let bt;const Zt=A.mipmaps,z=A.isVideoTexture!==!0,dt=Ct.__version===void 0||at===!0,Mt=et.dataReady,Pt=w(A,pt);if(A.isDepthTexture)Ft=v(A.format===or,A.type),dt&&(z?e.texStorage2D(s.TEXTURE_2D,1,Ft,pt.width,pt.height):e.texImage2D(s.TEXTURE_2D,0,Ft,pt.width,pt.height,0,Tt,Xt,null));else if(A.isDataTexture)if(Zt.length>0){z&&dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ft,Zt[0].width,Zt[0].height);for(let mt=0,ot=Zt.length;mt<ot;mt++)bt=Zt[mt],z?Mt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,bt.width,bt.height,Tt,Xt,bt.data):e.texImage2D(s.TEXTURE_2D,mt,Ft,bt.width,bt.height,0,Tt,Xt,bt.data);A.generateMipmaps=!1}else z?(dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ft,pt.width,pt.height),Mt&&Dt(A,pt,Tt,Xt)):e.texImage2D(s.TEXTURE_2D,0,Ft,pt.width,pt.height,0,Tt,Xt,pt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){z&&dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ft,Zt[0].width,Zt[0].height,pt.depth);for(let mt=0,ot=Zt.length;mt<ot;mt++)if(bt=Zt[mt],A.format!==zn)if(Tt!==null)if(z){if(Mt)if(A.layerUpdates.size>0){const Nt=bh(bt.width,bt.height,A.format,A.type);for(const Qt of A.layerUpdates){const Re=bt.data.subarray(Qt*Nt/bt.data.BYTES_PER_ELEMENT,(Qt+1)*Nt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,Qt,bt.width,bt.height,1,Tt,Re)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,bt.width,bt.height,pt.depth,Tt,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,Ft,bt.width,bt.height,pt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?Mt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,bt.width,bt.height,pt.depth,Tt,Xt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,Ft,bt.width,bt.height,pt.depth,0,Tt,Xt,bt.data)}else{z&&dt&&e.texStorage2D(s.TEXTURE_2D,Pt,Ft,Zt[0].width,Zt[0].height);for(let mt=0,ot=Zt.length;mt<ot;mt++)bt=Zt[mt],A.format!==zn?Tt!==null?z?Mt&&e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,bt.width,bt.height,Tt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,Ft,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?Mt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,bt.width,bt.height,Tt,Xt,bt.data):e.texImage2D(s.TEXTURE_2D,mt,Ft,bt.width,bt.height,0,Tt,Xt,bt.data)}else if(A.isDataArrayTexture)if(z){if(dt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Ft,pt.width,pt.height,pt.depth),Mt)if(A.layerUpdates.size>0){const mt=bh(pt.width,pt.height,A.format,A.type);for(const ot of A.layerUpdates){const Nt=pt.data.subarray(ot*mt/pt.data.BYTES_PER_ELEMENT,(ot+1)*mt/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,pt.width,pt.height,1,Tt,Xt,Nt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Tt,Xt,pt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,pt.width,pt.height,pt.depth,0,Tt,Xt,pt.data);else if(A.isData3DTexture)z?(dt&&e.texStorage3D(s.TEXTURE_3D,Pt,Ft,pt.width,pt.height,pt.depth),Mt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Tt,Xt,pt.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,pt.width,pt.height,pt.depth,0,Tt,Xt,pt.data);else if(A.isFramebufferTexture){if(dt)if(z)e.texStorage2D(s.TEXTURE_2D,Pt,Ft,pt.width,pt.height);else{let mt=pt.width,ot=pt.height;for(let Nt=0;Nt<Pt;Nt++)e.texImage2D(s.TEXTURE_2D,Nt,Ft,mt,ot,0,Tt,Xt,null),mt>>=1,ot>>=1}}else if(Zt.length>0){if(z&&dt){const mt=Ut(Zt[0]);e.texStorage2D(s.TEXTURE_2D,Pt,Ft,mt.width,mt.height)}for(let mt=0,ot=Zt.length;mt<ot;mt++)bt=Zt[mt],z?Mt&&e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Tt,Xt,bt):e.texImage2D(s.TEXTURE_2D,mt,Ft,Tt,Xt,bt);A.generateMipmaps=!1}else if(z){if(dt){const mt=Ut(pt);e.texStorage2D(s.TEXTURE_2D,Pt,Ft,mt.width,mt.height)}Mt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt,Xt,pt)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Tt,Xt,pt);p(A)&&m(J),Ct.__version=et.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function nt(D,A,G){if(A.image.length!==6)return;const J=vt(D,A),at=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+G);const et=n.get(at);if(at.version!==et.__version||J===!0){e.activeTexture(s.TEXTURE0+G);const Ct=ge.getPrimaries(ge.workingColorSpace),gt=A.colorSpace===wi?null:ge.getPrimaries(A.colorSpace),At=A.colorSpace===wi||Ct===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const It=A.isCompressedTexture||A.image[0].isCompressedTexture,pt=A.image[0]&&A.image[0].isDataTexture,Tt=[];for(let ot=0;ot<6;ot++)!It&&!pt?Tt[ot]=x(A.image[ot],!0,i.maxCubemapSize):Tt[ot]=pt?A.image[ot].image:A.image[ot],Tt[ot]=kt(A,Tt[ot]);const Xt=Tt[0],Ft=r.convert(A.format,A.colorSpace),bt=r.convert(A.type),Zt=M(A.internalFormat,Ft,bt,A.colorSpace),z=A.isVideoTexture!==!0,dt=et.__version===void 0||J===!0,Mt=at.dataReady;let Pt=w(A,Xt);St(s.TEXTURE_CUBE_MAP,A);let mt;if(It){z&&dt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Zt,Xt.width,Xt.height);for(let ot=0;ot<6;ot++){mt=Tt[ot].mipmaps;for(let Nt=0;Nt<mt.length;Nt++){const Qt=mt[Nt];A.format!==zn?Ft!==null?z?Mt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,0,0,Qt.width,Qt.height,Ft,Qt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,Zt,Qt.width,Qt.height,0,Qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,0,0,Qt.width,Qt.height,Ft,bt,Qt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt,Zt,Qt.width,Qt.height,0,Ft,bt,Qt.data)}}}else{if(mt=A.mipmaps,z&&dt){mt.length>0&&Pt++;const ot=Ut(Tt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,Zt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(pt){z?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Tt[ot].width,Tt[ot].height,Ft,bt,Tt[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Zt,Tt[ot].width,Tt[ot].height,0,Ft,bt,Tt[ot].data);for(let Nt=0;Nt<mt.length;Nt++){const Re=mt[Nt].image[ot].image;z?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,0,0,Re.width,Re.height,Ft,bt,Re.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,Zt,Re.width,Re.height,0,Ft,bt,Re.data)}}else{z?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Ft,bt,Tt[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,Zt,Ft,bt,Tt[ot]);for(let Nt=0;Nt<mt.length;Nt++){const Qt=mt[Nt];z?Mt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,0,0,Ft,bt,Qt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Nt+1,Zt,Ft,bt,Qt.image[ot])}}}p(A)&&m(s.TEXTURE_CUBE_MAP),et.__version=at.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function _t(D,A,G,J,at,et){const Ct=r.convert(G.format,G.colorSpace),gt=r.convert(G.type),At=M(G.internalFormat,Ct,gt,G.colorSpace),It=n.get(A),pt=n.get(G);if(pt.__renderTarget=A,!It.__hasExternalTextures){const Tt=Math.max(1,A.width>>et),Xt=Math.max(1,A.height>>et);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,et,At,Tt,Xt,A.depth,0,Ct,gt,null):e.texImage2D(at,et,At,Tt,Xt,0,Ct,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),it(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,at,pt.__webglTexture,0,tt(A)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,at,pt.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function N(D,A,G){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const J=A.depthTexture,at=J&&J.isDepthTexture?J.type:null,et=v(A.stencilBuffer,at),Ct=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,gt=tt(A);it(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,et,A.width,A.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,et,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,et,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,D)}else{const J=A.textures;for(let at=0;at<J.length;at++){const et=J[at],Ct=r.convert(et.format,et.colorSpace),gt=r.convert(et.type),At=M(et.internalFormat,Ct,gt,et.colorSpace),It=tt(A);G&&it(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,At,A.width,A.height):it(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,At,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,At,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function O(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(A.depthTexture);J.__renderTarget=A,(!J.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);const at=J.__webglTexture,et=tt(A);if(A.depthTexture.format===Br)it(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(A.depthTexture.format===or)it(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,et):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function rt(D){const A=n.get(D),G=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const J=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),J){const at=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,J.removeEventListener("dispose",at)};J.addEventListener("dispose",at),A.__depthDisposeCallback=at}A.__boundDepthTexture=J}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=D.texture.mipmaps;J&&J.length>0?O(A.__webglFramebuffer[0],D):O(A.__webglFramebuffer,D)}else if(G){A.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[J]),A.__webglDepthbuffer[J]===void 0)A.__webglDepthbuffer[J]=s.createRenderbuffer(),N(A.__webglDepthbuffer[J],D,!1);else{const at=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=A.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,et)}}else{const J=D.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),N(A.__webglDepthbuffer,D,!1);else{const at=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,et)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(D,A,G){const J=n.get(D);A!==void 0&&_t(J.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&rt(D)}function P(D){const A=D.texture,G=n.get(D),J=n.get(A);D.addEventListener("dispose",C);const at=D.textures,et=D.isWebGLCubeRenderTarget===!0,Ct=at.length>1;if(Ct||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=A.version,o.memory.textures++),et){G.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer[gt]=[];for(let At=0;At<A.mipmaps.length;At++)G.__webglFramebuffer[gt][At]=s.createFramebuffer()}else G.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){G.__webglFramebuffer=[];for(let gt=0;gt<A.mipmaps.length;gt++)G.__webglFramebuffer[gt]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let gt=0,At=at.length;gt<At;gt++){const It=n.get(at[gt]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&it(D)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let gt=0;gt<at.length;gt++){const At=at[gt];G.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[gt]);const It=r.convert(At.format,At.colorSpace),pt=r.convert(At.type),Tt=M(At.internalFormat,It,pt,At.colorSpace,D.isXRRenderTarget===!0),Xt=tt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Tt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,G.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),N(G.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),St(s.TEXTURE_CUBE_MAP,A);for(let gt=0;gt<6;gt++)if(A.mipmaps&&A.mipmaps.length>0)for(let At=0;At<A.mipmaps.length;At++)_t(G.__webglFramebuffer[gt][At],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,At);else _t(G.__webglFramebuffer[gt],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);p(A)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let gt=0,At=at.length;gt<At;gt++){const It=at[gt],pt=n.get(It);let Tt=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Tt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Tt,pt.__webglTexture),St(Tt,It),_t(G.__webglFramebuffer,D,It,s.COLOR_ATTACHMENT0+gt,Tt,0),p(It)&&m(Tt)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(gt=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,J.__webglTexture),St(gt,A),A.mipmaps&&A.mipmaps.length>0)for(let At=0;At<A.mipmaps.length;At++)_t(G.__webglFramebuffer[At],D,A,s.COLOR_ATTACHMENT0,gt,At);else _t(G.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,gt,0);p(A)&&m(gt),e.unbindTexture()}D.depthBuffer&&rt(D)}function Y(D){const A=D.textures;for(let G=0,J=A.length;G<J;G++){const at=A[G];if(p(at)){const et=y(D),Ct=n.get(at).__webglTexture;e.bindTexture(et,Ct),m(et),e.unbindTexture()}}}const $=[],Z=[];function k(D){if(D.samples>0){if(it(D)===!1){const A=D.textures,G=D.width,J=D.height;let at=s.COLOR_BUFFER_BIT;const et=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(D),gt=A.length>1;if(gt)for(let It=0;It<A.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer);const At=D.texture.mipmaps;At&&At.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let It=0;It<A.length;It++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[It]);const pt=n.get(A[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,G,J,0,0,G,J,at,s.NEAREST),l===!0&&($.length=0,Z.length=0,$.push(s.COLOR_ATTACHMENT0+It),D.depthBuffer&&D.resolveDepthBuffer===!1&&($.push(et),Z.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let It=0;It<A.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[It]);const pt=n.get(A[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function tt(D){return Math.min(i.maxSamples,D.samples)}function it(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ft(D){const A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function kt(D,A){const G=D.colorSpace,J=D.format,at=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==ar&&G!==wi&&(ge.getTransfer(G)===be?(J!==zn||at!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),A}function Ut(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=L,this.setTexture2D=F,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=ht,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=it}function Av(s,t){function e(n,i=wi){let r;const o=ge.getTransfer(i);if(n===oi)return s.UNSIGNED_BYTE;if(n===ec)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Lu)return s.BYTE;if(n===Uu)return s.SHORT;if(n===zr)return s.UNSIGNED_SHORT;if(n===tc)return s.INT;if(n===ms)return s.UNSIGNED_INT;if(n===ri)return s.FLOAT;if(n===Yn)return s.HALF_FLOAT;if(n===Ou)return s.ALPHA;if(n===zu)return s.RGB;if(n===zn)return s.RGBA;if(n===Br)return s.DEPTH_COMPONENT;if(n===or)return s.DEPTH_STENCIL;if(n===ic)return s.RED;if(n===sc)return s.RED_INTEGER;if(n===Bu)return s.RG;if(n===rc)return s.RG_INTEGER;if(n===oc)return s.RGBA_INTEGER;if(n===Do||n===Io||n===Lo||n===Uo)if(o===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pl||n===ml||n===gl||n===xl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vl||n===_l||n===Ml)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vl||n===_l)return o===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ml)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===yl||n===Sl||n===bl||n===wl||n===Tl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Il||n===Ll||n===Ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===yl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Al)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Cl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Rl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dl)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Il)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ul)return o===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Fl||n===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nl)return o===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===zl||n===Bl||n===kl||n===Hl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===zl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const Cv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Qu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ie({vertexShader:Cv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new Fe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dv extends pr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",p=new Pv,m={},y=e.getContextAttributes();let M=null,v=null;const w=[],T=[],C=new lt;let b=null;const _=new En;_.viewport=new Me;const S=new En;S.viewport=new Me;const E=[_,S],L=new jp;let U=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=w[j];return nt===void 0&&(nt=new va,w[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=w[j];return nt===void 0&&(nt=new va,w[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=w[j];return nt===void 0&&(nt=new va,w[j]=nt),nt.getHandSpace()};function F(j){const nt=T.indexOf(j.inputSource);if(nt===-1)return;const _t=w[nt];_t!==void 0&&(_t.update(j.inputSource,j.frame,c||o),_t.dispatchEvent({type:j.type,data:j.inputSource}))}function q(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",X);for(let j=0;j<w.length;j++){const nt=T[j];nt!==null&&(T[j]=null,w[j].disconnect(nt))}U=null,B=null,p.reset();for(const j in m)delete m[j];t.setRenderTarget(M),d=null,f=null,u=null,i=null,v=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",q),i.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,N=null,O=null;y.depth&&(O=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=y.stencil?or:Br,N=y.stencil?rr:ms);const rt={colorFormat:e.RGBA8,depthFormat:O,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(rt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new Cn(f.textureWidth,f.textureHeight,{format:zn,type:oi,depthTexture:new dc(f.textureWidth,f.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _t={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,_t),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Cn(d.framebufferWidth,d.framebufferHeight,{format:zn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function X(j){for(let nt=0;nt<j.removed.length;nt++){const _t=j.removed[nt],N=T.indexOf(_t);N>=0&&(T[N]=null,w[N].disconnect(_t))}for(let nt=0;nt<j.added.length;nt++){const _t=j.added[nt];let N=T.indexOf(_t);if(N===-1){for(let rt=0;rt<w.length;rt++)if(rt>=T.length){T.push(_t),N=rt;break}else if(T[rt]===null){T[rt]=_t,N=rt;break}if(N===-1)break}const O=w[N];O&&O.connect(_t)}}const H=new I,st=new I;function ut(j,nt,_t){H.setFromMatrixPosition(nt.matrixWorld),st.setFromMatrixPosition(_t.matrixWorld);const N=H.distanceTo(st),O=nt.projectionMatrix.elements,rt=_t.projectionMatrix.elements,ht=O[14]/(O[10]-1),P=O[14]/(O[10]+1),Y=(O[9]+1)/O[5],$=(O[9]-1)/O[5],Z=(O[8]-1)/O[0],k=(rt[8]+1)/rt[0],tt=ht*Z,it=ht*k,ft=N/(-Z+k),kt=ft*-Z;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(kt),j.translateZ(ft),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),O[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Ut=ht+ft,D=P+ft,A=tt-kt,G=it+(N-kt),J=Y*P/D*Ut,at=$*P/D*Ut;j.projectionMatrix.makePerspective(A,G,J,at,Ut,D),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ct(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let nt=j.near,_t=j.far;p.texture!==null&&(p.depthNear>0&&(nt=p.depthNear),p.depthFar>0&&(_t=p.depthFar)),L.near=S.near=_.near=nt,L.far=S.far=_.far=_t,(U!==L.near||B!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),U=L.near,B=L.far),L.layers.mask=j.layers.mask|6,_.layers.mask=L.layers.mask&3,S.layers.mask=L.layers.mask&5;const N=j.parent,O=L.cameras;ct(L,N);for(let rt=0;rt<O.length;rt++)ct(O[rt],N);O.length===2?ut(L,_,S):L.projectionMatrix.copy(_.projectionMatrix),St(j,L,N)};function St(j,nt,_t){_t===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(_t.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=lr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(L)},this.getCameraTexture=function(j){return m[j]};let vt=null;function Vt(j,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const _t=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let N=!1;_t.length!==L.cameras.length&&(L.cameras.length=0,N=!0);for(let P=0;P<_t.length;P++){const Y=_t[P];let $=null;if(d!==null)$=d.getViewport(Y);else{const k=u.getViewSubImage(f,Y);$=k.viewport,P===0&&(t.setRenderTargetTextures(v,k.colorTexture,k.depthStencilTexture),t.setRenderTarget(v))}let Z=E[P];Z===void 0&&(Z=new En,Z.layers.enable(P),Z.viewport=new Me,E[P]=Z),Z.matrix.fromArray(Y.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Y.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set($.x,$.y,$.width,$.height),P===0&&(L.matrix.copy(Z.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),N===!0&&L.cameras.push(Z)}const O=i.enabledFeatures;if(O&&O.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const P=u.getDepthInformation(_t[0]);P&&P.isValid&&P.texture&&p.init(P,i.renderState)}if(O&&O.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let P=0;P<_t.length;P++){const Y=_t[P].camera;if(Y){let $=m[Y];$||($=new Qu,m[Y]=$);const Z=u.getCameraImage(Y);$.sourceTexture=Z}}}}for(let _t=0;_t<w.length;_t++){const N=T[_t],O=w[_t];N!==null&&O!==void 0&&O.update(N,nt,c||o)}vt&&vt(j,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const Dt=new uf;Dt.setAnimationLoop(Vt),this.setAnimationLoop=function(j){vt=j},this.dispose=function(){}}}const ns=new ln,Iv=new $t;function Lv(s,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Zu(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===en&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===en&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),M=y.envMap,v=y.envMapRotation;M&&(p.envMap.value=M,ns.copy(v),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),p.envMapRotation.value.setFromMatrix4(Iv.makeRotationFromEuler(ns)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===en&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Uv(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",p));const w=M.program;n.updateUBOMapping(y,w);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const M=u();y.__bindingPointIndex=M;const v=s.createBuffer(),w=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,w,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=i[y.id],v=y.uniforms,w=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let T=0,C=v.length;T<C;T++){const b=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,S=b.length;_<S;_++){const E=b[_];if(d(E,T,_,w)===!0){const L=E.__offset,U=Array.isArray(E.value)?E.value:[E.value];let B=0;for(let F=0;F<U.length;F++){const q=U[F],X=x(q);typeof q=="number"||typeof q=="boolean"?(E.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,L+B,E.__data)):q.isMatrix3?(E.__data[0]=q.elements[0],E.__data[1]=q.elements[1],E.__data[2]=q.elements[2],E.__data[3]=0,E.__data[4]=q.elements[3],E.__data[5]=q.elements[4],E.__data[6]=q.elements[5],E.__data[7]=0,E.__data[8]=q.elements[6],E.__data[9]=q.elements[7],E.__data[10]=q.elements[8],E.__data[11]=0):(q.toArray(E.__data,B),B+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,M,v,w){const T=y.value,C=M+"_"+v;if(w[C]===void 0)return typeof T=="number"||typeof T=="boolean"?w[C]=T:w[C]=T.clone(),!0;{const b=w[C];if(typeof T=="number"||typeof T=="boolean"){if(b!==T)return w[C]=T,!0}else if(b.equals(T)===!1)return b.copy(T),!0}return!1}function g(y){const M=y.uniforms;let v=0;const w=16;for(let C=0,b=M.length;C<b;C++){const _=Array.isArray(M[C])?M[C]:[M[C]];for(let S=0,E=_.length;S<E;S++){const L=_[S],U=Array.isArray(L.value)?L.value:[L.value];for(let B=0,F=U.length;B<F;B++){const q=U[B],X=x(q),H=v%w,st=H%X.boundary,ut=H+st;v+=st,ut!==0&&w-ut<X.storage&&(v+=w-ut),L.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=X.storage}}}const T=v%w;return T>0&&(v+=w-T),y.__size=v,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function m(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Nv{constructor(t={}){const{canvas:e=Cd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),x=new Int32Array(4);let p=null,m=null;const y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let w=!1;this._outputColorSpace=wn;let T=0,C=0,b=null,_=-1,S=null;const E=new Me,L=new Me;let U=null;const B=new Wt(0);let F=0,q=e.width,X=e.height,H=1,st=null,ut=null;const ct=new Me(0,0,q,X),St=new Me(0,0,q,X);let vt=!1;const Vt=new fc;let Dt=!1,j=!1;const nt=new $t,_t=new I,N=new Me,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function ht(){return b===null?H:1}let P=n;function Y(R,V){return e.getContext(R,V)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),P===null){const V="webgl2";if(P=Y(V,R),P===null)throw Y(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $,Z,k,tt,it,ft,kt,Ut,D,A,G,J,at,et,Ct,gt,At,It,pt,Tt,Xt,Ft,bt,Zt;function z(){$=new Xg(P),$.init(),Ft=new Av(P,$),Z=new zg(P,$,t,Ft),k=new Tv(P,$),Z.reversedDepthBuffer&&f&&k.buffers.depth.setReversed(!0),tt=new $g(P),it=new fv,ft=new Ev(P,$,k,it,Z,Ft,tt),kt=new kg(v),Ut=new Wg(v),D=new t0(P),bt=new Fg(P,D),A=new Yg(P,D,tt,bt),G=new Kg(P,A,D,tt),pt=new Zg(P,Z,ft),gt=new Bg(it),J=new uv(v,kt,Ut,$,Z,bt,gt),at=new Lv(v,it),et=new pv,Ct=new Mv($),It=new Ng(v,kt,Ut,k,G,d,l),At=new bv(v,G,Z),Zt=new Uv(P,tt,Z,k),Tt=new Og(P,$,tt),Xt=new qg(P,$,tt),tt.programs=J.programs,v.capabilities=Z,v.extensions=$,v.properties=it,v.renderLists=et,v.shadowMap=At,v.state=k,v.info=tt}z();const dt=new Dv(v,P);this.xr=dt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const R=$.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(q,X,!1))},this.getSize=function(R){return R.set(q,X)},this.setSize=function(R,V,K=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=R,X=V,e.width=Math.floor(R*H),e.height=Math.floor(V*H),K===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(q*H,X*H).floor()},this.setDrawingBufferSize=function(R,V,K){q=R,X=V,H=K,e.width=Math.floor(R*K),e.height=Math.floor(V*K),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(ct)},this.setViewport=function(R,V,K,Q){R.isVector4?ct.set(R.x,R.y,R.z,R.w):ct.set(R,V,K,Q),k.viewport(E.copy(ct).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(St)},this.setScissor=function(R,V,K,Q){R.isVector4?St.set(R.x,R.y,R.z,R.w):St.set(R,V,K,Q),k.scissor(L.copy(St).multiplyScalar(H).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(R){k.setScissorTest(vt=R)},this.setOpaqueSort=function(R){st=R},this.setTransparentSort=function(R){ut=R},this.getClearColor=function(R){return R.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(R=!0,V=!0,K=!0){let Q=0;if(R){let W=!1;if(b!==null){const xt=b.texture.format;W=xt===oc||xt===rc||xt===sc}if(W){const xt=b.texture.type,Et=xt===oi||xt===ms||xt===zr||xt===rr||xt===ec||xt===nc,Lt=It.getClearColor(),Rt=It.getClearAlpha(),qt=Lt.r,Kt=Lt.g,Ht=Lt.b;Et?(g[0]=qt,g[1]=Kt,g[2]=Ht,g[3]=Rt,P.clearBufferuiv(P.COLOR,0,g)):(x[0]=qt,x[1]=Kt,x[2]=Ht,x[3]=Rt,P.clearBufferiv(P.COLOR,0,x))}else Q|=P.COLOR_BUFFER_BIT}V&&(Q|=P.DEPTH_BUFFER_BIT),K&&(Q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),It.dispose(),et.dispose(),Ct.dispose(),it.dispose(),kt.dispose(),Ut.dispose(),G.dispose(),bt.dispose(),Zt.dispose(),J.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",li),dt.removeEventListener("sessionend",Rc),Zi.stop()};function Mt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const R=tt.autoReset,V=At.enabled,K=At.autoUpdate,Q=At.needsUpdate,W=At.type;z(),tt.autoReset=R,At.enabled=V,At.autoUpdate=K,At.needsUpdate=Q,At.type=W}function mt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ot(R){const V=R.target;V.removeEventListener("dispose",ot),Nt(V)}function Nt(R){Qt(R),it.remove(R)}function Qt(R){const V=it.get(R).programs;V!==void 0&&(V.forEach(function(K){J.releaseProgram(K)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,K,Q,W,xt){V===null&&(V=O);const Et=W.isMesh&&W.matrixWorld.determinant()<0,Lt=Df(R,V,K,Q,W);k.setMaterial(Q,Et);let Rt=K.index,qt=1;if(Q.wireframe===!0){if(Rt=A.getWireframeAttribute(K),Rt===void 0)return;qt=2}const Kt=K.drawRange,Ht=K.attributes.position;let fe=Kt.start*qt,we=(Kt.start+Kt.count)*qt;xt!==null&&(fe=Math.max(fe,xt.start*qt),we=Math.min(we,(xt.start+xt.count)*qt)),Rt!==null?(fe=Math.max(fe,0),we=Math.min(we,Rt.count)):Ht!=null&&(fe=Math.max(fe,0),we=Math.min(we,Ht.count));const Ge=we-fe;if(Ge<0||Ge===1/0)return;bt.setup(W,Q,Lt,K,Rt);let De,Ce=Tt;if(Rt!==null&&(De=D.get(Rt),Ce=Xt,Ce.setIndex(De)),W.isMesh)Q.wireframe===!0?(k.setLineWidth(Q.wireframeLinewidth*ht()),Ce.setMode(P.LINES)):Ce.setMode(P.TRIANGLES);else if(W.isLine){let Gt=Q.linewidth;Gt===void 0&&(Gt=1),k.setLineWidth(Gt*ht()),W.isLineSegments?Ce.setMode(P.LINES):W.isLineLoop?Ce.setMode(P.LINE_LOOP):Ce.setMode(P.LINE_STRIP)}else W.isPoints?Ce.setMode(P.POINTS):W.isSprite&&Ce.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if($.get("WEBGL_multi_draw"))Ce.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Gt=W._multiDrawStarts,Be=W._multiDrawCounts,ve=W._multiDrawCount,Rn=Rt?D.get(Rt).bytesPerElement:1,ys=it.get(Q).currentProgram.getUniforms();for(let Pn=0;Pn<ve;Pn++)ys.setValue(P,"_gl_DrawID",Pn),Ce.render(Gt[Pn]/Rn,Be[Pn])}else if(W.isInstancedMesh)Ce.renderInstances(fe,Ge,W.count);else if(K.isInstancedBufferGeometry){const Gt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Be=Math.min(K.instanceCount,Gt);Ce.renderInstances(fe,Ge,Be)}else Ce.render(fe,Ge)};function Re(R,V,K){R.transparent===!0&&R.side===Ke&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,Xr(R,V,K),R.side=Di,R.needsUpdate=!0,Xr(R,V,K),R.side=Ke):Xr(R,V,K)}this.compile=function(R,V,K=null){K===null&&(K=R),m=Ct.get(K),m.init(V),M.push(m),K.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),R!==K&&R.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(m.pushLight(W),W.castShadow&&m.pushShadow(W))}),m.setupLights();const Q=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xt=W.material;if(xt)if(Array.isArray(xt))for(let Et=0;Et<xt.length;Et++){const Lt=xt[Et];Re(Lt,K,W),Q.add(Lt)}else Re(xt,K,W),Q.add(xt)}),m=M.pop(),Q},this.compileAsync=function(R,V,K=null){const Q=this.compile(R,V,K);return new Promise(W=>{function xt(){if(Q.forEach(function(Et){it.get(Et).currentProgram.isReady()&&Q.delete(Et)}),Q.size===0){W(R);return}setTimeout(xt,10)}$.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let ye=null;function pi(R){ye&&ye(R)}function li(){Zi.stop()}function Rc(){Zi.start()}const Zi=new uf;Zi.setAnimationLoop(pi),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(R){ye=R,dt.setAnimationLoop(R),R===null?Zi.stop():Zi.start()},dt.addEventListener("sessionstart",li),dt.addEventListener("sessionend",Rc),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(V),V=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,b),m=Ct.get(R,M.length),m.init(V),M.push(m),nt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Vt.setFromProjectionMatrix(nt,fi,V.reversedDepth),j=this.localClippingEnabled,Dt=gt.init(this.clippingPlanes,j),p=et.get(R,y.length),p.init(),y.push(p),dt.enabled===!0&&dt.isPresenting===!0){const xt=v.xr.getDepthSensingMesh();xt!==null&&Zo(xt,V,-1/0,v.sortObjects)}Zo(R,V,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(st,ut),rt=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,rt&&It.addToRenderList(p,R),this.info.render.frame++,Dt===!0&&gt.beginShadows();const K=m.state.shadowsArray;At.render(K,R,V),Dt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=p.opaque,W=p.transmissive;if(m.setupLights(),V.isArrayCamera){const xt=V.cameras;if(W.length>0)for(let Et=0,Lt=xt.length;Et<Lt;Et++){const Rt=xt[Et];Dc(Q,W,R,Rt)}rt&&It.render(R);for(let Et=0,Lt=xt.length;Et<Lt;Et++){const Rt=xt[Et];Pc(p,R,Rt,Rt.viewport)}}else W.length>0&&Dc(Q,W,R,V),rt&&It.render(R),Pc(p,R,V);b!==null&&C===0&&(ft.updateMultisampleRenderTarget(b),ft.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(v,R,V),bt.resetDefaultState(),_=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],Dt===!0&&gt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?p=y[y.length-1]:p=null};function Zo(R,V,K,Q){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){Q&&N.setFromMatrixPosition(R.matrixWorld).applyMatrix4(nt);const Et=G.update(R),Lt=R.material;Lt.visible&&p.push(R,Et,Lt,K,N.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Et=G.update(R),Lt=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),N.copy(R.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),N.copy(Et.boundingSphere.center)),N.applyMatrix4(R.matrixWorld).applyMatrix4(nt)),Array.isArray(Lt)){const Rt=Et.groups;for(let qt=0,Kt=Rt.length;qt<Kt;qt++){const Ht=Rt[qt],fe=Lt[Ht.materialIndex];fe&&fe.visible&&p.push(R,Et,fe,K,N.z,Ht)}}else Lt.visible&&p.push(R,Et,Lt,K,N.z,null)}}const xt=R.children;for(let Et=0,Lt=xt.length;Et<Lt;Et++)Zo(xt[Et],V,K,Q)}function Pc(R,V,K,Q){const W=R.opaque,xt=R.transmissive,Et=R.transparent;m.setupLightsView(K),Dt===!0&&gt.setGlobalState(v.clippingPlanes,K),Q&&k.viewport(E.copy(Q)),W.length>0&&Wr(W,V,K),xt.length>0&&Wr(xt,V,K),Et.length>0&&Wr(Et,V,K),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Dc(R,V,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Cn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?Yn:oi,minFilter:hs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace}));const xt=m.state.transmissionRenderTarget[Q.id],Et=Q.viewport||E;xt.setSize(Et.z*v.transmissionResolutionScale,Et.w*v.transmissionResolutionScale);const Lt=v.getRenderTarget(),Rt=v.getActiveCubeFace(),qt=v.getActiveMipmapLevel();v.setRenderTarget(xt),v.getClearColor(B),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),rt&&It.render(K);const Kt=v.toneMapping;v.toneMapping=Wi;const Ht=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),Dt===!0&&gt.setGlobalState(v.clippingPlanes,Q),Wr(R,K,Q),ft.updateMultisampleRenderTarget(xt),ft.updateRenderTargetMipmap(xt),$.has("WEBGL_multisampled_render_to_texture")===!1){let fe=!1;for(let we=0,Ge=V.length;we<Ge;we++){const De=V[we],Ce=De.object,Gt=De.geometry,Be=De.material,ve=De.group;if(Be.side===Ke&&Ce.layers.test(Q.layers)){const Rn=Be.side;Be.side=en,Be.needsUpdate=!0,Ic(Ce,K,Q,Gt,Be,ve),Be.side=Rn,Be.needsUpdate=!0,fe=!0}}fe===!0&&(ft.updateMultisampleRenderTarget(xt),ft.updateRenderTargetMipmap(xt))}v.setRenderTarget(Lt,Rt,qt),v.setClearColor(B,F),Ht!==void 0&&(Q.viewport=Ht),v.toneMapping=Kt}function Wr(R,V,K){const Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,xt=R.length;W<xt;W++){const Et=R[W],Lt=Et.object,Rt=Et.geometry,qt=Et.group;let Kt=Et.material;Kt.allowOverride===!0&&Q!==null&&(Kt=Q),Lt.layers.test(K.layers)&&Ic(Lt,V,K,Rt,Kt,qt)}}function Ic(R,V,K,Q,W,xt){R.onBeforeRender(v,V,K,Q,W,xt),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(v,V,K,Q,R,xt),W.transparent===!0&&W.side===Ke&&W.forceSinglePass===!1?(W.side=en,W.needsUpdate=!0,v.renderBufferDirect(K,V,Q,W,R,xt),W.side=Di,W.needsUpdate=!0,v.renderBufferDirect(K,V,Q,W,R,xt),W.side=Ke):v.renderBufferDirect(K,V,Q,W,R,xt),R.onAfterRender(v,V,K,Q,W,xt)}function Xr(R,V,K){V.isScene!==!0&&(V=O);const Q=it.get(R),W=m.state.lights,xt=m.state.shadowsArray,Et=W.state.version,Lt=J.getParameters(R,W.state,xt,V,K),Rt=J.getProgramCacheKey(Lt);let qt=Q.programs;Q.environment=R.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(R.isMeshStandardMaterial?Ut:kt).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",ot),qt=new Map,Q.programs=qt);let Kt=qt.get(Rt);if(Kt!==void 0){if(Q.currentProgram===Kt&&Q.lightsStateVersion===Et)return Uc(R,Lt),Kt}else Lt.uniforms=J.getUniforms(R),R.onBeforeCompile(Lt,v),Kt=J.acquireProgram(Lt,Rt),qt.set(Rt,Kt),Q.uniforms=Lt.uniforms;const Ht=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=gt.uniform),Uc(R,Lt),Q.needsLights=Lf(R),Q.lightsStateVersion=Et,Q.needsLights&&(Ht.ambientLightColor.value=W.state.ambient,Ht.lightProbe.value=W.state.probe,Ht.directionalLights.value=W.state.directional,Ht.directionalLightShadows.value=W.state.directionalShadow,Ht.spotLights.value=W.state.spot,Ht.spotLightShadows.value=W.state.spotShadow,Ht.rectAreaLights.value=W.state.rectArea,Ht.ltc_1.value=W.state.rectAreaLTC1,Ht.ltc_2.value=W.state.rectAreaLTC2,Ht.pointLights.value=W.state.point,Ht.pointLightShadows.value=W.state.pointShadow,Ht.hemisphereLights.value=W.state.hemi,Ht.directionalShadowMap.value=W.state.directionalShadowMap,Ht.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ht.spotShadowMap.value=W.state.spotShadowMap,Ht.spotLightMatrix.value=W.state.spotLightMatrix,Ht.spotLightMap.value=W.state.spotLightMap,Ht.pointShadowMap.value=W.state.pointShadowMap,Ht.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Kt,Q.uniformsList=null,Kt}function Lc(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=No.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Uc(R,V){const K=it.get(R);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Df(R,V,K,Q,W){V.isScene!==!0&&(V=O),ft.resetTextureUnits();const xt=V.fog,Et=Q.isMeshStandardMaterial?V.environment:null,Lt=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ar,Rt=(Q.isMeshStandardMaterial?Ut:kt).get(Q.envMap||Et),qt=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Kt=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ht=!!K.morphAttributes.position,fe=!!K.morphAttributes.normal,we=!!K.morphAttributes.color;let Ge=Wi;Q.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ge=v.toneMapping);const De=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ce=De!==void 0?De.length:0,Gt=it.get(Q),Be=m.state.lights;if(Dt===!0&&(j===!0||R!==S)){const mn=R===S&&Q.id===_;gt.setState(Q,R,mn)}let ve=!1;Q.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Be.state.version||Gt.outputColorSpace!==Lt||W.isBatchedMesh&&Gt.batching===!1||!W.isBatchedMesh&&Gt.batching===!0||W.isBatchedMesh&&Gt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Gt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Gt.instancing===!1||!W.isInstancedMesh&&Gt.instancing===!0||W.isSkinnedMesh&&Gt.skinning===!1||!W.isSkinnedMesh&&Gt.skinning===!0||W.isInstancedMesh&&Gt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Gt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Gt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Gt.instancingMorph===!1&&W.morphTexture!==null||Gt.envMap!==Rt||Q.fog===!0&&Gt.fog!==xt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==gt.numPlanes||Gt.numIntersection!==gt.numIntersection)||Gt.vertexAlphas!==qt||Gt.vertexTangents!==Kt||Gt.morphTargets!==Ht||Gt.morphNormals!==fe||Gt.morphColors!==we||Gt.toneMapping!==Ge||Gt.morphTargetsCount!==Ce)&&(ve=!0):(ve=!0,Gt.__version=Q.version);let Rn=Gt.currentProgram;ve===!0&&(Rn=Xr(Q,V,W));let ys=!1,Pn=!1,gr=!1;const ke=Rn.getUniforms(),Bn=Gt.uniforms;if(k.useProgram(Rn.program)&&(ys=!0,Pn=!0,gr=!0),Q.id!==_&&(_=Q.id,Pn=!0),ys||S!==R){k.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ke.setValue(P,"projectionMatrix",R.projectionMatrix),ke.setValue(P,"viewMatrix",R.matrixWorldInverse);const yn=ke.map.cameraPosition;yn!==void 0&&yn.setValue(P,_t.setFromMatrixPosition(R.matrixWorld)),Z.logarithmicDepthBuffer&&ke.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ke.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Pn=!0,gr=!0)}if(W.isSkinnedMesh){ke.setOptional(P,W,"bindMatrix"),ke.setOptional(P,W,"bindMatrixInverse");const mn=W.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),ke.setValue(P,"boneTexture",mn.boneTexture,ft))}W.isBatchedMesh&&(ke.setOptional(P,W,"batchingTexture"),ke.setValue(P,"batchingTexture",W._matricesTexture,ft),ke.setOptional(P,W,"batchingIdTexture"),ke.setValue(P,"batchingIdTexture",W._indirectTexture,ft),ke.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&ke.setValue(P,"batchingColorTexture",W._colorsTexture,ft));const kn=K.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&pt.update(W,K,Rn),(Pn||Gt.receiveShadow!==W.receiveShadow)&&(Gt.receiveShadow=W.receiveShadow,ke.setValue(P,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Bn.envMap.value=Rt,Bn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(Bn.envMapIntensity.value=V.environmentIntensity),Pn&&(ke.setValue(P,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&If(Bn,gr),xt&&Q.fog===!0&&at.refreshFogUniforms(Bn,xt),at.refreshMaterialUniforms(Bn,Q,H,X,m.state.transmissionRenderTarget[R.id]),No.upload(P,Lc(Gt),Bn,ft)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(No.upload(P,Lc(Gt),Bn,ft),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ke.setValue(P,"center",W.center),ke.setValue(P,"modelViewMatrix",W.modelViewMatrix),ke.setValue(P,"normalMatrix",W.normalMatrix),ke.setValue(P,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const mn=Q.uniformsGroups;for(let yn=0,Ko=mn.length;yn<Ko;yn++){const Ki=mn[yn];Zt.update(Ki,Rn),Zt.bind(Ki,Rn)}}return Rn}function If(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function Lf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,K){const Q=it.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),it.get(R.texture).__webglTexture=V,it.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,V){const K=it.get(R);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const Uf=P.createFramebuffer();this.setRenderTarget=function(R,V=0,K=0){b=R,T=V,C=K;let Q=!0,W=null,xt=!1,Et=!1;if(R){const Rt=it.get(R);if(Rt.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(P.FRAMEBUFFER,null),Q=!1;else if(Rt.__webglFramebuffer===void 0)ft.setupRenderTarget(R);else if(Rt.__hasExternalTextures)ft.rebindTextures(R,it.get(R.texture).__webglTexture,it.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ht=R.depthTexture;if(Rt.__boundDepthTexture!==Ht){if(Ht!==null&&it.has(Ht)&&(R.width!==Ht.image.width||R.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ft.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Et=!0);const Kt=it.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[V])?W=Kt[V][K]:W=Kt[V],xt=!0):R.samples>0&&ft.useMultisampledRTT(R)===!1?W=it.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?W=Kt[K]:W=Kt,E.copy(R.viewport),L.copy(R.scissor),U=R.scissorTest}else E.copy(ct).multiplyScalar(H).floor(),L.copy(St).multiplyScalar(H).floor(),U=vt;if(K!==0&&(W=Uf),k.bindFramebuffer(P.FRAMEBUFFER,W)&&Q&&k.drawBuffers(R,W),k.viewport(E),k.scissor(L),k.setScissorTest(U),xt){const Rt=it.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,Rt.__webglTexture,K)}else if(Et){const Rt=V;for(let qt=0;qt<R.textures.length;qt++){const Kt=it.get(R.textures[qt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qt,Kt.__webglTexture,K,Rt)}}else if(R!==null&&K!==0){const Rt=it.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Rt.__webglTexture,K)}_=-1},this.readRenderTargetPixels=function(R,V,K,Q,W,xt,Et,Lt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){k.bindFramebuffer(P.FRAMEBUFFER,Rt);try{const qt=R.textures[Lt],Kt=qt.format,Ht=qt.type;if(!Z.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-Q&&K>=0&&K<=R.height-W&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Lt),P.readPixels(V,K,Q,W,Ft.convert(Kt),Ft.convert(Ht),xt))}finally{const qt=b!==null?it.get(b).__webglFramebuffer:null;k.bindFramebuffer(P.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(R,V,K,Q,W,xt,Et,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt)if(V>=0&&V<=R.width-Q&&K>=0&&K<=R.height-W){k.bindFramebuffer(P.FRAMEBUFFER,Rt);const qt=R.textures[Lt],Kt=qt.format,Ht=qt.type;if(!Z.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,fe),P.bufferData(P.PIXEL_PACK_BUFFER,xt.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Lt),P.readPixels(V,K,Q,W,Ft.convert(Kt),Ft.convert(Ht),0);const we=b!==null?it.get(b).__webglFramebuffer:null;k.bindFramebuffer(P.FRAMEBUFFER,we);const Ge=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Rd(P,Ge,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,xt),P.deleteBuffer(fe),P.deleteSync(Ge),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,V=null,K=0){const Q=Math.pow(2,-K),W=Math.floor(R.image.width*Q),xt=Math.floor(R.image.height*Q),Et=V!==null?V.x:0,Lt=V!==null?V.y:0;ft.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Et,Lt,W,xt),k.unbindTexture()};const Nf=P.createFramebuffer(),Ff=P.createFramebuffer();this.copyTextureToTexture=function(R,V,K=null,Q=null,W=0,xt=null){xt===null&&(W!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xt=W,W=0):xt=0);let Et,Lt,Rt,qt,Kt,Ht,fe,we,Ge;const De=R.isCompressedTexture?R.mipmaps[xt]:R.image;if(K!==null)Et=K.max.x-K.min.x,Lt=K.max.y-K.min.y,Rt=K.isBox3?K.max.z-K.min.z:1,qt=K.min.x,Kt=K.min.y,Ht=K.isBox3?K.min.z:0;else{const kn=Math.pow(2,-W);Et=Math.floor(De.width*kn),Lt=Math.floor(De.height*kn),R.isDataArrayTexture?Rt=De.depth:R.isData3DTexture?Rt=Math.floor(De.depth*kn):Rt=1,qt=0,Kt=0,Ht=0}Q!==null?(fe=Q.x,we=Q.y,Ge=Q.z):(fe=0,we=0,Ge=0);const Ce=Ft.convert(V.format),Gt=Ft.convert(V.type);let Be;V.isData3DTexture?(ft.setTexture3D(V,0),Be=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ft.setTexture2DArray(V,0),Be=P.TEXTURE_2D_ARRAY):(ft.setTexture2D(V,0),Be=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);const ve=P.getParameter(P.UNPACK_ROW_LENGTH),Rn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ys=P.getParameter(P.UNPACK_SKIP_PIXELS),Pn=P.getParameter(P.UNPACK_SKIP_ROWS),gr=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,De.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,De.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,qt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ht);const ke=R.isDataArrayTexture||R.isData3DTexture,Bn=V.isDataArrayTexture||V.isData3DTexture;if(R.isDepthTexture){const kn=it.get(R),mn=it.get(V),yn=it.get(kn.__renderTarget),Ko=it.get(mn.__renderTarget);k.bindFramebuffer(P.READ_FRAMEBUFFER,yn.__webglFramebuffer),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ko.__webglFramebuffer);for(let Ki=0;Ki<Rt;Ki++)ke&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,it.get(R).__webglTexture,W,Ht+Ki),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,it.get(V).__webglTexture,xt,Ge+Ki)),P.blitFramebuffer(qt,Kt,Et,Lt,fe,we,Et,Lt,P.DEPTH_BUFFER_BIT,P.NEAREST);k.bindFramebuffer(P.READ_FRAMEBUFFER,null),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||R.isRenderTargetTexture||it.has(R)){const kn=it.get(R),mn=it.get(V);k.bindFramebuffer(P.READ_FRAMEBUFFER,Nf),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ff);for(let yn=0;yn<Rt;yn++)ke?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,kn.__webglTexture,W,Ht+yn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,kn.__webglTexture,W),Bn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,mn.__webglTexture,xt,Ge+yn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mn.__webglTexture,xt),W!==0?P.blitFramebuffer(qt,Kt,Et,Lt,fe,we,Et,Lt,P.COLOR_BUFFER_BIT,P.NEAREST):Bn?P.copyTexSubImage3D(Be,xt,fe,we,Ge+yn,qt,Kt,Et,Lt):P.copyTexSubImage2D(Be,xt,fe,we,qt,Kt,Et,Lt);k.bindFramebuffer(P.READ_FRAMEBUFFER,null),k.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Bn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Be,xt,fe,we,Ge,Et,Lt,Rt,Ce,Gt,De.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(Be,xt,fe,we,Ge,Et,Lt,Rt,Ce,De.data):P.texSubImage3D(Be,xt,fe,we,Ge,Et,Lt,Rt,Ce,Gt,De):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,xt,fe,we,Et,Lt,Ce,Gt,De.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,xt,fe,we,De.width,De.height,Ce,De.data):P.texSubImage2D(P.TEXTURE_2D,xt,fe,we,Et,Lt,Ce,Gt,De);P.pixelStorei(P.UNPACK_ROW_LENGTH,ve),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ys),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,gr),xt===0&&V.generateMipmaps&&P.generateMipmap(Be),k.unbindTexture()},this.initRenderTarget=function(R){it.get(R).__webglFramebuffer===void 0&&ft.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ft.setTextureCube(R,0):R.isData3DTexture?ft.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ft.setTexture2DArray(R,0):ft.setTexture2D(R,0),k.unbindTexture()},this.resetState=function(){T=0,C=0,b=null,k.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}}const ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class _s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fv=new bc(-1,1,1,-1,0,1);class Ov extends Ve{constructor(){super(),this.setAttribute("position",new ee([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ee([0,2,0,0,2,0],2))}}const zv=new Ov;class qo{constructor(t){this._mesh=new Ae(zv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Bv extends _s{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ii.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new qo(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qh extends _s{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class kv extends _s{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Hv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new Cn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Yn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bv(ps),this.copyPass.material.blending=un,this.clock=new Jp}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qh!==void 0&&(o instanceof qh?n=!0:o instanceof kv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Vv extends _s{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Wt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const _o={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new $t},cameraProjectionMatrixInverse:{value:new $t},cameraWorldMatrix:{value:new $t},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Mo={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},La={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function Gv(s=5){const t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=Wv(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=e[o],l=2*Math.PI*a/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const r=new Go(i,t,t);return r.wrapS=Yi,r.wrapT=Yi,r.needsUpdate=!0,r}function Wv(s){const t=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),e=t*t,n=Array(e).fill(0);let i=Math.floor(t/2),r=t-1;for(let o=1;o<=e;){if(i===-1&&r===t?(r=t-2,i=0):(r===t&&(r=0),i<0&&(i=t-1)),n[i*t+r]!==0){r-=2,i++;continue}else n[i*t+r]=o++;r++,i--}return n}const yo={defines:{SAMPLES:16,SAMPLE_VECTORS:gf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new lt},cameraProjectionMatrixInverse:{value:new $t},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function gf(s,t,e){const n=Xv(s,t,e);let i="vec3[SAMPLES](";for(let r=0;r<s;r++){const o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function Xv(s,t,e){const n=[];for(let i=0;i<s;i++){const r=2*Math.PI*t*i/s,o=Math.pow(i/(s-1),e);n.push(new I(Math.cos(r),Math.sin(r),o))}return n}class Yv{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(t,e){let n,i,r;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,f=l-u,d=c-u,g=t-f,x=e-d;let p,m;g>x?(p=1,m=0):(p=0,m=1);const y=g-p+h,M=x-m+h,v=g-1+2*h,w=x-1+2*h,T=l&255,C=c&255,b=this.perm[T+this.perm[C]]%12,_=this.perm[T+p+this.perm[C+m]]%12,S=this.perm[T+1+this.perm[C+1]]%12;let E=.5-g*g-x*x;E<0?n=0:(E*=E,n=E*E*this._dot(this.grad3[b],g,x));let L=.5-y*y-M*M;L<0?i=0:(L*=L,i=L*L*this._dot(this.grad3[_],y,M));let U=.5-v*v-w*w;return U<0?r=0:(U*=U,r=U*U*this._dot(this.grad3[S],v,w)),70*(n+i+r)}noise3d(t,e,n){let i,r,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),f=Math.floor(n+c),d=1/6,g=(h+u+f)*d,x=h-g,p=u-g,m=f-g,y=t-x,M=e-p,v=n-m;let w,T,C,b,_,S;y>=M?M>=v?(w=1,T=0,C=0,b=1,_=1,S=0):y>=v?(w=1,T=0,C=0,b=1,_=0,S=1):(w=0,T=0,C=1,b=1,_=0,S=1):M<v?(w=0,T=0,C=1,b=0,_=1,S=1):y<v?(w=0,T=1,C=0,b=0,_=1,S=1):(w=0,T=1,C=0,b=1,_=1,S=0);const E=y-w+d,L=M-T+d,U=v-C+d,B=y-b+2*d,F=M-_+2*d,q=v-S+2*d,X=y-1+3*d,H=M-1+3*d,st=v-1+3*d,ut=h&255,ct=u&255,St=f&255,vt=this.perm[ut+this.perm[ct+this.perm[St]]]%12,Vt=this.perm[ut+w+this.perm[ct+T+this.perm[St+C]]]%12,Dt=this.perm[ut+b+this.perm[ct+_+this.perm[St+S]]]%12,j=this.perm[ut+1+this.perm[ct+1+this.perm[St+1]]]%12;let nt=.6-y*y-M*M-v*v;nt<0?i=0:(nt*=nt,i=nt*nt*this._dot3(this.grad3[vt],y,M,v));let _t=.6-E*E-L*L-U*U;_t<0?r=0:(_t*=_t,r=_t*_t*this._dot3(this.grad3[Vt],E,L,U));let N=.6-B*B-F*F-q*q;N<0?o=0:(N*=N,o=N*N*this._dot3(this.grad3[Dt],B,F,q));let O=.6-X*X-H*H-st*st;return O<0?a=0:(O*=O,a=O*O*this._dot3(this.grad3[j],X,H,st)),32*(i+r+o+a)}noise4d(t,e,n,i){const r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,f,d,g;const x=(t+e+n+i)*l,p=Math.floor(t+x),m=Math.floor(e+x),y=Math.floor(n+x),M=Math.floor(i+x),v=(p+m+y+M)*c,w=p-v,T=m-v,C=y-v,b=M-v,_=t-w,S=e-T,E=n-C,L=i-b,U=_>S?32:0,B=_>E?16:0,F=S>E?8:0,q=_>L?4:0,X=S>L?2:0,H=E>L?1:0,st=U+B+F+q+X+H,ut=o[st][0]>=3?1:0,ct=o[st][1]>=3?1:0,St=o[st][2]>=3?1:0,vt=o[st][3]>=3?1:0,Vt=o[st][0]>=2?1:0,Dt=o[st][1]>=2?1:0,j=o[st][2]>=2?1:0,nt=o[st][3]>=2?1:0,_t=o[st][0]>=1?1:0,N=o[st][1]>=1?1:0,O=o[st][2]>=1?1:0,rt=o[st][3]>=1?1:0,ht=_-ut+c,P=S-ct+c,Y=E-St+c,$=L-vt+c,Z=_-Vt+2*c,k=S-Dt+2*c,tt=E-j+2*c,it=L-nt+2*c,ft=_-_t+3*c,kt=S-N+3*c,Ut=E-O+3*c,D=L-rt+3*c,A=_-1+4*c,G=S-1+4*c,J=E-1+4*c,at=L-1+4*c,et=p&255,Ct=m&255,gt=y&255,At=M&255,It=a[et+a[Ct+a[gt+a[At]]]]%32,pt=a[et+ut+a[Ct+ct+a[gt+St+a[At+vt]]]]%32,Tt=a[et+Vt+a[Ct+Dt+a[gt+j+a[At+nt]]]]%32,Xt=a[et+_t+a[Ct+N+a[gt+O+a[At+rt]]]]%32,Ft=a[et+1+a[Ct+1+a[gt+1+a[At+1]]]]%32;let bt=.6-_*_-S*S-E*E-L*L;bt<0?h=0:(bt*=bt,h=bt*bt*this._dot4(r[It],_,S,E,L));let Zt=.6-ht*ht-P*P-Y*Y-$*$;Zt<0?u=0:(Zt*=Zt,u=Zt*Zt*this._dot4(r[pt],ht,P,Y,$));let z=.6-Z*Z-k*k-tt*tt-it*it;z<0?f=0:(z*=z,f=z*z*this._dot4(r[Tt],Z,k,tt,it));let dt=.6-ft*ft-kt*kt-Ut*Ut-D*D;dt<0?d=0:(dt*=dt,d=dt*dt*this._dot4(r[Xt],ft,kt,Ut,D));let Mt=.6-A*A-G*G-J*J-at*at;return Mt<0?g=0:(Mt*=Mt,g=Mt*Mt*this._dot4(r[Ft],A,G,J,at)),27*(h+u+f+d+g)}_dot(t,e,n){return t[0]*e+t[1]*n}_dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}_dot4(t,e,n,i,r){return t[0]*e+t[1]*n+t[2]*i+t[3]*r}}class hi extends _s{constructor(t,e,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Gv(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Cn(this.width,this.height,{type:Yn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new Ie({defines:Object.assign({},_o.defines),uniforms:ii.clone(_o.uniforms),vertexShader:_o.vertexShader,fragmentShader:_o.fragmentShader,blending:un,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Vp,this.normalMaterial.blending=un,this.pdMaterial=new Ie({defines:Object.assign({},yo.defines),uniforms:ii.clone(yo.uniforms),vertexShader:yo.vertexShader,fragmentShader:yo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new Ie({defines:Object.assign({},Mo.defines),uniforms:ii.clone(Mo.uniforms),vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,blending:un}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Ie({uniforms:ii.clone(ps.uniforms),vertexShader:ps.vertexShader,fragmentShader:ps.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:il,blendDst:Rr,blendEquation:Xn,blendSrcAlpha:nl,blendDstAlpha:Rr,blendEquationAlpha:Xn}),this.blendMaterial=new Ie({uniforms:ii.clone(La.uniforms),vertexShader:La.vertexShader,fragmentShader:La.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:jl,blendSrc:il,blendDst:Rr,blendEquation:Xn,blendSrcAlpha:nl,blendDstAlpha:Rr,blendEquationAlpha:Xn}),this._fsQuad=new qo(null),this._originalClearColor=new Wt,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new dc,this.depthTexture.format=or,this.depthTexture.type=rr,this.normalRenderTarget=new Cn(this.width,this.height,{minFilter:_n,magFilter:_n,type:Yn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=gf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case hi.OUTPUT.Off:break;case hi.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=un,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=un,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=un,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=un,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case hi.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=un,this._renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(t,e,n,i,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this._fsQuad.material=e,this._fsQuad.render(t),t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_renderOverride(t,e,n,i,r){t.getClearColor(this._originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,r=e.clearAlpha||r,i!=null&&(t.setClearColor(i),t.setClearAlpha(r||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this._originalClearColor),t.setClearAlpha(o)}_overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,e.push(n))})}_restoreVisibility(){const t=this._visibilityCache;for(let e=0;e<t.length;e++)t[e].visible=!0;t.length=0}_generateNoise(t=64){const e=new Yv,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const r=new Go(i,t,t,zn,oi);return r.wrapS=Yi,r.wrapT=Yi,r.needsUpdate=!0,r}}hi.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const qv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Wt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ur extends _s{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Wt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Cn(r,o,{type:Yn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Cn(r,o,{type:Yn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Cn(r,o,{type:Yn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=qv;this.highPassUniforms=ii.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ii.clone(ps.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:ps.vertexShader,fragmentShader:ps.fragmentShader,blending:er,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Wt,this._oldClearAlpha=1,this._basic=new ai,this._fsQuad=new qo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new lt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ur.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ie({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ur.BlurDirectionX=new lt(1,0);ur.BlurDirectionY=new lt(0,1);const So={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $v extends _s{constructor(){super(),this.uniforms=ii.clone(So.uniforms),this.material=new Hp({name:So.name,uniforms:this.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader}),this._fsQuad=new qo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ge.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Au?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Cu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Pu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Du?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ru&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Zv extends hc{constructor(){super();const t=new re;t.deleteAttribute("uv");const e=new Ee({side:en}),n=new Ee,i=new hf(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new Ae(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new us(t,n,6),a=new Qe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Ae(t,Os(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Ae(t,Os(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new Ae(t,Os(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const u=new Ae(t,Os(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new Ae(t,Os(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const d=new Ae(t,Os(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function Os(s){return new Gp({color:0,emissive:16777215,emissiveIntensity:s})}const cn={x0:-95,x1:95,z0:-35,z1:35,wallH:26,ridgeH:33,doorHalf:14,doorH:23},ie={r:1.85,skirtTop:2,s1aTop:16,s1Top:28,interTop:31.5,s2Top:39.5,trunkTop:42.1,capsuleTop:45.7,hatchY:43.5},ae={axisY:3.2,halfW:4.9,stackBaseX:-40,paintBaseX:28,teBaseX:85.6},hn={axisY:5.3,hingeY:2.2,hingeAhead:4.4,hangarHingeX:90,padHingeX:256.9,length:54},Bt={x:260,z:0,tableTop:6.4,baseY:6.6,apron:62},le={x:260,z:-16.5,half:3.5,height:62,deckY:6.6+42.9,cageHalf:1.5,armHalf:1.15,armZ0:-13,armZ1:-2.15},pe={x:60,z:150,y:.3,r:30},xf=Bt.x-pe.x,vf=Bt.z-pe.z,Ua=Math.hypot(xf,vf),Gn={hx:xf/Ua,hz:vf/Ua,lzDownrange:-Ua,legDrop:3.55};Gn.lzAlt=pe.y+Gn.legDrop-Bt.baseY;const _f=(()=>{const s=[.42,.72,.55],t=Math.hypot(...s);return s.map(e=>e/t)})(),Tc=[{id:"tank",x0:-88,x1:-40,z0:-34.4,z1:-12.5},{id:"engine",x0:-73,x1:-36,z0:12.5,z1:30},{id:"capsule",x0:-92,x1:-76,z0:12.5,z1:30}],An=[{n:1,id:"tank",name:"Tank Fabrication",duration:90,console:{x:-64,z:-12.2,dir:-1},stand:{x:-64,z:-11.05},labelX:-61,labelZ:-8.1,blurb:"Steel rings roll in and robotic welders join them into tank sections."},{n:2,id:"engine",name:"Engine Shop",duration:90,console:{x:-55,z:12.2,dir:1},stand:{x:-55,z:11.05},labelX:-73,labelZ:8.1,blurb:"Nine first-stage engines and one vacuum engine are built and mounted on their thrust structures."},{n:3,id:"stack",name:"Stage Stacking",duration:120,console:{x:-50,z:5.75,dir:-1},stand:{x:-50,z:6.9},labelX:-47,labelZ:8.1,blurb:"Overhead cranes stack the first stage, interstage and second stage; grid fins and landing legs go on."},{n:4,id:"capsule",name:"Crew Capsule",duration:80,console:{x:-84,z:12.2,dir:1},stand:{x:-84,z:11.05},labelX:-89,labelZ:8.1,blurb:"The capsule gets its heat shield, seats and hatch, then is craned onto the second stage."},{n:5,id:"paint",name:"Paint & Inspection",duration:100,console:{x:4,z:5.75,dir:-1},stand:{x:4,z:6.9},labelX:7,labelZ:8.1,blurb:"The Helix Orbital livery goes on and inspection drones scan the full vehicle."},{n:6,id:"rollout",name:"Rollout",duration:150,console:{x:62,z:5.75,dir:-1},stand:{x:62,z:6.9},labelX:65,labelZ:8.1,blurb:"The rocket is laid on the transporter-erector, rolls to the pad and is raised vertical."}],Mf=[-31,33],Na={x:-78,z:-8,yaw:Math.PI/2},Fa={legs:[[[-66,-8.2],[-64,-9.2],[-64,-11.05]],[[-64,-8.2],[-31,-8.2],[-31,8.2],[-55,8.2],[-55,11.05]],[[-55,8.4],[-50,8.2],[-50,6.9]],[[-50,8.2],[-84,8.2],[-84,11.05]],[[-84,8.2],[4,8.2],[4,6.9]],[[4,8.2],[62,8.2],[62,6.9]]],toTower:[[62,8.2],[86,8.2],[92.5,7],[92.5,-9],[100,-10],[150,-16.5],[250,-16.5],[256.2,-16.5],[259.9,-16.5]],onDeck:[[260,-14.2],[260,-3.6]]},$h={bounds:{x0:cn.x0,x1:cn.x1,z0:cn.z0,z1:cn.z1},cells:Tc,stations:An,crossings:Mf};class Kv extends hi{constructor(t,e,n,i,r){super(t,e,n,i),this.engine=r,this.aoScale=.5}setSize(t,e){super.setSize(Math.max(2,Math.round(t*this.aoScale)),Math.max(2,Math.round(e*this.aoScale)))}_overrideVisibility(){const t=this._visibilityCache,e=this.engine.noAO;for(let n=0;n<e.length;n++){const i=e[n];i.visible&&(i.visible=!1,t.push(i))}}}class jv extends ur{setSize(t,e){super.setSize(Math.max(2,Math.round(t*.5)),Math.max(2,Math.round(e*.5)))}}const Or=[{name:"Low",mp:1,ao:!1,shadow:1024},{name:"Medium",mp:1.6,ao:!0,shadow:2048},{name:"High",mp:2.3,ao:!0,shadow:2048},{name:"Ultra",mp:3.1,ao:!0,shadow:4096}];class Jv{constructor(t){this.canvas=t;const e=new Nv({canvas:t,antialias:!1,powerPreference:"high-performance",stencil:!1});this.renderer=e,e.shadowMap.enabled=!0,e.shadowMap.type=Tu,e.shadowMap.autoUpdate=!1,e.toneMapping=Ql,e.toneMappingExposure=.9,e.outputColorSpace=wn,e.info.autoReset=!1,this.scene=new hc,this.camera=new En(58,1,.25,4e7),this.scene.add(this.camera),this.origin=new I,this.anchors=[],this.noAO=[],this.fog=new cc(12571622,16e-5),this.scene.fog=this.fog,this.sunDir=new I(..._f),this.sun=new Zp(16773596,3.3),this.sun.castShadow=!0,this.sun.shadow.bias=-35e-5,this.sun.shadow.normalBias=.06,this.scene.add(this.sun,this.sun.target),this.hemi=new Xp(13624063,7038296,.9),this.scene.add(this.hemi),this.fxLight=new hf(16777215,0,60,2),this.scene.add(this.fxLight),this.fxTrue=new I,this.fxIntensity=0;const n=new Xl(e);this.envIndoor=n.fromScene(new Zv,.03).texture,this.envOutdoor=null,this.pmrem=n,this.scene.environment=this.envIndoor,this.scene.environmentIntensity=.55,this.tier=3,this.pixelRatio=1;const i=new Cn(4,4,{type:Yn,samples:4});this.composer=new Hv(e,i),this.renderPass=new Vv(this.scene,this.camera),this.composer.addPass(this.renderPass),this.aoPass=new Kv(this.scene,this.camera,4,4,this),this.aoPass.blendIntensity=1,this.aoPass.updateGtaoMaterial({radius:3,distanceExponent:1.6,thickness:3,scale:2.1,samples:12,distanceFallOff:1,screenSpaceRadius:!1}),this.aoPass.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:8}),this.composer.addPass(this.aoPass),this.bloomPass=new jv(new lt(4,4),.5,.6,1.5),this.composer.addPass(this.bloomPass),this.outputPass=new $v,this.composer.addPass(this.outputPass),this.frame=0,this.applyTier(this.tier),window.addEventListener("resize",()=>this.resize())}addAnchor(t,e=new I){return t.userData.truePos=e,this.anchors.push(t),this.scene.add(t),t}setFxLight(t,e,n,i){e<=this.fxIntensity||(this.fxTrue.copy(t),this.fxIntensity=e,this.fxLight.color.setHex(n),this.fxLight.distance=i)}markNoAO(t){return this.noAO.includes(t)||this.noAO.push(t),t}tagAO(){const t=new I;this.scene.traverse(e=>{if(!e.isMesh||e.isInstancedMesh||e.isSkinnedMesh)return;const n=e.material;if(n.transparent||n.depthWrite===!1||n.isShaderMaterial||n.isMeshBasicMaterial){this.markNoAO(e);return}const i=e.geometry;i.boundingSphere||i.computeBoundingSphere(),e.getWorldScale(t),i.boundingSphere.radius*Math.max(t.x,t.y,t.z)<.62&&this.markNoAO(e)})}applyTier(t){this.tier=Math.max(0,Math.min(Or.length-1,t));const e=Or[this.tier];this.aoPass.enabled=e.ao;const n=e.shadow;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.resize()}resize(){const t=window.innerWidth,e=window.innerHeight,n=Or[this.tier];this.pixelRatio=Math.min(window.devicePixelRatio||1,1.5,Math.sqrt(n.mp*1e6/(t*e)));const i=this.pixelRatio>=1.2?2:4;for(const r of[this.composer.renderTarget1,this.composer.renderTarget2])r.samples!==i&&(r.samples=i,r.dispose());this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(t,e,!1),this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(t,e),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}updateSun(t,e,n=!0){const i=this.sun.shadow,r=i.camera;r.right!==e&&(r.left=-e,r.right=e,r.top=e,r.bottom=-e,r.near=10,r.far=900,r.updateProjectionMatrix());const o=e*2/i.mapSize.x,a=this._f||(this._f=new I);a.copy(t).sub(this.origin),a.x=Math.round(a.x/o)*o,a.y=Math.round(a.y/o)*o,a.z=Math.round(a.z/o)*o,this.sun.target.position.copy(a),this.sun.position.copy(a).addScaledVector(this.sunDir,420),this.sun.target.updateMatrixWorld(),i.autoUpdate=!1,n&&(i.needsUpdate=!0)}warmUp(){const t=[],e=[];this.scene.traverse(n=>{n.visible||(t.push(n),n.visible=!0),n.frustumCulled&&(e.push(n),n.frustumCulled=!1)}),this.renderer.compile(this.scene,this.camera),this.sun.shadow.needsUpdate=!0,this.renderer.shadowMap.needsUpdate=!0,this.composer.render();for(const n of t)n.visible=!1;for(const n of e)n.frustumCulled=!0}render(){this.frame++;for(let t=0;t<this.anchors.length;t++){const e=this.anchors[t];e.position.copy(e.userData.truePos).sub(this.origin)}this.fxLight.intensity=this.fxIntensity,this.fxLight.position.copy(this.fxTrue).sub(this.origin),this.fxIntensity=0,this.renderer.info.reset(),this.renderer.shadowMap.needsUpdate=!0,this.composer.render()}}class Qv{constructor(t){this.canvas=t,this.keys=new Set,this.pressed=new Set,this.dx=0,this.dy=0,this.wheel=0,this.locked=!1,this.dragging=!1,this.enabled=!0,this.wantLock=!1,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="Space"||e.code.startsWith("Arrow"))&&e.preventDefault(),e.repeat||this.pressed.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>this.keys.clear()),t.addEventListener("mousedown",e=>{if(e.button===0&&(this.dragging=!0,this.wantLock&&!this.locked&&t.requestPointerLock))try{const n=t.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}),window.addEventListener("mouseup",()=>this.dragging=!1),window.addEventListener("mousemove",e=>{(this.locked||this.dragging)&&(this.dx+=e.movementX||0,this.dy+=e.movementY||0)}),t.addEventListener("wheel",e=>{this.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t})}down(t){return this.keys.has(t)}hit(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}endFrame(){this.pressed.clear()}takeMouse(){const t=[this.dx,this.dy,this.wheel];return this.dx=this.dy=this.wheel=0,t}releaseLock(){this.locked&&document.exitPointerLock&&document.exitPointerLock()}axis(){let t=0,e=0;return(this.down("KeyW")||this.down("ArrowUp"))&&(e+=1),(this.down("KeyS")||this.down("ArrowDown"))&&(e-=1),(this.down("KeyD")||this.down("ArrowRight"))&&(t+=1),(this.down("KeyA")||this.down("ArrowLeft"))&&(t-=1),[t,e]}}class Ms{constructor(t=2026){this.s=t>>>0}next(){this.s=this.s+1831565813>>>0;let t=this.s;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+(e-t)*this.next()}int(t,e){return Math.floor(this.range(t,e+1))}pick(t){return t[Math.floor(this.next()*t.length)]}sign(){return this.next()<.5?-1:1}}const ql=2026,Oa=new Map;function Xe(s,t){return Oa.has(s)||Oa.set(s,t()),Oa.get(s)}function Oe(s,t){const e=document.createElement("canvas");return e.width=s,e.height=t,e}function ze(s,{srgb:t=!0,repeat:e=null,aniso:n=8,mip:i=!0}={}){const r=new op(s);return r.colorSpace=t?wn:wi,r.anisotropy=n,e&&(r.wrapS=r.wrapT=Yi,r.repeat.set(e[0],e[1])),i||(r.generateMipmaps=!1,r.minFilter=si),r}function Js(s,t,e){let n=Math.imul(s,374761393)^Math.imul(t,668265263)^Math.imul(e,1274126177);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function $l(s,t,e,n){const i=Math.floor(s),r=Math.floor(t),o=s-i,a=t-r,l=o*o*(3-2*o),c=a*a*(3-2*a),h=e,u=Js((i%h+h)%h,(r%h+h)%h,n),f=Js(((i+1)%h+h)%h,(r%h+h)%h,n),d=Js((i%h+h)%h,((r+1)%h+h)%h,n),g=Js(((i+1)%h+h)%h,((r+1)%h+h)%h,n);return u+(f-u)*l+(d-u)*c+(u-f-d+g)*l*c}function Ii(s,t,e,n,i=4){let r=0,o=.5,a=1,l=0;for(let c=0;c<i;c++)r+=o*$l(s*a,t*a,e*a,n+c*17),l+=o,o*=.5,a*=2;return r/l}function t1(s,t=2){const e=s.width,n=s.height,i=s.getContext("2d").getImageData(0,0,e,n).data,r=Oe(e,n),o=r.getContext("2d"),a=o.createImageData(e,n),l=a.data,c=(h,u)=>i[(u+n)%n*e+(h+e)%e<<2]/255;for(let h=0;h<n;h++)for(let u=0;u<e;u++){const f=(c(u+1,h)-c(u-1,h))*t,d=(c(u,h+1)-c(u,h-1))*t,g=1/Math.sqrt(f*f+d*d+1),x=h*e+u<<2;l[x]=(-f*g*.5+.5)*255,l[x+1]=(d*g*.5+.5)*255,l[x+2]=(g*.5+.5)*255,l[x+3]=255}return o.putImageData(a,0,0),r}const $e={navy:"#0b1b33",teal:"#27d3c3"};function fr(s,t,e,n,i="#ffffff",r=$e.teal){s.save(),s.translate(t,e),s.lineCap="round",s.save(),s.rotate(-.42),s.strokeStyle=r,s.lineWidth=n*.055,s.beginPath(),s.ellipse(0,0,n*.5,n*.19,0,.12*Math.PI,1.02*Math.PI),s.stroke(),s.beginPath(),s.ellipse(0,0,n*.5,n*.19,0,1.14*Math.PI,2.02*Math.PI),s.stroke(),s.restore();const o=40,a=n*.46,l=n*.15;for(let c=0;c<2;c++){s.strokeStyle=i,s.lineWidth=n*.07,s.beginPath();for(let h=0;h<=o;h++){const u=h/o,f=a-u*2*a,d=Math.sin(u*Math.PI*2.4+c*Math.PI)*l*(1-u*.35);h===0?s.moveTo(d,f):s.lineTo(d,f)}s.stroke()}s.lineWidth=n*.028,s.strokeStyle=i;for(let c=1;c<8;c++){const h=c/8,u=a-h*2*a,f=Math.sin(h*Math.PI*2.4)*l*(1-h*.35);Math.abs(f)<n*.035||(s.beginPath(),s.moveTo(-f*.72,u),s.lineTo(f*.72,u),s.stroke())}s.fillStyle=r,s.beginPath(),s.arc(0,-a-n*.07,n*.045,0,Math.PI*2),s.fill(),s.restore()}const On='"Helvetica Neue", "Arial Narrow", Arial, sans-serif';function Zh(s=!1){return Xe("logo"+s,()=>{const t=Oe(1024,256),e=t.getContext("2d"),n=s?$e.navy:"#ffffff";return fr(e,120,128,190,n,$e.teal),e.fillStyle=n,e.font=`700 96px ${On}`,e.textBaseline="middle",e.fillText("HELIX",240,100),e.font=`300 60px ${On}`,e.fillStyle=s?"#16304f":"#cfe9ee",e.fillText("O R B I T A L",244,186),ze(t)})}function yf(s,t,e,n){return Xe("sign:"+s,()=>{const i=Oe(t,e);return n(i.getContext("2d"),t,e),ze(i)})}function $o(s=512,t=3,e=[150,152,150]){return Xe(`concrete:${s}:${t}:${e}`,()=>{const n=Oe(s,s),i=n.getContext("2d"),r=i.createImageData(s,s),o=r.data,a=new Ms(t*977);for(let l=0;l<s;l++)for(let c=0;c<s;c++){const h=c/s*8,u=l/s*8;let f=Ii(h,u,8,t,5);const d=Js(c,l,t+5);let g=.82+(f-.5)*.42+(d-.5)*.07;const x=l*s+c<<2;o[x]=e[0]*g,o[x+1]=e[1]*g,o[x+2]=e[2]*g,o[x+3]=255}i.putImageData(r,0,0);for(let l=0;l<s*3;l++){const c=a.next()*s,h=a.next()*s;i.fillStyle=a.next()<.5?"rgba(40,40,40,0.25)":"rgba(235,235,230,0.18)",i.fillRect(c,h,1+a.next()*1.5,1+a.next()*1.5)}return n})}function Sf(s=[8,8],t=3,e=[150,152,150]){const n=$o(512,t,e),i=ze(n,{repeat:s}),r=Xe(`concreteR:${t}`,()=>{const a=Oe(256,256),l=a.getContext("2d"),c=l.createImageData(256,256);for(let h=0;h<256;h++)for(let u=0;u<256;u++){const d=150+(Ii(u/256*6,h/256*6,6,t+40,4)-.5)*190,g=h*256+u<<2;c.data[g]=c.data[g+1]=c.data[g+2]=d,c.data[g+3]=255}return l.putImageData(c,0,0),a}),o=ze(r,{srgb:!1,repeat:s});return{map:i,roughnessMap:o}}function bf(){return Xe("brushed",()=>{const t=Oe(512,512),e=t.getContext("2d"),n=e.createImageData(512,512),i=n.data,r=new Ms(41),o=new Float32Array(512);for(let a=0;a<512;a++)o[a]=r.next();for(let a=0;a<512;a++){const l=(o[a]+o[(a+1)%512]+o[(a+512-1)%512])/3;for(let c=0;c<512;c++){const h=$l(c/64,a*1.7,8,9)*.5+$l(c/9,a*2.3,57,11)*.5,u=Ii(c/512*4,a/512*4,4,77,3),f=.8+(l-.5)*.16+(h-.5)*.14+(u-.5)*.12,d=a*512+c<<2;i[d]=i[d+1]=i[d+2]=Math.max(0,Math.min(255,f*255)),i[d+3]=255}}return e.putImageData(n,0,0),t})}function wf(s=[2,2]){return ze(bf(),{repeat:s})}function e1(s=[2,2]){return ze(bf(),{srgb:!1,repeat:s})}function Tf(){return Xe("carbon",()=>{const e=Oe(128,128),n=e.getContext("2d");n.fillStyle="#0c0d0f",n.fillRect(0,0,128,128);for(let i=0;i<128/16;i++)for(let r=0;r<128/16;r++){const o=(r+i*2)%4<2,a=o?n.createLinearGradient(0,i*16,0,(i+1)*16):n.createLinearGradient(r*16,0,(r+1)*16,0);a.addColorStop(0,"#0d0e11"),a.addColorStop(.5,o?"#3a3d44":"#2a2c32"),a.addColorStop(1,"#0d0e11"),n.fillStyle=a,n.fillRect(r*16+.5,i*16+.5,15,15)}return e})}function n1(s=[8,8]){return ze(Tf(),{repeat:s})}function i1(s=[20,1]){const t=Xe("corrC",()=>{const n=Oe(256,256),i=n.getContext("2d"),r=i.createImageData(256,256);for(let o=0;o<256;o++)for(let a=0;a<256;a++){const l=Math.sin(a/256*Math.PI*2*8),c=Ii(a/256*4,o/256*4,4,23,3),h=205+l*14+(c-.5)*26,u=o*256+a<<2;r.data[u]=h*.97,r.data[u+1]=h*.99,r.data[u+2]=h,r.data[u+3]=255}return i.putImageData(r,0,0),n}),e=Xe("corrN",()=>{const n=Oe(256,64),i=n.getContext("2d"),r=i.createImageData(256,64);for(let o=0;o<64;o++)for(let a=0;a<256;a++){const l=Math.cos(a/256*Math.PI*2*8)*.9,c=1/Math.sqrt(l*l+1),h=o*256+a<<2;r.data[h]=(-l*c*.5+.5)*255,r.data[h+1]=128,r.data[h+2]=(c*.5+.5)*255,r.data[h+3]=255}return i.putImageData(r,0,0),n});return{map:ze(t,{repeat:s}),normalMap:ze(e,{srgb:!1,repeat:s})}}function s1(s=[4,1]){const t=Xe("hazard",()=>{const e=Oe(128,128),n=e.getContext("2d");n.fillStyle="#f2c200",n.fillRect(0,0,128,128),n.fillStyle="#15171a";for(let i=-2;i<4;i++)n.beginPath(),n.moveTo(i*64,0),n.lineTo(i*64+32,0),n.lineTo(i*64+32+128,128),n.lineTo(i*64+128,128),n.fill();return e});return ze(t,{repeat:s})}function r1(){return Xe("gridfin",()=>{const s=Oe(256,256),t=s.getContext("2d");t.clearRect(0,0,256,256),t.strokeStyle="#9aa0a8",t.lineWidth=9,t.strokeRect(5,5,246,246),t.lineWidth=5,t.save(),t.beginPath(),t.rect(5,5,246,246),t.clip();for(let n=-8;n<16;n++)t.beginPath(),t.moveTo(n*36,0),t.lineTo(n*36+256,256),t.stroke(),t.beginPath(),t.moveTo(n*36+256,0),t.lineTo(n*36,256),t.stroke();return t.restore(),ze(s)})}function o1(){return Xe("puff",()=>{const t=Oe(128,128),e=t.getContext("2d"),n=e.createImageData(128,128);for(let i=0;i<128;i++)for(let r=0;r<128;r++){const o=(r-64)/64,a=(i-128/2)/(128/2),l=Math.sqrt(o*o+a*a),c=Ii(r/128*5,i/128*5,5,12,4);let h=Math.max(0,1-l*(.85+(.5-c)*.9));h=h*h*(3-2*h),h*=.55+c*.6,h*=Math.max(0,Math.min(1,(1-l)/.3));const u=i*128+r<<2,f=215+c*40;n.data[u]=n.data[u+1]=n.data[u+2]=f,n.data[u+3]=Math.min(255,h*255)}return e.putImageData(n,0,0),ze(t,{srgb:!1,mip:!0})})}function Ef(){return Xe("glow",()=>{const t=Oe(64,64),e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.75)"),n.addColorStop(.6,"rgba(255,255,255,0.18)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),ze(t,{srgb:!1})})}const Ir={W:1024,H:4096,lengthM:39.5,circM:11.62};function a1(s){return Xe("livery",()=>{const{W:t,H:e,lengthM:n}=Ir,i=Oe(t,e),r=i.getContext("2d"),o=e/n,a=t/Ir.circM,l=b=>e-b*o,c=new Ms(2026);{const S=Oe(256,1024),E=S.getContext("2d"),L=E.createImageData(256,1024),U=L.data;for(let B=0;B<1024;B++)for(let F=0;F<256;F++){const X=232+(Ii(F/256*6,B/1024*24,6,5,3)-.5)*22,H=B*256+F<<2;U[H]=X,U[H+1]=X+1,U[H+2]=X+3,U[H+3]=255}E.putImageData(L,0,0),r.imageSmoothingEnabled=!0,r.drawImage(S,0,0,t,e)}const h=document.createElement("canvas");h.width=512,h.height=2048;const u=h.getContext("2d");u.fillStyle="#808080",u.fillRect(0,0,512,2048);const f=.5,d=(b,_=3,S=.3)=>{r.fillStyle=`rgba(40,46,56,${S})`,r.fillRect(0,l(b)-_/2,t,_),r.fillStyle="rgba(255,255,255,0.35)",r.fillRect(0,l(b)+_/2,t,1),u.fillStyle="#303030",u.fillRect(0,(l(b)-_/2)*f,512,Math.max(2,_*f))},g=(b,_,S,E=2,L=.22)=>{r.fillStyle=`rgba(40,46,56,${L})`,r.fillRect(b*a-E/2,l(S),E,(S-_)*o),u.fillStyle="#383838",u.fillRect((b*a-E/2)*f,l(S)*f,Math.max(1.5,E*f),(S-_)*o*f)},x=s.s1Top,p=s.interTop,m=n;for(let b=2;b<x-.5;b+=2)d(b,3,.28);for(let b=p+2;b<m-.5;b+=2)d(b,3,.28);d(x,5,.5),d(p,5,.5),r.fillStyle="rgba(60,66,76,0.35)";for(let b=2;b<m;b+=2)if(!(b>x-.3&&b<p+.3))for(let _=6;_<t;_+=13)r.fillRect(_,l(b)-9,2,2);for(let b=0;b<8;b++){const _=b/8*Ir.circM+.35;g(_,0,x,2,.16),g(_,p,m,2,.16)}const y=r.createLinearGradient(0,l(2.1),0,l(0));y.addColorStop(0,"#8b919a"),y.addColorStop(1,"#666c76"),r.fillStyle=y,r.fillRect(0,l(2.1),t,2.1*o),r.fillStyle=$e.teal,r.fillRect(0,l(2.32),t,.14*o),u.fillStyle="#5a5a5a",u.fillRect(0,l(2.1)*f,512,2.1*o*f);for(let b=0;b<4;b++){const _=(b+.5)/4*Ir.circM;r.fillStyle="#1b1d21",r.beginPath(),r.moveTo((_-.55)*a,l(.6)),r.lineTo((_+.55)*a,l(.6)),r.lineTo((_+.2)*a,l(8.1)),r.lineTo((_-.2)*a,l(8.1)),r.fill()}const M=Tf();r.save(),r.fillStyle=r.createPattern(M,"repeat"),r.fillRect(0,l(p),t,(p-x)*o),r.fillStyle="rgba(0,0,0,0.25)",r.fillRect(0,l(p),t,(p-x)*o),r.restore(),r.fillStyle=$e.teal,r.fillRect(0,l(x+.16),t,.1*o);const v=[0,.5,1];for(const b of v){const _=b*t,S=b===.5?-Math.PI/2:Math.PI/2;r.save(),r.translate(_,l(17.2)),r.rotate(S),r.fillStyle=$e.navy,r.font=`700 ${Math.round(1.55*a)}px ${On}`,r.textAlign="center",r.textBaseline="middle",r.fillText("H E L I X",0,0),r.restore(),fr(r,_,l(24.6),2.5*a,$e.navy,$e.teal),r.save(),r.translate(_,l(p+4.1)),r.rotate(S),r.fillStyle=$e.navy,r.font=`700 ${Math.round(.95*a)}px ${On}`,r.textAlign="center",r.textBaseline="middle",r.fillText("HELIX ORBITAL",0,0),r.restore(),r.fillStyle=$e.navy,r.font=`700 ${Math.round(.42*a)}px ${On}`,r.textAlign="center",r.fillText("HELIX-1",_,l(10.6)),r.font=`400 ${Math.round(.2*a)}px ${On}`,r.fillText("B1026  -  CREW",_,l(10.15))}r.fillStyle=$e.navy,r.fillRect(0,l(x-.55),t,.35*o),r.fillStyle=$e.teal,r.fillRect(0,l(x-.75),t,.1*o),r.fillStyle=$e.navy,r.fillRect(0,l(m-.5),t,.3*o),r.fillStyle="rgba(30,36,48,0.8)",r.font=`600 ${Math.round(.11*a)}px ${On}`,r.textAlign="left";const w=["LOX FILL","RP-1 VENT","NO STEP","GN2 PURGE","T-0 UMBILICAL","LIFT POINT","HE PRESS"];for(let b=0;b<26;b++){const _=c.next()*t,S=3+c.next()*(m-4);S>x-1&&S<p+.5||(r.fillText(w[b%w.length],_,l(S)),r.strokeStyle="rgba(30,36,48,0.6)",r.lineWidth=1.2,r.strokeRect(_-4,l(S)-.16*a,.9*a,.22*a))}for(let b=0;b<90;b++){const _=c.next()*t,S=c.next()*m,E=.5+c.next()*3;r.fillStyle=`rgba(90,96,104,${.02+c.next()*.035})`,r.fillRect(_,l(S),2+c.next()*5,E*o)}const T=ze(i,{aniso:16}),C=ze(t1(h,3.2),{srgb:!1,aniso:8});return{map:T,normalMap:C}})}function l1(){return Xe("capsule",()=>{const e=Oe(1024,512),n=e.getContext("2d");n.fillStyle="#eceef0",n.fillRect(0,0,1024,512),n.fillStyle="#c9ccd0",n.fillRect(0,512*.86,1024,512*.14),n.strokeStyle="rgba(50,56,66,0.35)",n.lineWidth=2;for(let i=0;i<12;i++)n.beginPath(),n.moveTo(i/12*1024+20,0),n.lineTo(i/12*1024+20,512),n.stroke();for(const i of[.2,.52,.86])n.beginPath(),n.moveTo(0,512*i),n.lineTo(1024,512*i),n.stroke();for(const i of[.07,.19,.57,.69])n.fillStyle="#0a0f18",n.beginPath(),n.roundRect(i*1024,512*.3,1024*.05,512*.16,14),n.fill(),n.strokeStyle="#7d8590",n.lineWidth=4,n.stroke();for(const i of[0,.25,.5,.75])n.fillStyle="#23262b",n.beginPath(),n.roundRect(i*1024+1024*.105,512*.6,1024*.04,512*.2,10),n.fill();return n.fillStyle=$e.navy,n.font=`700 44px ${On}`,n.textAlign="center",n.fillText("HELIX ORBITAL",1024*.38,512*.7),n.fillText("HELIX ORBITAL",1024*.88,512*.7),fr(n,1024*.38,512*.3,110,$e.navy,$e.teal),fr(n,1024*.88,512*.3,110,$e.navy,$e.teal),ze(e,{aniso:16})})}function c1(){return Xe("trunk",()=>{const e=Oe(1024,256),n=e.getContext("2d");n.fillStyle="#e9ebee",n.fillRect(0,0,1024,256),n.fillStyle="#0c1630",n.fillRect(1024*.52,10,1024*.46,236),n.strokeStyle="rgba(120,150,210,0.55)",n.lineWidth=1.5;for(let i=1024*.52;i<1024*.98;i+=24)n.beginPath(),n.moveTo(i,10),n.lineTo(i,246),n.stroke();for(let i=10;i<246;i+=34)n.beginPath(),n.moveTo(1024*.52,i),n.lineTo(1024*.98,i),n.stroke();n.strokeStyle="rgba(50,56,66,0.35)",n.lineWidth=2;for(let i=0;i<6;i++)n.beginPath(),n.moveTo(i/12*1024+12,0),n.lineTo(i/12*1024+12,256),n.stroke();return n.fillStyle=$e.teal,n.fillRect(0,242,1024*.5,8),ze(e,{aniso:8})})}const Ec=s=>560+170*Math.sin(s/1300)+80*Math.sin(s/410+1.3);function h1(s=6e3){return Xe("ground",()=>{const e=Oe(1024,1024),n=e.getContext("2d"),i=n.createImageData(1024,1024),r=i.data;for(let o=0;o<1024;o++){const a=(o/1024-.5)*s,l=Ec(a);for(let c=0;c<1024;c++){const h=(c/1024-.5)*s,u=Ii(c/1024*24,o/1024*24,24,31,4),f=Ii(c/1024*110,o/1024*110,110,57,2),d=l+(u-.5)*90-h;let g,x,p;if(d>60){const M=u*.7+f*.3;if(g=56+M*40,x=66+M*34,p=38+M*22,u>.6){const v=(u-.6)*2.4;g+=v*62,x+=v*44,p+=v*26}}else if(d>0){const M=d/60;g=196-M*80+f*14,x=182-M*60+f*12,p=138-M*78+f*10}else{const M=Math.min(1,-d/500);g=46-M*34+f*8,x=118-M*66+f*8,p=132-M*44+f*10}const m=o*1024+c<<2;r[m]=g,r[m+1]=x,r[m+2]=p;const y=Math.hypot(h,a)/(s/2);r[m+3]=y>.86?Math.max(0,255*(1-(y-.86)/.13)):255}}return n.putImageData(i,0,0),ze(e,{aniso:16})})}function u1(s){const t=Xe("detail",()=>{const n=Oe(256,256),i=n.getContext("2d"),r=i.createImageData(256,256);for(let o=0;o<256;o++)for(let a=0;a<256;a++){const l=Ii(a/256*16,o/256*16,16,91,4),c=Js(a,o,3),h=150+(l-.5)*150+(c-.5)*50,u=o*256+a<<2;r.data[u]=r.data[u+1]=r.data[u+2]=h,r.data[u+3]=255}return i.putImageData(r,0,0),n});return ze(t,{srgb:!1,repeat:s})}function f1(s){const t=$o(512,9,[78,80,84]);return{map:ze(t,{repeat:s})}}function d1(){return Xe("lzpad",()=>{const t=Oe(1024,1024),e=t.getContext("2d");e.fillStyle=e.createPattern($o(512,5,[120,122,124]),"repeat"),e.fillRect(0,0,1024,1024),e.fillStyle="rgba(20,22,26,0.55)",e.beginPath(),e.arc(1024/2,1024/2,1024*.47,0,7),e.fill(),e.strokeStyle="#f2c200",e.lineWidth=16,e.beginPath(),e.arc(1024/2,1024/2,1024*.45,0,7),e.stroke(),e.strokeStyle="#e9edf0",e.lineWidth=12,e.beginPath(),e.arc(1024/2,1024/2,1024*.3,0,7),e.stroke(),e.lineWidth=8,e.beginPath(),e.arc(1024/2,1024/2,1024*.1,0,7),e.stroke(),fr(e,1024/2,1024/2,1024*.36,"#e9edf0",$e.teal),e.fillStyle="#e9edf0",e.font=`700 54px ${On}`,e.textAlign="center",e.fillText("LZ-1",1024/2,1024*.9);const n=e.createRadialGradient(1024/2,1024/2,10,1024/2,1024/2,1024*.22);return n.addColorStop(0,"rgba(10,10,10,0.35)"),n.addColorStop(1,"rgba(10,10,10,0)"),e.fillStyle=n,e.fillRect(0,0,1024,1024),ze(t,{aniso:16})})}function p1(s){return Xe("hfloor",()=>{const{x0:n,x1:i,z0:r,z1:o}=s.bounds,a=Oe(4096,1536),l=a.getContext("2d"),c=4096/(i-n),h=1536/(o-r),u=m=>(m-n)*c,f=m=>(m-r)*h;l.fillStyle=l.createPattern($o(512,3,[112,115,118]),"repeat"),l.fillRect(0,0,4096,1536);const d=new Ms(88);l.strokeStyle="rgba(40,42,44,0.45)",l.lineWidth=2;for(let m=n+5;m<i;m+=10)l.beginPath(),l.moveTo(u(m),0),l.lineTo(u(m),1536),l.stroke();for(let m=r+5;m<o;m+=10)l.beginPath(),l.moveTo(0,f(m)),l.lineTo(4096,f(m)),l.stroke();for(let m=0;m<140;m++){const y=d.next()*4096,M=d.next()*1536,v=20+d.next()*90,w=l.createRadialGradient(y,M,0,y,M,v);w.addColorStop(0,`rgba(30,30,32,${.04+d.next()*.07})`),w.addColorStop(1,"rgba(30,30,32,0)"),l.fillStyle=w,l.fillRect(y-v,M-v,v*2,v*2)}const g=(m,y,M,v,w)=>{l.fillStyle=w,l.fillRect(u(m),f(y),(M-m)*c,(v-y)*h)},x=(m,y,M,v,w,T,C)=>{l.strokeStyle=T,l.lineWidth=w*h,l.setLineDash(C?C.map(b=>b*c):[]),l.beginPath(),l.moveTo(u(m),f(y)),l.lineTo(u(M),f(v)),l.stroke(),l.setLineDash([])};g(n+3,-4.9,i,4.9,"rgba(52,58,66,0.42)");const p=l.createPattern(Xe("hazardCv",()=>{const m=Oe(48,48),y=m.getContext("2d");y.fillStyle="#e8b800",y.fillRect(0,0,48,48),y.fillStyle="#17191c";for(let M=-2;M<3;M++)y.beginPath(),y.moveTo(M*24,0),y.lineTo(M*24+12,0),y.lineTo(M*24+60,48),y.lineTo(M*24+48,48),y.fill();return m}),"repeat");g(n+3,-5.25,i,-4.9,p),g(n+3,4.9,i,5.25,p);for(const m of[-1,1]){const y=m<0?-10:6.2,M=m<0?-6.2:10;g(n+3,y,i-2.5,M,"rgba(20,92,72,0.5)"),x(n+3,y,i-2.5,y,.14,"#f0c400"),x(n+3,M,i-2.5,M,.14,"#f0c400")}for(const m of s.crossings)for(let y=-4.6;y<4.6;y+=1)g(m-1.7,y,m+1.7,y+.5,"rgba(240,240,236,0.85)");for(const m of[-1,1])x(n+4,m*29.6,i-4,m*29.6,.14,"#f0c400",[1.6,1.2]),x(n+4,m*33.4,i-4,m*33.4,.14,"#f0c400");for(const m of s.cells)g(m.x0,m.z0,m.x1,m.z1,"rgba(38,70,110,0.5)"),l.strokeStyle="#f0c400",l.lineWidth=.2*h,l.strokeRect(u(m.x0),f(m.z0),(m.x1-m.x0)*c,(m.z1-m.z0)*h);l.textBaseline="middle";for(const m of s.stations)l.save(),l.translate(u(m.labelX),f(m.labelZ)),m.console.dir>0&&(l.translate(13*c,0),l.rotate(Math.PI)),l.fillStyle="rgba(245,246,240,0.92)",l.font=`700 ${Math.round(2.3*h)}px ${On}`,l.textAlign="left",l.fillText(String(m.n).padStart(2,"0"),0,0),l.font=`600 ${Math.round(1.05*h)}px ${On}`,l.fillText(m.name.toUpperCase(),3.4*c,.1*h),l.restore();return g(i-2.2,-14.5,i,14.5,p),fr(l,u(n+9),f(21.5),8*h,"rgba(240,242,238,0.5)","rgba(39,211,195,0.6)"),ze(a,{aniso:16})})}function m1(s,t){return Xe("hlight",()=>{const{x0:i,x1:r,z0:o,z1:a}=s.bounds,l=Oe(512,192),c=l.getContext("2d");c.fillStyle="#1b1d22",c.fillRect(0,0,512,192),c.globalCompositeOperation="lighter";for(const h of t){const u=(h.x-i)/(r-i)*512,f=(h.z-o)/(a-o)*192,d=h.r/(r-i)*512,g=c.createRadialGradient(u,f,0,u,f,d);g.addColorStop(0,`rgba(255,244,222,${h.a})`),g.addColorStop(.45,`rgba(255,240,214,${h.a*.45})`),g.addColorStop(1,"rgba(255,240,214,0)"),c.fillStyle=g,c.fillRect(u-d,f-d,d*2,d*2)}return ze(l,{srgb:!0,mip:!1,aniso:1})})}function g1(s,t,e,n=$e.teal){return Xe("screen:"+s,()=>{const i=Oe(512,320),r=i.getContext("2d");r.fillStyle="#04101c",r.fillRect(0,0,512,320),r.fillStyle=n,r.fillRect(0,0,512,46),r.fillStyle="#04101c",r.font=`700 28px ${On}`,r.textBaseline="middle",r.fillText(t,16,24),r.fillStyle="#bfeee8",r.font=`500 22px ${On}`,e.forEach((o,a)=>r.fillText(o,16,80+a*34)),r.strokeStyle=n,r.lineWidth=3,r.beginPath();for(let o=0;o<40;o++){const a=300+o*5,l=250-Math.sin(o*.45)*28-o*.6;o===0?r.moveTo(a,l):r.lineTo(a,l)}r.stroke(),r.fillStyle="rgba(39,211,195,0.25)";for(let o=0;o<9;o++)r.fillRect(18+o*28,300-(20+o*37%60),20,20+o*37%60);return ze(i)})}function x1(){const s={},t=l=>new Ee(l),e=wf([2,2]),n=e1([2,2]);s.steel=t({color:13948892,metalness:1,roughness:.42,map:e,roughnessMap:n}),s.steelPolished=t({color:15264494,metalness:1,roughness:.16}),s.steelDark=t({color:4935768,metalness:.85,roughness:.5}),s.gunmetal=t({color:2764083,metalness:.8,roughness:.45}),s.aluminum=t({color:12764876,metalness:.95,roughness:.3,map:e}),s.copper=t({color:12745285,metalness:1,roughness:.32}),s.titanium=t({color:9277334,metalness:.9,roughness:.42}),s.paint=t({color:16777215,metalness:.08,roughness:.52}),s.metal=t({color:16777215,metalness:.9,roughness:.42}),s.matte=t({color:16777215,metalness:0,roughness:.9}),s.rubber=t({color:1316120,metalness:0,roughness:.92}),s.white=t({color:15856372,metalness:.05,roughness:.38}),s.yellow=t({color:15905792,metalness:.1,roughness:.45}),s.orange=t({color:16738835,metalness:.15,roughness:.4}),s.navy=t({color:992064,metalness:.2,roughness:.45}),s.teal=t({color:2078120,metalness:.2,roughness:.4});const i=n1([10,10]);s.carbon=t({color:16777215,map:i,metalness:.35,roughness:.34});const r=Sf([1,1],3);s.concrete=t({color:16777215,map:r.map,roughnessMap:r.roughnessMap,roughness:.95,metalness:0}),s.concreteDark=t({color:9080208,map:r.map,roughness:.95,metalness:0});const o=i1([1,1]);s.corrugated=t({color:14672872,map:o.map,normalMap:o.normalMap,metalness:.55,roughness:.55,side:Ke}),s.corrMaps=o,s.roof=t({color:11449531,metalness:.6,roughness:.5,side:Ke}),s.hazard=t({map:s1([1,1]),metalness:.1,roughness:.6}),s.glass=t({color:10473702,metalness:.1,roughness:.06,transparent:!0,opacity:.2,depthWrite:!1,side:Ke}),s.glassDark=t({color:659480,metalness:.6,roughness:.08});const a=(l,c)=>t({color:1118481,emissive:l,emissiveIntensity:c,roughness:.6});return s.lampWarm=a(16773336,9),s.lampCool=a(14478335,7),s.lampRed=a(16722458,4),s.lampGreen=a(3014540,3.5),s.lampAmber=a(16753690,4),s.lampTeal=a(2610115,3),s.skylight=a(15135231,2.6),s.heat=a(16742954,5),s}function Kh(s,t,{roughness:e=.34,clear:n=!1}={}){const i=new Ee({map:s.map,normalMap:s.normalMap,normalScale:new lt(.9,.9),metalness:.12,roughness:e}),r=wf([1,1]);return i.onBeforeCompile=o=>{o.uniforms.uPaint=t,o.uniforms.uBare={value:r},o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPaint;
uniform sampler2D uBare;
float paintMask;`).replace("#include <map_fragment>",`
        #include <map_fragment>
        {
          vec2 bu = vMapUv * vec2(6.0, 21.0);
          float wob = texture2D(uBare, vMapUv * vec2(3.0, 5.0)).r;
          // paint front travels from the nose (v = 1) down to the base (v = 0)
          float front = 1.02 - uPaint * 1.06 + (wob - 0.75) * 0.02;
          paintMask = clamp(smoothstep(front - 0.004, front + 0.004, vMapUv.y) + step(1.0, uPaint), 0.0, 1.0);
          vec3 steel = texture2D(uBare, bu).rgb;
          // weld seams every 2 m read as slightly darker bands on the bare metal
          float seam = smoothstep(0.488, 0.498, abs(fract(vMapUv.y * 19.75) - 0.5));
          vec3 bareCol = steel * vec3(0.82, 0.84, 0.88) * (1.0 - seam * 0.35);
          diffuseColor.rgb = mix(bareCol, diffuseColor.rgb, paintMask);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor = mix(0.36, roughnessFactor, paintMask);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
metalnessFactor = mix(1.0, metalnessFactor, paintMask);`)},i.customProgramCacheKey=()=>"livery",i}let za=12345;function Te(){return za=za*1664525+1013904223>>>0,za/4294967296}const Ot=(s,t)=>s+(t-s)*Te(),v1=`
attribute vec3 iPos;
attribute vec4 iCol;   // rgb + alpha
attribute vec2 iSR;    // size, rotation
varying vec2 vUv;
varying vec4 vCol;
void main(){
  vUv = uv;
  vCol = iCol;
  float c = cos(iSR.y), s = sin(iSR.y);
  vec2 p = position.xy;
  p = vec2(p.x * c - p.y * s, p.x * s + p.y * c) * iSR.x;
  vec4 mv = modelViewMatrix * vec4(iPos, 1.0);
  mv.xy += p;
  gl_Position = projectionMatrix * mv;
}`,_1=`
precision highp float;
uniform sampler2D uTex;
varying vec2 vUv;
varying vec4 vCol;
void main(){
  vec4 t = texture2D(uTex, vUv);
  float a = t.a * vCol.a;
  if (a < 0.003) discard;
  gl_FragColor = vec4(vCol.rgb * t.rgb * PREMUL, a * ALPHA_OUT);
}`;class wr{constructor(t,e,{max:n=1e3,additive:i=!1,order:r=10}={}){this.max=n,this.count=0,this.additive=i;const o=new Fe(1,1),a=new Kp;a.index=o.index,a.setAttribute("position",o.attributes.position),a.setAttribute("uv",o.attributes.uv),this.aPos=new tr(new Float32Array(n*3),3),this.aCol=new tr(new Float32Array(n*4),4),this.aSR=new tr(new Float32Array(n*2),2);for(const c of[this.aPos,this.aCol,this.aSR])c.setUsage(ud);a.setAttribute("iPos",this.aPos),a.setAttribute("iCol",this.aCol),a.setAttribute("iSR",this.aSR),a.instanceCount=0,this.geo=a;const l=new Ie({uniforms:{uTex:{value:i?Ef():o1()}},vertexShader:v1,fragmentShader:_1,defines:{PREMUL:i?"a":"1.0",ALPHA_OUT:i?"0.0":"1.0"},transparent:!0,depthWrite:!1,blending:i?jl:ds,fog:!1});i&&(l.blendEquation=Xn,l.blendSrc=Qa,l.blendDst=Qa),this.mesh=new Ae(a,l),this.mesh.frustumCulled=!1,this.mesh.renderOrder=r,e.add(this.mesh),t.markNoAO(this.mesh),this.p=new Float32Array(n*3),this.v=new Float32Array(n*3),this.age=new Float32Array(n),this.life=new Float32Array(n),this.s0=new Float32Array(n),this.s1=new Float32Array(n),this.col=new Float32Array(n*4),this.phys=new Float32Array(n*3),this.rot=new Float32Array(n*2)}emit(t,e,n,i,r,o,a,l,c,h,u,f,d,g=0,x=0,p=-1e9){let m=this.count;m>=this.max?m=this._rr=((this._rr||0)+1)%this.max:this.count++;const y=m*3,M=m*4;this.p[y]=t,this.p[y+1]=e,this.p[y+2]=n,this.v[y]=i,this.v[y+1]=r,this.v[y+2]=o,this.age[m]=0,this.life[m]=a,this.s0[m]=l,this.s1[m]=c,this.col[M]=h,this.col[M+1]=u,this.col[M+2]=f,this.col[M+3]=d,this.phys[y]=g,this.phys[y+1]=x,this.phys[y+2]=p,this.rot[m*2]=Te()*6.283,this.rot[m*2+1]=(Te()-.5)*1.2}clear(){this.count=0,this.geo.instanceCount=0}update(t){const{p:e,v:n,age:i,life:r,s0:o,s1:a,col:l,phys:c,rot:h}=this,u=this.aPos.array,f=this.aCol.array,d=this.aSR.array;let g=this.count;for(let x=0;x<g;){if(i[x]+=t,i[x]>=r[x]){if(g--,x!==g){const C=x*3,b=g*3,_=x*4,S=g*4;e[C]=e[b],e[C+1]=e[b+1],e[C+2]=e[b+2],n[C]=n[b],n[C+1]=n[b+1],n[C+2]=n[b+2],c[C]=c[b],c[C+1]=c[b+1],c[C+2]=c[b+2],l[_]=l[S],l[_+1]=l[S+1],l[_+2]=l[S+2],l[_+3]=l[S+3],i[x]=i[g],r[x]=r[g],o[x]=o[g],a[x]=a[g],h[x*2]=h[g*2],h[x*2+1]=h[g*2+1]}continue}const p=x*3,m=x*4,y=c[p];if(y>0){const C=Math.max(0,1-y*t);n[p]*=C,n[p+1]*=C,n[p+2]*=C}n[p+1]-=c[p+1]*t,e[p]+=n[p]*t,e[p+1]+=n[p+1]*t,e[p+2]+=n[p+2]*t;const M=c[p+2];e[p+1]<M&&(e[p+1]=M,n[p+1]=Math.abs(n[p+1])*.35,n[p]*=.7,n[p+2]*=.7);const v=i[x]/r[x];u[p]=e[p],u[p+1]=e[p+1],u[p+2]=e[p+2];const w=this.additive?1-v*v:Math.min(1,v*8)*(1-v)*(1-v*.3);f[m]=l[m],f[m+1]=l[m+1],f[m+2]=l[m+2],f[m+3]=l[m+3]*w;const T=1-(1-v)*(1-v);d[x*2]=o[x]+(a[x]-o[x])*T,h[x*2]+=h[x*2+1]*t,d[x*2+1]=h[x*2],x++}this.count=g,this.geo.instanceCount=g,g>0&&(this.aPos.clearUpdateRanges(),this.aPos.addUpdateRange(0,g*3),this.aPos.needsUpdate=!0,this.aCol.clearUpdateRanges(),this.aCol.addUpdateRange(0,g*4),this.aCol.needsUpdate=!0,this.aSR.clearUpdateRanges(),this.aSR.addUpdateRange(0,g*2),this.aSR.needsUpdate=!0),this.mesh.visible=g>0}}const Ne=6371e3,Bi=3986004418e5,Ln=9.80665,M1=1.225,Af=7400,on=Math.PI/180,jt={s1Dry:27200,s1Prop:418e3,s1Engines:9,engThrustVac:914e3,s1IspVac:311,s1IspSl:282,s2Dry:4e3,s2Prop:111500,s2ThrustVac:981e3,s2IspVac:348,capsule:9500,area:10.75,reserveProp:62e3},y1=2e5,zs={tPitch:9,tKick:14,kickDeg:3,tgoK:1,pMin:-15,pMax:40};function bo(s){return s>14e4?0:M1*Math.exp(-Math.max(s,0)/Af)}function wo(s){return s>14e4?0:Math.exp(-Math.max(s,0)/Af)}function S1(s){return s<11e3?340-45*s/11e3:295}function b1(s){return s<.6?.3:s<1.1?.3+(s-.6)/.5*.25:s<3?.55-(s-1.1)/1.9*.27:.28}const To=1.6,Kn=(s,t,e)=>s<t?t:s>e?e:s;function Fo(s,t){let e=s-t;for(;e>Math.PI;)e-=2*Math.PI;for(;e<-Math.PI;)e+=2*Math.PI;return e}function jh(s,t,e){const n=Fo(t,s);return Math.abs(n)<=e?t:s+Math.sign(n)*e}const w1={IGNITION:"Ignition",LIFTOFF:"Liftoff",ROLL:"Roll program",MACH1:"Supersonic",MAXQ:"Max-Q",MECO:"MECO",SEP:"Stage separation",SES1:"Second-stage ignition",BOOSTBACK:"Boostback burn",BOOSTBACK_END:"Boostback shutdown",ENTRY:"Entry burn",ENTRY_END:"Entry burn shutdown",LANDING_BURN:"Landing burn",LEGS:"Landing legs deployed",TOUCHDOWN:"Booster touchdown",SECO:"SECO",ORBIT:"Orbit insertion"};class T1{constructor({seed:t=2026,lzDownrange:e=-250,lzAlt:n=0,startT:i=-60}={}){this.seed=t,this.lzDownrange=e,this.lzAlt=n,this.startT=i,this.reset()}reset(){const t=new Ms(this.seed^5370206);this.gustPhase=[t.next()*6.283,t.next()*6.283,t.next()*6.283],this.gustAmp=[1.6+t.next()*1.4,1+t.next()*1,.5+t.next()*.8],this.navBias=(t.next()*2-1)*2.4,this.t=this.startT,this.phase="countdown",this.events=[],this.eventTimes={},this.stack={x:0,y:Ne,vx:0,vy:0,ang:0,s1Prop:jt.s1Prop,s2Prop:jt.s2Prop,throttle:0,engines:0,staged:!1,alt:0,speed:0,downrange:0,vr:0,vh:0,q:0,mach:0,accelG:1,kickDone:!1,liftedOff:!1},this.booster={active:!1,phase:"attached",x:0,y:Ne,vx:0,vy:0,ang:0,prop:0,throttle:0,engines:0,legs:0,fins:0,alt:0,speed:0,downrange:0,vr:0,vh:0,q:0,landed:!1,crashed:!1,entryAng:0,entryV0:0,burnT:0,aoa:0,rcs:0,touchdown:null},this.maxQ=0,this.maxQDone=!1,this.result={orbitReached:!1,secoAltKm:0,secoSpeedKmS:0,secoVr:0,perigeeKm:0,apogeeKm:0,sepTime:null,secoTime:null,boosterLanded:!1,boosterDistM:null,boosterTouchdownSpeed:null,touchdownTime:null,s2PropLeft:0,boosterPropLeft:0},this.done=!1}emit(t){this.eventTimes[t]===void 0&&(this.eventTimes[t]=this.t,this.events.push({id:t,t:this.t,label:w1[t]||t}))}windMean(t){if(t>45e3)return 0;const e=26*Math.exp(-(((t-11e3)/5200)**2)),n=t>3e4?1-(t-3e4)/15e3:1;return(4+e)*n}wind(t){if(t>45e3)return 0;const e=this.gustAmp,n=this.gustPhase,i=e[0]*Math.sin(t/2100+n[0])+e[1]*Math.sin(t/640+n[1])+e[2]*Math.sin(t/170+n[2]),r=t>3e4?1-(t-3e4)/15e3:1;return this.windMean(t)+i*r}stackMass(){const t=this.stack;return t.staged?jt.s2Dry+t.s2Prop+jt.capsule:jt.s1Dry+t.s1Prop+jt.s2Dry+t.s2Prop+jt.capsule}step(t){this.t+=t,this.stepStack(t),this.booster.active&&this.stepBooster(t),!this.done&&this.eventTimes.SECO!==void 0&&(this.booster.landed||this.booster.crashed)&&(this.done=!0)}stepStack(t){const e=this.stack,n=this.t,i=Math.hypot(e.x,e.y),r=e.x/i,o=e.y/i,a=o,l=-r,c=i-Ne,h=Bi/(i*i),u=this.wind(c),f=e.vx-u*a,d=e.vy-u*l,g=Math.hypot(f,d),p=.5*bo(c)*g*g,m=g/S1(c),y=e.vx*r+e.vy*o,M=e.vx*a+e.vy*l,v=this.stackMass();let w=0,T=0,C=e.ang,b=2.5*on;if(e.staged){const F=jt.s2ThrustVac;if(this.eventTimes.SECO===void 0){const q=this.eventTimes.SEP+5.5;if(n>=q&&e.s2Prop>0){this.emit("SES1");const X=Kn((n-q)/1.5,0,1),H=4*Ln*v/F;e.throttle=Math.min(X,H),e.engines=1;const st=e.throttle*F/v,ut=Math.sqrt(Bi/i),ct=jt.s2IspVac*Ln;let St=v/(F/ct)*(1-Math.exp(-Math.max(0,ut-M)/ct));St=Math.max(St*zs.tgoK,7);let vt=6*(y1-c)/(St*St)-4*y/St;vt=Kn(vt,-12,12);const Vt=h-M*M/i,Dt=Kn((vt+Vt)/Math.max(st,.1),Math.sin(zs.pMin*on),Math.sin(zs.pMax*on)),j=Math.asin(Dt),nt=Math.cos(j)*a+Math.sin(j)*r,_t=Math.cos(j)*l+Math.sin(j)*o;C=Math.atan2(nt,_t),b=3*on,(M>=ut-st*t*.5||e.s2Prop<=0)&&(this.emit("SECO"),e.throttle=0,e.engines=0,this.finishOrbit(c,i,y,M))}else e.throttle=0,e.engines=0}else e.throttle=0,e.engines=0,C=Math.atan2(a,l),b=1*on;T=e.throttle*F/(jt.s2IspVac*Ln),w=T*jt.s2IspVac*Ln}else{const F=wo(c),q=jt.s1IspVac-(jt.s1IspVac-jt.s1IspSl)*F,X=jt.s1Engines*jt.engThrustVac;if(this.eventTimes.MECO===void 0){if(n>=-3){this.emit("IGNITION");let ct=Kn((n+3)/2.2,0,1);ct=ct*ct*(3-2*ct);const St=Kn(1-(p-23e3)/26e3,.72,1);ct*=St;const vt=3.9*Ln*v/(X*(q/jt.s1IspVac));ct=Math.min(ct,Math.max(.5,vt)),e.throttle=ct,e.engines=9}e.s1Prop<=jt.reserveProp&&(this.emit("MECO"),e.throttle=0,e.engines=0)}else e.throttle=0,e.engines=0,n>=this.eventTimes.MECO+3.2&&this.separate();T=e.throttle*X/(jt.s1IspVac*Ln),w=T*q*Ln;const H=zs.tPitch,st=zs.tKick,ut=zs.kickDeg*on;if(n<H)C=0;else if(n<H+st){const ct=(n-H)/st;C=ut*ct*ct*(3-2*ct)}else{const ct=Math.atan2(e.vx,e.vy);C=Math.max(ut,ct)}n>=7.5&&this.emit("ROLL")}e.ang=jh(e.ang,C,b*t);const _=b1(m),S=p*_*jt.area;let E=w/v*Math.sin(e.ang)-h*r,L=w/v*Math.cos(e.ang)-h*o;g>.01&&(E-=S/v*(f/g),L-=S/v*(d/g)),!e.liftedOff&&n>=0&&w>v*h&&(e.liftedOff=!0,this.emit("LIFTOFF"),this.phase="ascent1"),e.liftedOff?(e.vx+=E*t,e.vy+=L*t,e.x+=e.vx*t,e.y+=e.vy*t,e.accelG=Math.hypot(E+h*r,L+h*o)/Ln):e.accelG=1,e.staged?e.s2Prop=Math.max(0,e.s2Prop-T*t):e.s1Prop=Math.max(0,e.s1Prop-T*t);const B=Math.hypot(e.x,e.y);e.alt=B-Ne,e.speed=Math.hypot(e.vx,e.vy),e.downrange=Ne*Math.atan2(e.x,e.y),e.vr=y,e.vh=M,e.q=p,e.mach=m,e.liftedOff&&m>=1&&this.emit("MACH1"),e.liftedOff&&!this.maxQDone&&(p>this.maxQ?this.maxQ=p:n>35&&p<this.maxQ*.985&&(this.maxQDone=!0,this.emit("MAXQ")))}separate(){const t=this.stack,e=this.booster;if(t.staged)return;t.staged=!0,this.emit("SEP"),this.phase="ascent2",this.result.sepTime=this.t;const n=Math.sin(t.ang),i=Math.cos(t.ang);e.active=!0,e.phase="sep",e.x=t.x,e.y=t.y,e.vx=t.vx-n*1.2,e.vy=t.vy-i*1.2,e.ang=t.ang,e.prop=t.s1Prop,e.sepT=this.t,t.vx+=n*.4,t.vy+=i*.4,t.s1Prop=0}finishOrbit(t,e,n,i){const r=this.result,o=n*n+i*i,a=o/2-Bi/e,l=e*i,c=-Bi/(2*a),h=Math.sqrt(Math.max(0,1+2*a*l*l/(Bi*Bi)));r.secoAltKm=t/1e3,r.secoSpeedKmS=Math.sqrt(o)/1e3,r.secoVr=n,r.perigeeKm=(c*(1-h)-Ne)/1e3,r.apogeeKm=(c*(1+h)-Ne)/1e3,r.secoTime=this.t,r.s2PropLeft=this.stack.s2Prop,r.orbitReached=a<0&&r.perigeeKm>150&&t>18e4&&t<23e4&&Math.sqrt(o)>7700,this.phase="orbit",r.orbitReached&&this.emit("ORBIT")}boosterMass(t){return jt.s1Dry+t.prop}predictImpact(t,e,n=0){let i=t.x,r=t.y,o=t.vx,a=t.vy,l=t.prop;const c=.5;let h=n,u=0,f=null;const d=3*jt.engThrustVac*Qh;for(let g=0;g<1600;g++){const x=Math.hypot(i,r),p=x-Ne;if(p<=this.lzAlt)break;const m=i/x,y=r/x,M=y,v=-m;if(h===2&&p-this.lzAlt<5e3){const F=o*m+a*y,q=o*M+a*v,X=(p-this.lzAlt)/Math.max(20,-F);return e&&(e.entryAng=f,e.time=g*c+X),Ne*Math.atan2(i,r)+q*X}const w=Bi/(x*x),T=this.windMean(p),C=o-T*M,b=a-T*v,_=Math.hypot(C,b),S=o*m+a*y,E=jt.s1Dry+l;let L=-w*m,U=-w*y;const B=.5*bo(p)*_*_*To*jt.area;if(_>.01&&(L-=B/E*(C/_),U-=B/E*(b/_)),h===0&&S<0&&p<Jh&&(h=1,u=_,f=Math.atan2(-C,-b)),h===1)if(_<u*tu||l<9e3)h=2;else{const F=jt.s1IspVac-(jt.s1IspVac-jt.s1IspSl)*wo(p),q=d/jt.s1IspVac*F;L+=q/E*(-C/_),U+=q/E*(-b/_),l-=d/(jt.s1IspVac*Ln)*c}o+=L*c,a+=U*c,i+=o*c,r+=a*c}return e&&(e.entryAng=f,e.time=0),Ne*Math.atan2(i,r)}predictStopHeight(t,e,n,i=.82,r=.5){let a=0;for(;t>0&&a<90;){const l=t+this.lzAlt,c=jt.s1IspVac-(jt.s1IspVac-jt.s1IspSl)*wo(l),h=a<r?0:i,u=h*jt.engThrustVac*(c/jt.s1IspVac)/n,f=.5*bo(l)*e*e*To*jt.area/n;if(e+=(Ln-f-u)*.1,this._stopTime=a,e<=Ba)return t;t-=e*.1,n-=h*jt.engThrustVac/(jt.s1IspVac*Ln)*.1,a+=.1}return t<=0?-1:t}stepBooster(t){const e=this.booster;if(e.landed||e.crashed)return;const n=this.t,i=Math.hypot(e.x,e.y),r=e.x/i,o=e.y/i,a=o,l=-r,c=i-Ne,h=c-this.lzAlt,u=Bi/(i*i),f=this.wind(c),d=e.vx-f*a,g=e.vy-f*l,x=Math.hypot(d,g),m=.5*bo(c)*x*x,y=e.vx*r+e.vy*o,M=e.vx*a+e.vy*l,v=this.boosterMass(e),w=wo(c),T=jt.s1IspVac-(jt.s1IspVac-jt.s1IspSl)*w,C=Ne*Math.atan2(e.x,e.y),b=Math.atan2(r,o);let _=0,S=0,E=e.ang,L=6*on,U=0;e.rcs=0;const B=(vt,Vt)=>Math.atan2(vt,Vt),F=B(-Math.cos(Eo)*a+Math.sin(Eo)*r,-Math.cos(Eo)*l+Math.sin(Eo)*o);switch(e.phase){case"sep":n-e.sepT>2.5&&(e.phase="flip");break;case"flip":{L=11*on,E=F,e.rcs=1,Math.abs(Fo(e.ang,F))<25*on&&(e.phase="boostback",e.burnT=n,this.emit("BOOSTBACK"));break}case"boostback":{L=11*on,E=F,S=3,_=Kn((n-e.burnT)/1.2,0,1);const vt={},Dt=this.predictImpact(e,vt)-(this.lzDownrange+E1);Dt<6e3&&(_=Math.min(_,.45)),(Dt<=0||e.prop<16e3)&&(e.phase="coast",e.entryAng=vt.entryAng!==null&&vt.entryAng!==void 0?vt.entryAng:b,this.emit("BOOSTBACK_END"),_=0,S=0);break}case"coast":{L=5*on,e.fins=Math.min(1,e.fins+t/4),y<0&&c<8e4&&x>1?E=B(-d,-g):E=e.entryAng,e.rcs=Math.abs(Fo(e.ang,E))>2*on?1:0,y<0&&c<Jh&&(e.phase="entry",e.burnT=n,e.entryV0=x,this.emit("ENTRY"));break}case"entry":{E=B(-d,-g),S=3,_=Qh*Kn((n-e.burnT)/1,0,1),(x<e.entryV0*tu||e.prop<9e3)&&(e.phase="aero",this.emit("ENTRY_END"),_=0,S=0);break}case"aero":{const vt={},Vt=this.predictImpact(e,vt,2)+this.navBias-this.lzDownrange,Dt=Math.max(3,vt.time),nt=.3*(m*To*jt.area/v),_t=Kn(-3*Vt/(Dt*Dt),-nt,nt);U=_t,e.aoa=nt>.05?_t/nt*8*on:0,E=B(-d,-g)-e.aoa*.6,L=8*on,y<0&&h<16e3&&this.predictStopHeight(h,x,v)<=30&&(e.phase="landing",e.burnT=n,this.emit("LANDING_BURN"));break}case"landing":{S=1;const vt=jt.engThrustVac*(T/jt.s1IspVac),Vt=Kn((n-e.burnT)/.8,.05,1);let Dt;const j=-y;let nt;if(h>8&&j>6){if(this.predictStopHeight(h,j,v,1,0)<3)Dt=1;else if(this.predictStopHeight(h,j,v,.4,0)>3)Dt=.4;else{let Y=.4,$=1;for(let Z=0;Z<7;Z++){const k=(Y+$)/2;this.predictStopHeight(h,j,v,k,0)>3?$=k:Y=k}Dt=(Y+$)/2}this.predictStopHeight(h,j,v,Dt,0),nt=Math.max(2,.55*(this._stopTime+2.2))}else{nt=2;const Y=-Math.sqrt(Ba*Ba+4*Math.max(h-1,0));Dt=Kn((2.5*(Y-y)+(h>1?2:0)+u)*v/vt,.4,1)}const _t=Dt*vt/v,N=(h>300?16:h>30?12:h>5?8:3)*on,O=_t*Math.sin(N),rt=C+this.navBias-this.lzDownrange,ht=Kn(-6*rt/(nt*nt)-4*M/nt,-O,O),P=Math.sqrt(Math.max(_t*_t-ht*ht,.01));_=Dt*Vt,E=B(ht*a+P*r,ht*l+P*o),L=14*on,e.aoa=0,h<A1&&(e.legs===0&&this.emit("LEGS"),e.legs=Math.min(1,e.legs+t/3.2)),e.prop<=0&&(_=0,S=0);break}}e.ang=jh(e.ang,E,L*t);const X=S*jt.engThrustVac*_/(jt.s1IspVac*Ln),H=X*T*Ln;let st=H/v*Math.sin(e.ang)-u*r,ut=H/v*Math.cos(e.ang)-u*o;const ct=m*To*jt.area;x>.01&&(st-=ct/v*(d/x),ut-=ct/v*(g/x)),st+=U*a,ut+=U*l,e.vx+=st*t,e.vy+=ut*t,e.x+=e.vx*t,e.y+=e.vy*t,e.prop=Math.max(0,e.prop-X*t),e.throttle=_,e.engines=S;const St=Math.hypot(e.x,e.y);if(e.alt=St-Ne,e.speed=Math.hypot(e.vx,e.vy),e.downrange=Ne*Math.atan2(e.x,e.y),e.vr=y,e.vh=M,e.q=m,e.alt-this.lzAlt<=0){const vt=Math.abs(e.downrange-this.lzDownrange),Vt=Math.abs(Fo(e.ang,Math.atan2(e.x,e.y))),Dt=Math.abs(y)<6&&Math.abs(M)<3&&Vt<12*on&&vt<28&&e.legs>.9;e.touchdown={t:n,vr:y,vh:M,dist:vt,tilt:Vt};const j=this.result;j.boosterLanded=Dt,j.boosterDistM=vt,j.boosterTouchdownSpeed=Math.hypot(y,M),j.touchdownTime=n,j.boosterPropLeft=e.prop,e.landed=Dt,e.crashed=!Dt,e.phase=Dt?"landed":"crashed",e.throttle=0,e.engines=0,e.vx=0,e.vy=0;const nt=(Ne+this.lzAlt)/St;e.x*=nt,e.y*=nt,Dt&&(e.ang=Math.atan2(e.x,e.y)),e.alt=this.lzAlt,e.speed=0,this.emit("TOUCHDOWN")}}}const Jh=56e3,Qh=.7,tu=.56,Eo=0*on,Ba=1.4,E1=0,A1=260,eu=`
float hash13(vec3 p){ p = fract(p * 0.1031); p += dot(p, p.zyx + 31.32); return fract((p.x + p.y) * p.z); }
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p); f = f*f*f*(f*(f*6.0-15.0)+10.0);
  float a = hash13(i), b = hash13(i+vec3(1,0,0)), c = hash13(i+vec3(0,1,0)), d = hash13(i+vec3(1,1,0));
  float e = hash13(i+vec3(0,0,1)), g = hash13(i+vec3(1,0,1)), h = hash13(i+vec3(0,1,1)), k = hash13(i+vec3(1,1,1));
  return mix(mix(mix(a,b,f.x), mix(c,d,f.x), f.y), mix(mix(e,g,f.x), mix(h,k,f.x), f.y), f.z);
}
const mat3 NROT = mat3(0.00, 0.80, 0.60, -0.80, 0.36, -0.48, -0.60, -0.48, 0.64);
float fbm3(vec3 p){ float v = 0.0, a = 0.5; for(int i=0;i<5;i++){ v += a*vnoise3(p); p = NROT*p*2.03 + 7.1; a *= 0.5; } return v; }
float fbm3lo(vec3 p){ float v = 0.0, a = 0.5; for(int i=0;i<3;i++){ v += a*vnoise3(p); p = NROT*p*2.03 + 7.1; a *= 0.5; } return v; }
`,nu=`
const float H_ATM = 8000.0;
float airMassUp(float mu, float camAlt){
  float dens = exp(-max(camAlt, 0.0) / H_ATM);
  float m = abs(mu);
  return dens / (m + 0.025 * exp(-11.0 * m));
}
`;class C1{constructor(t){this.engine=t;const e=new I(..._f);this.uniforms={uUp:{value:new I(0,1,0)},uSun:{value:e},uCamAlt:{value:2},uR:{value:Ne},uTime:{value:0}};const n=new je(1,48,24);this.domeMat=new Ie({uniforms:this.uniforms,side:en,depthTest:!1,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main(){
          vDir = position;
          vec4 mv = modelViewMatrix * vec4(position * 1000.0, 1.0);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        precision highp float;
        varying vec3 vDir;
        uniform vec3 uUp, uSun; uniform float uCamAlt, uR, uTime;
        ${eu}
        ${nu}
        void main(){
          vec3 d = normalize(vDir);
          float mu = dot(d, uUp);
          float camR = uR + max(uCamAlt, 1.0);
          float amUp = airMassUp(mu, uCamAlt);
          float am = amUp;
          if (mu < 0.0) {
            float zt = camR * sqrt(max(1.0 - mu*mu, 0.0)) - uR;   // tangent altitude of the ray
            am = max(76.0 * exp(-max(zt, 0.0) / H_ATM) - amUp, amUp);
          }
          float bright = 1.0 - exp(-am * 1.15);
          float whiten = 1.0 - exp(-am * 0.05);
          vec3 zen = vec3(0.065, 0.20, 0.62);
          vec3 hor = vec3(0.62, 0.78, 0.98);
          vec3 col = mix(zen, hor, whiten) * bright * 1.25;
          // sun
          float cs = dot(d, uSun);
          float sunVis = exp(-am * 0.012);
          col += vec3(1.0, 0.86, 0.66) * pow(max(cs, 0.0), 24.0) * 0.22 * bright;
          col += vec3(1.0, 0.92, 0.80) * pow(max(cs, 0.0), 900.0) * 2.0 * sunVis;
          col += vec3(1.0, 0.96, 0.9) * smoothstep(0.99962, 0.99985, cs) * 40.0 * sunVis;
          // fair-weather clouds seen from below (fade out as the camera climbs through them)
          float cloudFade = (1.0 - smoothstep(1200.0, 2600.0, uCamAlt));
          if (mu > 0.02 && cloudFade > 0.0) {
            vec2 uv = d.xz / (mu + 0.08) * 1.3 + vec2(uTime * 0.004, 0.0);
            vec3 cp = NROT * vec3(uv * 1.7, 3.0);
            cp += 1.1 * vec3(fbm3lo(cp * 0.6 + 2.3), fbm3lo(cp * 0.6 + 6.1), fbm3lo(cp * 0.6 + 9.7));
            float c = fbm3(cp);
            float cov = smoothstep(0.52, 0.78, c) * smoothstep(0.02, 0.2, mu) * cloudFade;
            vec3 cc = mix(vec3(0.78, 0.82, 0.9), vec3(1.25, 1.22, 1.16), smoothstep(0.55, 0.9, c));
            col = mix(col, cc, cov * 0.85);
          }
          // stars: only where the sky itself is dark
          float dark = pow(1.0 - bright, 16.0);
          if (dark > 0.01) {
            vec3 p = d * 190.0; vec3 ip = floor(p); vec3 fp = fract(p) - 0.5;
            float h = hash13(ip);
            float star = step(0.9972, h) * smoothstep(0.42, 0.0, length(fp));
            float tw = 0.5 + 2.5 * fract(h * 917.0);
            col += vec3(0.9, 0.95, 1.0) * star * tw * dark;
            vec3 p2 = d * 70.0; vec3 ip2 = floor(p2); vec3 fp2 = fract(p2) - 0.5;
            float h2 = hash13(ip2 + 19.0);
            col += vec3(1.0, 0.9, 0.8) * step(0.9988, h2) * smoothstep(0.25, 0.0, length(fp2)) * 6.0 * dark;
          }
          gl_FragColor = vec4(col, 1.0);
        }`}),this.dome=new Ae(n,this.domeMat),this.dome.frustumCulled=!1,this.dome.renderOrder=-1e3,t.scene.add(this.dome),t.markNoAO(this.dome),this.earthUniforms={uSun:{value:e},uCamPos:{value:new I},uCamAlt:{value:2},uR:{value:Ne},uSunI:{value:1.05},uAmb:{value:new I(.22,.27,.34)},uTime:{value:0}};const i=R1();this.earthMat=new Ie({uniforms:this.earthUniforms,depthTest:!1,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vPos;
        void main(){
          vPos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }`,fragmentShader:`
        precision highp float;
        varying vec3 vPos;
        uniform vec3 uSun, uCamPos, uAmb; uniform float uCamAlt, uR, uSunI, uTime;
        ${eu}
        ${nu}
        void main(){
          vec3 n = normalize(vPos + vec3(0.0, uR, 0.0));
          vec3 toCam = uCamPos - vPos;
          float dist = length(toCam);
          vec3 v = toCam / dist;
          float east = vPos.x, south = vPos.z;
          float surf = length(vPos.xz);
          // coastline near the site (matches the ground texture), continents by noise far away
          float coast = 560.0 + 170.0 * sin(south / 1300.0) + 80.0 * sin(south / 410.0 + 1.3);
          // the shoreline meanders at regional scale (zero offset and slope at the site itself)
          coast += 7000.0 * (1.0 - cos(south / 19000.0)) - 15000.0 * (1.0 - cos(south / 52000.0 + 0.0));
          coast += (fbm3lo(vec3(south / 30000.0, 2.0, 7.0)) - 0.5) * 70000.0 * smoothstep(6000.0, 70000.0, abs(south));
          float bigN = fbm3(n * 5.0 + 11.0);
          float local = smoothstep(-120.0, 120.0, coast + (fbm3lo(vec3(vPos.xz / 900.0, 1.0)) - 0.5) * 420.0 - east);
          float far = smoothstep(0.50, 0.56, bigN + 0.08 * fbm3lo(n * 40.0));
          float land = mix(local, far, smoothstep(90000.0, 420000.0, surf));
          float det = fbm3(n * 260.0);
          float det2 = fbm3lo(vec3(vPos.xz / 240.0, 4.0));
          vec3 landCol = mix(vec3(0.060, 0.090, 0.034), vec3(0.19, 0.17, 0.10), smoothstep(0.35, 0.75, det));
          landCol = mix(landCol, vec3(0.072, 0.088, 0.034) * (0.8 + det2 * 0.5), 1.0 - smoothstep(4000.0, 30000.0, surf));
          vec3 seaCol = mix(vec3(0.010, 0.055, 0.115), vec3(0.016, 0.105, 0.150), smoothstep(0.3, 0.8, det));
          vec3 col = mix(seaCol, landCol, land);
          float ndl = max(dot(n, uSun), 0.0);
          vec3 lit = col * (uSunI * ndl + uAmb);
          // sun glint on water
          vec3 hv = normalize(uSun + v);
          lit += (1.0 - land) * vec3(1.0, 0.95, 0.85) * pow(max(dot(n, hv), 0.0), 220.0) * 1.6 * ndl;
          // cloud deck, visible from above
          vec3 cq = NROT * (n * 170.0);
          cq += 1.6 * vec3(fbm3lo(cq * 0.45 + 1.7), fbm3lo(cq * 0.45 + 5.2), fbm3lo(cq * 0.45 + 9.1));
          float cl = fbm3(cq + vec3(uTime * 0.0006, 0.0, 0.0));
          float cl2 = fbm3lo(NROT * (n * 34.0) + 3.0 + cl * 0.6);
          float cov = smoothstep(0.52, 0.72, cl * 0.75 + cl2 * 0.4) * smoothstep(1500.0, 9000.0, uCamAlt);
          cov *= smoothstep(2500.0, 14000.0, surf);
          lit = mix(lit, vec3(1.0) * (uSunI * ndl * 0.92 + 0.3), cov * 0.92);
          // aerial perspective
          float mu = max(dot(n, v), 0.0);
          float am = (1.0 - exp(-max(uCamAlt, 0.0) / H_ATM)) / (mu + 0.025 * exp(-11.0 * mu));
          float lowHaze = (1.0 - exp(-dist / 26000.0)) * exp(-max(uCamAlt, 0.0) / 6000.0);
          float haze = 1.0 - exp(-am * 0.11);
          haze = max(haze, lowHaze);
          vec3 hazeCol = mix(vec3(0.30, 0.50, 0.92), vec3(0.66, 0.80, 0.98), max(haze * haze, lowHaze)) * (0.25 + 0.95 * ndl);
          lit = mix(lit, hazeCol, clamp(haze, 0.0, 1.0) * 0.92);
          gl_FragColor = vec4(lit, 1.0);
        }`}),this.earth=new Ae(i,this.earthMat),this.earth.frustumCulled=!1,this.earth.renderOrder=-900,this.earthAnchor=new Yt,this.earthAnchor.add(this.earth),t.addAnchor(this.earthAnchor,new I(0,0,0)),t.markNoAO(this.earth),this._up=new I}buildEnvironment(){const t=new hc,e=new Ae(new je(1,32,16),this.domeMat);e.frustumCulled=!1,t.add(e);const n=new Ae(new Ai(900,24),new ai({color:4869960}));n.rotation.x=-Math.PI/2,n.position.y=-4,t.add(n);const i=this.engine.pmrem.fromScene(t,.02,.5,3e3);this.engine.envOutdoor=i.texture,e.geometry.dispose(),n.geometry.dispose()}update(t,e){const n=t.x,i=t.y+Ne,r=t.z,o=Math.sqrt(n*n+i*i+r*r),a=o-Ne;return this._up.set(n/o,i/o,r/o),this.uniforms.uUp.value.copy(this._up),this.uniforms.uCamAlt.value=a,this.uniforms.uTime.value=e,this.earthUniforms.uCamPos.value.copy(t),this.earthUniforms.uCamAlt.value=a,this.earthUniforms.uTime.value=e,this.dome.position.copy(this.engine.camera.position),this.camAlt=a,a}}function R1(){const e=[],n=[];for(let r=0;r<=150;r++){const o=r/150,a=Math.PI*Math.pow(o,3.2),l=Math.sin(a);for(let c=0;c<=160;c++){const h=c/160*Math.PI*2,u=-Ne*(2*Math.sin(a/2)**2);e.push(Ne*l*Math.cos(h),u,Ne*l*Math.sin(h))}}for(let r=0;r<150;r++)for(let o=0;o<160;o++){const a=r*161+o,l=a+160+1;n.push(a,a+1,l,l,a+1,l+1)}const i=new Ve;return i.setAttribute("position",new ee(e,3)),i.setIndex(n),i}class P1{constructor(){this.list=[],this.floors=[]}box(t,e,n,i,r=0,o=6,a=""){const l={kind:0,x0:Math.min(t,n),x1:Math.max(t,n),z0:Math.min(e,i),z1:Math.max(e,i),y0:r,y1:o,on:!0,tag:a,tall:o-r>2.2};return this.list.push(l),l}boxC(t,e,n,i,r=0,o=6,a=""){return this.box(t-n,e-i,t+n,e+i,r,o,a)}circle(t,e,n,i=0,r=6,o=""){const a={kind:1,x:t,z:e,r:n,y0:i,y1:r,on:!0,tag:o,tall:r-i>2.2};return this.list.push(a),a}floor(t,e,n,i,r,o=""){const a={x0:t,z0:e,x1:n,z1:i,y:r,on:!0,tag:o};return this.floors.push(a),a}floorAt(t,e,n){let i=0;const r=this.floors;for(let o=0;o<r.length;o++){const a=r[o];a.on&&t>=a.x0&&t<=a.x1&&e>=a.z0&&e<=a.z1&&a.y<=n+.6&&a.y>i&&(i=a.y)}return i}resolve(t,e,n=1.8){let i=0;const r=this.list;for(let o=0;o<3;o++){let a=!1;for(let l=0;l<r.length;l++){const c=r[l];if(c.on&&!(t.y>=c.y1-.05||t.y+n<=c.y0))if(c.kind===0){if(t.x<c.x0-e||t.x>c.x1+e||t.z<c.z0-e||t.z>c.z1+e)continue;const h=t.x<c.x0?c.x0:t.x>c.x1?c.x1:t.x,u=t.z<c.z0?c.z0:t.z>c.z1?c.z1:t.z;let f=t.x-h,d=t.z-u;const g=f*f+d*d;if(g>=e*e)continue;if(g>1e-10){const x=Math.sqrt(g),p=e-x;t.x+=f/x*p,t.z+=d/x*p}else{const x=t.x-c.x0,p=c.x1-t.x,m=t.z-c.z0,y=c.z1-t.z,M=Math.min(x,p,m,y);M===x?t.x=c.x0-e:M===p?t.x=c.x1+e:M===m?t.z=c.z0-e:t.z=c.z1+e}a=!0,i++}else{const h=t.x-c.x,u=t.z-c.z,f=c.r+e,d=h*h+u*u;if(d>=f*f)continue;const g=Math.sqrt(d);g>1e-6?(t.x=c.x+h/g*f,t.z=c.z+u/g*f):t.x=c.x+f,a=!0,i++}}if(!a)break}return i}inside(t,e,n,i=.12){const r=this.list;for(let o=0;o<r.length;o++){const a=r[o];if(a.on&&!(e>=a.y1-.05||e+1.8<=a.y0))if(a.kind===0){if(t>a.x0+i&&t<a.x1-i&&n>a.z0+i&&n<a.z1-i)return a}else{const l=t-a.x,c=n-a.z;if(l*l+c*c<(a.r-i)*(a.r-i))return a}}return null}boom(t,e,n,i,r,o){const a=i-t,l=r-e,c=o-n,h=Math.sqrt(a*a+l*l+c*c),u=Math.max(2,Math.ceil(h/.3)),f=this.list;for(let d=1;d<=u;d++){const g=d/u,x=t+a*g,p=e+l*g,m=n+c*g;for(let y=0;y<f.length;y++){const M=f[y];if(!(!M.on||!M.tall||M.nocam)&&!(p>M.y1+.2||p<M.y0-.2))if(M.kind===0){if(x>M.x0-.25&&x<M.x1+.25&&m>M.z0-.25&&m<M.z1+.25)return Math.max(.08,(d-1)/u)}else{const v=x-M.x,w=m-M.z;if(v*v+w*w<(M.r+.25)*(M.r+.25))return Math.max(.08,(d-1)/u)}}}return 1}}const iu=new $t,Bs=new Je,ks=new I,Hs=new I,su=new ln,Ao=new Wt,Vs=new I,ru=new I(0,1,0),is={};function D1(s){return is[s]||(s==="box"?is[s]=new re(1,1,1):s==="cyl"?is[s]=new xe(1,1,1,14):s==="cyl24"?is[s]=new xe(1,1,1,28):s==="cone"?is[s]=new xe(0,1,1,20,1,!0):s==="sphere"&&(is[s]=new je(1,16,12))),is[s]}class Le{constructor(){this.lists=new Map}_add(t,e,n){const i=t+"|"+e.uuid;let r=this.lists.get(i);r||(r={kind:t,mat:e,m:[],c:[]},this.lists.set(i,r)),iu.compose(Hs,Bs,ks);for(let o=0;o<16;o++)r.m.push(iu.elements[o]);Ao.set(n),r.c.push(Ao.r,Ao.g,Ao.b)}box(t,e,n,i,r,o,a,l=16777215,c=0,h=0,u=0){Hs.set(e,n,i),Bs.setFromEuler(su.set(h,c,u)),ks.set(r,o,a),this._add("box",t,l)}cyl(t,e,n,i,r,o,a=16777215,l=0,c=0,h="cyl"){Hs.set(e,n,i),Bs.setFromEuler(su.set(l,0,c)),ks.set(r,o,r),this._add(h,t,a)}sphere(t,e,n,i,r,o=16777215,a=1){Hs.set(e,n,i),Bs.identity(),ks.set(r,r*a,r),this._add("sphere",t,o)}beam(t,e,n,i,r=i,o=16777215){Vs.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]);const a=Vs.length();Hs.set((e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2),Bs.setFromUnitVectors(ru,Vs.normalize()),ks.set(i,a,r),this._add("box",t,o)}pipe(t,e,n,i,r=16777215){Vs.set(n[0]-e[0],n[1]-e[1],n[2]-e[2]);const o=Vs.length();Hs.set((e[0]+n[0])/2,(e[1]+n[1])/2,(e[2]+n[2])/2),Bs.setFromUnitVectors(ru,Vs.normalize()),ks.set(i,o,i),this._add("cyl",t,r)}build(t,{cast:e=!0,receive:n=!0}={}){const i=[];for(const r of this.lists.values()){const o=r.m.length/16,a=new us(D1(r.kind),r.mat,o);a.instanceMatrix.array.set(r.m),a.instanceColor=new tr(new Float32Array(r.c),3),a.castShadow=e,a.receiveShadow=n,a.computeBoundingSphere(),a.computeBoundingBox(),t.add(a),i.push(a)}return this.lists.clear(),i}}function ei(s,t,e,n,i=64,r=0,o=1,a=1,l=!1,c=!1){const h=[],u=[],f=[],d=[],g=(s-t)/(n-e),x=1/Math.sqrt(1+g*g);for(let y=0;y<=1;y++){const M=y?t:s,v=y?n:e,w=y?o:r;for(let T=0;T<=i;T++){const C=T/i*Math.PI*2,b=Math.sin(C),_=Math.cos(C);h.push(M*b,v,M*_),f.push(b*x,g*x,_*x),u.push(T/i*a,w)}}for(let y=0;y<i;y++){const M=y,v=y+1,w=y+i+1,T=w+1;d.push(M,v,w,v,T,w)}const p=(y,M,v,w)=>{const T=h.length/3;h.push(0,M,0),f.push(0,w?1:-1,0),u.push(.5,v);for(let C=0;C<=i;C++){const b=C/i*Math.PI*2;h.push(y*Math.sin(b),M,y*Math.cos(b)),f.push(0,w?1:-1,0),u.push(C/i*a,v)}for(let C=0;C<i;C++)w?d.push(T,T+1+C,T+2+C):d.push(T,T+2+C,T+1+C)};l&&p(s,e,r,!1),c&&p(t,n,o,!0);const m=new Ve;return m.setAttribute("position",new ee(h,3)),m.setAttribute("normal",new ee(f,3)),m.setAttribute("uv",new ee(u,2)),m.setIndex(d),m}function yt(s,t,{cast:e=!0,receive:n=!0,x:i=0,y:r=0,z:o=0,rx:a=0,ry:l=0,rz:c=0,parent:h=null}={}){const u=new Ae(s,t);return u.castShadow=e,u.receiveShadow=n,u.position.set(i,r,o),u.rotation.set(a,l,c),h&&h.add(u),u}const We=Math.PI;function I1(s,t,e=.2){const n=new Fe(s,t),i=n.attributes.uv;for(let r=0;r<i.count;r++)i.setXY(r,i.getX(r)*s*e,i.getY(r)*t*e);return n}function L1(s,t,e){const n={fixtures:[],consoles:[],cranes:[]},i=new Yt;s.addAnchor(i),n.root=i;const r=new Le,o=new Ms(4242),a=new Ee({map:h1(6e3),roughness:1,metalness:0,transparent:!0}),l=u1([1,1]);a.onBeforeCompile=N=>{N.uniforms.uDetail={value:l},N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uDetail;`).replace("#include <map_fragment>",`#include <map_fragment>
        diffuseColor.rgb *= 0.66 + 0.62 * texture2D(uDetail, vMapUv * 431.0).r * (0.6 + 0.8 * texture2D(uDetail, vMapUv * 37.3 + 0.37).r);`)};const c=yt(new Fe(6e3,6e3),a,{cast:!1,rx:-We/2,parent:i});c.renderOrder=-500,n.ground=c;const h=N=>{const O=N.clone();return O.polygonOffset=!0,O.polygonOffsetFactor=-2,O.polygonOffsetUnits=-6,O},u=h(t.concrete),f=h(new Ee({map:f1([1,1]).map,roughness:.95})),d=(N,O,rt,ht,P,Y,$=.16)=>yt(I1(rt-N,ht-O,$),Y,{cast:!1,rx:-We/2,x:(N+rt)/2,y:P,z:(O+ht)/2,parent:i});d(-125,-62,128,62,.05,u),d(128,-9.5,205,9.5,.06,f,.2),d(54,62,66,122,.06,f,.2),d(100,-110,112,-62,.06,f,.2);for(const N of[-3,3])r.box(t.metal,150,.12,N,110,.14,.22,6975350);for(const N of[-9.1,9.1])r.box(t.matte,166,.075,N,76,.02,.25,15778816);const g=yt(new Ai(Bt.apron,64),u,{cast:!1,rx:-We/2,x:Bt.x,y:.07,z:Bt.z,parent:i});{const N=g.geometry.attributes.uv;for(let O=0;O<N.count;O++)N.setXY(O,N.getX(O)*20,N.getY(O)*20)}const x=yt(new Ai(26,40),new ai({map:Ef(),color:0,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-10}),{cast:!1,receive:!1,rx:-We/2,x:Bt.x+4,y:.09,z:Bt.z,parent:i});s.markNoAO(x),yt(new xe(pe.r+2,pe.r+3,pe.y,64),t.concreteDark,{x:pe.x,y:pe.y/2,z:pe.z,parent:i}),yt(new Ai(pe.r+1.5,64),h(new Ee({map:d1(),roughness:.9})),{cast:!1,rx:-We/2,x:pe.x,y:pe.y+.02,z:pe.z,parent:i}),e.floor(pe.x-22,pe.z-22,pe.x+22,pe.z+22,pe.y,"lz");{const O=new us(new _c(1,1),new Ee({color:16777215,roughness:1}),420),rt=new $t,ht=new Je,P=new I,Y=new I,$=new Wt;let Z=0;for(;Z<420;){const k=o.range(-520,500),tt=o.range(-460,520);if(k>-135&&k<215&&tt>-72&&tt<72||Math.hypot(k-Bt.x,tt-Bt.z)<76||Math.hypot(k-pe.x,tt-pe.z)<42||k>46&&k<74&&tt>60&&tt<124||k>Ec(tt)-40)continue;const it=o.range(.9,3.4);Y.set(k,it*.35,tt),P.set(it*o.range(.9,1.5),it*o.range(.5,.9),it*o.range(.9,1.5)),ht.setFromEuler(new ln(0,o.next()*6.28,0)),rt.compose(Y,ht,P),O.setMatrixAt(Z,rt),$.setRGB(.09+o.next()*.07,.17+o.next()*.1,.06+o.next()*.04),O.setColorAt(Z,$),Z++}O.castShadow=!0,O.receiveShadow=!0,i.add(O)}const p=cn,m=p.x1-p.x0,y=p.z1-p.z0,M=[];for(let N=0;N<9;N++)for(const O of[-22,0,22])M.push({x:-80+N*20,z:O,r:19,a:.5});n.fixtures=M;const v=new Ee({map:p1($h),roughnessMap:Sf([24,9],3).roughnessMap,roughness:.62,metalness:0,lightMap:m1($h,M),lightMapIntensity:1.5});v.lightMap.channel=0,v.polygonOffset=!0,v.polygonOffsetFactor=-3,v.polygonOffsetUnits=-10,yt(new Fe(m,y),v,{cast:!1,rx:-We/2,y:.1,parent:i}),e.floor(p.x0,p.z0,p.x1,p.z1,.1,"hangar");const w=(N,O)=>{const rt=new Fe(N,O),ht=rt.attributes.uv;for(let P=0;P<ht.count;P++)ht.setXY(P,ht.getX(P)*N/3.2,ht.getY(P)*O/8);return rt},T=(N,O,rt,ht,P,Y)=>yt(w(N,O),t.corrugated,{x:rt,y:ht,z:P,ry:Y,parent:i});T(m,p.wallH,0,p.wallH/2,p.z0,0),T(m,p.wallH,0,p.wallH/2,p.z1,We),T(y,p.wallH,p.x0,p.wallH/2,0,We/2);const C=p.z1-p.doorHalf;T(C,p.wallH,p.x1,p.wallH/2,-24.5,-We/2),T(C,p.wallH,p.x1,p.wallH/2,p.doorHalf+C/2,-We/2),T(p.doorHalf*2,p.wallH-p.doorH,p.x1,(p.wallH+p.doorH)/2,0,-We/2);for(const N of[p.x0,p.x1]){const O=new Wo;O.moveTo(-35,0),O.lineTo(35,0),O.lineTo(0,p.ridgeH-p.wallH),O.closePath();const rt=new yc(O),ht=rt.attributes.uv;for(let P=0;P<ht.count;P++)ht.setXY(P,ht.getX(P)/3.2,ht.getY(P)/8);yt(rt,t.corrugated,{x:N,y:p.wallH,ry:We/2,parent:i})}r.box(t.matte,0,.7,p.z0+.25,m,1.4,.5,9211794),r.box(t.matte,0,.7,p.z1-.25,m,1.4,.5,9211794),r.box(t.matte,p.x0+.25,.7,0,.5,1.4,y,9211794);const b=Math.hypot(35,p.ridgeH-p.wallH)+.6,_=Math.atan2(p.ridgeH-p.wallH,35);for(const N of[-1,1]){const O=yt(new Fe(m+2,b),t.roof,{parent:i});O.position.set(0,(p.wallH+p.ridgeH)/2,N*17.5),O.rotation.x=-We/2+N*_}for(const N of[-1,1])r.box(t.skylight,0,p.ridgeH-1.9-0,N*6.5,m-12,.12,3.2,16777215,0,N*_,0);e.box(p.x0-1,p.z0-1,p.x1+1,p.z0+.5,0,30,"wall"),e.box(p.x0-1,p.z1-.5,p.x1+1,p.z1+1,0,30,"wall"),e.box(p.x0-1,p.z0,p.x0+.5,p.z1,0,30,"wall"),e.box(p.x1-.5,p.z0,p.x1+1,-14,0,30,"wall"),e.box(p.x1-.5,p.doorHalf,p.x1+1,p.z1,0,30,"wall");const S=3360348;for(let N=0;N<=19;N++){const O=p.x0+.6+N*((m-1.2)/19);for(const P of[-1,1])r.box(t.paint,O,p.wallH/2,P*34.45,.7,p.wallH,.7,S),r.box(t.paint,O,21.4,P*33.7,.6,.5,1.4,S);const rt=25.6,ht=P=>p.ridgeH-Math.abs(P)/35*(p.ridgeH-p.wallH)-.45;r.beam(t.paint,[O,rt,-34.2],[O,rt,34.2],.3,.3,S),r.beam(t.paint,[O,ht(-34.2),-34.2],[O,ht(0),0],.3,.3,S),r.beam(t.paint,[O,ht(34.2),34.2],[O,ht(0),0],.3,.3,S);for(let P=-6;P<=6;P++){const Y=P*5.4;if(r.beam(t.paint,[O,rt,Y],[O,ht(Y),Y],.16,.16,S),P<6){const $=(P+1)*5.4;P<0?r.beam(t.paint,[O,rt,Y],[O,ht($),$],.14,.14,S):r.beam(t.paint,[O,ht(Y),Y],[O,rt,$],.14,.14,S)}}}for(const N of[-30,-20,-10,10,20,30]){const O=p.ridgeH-Math.abs(N)/35*(p.ridgeH-p.wallH)-.2;r.box(t.paint,0,O,N,m-1,.22,.22,S)}for(const N of[-1,1])r.box(t.paint,0,22,N*33.2,m-2,.7,.5,14723072),r.box(t.metal,0,22.42,N*33.2,m-2,.12,.16,10133670);const E=new xe(.55,.75,.35,14),L=new us(E,t.gunmetal,M.length),U=new us(new Ai(.62,16),t.lampWarm,M.length),B=new Ie({transparent:!0,depthWrite:!1,side:Ke,blending:er,fog:!1,uniforms:{uColor:{value:new Wt(1,.92,.78)},uOpacity:{value:.13}},vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * instanceMatrix * vec4(position,1.0);
      vN = normalize(normalMatrix * mat3(instanceMatrix) * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform vec3 uColor; uniform float uOpacity; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ float f = abs(dot(normalize(vN), normalize(vV))); float a = uOpacity * pow(f, 1.6) * (0.25 + 0.95 * vUv.y * vUv.y);
      gl_FragColor = vec4(uColor * a, a); }`}),F=new us(new xe(.07,1,1,24,1,!0),B,M.length);{const N=new $t,O=new Je,rt=new I,ht=new I(1,1,1),P=new Je().setFromEuler(new ln(We/2,0,0));M.forEach((Y,$)=>{N.compose(rt.set(Y.x,25.25,Y.z),O.identity(),ht.set(1,1,1)),L.setMatrixAt($,N),N.compose(rt.set(Y.x,25.06,Y.z),P,ht.set(1,1,1)),U.setMatrixAt($,N),N.compose(rt.set(Y.x,12.6,Y.z),O.identity(),ht.set(9.5,25,9.5)),F.setMatrixAt($,N)})}F.frustumCulled=!1,F.renderOrder=5,i.add(L,U,F),s.markNoAO(F),n.shafts=F,n.stationSpots=[];const q=(N,O,rt=1500,ht=.78)=>{const P=new yh(16773340,rt,80,ht,.75,2);return P.position.set(N,25,O),P.target.position.set(N,0,O),i.add(P,P.target),P},X=[[-62,-22],[-56,21],[-60,0],[-84,21],[4,0],[62,0],[-12,-18],[30,17],[80,-6]];n.pools=[0,1].map(N=>{const O=q(X[N][0],X[N][1]);return O.userData.site=N,O.userData.k=1,O}),n.updatePools=(N,O,rt)=>{let ht=-1,P=-1,Y=1e9,$=1e9;for(let k=0;k<X.length;k++){const tt=Math.hypot(X[k][0]-N,X[k][1]-O);tt<Y?(P=ht,$=Y,ht=k,Y=tt):tt<$&&(P=k,$=tt)}const Z=[ht,P];for(const k of n.pools){const tt=Z.indexOf(k.userData.site);tt>=0?(Z.splice(tt,1),k.userData.k=Math.min(1,k.userData.k+rt*2.2),k.userData.keep=!0):(k.userData.k=Math.max(0,k.userData.k-rt*2.2),k.userData.keep=!1)}for(const k of n.pools){if(!k.userData.keep&&k.userData.k<=0&&Z.length){const tt=Z.shift();k.userData.site=tt,k.position.set(X[tt][0],25,X[tt][1]),k.target.position.set(X[tt][0],0,X[tt][1]),k.target.updateMatrixWorld()}k.intensity=1500*k.userData.k}};const H=new yh(16774114,1700,90,.92,.85,2);H.castShadow=!0,H.shadow.mapSize.set(2048,2048),H.shadow.camera.near=6,H.shadow.camera.far=46,H.shadow.bias=-8e-4,H.shadow.normalBias=.04,i.add(H,H.target),n.keySpot=H;const st=new Ee({color:13620699,map:t.corrMaps.map,normalMap:t.corrMaps.normalMap,metalness:.5,roughness:.5}),ut=[];for(const N of[-1,1]){const O=new Yt,rt=new re(.5,p.doorH,p.doorHalf),ht=rt.attributes.uv;for(let Y=0;Y<ht.count;Y++)ht.setXY(Y,ht.getX(Y)*4.5,ht.getY(Y)*3);yt(rt,st,{parent:O,y:p.doorH/2}),yt(new re(.56,1.2,p.doorHalf),t.hazard,{parent:O,y:.6}),yt(new re(.6,.5,p.doorHalf),t.navy,{parent:O,y:p.doorH-3}),O.position.set(p.x1+.45,0,N*p.doorHalf/2),i.add(O);const P=e.box(p.x1-.3,N<0?-14:0,p.x1+.9,N<0?0:p.doorHalf,0,24,"door");ut.push({g:O,s:N,c:P})}r.box(t.paint,p.x1+.45,p.doorH+.5,0,.9,.8,60,S),n.setDoors=N=>{for(const O of ut){const rt=O.s*(p.doorHalf/2+N*p.doorHalf);O.g.position.z=rt,O.c.z0=rt-p.doorHalf/2,O.c.z1=rt+p.doorHalf/2}n.doorOpen=N},n.setDoors(0);const ct=new Ee({map:Zh(!0),transparent:!0,roughness:.6,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-8}),St=new Ee({map:Zh(!1),transparent:!0,roughness:.6});yt(new Fe(64,16),ct,{cast:!1,x:-20,y:14,z:p.z1+.25,parent:i}),yt(new Fe(64,16),ct,{cast:!1,x:20,y:14,z:p.z0-.25,ry:We,parent:i}),yt(new Fe(22,5.5),ct,{cast:!1,x:p.x1+.3,y:27.6,z:0,ry:We/2,parent:i});const vt=(N,O,rt,ht,P,Y)=>{const $=new Yt;yt(new Fe(N,O),t.navy,{parent:$,cast:!1}),yt(new Fe(N*.9,N*.225),St,{parent:$,cast:!1,z:.03}),$.position.set(rt,ht,P),$.rotation.y=Y,i.add($)};vt(26,8,p.x0+.5,15,0,We/2),vt(20,6,12,17.5,p.z0+.45,0),vt(20,6,30,17.5,p.z1-.45,We);const Vt=N=>{const O=new Yt,rt=new Le;for(const it of[-1,1])rt.box(t.paint,it,23,0,.6,1.3,66.6,15905792);for(const it of[-1,1])rt.box(t.paint,0,22.9,it*33.2,4.2,.9,.8,15905792);rt.box(t.paint,0,23,0,2.6,.2,.6,2303531),rt.build(O,{cast:!1});const ht=new Yt,P=new Le;P.box(t.paint,0,23.95,0,3,.7,2.4,2830392),P.cyl(t.metal,0,24.45,0,.42,1.9,9080984,0,We/2),P.box(t.paint,1.1,24.5,0,.5,.5,1,16742938),P.build(ht,{cast:!1}),O.add(ht);const Y=yt(new re(.07,1,.07),t.gunmetal,{parent:ht,cast:!1}),$=yt(new re(.07,1,.07),t.gunmetal,{parent:ht,cast:!1}),Z=new Yt,k=new Le;k.box(t.paint,0,.55,0,.9,.7,.5,15905792),k.box(t.paint,0,.12,0,.5,.24,4.6,15905792),k.box(t.metal,0,-.7,-2.2,.12,1.5,.08,3159098),k.box(t.metal,0,-.7,2.2,.12,1.5,.08,3159098),k.build(Z),ht.add(Z),O.position.x=N,i.add(O);const tt={g:O,trolley:ht,block:Z,cable:Y,cable2:$,x:N,z:0,hookY:20,set(it,ft,kt){this.x=it,this.z=ft,this.hookY=kt,O.position.x=it,ht.position.z=ft;const Ut=23.7,D=Math.min(kt,Ut-1.4);Z.position.y=D;const A=Ut-(D+.9);for(const[G,J]of[[Y,-.25],[$,.25]])G.position.set(J,D+.9+A/2,0),G.scale.y=A}};return tt.set(N,0,20),tt};for(const N of[-49,-61,-4,15])n.cranes.push(Vt(N));const Dt=(N,O,rt,ht,P=1.6,Y=!1)=>{const $=[[N,O,rt,O],[rt,O,rt,ht],[rt,ht,N,ht],[N,ht,N,O]];for(const[Z,k,tt,it]of $){const ft=Math.hypot(tt-Z,it-k),kt=Math.max(1,Math.round(ft/2.5));for(let Ut=0;Ut<=kt;Ut++){const D=Ut/kt;r.box(t.paint,Z+(tt-Z)*D,P/2+.1,k+(it-k)*D,.09,P,.09,15778816)}if(r.beam(t.paint,[Z,P+.1,k],[tt,P+.1,it],.08,.08,15778816),r.beam(t.paint,[Z,P*.55,k],[tt,P*.55,it],.05,.05,2830392),r.beam(t.paint,[Z,.3,k],[tt,.3,it],.05,.05,2830392),Y){const Ut=yt(new Fe(ft,P-.2),t.glass,{cast:!1,receive:!1,parent:i});Ut.position.set((Z+tt)/2,P/2+.1,(k+it)/2),Ut.rotation.y=Math.atan2(tt-Z,it-k)+We/2,s.markNoAO(Ut)}}};for(const N of Tc){const O=N.id==="capsule";Dt(N.x0,Math.max(N.z0,p.z0+.6),N.x1,N.z1,O?4.2:1.6,O),e.box(N.x0,N.z0,N.x1,N.z1,0,9,"cell").nocam=!0}for(const N of An){const O=new Yt,rt=new Le;rt.box(t.paint,0,.55,0,1.3,.9,.5,1911356),rt.box(t.paint,0,1.02,.02,1.4,.08,.62,2610115),rt.box(t.paint,0,.08,0,1.5,.12,.7,1316894),rt.build(O);const ht=yt(new Fe(1.2,.72),new Ee({color:0,emissive:16777215,emissiveMap:g1(N.id,`STATION ${String(N.n).padStart(2,"0")}`,[N.name.toUpperCase(),"STATUS  ----","SIGN-OFF REQUIRED"]),emissiveIntensity:1.6,roughness:.3}),{parent:O,cast:!1});ht.position.set(0,1.5,-.06),ht.rotation.x=-.32,yt(new re(1.3,.82,.06),t.gunmetal,{parent:O,y:1.5,z:-.1,rx:-.32});const P=t.lampRed.clone();yt(new xe(.09,.09,.22,10),P,{parent:O,x:.55,y:2.05,z:-.15,cast:!1}),yt(new xe(.03,.03,.9,6),t.gunmetal,{parent:O,x:.55,y:1.5,z:-.15,cast:!1}),O.position.set(N.console.x,.1,N.console.z),O.rotation.y=N.console.dir<0?0:We,i.add(O),e.boxC(N.console.x,N.console.z,.75,.33,0,1.6,"console");const Y=N.console.x-2.6,$=N.console.z+(N.console.dir<0?-.2:.2);r.box(t.paint,Y,2.6,$,.14,5,.14,2830392);const Z=yf("st"+N.n,1024,256,(tt,it,ft)=>{tt.fillStyle="#0b1b33",tt.fillRect(0,0,it,ft),tt.fillStyle="#27d3c3",tt.fillRect(0,0,200,ft),tt.fillStyle="#0b1b33",tt.font="700 170px Arial",tt.textAlign="center",tt.textBaseline="middle",tt.fillText(String(N.n).padStart(2,"0"),100,ft/2+8),tt.fillStyle="#f4f6f8",tt.font="700 92px Arial",tt.textAlign="left",tt.fillText(N.name.toUpperCase(),232,ft/2+6)}),k=yt(new Fe(5.6,1.4),new Ee({map:Z,emissiveMap:Z,emissive:16777215,emissiveIntensity:.35,roughness:.6,side:Ke}),{cast:!1,parent:i});k.position.set(Y+2.8,5.6,$),k.rotation.y=N.console.dir<0?0:We,n.consoles.push({st:N,lampMat:P,group:O})}const j=[9071164,3104650,8028038,11749930,4025162,13214247],nt=(N,O,rt,ht)=>{const P=Math.round(rt/3);for(let Y=0;Y<=P;Y++)for(const $ of[-.55,.55])r.box(t.paint,N+Y*3,3,O+$,.1,6,.1,2056110);for(let Y=0;Y<4;Y++){const $=.3+Y*1.7;for(const Z of[-.55,.55])r.box(t.paint,N+rt/2,$,O+Z,rt,.12,.08,15759898);for(let Z=0;Z<P;Z++){if(o.next()<.2)continue;const k=o.range(1.2,2.4),tt=o.range(.6,1.3);r.box(t.matte,N+Z*3+1.5+o.range(-.2,.2),$+.1+tt/2,O,k,tt,1,o.pick(j))}}e.box(N-.2,O-.7,N+rt+.2,O+.7,0,6.5,"rack")};nt(-30,-27,27),nt(4,-27,30),nt(-30,27,24),nt(40,27,36),nt(44,-27,30);const _t=(N,O,rt,ht,P,Y,$=t.paint)=>{r.box($,N,.1+P/2,O,rt,P,ht,Y),e.boxC(N,O,rt/2,ht/2,0,P+.2,"prop")};for(const[N,O]of[[-26,-15],[-18,-15],[20,16],[28,16],[-8,18],[48,-16],[70,16],[76,-17]])_t(N,O,2.4,.9,1,10099740),r.box(t.metal,N,1.14,O,2.5,.06,1,12172996),r.box(t.paint,N-.6,1.42,O,.5,.5,.4,2830392);for(const[N,O]of[[-12,-21],[36,20],[58,-21],[12,22]]){for(let rt=0;rt<4;rt++)r.cyl(t.paint,N+rt%2*.75,.55,O+Math.floor(rt/2)*.75,.31,.9,[2056110,11749930,14723072,3112282][rt]);e.boxC(N+.37,O+.37,.75,.75,0,1.2,"prop")}_t(84,-22,3.2,3.2,.5,2830392);{r.box(t.paint,156/2,2,(-34.4+-28)/2,28,3.8,-28- -34.4,15133164),r.box(t.paint,156/2,6,(-34.4+-28)/2,28,3.8,-28- -34.4,14672872),r.box(t.paint,156/2,4,-28+.1,28+.4,.25,.5,1911356);for(let P=0;P<6;P++)r.box(t.lampCool,64+2.6+P*4.6,6.2,-28+.03,3.4,1.6,.05,16777215),r.box(t.glassDark,64+2.6+P*4.6,2.2,-28+.03,3.4,1.8,.05,16777215);e.box(64,-34.4,92,-28+.2,0,9,"office")}r.box(t.paint,-82,5.3,p.z0+.5,6,.5,1,15778816);for(const N of[-2.9,2.9])r.box(t.paint,-82+N,2.7,p.z0+.5,.4,5.2,1,15778816);yt(new Fe(5.4,5),new ai({color:197637}),{cast:!1,receive:!1,x:-82,y:2.6,z:p.z0+.06,parent:i});for(const N of[-1.5,1.5])r.box(t.metal,-1,.17,N,186,.12,.14,8159624);for(const N of Mf);return r.build(i),n.interior=(N,O)=>N>p.x0&&N<p.x1&&O>p.z0&&O<p.z1,n}const Gs=Math.PI;function U1(s,t,e,n){const i={},r=new Le,o=3949392,a=12172998,l=Bt.x,c=Bt.z;for(const b of[-3.7,3.7])for(const _ of[-3.4,3.4])r.box(t.paint,l+b,2.9,c+_,1.3,5.8,1.3,o);for(const b of[-3.4,3.4])r.box(t.paint,l,Bt.tableTop-.45,c+b,9.2,.9,2.3,4870494);r.box(t.paint,l+3.5,Bt.tableTop-.45,c,2.2,.9,4.6,4870494);for(const[b,_]of[[0,-2.15],[0,2.15],[2.15,0]])r.box(t.paint,l+b,Bt.tableTop+.12,c+_,.7,.34,.7,16742938);yt(new xe(.4,4.4,3.4,4),t.gunmetal,{x:l+.4,y:1.75,z:c,ry:Gs/4,parent:n}),yt(new Xi(4.9,.16,8,40),t.steel,{x:l,y:5,z:c,rx:Gs/2,parent:n});for(const[b,_]of[[6.5,6.5],[6.5,-6.5],[-6.5,6.5],[-6.5,-6.5]])r.cyl(t.metal,l+b,3.2,c+_,.22,6.4,a),r.cyl(t.paint,l+b,6.6,c+_,.4,.5,11741722);e.boxC(l+.3,c,4.6,4.6,0,Bt.tableTop+.2,"mount").nocam=!0,i.rocketCollider=e.circle(l,c,2.05,0,70,"rocket"),i.rocketCollider.on=!1,i.rocketCollider.nocam=!0;const h=le,u=h.x-h.half,f=h.x+h.half,d=h.z-h.half,g=h.z+h.half;for(const b of[u,f])for(const _ of[d,g])r.box(t.paint,b,h.height/2,_,.6,h.height,.6,o);const x=5.5;for(let b=1;b*x<=h.height+.1;b++){const _=b*x,S=_-x;[[[u,d],[f,d]],[[f,d],[f,g]],[[f,g],[u,g]],[[u,g],[u,d]]].forEach(([L,U],B)=>{r.beam(t.paint,[L[0],_,L[1]],[U[0],_,U[1]],.3,.3,o),B===3&&b===1||(b%2?r.beam(t.paint,[L[0],S,L[1]],[U[0],_,U[1]],.18,.18,o):r.beam(t.paint,[L[0],_,L[1]],[U[0],S,U[1]],.18,.18,o))})}for(const b of[-1.7,1.7])r.box(t.metal,h.x+b,h.height/2,h.z-1.7,.14,h.height,.14,a);r.box(t.paint,h.x,h.height+1.4,h.z,7.4,2.8,7.4,14672872),r.cyl(t.metal,h.x,h.height+12,h.z,.22,19,a),r.sphere(t.lampRed,h.x,h.height+21.7,h.z,.4),r.box(t.lampRed,u,h.height+.4,g,.4,.4,.4,16777215),r.box(t.lampRed,f,h.height+.4,d,.4,.4,.4,16777215),r.box(t.metal,h.x,h.deckY-.14,h.z,7.4,.26,7.4,5988972);const p=(b,_,S,E,L=h.deckY)=>{r.beam(t.paint,[b,L+1.1,_],[S,L+1.1,E],.07,.07,15778816),r.beam(t.paint,[b,L+.55,_],[S,L+.55,E],.05,.05,15778816);const U=Math.max(1,Math.round(Math.hypot(S-b,E-_)/1.6));for(let B=0;B<=U;B++)r.box(t.paint,b+(S-b)*B/U,L+.55,_+(E-_)*B/U,.06,1.1,.06,15778816)};p(u,d,f,d),p(f,d,f,g),p(u,d,u,g),p(u,g,h.x-h.armHalf,g),p(h.x+h.armHalf,g,f,g);for(const b of[16.5,33])r.box(t.metal,h.x,b-.1,h.z,7.2,.16,7.2,5988972);const m=13620442;r.box(t.paint,h.x,1.6,d,7,3.2,.25,m),r.box(t.paint,f,1.6,h.z,.25,3.2,7,m),r.box(t.paint,h.x,1.6,g,7,3.2,.25,m),r.box(t.paint,u,1.6,h.z-2.3,.25,3.2,2.4,m),r.box(t.paint,u,1.6,h.z+2.3,.25,3.2,2.4,m),r.box(t.hazard,u-.02,3,h.z,.3,.4,2.2,16777215),e.box(u,d-.3,f,d+.3,0,4,"tower"),e.box(f-.3,d,f+.3,g,0,4,"tower"),e.box(u,g-.3,f,g+.3,0,4,"tower"),e.box(u-.3,d,u+.3,h.z-1.1,0,4,"tower"),e.box(u-.3,h.z+1.1,u+.3,g,0,4,"tower");const y=h.deckY-.3,M=h.deckY+1.6;e.floor(u,d,f,g,h.deckY,"deck"),i.armFloor=e.floor(h.x-h.armHalf,h.armZ0,h.x+h.armHalf,h.armZ1,h.deckY,"arm"),e.box(u-.2,d-.2,f+.2,d+.15,y,M,"rail"),e.box(f-.15,d,f+.2,g,y,M,"rail"),e.box(u-.2,d,u+.15,g,y,M,"rail"),e.box(u,g-.15,h.x-h.armHalf,g+.2,y,M,"rail"),e.box(h.x+h.armHalf,g-.15,f,g+.2,y,M,"rail"),i.armRails=[e.box(h.x-h.armHalf-.25,h.armZ0,h.x-h.armHalf+.05,h.armZ1,y,M,"rail"),e.box(h.x+h.armHalf-.05,h.armZ0,h.x+h.armHalf+.25,h.armZ1,y,M,"rail"),e.box(h.x-h.armHalf,h.armZ1-.45,h.x+h.armHalf,h.armZ1-.15,y,M,"rail")],i.armGate=e.box(h.x-h.armHalf,g-.15,h.x+h.armHalf,g+.15,y,M,"gate"),i.armGate.on=!1;const v=new Yt;{const b=new Le,_=h.cageHalf;b.box(t.metal,0,.06,0,_*2,.12,_*2,6975867),b.box(t.paint,0,2.62,0,_*2+.1,.12,_*2+.1,15778816);for(const S of[-_,_])for(const E of[-_,_])b.box(t.paint,S,1.35,E,.1,2.6,.1,15778816);b.box(t.paint,0,1.1,-_,_*2,.06,.05,15778816),b.box(t.paint,_,1.1,0,.05,.06,_*2,15778816),b.box(t.lampCool,0,2.53,0,1,.05,1,16777215),b.box(t.paint,_-.25,.65,-_+.25,.22,1.1,.22,1911356),b.box(t.lampTeal,_-.25,1.25,-_+.25,.2,.12,.2,16777215),b.build(v)}v.position.set(h.x,.12,h.z),n.add(v);const w=yt(new re(.08,1,.08),t.gunmetal,{parent:n,cast:!1});i.cage=v,i.cageFloor=e.floor(h.x-h.cageHalf,h.z-h.cageHalf,h.x+h.cageHalf,h.z+h.cageHalf,.24,"cage");const T=h.cageHalf;i.cageWalls={n:e.box(h.x-T,h.z-T-.2,h.x+T,h.z-T+.05,0,3,"cage"),e:e.box(h.x+T-.05,h.z-T,h.x+T+.2,h.z+T,0,3,"cage"),s:e.box(h.x-T,h.z+T-.05,h.x+T,h.z+T+.2,0,3,"cage"),w:e.box(h.x-T-.2,h.z-T,h.x-T+.05,h.z+T,0,3,"cage")},i.cageY=0,i.setCage=(b,_)=>{i.cageY=b,v.position.y=b+.12,i.cageFloor.y=b+.24;const S=h.height;w.position.set(h.x,(b+2.8+S)/2,h.z),w.scale.y=Math.max(.1,S-(b+2.8));const E=b>h.deckY-.3,L=b<.1;for(const U of["n","e","s","w"]){const B=i.cageWalls[U];B.y0=b-.2,B.y1=b+2.8}i.cageWalls.n.on=!0,i.cageWalls.e.on=!0,i.cageWalls.w.on=_||!L,i.cageWalls.s.on=_||!E},i.setCage(0,!1);const C=new Yt;{const b=new Le,_=h.armZ1-h.armZ0,S=h.armHalf*2,E=-1.15;b.box(t.metal,E,-.12,_/2,S,.2,_,6975867);for(const L of[-1,1]){const U=E+L*(S/2);b.beam(t.paint,[U,0,0],[U,0,_],.16,.16,o),b.beam(t.paint,[U,2.5,0],[U,2.5,_],.16,.16,o),b.beam(t.paint,[U,1.1,0],[U,1.1,_-2.6],.07,.07,15778816);for(let B=0;B<=4;B++){const F=B/4*(_-2.6);b.beam(t.paint,[U,0,F],[U,2.5,F],.1,.1,o),B<4&&b.beam(t.paint,[U,0,F],[U,2.5,F+(_-2.6)/4],.07,.07,o)}}for(let L=0;L<=4;L++)b.beam(t.paint,[E-S/2,2.5,L/4*(_-2.6)],[E+S/2,2.5,L/4*(_-2.6)],.1,.1,o);b.box(t.paint,E-S/2-.06,1.25,_-1.3,.1,2.5,2.6,15856372),b.box(t.paint,E+S/2+.06,1.25,_-1.3,.1,2.5,2.6,15856372),b.box(t.paint,E,2.56,_-1.3,S+.2,.1,2.6,15856372),b.box(t.lampCool,E,2.48,_-1.3,1.2,.05,1.6,16777215),b.box(t.paint,E,2.3,_+.02,S+.2,.5,.08,2078120),b.build(C)}C.position.set(h.x+h.armHalf,h.deckY,h.armZ0),n.add(C),i.arm=C,i.setArm=b=>{C.rotation.y=b*1.5;const _=b<.02;i.armFloor.on=_;for(const S of i.armRails)S.on=_;i.armGate.on=!_},i.setArm(0),i.umbilicals=[];for(const[b,_]of[[Bt.baseY+26.5,10.6],[Bt.baseY+38,10.6]]){const S=new Yt,E=new Le;E.beam(t.paint,[0,0,0],[0,0,_],.3,.3,o),E.beam(t.paint,[0,1.2,0],[0,0,_],.14,.14,o),E.pipe(t.rubber,[.25,-.2,0],[.25,-.35,_+.4],.11,1382170),E.pipe(t.metal,[-.25,-.2,0],[-.25,-.3,_+.4],.08,13225169),E.box(t.paint,0,-.1,_+.3,.9,.7,.5,14672872),E.build(S),S.position.set(h.x-1.6,b,h.armZ0),n.add(S),i.umbilicals.push(S)}i.setUmbilicals=b=>{for(const _ of i.umbilicals)_.rotation.y=-b*1.2};for(const b of[1.9,3.75,5.6]){const _=l+Math.cos(b)*50,S=c+Math.sin(b)*50,E=74,L=2.2,U=.35,B=(F,q)=>{const X=L+(U-L)*q;return[_+(F&1?X:-X),q*E,S+(F&2?X:-X)]};for(let F=0;F<4;F++)r.beam(t.paint,B(F,0),B(F,1),.2,.2,14278114);for(let F=0;F<12;F++){const q=F/12,X=(F+1)/12;for(const[H,st]of[[0,1],[1,3],[3,2],[2,0]])r.beam(t.paint,B(H,q),B(st,X),.09,.09,14278114),r.beam(t.paint,B(H,X),B(st,X),.09,.09,14278114)}r.cyl(t.metal,_,E+5,S,.08,10,a),e.circle(_,S,2.6,0,8,"mast")}for(const[b,_]of[[-38,34],[34,36],[36,-40],[-40,-38]]){const S=l+b,E=c+_;r.cyl(t.metal,S,14,E,.22,28,a),r.box(t.paint,S,28.4,E,3.2,1.4,.5,2830392,Math.atan2(-b,-_)),r.box(t.lampCool,S-Math.sin(Math.atan2(b,_))*.28,28.4,E-Math.cos(Math.atan2(b,_))*.28,2.8,1,.08,16777215,Math.atan2(-b,-_)),e.circle(S,E,.5,0,6,"pole")}{const b=l+46,_=c-66;yt(new je(7.2,32,20),t.white,{x:b,y:9.4,z:_,parent:n});for(let E=0;E<6;E++){const L=E/6*Gs*2;r.cyl(t.metal,b+Math.cos(L)*5.4,3,_+Math.sin(L)*5.4,.3,6.4,a)}r.box(t.paint,b,9.4,_+7.25,3,.9,.05,992064),e.circle(b,_,7.4,0,18,"tank");for(const E of[18,27]){yt(new fs(3.1,15,8,24),t.white,{x:b-3,y:4.3,z:_+E,rz:Gs/2,parent:n});for(const L of[-7,0,7])r.box(t.matte,b-3+L,.75,_+E,1.2,1.5,5.4,9211794);e.box(b-14.5,_+E-3.3,b+8.5,_+E+3.3,0,8,"tank")}const S=[[b-8,3.2,_+22],[l+14,3.2,_+22],[l+14,3.2,c-16.5],[h.x+h.half,3.2,c-16.5]];for(let E=0;E<S.length-1;E++){for(const[B,F,q]of[[0,.22,15330286],[.6,.16,12745285],[-.6,.16,10133670]]){const X=S[E].slice(),H=S[E+1].slice();X[1]+=B*.3,H[1]+=B*.3,Math.abs(X[0]-H[0])>Math.abs(X[2]-H[2])?(X[2]+=B,H[2]+=B):(X[0]+=B,H[0]+=B),r.pipe(t.metal,X,H,F,q)}const L=Math.hypot(S[E+1][0]-S[E][0],S[E+1][2]-S[E][2]),U=Math.round(L/6);for(let B=0;B<=U;B++){const F=S[E][0]+(S[E+1][0]-S[E][0])*B/U,q=S[E][2]+(S[E+1][2]-S[E][2])*B/U;r.box(t.paint,F,1.5,q,.2,3,.2,o)}}r.cyl(t.metal,b+22,9,_-6,.3,18,a),r.sphere(t.heat,b+22,18.6,_-6,.55,16777215,1.6),i.flare=[b+22,18.8,_-6]}{const b=l-34,_=c+52;yt(new xe(4.6,4.6,7,28),t.white,{x:b,y:24.5,z:_,parent:n}),yt(new pc(4.75,2,28),t.white,{x:b,y:29,z:_,parent:n});for(const[S,E]of[[3,3],[3,-3],[-3,3],[-3,-3]])r.beam(t.paint,[b+S*1.5,0,_+E*1.5],[b+S,21,_+E],.3,.3,o);for(let S=0;S<4;S++){const E=3+S*4.8,L=4.5-E/21*1.5,U=4.5-(E+4.8)/21*1.5;r.beam(t.paint,[b-L,E,_-L],[b+U,E+4.8,_-U],.12,.12,o),r.beam(t.paint,[b+L,E,_+L],[b-U,E+4.8,_+U],.12,.12,o),r.beam(t.paint,[b+L,E,_-L],[b+U,E+4.8,_+U],.12,.12,o),r.beam(t.paint,[b-L,E,_+L],[b-U,E+4.8,_-U],.12,.12,o)}r.pipe(t.metal,[b,21,_],[b,.3,_],.35,12172998),e.boxC(b,_,5,5,0,30,"water")}{r.box(t.matte,150,3.6,-86,34,7,15,14013130),r.box(t.glassDark,150,4.3,-86+7.53,30,2.2,.06,16777215),r.box(t.paint,150,7.3,-86,35,.5,16,1911356),r.cyl(t.metal,160,10.5,-88,.12,6,a);const S=yt(new je(2.6,24,12,0,Gs*2,0,.9),t.white,{x:141,y:10.6,z:-86,rx:-2.2,parent:n});S.material=t.white.clone(),S.material.side=Ke,r.cyl(t.metal,141,8.6,-86,.2,2.6,a);const E=yf("lcc",1024,128,(B,F,q)=>{B.fillStyle="#0b1b33",B.fillRect(0,0,F,q),B.fillStyle="#f4f6f8",B.font="700 78px Arial",B.textAlign="center",B.textBaseline="middle",B.fillText("HELIX ORBITAL  -  LAUNCH CONTROL",F/2,q/2+4)});yt(new Fe(20,2.5),new Ee({map:E,roughness:.6}),{cast:!1,x:150,y:6.2,z:-86+7.56,parent:n}),e.boxC(150,-86,17.2,7.8,0,9,"lcc");const L=172,U=64;r.cyl(t.metal,L,1.5,U,.25,3,a),r.box(t.paint,L,3.3,U,1.1,.9,2.2,2303531,.9),r.cyl(t.glassDark,L+.9,3.3,U+.75,.38,.5,16777215,0,Gs/2),e.circle(L,U,.9,0,4,"cam"),i.trackCam=new I(L,3.9,U)}return r.build(n),i}function dr(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ve;let c=0;for(let h=0;h<s.length;++h){const u=s[h];let f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0;const u=[];for(let f=0;f<s.length;++f){const d=s[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=s[f].attributes.position.count}l.setIndex(u)}for(const h in r){const u=ou(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){const d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);const g=ou(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function ou(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){const h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new Mn(o,e,n);let l=0;for(let c=0;c<s.length;++c){const h=s[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){const x=h.getComponent(f,g);a.setComponent(f+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}const me=Math.PI,Jt=ie.r,N1=Ir.lengthM;function Tr(s,t,e){const n=new Yt;return n.name=e,n.position.set(0,t,0),n.userData.home=new I(0,t,0),s.add(n),n}function Cf(s,t=28){const e=s.map(([n,i])=>new lt(n,i));return new Mc(e,t)}function ka(){return new Ee({color:10722195,metalness:.9,roughness:.3,side:Ke,emissive:new Wt(16734740),emissiveIntensity:0})}function F1(s,t){const e=new Yt,n=[],i=(a,l,c,h,u=0,f=0)=>{a.applyMatrix4(new $t().compose(new I(l,c,h),new Je().setFromEuler(new ln(u,0,f)),new I(1,1,1))),n.push(a)};i(new xe(.2,.17,.42,16),0,-.05,0),i(new je(.2,14,8,0,me*2,0,me/2),0,.16,0),i(new xe(.11,.11,.46,12),.3,.05,.05),i(new je(.13,10,8),.3,.3,.05),i(new xe(.05,.05,.75,8),.3,-.42,.05,0,.14),i(new Xi(.24,.035,6,16,me*1.4),0,-.1,0,me/2),i(new xe(.035,.035,.5,6),-.22,.1,-.12,.4,.3),i(new xe(.03,.03,.55,6),-.16,-.1,.2,-.5,.2),i(new xe(.26,.26,.06,16),0,.3,0);const r=yt(dr(n.map(a=>a.index?a.toNonIndexed():a)),s.steel,{parent:e,cast:!1}),o=yt(Cf([[.15,-.24],[.185,-.4],[.26,-.65],[.345,-.92],[.415,-1.2],[.455,-1.42],[.47,-1.5]]),t,{parent:e});return e.userData.body=r,e.userData.bell=o,e}function O1(s){const t={paint:{value:0}},e=a1({s1Top:ie.s1Top,interTop:ie.interTop}),n=Kh(e,t.paint),i=Kh(e,{value:1.5},{roughness:.4}),r=p=>p/N1,o=new Yt,a=new Yt,l=new Yt;o.add(a,l),t.root=o,t.booster=a,t.upper=l,t.parts={};const c=t.parts,h=new Ee({color:9409691,metalness:.7,roughness:.62}),u=(p,m,y,M=h)=>{const v=yt(new Ai(p,48),M,{});return v.rotation.x=y?-me/2:me/2,v.position.y=m,v},f=(p,m,y,M)=>{const v=y-m,w=Tr(M,(m+y)/2,p);return yt(ei(Jt,Jt,-v/2,v/2,72,r(m),r(y)),n,{parent:w}),w.add(u(Jt-.02,-v/2+.01,!1),u(Jt-.02,v/2-.01,!0)),yt(new re(.14,v-.2,.34),s.white,{parent:w,x:Jt+.05,z:0}),w};c.s1a=f("s1a",ie.skirtTop,ie.s1aTop,a),c.s1b=f("s1b",ie.s1aTop,ie.s1Top,a),c.s2=f("s2",ie.interTop,ie.s2Top,l),t.bellMat1=ka(),t.bellMatCenter=ka(),t.bellMat3=ka();{const p=Tr(a,1,"engineSection");yt(ei(Jt,Jt,-1,1,72,r(0),r(2)),i,{parent:p}),p.add(u(Jt-.02,.99,!0));const m=u(Jt,-.98,!1,s.gunmetal);p.add(m);for(let M=0;M<8;M++){const v=M/8*me*2+me/8,w=yt(new re(.08,.22,1.2),s.steelDark,{parent:p,x:Math.sin(v)*1.25,y:-1.05,z:Math.cos(v)*1.25});w.rotation.y=v}c.engineSection=p,t.engines=[];const y=[[0,0]];for(let M=0;M<8;M++){const v=M/8*me*2;y.push([Math.sin(v)*1.27,Math.cos(v)*1.27])}y.forEach(([M,v],w)=>{const T=w===0?t.bellMatCenter:w===3||w===7?t.bellMat3:t.bellMat1,C=F1(s,T);C.position.set(M,-1,v),C.rotation.y=w*.7,C.userData.home=C.position.clone(),p.add(C),t.engines.push(C)})}{const p=ie.interTop-ie.s1Top,m=Tr(a,(ie.s1Top+ie.interTop)/2,"interstage");yt(ei(Jt,Jt,-p/2,p/2,72,r(ie.s1Top),r(ie.interTop)),i,{parent:m});const y=new Ee({color:1579292,roughness:.7,metalness:.3,side:en});yt(ei(Jt-.04,Jt-.04,-p/2,p/2,48),y,{parent:m,cast:!1}),m.add(u(Jt-.05,-p/2+.3,!0,s.gunmetal)),c.interstage=m,t.fins=[];const M=new Ee({map:r1(),alphaTest:.5,side:Ke,metalness:.85,roughness:.45,color:12172482});for(let v=0;v<4;v++){const w=(v+.5)/4*me*2,T=new Yt;T.position.set(Math.sin(w)*(Jt+.04),p/2-.55,Math.cos(w)*(Jt+.04)),T.rotation.y=w;const C=new Yt,b=yt(new Fe(1.35,1.6),M,{parent:C,y:-.8,z:.09});b.customDepthMaterial=new cf({depthPacking:ku,map:M.map,alphaTest:.5}),yt(new Fe(1.35,1.6),M,{parent:C,y:-.8,z:.17,cast:!1}),yt(new re(1.45,.14,.2),s.titanium,{parent:C,y:-.02,z:.12}),yt(new re(.5,.3,.26),s.steelDark,{parent:T,y:.1,z:.02}),T.add(C),m.add(T),t.fins.push(C);const _=w+me/4;yt(new re(.34,.5,.2),s.steelDark,{parent:m,x:Math.sin(_)*(Jt+.06),y:p/2-.5,z:Math.cos(_)*(Jt+.06),ry:_})}}t.legs=[];{const p=s.carbon,m=7.23,y=new Wo;y.moveTo(-.62,0),y.lineTo(.62,0),y.lineTo(.18,m),y.lineTo(-.18,m),y.closePath();const M=new vc(y,{depth:.3,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1}),v=new xe(.11,.14,1,10);for(let w=0;w<4;w++){const T=(w+.5)/4*me*2,C=new Yt;C.position.set(Math.sin(T)*(Jt+.02),.6,Math.cos(T)*(Jt+.02)),C.rotation.y=T;const b=new Yt;yt(M,p,{parent:b,z:.02}),yt(new xe(.34,.4,.16,14),s.steelDark,{parent:b,y:m-.05,z:.22,rx:me/2-.6}),C.add(b);const _=yt(v,s.steelPolished,{parent:C,cast:!1});a.add(C),t.legs.push({pivot:C,leg:b,strut:_,L:m})}}t.bellMatVac=new Ee({color:9275007,metalness:.9,roughness:.34,side:Ke,emissive:new Wt(16730642),emissiveIntensity:0});{const p=Tr(l,ie.interTop,"mvac");yt(ei(.45,1.5,-.75,0,40),s.steel,{parent:p});const m=yt(new je(Jt-.03,40,12,0,me*2,me/2,me/2),s.steel,{parent:p,y:.02});m.scale.y=.42;const y=[],M=(v,w,T,C,b=0,_=0)=>{v.applyMatrix4(new $t().compose(new I(w,T,C),new Je().setFromEuler(new ln(b,0,_)),new I(1,1,1))),y.push(v.index?v.toNonIndexed():v)};M(new xe(.24,.2,.5,16),0,-.95,0),M(new xe(.13,.13,.6,12),.38,-.85,0),M(new je(.15,10,8),.38,-.52,0),M(new Xi(.3,.04,6,18),0,-1,0,me/2),M(new xe(.04,.04,.8,6),-.3,-.75,.2,.3,.3);for(let v=0;v<4;v++){const w=v/4*me*2+.6;M(new je(.3,12,10),Math.sin(w)*1.15,-.2,Math.cos(w)*1.15)}yt(dr(y),s.steel,{parent:p}),yt(Cf([[.19,-1.18],[.26,-1.4],[.46,-1.85],[.7,-2.35],[.92,-2.85],[1.06,-3.25],[1.1,-3.4]],40),t.bellMatVac,{parent:p}),c.mvac=p}{const p=Tr(l,ie.s2Top,"capsule"),m=ie.trunkTop-ie.s2Top,y=new Ee({map:c1(),metalness:.1,roughness:.4}),M=new Yt;yt(ei(Jt,Jt,0,m,64),y,{parent:M});const v=new Ee({color:2763824,roughness:.8,side:en});yt(ei(Jt-.04,Jt-.04,0,m,40),v,{parent:M,cast:!1});for(let St=0;St<4;St++){const vt=St/4*me*2+me/4;yt(new re(.08,1.5,.5),s.white,{parent:M,x:Math.sin(vt)*(Jt+.22),y:.9,z:Math.cos(vt)*(Jt+.22),ry:vt+me/2})}p.add(M);const w=new Yt;w.position.y=m,p.add(w);const T=new Ee({map:l1(),metalness:.08,roughness:.36}),C=3,b=new Yt;yt(ei(Jt,.76,.06,C,64),T,{parent:b});const _=new Ee({color:13620184,roughness:.7,side:en});yt(ei(Jt-.05,.72,.1,C,40),_,{parent:b,cast:!1}),yt(new xe(Jt-.1,Jt-.1,.06,40),s.steelDark,{parent:b,y:.12,cast:!1});const S=ie.hatchY-ie.trunkTop,E=St=>Jt-(St-.06)/(C-.06)*(Jt-.76),L=Math.atan2(Jt-.76,C-.06),U=yt(new Fe(.92,1.2),new ai({color:395275}),{parent:b,cast:!1,receive:!1});U.position.set(0,S,-(E(S)+.012)),U.rotation.set(-L,me,0,"YXZ");const B=yt(new Fe(1.06,1.34),s.steelDark,{parent:b,cast:!1});B.position.set(0,S,-(E(S)+.006)),B.rotation.set(-L,me,0,"YXZ"),w.add(b);const F=new Yt;F.position.set(.47,S,-(E(S)+.03)),F.rotation.set(-L,me,0,"YXZ");const q=yt(new re(.94,1.22,.07),s.white,{parent:F,x:.47});yt(new xe(.13,.13,.03,16),s.glassDark,{parent:q,z:.04,rx:me/2}),w.add(F);const X=new Yt;X.position.y=C;const H=yt(new je(.76,32,14,0,me*2,0,me/2),s.white,{parent:X});H.scale.y=.8,yt(new xe(.76,.76,.05,32),s.steelDark,{parent:X,y:0}),w.add(X);const st=yt(new xe(Jt+.01,Jt-.12,.14,48),new Ee({color:2827810,roughness:.85,metalness:.05}),{parent:w,y:0}),ut=[],ct=new Ee({color:1844531,roughness:.6});for(let St=0;St<4;St++){const vt=new Yt;yt(new re(.5,.1,.55),ct,{parent:vt,y:.05}),yt(new re(.5,.75,.1),ct,{parent:vt,y:.42,z:-.26,rx:-.2}),yt(new re(.3,.2,.1),s.teal,{parent:vt,y:.86,z:-.33}),vt.position.set(St%2?.42:-.42,.25+(St>1?.75:0),St>1?.25:.35),vt.userData.home=vt.position.clone(),w.add(vt),ut.push(vt)}for(let St=0;St<4;St++){const vt=St/4*me*2+me/4,Vt=1;yt(new re(.42,.8,.24),s.white,{parent:b,x:Math.sin(vt)*(E(Vt)+.03),y:Vt,z:Math.cos(vt)*(E(Vt)+.03),ry:vt,rx:0})}c.capsule=p,t.capsule={group:p,trunk:M,cap:w,shell:b,hinge:F,nose:X,shield:st,seats:ut,hatchLocal:new I(0,m+S,-(E(S)+.4))},t.setHatch=St=>{F.rotation.set(-L,me-St*1.9,0,"YXZ")},t.setHatch(0)}const d=new I,g=new I,x=new I(0,1,0);return t.legDeploy=-1,t.setLegs=p=>{if(p===t.legDeploy)return;t.legDeploy=p;const y=p*p*(3-2*p)*2.18;for(const M of t.legs){M.leg.rotation.x=y,d.set(0,3.3,.02),g.set(0,Math.cos(y)*M.L*.6-Math.sin(y)*.15,Math.sin(y)*M.L*.6+Math.cos(y)*.15);const v=d.distanceTo(g);M.strut.position.copy(d).add(g).multiplyScalar(.5),M.strut.scale.set(1,v,1),M.strut.quaternion.setFromUnitVectors(x,g.sub(d).normalize()),M.strut.visible=p>.01}},t.setLegs(0),t.finDeploy=-1,t.setFins=p=>{if(p===t.finDeploy)return;t.finDeploy=p;const m=p*p*(3-2*p);for(const y of t.fins)y.rotation.x=-m*me/2},t.setFins(0),t.setGlow=(p,m,y,M)=>{t.bellMat1.emissiveIntensity=p*2.6,t.bellMat3.emissiveIntensity=Math.max(p,m)*2.6,t.bellMatCenter.emissiveIntensity=Math.max(p,m,y)*2.6,t.bellMatVac.emissiveIntensity=M*3.2},t.allParts=[c.s1a,c.s1b,c.engineSection,c.interstage,c.s2,c.mvac,c.capsule],t.resetParts=()=>{for(const p of t.allParts)p.position.copy(p.userData.home),p.quaternion.identity(),p.visible=!0},t}function z1(){const s=ei(Jt,Jt,-1,1,56),t=ei(Jt-.06,Jt-.06,-1,1,56);t.index.array.reverse(),t.attributes.normal.array.forEach((i,r,o)=>{o[r]=-i});const e=new ko(Jt-.06,Jt,56).rotateX(me/2).translate(0,-1,0),n=new ko(Jt-.06,Jt,56).rotateX(-me/2).translate(0,1,0);return dr([s,t,e,n])}const vn=Math.PI;function Er(s,{L1:t=2.5,L2:e=2.3,color:n=16738835}={}){const i=new Yt,r=new Le;r.cyl(s.paint,0,.25,0,.55,.5,2830392),r.build(i);const o=new Yt;o.position.y=.5,i.add(o);const a=new Le;a.cyl(s.paint,0,.3,0,.42,.6,n),a.cyl(s.paint,0,.8,0,.3,.7,n,0,vn/2),a.build(o);const l=new Yt;l.position.y=.8,o.add(l);const c=new Le;c.box(s.paint,0,t/2,0,.34,t,.3,n),c.cyl(s.paint,0,t,0,.24,.5,2830392,0,vn/2),c.build(l);const h=new Yt;h.position.y=t,l.add(h);const u=new Le;u.box(s.paint,0,e/2-.1,0,.24,e-.3,.22,n),u.cyl(s.metal,0,e-.12,0,.07,.34,12172996),u.build(h);const f=yt(new je(.06,8,6),s.lampCool.clone(),{parent:h,y:e,cast:!1});return f.material.emissiveIntensity=0,{g:i,turret:o,upper:l,fore:h,tip:f,L1:t,L2:e,shoulderY:1.3,target:new I,cur:new I(0,3,1.2),inited:!1,aim(g,x,p,m=1){this.inited||(this.cur.set(g,x,p),this.inited=!0),this.cur.x+=(g-this.cur.x)*m,this.cur.y+=(x-this.cur.y)*m,this.cur.z+=(p-this.cur.z)*m;const y=this.cur.x-i.position.x,M=this.cur.z-i.position.z,v=this.cur.y-(i.position.y+this.shoulderY);o.rotation.y=Math.atan2(y,M)-i.rotation.y;const w=Math.hypot(y,M),T=Ri.clamp(Math.hypot(w,v),Math.abs(t-e)+.15,t+e-.05),C=Math.atan2(v,w),b=Math.acos(Ri.clamp((t*t+T*T-e*e)/(2*t*T),-1,1)),_=Math.acos(Ri.clamp((t*t+e*e-T*T)/(2*t*e),-1,1));l.rotation.x=vn/2-(C+b),h.rotation.x=vn-_},glow(g){f.material.emissiveIntensity=g}}}function B1(s,t){const e=new Yt,n=[],i=(f,d,g,x,p=0)=>{f.applyMatrix4(new $t().compose(new I(d,g,x),new Je().setFromEuler(new ln(0,p,0)),new I(1,1,1))),n.push(f.index?f.toNonIndexed():f)};i(new re(.34,.12,.34),0,0,0),i(new re(.95,.04,.06),0,.02,0,vn/4),i(new re(.95,.04,.06),0,.02,0,-vn/4),i(new re(.14,.12,.14),0,-.1,0);for(const[f,d]of[[.33,.33],[-.33,.33],[.33,-.33],[-.33,-.33]])i(new xe(.035,.035,.1,8),f,.07,d);yt(dr(n),s.gunmetal,{parent:e});const r=[],o=new ai({color:10466504,transparent:!0,opacity:.28,depthWrite:!1,side:Ke}),a=[];for(const[f,d]of[[.33,.33],[-.33,.33],[.33,-.33],[-.33,-.33]]){const g=new Ai(.22,14).rotateX(-vn/2).translate(f,.13,d);a.push(g.toNonIndexed())}const l=yt(dr(a),o,{parent:e,cast:!1,receive:!1});t.markNoAO(l),r.push(l),yt(new je(.05,6,6),s.lampGreen,{parent:e,y:-.02,z:.19,cast:!1});const c=new ai({color:new Wt(.2,3.2,.8),transparent:!0,opacity:.5,depthWrite:!1,side:Ke,blending:er}),h=new Ve;h.setAttribute("position",new ee([0,0,0,-.5,0,1,.5,0,1],3));const u=yt(h,c,{cast:!1,receive:!1});return u.frustumCulled=!1,t.markNoAO(u),{g:e,laser:u,rotors:r}}function k1(s){const t=new Yt,e=new Le,n=hn.length,i=15247360,r=2830392;for(const d of[-1.9,1.9])e.box(s.paint,-n/2+1,1.25,d,n,.7,.6,i);for(let d=0;d<=13;d++)e.box(s.paint,.4-d*4.1,1.25,0,.4,.5,3.4,i);e.box(s.paint,-n/2+1,1.62,0,n-2,.06,3,3817287);for(let d=0;d<11;d++){const g=-1.5-d*5;for(const x of[-2.15,2.15])e.cyl(s.rubber,g-.75,.62,x,.62,.7,1382170,vn/2,0,"cyl24"),e.cyl(s.rubber,g+.75,.62,x,.62,.7,1382170,vn/2,0,"cyl24"),e.cyl(s.metal,g-.75,.62,x+Math.sign(x)*.36,.3,.04,12172996,vn/2,0),e.cyl(s.metal,g+.75,.62,x+Math.sign(x)*.36,.3,.04,12172996,vn/2,0)}e.box(s.paint,-n+3.2,2.6,0,4.6,2,3.6,i),e.box(s.glassDark,-n+.88,2.9,0,.06,1,2.8,16777215),e.box(s.lampAmber,-n+3.2,3.72,1.2,.3,.2,.3,16777215),e.box(s.lampAmber,-n+3.2,3.72,-1.2,.3,.2,.3,16777215);for(const d of[-1.6,1.6])e.box(s.paint,0,1.75,d,1,1.5,.5,r);e.cyl(s.metal,0,hn.hingeY,0,.22,3.6,12172996,vn/2,0),e.box(s.paint,-9,1.9,0,1.2,.7,2.2,r),e.build(t);const o=new Yt;o.position.set(0,hn.hingeY,0),t.add(o);const a=new Le,l=15133164,c=-.2,h=.95;for(const d of[-1.25,1.25]){a.beam(s.paint,[0,c,d],[-44,c,d],.32,.32,l),a.beam(s.paint,[-.6,h,d],[-44,h,d],.26,.26,l);for(let g=0;g<11;g++){const x=-g*4,p=-(g+1)*4;a.beam(s.paint,[x,c,d],[p,h,d],.14,.14,l),a.beam(s.paint,[p,c,d],[p,h,d],.14,.14,l)}}for(let d=0;d<=11;d++)a.beam(s.paint,[-d*4,c,-1.25],[-d*4,c,1.25],.16,.16,l),a.beam(s.paint,[-d*4,h,-1.25],[-d*4,h,1.25],.16,.16,l);const u=hn.axisY-hn.hingeY;for(const d of[3,14,24,30,37]){const g=-(hn.hingeAhead+d);a.box(s.paint,g,h+.2,0,.6,.4,3,r);for(const x of[-1.35,1.35])a.box(s.paint,g,u-1.25,x,.5,1.5,.3,r,0,x>0?-.5:.5)}for(const d of[-1,1])a.beam(s.paint,[-40.4,h,d*1.25],[-40.4,u,d*2.15],.2,.2,l);a.box(s.paint,-40.4,u,2.2,.5,.5,.3,16742938),a.box(s.paint,-40.4,u,-2.2,.5,.5,.3,16742938),a.pipe(s.metal,[-9,-.3,0],[-14,c,0],.16,13225169),a.build(o);const f=new Yt;return f.position.set(-4.4,u,0),f.rotation.z=vn/2,o.add(f),{base:t,strongback:o,mount:f}}function H1(s){const t=new Yt,e=new Le;for(const n of[4,11,19,26,30,36]){const i=-n;e.box(s.paint,i,.42,0,1.6,.36,3.6,2056110);for(const r of[-1.5,1.5])e.cyl(s.metal,i-.5,.36,r,.2,.2,9080984,vn/2,0),e.cyl(s.metal,i+.5,.36,r,.2,.2,9080984,vn/2,0),e.box(s.paint,i,1.25,r*.86,.9,1.4,.3,2056110,0,r>0?-.42:.42);e.box(s.rubber,i,1.3,0,1,.12,1.3,1382170)}return e.build(t),t}const bn=Math.PI,zt=(s,t,e)=>s<=t?0:s>=e?1:(s-t)/(e-t),ne=s=>s*s*(3-2*s),de=(s,t,e)=>s+(t-s)*e,Rf=new I(0,0,1),V1=new I(1,0,0),G1=new Je,ss=new Je().setFromAxisAngle(Rf,bn/2),Ar=new Je().setFromAxisAngle(Rf,bn),Co=new Je,Ws=new Je,Ro=new I,ki=new I,au=new $t,W1=new I,Ha=new Je;function lu(s,t,e,n,i){Ha.copy(e).invert(),s.position.copy(n).sub(t).applyQuaternion(Ha),s.quaternion.copy(Ha).multiply(i)}function Va(s,t,e,n,i){const r=ne(zt(s,.15,.35)),o=ne(zt(s,.35,.7)),a=ne(zt(s,.7,.9));return i.x=de(t[0],e[0],o),i.z=de(t[2],e[2],o),i.y=s<.5?de(t[1],n,r):de(n,e[1],a),i.tr=o,i.hook=s<.15?ne(zt(s,.04,.15)):s>.9?1-ne(zt(s,.9,.98)):1,i}const Un=18,Ti=2.6,Sn=-82,Nn=-24.5,Ei=-15.5,Vi=17,rs=.94/Vi,Xs=[{part:"s1a",n:7,first:0,slotX:ae.stackBaseX-9},{part:"s1b",n:6,first:7,slotX:ae.stackBaseX-22},{part:"s2",n:4,first:13,slotX:ae.stackBaseX-35.5}],cu=[[-65,16.5],[-60,16.5],[-55,16.5],[-50,16.5],[-46,16.5],[-65,24],[-60,24],[-55,24],[-50,24]],Vn=[-41,1.9,18],bi=[-70,.95,18.5],jn=[-84,1.2,20],qe=ae.stackBaseX,Jn=[{part:"s1a",a:0,b:.14,from:[qe-9,Ti,Ei],to:[qe-9,ae.axisY,0],cranes:[[0,4],[1,-4]],label:"First-stage aft tank on dollies"},{part:"s1b",a:.14,b:.28,from:[qe-22,Ti,Ei],to:[qe-22,ae.axisY,0],cranes:[[0,4],[1,-4]],label:"Forward tank mated"},{part:"engineSection",a:.28,b:.42,from:Vn,to:[qe-1,ae.axisY,0],cranes:[[0,0]],flip:!0,label:"Engine section mated (9 engines)"},{part:"interstage",a:.42,b:.54,from:[qe-29.75,Ti,Ei],to:[qe-29.75,ae.axisY,0],cranes:[[1,0]],label:"Interstage stacked"},{part:"s2",a:.54,b:.68,from:[qe-35.5,Ti,Ei],to:[qe-39.5,ae.axisY,0],cranes:[[0,2.5],[1,-2.5]],label:"Second-stage tank on line"},{part:"mvac",a:.68,b:.8,from:bi,to:[qe-35.5,ae.axisY,0],cranes:[[0,0]],flip:!0,label:"Vacuum engine installed"}],Ys=[.8,.86],Ga=.86,hu=.925;class X1{constructor({engine:t,M:e,site:n,pad:i,rocket:r,col:o,fx:a}){this.engine=t,this.M=e,this.site=n,this.pad=i,this.rocket=r,this.col=o,this.fx=a,this.st=An.map(l=>({def:l,state:"locked",progress:0})),this.st[0].state="running",this.clock=0,this.assemblyTime=null,this.complete=!1,this.group=new Yt,n.root.add(this.group),this.group.add(r.root),this.baseX=qe,this.hingeX=hn.hangarHingeX,this.erect=0,this.tmp={x:0,y:0,z:0,tr:0,hook:0},this.rootPos=new I(qe,ae.axisY,0),this._build(),this.laneBox=o.box(qe-40,-2.4,qe+1.8,2.4,0,7,"lane"),this.laneBox.nocam=!0,this.teBox=o.box(0,-3,1,3,0,9,"te"),this.teBox.nocam=!0,this.syncKinematics(),this.updateVisuals(0,0)}_build(){const{M:t,engine:e,group:n,rocket:i}=this,r=new Le;for(let l=-84;l<=-42;l+=3)for(const c of[-1.25,1.25])r.box(t.paint,l,.4,Nn+c,.5,.6,.5,2056110),r.cyl(t.metal,l,.83,Nn+c,.2,.9,10133670,0,bn/2);r.box(t.paint,-63,.18,Nn,44,.16,3.4,2830392);for(const l of Xs)for(const c of[-.32,.32]){const h=l.slotX+c*l.n*2;r.box(t.paint,h,.45,Ei,1,.7,3.2,2056110);for(const u of[-1.1,1.1])r.box(t.paint,h,1.05,Ei+u,.8,.9,.35,2056110,0,u>0?-.5:.5);r.box(t.metal,h,.14,(Nn+Ei)/2,.14,.1,9.4,8159624)}r.box(t.paint,qe-29.75,.45,Ei,2.4,.7,3.2,2056110);for(const l of[-.75,.75])r.box(t.metal,Sn+l,.5,-29.4,.16,.5,9.6,8159624);for(const[l,c]of cu)r.cyl(t.paint,l,.5,c,.42,.8,2056110),r.cyl(t.metal,l,.93,c,.3,.06,12172996);r.cyl(t.paint,Vn[0],.5,Vn[2],1.6,.8,2056110,0,0,"cyl24"),r.cyl(t.paint,bi[0],.5,bi[2],1.6,.8,2056110,0,0,"cyl24"),r.box(t.paint,-55,7.9,20.25,34,.3,.3,15905792);for(const l of[-71,-55,-39])for(const c of[13.2,27.3])r.box(t.paint,l,3.95,c,.3,7.9,.3,15905792);for(const l of[-71,-55,-39])r.box(t.paint,l,7.9,20.25,.3,.3,14.4,15905792);for(const l of[-68,-47]){r.box(t.paint,l,1,28.6,5,2,1.2,2830392);for(let c=0;c<4;c++)r.cyl(t.metal,l-1.8+c*1.2,2.25,28.6,.3,.5,[12745285,12172996,9080984,12745285][c])}r.cyl(t.paint,jn[0],.6,jn[2],2,1.1,15133164,0,0,"cyl24"),r.box(t.paint,jn[0]-4.6,.5,jn[2]+4.5,3.6,.9,1.4,2830392);for(const[l,c]of[[-90,14.5],[-78,14.5],[-90,28],[-78,28]])r.box(t.lampCool,l,4.3,c,1.6,.08,.5,16777215);r.build(n);const o=this.M.steel.clone();o.side=Di,this.rings=new us(z1(),o,Vi),this.rings.castShadow=!0,this.rings.receiveShadow=!0,this.rings.frustumCulled=!1,n.add(this.rings),this.seamMat=new Ee({color:2230272,emissive:16742946,emissiveIntensity:0}),this.seam=yt(new Xi(ie.r+.01,.035,6,48),this.seamMat,{parent:n,cast:!1,receive:!1,ry:bn/2}),this.arcs=[0,1].map(()=>yt(new je(.11,8,6),new ai({color:new Wt(6,8,12)}),{parent:n,cast:!1,receive:!1})),this.cars=[0,1].map(()=>{const l=new Yt,c=new Le;c.box(t.paint,0,.42,0,1.3,.4,3,15905792);for(const h of[-1,1])c.box(t.paint,0,.95,h,1,.8,.3,15905792,0,h>0?-.5:.5);return c.build(l),n.add(l),l}),this.weldBots=[Er(t),Er(t)],this.weldBots[0].g.position.set(Sn+1,.1,Nn-3.9),this.weldBots[1].g.position.set(Sn+1,.1,Nn+3.9),this.engBots=[Er(t,{L1:2.9,L2:2.7,color:15905792}),Er(t,{L1:2.9,L2:2.7,color:15905792})],this.engBots[0].g.position.set(-62.5,.1,20.25),this.engBots[1].g.position.set(-52.5,.1,20.25),this.capBot=Er(t,{L1:2.6,L2:2.4,color:15133164}),this.capBot.g.position.set(jn[0]+4.2,.1,jn[2]+3.4);for(const l of[...this.weldBots,...this.engBots,this.capBot])n.add(l.g);this.hoist=new Yt;{const l=new Le;l.box(t.paint,0,7.55,0,1,.45,.7,2830392),l.build(this.hoist),this.hoistCable=yt(new re(.05,1,.05),t.gunmetal,{parent:this.hoist,cast:!1})}n.add(this.hoist),this.dollies=H1(t),n.add(this.dollies),this.portal=new Yt;{const l=new Le;for(const c of[-3.3,3.3])l.box(t.paint,0,3.6,c,.5,7,.5,15133164),l.box(t.paint,0,.3,c,2.2,.4,.9,2830392);l.box(t.paint,0,7.2,0,.6,.5,7.1,15133164),l.box(t.hazard,0,7.52,0,.62,.14,7.1,16777215),l.build(this.portal),yt(new Xi(2.75,.09,8,40),t.steel,{parent:this.portal,y:ae.axisY,ry:bn/2}),this.nozzles=[];for(let c=0;c<8;c++){const h=c/8*bn*2+.2,u=yt(new xe(.05,.09,.5,8),t.gunmetal,{parent:this.portal,y:ae.axisY+Math.sin(h)*2.5,z:Math.cos(h)*2.5});u.rotation.x=-h+bn/2,this.nozzles.push(h)}}n.add(this.portal),this.drones=[];const a=new Le;for(let l=0;l<4;l++){const c=B1(t,e);c.pad=new I(ae.paintBaseX-40+l*12,.42,l%2?3.9:-3.9),a.cyl(t.paint,c.pad.x,.2,c.pad.z,.6,.2,1911356),a.cyl(t.lampGreen,c.pad.x,.31,c.pad.z,.5,.02,16777215),c.ring=yt(new Xi(ie.r+.03,.02,6,48),new ai({color:new Wt(.2,3,.8)}),{parent:n,cast:!1,receive:!1,ry:bn/2}),e.markNoAO(c.ring),n.add(c.g,c.laser),this.drones.push(c)}a.build(n),this.te=k1(t),n.add(this.te.base)}get current(){return this.st.find(t=>t.state==="running"||t.state==="ready")||null}get signedCount(){return this.st.filter(t=>t.state==="signed").length}overall(){let t=0;for(const e of this.st)t+=e.state==="signed"?1:e.progress*.97;return t/this.st.length}step(t){this.complete||(this.clock+=t);const e=this.st.find(n=>n.state==="running");e&&(e.progress=Math.min(1,e.progress+t/e.def.duration),e.progress>=1&&(e.state="ready")),this.syncKinematics()}signOff(t){const e=this.st[t];return!e||e.state!=="ready"?!1:(e.state="signed",t+1<this.st.length?this.st[t+1].state="running":(this.complete=!0,this.assemblyTime=this.clock),!0)}forceComplete(t){for(let e=0;e<=t;e++)this.st[e].progress=1,this.st[e].state="signed";t+1<this.st.length?this.st[t+1].state==="locked"&&(this.st[t+1].state="running"):this.complete||(this.complete=!0,this.assemblyTime=this.clock),this.syncKinematics()}syncKinematics(){const t=this.st[4].progress,e=this.st[5].progress;this.baseX=de(ae.stackBaseX,ae.paintBaseX,ne(zt(t,0,.14))),this.hingeX=de(hn.hangarHingeX,hn.padHingeX,ne(zt(e,.22,.74))),this.erect=ne(zt(e,.74,.97));const n=this.st[3].progress>.93,i=this.laneBox,r=(n?ie.capsuleTop:ie.s2Top)+.4;i.x0=this.baseX-r,i.x1=this.baseX+1.9;const o=this.teBox;o.x0=this.hingeX-hn.length-.4,o.x1=this.hingeX+1.4,this.site.setDoors(ne(zt(e,0,.12))),this.pad.rocketCollider.on=e>.74}updateVisuals(t,e){const n=this.st.map(r=>r.progress),i=this.st.map(r=>r.state==="running");this.time=t,this.dt=e,this._root(n),this._tank(n[0],i[0],n[2]),this._engines(n[1],i[1],n[2]),this._stack(n[2],i[2]),this._capsule(n[3],i[3]),this._paint(n[4],i[4]),this._rollout(n[5],i[5]);for(let r=0;r<this.site.consoles.length;r++){const o=this.site.consoles[r],a=this.st[r],l=a.state==="locked"?16722458:a.state==="running"?16753690:3014540;o.lampMat.emissive.setHex(l),o.lampMat.emissiveIntensity=a.state==="ready"?3+2.5*Math.sin(t*9):a.state==="signed"?2.2:3.2}}_root(t){const{rocket:e,te:n}=this,i=t[5],r=i>=.18,o=e.root;if(n.base.position.x=this.hingeX,!e.inFlight){if(n.strongback.rotation.z=-this.erect*bn/2+(this.strongbackRetract||0),r)o.parent!==n.mount&&n.mount.add(o),o.position.set(0,0,0),o.rotation.set(0,0,0);else{o.parent!==this.group&&this.group.add(o);let a=this.baseX,l=ae.axisY;if(i>0){const c=Va(zt(i,0,.18),[ae.paintBaseX,ae.axisY,0],[ae.teBaseX,hn.axisY,0],11.5,this.tmp);a=c.x,l=c.y;const h=de(Un,l+2,c.hook),u=zt(i,0,.18),f=this.site.cranes,d=ae.paintBaseX-10,g=ae.paintBaseX-32;f[3].set(u<.15?d:a-10,0,h),f[2].set(u<.15?g:a-32,0,h)}else this.site.cranes[3].set(ae.paintBaseX-10,0,Un),this.site.cranes[2].set(ae.paintBaseX-32,0,Un);o.position.set(a,l,0),o.rotation.set(0,0,bn/2),this.rootPos.set(a,l,0)}r&&(this.site.cranes[3].set(ae.teBaseX-10,0,Un),this.site.cranes[2].set(ae.teBaseX-32,0,Un)),this.dollies.position.x=this.baseX}}_place(t,e,n,i,r){lu(t,this.rootPos,ss,Ro.set(e,n,i),r)}_home(t){t.position.copy(t.userData.home),t.quaternion.identity()}_tank(t,e,n){const i=this.rocket.parts,r=Math.min(Vi-1,Math.floor(t/rs)),o=t/rs-r,a=t<Vi*rs,l=a&&o>.5&&o<.88&&t>0,c=ne(zt(o,.88,1)),h=ne(zt(o,.5,.88))*bn*2;let u=0;for(const m of this.cars)m.visible=!1;for(const m of Xs){const y=i[m.part],M=(m.first+m.n)*rs,v=Jn.find(w=>w.part===m.part);if(t>=M){if(y.visible=!0,n<=v.a){const w=m.first+m.n===Vi,T=zt(t,M,M+(w?1-M:rs*.9)),C=Sn+1+m.n,b=de(C,m.slotX,ne(zt(T,0,.45))),_=de(Nn,Ei,ne(zt(T,.45,1)));if(this._place(y,b,Ti,_,ss),T>.4&&T<1&&u===0){for(let S=0;S<2;S++)this.cars[S].visible=!0,this.cars[S].position.set(m.slotX+(S?.32:-.32)*m.n*2,0,_);u=1}}}else y.visible=!1;for(let w=0;w<m.n;w++){const T=m.first+w;let C=t<M&&t>0&&T<=r&&r<m.first+m.n&&r>=m.first,b=Sn,_=Nn,S=0;if(C){const E=r-m.first;w<E?(b=Sn+2*(E-w)+2*c,S=h):(_=de(-33.2,Nn,ne(zt(o,0,.45))),b=Sn+2*c,S=(_+33.2)/ie.r+h)}Co.setFromAxisAngle(V1,S).multiply(ss),au.compose(Ro.set(b,Ti,_),Co,W1.setScalar(C?1:0)),this.rings.setMatrixAt(T,au)}}this.rings.instanceMatrix.needsUpdate=!0;const f=Sn+1+2*c,d=l?1:a&&o>=.88?1-zt(o,.88,1):0;this.seam.visible=d>.01&&r!==Xs[0].first&&r!==Xs[1].first&&r!==Xs[2].first,this.seam.position.set(f,Ti,Nn),this.seamMat.emissiveIntensity=d*4.5;const g=l&&e;this.weldLive=g;const x=g?.4+.6*Te():0;g&&this.engine.setFxLight(ki.set(Sn+1,Ti+1.6,Nn),x*420,12572927,26);const p=Math.min(1,(this.dt||.016)*6);for(let m=0;m<2;m++){const y=m?1:-1,M=this.weldBots[m],v=Ti+ie.r*.62,w=Nn+y*ie.r*.8;if(l?M.aim(Sn+1,v+Math.sin(this.time*3+m)*.05,w,p):M.aim(Sn+1.4,4.6,Nn+y*2.9,p*.5),M.glow(g?6:0),this.arcs[m].visible=g,this.arcs[m].position.set(Sn+1,v,w),this.arcs[m].scale.setScalar(.6+x),g&&this.fx){const T=Math.round(160*(this.dt||.016)+Te());for(let C=0;C<T;C++)this.fx.sparks.emit(Sn+1,v,w,Ot(-2.5,2.5),Ot(1,6),y*Ot(.5,5),Ot(.5,1.3),.09,.02,5,3.2+Te()*2,.9,1,.4,9.8,.14);Te()<.3&&this.fx.smoke.emit(Sn+1,v+.3,w,Ot(-.2,.2),.9,y*.3,2.2,.3,1.6,.7,.72,.76,.12,.3,-.2)}}}_engines(t,e,n){const{rocket:i}=this,r=i.parts.engineSection,o=i.parts.mvac,a=Math.min(1,(this.dt||.016)*5);let l=null,c=null;const h=Jn[2],u=Jn[5],f=n<=h.a;f&&this._place(r,Vn[0],Vn[1],Vn[2],Ar);for(let v=0;v<9;v++){const w=i.engines[v],T=v*.085,C=zt(t,T,T+.13),b=zt(t,T+.13,T+.205);w.visible=C>0;const _=w.userData.body,S=w.userData.bell;if(_.scale.setScalar(Math.max(.001,ne(zt(C,0,.4)))),S.visible=C>.4,S.position.y=-(1-ne(zt(C,.4,.85)))*1.5,!f||b>=1){w.position.copy(w.userData.home),w.rotation.set(0,v*.7,0);continue}const E=w.userData.home,L=Vn[0]-E.x,U=Vn[1]-E.y,B=Vn[2]+E.z,[F,q]=cu[v],X=1.26,H=ne(zt(b,0,.3)),st=ne(zt(b,.3,.7)),ut=ne(zt(b,.7,1)),ct=de(F,L,st),St=de(q,B,st),vt=b<.5?de(X,5.4,H):de(5.4,U,ut);Ws.setFromAxisAngle(ki.set(0,1,0),v*.7),Co.copy(Ar).multiply(Ws),lu(w,ki.set(Vn[0],Vn[1],Vn[2]),Ar,Ro.set(ct,vt,St),Co),C>0&&C<1&&(l=[F,X+.4+ne(zt(C,0,.4))*.6,q]),b>0&&b<1&&(c=[ct,vt,St])}const d=zt(t,.7,.92);n<=u.a&&this._place(o,bi[0],bi[1],bi[2],Ar);const g=o.children[2],x=o.children[3];g.scale.setScalar(Math.max(.001,ne(zt(d,0,.45)))),x.visible=d>.45,x.position.y=-(1-ne(zt(d,.45,.9)))*2.4,d>0&&d<1&&(l=[bi[0],bi[1]+1.4+d*1.5,bi[2]]);const p=c?c[0]:l?l[0]:-55,m=c?c[2]:20.25;this.hoist.position.x+=(p-this.hoist.position.x)*(c?1:a),this.hoist.position.z=m-0;const y=c?c[1]+.5:6.8;this.hoistCable.position.set(0,(7.4+y)/2,0),this.hoistCable.scale.y=Math.max(.05,7.4-y),this.hoist.position.z=c?m:20.25;const M=e&&l;this.engWork=M?l:null;for(let v=0;v<2;v++){const w=this.engBots[v];l?w.aim(l[0]+(v?.25:-.25),l[1]+Math.sin(this.time*4+v*2)*.12,l[2],a):w.aim(w.g.position.x,5.2,w.g.position.z+(v?1.2:-1.2),a*.4),w.glow(M?3:0),M&&this.fx&&Te()<.5&&this.fx.sparks.emit(w.cur.x,w.cur.y,w.cur.z,Ot(-1.5,1.5),Ot(.5,3),Ot(-1.5,1.5),Ot(.3,.7),.06,.02,5,3.6,1.2,1,.5,9.8,.14)}}_craneJobs(t){if(!this._jobs){this._jobs=[[],[]];for(const e of Jn)for(const[n,i]of e.cranes)this._jobs[n].push({a:e.a,b:e.b,off:i,pick:[e.from[0]+i,e.from[2]],drop:[e.to[0]+i,e.to[2]],step:e})}return this._jobs[t]}_stack(t,e){const{rocket:n,site:i}=this,r=n.parts,o={};for(const l of Jn){const c=r[l.part];if(t<=l.a)continue;const h=zt(t,l.a,l.b),u=Va(h,l.from,l.to,12.5,this.tmp);if(o[l.part]={x:u.x,y:u.y,z:u.z,hook:u.hook,tr:u.tr,u:h},h>=1&&l.part!=="s2"&&l.part!=="mvac"){this._home(c);continue}let f=ss;l.flip&&(f=Ws.copy(Ar).slerp(ss,ne(zt(h,.36,.66))));let d=u.x;if((l.part==="s2"||l.part==="mvac")&&h>=1&&(d+=4*ne(zt(t,Ys[0],Ys[1]))),(l.part==="s2"||l.part==="mvac")&&t>=Ys[1]){this._home(c);continue}this._place(c,d,u.y,u.z,f),c.visible=!0}t<=Jn[3].a&&this._place(r.interstage,Jn[3].from[0],Jn[3].from[1],Jn[3].from[2],ss);const a=[[qe-5,0],[qe-13,0]];for(let l=0;l<2;l++){let c=a[l],h=null;for(const u of this._craneJobs(l)){if(t<=u.a)break;if(t<=u.b){const f=o[u.step.part],d=f.y+(u.step.flip?de(3.4,2,f.tr):2);if(f.u<.15){const g=ne(f.u/.15);h=[de(c[0],u.pick[0],g),de(c[1],u.pick[1],g),de(Un,d,f.hook)]}else h=[f.x+u.off,f.z,de(Un,d,f.hook)];break}c=u.drop}h||(h=[c[0],c[1],Un]),this._crane01=this._crane01||[null,null],this._crane01[l]=h}for(let l=0;l<4;l++){const c=ne(zt(t,Ga+l*.014,Ga+.04+l*.014)),h=n.legs[l];h.pivot.visible=c>0,h.pivot.scale.setScalar(Math.max(.001,c));const u=ne(zt(t,hu+l*.014,hu+.04+l*.014)),f=n.fins[l].parent;if(f.visible=u>0,f.scale.setScalar(Math.max(.001,u)),e&&this.fx&&(c>0&&c<1||u>0&&u<1)&&Te()<.6){const d=(l+.5)/4*bn*2,g=c<1?1.2:30.9;this.fx.sparks.emit(qe-g,ae.axisY+Math.sin(d)*1.9,Math.cos(d)*1.9,Ot(-1,1),Ot(0,3),Ot(-2,2),.5,.06,.02,5,3.4,1,1,.5,9.8,.14)}}this.stackStep=Jn.reduce((l,c)=>l+(t>=c.b?1:0),0)+(t>=Ys[1]?1:0)+(t>=1?1:0)}_capsule(t,e){const{rocket:n,site:i}=this,r=n.capsule,o=n.parts.capsule,a=ie.trunkTop-ie.s2Top,l=(1-ne(zt(t,.18,.28)))*1.7;r.cap.position.y=a+l;const c=ne(zt(t,0,.12)),h=ne(zt(t,.12,.18));r.shield.position.set((1-c)*3.4,-(1-h)*1.45,0);for(let w=0;w<4;w++){const T=zt(t,.28+w*.07,.35+w*.07),C=r.seats[w],b=C.userData.home,_=ne(zt(T,0,.3)),S=ne(zt(T,.3,.65)),E=ne(zt(T,.65,1)),L=-4.6+w*.75,U=-2.9-l;C.position.set(de(L,b.x,S),T<.5?de(U,4.4,_):de(4.4,b.y,E),de(4.5,b.z,S))}const u=zt(t,.56,.66);r.nose.position.set((1-ne(zt(u,0,.6)))*-3.2,3+(1-ne(zt(u,.5,1)))*1.6,0),n.setHatch(this.complete&&!n.inFlight?1:1-ne(zt(t,.66,.74)));const f=zt(t,.74,1),d=[jn[0],jn[1]+3,jn[2]],g=[qe-ie.s2Top-3,ae.axisY,0],x=Va(f,d,g,11.5,this.tmp),p=ne(zt(f,.38,.68));t>=1?this._home(o):(Ws.copy(G1).slerp(ss,p),ki.set(0,3,0).applyQuaternion(Ws),this._place(o,x.x-ki.x,x.y-ki.y,x.z-ki.z,Ws));const m=this._crane01||[[qe-5,0,Un],[qe-13,0,Un]];let y=m[1];if(t>.74){const w=x.y+de(3.9,2,p);if(f<.15){const T=ne(f/.15);y=[de(m[1][0],d[0],T),de(m[1][1],d[2],T),de(Un,w,x.hook)]}else y=[x.x,x.z,de(Un,w,x.hook)];t>=1&&(y=[g[0],0,Un])}i.cranes[0].set(m[0][0],m[0][1],m[0][2]),i.cranes[1].set(y[0],y[1],y[2]);const M=Math.min(1,(this.dt||.016)*4),v=this.capBot;e&&t<.74?v.aim(jn[0]+1.6,3.6+Math.sin(this.time*2.2)*.7,jn[2]+1.2,M):v.aim(v.g.position.x+.5,4.8,v.g.position.z-1.5,M*.4),v.glow(e&&t<.74?2:0)}_paint(t,e){const{rocket:n}=this,i=ae.paintBaseX-ie.capsuleTop;let r=-20.6;t>.14&&(r=de(-20.6,i-1.2,ne(zt(t,.14,.2)))),t>.2&&(r=de(i-1.2,ae.paintBaseX+1.8,zt(t,.2,.58))),t>.58&&(r=de(ae.paintBaseX+1.8,ae.paintBaseX+3.6,ne(zt(t,.58,.62)))),this.portal.position.x=r;const o=t>=.58?1.2:Ri.clamp((r-(ae.paintBaseX-ie.s2Top))/ie.s2Top,0,1);n.inFlight||(n.paint.value=this.st[4].state==="locked"?0:o);const a=e&&t>.2&&t<.58;if(this.sprayOn=a,a&&this.fx){const c=Math.round(90*(this.dt||.016)+Te());for(let h=0;h<c;h++){const u=this.nozzles[Math.floor(Te()*8)],f=ae.axisY+Math.sin(u)*2.3,d=Math.cos(u)*2.3;this.fx.smoke.emit(r+Ot(-.2,.2),f,d,Ot(-.4,.4),-Math.sin(u)*2.2,-Math.cos(u)*2.2,Ot(.5,1),.25,1.3,.95,.97,1,.16,1.2,0)}}const l=zt(t,.62,.96);for(let c=0;c<4;c++){const h=this.drones[c],u=l>0&&l<1,f=ne(zt(l,0,.08)),d=ne(zt(l,.9,1)),g=zt(l,.08,.9);let x=(g*1.5+c/4)%1;x=x<.5?x*2:2-x*2;const p=de(i+.8,ae.paintBaseX-.6,x),m=de(-.25,bn+.25,.5+.5*Math.sin(g*bn*7+c*1.57)),y=p,M=ae.axisY+Math.sin(m)*4.3,v=Math.cos(m)*4.3,w=f*(1-d),T=de(h.pad.x,y,w),C=de(h.pad.y,M,w)+(u?Math.sin(this.time*5+c)*.04:0),b=de(h.pad.z,v,w);h.g.position.set(T,C,b),h.g.rotation.set(Math.sin(this.time*3+c)*.06*w,Math.atan2(-T+p,-b),0),h.rotors[0].visible=u;const _=e&&g>0&&g<1;if(h.laser.visible=_,h.ring.visible=_,_){h.laser.position.set(T,C-.08,b),h.laser.lookAt(Ro.set(T,ae.axisY,0).add(this.group.getWorldPosition(ki)));const S=Math.hypot(C-ae.axisY,b)-ie.r;h.laser.scale.set(1.5+Math.sin(this.time*17+c)*.3,1,S),h.ring.position.set(T,ae.axisY,0)}}this.droneOn=e&&l>.02&&l<.98,this.scanPct=Math.round(zt(t,.62,.96)*100),this.paintPct=Math.round(Math.min(1,o)*100)}_rollout(t,e){if(this.te,e&&t>.22&&t<.74&&this.fx&&Te()<.5){const n=this.hingeX-Ot(2,hn.length-2);this.fx.smoke.emit(n,.3,Te()<.5?-2.4:2.4,Ot(-.5,.5),.5,Ot(-.6,.6),2.2,.6,2.4,.62,.58,.5,.1,.5,-.05)}}status(t){const e=this.st[t],n=e.progress,i=(r,o,a)=>({label:r,done:o,active:!!a&&!o});switch(t){case 0:{const r=Math.min(Vi,Math.floor(n/rs+.12)),o=Xs.filter(a=>n>=(a.first+a.n)*rs).length;return[i(`Steel rings welded: ${r} / ${Vi}`,r>=Vi,n>0),i(`Tank sections completed: ${o} / 3`,o>=3,n>0),i("Sections staged for stacking",n>=1,n>.94)]}case 1:{const r=Math.max(0,Math.min(9,Math.floor((n-.13)/.085)+1)),o=Math.max(0,Math.min(9,Math.floor((n-.205)/.085)+1));return[i(`First-stage engines built: ${n>0?r:0} / 9`,r>=9,n>0),i(`Mounted on thrust structure: ${n>0?o:0} / 9`,o>=9,n>.13),i("Vacuum engine on second-stage thrust dome",n>=.92,n>.7),i("Final leak and gimbal checks",n>=1,n>.92)]}case 2:{const r=Jn.map(o=>i(o.label,n>=o.b,n>o.a));return r.push(i("Second stage mated to interstage",n>=Ys[1],n>Ys[0])),r.push(i("Landing legs and grid fins attached",n>=1,n>Ga)),r}case 3:{const r=Math.max(0,Math.min(4,Math.floor((n-.28)/.07)));return[i("Heat shield bonded",n>=.28,n>0),i(`Crew seats installed: ${r} / 4`,r>=4,n>.28),i("Nose cap fitted",n>=.66,n>.56),i("Side hatch closed and sealed",n>=.74,n>.66),i("Capsule craned onto the second stage",n>=1,n>.74)]}case 4:return[i("Vehicle rolled into the paint bay",n>=.14,n>0),i(`Helix Orbital livery applied: ${this.paintPct||0}%`,n>=.58,n>.2),i(`Drone inspection scan: ${this.scanPct||0}%`,n>=.96,n>.62),i("Inspection passed",n>=1,n>.96)];default:{const r=Math.round(this.hingeX-hn.hangarHingeX);return[i("Hangar doors open",n>=.12,n>0),i("Rocket laid on the transporter-erector",n>=.18,n>0),i(`Rollout to the pad: ${r} / ${Math.round(hn.padHingeX-hn.hangarHingeX)} m`,n>=.74,n>.22),i(`Raised vertical: ${Math.round(this.erect*90)} deg`,n>=.97,n>.74),i("Vehicle secured on the launch mount",n>=1,n>.97)]}}}}const te={hips:0,chest:1,head:2,armL:3,foreL:4,armR:5,foreR:6,thighL:7,shinL:8,thighR:9,shinR:10},Wa=[{name:"hips",parent:-1,p:[0,.98,0]},{name:"chest",parent:0,p:[0,1.12,0]},{name:"head",parent:1,p:[0,1.55,0]},{name:"armL",parent:1,p:[.215,1.46,0]},{name:"foreL",parent:3,p:[.235,1.17,0]},{name:"armR",parent:1,p:[-.215,1.46,0]},{name:"foreR",parent:5,p:[-.235,1.17,0]},{name:"thighL",parent:0,p:[.095,.95,0]},{name:"shinL",parent:7,p:[.095,.51,0]},{name:"thighR",parent:0,p:[-.095,.95,0]},{name:"shinR",parent:9,p:[-.095,.51,0]}];let Xa=null;function Ue(s,t,e,n){n&&s.applyMatrix4(n);const i=s.index?s.toNonIndexed():s,r=i.attributes.position.count,o=new Float32Array(r*3),a=new Uint16Array(r*4),l=new Float32Array(r*4),c=new Wt(e);for(let h=0;h<r;h++)o[h*3]=c.r,o[h*3+1]=c.g,o[h*3+2]=c.b,a[h*4]=t,l[h*4]=1;return i.setAttribute("color",new Mn(o,3)),i.setAttribute("skinIndex",new Mn(a,4)),i.setAttribute("skinWeight",new Mn(l,4)),i.deleteAttribute("uv"),i}const Ye=(s,t,e)=>new $t().makeTranslation(s,t,e),Ya=(s,t,e,n=0,i=0,r=0,o=1,a=1,l=1)=>new $t().compose(new I(s,t,e),new Je().setFromEuler(new ln(n,i,r)),new I(o,a,l));function qa(s,t,e,n,i){const r=new re(1,e,1,1,1,1),o=r.attributes.position;for(let a=0;a<o.count;a++){const l=o.getY(a)>0;o.setX(a,o.getX(a)*(l?t:s)),o.setZ(a,o.getZ(a)*(l?i:n))}return r.computeVertexNormals(),r}function Ac({suit:s=1847117,vest:t=16742938,hat:e=15921904,skin:n=14263418,scale:i=1}={}){const r=[];r.push(Ue(qa(.31,.33,.2,.2,.21),te.hips,s,Ye(0,.99,0))),r.push(Ue(new re(.345,.05,.225),te.hips,2303531,Ye(0,1.085,0))),r.push(Ue(qa(.32,.41,.42,.2,.235),te.chest,s,Ye(0,1.3,0))),r.push(Ue(qa(.335,.425,.33,.215,.25),te.chest,t,Ye(0,1.325,0))),r.push(Ue(new re(.405,.03,.245),te.chest,14212576,Ye(0,1.27,0))),r.push(Ue(new re(.43,.03,.255),te.chest,14212576,Ye(0,1.4,0))),r.push(Ue(new je(.07,10,8),te.chest,s,Ye(.2,1.47,0))),r.push(Ue(new je(.07,10,8),te.chest,s,Ye(-.2,1.47,0))),r.push(Ue(new re(.16,.2,.06),te.chest,2830134,Ye(0,1.34,-.15))),r.push(Ue(new xe(.05,.055,.09,10),te.chest,n,Ye(0,1.54,0))),r.push(Ue(new je(.105,16,12),te.head,n,Ya(0,1.665,0,0,0,0,.95,1.12,1))),r.push(Ue(new re(.03,.045,.03),te.head,n,Ye(0,1.65,.105))),r.push(Ue(new re(.16,.035,.03),te.head,1316636,Ye(0,1.685,.092))),r.push(Ue(new je(.118,16,8,0,Math.PI*2,0,Math.PI*.5),te.head,e,Ya(0,1.705,0,0,0,0,1,.95,1.08))),r.push(Ue(new xe(.135,.14,.014,16),te.head,e,Ya(0,1.708,.025,0,0,0,1,1,1.18))),r.push(Ue(new re(.03,.02,.2),te.head,e,Ye(0,1.815,0)));for(const d of[1,-1]){const g=d>0?te.armL:te.armR,x=d>0?te.foreL:te.foreR;r.push(Ue(new fs(.05,.24,4,10),g,s,Ye(d*.225,1.315,0))),r.push(Ue(new fs(.043,.2,4,10),x,s,Ye(d*.235,1.045,0))),r.push(Ue(new re(.06,.1,.085),x,2764081,Ye(d*.235,.875,.005)));const p=d>0?te.thighL:te.thighR,m=d>0?te.shinL:te.shinR;r.push(Ue(new fs(.078,.3,4,10),p,s,Ye(d*.095,.73,0))),r.push(Ue(new je(.068,8,6),m,2830134,Ye(d*.095,.51,.02))),r.push(Ue(new fs(.06,.28,4,10),m,s,Ye(d*.095,.3,0))),r.push(Ue(new re(.105,.09,.25),m,1447963,Ye(d*.095,.045,.04))),r.push(Ue(new re(.105,.035,.1),m,14212576,Ye(d*.095,.2,0)))}const c=dr(r,!1);c.computeBoundingSphere(),c.boundingSphere.radius*=1.6,Xa||(Xa=new Ee({vertexColors:!0,roughness:.78,metalness:.02}));const h=new tp(c,Xa);h.castShadow=!0,h.receiveShadow=!0,h.frustumCulled=!1;const u=Wa.map(d=>{const g=new Ju;return g.name=d.name,g});Wa.forEach((d,g)=>{if(d.parent>=0){const x=Wa[d.parent].p;u[g].position.set(d.p[0]-x[0],d.p[1]-x[1],d.p[2]-x[2]),u[d.parent].add(u[g])}else u[g].position.set(...d.p)});const f=new Yt;return f.add(h),h.add(u[0]),h.updateMatrixWorld(!0),h.bind(new uc(u)),f.scale.setScalar(i),{group:f,mesh:h,bones:u,phase:0,blend:0,runBlend:0,idleT:Math.random()*10,gesture:0,hideHead(d){u[te.head].scale.setScalar(d?.001:1)}}}function Cc(s,t,e,n={}){const i=s.bones,r=t>.15,o=Ri.clamp((t-3.2)/3.2,0,1);s.blend+=((r?1:0)-s.blend)*Math.min(1,e*9),s.runBlend+=(o-s.runBlend)*Math.min(1,e*7);const a=.74+s.runBlend*.95;s.phase+=t/a*Math.PI*e,s.idleT+=e;const l=s.blend,c=s.runBlend,h=s.phase,u=Math.sin(h),f=Math.cos(h),d=.52+c*.42,g=.75+c*.75,x=.42+c*.55,p=.18+c*1.25,m=.035+c*.2,y=Math.abs(f)*(.028+c*.035);i[te.hips].position.y=.98-l*(.03+c*.02)+l*y,i[te.hips].rotation.set(l*m,l*u*.07,l*f*.035);const M=Math.sin(s.idleT*1.7)*.012;i[te.chest].rotation.set(l*m*.5+M*(1-l),-l*u*.14,-l*f*.03),i[te.chest].scale.set(1,1+M*.6*(1-l),1+M*(1-l)),i[te.head].rotation.set(-l*m*.9+Math.sin(s.idleT*.31)*.05*(1-l),l*u*.08+Math.sin(s.idleT*.23)*.22*(1-l),0);const v=[[te.thighL,te.shinL,0],[te.thighR,te.shinR,Math.PI]];for(const[T,C,b]of v){const _=Math.sin(h+b),S=Math.cos(h+b);i[T].rotation.x=l*(-_*d-c*.12);const E=Math.max(0,S)*g+Math.max(0,-_)*.12;i[C].rotation.x=l*E*(.85+c*.25)}const w=[[te.armL,te.foreL,Math.PI,1],[te.armR,te.foreR,0,-1]];for(const[T,C,b,_]of w){const S=Math.sin(h+b),E=Math.sin(s.idleT*.9+_)*.03;let L=l*(-S*x)+(1-l)*E,U=_*(.06+c*.1)*(.4+l*.6),B=-(l*(p+Math.max(0,-S)*.3*(1-c))+(1-l)*.1);if(s.gesture===1&&l<.3){const F=Math.sin(s.idleT*5+_*1.3)*.06;L=-.55+F,B=-1.15-F*.5,U=_*.08}else s.gesture===2&&l<.3&&_>0&&(L=-.9+Math.sin(s.idleT*1.3)*.05,B=-1.5);i[T].rotation.set(L,0,U),i[C].rotation.set(B,0,0)}n.seated&&(i[te.hips].position.y=.62,i[te.thighL].rotation.x=i[te.thighR].rotation.x=-1.45,i[te.shinL].rotation.x=i[te.shinR].rotation.x=1.5)}const Y1=3.4,q1=8.2,$1=.38;class Z1{constructor(t,e){this.col=e,this.body=Ac({suit:1847117,vest:2610115,hat:16054008}),t.add(this.body.group),this.pos=new I,this.prev=new I,this.vel=new I,this.vy=0,this.yaw=0,this.speed=0,this.visible=!0,this.frozen=!1,this.animSpeed=0}teleport(t,e,n,i=this.yaw){this.pos.set(t,e,n),this.prev.copy(this.pos),this.vel.set(0,0,0),this.vy=0,this.yaw=i}step(t,e,n,i){if(this.prev.copy(this.pos),this.frozen){this.speed=0;return}const r=i?q1:Y1,o=e*r,a=n*r,l=34*t;let c=o-this.vel.x,h=a-this.vel.z;const u=Math.hypot(c,h);u>l&&(c=c/u*l,h=h/u*l),this.vel.x+=c,this.vel.z+=h;const f=this.pos,d=f.x,g=f.z;f.x+=this.vel.x*t,f.z+=this.vel.z*t,this.col.resolve(f,$1,1.8);const x=this.col.floorAt(f.x,f.z,f.y);f.y>x+.02?(this.vy-=24*t,f.y+=this.vy*t,f.y<=x&&(f.y=x,this.vy=0)):(f.y=x,this.vy=0);const p=f.x-d,m=f.z-g;if(this.speed=Math.hypot(p,m)/t,this.speed<Math.hypot(this.vel.x,this.vel.z)*.5&&(this.vel.x=p/t,this.vel.z=m/t),Math.hypot(e,n)>.1){let M=Math.atan2(e,n)-this.yaw;for(;M>Math.PI;)M-=Math.PI*2;for(;M<-Math.PI;)M+=Math.PI*2;this.yaw+=M*Math.min(1,t*12)}}render(t,e,n,i=!1){const r=this.body.group;r.visible=this.visible,this.visible&&(r.position.lerpVectors(this.prev,this.pos,t),r.rotation.y=this.yaw,this.animSpeed+=(this.speed-this.animSpeed)*Math.min(1,e*10),this.body.hideHead(n),Cc(this.body,this.animSpeed,e,{seated:i}))}}const Qn=new I;class K1{constructor(t,e){this.camera=t,this.col=e,this.yaw=Math.PI/2,this.pitch=.2,this.dist=6.5,this.curDist=6.5,this.firstPerson=!1,this.truePos=new I,this.look=new I}forward(){return[Math.sin(this.yaw),Math.cos(this.yaw)]}applyMouse(t,e,n){this.yaw-=t*.0026,this.pitch=Ri.clamp(this.pitch+e*.0022,-1.25,1.35),n&&(this.dist=Ri.clamp(this.dist+n*.8,2.6,16))}update(t,e){const n=this.camera,i=Math.cos(this.pitch),r=Math.sin(this.pitch),o=Math.sin(this.yaw)*i,a=Math.cos(this.yaw)*i,l=-r;if(this.firstPerson)this.truePos.set(e.x+Math.sin(this.yaw)*.12,e.y+1.68,e.z+Math.cos(this.yaw)*.12),this.look.set(this.truePos.x+o,this.truePos.y+l,this.truePos.z+a);else{Qn.set(e.x,e.y+1.55,e.z);const c=this.dist,h=Qn.x-o*c,u=Qn.y-l*c,f=Qn.z-a*c,d=this.col.boom(Qn.x,Qn.y,Qn.z,h,Math.max(u,e.y+.25),f),g=Math.max(.6,c*d-.15);this.curDist=g<this.curDist?g:this.curDist+(g-this.curDist)*Math.min(1,t*5);const x=this.curDist;this.truePos.set(Qn.x-o*x,Math.max(Qn.y-l*x,e.y+.25),Qn.z-a*x),this.look.copy(Qn)}n.up.set(0,1,0)}}const Ze=Math.PI,j1=[{suit:2504527,vest:16742938,hat:15909376,pts:[[-86,-8.9],[-70,-9.4,7,Ze,2],[-46,-9.4,6,Ze,2],[-37,-8.9]]},{suit:2962240,vest:15909376,hat:16054008,pts:[[-88,9.3],[-66,9.6,8,0,2],[-45,9.6,6,0,1],[-35,9.3]]},{suit:2504527,vest:16742938,hat:16742938,pts:[[-25,-8.9],[-9,-6.6,7,0,2],[15,-8.9,5,0,2],[41,-8.9]]},{suit:2962240,vest:15909376,hat:15909376,pts:[[-22,13.6],[-14,14.6,6,0,1],[9,13.6,7,Ze/2,2],[35,13.8]]},{suit:2046515,vest:16742938,hat:16054008,pts:[[-22,-12.4],[0,-12.6,6,Ze,1],[30,-12.6,7,Ze,2],[57,-12.4]]},{suit:2504527,vest:15909376,hat:2610115,pts:[[44,9.2],[57,9.5,7,Ze,1],[78,9.3,6,Ze,2],[88,9.6]]},{suit:2962240,vest:16742938,hat:16054008,pts:[[228,-24],[243,-27,9,Ze/2,2],[250,-34,6,.4,1],[236,-38]]},{suit:2046515,vest:15909376,hat:15909376,pts:[[128,-70],[140,-74,8,Ze,1],[156,-73,6,0,2],[166,-68]]}];function J1(s){const t=new Yt,e=new Le,n=15905792,i=2303531;e.box(s.paint,-.25,.75,0,1.9,.7,1.15,n),e.box(s.paint,-1,1,0,.6,.9,1.1,i),e.box(s.paint,-.3,1.15,0,.5,.12,.5,i);for(const[h,u]of[[.35,.52],[.35,-.52],[-.95,.52],[-.95,-.52]])e.box(s.paint,h,1.6,u,.07,1.1,.07,i);e.box(s.paint,-.3,2.17,0,1.45,.06,1.15,i);for(const h of[-.42,.42])e.box(s.metal,.82,1.5,h,.1,2.7,.12,8159624);for(const[h,u]of[[.45,.6],[.45,-.6],[-.85,.6],[-.85,-.6]])e.cyl(s.rubber,h,.32,u,.32,.26,1382170,Ze/2,0);e.box(s.lampAmber,-.3,2.28,0,.16,.14,.16,16777215),e.build(t);const r=new Yt,o=new Le;o.box(s.metal,.95,0,0,.08,.6,1,3159098);for(const h of[-.3,.3])o.box(s.metal,1.5,-.27,h,1.1,.06,.12,3159098);o.build(r);const a=new Yt,l=new Le;l.box(s.matte,1.5,-.14,0,1.2,.14,1.1,9071164),l.box(s.matte,1.5,.35,0,1.05,.8,.95,3104650),l.build(a),r.add(a),t.add(r);const c=Ac({suit:2962240,vest:16742938,hat:15909376});return c.group.position.set(-.3,.55,0),c.group.rotation.y=Ze/2,Cc(c,0,.016,{seated:!0}),t.add(c.group),{g:t,forks:r,load:a}}function Q1(s,t){const e=new Yt,n=new Le;return n.box(s.paint,0,.36,0,2.2,.3,1.3,2078120),n.box(s.paint,0,.2,0,2.3,.1,1.4,2303531),n.box(s.lampAmber,.95,.62,0,.14,.2,.14,16777215),n.box(s.lampTeal,1.11,.36,0,.03,.08,1,16777215),t===0?(n.box(s.matte,-.3,.86,0,1.2,.7,1,8028038),n.cyl(s.metal,.62,.9,.2,.2,.8,12745285)):(n.cyl(s.metal,-.35,.95,0,.42,.9,12172996),n.box(s.matte,.55,.76,0,.7,.5,.9,3104650)),n.build(e),{g:e}}class t_{constructor({M:t,site:e,col:n,rng:i}){this.col=n,this.rng=i,this.npcs=[],this.vehicles=[];const r=e.root;for(const o of j1){const a=Ac({suit:o.suit,vest:o.vest,hat:o.hat,scale:.94+i.next()*.1});r.add(a.group);const l={body:a,pts:o.pts,seg:0,dir:1,t:i.next(),wait:0,x:o.pts[0][0],z:o.pts[0][1],yaw:0,ox:0,oz:0,speed:0,walk:1.25+i.next()*.35,gesture:0,paused:!1},c=o.pts[0],h=o.pts[1];l.x=c[0]+(h[0]-c[0])*l.t,l.z=c[1]+(h[1]-c[1])*l.t,this.npcs.push(l)}for(const[o,a,l,c]of[[-31.5,-33,56,.2],[31.5,-33,84,.65]]){const h=J1(t);r.add(h.g);const u={kind:"forklift",...h,z:o,xa:a,xb:l,x:a+(l-a)*c,dir:1,speed:0,yaw:0,turn:0,wait:0,loaded:c>.4,lift:.5,top:3.4,hx:1.5,hz:.75};u.col=n.boxC(u.x,o,u.hx,u.hz,0,2.4,"forklift"),u.col.nocam=!0,this.vehicles.push(u)}[[-10.8,-26,82,.3,0],[10.8,-26,82,.7,1]].forEach(([o,a,l,c,h])=>{const u=Q1(t,h);r.add(u.g);const f={kind:"cart",...u,z:o,xa:a,xb:l,x:a+(l-a)*c,dir:h?-1:1,speed:0,yaw:0,turn:0,wait:0,top:1.7,hx:1.2,hz:.72};f.col=n.boxC(f.x,o,f.hx,f.hz,0,1.3,"cart"),f.col.nocam=!0,this.vehicles.push(f)}),this.time=0}step(t,e){this.time+=t;const n=e.pos.x,i=e.pos.z,r=e.pos.y;for(const o of this.npcs){const a=n-(o.x+o.ox),l=i-(o.z+o.oz),c=Math.hypot(a,l),h=r<3&&c<1.7;if(o.speed=0,o.wait>0)o.wait-=t,o.wait<=0&&(o.gesture=0);else if(!h){const u=o.pts[o.seg],f=o.pts[o.seg+o.dir],d=Math.hypot(f[0]-u[0],f[1]-u[1]);o.t+=o.walk*t/d,o.speed=o.walk;let x=Math.atan2(f[0]-u[0],f[1]-u[1])-o.yaw;for(;x>Ze;)x-=2*Ze;for(;x<-Ze;)x+=2*Ze;if(o.yaw+=x*Math.min(1,t*8),o.t>=1){o.seg+=o.dir,o.t=0;const y=o.pts[o.seg];y[2]&&(o.wait=y[2]*(.7+this.rng.next()*.6),o.gesture=y[4]||0,o.stopYaw=y[3]||0),(o.seg===0||o.seg===o.pts.length-1)&&(o.dir=-o.dir)}const p=o.pts[o.seg],m=o.pts[o.seg+o.dir];o.x=p[0]+(m[0]-p[0])*o.t,o.z=p[1]+(m[1]-p[1])*o.t}if(o.wait>0&&o.stopYaw!==void 0){let u=o.stopYaw-o.yaw;for(;u>Ze;)u-=2*Ze;for(;u<-Ze;)u+=2*Ze;o.yaw+=u*Math.min(1,t*5)}if(r<3&&c<.95){const u=c>1e-4?(.95-c)/c:0;o.ox-=a*u,o.oz-=l*u}else{const u=Math.hypot(o.ox,o.oz);if(u>0){const f=Math.max(0,u-1.1*t)/u;o.ox*=f,o.oz*=f}}}for(const o of this.vehicles){let l=o.kind==="forklift"?3.2:1.9;const c=(n-o.x)*o.dir;r<3&&Math.abs(i-o.z)<o.hz+.9&&c>-.6&&c<o.hx+4.5&&(l=0);const u=((o.dir>0?o.xb:o.xa)-o.x)*o.dir;if(o.wait>0){if(o.wait-=t,l=0,o.kind==="forklift"){const x=1-o.wait/o.waitTotal;o.lift=x<.3?.5*(1-x/.3):x<.5?0:.5*Math.min(1,(x-.5)/.2),x>=.4&&!o.swapped&&(o.loaded=!o.loaded,o.swapped=!0),o.turn=Math.max(0,Math.min(1,(x-.7)/.3))}else o.turn=Math.max(0,Math.min(1,1-o.wait/o.waitTotal));o.wait<=0&&(o.dir=-o.dir,o.turn=0)}else u<.05?(o.waitTotal=o.wait=o.kind==="forklift"?7+this.rng.next()*3:3+this.rng.next()*2,o.swapped=!1,o.speed=0,l=0):l=Math.min(l,Math.sqrt(2*1.6*Math.max(0,u))+.05);const f=2.2*t;o.speed+=Math.max(-f*2,Math.min(f,l-o.speed)),o.speed<0&&(o.speed=0),o.x+=o.speed*o.dir*t;const d=o.dir>0?0:Ze;o.yaw=d+o.turn*Ze;const g=o.turn>.05&&o.turn<.95?Math.max(o.hx,o.hz):o.hx;o.col.x0=o.x-g,o.col.x1=o.x+g,o.col.z0=o.z-o.hz,o.col.z1=o.z+o.hz}}render(t,e){for(const n of this.npcs){const i=n.body.group;i.position.set(n.x+n.ox,n.z>-40&&n.z<40&&n.x>-96&&n.x<96?.1:.06,n.z+n.oz),i.rotation.y=n.yaw,n.body.gesture=n.wait>0?n.gesture:0,n.anim=(n.anim||0)+(n.speed-(n.anim||0))*Math.min(1,t*8),Cc(n.body,n.anim,t)}for(const n of this.vehicles)n.g.position.set(n.x,.1,n.z),n.g.rotation.y=-n.yaw,n.kind==="forklift"&&(n.forks.position.y=.45+n.lift*1.4,n.load.visible=n.loaded)}}const uu=Math.PI,$a=Ri.clamp,qs=s=>s*s*(3-2*s),$s=(s,t,e)=>s<=t?0:s>=e?1:(s-t)/(e-t),Zl=new I(Gn.hx,0,Gn.hz),Pf=new I(0,1,0),e_=new I().crossVectors(Pf,Zl).normalize(),fu=new Je,du=new Je,Hi=new I,ci=new I,Mi=new I,Za=[[-60,"T-minus 60 seconds",1],[-56,"Helix-1 is on internal power."],[-51,"Crew access arm is retracting."],[-45,"Stage one and stage two liquid oxygen load is complete."],[-38,"Strongback is retracting to launch position."],[-30,"T-minus 30 seconds",1],[-26,"Flight computer has control of the vehicle."],[-21,"Vents closed. Propellant tanks are pressurizing for flight."],[-15,"Launch director: Helix-1, you are GO for launch."],[-10,"T-minus 10",1],[-9,"9",1],[-8,"8",1],[-7,"7",1],[-6,"6",1],[-5,"5",1],[-4,"4",1],[-3,"3",1],[-2,"2",1],[-1,"1",1],[-.55,"Ignition",1]],n_={LIFTOFF:["Liftoff, we have liftoff of Helix-1",1],ROLL:["Roll program",1],MACH1:["Vehicle is supersonic."],MAXQ:["Max-Q",1],MECO:["Main engine cut-off",1],SEP:["Stage separation confirmed",1],SES1:["Second stage ignition",1],BOOSTBACK:["Booster has flipped. Boostback burn has started."],BOOSTBACK_END:["Boostback shutdown. Grid fins are deployed."],ENTRY:["Entry burn startup - three engines."],ENTRY_END:["Entry burn shutdown. Booster is on target."],LANDING_BURN:["Booster landing burn",1],LEGS:["Landing legs are deployed."],TOUCHDOWN:["The booster has landed",1],ORBIT:["Orbit insertion confirmed, welcome to orbit",1]},pu={IGNITION:"Ignition",LIFTOFF:"Liftoff",ROLL:"Roll program",MACH1:"Supersonic",MAXQ:"Max-Q",MECO:"MECO",SEP:"Stage separation",SES1:"Second-stage burn",BOOSTBACK:"Boostback burn",BOOSTBACK_END:"Booster coast",ENTRY:"Entry burn",ENTRY_END:"Booster descent",LANDING_BURN:"Landing burn",LEGS:"Landing burn",TOUCHDOWN:"Booster landed",SECO:"SECO",ORBIT:"In orbit"};class mu{constructor(t,e,n){const i=new xe(1,1,1,40,24,!0);i.translate(0,-.5,0),this.uniforms={uR0:{value:1.5},uR1:{value:3},uLen:{value:50},uTime:{value:0},uPower:{value:0},uHot:{value:new Wt(1,.66,.26)},uCool:{value:new Wt(1,.3,.05)},uDiamonds:{value:6},uShape:{value:1}},this.mat=new Ie({uniforms:this.uniforms,transparent:!0,depthWrite:!1,side:Ke,blending:er,fog:!1,vertexShader:`
        uniform float uR0, uR1, uLen, uShape; varying float vT; varying vec3 vN; varying vec3 vV; varying float vA;
        void main(){
          float t = -position.y; vT = t;
          float r = mix(uR0, uR1, pow(max(t, 0.0), uShape));
          vec3 p = vec3(position.x * r, -t * uLen, position.z * r);
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vN = normalize(normalMatrix * vec3(position.x, (uR1 - uR0) / uLen, position.z));
          vV = normalize(-mv.xyz);
          vA = atan(position.z, position.x);
          gl_Position = projectionMatrix * mv;
        }`,fragmentShader:`
        precision highp float;
        uniform float uTime, uPower, uDiamonds; uniform vec3 uHot, uCool; varying float vT; varying vec3 vN; varying vec3 vV; varying float vA;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
          return mix(mix(hash(i), hash(i+vec2(1,0)), f.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), f.x), f.y); }
        void main(){
          float f = abs(dot(normalize(vN), normalize(vV)));
          float n = noise(vec2(vA * 3.0, vT * 9.0 - uTime * 16.0)) * 0.6 + noise(vec2(vA * 9.0, vT * 30.0 - uTime * 34.0)) * 0.4;
          float fade = pow(clamp(1.0 - vT, 0.0, 1.0), 1.25) * smoothstep(0.0, 0.03, vT);
          float dia = 1.0 + 0.9 * pow(abs(sin(vT * uDiamonds * 3.14159)), 6.0) * (1.0 - smoothstep(0.0, 0.55, vT));
          float a = fade * (0.35 + 0.9 * n) * pow(max(f, 0.0001), 0.8) * dia * uPower;
          vec3 col = mix(uHot, uCool, smoothstep(0.0, 0.6, vT)) * 2.5;
          gl_FragColor = vec4(col * a, a);
        }`}),this.mesh=new Ae(i,this.mat),this.mesh.frustumCulled=!1,this.mesh.position.y=n,this.mesh.renderOrder=14,this.core=new Ae(i,this.mat.clone()),this.core.material.uniforms=ii.clone(this.uniforms),this.core.frustumCulled=!1,this.core.position.y=n,this.core.renderOrder=15,e.add(this.mesh,this.core),t.markNoAO(this.mesh),t.markNoAO(this.core),this.mesh.visible=this.core.visible=!1}set(t,e,n,i,r=!1){const o=t>.01;if(this.mesh.visible=this.core.visible=o,!o)return;const a=1-n,l=this.uniforms,c=this.core.material.uniforms;l.uTime.value=c.uTime.value=i,l.uR0.value=e,l.uR1.value=e*(r?8:3+a*a*12),l.uLen.value=(r?26:84+a*50)*(.5+.5*t)*(e/1.7),l.uShape.value=r?.55:1-a*.4,l.uPower.value=t*(r?.2:.95-a*.6),l.uDiamonds.value=5,r&&(l.uHot.value.setRGB(.75,.85,1),l.uCool.value.setRGB(.35,.5,1)),c.uR0.value=e*.82,c.uR1.value=e*(r?1.6:.5+a*1.6),c.uLen.value=l.uLen.value*(r?.35:.42),c.uShape.value=1,c.uPower.value=t*(r?.9:1.25),c.uDiamonds.value=7,c.uHot.value.setRGB(1,.95,.82),c.uCool.value.setRGB(r?.6:1,.62,r?1:.2)}}class i_{constructor({engine:t,site:e,pad:n,rocket:i,factory:r,fx:o,hud:a,particlesFor:l,sound:c}){Object.assign(this,{engine:t,site:e,pad:n,rocket:i,factory:r,fx:o,hud:a,sound:c}),this.state="idle",this.sim=null,this.cam=2,this.chase={yaw:2.35,pitch:.12,dist:95},this.padBase=new I(Bt.x,Bt.baseY,Bt.z),this.stackAnchor=t.addAnchor(new Yt,new I),this.boosterAnchor=t.addAnchor(new Yt,new I),this.plume1=new mu(t,i.booster,-1.5+.1),this.plumeV=new mu(t,i.upper,ie.interTop-3.35),this.stackFx=l(this.stackAnchor),this.boosterFx=l(this.boosterAnchor),this.captionIdx=0,this.seenEvents=0,this.phaseLabel="Countdown",this.camTrue=new I,this.lookTrue=new I,this.camUp=new I(0,1,0),this.fov=58,this.autoDirector=!1,this.shake=0,this.roll=0,this.time=0}begin(t=-60){const{rocket:e,factory:n}=this;this.sim=new T1({seed:ql,lzDownrange:Gn.lzDownrange,lzAlt:Gn.lzAlt,startT:t}),this.state="countdown",this.captionIdx=0,this.seenEvents=0,e.inFlight=!0,this.stackAnchor.add(e.root),e.root.position.set(0,0,0),e.root.quaternion.identity(),this.stackAnchor.userData.truePos.copy(this.padBase),e.setHatch(0),e.paint.value=1.2,n.strongbackRetract=0,this.sound.T=t,this.sound.cue("countdown_start",null,.6,8,1,"ui_panel_open")}step(t){!this.sim||this.state==="idle"||(this.sim.step(t),this.state==="countdown"&&this.sim.stack.liftedOff&&(this.state="flight"),this.sim.done&&this.state!=="done"&&(this.doneAt=this.doneAt===void 0?this.sim.t:this.doneAt,this.sim.t-this.doneAt>6&&(this.state="done")))}toSite(t,e,n){return n.set(Bt.x+Gn.hx*t,Bt.baseY+(e-Ne),Bt.z+Gn.hz*t)}attitude(t,e,n){return fu.setFromAxisAngle(e_,t),du.setFromAxisAngle(Pf,e),n.copy(fu).multiply(du)}render(t,e,n,i){const r=this.sim;if(!r)return;this.time=e;const{rocket:o,pad:a,factory:l,fx:c,hud:h}=this,u=r.t,f=r.stack,d=r.booster,g=this.sound;for(;this.captionIdx<Za.length&&u>=Za[this.captionIdx][0];){const[E,L,U]=Za[this.captionIdx++];h.caption(L,4.5,e),g.T=E,U&&g.say(L,/^\d$/.test(L)?0:1)}for(;this.seenEvents<r.events.length;){const E=r.events[this.seenEvents++],L=n_[E.id];g.T=E.t,L&&(h.caption(L[0],6,e),L[1]&&g.say(L[0])),pu[E.id]&&(this.phaseLabel=pu[E.id]),this.onEvent(E.id)}g.T=u,h.phase(u<-3?"Countdown":this.phaseLabel),h.telemetry(r),a.setArm(qs($s(u,-53,-45)));const x=r.eventTimes.LIFTOFF;l.strongbackRetract=qs($s(u,-38,-30))*.075+(x!==void 0?qs($s(u,x,x+3.5))*.62:0),l.te.strongback.rotation.z=-uu/2+l.strongbackRetract,a.setUmbilicals(qs(x!==void 0?$s(u,x-.4,x+1.6):$s(u,-1.2,.6)));const p=this.stackAnchor,m=this.boosterAnchor;this.toSite(f.x,f.y,p.userData.truePos),this.roll=qs($s(u,7.5,16))*.9,this.attitude(f.ang,this.roll,o.root.quaternion),d.active&&(o.booster.parent!==m&&(m.add(o.booster),o.booster.position.set(0,0,0),this.sepRoll=this.roll),this.toSite(d.x,d.y,m.userData.truePos),this.attitude(d.ang,this.sepRoll,o.booster.quaternion),o.setLegs(d.legs),o.setFins(d.fins));const y=f.alt,M=Math.exp(-Math.max(y,0)/7400);let v=0,w=1.72,T=M,C=0,b=0,_=0;f.staged?d.active&&(T=Math.exp(-Math.max(d.alt,0)/7400),v=d.throttle*(d.engines>0?1:0),d.engines===3?(w=1.05,b=d.throttle):d.engines===1&&(w=.5,_=d.throttle,v=Math.max(.55,d.throttle),d.throttle<=0&&(v=0))):(v=f.throttle,C=f.throttle),this.plume1.set(v,w,T,e);const S=f.staged?f.throttle:0;if(this.plumeV.set(S,1.12,0,e,!0),this.glow9=(this.glow9||0)+(C-(this.glow9||0))*Math.min(1,t*(C>(this.glow9||0)?1.2:.15)),this.glow3=(this.glow3||0)+(b-(this.glow3||0))*Math.min(1,t*(b>(this.glow3||0)?1.5:.15)),this.glow1=(this.glow1||0)+(_-(this.glow1||0))*Math.min(1,t*(_>(this.glow1||0)?1.5:.15)),this.glowV=(this.glowV||0)+(S-(this.glowV||0))*Math.min(1,t*(S>(this.glowV||0)?.6:.1)),o.setGlow(this.glow9,this.glow3,this.glow1,this.glowV),v>.01){const E=d.active?o.booster.quaternion:o.root.quaternion;Hi.set(0,-14,0).applyQuaternion(E).add(d.active?m.userData.truePos:p.userData.truePos),this.engine.setFxLight(Hi,v*(w>1.5?5200:w>1?2400:1e3)*(.9+.2*Te()),16756848,700),this.plumeGlow(d.active?this.boosterFx:this.stackFx,E,-1.5,v,w,T,!1,t)}S>.01&&this.plumeGlow(this.stackFx,o.root.quaternion,ie.interTop-3.4,S,1.1,0,!0,t),this.emitParticles(t,u,f,d,v,T),this.boosterFx.update(t),this.stackFx.update(t),this.updateCamera(t,n,i)}plumeGlow(t,e,n,i,r,o,a,l){const c=1-o,h=a?22:(60+c*60)*(r/1.7);this.glowAcc=(this.glowAcc||0)+l*(a?30:150)*(.4+.6*i);let u=Math.min(12,Math.floor(this.glowAcc));for(this.glowAcc-=u;u-- >0;){const f=Math.pow(Te(),1.6),d=r*(.3+f*(a?5:1.2+c*c*8));ci.set(Ot(-1,1)*d*.5,n-f*h*.75,Ot(-1,1)*d*.5).applyQuaternion(e),Mi.set(Ot(-4,4),-Ot(70,130),Ot(-4,4)).applyQuaternion(e);const g=r*(1.6+f*2.4)*(a?1.6:1+c*2.5),x=Ot(.18,.4),p=(1-f)*i;a?t.glow.emit(ci.x,ci.y,ci.z,Mi.x,Mi.y,Mi.z,x,g,g*2.6,.35*p,.5*p,1*p,.12,.5,0):t.glow.emit(ci.x,ci.y,ci.z,Mi.x,Mi.y,Mi.z,x,g*1.3,g*3,(2.6-f*.8)*p,(1.15-f*.7)*p,(.32-f*.26)*p,.42*(1-c*.6),.5,0)}}onEvent(t){const{fx:e}=this,n=this.sound,i=this.sim.stack,r=this.sim.booster,o=this.stackAnchor.userData.truePos,a=this.boosterAnchor.userData.truePos,l=this.cam===1||this.cam===4&&!r.active?.7:Math.exp(-Math.max(0,i.alt)/9e3),c=this.cam===4&&r.active?.7:Math.exp(-Math.max(0,r.alt)/9e3),h=u=>[u.x,u.y,u.z];switch(t){case"IGNITION":n.cue("ignition",[Bt.x,8,Bt.z],1,160);break;case"LIFTOFF":n.cue("liftoff",[Bt.x,8,Bt.z],1,120,1,"liftoff_release");break;case"MAXQ":n.cue("max_q",h(o),.5*l,400,.7,"engine_cutoff");break;case"MECO":n.cue("main_engine_cutoff",h(o),l,600,1,"engine_cutoff");break;case"SEP":n.cue("stage_separation",h(o),l,600,1,"stage_sep");break;case"SES1":n.cue("second_stage_ignition",h(o),l,600,1,"engine_relight");break;case"BOOSTBACK":case"ENTRY":n.cue("booster_relight",h(a),c,600,1,"engine_relight");break;case"LANDING_BURN":n.cue("booster_landing_burn",h(a),Math.max(c,.3),500,.9,"engine_relight");break;case"LEGS":n.cue("landing_legs_lock",h(a),1,120);break;case"TOUCHDOWN":n.cue("booster_touchdown",h(a),1,140);break;case"SECO":n.cue("second_engine_cutoff",h(o),l,600,1,"engine_cutoff");break;case"ORBIT":n.cue("orbit_insertion",null,.7,8,1,"ui_objective");break}if(t==="SEP")for(let u=0;u<40;u++){const f=Te()*6.283;this.boosterFx.smoke.emit(Math.sin(f)*1.9,ie.interTop,Math.cos(f)*1.9,Math.sin(f)*6,Ot(1,5),Math.cos(f)*6,1.6,.6,5,1,1,1,.35,.8,0)}}emitParticles(t,e,n,i,r,o){const{fx:a,pad:l}=this,c=Bt.x,h=Bt.z;if(e<-20&&e>-61){const f=Te()<t*26?1:0;for(let d=0;d<f;d++){const g=Bt.baseY+(Te()<.6?26.5:38.5)+Ot(-.5,.5);a.smoke.emit(c-1.2,g,h-1.7,Ot(-2.2,-.6),Ot(-1.6,-.2),Ot(-1.4,-.2),Ot(3.5,6),.7,5.5,.96,.98,1,.3,.18,.25)}}if(e>-6&&e<14){const f=Math.round(t*70+Te());for(let d=0;d<f;d++){const g=Te()*6.283;a.smoke.emit(c+Math.cos(g)*6.5,6.2,h+Math.sin(g)*6.5,-Math.cos(g)*5,Ot(-1,2),-Math.sin(g)*5,1.4,.5,3.2,.7,.78,.88,.22,.5,7)}}const u=!n.staged&&n.alt<180?n.throttle:0;if(u>.05){const f=Math.round(t*260*u+Te());for(let g=0;g<f;g++){const x=Te()*6.283,p=Ot(16,46)*u,m=Te()<.62,y=m?Ot(.7,.86):Ot(.42,.56);a.smoke.emit(c+Math.cos(x)*3,Ot(.6,2.2),h+Math.sin(x)*3,Math.cos(x)*p,Ot(.5,9),Math.sin(x)*p,Ot(5,11),3.5,Ot(16,30),y,y,m?y:y*.96,m?.55:.5,.42,-.5,.4)}const d=Math.round(t*80*u);for(let g=0;g<d;g++){const x=Te()*6.283,p=Ot(10,30);a.sparks.emit(c+Math.cos(x)*2,Ot(.5,3),h+Math.sin(x)*2,Math.cos(x)*p,Ot(0,6),Math.sin(x)*p,Ot(.3,.7),2.4,5.5,3.2,1.5,.45,.5,1.5,0)}}if(!n.staged&&n.liftedOff&&n.throttle>.3&&n.alt<42e3&&n.alt>60){this.trailAcc=(this.trailAcc||0)+t*22;const f=this.stackAnchor.userData.truePos,d=Math.sin(n.ang)*Gn.hx,g=Math.cos(n.ang),x=Math.sin(n.ang)*Gn.hz;for(;this.trailAcc>1;){this.trailAcc-=1;const p=Ot(30,60),m=Math.exp(-n.alt/9e3);a.trail.emit(f.x-d*p+Ot(-2,2),f.y-g*p,f.z-x*p+Ot(-2,2),-d*14+Ot(-2,2),-g*14,-x*14+Ot(-2,2),Ot(22,34),8,Ot(38,70),.95,.94,.92,.2+.4*m,.25,0)}}if(i.active){if(i.rcs>0&&Te()<t*40){const d=Te()<.5?1:-1;this.boosterFx.smoke.emit(d*1.9,ie.interTop-.6,0,d*Ot(10,18),Ot(-2,2),Ot(-3,3),.7,.3,2.6,1,1,1,.45,1.5,0)}const f=i.alt-Gn.lzAlt;if(i.engines===1&&i.throttle>.2&&f<110){const d=1-f/110,g=Math.round(t*150*d+Te());for(let x=0;x<g;x++){const p=Te()*6.283,m=Ot(8,30)*(.4+d);a.smoke.emit(pe.x+Math.cos(p)*2.5,pe.y+Ot(.3,1.2),pe.z+Math.sin(p)*2.5,Math.cos(p)*m,Ot(.4,5),Math.sin(p)*m,Ot(3,7),2,Ot(9,18),.78,.74,.68,.42,.5,-.3,pe.y+.3)}}}}setCam(t){this.cam=t,this.hud.setCam(t)}director(t){const e=this.sim,n=e.eventTimes;let i=3;t<-34?i=3:t<-9?i=2:t<20?i=3:t<52?i=2:t<96?i=1:t<122?i=3:n.SES1===void 0||t<n.SES1+9?i=1:n.BOOSTBACK_END===void 0||t<n.BOOSTBACK_END+4?i=4:n.ENTRY===void 0||t<n.ENTRY-12?i=2:n.ENTRY_END===void 0||t<n.ENTRY_END+10?i=4:n.LANDING_BURN===void 0||t<n.LANDING_BURN-6?i=2:n.TOUCHDOWN===void 0||t<n.TOUCHDOWN+7?i=3:n.SECO===void 0||t<n.SECO-14?i=2:t<n.SECO+4?i=1:i=2,i!==this.cam&&this.setCam(i)}updateCamera(t,e,n){const i=this.sim,r=i.stack,o=i.booster,{rocket:a,pad:l}=this;this.autoDirector&&this.director(i.t);const[c,h,u]=e?e.takeMouse():[0,0,0];n?this.chase.yaw+=t*.02:(this.chase.yaw-=c*.004,this.chase.pitch=$a(this.chase.pitch+h*.003,-1.2,1.3),u&&(this.chase.dist=$a(this.chase.dist*(1+u*.12),28,900)));const f=this.stackAnchor.userData.truePos,d=this.boosterAnchor.userData.truePos,g=this.cam;let x=58,p=1;const m=r.staged?0:r.throttle;let y=0;if(g===1){const M=a.root.quaternion;this.camTrue.set(0,40.6,3.3).applyQuaternion(M).add(f),this.lookTrue.set(0,14,1.2).applyQuaternion(M).add(f),this.camUp.set(0,.25,1).applyQuaternion(M).normalize(),x=74,p=.3,y=(m+(r.staged?r.throttle*.3:0))*.02*Math.min(1,r.q/12e3+.35),this.originMode="stack"}else if(g===4){const M=o.active,v=M?a.booster.quaternion:a.root.quaternion,w=M?d:f;this.camTrue.set(0,31,2.75).applyQuaternion(v).add(w),this.lookTrue.set(0,4,1).applyQuaternion(v).add(w),this.camUp.set(0,.2,1).applyQuaternion(v).normalize(),x=78,p=.3,y=(M?o.throttle:m)*.018,this.originMode=M?"booster":"stack"}else if(g===2){const M=f,v=Ne+(M.y-Bt.baseY)+0;Hi.set(M.x-Bt.x,v,M.z-Bt.z).normalize(),ci.copy(Zl).addScaledVector(Hi,-Zl.dot(Hi)).normalize(),Mi.crossVectors(Hi,ci);const w=Math.cos(this.chase.pitch),T=Math.sin(this.chase.pitch),C=this.chase.dist*(r.staged?.42:1),b=r.staged?39:24;this.lookTrue.set(0,b,0).applyQuaternion(a.root.quaternion).add(M),this.camTrue.copy(this.lookTrue).addScaledVector(ci,Math.cos(this.chase.yaw)*w*C).addScaledVector(Mi,Math.sin(this.chase.yaw)*w*C).addScaledVector(Hi,T*C);const _=2.5;r.alt<400&&this.camTrue.y<_&&(this.camTrue.y=_),this.camUp.copy(Hi),x=52,p=1.5,y=m*.01*Math.min(1,200/C),this.originMode="stack"}else{const M=i.eventTimes,v=o.active&&M.SEP!==void 0&&i.t>M.SEP+22,w=v?d:f,T=v?16:24,C=v?a.booster.quaternion:a.root.quaternion;this.lookTrue.set(0,T,0).applyQuaternion(C).add(w),this.camTrue.copy(l.trackCam);const b=this.camTrue.distanceTo(this.lookTrue);x=$a(2*Math.atan(62/b)*180/uu,.55,46),this.trackFov=this.trackFov===void 0?x:this.trackFov+(x-this.trackFov)*Math.min(1,t*2.5),x=this.trackFov,this.camUp.set(0,1,0),p=b>3e3?40:1,y=m*.0012*Math.min(1,600/b)+12e-5*x,this.originMode="site"}this.fov=x,this.near=p,this.shake=y}}const Ka=s=>document.getElementById(s),s_={locked:"#ff6257",running:"#ffb53a",ready:"#45f09a",signed:"#2fe0cf"},r_=[{id:"LIFTOFF",t:0,label:"Liftoff"},{id:"MAXQ",t:68,label:"Max-Q"},{id:"MECO",t:131,label:"MECO"},{id:"SES1",t:146,label:"Sep / SES-1",alt:!0},{id:"BOOSTBACK_END",t:191,label:"Boostback"},{id:"ENTRY",t:375,label:"Entry burn",b:!0},{id:"TOUCHDOWN",t:468,label:"Landing",b:!0},{id:"SECO",t:521,label:"SECO / orbit"}],gu=545;class o_{constructor(){this.el={};for(const t of["hud","objective","obj-eyebrow","obj-title","obj-sub","build-pct","build-bar","pips","minimap","chip-speed-t","chip-view-t","chip-fps-t","chips","cams","prompt","captions","caption-text","panel","panel-eyebrow","panel-title","panel-blurb","panel-status","panel-bar","panel-steps","panel-sign","telemetry","tl-tag","tl-speed","tl-alt","tr-tag","tr-speed","tr-alt","tr-down","t-clock","t-phase","tl-fill","tl-events","fullmap","bigmap","scorecard","toast","benchtag","start","btn-start","btn-bench","load-note","mapwrap","chip-speed","chip-view","chip-sound-t"])this.el[t]=Ka(t);this.mm=this.el.minimap.getContext("2d"),this.bm=this.el.bigmap.getContext("2d"),this.el.pips.innerHTML=An.map(t=>`<div title="${t.name}">${String(t.n).padStart(2,"0")}</div>`).join(""),this.el["tl-events"].innerHTML=r_.map(t=>`<span data-id="${t.id}" class="${t.b?"b ":""}${t.alt?"up":""}" style="left:${t.t/gu*100}%">${t.label}</span>`).join(""),this.panelIndex=-1,this.mapOpen=!1,this.captionUntil=0,this.toastUntil=0,this.acc=0,this.cache={}}set(t,e){this.cache[t]!==e&&(this.cache[t]=e,this.el[t].textContent=e)}html(t,e){this.cache[t]!==e&&(this.cache[t]=e,this.el[t].innerHTML=e)}show(t,e){const n="vis:"+t;this.cache[n]!==e&&(this.cache[n]=e,this.el[t].classList.toggle("hidden",!e))}ready(){this.el["btn-start"].disabled=!1,this.el["btn-start"].textContent="Start shift",this.el["btn-bench"].disabled=!1,this.el["load-note"].textContent="Everything you see and hear is generated in code - no models, textures, images or audio files."}begin(t){this.el.start.classList.add("hidden"),this.el.hud.classList.remove("hidden"),this.show("benchtag",t)}objective(t,e,n){this.set("obj-eyebrow",t),this.set("obj-title",e),this.html("obj-sub",n)}build(t){const e=Math.round(t.overall()*100);this.set("build-pct",e+"%"),this.cache.bw!==e&&(this.cache.bw=e,this.el["build-bar"].style.width=e+"%");const n=this.el.pips.children;for(let i=0;i<n.length;i++){const r=t.st[i].state,o=r==="signed"?"done":r==="ready"?"ready":r==="running"?"run":"";n[i].className!==o&&(n[i].className=o)}}prompt(t,e){if(!e)return this.show("prompt",!1);this.html("prompt",`<kbd>${t}</kbd><span>${e}</span>`),this.show("prompt",!0)}caption(t,e,n,i="Launch control"){this.el.captions.querySelector(".who").textContent=i,this.set("caption-text",t),this.captionUntil=n+e,this.show("captions",!0)}toast(t,e,n){this.set("toast",t),this.toastUntil=n+e,this.show("toast",!0)}tick(t){this.captionUntil&&t>this.captionUntil&&(this.show("captions",!1),this.captionUntil=0),this.toastUntil&&t>this.toastUntil&&(this.show("toast",!1),this.toastUntil=0)}openPanel(t,e){this.panelIndex=t;const n=An[t];this.set("panel-eyebrow",`Station ${String(n.n).padStart(2,"0")} of 06`),this.set("panel-title",n.name),this.set("panel-blurb",n.blurb),this.show("panel",!0),document.body.classList.add("panel-open"),this.refreshPanel(e)}closePanel(){this.panelIndex=-1,this.show("panel",!1),document.body.classList.remove("panel-open")}refreshPanel(t){const e=this.panelIndex;if(e<0)return;const n=t.st[e],i={locked:`Locked - sign off station ${String(e).padStart(2,"0")} first`,running:`Working - ${Math.round(n.progress*100)}%`,ready:"Work complete - ready for sign-off",signed:"Signed off"}[n.state];this.set("panel-status",i);const r=this.el["panel-status"],o="status "+n.state;r.className!==o&&(r.className=o);const a=Math.round(n.progress*100);this.cache.pw!==a&&(this.cache.pw=a,this.el["panel-bar"].style.width=a+"%"),this.html("panel-steps",t.status(e).map(h=>`<li class="${h.done?"done":h.active?"active":""}">${h.label}</li>`).join(""));const l=this.el["panel-sign"],c=n.state!=="ready";l.disabled!==c&&(l.disabled=c),this.set("panel-sign",n.state==="signed"?"Station signed off":n.state==="ready"?"Sign off station":n.state==="locked"?"Station locked":"Work in progress")}flightMode(t){document.body.classList.toggle("flight",t),this.show("telemetry",t),this.show("cams",t),this.show("mapwrap",!t),this.show("chip-view",!t)}setCam(t){for(const e of this.el.cams.children)e.classList.toggle("on",+e.dataset.cam===t)}telemetry(t){const e=t.t,n=e<0?"-":"+",i=Math.abs(e),r=Math.floor(i/3600),o=Math.floor(i%3600/60),a=Math.floor(i%60);this.set("t-clock",`T${n}${String(r).padStart(2,"0")}:${String(o).padStart(2,"0")}:${String(a).padStart(2,"0")}`);const l=t.stack,c=t.booster,h=c.active?c:l,u=g=>Math.round(g*3.6).toLocaleString("en-US");this.set("tl-tag",c.active?"Stage 1 - booster":"Stage 1"),this.set("tl-speed",u(h.speed)),this.set("tl-alt",(Math.max(0,h.alt)/1e3).toFixed(1)),this.set("tr-tag",l.staged?"Stage 2 - Helix-1":"Helix-1"),this.set("tr-speed",u(l.speed)),this.set("tr-alt",(Math.max(0,l.alt)/1e3).toFixed(1)),this.set("tr-down",(l.downrange/1e3).toFixed(1));const d=(Math.max(0,Math.min(1,e/gu))*100).toFixed(1);this.cache.tlw!==d&&(this.cache.tlw=d,this.el["tl-fill"].style.width=d+"%");for(const g of this.el["tl-events"].children){const x=t.eventTimes[g.dataset.id]!==void 0;x!==g.classList.contains("hit")&&g.classList.toggle("hit",x)}}phase(t){this.set("t-phase",t)}toggleMap(){this.mapOpen=!this.mapOpen,this.show("fullmap",this.mapOpen)}drawMaps(t,e){this.acc++,this.acc%4===0&&this.cache["vis:mapwrap"]!==!1&&this._draw(this.mm,440,440,{cx:t.player.x,cz:t.player.z,scale:2.6},t,!1,e),this.mapOpen&&this.acc%4===2&&this._draw(this.bm,1400,900,{cx:105,cz:30,scale:2.92},t,!0,e)}_draw(t,e,n,i,r,o,a){const l=x=>e/2+(x-i.cx)*i.scale,c=x=>n/2+(x-i.cz)*i.scale,h=i.scale;t.save(),t.fillStyle="#16261c",t.fillRect(0,0,e,n),t.fillStyle="#0e3550",t.beginPath(),t.moveTo(e,0);for(let x=0;x<=n;x+=20)t.lineTo(l(Ec(i.cz+(x-n/2)/h)),x);t.lineTo(e,n),t.fill();const u=(x,p,m,y,M,v,w=1.5)=>{M&&(t.fillStyle=M,t.fillRect(l(x),c(p),(m-x)*h,(y-p)*h)),v&&(t.strokeStyle=v,t.lineWidth=w,t.strokeRect(l(x),c(p),(m-x)*h,(y-p)*h))};u(-125,-62,128,62,"#3a4046"),u(128,-9.5,205,9.5,"#30353b"),u(54,62,66,122,"#30353b"),u(100,-110,112,-62,"#30353b"),t.fillStyle="#3a4046",t.beginPath(),t.arc(l(Bt.x),c(Bt.z),Bt.apron*h,0,7),t.fill(),t.fillStyle="#2b3036",t.beginPath(),t.arc(l(pe.x),c(pe.z),(pe.r+2)*h,0,7),t.fill(),t.strokeStyle="#f2c200",t.lineWidth=2,t.beginPath(),t.arc(l(pe.x),c(pe.z),pe.r*h*.92,0,7),t.stroke(),u(cn.x0,cn.z0,cn.x1,cn.z1,"#566270","#dfe7ef",2.5),u(cn.x0+3,-4.9,cn.x1,ae.halfW,"#3b4552");for(const x of Tc)u(x.x0,x.z0,x.x1,x.z1,"#2f4a6b","#f0c400",1.2);if(t.strokeStyle=r.doorOpen>.5?"#45f09a":"#ff6257",t.lineWidth=4,t.beginPath(),t.moveTo(l(cn.x1),c(-14)),t.lineTo(l(cn.x1),c(cn.doorHalf)),t.stroke(),u(133,-94,167,-78,"#7b7f86","#dfe7ef",1),u(le.x-le.half,le.z-le.half,le.x+le.half,le.z+le.half,"#93a1b0","#fff",1.5),u(Bt.x-4.6,Bt.z-4.6,Bt.x+4.6,Bt.z+4.6,"#6d747d","#dfe7ef",1),r.te&&u(r.te.hingeX-hn.length,-2.6,r.te.hingeX+1,2.6,"#c79a12"),r.rocket&&(t.strokeStyle="#ffffff",t.lineCap="round",r.rocket.vertical?(t.fillStyle="#fff",t.beginPath(),t.arc(l(r.rocket.x),c(r.rocket.z),Math.max(4,2.4*h),0,7),t.fill()):(t.lineWidth=Math.max(3,3.7*h),t.beginPath(),t.moveTo(l(r.rocket.x),c(0)),t.lineTo(l(r.rocket.x-r.rocket.len),c(0)),t.stroke())),r.booster&&(t.fillStyle="#ffb53a",t.beginPath(),t.arc(l(r.booster.x),c(r.booster.z),5,0,7),t.fill()),r.vehicles)for(const x of r.vehicles)t.fillStyle="#f2d13a",t.fillRect(l(x.x)-3.5,c(x.z)-3.5,7,7);if(r.npcs)for(const x of r.npcs)t.fillStyle="#ff9d4d",t.beginPath(),t.arc(l(x.x),c(x.z),3.6,0,7),t.fill();t.textAlign="center",t.textBaseline="middle";const f=o?15:17;for(let x=0;x<An.length;x++){const p=An[x],m=l(p.console.x),y=c(p.console.z);if(t.fillStyle=s_[r.stations[x]],t.beginPath(),t.arc(m,y,o?12:13,0,7),t.fill(),t.strokeStyle="#071221",t.lineWidth=2,t.stroke(),t.fillStyle="#071221",t.font=`700 ${f}px Menlo, Consolas, monospace`,t.fillText(String(p.n),m,y+1),o){t.fillStyle="#f1f6fb",t.font='600 15px "Avenir Next", "Segoe UI", sans-serif';const[M,v,w]=[[0,-26,"center"],[20,26,"left"],[0,-26,"center"],[-18,26,"right"],[0,-26,"center"],[0,-26,"center"]][x];t.textAlign=w,t.fillText(p.name,m+M,y+v),t.textAlign="center"}}if(o&&(t.fillStyle="#f1f6fb",t.font='700 16px "Avenir Next", "Segoe UI", sans-serif',t.fillText("ASSEMBLY HANGAR",l(0),c(cn.z0)-14),t.fillText("LAUNCH PAD",l(Bt.x),c(Bt.z+30)),t.fillText("TOWER",l(le.x),c(le.z)-22),t.fillText("LZ-1 LANDING PAD",l(pe.x),c(pe.z+pe.r+14)),t.fillText("LAUNCH CONTROL",l(150),c(-104)),t.fillText("CRAWLERWAY",l(165),c(18))),r.target){let x=l(r.target.x),p=c(r.target.z);const m=16,y=x<m||x>e-m||p<m||p>n-m;x=Math.max(m,Math.min(e-m,x)),p=Math.max(m,Math.min(n-m,p));const M=9+5*(.5+.5*Math.sin(a*5));t.strokeStyle="#ffffff",t.lineWidth=3,t.beginPath(),t.arc(x,p,M+(y?0:8),0,7),t.stroke(),y&&(t.fillStyle="#ffffff",t.beginPath(),t.arc(x,p,6,0,7),t.fill())}const d=l(r.player.x),g=c(r.player.z);t.save(),t.translate(d,g),t.rotate(-r.player.yaw+Math.PI),t.fillStyle="#ffffff",t.strokeStyle="#071221",t.lineWidth=2,t.beginPath(),t.moveTo(0,-11),t.lineTo(8,9),t.lineTo(0,4),t.lineTo(-8,9),t.closePath(),t.fill(),t.stroke(),t.restore(),o||(t.fillStyle="#f1f6fb",t.font="700 20px Menlo, Consolas, monospace",t.fillText("N",e-22,24),t.strokeStyle="#f1f6fb",t.lineWidth=2,t.beginPath(),t.moveTo(e-22,60),t.lineTo(e-22,36),t.lineTo(e-28,44),t.moveTo(e-22,36),t.lineTo(e-16,44),t.stroke()),t.restore()}scorecard(t,e,n){const i=l=>`<td class="${l?"ok":"bad"}">${l?"YES":"NO"}</td>`,r=l=>l==null?"-":`T+${Math.floor(l/60)}:${String(Math.floor(l%60)).padStart(2,"0")} (${l.toFixed(1)} s)`,o=Math.floor(t.simulatedAssemblyTimeSec/60),a=Math.round(t.simulatedAssemblyTimeSec%60);this.el.scorecard.innerHTML=`
      <div class="eyebrow">${t.mode==="benchmark"?"Benchmark score card - seed "+t.seed:"Mission report"}</div>
      <h2>${t.orbitReached&&t.boosterLanded?"Mission success":t.orbitReached?"Orbit reached":"Mission ended"}</h2>
      <div class="sub">Helix-1 - fixed ${t.fixedTimestepHz} Hz simulation step${t.mode==="benchmark"?", factory at "+t.factorySpeed+"x, flight at "+t.flightTimeScale+"x":""}</div>
      <table>
        <tr><td>Stations completed</td><td>${t.stationsCompleted} / ${t.stationsTotal}</td></tr>
        <tr><td>Simulated assembly time</td><td>${o} min ${String(a).padStart(2,"0")} s</td></tr>
        <tr><td>Character navigation errors</td><td class="${t.navigationErrors===0?"ok":"bad"}">${t.navigationErrors}</td></tr>
        <tr><td>Orbit reached</td>${i(t.orbitReached)}</tr>
        <tr><td>Final altitude</td><td>${t.finalAltitudeKm.toFixed(1)} km</td></tr>
        <tr><td>Final speed</td><td>${t.finalSpeedKmS.toFixed(3)} km/s</td></tr>
        <tr><td>Stage separation time</td><td>${r(t.stageSeparationTimeSec)}</td></tr>
        <tr><td>Booster landed</td>${i(t.boosterLanded)}</tr>
        <tr><td>Booster landing distance from pad centre</td><td>${t.boosterLandingDistanceM===null?"-":t.boosterLandingDistanceM.toFixed(2)+" m"}</td></tr>
        <tr><td>Real seconds to finish</td><td>${t.realSecondsToFinish.toFixed(1)} s</td></tr>
        <tr><td>Average FPS</td><td>${t.averageFps.toFixed(1)}</td></tr>
        <tr><td>Minimum FPS (1 s window)</td><td>${t.minimumFps.toFixed(1)}</td></tr>
      </table>
      <div class="actions"><button class="btn primary" id="sc-copy">Copy results</button><button class="btn" id="sc-restart">${t.mode==="benchmark"?"Back to start":"New shift"}</button></div>
      <div class="note">Same data as JSON on <b>window.__HELIX_BENCHMARK__</b>. Orbit: ${t.orbitPerigeeKm.toFixed(0)} x ${t.orbitApogeeKm.toFixed(0)} km. Touchdown at ${t.boosterTouchdownSpeedMS===null?"-":t.boosterTouchdownSpeedMS.toFixed(1)+" m/s"}. Renderer: ${t.renderer}.</div>`,this.show("scorecard",!0),Ka("sc-copy").addEventListener("click",e),Ka("sc-restart").addEventListener("click",n)}}class a_{constructor(t){this.game=t,this.stage=0,this.wp=0,this.timer=0,this.sub="walk",this.navErrors=0,this.stuckT=0,this.bestDist=1/0,this.wasInside=!1,this.log=[]}path(){return this.stage<6?Fa.legs[this.stage]:this.stage===6?Fa.toTower:this.stage===8?Fa.onDeck:null}control(t){const e=this.game,n=e.player.pos,i={mx:0,mz:0,sprint:!1},r=e.col.inside(n.x,n.y,n.z,.15);if(r&&!this.wasInside&&(this.navErrors++,this.log.push(`inside ${r.tag} at ${n.x.toFixed(1)},${n.z.toFixed(1)} stage ${this.stage}`)),this.wasInside=!!r,this.sub==="walk"){const o=this.path();if(!o)return i;const[a,l]=o[this.wp],c=a-n.x,h=l-n.z,u=Math.hypot(c,h),f=this.wp===o.length-1;return u<(f?.16:.5)?(this.wp++,this.bestDist=1/0,this.stuckT=0,this.wp>=o.length&&this.arrive(),i):(i.mx=c/u,i.mz=h/u,i.sprint=!(f&&u<2.2),f&&u<.6&&(i.mx*=.45,i.mz*=.45),u<this.bestDist-.05?(this.bestDist=u,this.stuckT=0):(this.stuckT+=t,this.stuckT>2.5&&(this.navErrors++,this.log.push(`stuck at ${n.x.toFixed(1)},${n.z.toFixed(1)} stage ${this.stage} wp ${this.wp}`),e.player.teleport(a,n.y,l),this.stuckT=0,this.bestDist=1/0)),i)}if(this.timer+=t,this.sub==="wait"){const o=An[this.stage];this.face(Math.atan2(o.console.x-n.x,o.console.z-n.z),t),e.factory.st[this.stage].state==="ready"&&this.timer>.4&&(e.openPanel(this.stage),this.sub="panel",this.timer=0)}else this.sub==="panel"?this.timer>.7&&(e.signOff(this.stage),this.sub="signed",this.timer=0):this.sub==="signed"?this.timer>.6&&(e.closePanel(),this.stage++,this.wp=0,this.sub="walk",this.bestDist=1/0):this.sub==="elevator"?(this.face(Math.PI*0,t),this.timer>.5&&!this.called&&(e.callElevator(),this.called=!0),this.called&&!e.elevator.moving&&e.elevator.y>le.deckY-1&&(this.stage=8,this.wp=0,this.sub="walk",this.bestDist=1/0)):this.sub==="board"&&this.timer>.6&&(e.board(),this.sub="done",this.stage=9);return i}face(t,e){const n=this.game.player;let i=t-n.yaw;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;n.yaw+=i*Math.min(1,e*8)}arrive(){this.timer=0,this.stage<6?this.sub="wait":this.stage===6?(this.sub="elevator",this.stage=7,this.called=!1):this.stage===8&&(this.sub="board")}}const xu=14,vu=10,l_=2e4,Tn=Math.random,ue=Math.PI*2,_e=s=>{for(let t=0;t<s.length;t++)s[t]=Tn()*2-1;return s},Se=(s,t,e,n=1)=>{const i=1-Math.exp(-ue*t/e);for(let r=0;r<n;r++){let o=0;for(let a=0;a<s.length;a++)o+=i*(s[a]-o),s[a]=o}return s},an=(s,t,e)=>{const n=1-Math.exp(-ue*t/e);let i=0;for(let r=0;r<s.length;r++)i+=n*(s[r]-i),s[r]-=i;return s},ce=(s,t=.9)=>{let e=1e-9;for(let i=0;i<s.length;i++)e=Math.max(e,Math.abs(s[i]));const n=t/e;for(let i=0;i<s.length;i++)s[i]*=n;return s},Wn=(s,t,e)=>{for(let n=0;n<s.length;n++)s[n]*=e(n/t);return s},Pe=(s,t,e)=>{for(let n=0;n<s.length;n++)s[n]+=e(n/t,n);return s},yi=(s,t,e,n=0)=>Pe(s,t,i=>{if(i<n)return 0;let r=0;const o=i-n;for(const[a,l,c]of e)r+=Math.sin(ue*a*o)*l*Math.exp(-o*c);return r}),ti=s=>2*(s-Math.floor(s+.5)),Cr=(s,t=4)=>[[s,.6,t],[s*2.01,.22,t*1.6],[s*3.02,.1,t*2.4]],_u={footstep_concrete:[.17,(s,t)=>{Se(an(_e(s),90,t),850+Tn()*300,t,2),Wn(s,t,e=>Math.exp(-e*42)+.25*Math.exp(-Math.abs(e-.07)*60)),Pe(s,t,e=>Math.sin(ue*82*e)*.5*Math.exp(-e*48)),ce(s,.8)}],footstep_metal:[.34,(s,t)=>{Se(an(_e(s),1400,t),6500,t),Wn(s,t,n=>.5*Math.exp(-n*55));const e=1+(Tn()-.5)*.08;yi(s,t,[[820*e,.3,17],[1310*e,.24,20],[2140*e,.18,24],[3350*e,.1,30]]),Pe(s,t,n=>Math.sin(ue*110*n)*.3*Math.exp(-n*40)),ce(s,.8)}],ui_panel_open:[.18,(s,t)=>{let e=0;Pe(s,t,n=>(e+=(520+2400*n)/t,Math.sin(ue*e)*Math.exp(-n*16))),ce(s,.5)}],ui_panel_close:[.18,(s,t)=>{let e=0;Pe(s,t,n=>(e+=(900-2600*n)/t,Math.sin(ue*e)*Math.exp(-n*16))),ce(s,.5)}],ui_signoff:[1.2,(s,t)=>{yi(s,t,Cr(880,4.5)),yi(s,t,Cr(1318.5,4),.13),ce(s,.7)}],ui_objective:[1.6,(s,t)=>{[523.25,659.25,783.99,1046.5].forEach((e,n)=>yi(s,t,Cr(e,3.2),n*.09)),ce(s,.7)}],elevator_chime:[1.3,(s,t)=>{yi(s,t,Cr(987.8,3.5)),yi(s,t,Cr(784,3),.36),ce(s,.7)}],radio_chatter:[.55,(s,t)=>{const e=Se(an(_e(new Float32Array(s.length)),900,t),3400,t),n=[700+Tn()*700,900+Tn()*600,800+Tn()*500];Pe(s,t,(i,r)=>{let o=0;(i<.07||i>.45&&i<.52)&&(o+=e[r]*.9);const a=Math.floor((i-.1)/.11);return i>.1&&a<3&&(i-.1)%.11<.07&&(o+=Math.sign(Math.sin(ue*n[a]*i))*.35),o}),Se(s,3200,t),ce(s,.6)}],impact_wrench:[.6,(s,t)=>{Se(an(_e(s),500,t),3800,t),Wn(s,t,e=>(Math.sin(ue*34*e)>0?1:.15)*Math.min(1,e/.02)*(e>.5?Math.max(0,(.6-e)/.1):1)),Pe(s,t,e=>Math.sin(ue*(430+160*e)*e)*.18*Math.min(1,(.6-e)/.1)),ce(s,.8)}],ratchet:[.5,(s,t)=>{const e=an(_e(new Float32Array(s.length)),2200,t);let n=.01;for(let i=0;i<8;i++){const r=n;Pe(s,t,(o,a)=>o>=r&&o<r+.03?e[a]*Math.exp(-(o-r)*420)+Math.sin(ue*2700*(o-r))*.4*Math.exp(-(o-r)*300):0),n+=.07-i*.004}ce(s,.7)}],machinery_clank:[1,(s,t)=>{const e=.8+Tn()*.5;yi(s,t,[[310*e,.5,6],[517*e,.35,8],[933*e,.22,10],[1420*e,.12,13]]);const n=Se(_e(new Float32Array(s.length)),700,t);Pe(s,t,(i,r)=>n[r]*1.5*Math.exp(-i*30)),ce(s,.8)}],landing_legs_lock:[.55,(s,t)=>{yi(s,t,[[70,.9,18],[420,.35,12],[690,.25,14],[1130,.16,18]]);const e=an(_e(new Float32Array(s.length)),1800,t);Pe(s,t,(n,i)=>e[i]*.5*Math.exp(-n*90)),ce(s,.9)}],booster_touchdown:[1.6,(s,t)=>{const e=Se(_e(new Float32Array(s.length)),280,t,2),n=an(_e(new Float32Array(s.length)),2e3,t);Pe(s,t,(i,r)=>Math.sin(ue*46*i)*Math.exp(-i*5.5)+e[r]*3*Math.exp(-i*7)+n[r]*.12*Math.exp(-i*2.4)),ce(s,.95)}],sonic_boom:[1.8,(s,t)=>{const e=Se(_e(new Float32Array(s.length)),150,t,2),n=(i,r)=>i<r?0:Math.sin(ue*31*(i-r))*Math.exp(-(i-r)*11);Pe(s,t,(i,r)=>n(i,.02)+.9*n(i,.14)+e[r]*4*(Math.exp(-Math.abs(i-.03)*26)+Math.exp(-Math.abs(i-.15)*26))+e[r]*1.2*Math.exp(-i*2.2)),ce(s,.98)}],engine_relight:[1.1,(s,t)=>{Se(_e(s),620,t,2),Wn(s,t,e=>Math.min(1,e/.05)*Math.exp(-e*3.2)),Pe(s,t,e=>Math.sin(ue*52*e)*.25*Math.exp(-e*4)),ce(s,.9)}],ignition:[2,(s,t)=>{let e=0;const n=Math.exp(-1/(.01*t));_e(s);for(let i=0;i<s.length;i++)Tn()<60/t&&(e=1),e*=n,s[i]*=.35+e;Se(s,1900,t),Wn(s,t,i=>Math.min(1,i/.3)*Math.exp(-Math.max(0,i-.5)*1.6)),Pe(s,t,i=>Math.sin(ue*40*i)*.3*Math.min(1,i/.3)*Math.exp(-i*1.5)),ce(s,.95)}],stage_sep:[1,(s,t)=>{const e=an(_e(new Float32Array(s.length)),3e3,t),n=Se(_e(new Float32Array(s.length)),500,t);Pe(s,t,(i,r)=>Math.sin(ue*92*i)*Math.exp(-i*18)+n[r]*2*Math.exp(-i*24)+e[r]*.35*Math.exp(-i*5)),ce(s,.9)}],liftoff_release:[.5,(s,t)=>{yi(s,t,[[180,.6,15],[365,.4,17],[740,.25,20],[58,.8,12]]),ce(s,.9)}],engine_cutoff:[.9,(s,t)=>{Se(_e(s),380,t,2),Wn(s,t,e=>Math.exp(-e*4.5)),Pe(s,t,e=>Math.sin(ue*44*e)*.5*Math.exp(-e*9)),ce(s,.8)}],countdown_tick:[.09,(s,t)=>{Pe(s,t,e=>Math.sin(ue*1e3*e)*Math.exp(-e*55)),ce(s,.4)}]},Mu={hum:[3,(s,t)=>{Se(_e(s),170,t,2),ce(s,.5),Pe(s,t,e=>.2*Math.sin(ue*55*e)+.1*Math.sin(ue*110.4*e)+.05*Math.sin(ue*165.6*e)),Wn(s,t,e=>.85+.15*Math.sin(ue*e/3)),ce(s,.6)}],outdoor:[3,(s,t)=>{an(Se(_e(s),620,t,2),140,t),Wn(s,t,e=>.6+.4*Math.sin(ue*e/3)*Math.sin(ue*e/1.5+1)),ce(s,.6)}],arc:[2,(s,t)=>{let e=0;const n=Math.exp(-1/(.004*t));_e(s);for(let i=0;i<s.length;i++)Tn()<140/t&&(e=1),e*=n,s[i]=s[i]*(.25+e)+.5*ti(100*i/t)*(.6+.4*Tn());an(s,700,t),ce(s,.7)}],crane:[2.5,(s,t)=>{const e=an(_e(new Float32Array(s.length)),1800,t);let n=0;const i=Math.exp(-1/(.012*t));Pe(s,t,(r,o)=>(Tn()<16/t&&(n=1),n*=i,.5*ti(62*r)+.25*ti(124.6*r)+e[o]*n*.9+Math.sin(ue*2250*r)*n*.25)),Se(s,3200,t),ce(s,.7)}],spray:[2,(s,t)=>{Se(an(_e(s),2400,t),9e3,t),Wn(s,t,e=>.85+.15*Math.sin(ue*3*e)),ce(s,.5)}],drone:[2,(s,t)=>{Pe(s,t,e=>(ti(196*e)+ti(233*e)*.8+ti(392.5*e)*.3)*(.75+.25*Math.sin(ue*8*e))),Se(an(s,160,t),3e3,t),ce(s,.6)}],diesel:[2,(s,t)=>{const e=Se(_e(new Float32Array(s.length)),300,t);Pe(s,t,(n,i)=>(ti(36*n)*.8+e[i]*2)*(.55+.45*Math.pow(.5+.5*Math.sin(ue*18*n),3))),Se(s,520,t),ce(s,.9)}],hydraulic:[2,(s,t)=>{Se(an(_e(s),650,t),1500,t,2),ce(s,.5),Pe(s,t,e=>.3*Math.sin(ue*(240+8*Math.sin(ue*5*e))*e)+.12*ti(480*e)),ce(s,.6)}],elevator:[2,(s,t)=>{const e=Se(_e(new Float32Array(s.length)),900,t);Pe(s,t,(n,i)=>.5*Math.sin(ue*95*n)+.25*ti(190*n)+e[i]*.6*(.7+.3*Math.sin(ue*7*n))),Se(s,1400,t),ce(s,.7)}],forklift:[2,(s,t)=>{const e=Se(_e(new Float32Array(s.length)),500,t);Pe(s,t,(n,i)=>.5*ti(140*n)+.3*ti(281*n)+e[i]*1.2),Se(s,950,t),ce(s,.6)}],beeper:[1,(s,t)=>{Pe(s,t,e=>e<.45?Math.sign(Math.sin(ue*1250*e))*.5*Math.min(1,e/.01,(.45-e)/.01):0),Se(s,4e3,t)}],vent:[2,(s,t)=>{an(_e(s),3400,t),Wn(s,t,e=>.7+.3*Math.sin(ue*e/2)),ce(s,.5)}],deluge:[2,(s,t)=>{an(Se(_e(s),5200,t),280,t),ce(s,.7)}],rumble:[3,(s,t)=>{Se(_e(s),115,t,3),ce(s,.95)}],roar:[3,(s,t)=>{an(Se(_e(s),1700,t),150,t),Wn(s,t,e=>.8+.2*Math.sin(ue*.7*e)*Math.sin(ue*2.3*e)),ce(s,.9)}],crackle:[3,(s,t)=>{let e=0;const n=Math.exp(-1/(.012*t));_e(s);for(let i=0;i<s.length;i++)Tn()<34/t&&(e=.5+Tn()*.5),e*=n,s[i]*=e;an(s,1100,t),ce(s,.9)}],vibe:[3,(s,t)=>{Se(_e(s),70,t,3),ce(s,.8),Pe(s,t,e=>.25*Math.sin(ue*38*e)*(.6+.4*Math.sin(ue*4*e))),ce(s,.9)}]},yu={hangar_ambience:["hum",null,.34],pad_ambience:["outdoor",null,.3],onboard_vibration:["vibe",null,.85],welding_arc:["arc",5,.55],crane_motor_a:["crane",9,.5],crane_motor_b:["crane",9,.5],paint_spray:["spray",5,.4],drone_buzz:["drone",4,.4],transporter_diesel:["diesel",12,.8],hydraulics:["hydraulic",8,.5],elevator_motor:["elevator",6,.5],forklift_motor_0:["forklift",6,.4],forklift_motor_1:["forklift",6,.4],forklift_beeper_0:["beeper",7,.3],forklift_beeper_1:["beeper",7,.3],fuel_vent:["vent",14,.45],water_deluge:["deluge",22,.6],engine_stack:[["rumble","roar","crackle"],170,1],engine_booster:[["rumble","roar","crackle"],150,1]};class c_{constructor(){if(this.ctx=null,this.enabled=!1,this.muted=!1,this.volume=.8,this.simT=0,this.T=null,this.timeScale=1,this.log=[],this.counts={},this.loops={},this.voices=[],this.later=[],this.L=[0,0,0],this.speech={supported:typeof window<"u"&&"speechSynthesis"in window&&typeof SpeechSynthesisUtterance<"u",voices:0,queue:[],busy:!1,voice:null},this.state={context:"none",enabled:!1,muted:!1,autoMuted:!1,volume:this.volume,speechSupported:this.speech.supported,speechVoices:0,maxOneShots:xu,maxLoops:vu,activeOneShots:0,audibleLoops:[],counts:this.counts,logDropped:0,log:this.log},typeof window<"u"&&(window.__HELIX_AUDIO__=this.state),this.speech.supported)try{speechSynthesis.getVoices(),speechSynthesis.addEventListener("voiceschanged",()=>this.pickVoice())}catch{}}enable(){this.enabled=!0;try{this.ctx||this.build(),this.ctx&&this.ctx.state!=="running"&&this.ctx.resume().then(()=>this.sync(),()=>{})}catch(t){console.warn("Audio unavailable:",t&&t.message),this.ctx=null}this.pickVoice(),this.sync()}build(){const t=window.AudioContext||window.webkitAudioContext;if(!t)return;const e=this.ctx=new t,n=e.sampleRate;this.master=e.createGain();const i=e.createDynamicsCompressor();i.threshold.value=-16,i.ratio.value=5,i.attack.value=.004,i.release.value=.2,this.master.connect(i),i.connect(e.destination),this.world=e.createGain(),this.world.connect(this.master);const r=e.createBuffer(2,Math.floor(n*1.5),n);for(let a=0;a<2;a++){const l=r.getChannelData(a);Se(_e(l),3200,n),Wn(l,n,c=>Math.exp(-c*4.2)*(c<.012?c/.012:1))}this.reverb=e.createConvolver(),this.reverb.buffer=r,this.wet=e.createGain(),this.wet.gain.value=.05,this.world.connect(this.reverb),this.reverb.connect(this.wet),this.wet.connect(this.master);const o=([a,l],c)=>{const h=e.createBuffer(1,Math.floor(a*n),n),u=h.getChannelData(0);if(l(u,n),c){const f=u.length,d=Math.floor(.12*n);for(let g=0;g<d;g++){const x=g/d;u[g]=u[g]*x+u[f-d+g]*(1-x)}h._loopEnd=(f-d)/n}return h};this.buf={};for(const a in _u)this.buf[a]=o(_u[a],!1);for(const a in Mu)this.buf["tex_"+a]=o(Mu[a],!0);for(let a=0;a<xu;a++){const l=e.createGain(),c=this.panner(8);l.connect(c),c.connect(this.world),this.voices.push({gain:l,panner:c,src:null,until:0})}for(const a in yu){const[l,c,h]=yu[a],u=e.createGain();u.gain.value=0;const f={id:a,base:h,out:u,level:0,want:0,x:0,y:0,z:0,rate:1,active:!1,layers:[],panner:null,filter:null,delay:null,lastG:0,lastRate:1};let d=u;Array.isArray(l)&&(f.filter=e.createBiquadFilter(),f.filter.type="lowpass",f.filter.frequency.value=8e3,f.filter.Q.value=.4,f.delay=e.createDelay(20),f.filter.connect(f.delay),f.delay.connect(u),d=f.filter);for(const g of Array.isArray(l)?l:[l]){const x=e.createBufferSource();x.buffer=this.buf["tex_"+g],x.loop=!0,x.loopEnd=x.buffer._loopEnd;const p=e.createGain();p.gain.value=Array.isArray(l)?0:1,x.connect(p),p.connect(d),x.start(0,Tn()*1.5),f.layers.push({src:x,g:p,last:-1})}c===null?u.connect(this.master):(f.panner=this.panner(c),u.connect(f.panner),f.panner.connect(this.world)),this.loops[a]=f}this.applyVolume()}panner(t){const e=this.ctx.createPanner();return e.panningModel="equalpower",e.distanceModel="inverse",e.refDistance=t,e.rolloffFactor=1,e.maxDistance=1e7,e}place(t,e,n,i){t.positionX?(t.positionX.value=e,t.positionY.value=n,t.positionZ.value=i):t.setPosition(e,n,i)}pickVoice(){if(this.speech.supported)try{const t=speechSynthesis.getVoices();this.speech.voices=t.length,this.speech.voice=t.find(e=>/en[-_]US/i.test(e.lang)&&e.localService)||t.find(e=>/^en/i.test(e.lang))||t[0]||null}catch{this.speech.voices=0}}applyVolume(){this.master&&(this.master.gain.value=this.muted?0:this.volume),this.sync()}setVolume(t){this.volume=Math.max(0,Math.min(1,t)),this.applyVolume()}setMuted(t,e=!1){if(this.muted=t,this.state.autoMuted=t&&e,t&&this.speech.supported){try{speechSynthesis.cancel()}catch{}this.speech.queue.length=0,this.speech.busy=!1}this.applyVolume()}toggleMute(){return this.muted&&!this.ctx&&this.enable(),this.setMuted(!this.muted),this.muted}sync(){const t=this.state;t.context=this.ctx?this.ctx.state:"none",t.enabled=this.enabled,t.muted=this.muted,t.volume=+this.volume.toFixed(2),t.speechVoices=this.speech.voices}get audible(){return!!this.ctx&&this.ctx.state==="running"&&!this.muted}setSim(t,e,n){this.simT=t,this.T=e,this.timeScale=n}note(t,e,n){if(this.counts[e]=(this.counts[e]||0)+1,this.log.length>=l_)return this.state.logDropped++,null;const i={t:+this.simT.toFixed(2),T:this.T===null?null:+this.T.toFixed(2),kind:t,id:e,status:n};return this.log.push(i),i}cue(t,e=null,n=1,i=8,r=1,o=t){const a=this.note("cue",t,this.audible?"played":this.muted?"muted":"silent");if(!this.audible||!this.buf[o])return;const l=this.ctx.currentTime;let c=this.voices[0];for(const f of this.voices){if(f.until<=l){c=f;break}f.until<c.until&&(c=f)}if(c.until>l){a&&(a.status="played (stole a voice)");try{c.src.stop()}catch{}}const h=this.ctx.createBufferSource();h.buffer=this.buf[o],h.playbackRate.value=r,c.gain.gain.value=n;const u=e||this.L;this.place(c.panner,u[0],u[1],u[2]),c.panner.refDistance=e?i:1e6,h.connect(c.gain),h.start(),h.onended=()=>{try{h.disconnect()}catch{}},c.src=h,c.until=l+h.buffer.duration/r}cueLater(t,...e){this.later.push({at:performance.now()+t*1e3,args:e})}loop(t,e,n=0,i=0,r=0,o=1){const a=this.loops[t],l=e>.02,c=this._on||(this._on={});l!==!!c[t]&&(c[t]=l,this.note("loop",t,l?"start":"stop")),a&&(a.want=e,a.x=n,a.y=i,a.z=r,a.rate=o)}engine(t,e,n,i,r,o,a,l){this.loop(t,e>.02?1:0,n,i,r);const c=this.loops[t];if(!c)return;const h=this.ctx.currentTime,u=o*(a?.3:1),f=[e*u*.95,e*u*.8,e*e*u*(a?0:.7)];c.layers.forEach((d,g)=>{Math.abs(f[g]-d.last)>.004&&(d.last=f[g],d.g.gain.setTargetAtTime(f[g],h,.08))}),c.filter.frequency.setTargetAtTime(a?260:Math.max(260,Math.min(9e3,9e3/(1+l/600))),h,.15),c.delay.delayTime.setTargetAtTime(a?0:Math.min(19,l/343/Math.max(1,this.timeScale)),h,.25)}say(t,e=1){let n;const i=this.speech;!this.enabled||this.muted?n="muted":i.supported?(i.voices||this.pickVoice(),n=i.voices?"spoken":"queued"):n="queued";const r=this.note("voice",t,n);if(n==="spoken"){for(;i.queue.length>=2;){const o=Math.max(0,i.queue.findIndex(l=>l.priority===0)),[a]=i.queue.splice(o,1);a.e&&(a.e.status="skipped (voice busy)")}i.queue.push({text:t,priority:e,e:r}),this.speakNext()}}speakNext(){const t=this.speech;if(t.busy||!t.queue.length)return;const e=t.queue.shift();try{const n=new SpeechSynthesisUtterance(e.text);t.voice&&(n.voice=t.voice),n.lang="en-US",n.rate=Math.max(.9,Math.min(2.2,1.05+.25*(this.timeScale-1))),n.pitch=.92,n.volume=this.volume;const i=()=>{t.busy=!1,this.speakNext()};n.onend=i,n.onerror=i,t.busy=!0,t.since=performance.now(),speechSynthesis.speak(n)}catch{t.busy=!1,e.e&&(e.e.status="queued")}}frame(t,e,n,i,r,o,a,l,c,h){this.sync();const u=performance.now();for(let M=this.later.length-1;M>=0;M--)if(this.later[M].at<=u){const v=this.later.splice(M,1)[0];this.cue(...v.args)}this.L[0]=t,this.L[1]=e,this.L[2]=n;const f=this.speech;if(f.busy&&u-f.since>9e3){try{speechSynthesis.cancel()}catch{}f.busy=!1,this.speakNext()}const d=this.ctx;if(!d||d.state!=="running")return;const g=d.currentTime,x=d.listener;x.positionX?(x.positionX.value=t,x.positionY.value=e,x.positionZ.value=n,x.forwardX.value=i,x.forwardY.value=r,x.forwardZ.value=o,x.upX.value=a,x.upY.value=l,x.upZ.value=c):(x.setPosition(t,e,n),x.setOrientation(i,r,o,a,l,c)),this.wet.gain.setTargetAtTime(h?.34:.04,g,.4);const p=this._rank||(this._rank=Object.values(this.loops));for(const M of p){const v=M.panner?Math.hypot(M.x-t,M.y-e,M.z-n):0;M.score=M.want>.02?M.want*M.base*(M.panner?M.panner.refDistance/(M.panner.refDistance+v):1):0}p.sort((M,v)=>v.score-M.score);const m=[];for(let M=0;M<p.length;M++){const v=p[M],w=M<vu&&v.score>1e-5?v.want*v.base:0;w>0&&(m.push(v.id),v.panner&&this.place(v.panner,v.x,v.y,v.z)),Math.abs(w-v.lastG)>.003&&(v.lastG=w,v.out.gain.setTargetAtTime(w,g,.07)),v.layers.length===1&&Math.abs(v.rate-v.lastRate)>.01&&(v.lastRate=v.rate,v.layers[0].src.playbackRate.setTargetAtTime(v.rate,g,.1))}this.state.audibleLoops=m;let y=0;for(const M of this.voices)M.until>g&&y++;this.state.activeOneShots=y}}const Po=new I,Fn=Math.random;class h_{constructor(t){this.g=t,this.step=0,this.cranePrev=t.site.cranes.map(e=>[e.x,e.z,e.hookY]),this.timers={radio:4,clank:5,tool:.6},this.elevMoving=!1,this.lastSec=null,this.boomed=!1}update(t){const e=this.g,n=e.sound,i=e.state,r=e.launch.sim,o=(i==="countdown"||i==="flight"||i==="done")&&!!r;n.setSim(e.simTime,o?r.t:null,e.timeScale);const a=e.engine.camera,l=e.camTrue;a.getWorldDirection(Po);const c=e.site.interior(l.x,l.z)&&l.y<33,h=i!=="menu",u=i==="factory"||i==="boarding",f=Math.max(0,e.sky.camAlt||0);n.loop("hangar_ambience",h&&c?1:0),n.loop("pad_ambience",h&&!c?Math.exp(-f/9e3)*(i==="countdown"?1:.7):0),h&&this.factory(t,c,o?r:null),this.traffic(t,u,l),u&&this.footsteps(),o&&this.launch(),n.frame(l.x,l.y,l.z,Po.x,Po.y,Po.z,a.up.x,a.up.y,a.up.z,c)}factory(t,e,n){const i=this.g,r=i.sound,o=i.factory,a=i.site,l=i.camTrue,c=v=>o.st[v].state==="running";if(r.loop("welding_arc",c(0)&&o.weldLive?1:0,-81,3.6,-24.5),c(1)&&o.engWork&&(this.timers.tool-=t,this.timers.tool<=0)){this.timers.tool=.5+Fn()*1.3;const v=o.engWork;r.cue(Fn()<.55?"impact_wrench":"ratchet",[v[0],v[1],v[2]],.8,9,.92+Fn()*.16)}const h=["crane_motor_a","crane_motor_b"];let u=0;for(let v=0;v<a.cranes.length;v++){const w=a.cranes[v],T=this.cranePrev[v],C=Math.abs(w.x-T[0])+Math.abs(w.z-T[1])+Math.abs(w.hookY-T[2]);T[0]=w.x,T[1]=w.z,T[2]=w.hookY,C>1e-4&&u<2&&r.loop(h[u++],1,w.x,23,w.z)}for(;u<2;)r.loop(h[u++],0);if(r.loop("paint_spray",c(4)&&o.sprayOn?1:0,o.portal.position.x,3.2,0),c(4)&&o.droneOn){let v=null,w=1e9;for(const T of o.drones){const C=T.g.position,b=(C.x-l.x)**2+(C.y-l.y)**2+(C.z-l.z)**2;b<w&&(w=b,v=C)}r.loop("drone_buzz",1,v.x,v.y,v.z)}else r.loop("drone_buzz",0);const f=o.st[5].progress,d=c(5),g=d&&f>.22&&f<.74;r.loop("transporter_diesel",g?1:d&&f>=.18?.4:0,o.hingeX-48,2.4,0,g?1.2:.85);let x=0,p=0,m=0,y=0;if(d&&f>.74&&f<.97)x=1,p=o.hingeX-9,m=3;else if(d&&f>0&&f<.12)x=.7,p=cn.x1,m=10;else if(n){const v=n.t,w=n.eventTimes.LIFTOFF;v>-53&&v<-45?(x=1,p=le.x+1,m=le.deckY+1,y=le.armZ0):(v>-38&&v<-30||w!==void 0&&v<w+3.5)&&(x=1,p=Bt.x-4,m=14,y=Bt.z)}r.loop("hydraulics",x,p,m,y);const M=i.elevator;r.loop("elevator_motor",M.moving?1:0,le.x,M.y+2,le.z),this.elevMoving&&!M.moving&&r.cue("elevator_chime",[le.x,M.y+2,le.z],.9,10),this.elevMoving=M.moving,e&&!n&&(this.timers.clank-=t,this.timers.clank<=0&&(this.timers.clank=4+Fn()*7,r.cue("machinery_clank",[cn.x0+10+Fn()*170,2+Fn()*6,(Fn()<.5?-1:1)*(14+Fn()*16)],.7,14,.75+Fn()*.5)))}traffic(t,e,n){const i=this.g,r=i.sound;let o=0;for(const a of i.traffic.vehicles){if(a.kind!=="forklift")continue;const l=Math.min(1,a.speed/3.2);r.loop("forklift_motor_"+o,e?.25+l*.75:0,a.x,1,a.z,.7+l*.6),r.loop("forklift_beeper_"+o,e&&a.wait>0?1:0,a.x,1.6,a.z),o++}if(e&&(this.timers.radio-=t,this.timers.radio<=0)){this.timers.radio=5+Fn()*8;const a=i.traffic.npcs.filter(l=>Math.hypot(l.x-n.x,l.z-n.z)<45);if(a.length){const l=a[Math.floor(Fn()*a.length)];r.cue("radio_chatter",[l.x+l.ox,1.4,l.z+l.oz],.7,5,.9+Fn()*.25)}}}footsteps(){const t=this.g,e=t.player;if(!e.visible)return;const n=Math.floor(e.body.phase/Math.PI);if(n===this.step||(this.step=n,e.animSpeed<.5))return;const i=e.pos,r=i.y>1||Math.abs(i.x-le.x)<le.cageHalf+.2&&Math.abs(i.z-le.z)<le.cageHalf+.2;t.sound.cue(r?"footstep_metal":"footstep_concrete",[i.x,i.y+.1,i.z],Math.min(.75,.3+e.animSpeed/16),6,.92+Fn()*.16)}launch(){const t=this.g,e=t.sound,n=t.launch,i=n.sim,r=i.stack,o=i.booster,a=i.t,l=t.camTrue,c=n.stackAnchor.userData.truePos,h=n.boosterAnchor.userData.truePos;e.loop("fuel_vent",a>-61&&a<-20?1:0,Bt.x-1.2,Bt.baseY+30,Bt.z-1.7),e.loop("water_deluge",a>-6&&a<12?1:0,Bt.x,5,Bt.z);const u=Math.floor(a);u!==this.lastSec&&(this.lastSec!==null&&u>=-10&&u<=-1&&e.cue("countdown_tick",null,.6),this.lastSec=u);const f=n.cam,d=r.staged?r.throttle*.35:r.throttle;e.engine("engine_stack",d,c.x,c.y,c.z,Math.exp(-Math.max(0,r.alt)/9e3),f===1||f===4&&!o.active,l.distanceTo(c));let g=0;o.active&&o.engines>0&&(g=o.throttle*(o.engines/9*.7+.3)),e.engine("engine_booster",g,h.x,h.y,h.z,o.active?Math.exp(-Math.max(0,o.alt)/9e3):0,f===4,o.active?l.distanceTo(h):0),e.loop("onboard_vibration",f===1?Math.min(1,d*(r.staged?1.8:1)):f===4?o.active?g:d:0),o.active&&!this.boomed&&(o.phase==="aero"||o.phase==="landing")&&o.speed<335&&(this.boomed=!0,e.cue("sonic_boom",[pe.x,2,pe.z],1,260))}}const Zs=1/60,ja=[1,4,20],Ja=[1,2,4,8],Su=20,bu=5;class u_{constructor(){const t=new URLSearchParams(location.search);this.params=t,this.canvas=document.getElementById("c"),this.hud=new o_,this.sound=new c_,this.engine=new Jv(this.canvas),this.input=new Qv(this.canvas),this.state="menu",this.time=0,this.simTime=0,this.acc=0,this.last=performance.now(),this.factorySpeedIdx=0,this.flightSpeedIdx=0,this.timeScale=1,this.benchmark=!1,this.elevator={y:0,v:0,target:0,moving:!1},this.fps={frames:0,t:0,winFrames:0,winT:0,min:1/0,shown:60,active:!1,lowWindows:0},this.governor=!t.has("q"),this.engine.applyTier(t.has("q")?+t.get("q"):2),this.camTrue=new I,this.lookTrue=new I,this.focus=new I,this.lastOrigin=new I,this.mapState={player:{x:0,z:0,yaw:0},stations:[],npcs:[],vehicles:[]}}build(){const t=this.engine;this.M=x1(),this.col=new P1,this.site=L1(t,this.M,this.col),this.pad=U1(t,this.M,this.col,this.site.root),this.rocket=O1(this.M);const e=this.site.root;this.fx={smoke:new wr(t,e,{max:5200,order:12}),sparks:new wr(t,e,{max:2600,additive:!0,order:13}),trail:new wr(t,e,{max:1500,order:11})},this.factory=new X1({engine:t,M:this.M,site:this.site,pad:this.pad,rocket:this.rocket,col:this.col,fx:this.fx}),this.rng=new Ms(ql),this.traffic=new t_({M:this.M,site:this.site,col:this.col,rng:this.rng}),this.player=new Z1(e,this.col),this.player.teleport(Na.x,.1,Na.z,Na.yaw),this.rig=new K1(t.camera,this.col),this.sky=new C1(t),this.sky.buildEnvironment();const n=i=>{const r=new wr(t,i,{max:400,order:12}),o=new wr(t,i,{max:500,additive:!0,order:16});return{smoke:r,glow:o,update:a=>{r.update(a),o.update(a)}}};this.launch=new i_({engine:t,site:this.site,pad:this.pad,rocket:this.rocket,factory:this.factory,fx:this.fx,hud:this.hud,particlesFor:n,sound:this.sound}),this.scape=new h_(this),this.bindUi(),this.applyCamera(.016),this.applyLighting(),t.scene.updateMatrixWorld(!0),t.tagAO(),t.warmUp()}bindUi(){const t=this.hud.el;t["btn-start"].addEventListener("click",()=>{this.sound.enable(),this.start(!1)}),t["btn-bench"].addEventListener("click",()=>{this.sound.enable(),this.start(!0)});const e=document.getElementById("vol"),n=document.getElementById("vol-val");e.addEventListener("input",()=>{this.sound.setVolume(+e.value/100),n.textContent=e.value+"%"}),t["panel-sign"].addEventListener("click",()=>{this.hud.panelIndex>=0&&this.signOff(this.hud.panelIndex)});for(const i of t.cams.children)i.addEventListener("click",()=>{this.benchmark||this.launch.setCam(+i.dataset.cam)});this.canvas.addEventListener("click",()=>{this.hud.mapOpen&&this.hud.toggleMap()})}start(t,e=!1){if(this.state==="menu"&&(e&&this.sound.setMuted(!0,!0),this.benchmark=t,this.state="factory",this.hud.begin(t),this.input.wantLock=!t,this.startReal=performance.now(),this.fps={frames:0,t:0,winFrames:0,winT:0,min:1/0,shown:60,active:!0,lowWindows:0,skip:1},t&&(this.autopilot=new a_(this),this.launch.autoDirector=!0,window.__HELIX_BENCHMARK_PROGRESS__={status:"running"}),this.acc=0,this.hud.toast(t?"Benchmark started - autopilot engineer is on shift":"Shift started - click the view to look around with the mouse",5,this.time),this.canvas.focus(),!t&&this.canvas.requestPointerLock))try{const n=this.canvas.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}get factorySpeed(){return this.benchmark?Su:ja[this.factorySpeedIdx]}openPanel(t){this.hud.openPanel(t,this.factory),this.sound.cue("ui_panel_open",null,.7),this.input.releaseLock()}closePanel(){this.hud.panelIndex>=0&&this.sound.cue("ui_panel_close",null,.7),this.hud.closePanel()}signOff(t){if(!this.factory.signOff(t))return!1;const e=An[t+1];return this.hud.toast(e?`Station ${String(t+1).padStart(2,"0")} signed off - ${e.name} is now running`:"Helix-1 is on the pad - head to the launch tower",4.5,this.time),this.hud.refreshPanel(this.factory),this.sound.cue("ui_signoff",null,.8),this.sound.cueLater(.6,"ui_objective",null,.65),t===An.length-1&&(this.state="boarding"),!0}callElevator(){const t=this.elevator;t.moving||(t.target=t.y<1?le.deckY-.24:0,t.moving=!0,t.v=0)}stepElevator(t){const e=this.elevator;if(e.moving){const n=Math.abs(e.target-e.y),i=Math.sign(e.target-e.y);e.v=Math.min(e.v+3.2*t,7.5,Math.sqrt(2*3.2*n)+.15),e.y+=i*e.v*t,(n<.02||(e.target-e.y)*i<=0)&&(e.y=e.target,e.moving=!1,e.v=0)}this.pad.setCage(e.y,e.moving)}board(){this.state==="boarding"&&(this.state="countdown",this.player.visible=!1,this.player.frozen=!0,this.closePanel(),this.launch.begin(-60),this.sound.cue("ui_objective",null,.65),this.hud.flightMode(!0),this.launch.setCam(this.benchmark?3:2),this.input.wantLock=!1,this.hud.toast("Hatch closed. You are strapped in - enjoy the ride.",4,this.time))}finish(){if(this.finished)return;this.finished=!0;const t=this.launch.sim,e=t.result,n=this.fps,i=this.engine.renderer.getContext(),r=i.getExtension("WEBGL_debug_renderer_info"),o={mode:this.benchmark?"benchmark":"play",seed:ql,fixedTimestepHz:60,factorySpeed:this.benchmark?Su:null,flightTimeScale:this.benchmark?bu:null,stationsCompleted:this.factory.signedCount,stationsTotal:An.length,simulatedAssemblyTimeSec:+(this.factory.assemblyTime||0).toFixed(2),navigationErrors:this.autopilot?this.autopilot.navErrors:0,orbitReached:e.orbitReached,finalAltitudeKm:+(t.stack.alt/1e3).toFixed(3),finalSpeedKmS:+(t.stack.speed/1e3).toFixed(4),stageSeparationTimeSec:e.sepTime===null?null:+e.sepTime.toFixed(2),boosterLanded:e.boosterLanded,boosterLandingDistanceM:e.boosterDistM===null?null:+e.boosterDistM.toFixed(3),realSecondsToFinish:+((performance.now()-this.startReal)/1e3).toFixed(2),averageFps:+(n.frames/Math.max(n.t,.001)).toFixed(2),minimumFps:+(n.min===1/0?n.frames/Math.max(n.t,.001):n.min).toFixed(2),minimumFpsAt:n.minAt||"-",orbitPerigeeKm:+e.perigeeKm.toFixed(2),orbitApogeeKm:+e.apogeeKm.toFixed(2),secoTimeSec:e.secoTime===null?null:+e.secoTime.toFixed(2),boosterTouchdownTimeSec:e.touchdownTime===null?null:+e.touchdownTime.toFixed(2),boosterTouchdownSpeedMS:e.boosterTouchdownSpeed===null?null:+e.boosterTouchdownSpeed.toFixed(2),navigationLog:this.autopilot?this.autopilot.log:[],qualityTier:Or[this.engine.tier].name,resolution:`${this.canvas.width}x${this.canvas.height}`,renderer:r?i.getParameter(r.UNMASKED_RENDERER_WEBGL):"unknown"};this.results=o,this.benchmark?(window.__HELIX_BENCHMARK__=o,window.__HELIX_BENCHMARK_PROGRESS__={status:"complete"}):window.__HELIX_LAST_MISSION__=o,this.fps.active=!1,this.hud.scorecard(o,()=>this.copyResults(),()=>{location.href=location.pathname}),this.hud.show("cams",!1)}copyResults(){const t=JSON.stringify(this.results,null,2),e=()=>this.hud.toast("Results copied to the clipboard",2.5,this.time),n=()=>{const i=document.createElement("textarea");i.value=t,document.body.appendChild(i),i.select();try{document.execCommand("copy"),e()}catch{this.hud.toast("Copy failed - read window.__HELIX_BENCHMARK__",3,this.time)}i.remove()};navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t).then(e,n):n()}interactable(){const t=this.player.pos;if(this.state!=="factory"&&this.state!=="boarding")return null;for(let n=0;n<An.length;n++){const i=An[n].stand;if(t.y<2&&Math.hypot(t.x-i.x,t.z-i.z)<1.7)return{type:"station",i:n,text:`Open Station ${String(n+1).padStart(2,"0")} panel - ${An[n].name}`}}const e=this.elevator;return!e.moving&&Math.abs(t.x-le.x)<le.cageHalf&&Math.abs(t.z-le.z)<le.cageHalf&&Math.abs(t.y-(e.y+.24))<.8?{type:"elevator",text:e.y<1?"Ride the elevator up to the crew access arm":"Ride the elevator down"}:this.state==="boarding"&&t.y>le.deckY-1&&Math.hypot(t.x-le.x,t.z-(le.armZ1-.9))<2.2?{type:"board",text:"Board the Helix-1 capsule"}:null}handleKeys(){const t=this.input,e=this.hud;if(t.hit("KeyV")&&e.toast(this.sound.toggleMute()?"Sound muted - press V to unmute":"Sound on",1.8,this.time),this.state!=="menu"){if(t.hit("KeyM")&&e.toggleMap(),this.benchmark){t.pressed.clear();return}if(this.state==="factory"||this.state==="boarding"){if(t.hit("Tab")&&(this.rig.firstPerson=!this.rig.firstPerson),t.hit("KeyF")&&(this.factorySpeedIdx=(this.factorySpeedIdx+1)%ja.length,e.toast(`Factory time-lapse: ${ja[this.factorySpeedIdx]}x`,1.6,this.time)),e.panelIndex>=0)t.hit("KeyE")&&!this.signOff(e.panelIndex)&&this.factory.st[e.panelIndex].state==="signed"&&this.closePanel(),(t.hit("KeyQ")||t.hit("Escape"))&&this.closePanel();else if(t.hit("KeyE")){const n=this.interactable();n&&(n.type==="station"?this.openPanel(n.i):n.type==="elevator"?this.callElevator():n.type==="board"&&this.board())}}else{for(let n=1;n<=4;n++)(t.hit("Digit"+n)||t.hit("Numpad"+n))&&this.launch.setCam(n);t.hit("KeyF")&&(this.flightSpeedIdx=(this.flightSpeedIdx+1)%Ja.length,e.toast(`Flight time-lapse: ${Ja[this.flightSpeedIdx]}x`,1.6,this.time))}}}simStep(t){this.simTime+=t;const e=this.state;if(e==="factory"||e==="boarding"){let n=0,i=0,r=!1;if(this.autopilot)({mx:n,mz:i,sprint:r}=this.autopilot.control(t));else if(this.hud.panelIndex<0&&!this.hud.mapOpen){const[o,a]=this.input.axis();if(o||a){const[l,c]=this.rig.forward();n=l*a-c*o,i=c*a+l*o;const h=Math.hypot(n,i);n/=h,i/=h}r=this.input.down("ShiftLeft")||this.input.down("ShiftRight")}this.player.step(t,n,i,r),this.traffic.step(t,this.player),this.factory.step(t*this.factorySpeed),this.stepElevator(t)}else(e==="countdown"||e==="flight"||e==="done")&&(this.launch.step(t),this.launch.state==="flight"&&e==="countdown"&&(this.state="flight"),this.launch.state==="done"&&e!=="done"&&(this.state="done",this.finish()))}applyCamera(t){const e=this.engine,n=e.camera;let i=58,r=.22,o=0,a="site";const l=this.state;if(l==="menu"){const c=this.time*.045;this.camTrue.set(-24+Math.sin(c)*26,6.2+Math.sin(c*.7)*1.2,8.6+Math.cos(c)*1.6),this.lookTrue.set(-62+Math.sin(c)*12,3.6,-8),n.up.set(0,1,0),this.focus.set(-50,0,0),i=50}else if(l==="factory"||l==="boarding"){const c=this.rig;if(this.benchmark){let f=(this.autopilot.sub==="walk"?this.player.yaw:c.yaw+t*.22)-c.yaw;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;c.yaw+=f*Math.min(1,t*1.6),c.pitch+=(.2-c.pitch)*Math.min(1,t*2),c.dist=8.5,this.input.takeMouse()}else if(this.hud.panelIndex<0&&!this.hud.mapOpen){const[h,u,f]=this.input.takeMouse();c.applyMouse(h,u,f)}else this.input.takeMouse();c.update(t,this.player.body.group.position),this.camTrue.copy(c.truePos),this.lookTrue.copy(c.look),n.up.set(0,1,0),this.focus.copy(this.player.pos),i=60+Math.min(4,this.player.animSpeed*.5)}else{const c=this.launch;this.camTrue.copy(c.camTrue),this.lookTrue.copy(c.lookTrue),n.up.copy(c.camUp),i=c.fov,r=c.near,o=c.shake,a=c.originMode;const h=c.sim.stack,u=c.sim.booster;if(c.cam===3){const f=c.sim.booster.active&&u.alt-Gn.lzAlt<600?c.boosterAnchor.userData.truePos:h.alt<600?c.stackAnchor.userData.truePos:this.pad.trackCam;this.focus.copy(f)}else this.focus.copy(a==="booster"?c.boosterAnchor.userData.truePos:c.stackAnchor.userData.truePos).addScaledVector(n.up,20)}a==="stack"?e.origin.copy(this.launch.stackAnchor.userData.truePos):a==="booster"?e.origin.copy(this.launch.boosterAnchor.userData.truePos):e.origin.set(0,0,0),n.position.copy(this.camTrue).sub(e.origin),this.lookTrue.sub(e.origin),n.lookAt(this.lookTrue),o>0&&(n.rotateX((Math.random()-.5)*o),n.rotateY((Math.random()-.5)*o)),(Math.abs(n.fov-i)>.01||n.near!==r)&&(n.fov=i,n.near=r,n.updateProjectionMatrix()),n.updateMatrixWorld()}applyLighting(){const t=this.engine,e=this.site,n=this.camTrue,i=this.sky.update(n,this.time),r=e.interior(n.x,n.z)&&n.y<33,o=Ri.smoothstep(i,9e3,6e4);t.scene.environment=r?t.envIndoor:t.envOutdoor,t.scene.environmentIntensity=r?.42:.85-o*.4,t.hemi.intensity=r?.36:1-o*.55,t.hemi.color.setRGB(.81-o*.7,.89-o*.75,1-o*.8),t.hemi.groundColor.setRGB(.42-o*.2,.4+o*.05,.35+o*.45),t.fog.density=16e-5*Math.exp(-Math.max(i,0)/2500),e.ground.visible=i<7e4,e.root.visible=n.lengthSq()<9e10,e.shafts.visible=r||n.x<180;const a=!this.lastOrigin.equals(t.origin);this.lastOrigin.copy(t.origin);const l=this.state==="factory"||this.state==="boarding"||this.state==="menu",c=l&&e.interior(this.focus.x,this.focus.z),h=this.factory.st[5].state==="running",u=!c||a||h||t.frame%24===0;t.updateSun(this.focus,l?135:this.launch.cam===3?140:75,u),e.updatePools(this.focus.x,this.focus.z,.016);const f=e.keySpot;c&&(f.position.set(this.focus.x-9,25.2,this.focus.z+8),f.target.position.set(this.focus.x,0,this.focus.z),f.target.updateMatrixWorld()),f.shadow.autoUpdate=c,c!==this.wasIndoor&&(f.shadow.needsUpdate=!0),this.wasIndoor=c}updateHud(t){const e=this.hud,n=this.factory,i=this.state;if(e.tick(this.time),i==="menu")return;e.build(n);let r=null;if(i==="factory"){const l=n.current;if(l){const c=String(l.def.n).padStart(2,"0");r=l.def.stand,l.state==="running"?e.objective(`Station ${c} of 06`,l.def.name,`Work in progress - <b>${Math.round(l.progress*100)}%</b>. Walk to the console (marked on the map) and press <b>E</b> for status. <b>F</b> speeds up the factory.`):e.objective(`Station ${c} of 06`,`Sign off ${l.def.name}`,"Work complete. Press <b>E</b> at the console, then sign the station off to start the next one.")}}else if(i==="boarding"){const l=this.player.pos.y>le.deckY-1;r=l?{x:le.x,z:le.armZ1}:{x:le.x,z:le.z},e.objective("Launch day","Board Helix-1",l?"Cross the crew access arm and press <b>E</b> at the capsule hatch.":"Walk to the launch tower, step into the elevator and press <b>E</b> to ride to the top.")}else i==="countdown"?e.objective("Launch day","Countdown","You are aboard. <b>1-4</b> switch cameras"+(this.benchmark?".":", <b>F</b> speeds up time, drag the mouse to orbit the chase view.")):i==="flight"?e.objective("Mission",this.launch.phaseLabel,this.benchmark?"Benchmark flight - cameras switch automatically.":"<b>1-4</b> switch cameras. <b>F</b> changes the time-lapse speed."):e.objective("Mission","Helix-1 is in orbit","Orbit insertion complete and the booster is back on the pad.");if(!this.benchmark&&e.panelIndex<0){const l=this.interactable();e.prompt("E",l?l.text:null)}else e.prompt("E",null);e.panelIndex>=0&&e.refreshPanel(n),e.set("chip-speed-t",i==="factory"||i==="boarding"?`Factory speed ${this.factorySpeed}x`:`Flight speed ${this.timeScale}x`),e.set("chip-view-t",this.rig.firstPerson?"First person":"Third person"),e.set("chip-sound-t",this.sound.muted?"Sound muted":this.sound.audible?"Sound on":"Sound off"),e.set("chip-fps-t",`${Math.round(this.fps.shown)} fps - ${Or[this.engine.tier].name}`);const o=this.mapState;o.player.x=this.player.pos.x,o.player.z=this.player.pos.z,o.player.yaw=this.player.yaw,o.stations=n.st.map(l=>l.state),o.npcs=this.traffic.npcs,o.vehicles=this.traffic.vehicles,o.doorOpen=this.site.doorOpen,o.te={hingeX:n.hingeX},o.target=r;const a=n.st[5].progress;if(i==="factory"||i==="boarding")n.erect>.5?o.rocket={vertical:!0,x:Bt.x,z:Bt.z}:a>=.18?o.rocket={x:n.hingeX-hn.hingeAhead,len:ie.capsuleTop}:o.rocket=n.st[2].progress>0?{x:n.rocket.root.position.x,len:n.st[3].progress>=1?ie.capsuleTop:ie.s2Top*Math.min(1,n.st[2].progress*1.3)}:null,o.booster=null;else{o.rocket=this.launch.sim.stack.alt<300?{vertical:!0,x:Bt.x,z:Bt.z}:null;const l=this.launch.sim.booster;o.booster=l.active&&l.alt<3e3?{x:this.launch.boosterAnchor.userData.truePos.x,z:this.launch.boosterAnchor.userData.truePos.z}:null}e.drawMaps(o,this.time)}frame(t){const e=Math.min(.25,Math.max(5e-4,(t-this.last)/1e3));this.last=t,this.time+=e,this.handleKeys();const n=this.state,i=n==="countdown"||n==="flight"||n==="done";if(this.timeScale=i?this.benchmark?bu:Ja[this.flightSpeedIdx]:1,n==="done"&&(this.timeScale=1),n!=="menu"){this.acc+=e*this.timeScale;let c=0;const h=Math.ceil(.25*this.timeScale/Zs)+2;for(;this.acc>=Zs&&c<h;)this.simStep(Zs),this.acc-=Zs,c++;this.acc>Zs*3&&(this.acc=0)}const r=Math.min(1,this.acc/Zs);this.sound.setSim(this.simTime,this.launch.sim&&this.state!=="factory"&&this.state!=="boarding"?this.launch.sim.t:null,this.timeScale);const o=e;this.factory.updateVisuals(this.time,o),this.traffic.render(o,this.time);const a=this.state==="factory"||this.state==="boarding";this.player.render(a?r:1,o,this.rig.firstPerson&&a),(this.state==="countdown"||this.state==="flight"||this.state==="done")&&this.launch.render(e*this.timeScale,this.time,this.input,this.benchmark);const l=e*(i?Math.min(this.timeScale,5):1);this.fx.smoke.update(l),this.fx.sparks.update(l),this.fx.trail.update(l),this.applyCamera(e),this.applyLighting(),this.scape.update(e),this.updateHud(e),this.engine.render(),this.input.endFrame(),this.trackFps(e),requestAnimationFrame(c=>this.frame(c))}trackFps(t){const e=this.fps;if(e.winFrames++,e.winT+=t,e.active&&(e.skip>0?e.skip-=t:(e.frames++,e.t+=t)),e.winT>=1){const n=e.winFrames/e.winT;e.shown=n,e.active&&e.skip<=0&&n<e.min&&(e.min=n,e.minAt=`${this.state}${this.launch.sim?" T"+(this.launch.sim.t>=0?"+":"")+this.launch.sim.t.toFixed(0):" station "+(this.factory.signedCount+1)}`),this.governor&&this.state!=="menu"&&(n<46?e.lowWindows++:e.lowWindows=0,e.lowWindows>=3&&this.engine.tier>0&&(this.engine.applyTier(this.engine.tier-1),e.lowWindows=0)),e.winFrames=0,e.winT=0}}debugSkip(t){const e=this.factory,n={s1:0,s2:1,s3:2,s4:3,s5:4,pad:5,deck:5,launch:5}[t];n!==void 0&&(this.state==="menu"&&this.start(!1),e.forceComplete(n),n===5&&(this.state="boarding",t==="deck"||t==="launch"?(this.elevator.y=le.deckY-.24,this.pad.setCage(this.elevator.y,!1),this.player.teleport(le.x,le.deckY,le.armZ1-1.4,0)):this.player.teleport(238,.1,-24,Math.PI/2),t==="launch"&&this.board()))}}const Gi=new u_;window.__HELIX__=Gi;requestAnimationFrame(()=>{setTimeout(()=>{try{Gi.build(),Gi.hud.ready(),Gi.last=performance.now(),requestAnimationFrame(t=>Gi.frame(t));const s=Gi.params;s.get("benchmark")==="1"?Gi.start(!0,!0):s.has("skip")&&Gi.debugSkip(s.get("skip"))}catch(s){console.error(s),document.getElementById("load-note").textContent="Failed to start: "+s.message}},30)});
