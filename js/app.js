(()=>{var yf=0,ch=1,Sf=2;var zr=1,Mf=2,Aa=3,as=0,Ut=1,tn=2,In=0,Ta=1,Us=2,uh=3,hh=4,Ef=5;var Fs=100,bf=101,Af=102,Tf=103,wf=104,Rf=200,Cf=201,Lf=202,If=203,dh=204,fh=205,Pf=206,Nf=207,Df=208,Of=209,Uf=210,Ff=211,qf=212,Bf=213,Hf=214,cl=0,ul=1,hl=2,ua=3,dl=4,fl=5,pl=6,ml=7,ph=0,zf=1,Vf=2,zn=0,Vr=1,kr=2,Gr=3,qs=4,Wr=5,Xr=6,Yr=7;var mh=300,rs=301,Bs=302,Wl=303,Xl=304,$r=306,Cs=1e3,ti=1001,gl=1002,Jt=1003,kf=1004;var Jr=1005;var Qt=1006,Yl=1007;var os=1008;var vn=1009,gh=1010,xh=1011,wa=1012,$l=1013,Vn=1014,Pn=1015,nn=1016,Jl=1017,Zl=1018,Ra=1020,_h=35902,vh=35899,yh=1021,Sh=1022,Nn=1023,ni=1026,ls=1027,jl=1028,Kl=1029,cs=1030,Ql=1031;var ec=1033,Zr=33776,jr=33777,Kr=33778,Qr=33779,tc=35840,nc=35841,ic=35842,sc=35843,ac=36196,rc=37492,oc=37496,lc=37488,cc=37489,eo=37490,uc=37491,hc=37808,dc=37809,fc=37810,pc=37811,mc=37812,gc=37813,xc=37814,_c=37815,vc=37816,yc=37817,Sc=37818,Mc=37819,Ec=37820,bc=37821,Ac=36492,Tc=36494,wc=36495,Rc=36283,Cc=36284,to=36285,Lc=36286;var ur=2300,xl=2301,ol=2302,$u=2303,Ju=2400,Zu=2401,ju=2402;var Gf=3200;var Ic=0,Wf=1,Pi="",Nt="srgb",hr="srgb-linear",dr="linear",ht="srgb";var ll=7680;var Xf=519,Yf=512,$f=513,Jf=514,Pc=515,Zf=516,jf=517,Nc=518,Kf=519,Qf=35044;var Mh="300 es",qn=2e3,ha=2001;function Qm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function e0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ep(){let n=fr("canvas");return n.style.display="block",n}var Fd={},da=null;function Eh(...n){let e="THREE."+n.shift();da?da("log",e,...n):console.log(e,...n)}function tp(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qe(...n){n=tp(n);let e="THREE."+n.shift();if(da)da("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ze(...n){n=tp(n);let e="THREE."+n.shift();if(da)da("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Rs(...n){let e=n.join(" ");e in Fd||(Fd[e]=!0,qe(...n))}function np(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}var ip={[cl]:ul,[hl]:pl,[dl]:ml,[ua]:fl,[ul]:cl,[pl]:hl,[ml]:dl,[fl]:ua},ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mu=Math.PI/180,_l=180/Math.PI;function Ca(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function it(n,e,t){return Math.max(e,Math.min(t,n))}function t0(n,e){return(n%e+e)%e}function Eu(n,e,t){return(1-t)*n+t*e}function er(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pe=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},si=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let l=i[s+0],c=i[s+1],u=i[s+2],d=i[s+3],h=a[r+0],f=a[r+1],g=a[r+2],x=a[r+3];if(d!==x||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*x;m<0&&(h=-h,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),w=Math.sin(E);p=Math.sin(p*E)/w,o=Math.sin(o*E)/w,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+x*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+x*o;let E=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=E,c*=E,u*=E,d*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,a,r){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],d=a[r],h=a[r+1],f=a[r+2],g=a[r+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),d=o(a/2),h=l(i/2),f=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(a-c)*f,this._z=(r-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(a+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(r-s)/f,this._x=(a+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+r*o+s*c-a*l,this._y=s*u+r*l+a*o-i*c,this._z=a*u+r*c+i*l-s*o,this._w=r*u-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,r=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,a=-a,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+a*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),u=2*(o*t-a*s),d=2*(a*i-r*t);return this.x=t+l*c+r*d-o*u,this.y=i+l*u+o*c-a*d,this.z=s+l*d+a*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bu.copy(this).projectOnVector(e),this.sub(bu)}reflect(e){return this.sub(bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bu=new P,qd=new si,ke=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,a,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c)}set(e,t,i,s,a,r,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],x=s[0],m=s[3],p=s[6],E=s[1],w=s[4],y=s[7],b=s[2],A=s[5],C=s[8];return a[0]=r*x+o*E+l*b,a[3]=r*m+o*w+l*A,a[6]=r*p+o*y+l*C,a[1]=c*x+u*E+d*b,a[4]=c*m+u*w+d*A,a[7]=c*p+u*y+d*C,a[2]=h*x+f*E+g*b,a[5]=h*m+f*w+g*A,a[8]=h*p+f*y+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-i*a*u+i*o*l+s*a*c-s*r*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*r-o*c,h=o*l-u*a,f=c*a-r*l,g=t*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-u*i)*x,e[2]=(o*i-s*r)*x,e[3]=h*x,e[4]=(u*t-s*l)*x,e[5]=(s*a-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*a)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){let l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return Rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Au.makeScale(e,t)),this}rotate(e){return Rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Au.makeRotation(-e)),this}translate(e,t){return Rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Au=new ke,Bd=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n0(){let n={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ht&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ht&&(s.r=ca(s.r),s.g=ca(s.g),s.b=ca(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Pi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[hr]:{primaries:e,whitePoint:i,transfer:dr,toXYZ:Bd,fromXYZ:Hd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:Bd,fromXYZ:Hd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),n}var nt=n0();function wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Js,vl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=fr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=wi(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wi(t[i]/255)*255):t[i]=wi(t[i]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},i0=0,fa=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=Ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(Tu(s[r].image)):a.push(Tu(s[r]))}else a=Tu(s);i.url=a}return t||(e.images[this.uuid]=i),i}};function Tu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?vl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var s0=0,wu=new P,gn=class n extends ii{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ti,s=ti,a=Qt,r=os,o=Nn,l=vn,c=n.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Ca(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(wu).x}get height(){return this.source.getSize(wu).y}get depth(){return this.source.getSize(wu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case gl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case gl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=mh;gn.DEFAULT_ANISOTROPY=1;var Ct=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a,l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,y=(f+1)/2,b=(p+1)/2,A=(u+h)/4,C=(d+x)/4,v=(g+m)/4;return w>y&&w>b?w<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(w),s=A/i,a=C/i):y>b?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=A/s,a=v/s):b<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(b),i=C/a,s=v/a),this.set(i,s,a,t),this}let E=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-u)*(h-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-x)/E,this.z=(h-u)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yl=class extends ii{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},a=new gn(s),r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fa(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends yl{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},pr=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Sl=class extends gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var dt=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,a,r,o,l,c,u,d,h,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c,u,d,h,f,g,x,m)}set(e,t,i,s,a,r,o,l,c,u,d,h,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=a,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Zs.setFromMatrixColumn(e,0).length(),a=1/Zs.setFromMatrixColumn(e,1).length(),r=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){let h=r*u,f=r*d,g=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h+x*o,t[4]=g*o-f,t[8]=r*c,t[1]=r*d,t[5]=r*u,t[9]=-o,t[2]=f*o-g,t[6]=x+h*o,t[10]=r*l}else if(e.order==="ZXY"){let h=l*u,f=l*d,g=c*u,x=c*d;t[0]=h-x*o,t[4]=-r*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=r*u,t[9]=x-h*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let h=r*u,f=r*d,g=o*u,x=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+x,t[1]=l*d,t[5]=x*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let h=r*l,f=r*c,g=o*l,x=o*c;t[0]=l*u,t[4]=x-h*d,t[8]=g*d+f,t[1]=d,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-x*d}else if(e.order==="XZY"){let h=r*l,f=r*c,g=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+x,t[5]=r*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=x*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(a0,e,r0)}lookAt(e,t,i){let s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),$i.crossVectors(i,Sn),$i.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),$i.crossVectors(i,Sn)),$i.normalize(),Fo.crossVectors(Sn,$i),s[0]=$i.x,s[4]=Fo.x,s[8]=Sn.x,s[1]=$i.y,s[5]=Fo.y,s[9]=Sn.y,s[2]=$i.z,s[6]=Fo.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],E=i[3],w=i[7],y=i[11],b=i[15],A=s[0],C=s[4],v=s[8],M=s[12],R=s[1],F=s[5],q=s[9],z=s[13],D=s[2],G=s[6],K=s[10],$=s[14],re=s[3],j=s[7],se=s[11],ae=s[15];return a[0]=r*A+o*R+l*D+c*re,a[4]=r*C+o*F+l*G+c*j,a[8]=r*v+o*q+l*K+c*se,a[12]=r*M+o*z+l*$+c*ae,a[1]=u*A+d*R+h*D+f*re,a[5]=u*C+d*F+h*G+f*j,a[9]=u*v+d*q+h*K+f*se,a[13]=u*M+d*z+h*$+f*ae,a[2]=g*A+x*R+m*D+p*re,a[6]=g*C+x*F+m*G+p*j,a[10]=g*v+x*q+m*K+p*se,a[14]=g*M+x*z+m*$+p*ae,a[3]=E*A+w*R+y*D+b*re,a[7]=E*C+w*F+y*G+b*j,a[11]=E*v+w*q+y*K+b*se,a[15]=E*M+w*z+y*$+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],E=l*f-c*h,w=o*f-c*d,y=o*h-l*d,b=r*f-c*u,A=r*h-l*u,C=r*d-o*u;return t*(x*E-m*w+p*y)-i*(g*E-m*b+p*A)+s*(g*w-x*b+p*C)-a*(g*y-x*A+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],a=e[1],r=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(r*u-o*c)-i*(a*u-o*l)+s*(a*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],E=t*o-i*r,w=t*l-s*r,y=t*c-a*r,b=i*l-s*o,A=i*c-a*o,C=s*c-a*l,v=u*x-d*g,M=u*m-h*g,R=u*p-f*g,F=d*m-h*x,q=d*p-f*x,z=h*p-f*m,D=E*z-w*q+y*F+b*R-A*M+C*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/D;return e[0]=(o*z-l*q+c*F)*G,e[1]=(s*q-i*z-a*F)*G,e[2]=(x*C-m*A+p*b)*G,e[3]=(h*A-d*C-f*b)*G,e[4]=(l*R-r*z-c*M)*G,e[5]=(t*z-s*R+a*M)*G,e[6]=(m*y-g*C-p*w)*G,e[7]=(u*C-h*y+f*w)*G,e[8]=(r*q-o*R+c*v)*G,e[9]=(i*R-t*q-a*v)*G,e[10]=(g*A-x*y+p*E)*G,e[11]=(d*y-u*A-f*E)*G,e[12]=(o*M-r*F-l*v)*G,e[13]=(t*F-i*M+s*v)*G,e[14]=(x*w-g*b-m*E)*G,e[15]=(u*b-d*w+h*E)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,u=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*r,0,c*l-s*o,u*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,u=r+r,d=o+o,h=a*c,f=a*u,g=a*d,x=r*u,m=r*d,p=o*d,E=l*c,w=l*u,y=l*d,b=i.x,A=i.y,C=i.z;return s[0]=(1-(x+p))*b,s[1]=(f+y)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(f-y)*A,s[5]=(1-(h+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+w)*C,s[9]=(m-E)*C,s[10]=(1-(h+x))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let r=Zs.set(s[0],s[1],s[2]).length(),o=Zs.set(s[4],s[5],s[6]).length(),l=Zs.set(s[8],s[9],s[10]).length();a<0&&(r=-r),On.copy(this);let c=1/r,u=1/o,d=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,t.setFromRotationMatrix(On),i.x=r,i.y=o,i.z=l,this}makePerspective(e,t,i,s,a,r,o=qn,l=!1){let c=this.elements,u=2*a/(t-e),d=2*a/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s),g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===qn)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===ha)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=qn,l=!1){let c=this.elements,u=2/(t-e),d=2/(i-s),h=-(t+e)/(t-e),f=-(i+s)/(i-s),g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===qn)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===ha)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zs=new P,On=new dt,a0=new P(0,0,0),r0=new P(1,1,1),$i=new P,Fo=new P,Sn=new P,zd=new dt,Vd=new si,Ri=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vd.setFromEuler(this),this.setFromQuaternion(Vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},o0=0,kd=new P,js=new si,Si=new dt,qo=new P,tr=new P,l0=new P,c0=new si,Gd=new P(1,0,0),Wd=new P(0,1,0),Xd=new P(0,0,1),Yd={type:"added"},u0={type:"removed"},Ks={type:"childadded",child:null},Ru={type:"childremoved",child:null},en=class n extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=Ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new P,t=new Ri,i=new si,s=new P(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dt},normalMatrix:{value:new ke}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Gd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,t){return kd.copy(e).applyQuaternion(this.quaternion),this.position.add(kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?qo.copy(e):qo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(tr,qo,this.up):Si.lookAt(qo,tr,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),js.setFromRotationMatrix(Si),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(u0),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),Ks.child=e,this.dispatchEvent(Ks),Ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,l0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,c0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let a=this.children;for(let r=0,o=a.length;r<o;r++)a[r].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),d=r(e.shapes),h=r(e.skeletons),f=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new P(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gt=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},h0={type:"move"},ma=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(h0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Bo={h:0,s:0,l:0};function Cu(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=t0(e,1),t=it(t,0,1),i=it(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=Cu(r,a,e+1/3),this.g=Cu(r,a,e),this.b=Cu(r,a,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function i(a){a!==void 0&&parseFloat(a)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let i=sp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return nt.workingToColorSpace(cn.copy(this),e),Math.round(it(cn.r*255,0,255))*65536+Math.round(it(cn.g*255,0,255))*256+Math.round(it(cn.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(cn.copy(this),t);let i=cn.r,s=cn.g,a=cn.b,r=Math.max(i,s,a),o=Math.min(i,s,a),l,c,u=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=u<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Nt){nt.workingToColorSpace(cn.copy(this),e);let t=cn.r,i=cn.g,s=cn.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Bo);let i=Eu(Ji.h,Bo.h,t),s=Eu(Ji.s,Bo.s,t),a=Eu(Ji.l,Bo.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Fe;Fe.NAMES=sp;var mr=class n{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Un=new P,Mi=new P,Lu=new P,Ei=new P,Qs=new P,ea=new P,$d=new P,Iu=new P,Pu=new P,Nu=new P,Du=new Ct,Ou=new Ct,Uu=new Ct,Qi=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Un.subVectors(e,t),s.cross(Un);let a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Un.subVectors(s,t),Mi.subVectors(i,t),Lu.subVectors(e,t);let r=Un.dot(Un),o=Un.dot(Mi),l=Un.dot(Lu),c=Mi.dot(Mi),u=Mi.dot(Lu),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(r*u-o*l)*h;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,s,a,r,o,l){return this.getBarycoord(e,t,i,s,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Ei.x),l.addScaledVector(r,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,t,i,s,a,r){return Du.setScalar(0),Ou.setScalar(0),Uu.setScalar(0),Du.fromBufferAttribute(e,t),Ou.fromBufferAttribute(e,i),Uu.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(Du,a.x),r.addScaledVector(Ou,a.y),r.addScaledVector(Uu,a.z),r}static isFrontFacing(e,t,i,s){return Un.subVectors(i,t),Mi.subVectors(e,t),Un.cross(Mi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Un.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,a=this.c,r,o;Qs.subVectors(s,i),ea.subVectors(a,i),Iu.subVectors(e,i);let l=Qs.dot(Iu),c=ea.dot(Iu);if(l<=0&&c<=0)return t.copy(i);Pu.subVectors(e,s);let u=Qs.dot(Pu),d=ea.dot(Pu);if(u>=0&&d<=u)return t.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(i).addScaledVector(Qs,r);Nu.subVectors(e,a);let f=Qs.dot(Nu),g=ea.dot(Nu);if(g>=0&&f<=g)return t.copy(a);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ea,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return $d.subVectors(a,s),o=(d-u)/(d-u+(f-g)),t.copy(s).addScaledVector($d,o);let p=1/(m+x+h);return r=x*p,o=h*p,t.copy(i).addScaledVector(Qs,r).addScaledVector(ea,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ai=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Fn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Fn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,Fn):Fn.fromBufferAttribute(a,r),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}let s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),zo.subVectors(this.max,nr),ta.subVectors(e.a,nr),na.subVectors(e.b,nr),ia.subVectors(e.c,nr),Zi.subVectors(na,ta),ji.subVectors(ia,na),bs.subVectors(ta,ia);let t=[0,-Zi.z,Zi.y,0,-ji.z,ji.y,0,-bs.z,bs.y,Zi.z,0,-Zi.x,ji.z,0,-ji.x,bs.z,0,-bs.x,-Zi.y,Zi.x,0,-ji.y,ji.x,0,-bs.y,bs.x,0];return!Fu(t,ta,na,ia,zo)||(t=[1,0,0,0,1,0,0,0,1],!Fu(t,ta,na,ia,zo))?!1:(Vo.crossVectors(Zi,ji),t=[Vo.x,Vo.y,Vo.z],Fu(t,ta,na,ia,zo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},bi=[new P,new P,new P,new P,new P,new P,new P,new P],Fn=new P,Ho=new ai,ta=new P,na=new P,ia=new P,Zi=new P,ji=new P,bs=new P,nr=new P,zo=new P,Vo=new P,As=new P;function Fu(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){As.fromArray(n,a);let o=s.x*Math.abs(As.x)+s.y*Math.abs(As.y)+s.z*Math.abs(As.z),l=e.dot(As),c=t.dot(As),u=i.dot(As);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Bt=new P,ko=new pe,d0=0,un=class extends ii{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Qf,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=er(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=er(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=er(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=er(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),i=_n(i,this.array),s=_n(s,this.array),a=_n(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var xr=class extends un{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var _r=class extends un{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ct=class extends un{constructor(e,t,i){super(new Float32Array(e),t,i)}},f0=new ai,ir=new P,qu=new P,Ci=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):f0.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ir,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(qu)),this.expandByPoint(ir.copy(e.center).sub(qu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},p0=0,Ln=new dt,Bu=new en,sa=new P,Mn=new ai,sr=new ai,$t=new P,Dt=class n extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qm(e)?_r:xr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let a=new ke().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return Bu.lookAt(e),Bu.updateMatrix(),this.applyMatrix4(Bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,a=e.length;s<a;s++){let r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ct(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let a=t[i];Mn.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ci);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){let o=t[a];sr.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Mn.min,sr.min),Mn.expandByPoint($t),$t.addVectors(Mn.max,sr.max),Mn.expandByPoint($t)):(Mn.expandByPoint(sr.min),Mn.expandByPoint(sr.max))}Mn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)$t.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared($t));if(t)for(let a=0,r=t.length;a<r;a++){let o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(sa.fromBufferAttribute(e,c),$t.add(sa)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,a=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==i.count)&&(r=new un(new Float32Array(4*i.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new P,l[v]=new P;let c=new P,u=new P,d=new P,h=new pe,f=new pe,g=new pe,x=new P,m=new P;function p(v,M,R){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,M),d.fromBufferAttribute(i,R),h.fromBufferAttribute(a,v),f.fromBufferAttribute(a,M),g.fromBufferAttribute(a,R),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(F),o[v].add(x),o[M].add(x),o[R].add(x),l[v].add(m),l[M].add(m),l[R].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let v=0,M=E.length;v<M;++v){let R=E[v],F=R.start,q=R.count;for(let z=F,D=F+q;z<D;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let w=new P,y=new P,b=new P,A=new P;function C(v){b.fromBufferAttribute(s,v),A.copy(b);let M=o[v];w.copy(M),w.sub(b.multiplyScalar(b.dot(M))).normalize(),y.crossVectors(A,M);let F=y.dot(l[v])<0?-1:1;r.setXYZW(v,w.x,w.y,w.z,F)}for(let v=0,M=E.length;v<M;++v){let R=E[v],F=R.start,q=R.count;for(let z=F,D=F+q;z<D;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);let s=new P,a=new P,r=new P,o=new P,l=new P,c=new P,u=new P,d=new P;if(e)for(let h=0,f=e.count;h<f;h+=3){let g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)s.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),u.subVectors(r,a),d.subVectors(s,a),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new un(h,u,d)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let a=this.morphAttributes;for(let o in a){let l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},a=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let a=e.morphAttributes;for(let c in a){let u=[],d=a[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,u=r.length;c<u;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Hu=new P,m0=new P,g0=new ke,En=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Hu.subVectors(i,t).cross(m0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Hu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(s,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||g0.getNormalMatrix(e),s=this.coplanarPoint(Hu).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},x0=0,Li=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x0++}),this.uuid=Ca(),this.name="",this.type="Material",this.blending=Ta,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ll,this.stencilZFail=ll,this.stencilZPass=ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){let r=[];for(let o in a){let l=a[o];delete l.metadata,r.push(l)}return r}if(t){let a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Fe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new En().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new pe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new pe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ai=new P,zu=new P,Go=new P,Wo=new P,ga=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,t),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zu.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Wo.copy(this.origin).sub(zu);let a=e.distanceTo(t)*.5,r=-this.direction.dot(Go),o=Wo.dot(this.direction),l=-Wo.dot(Go),c=Wo.lengthSq(),u=Math.abs(1-r*r),d,h,f,g;if(u>0)if(d=r*l-o,h=r*o-l,g=a*u,d>=0)if(h>=-g)if(h<=g){let x=1/u;d*=x,h*=x,f=d*(d+r*h+2*o)+h*(r*d+h+2*l)+c}else h=a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h=-a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-r*a+o)),h=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),f=h*(h+2*l)+c):(d=Math.max(0,-(r*a+o)),h=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+h*(h+2*l)+c);else h=r>0?-a:a,d=Math.max(0,-(r*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zu).addScaledVector(Go,h),f}intersectSphere(e,t){if(e.radius<0)return null;Ai.subVectors(e.center,this.origin);let i=Ai.dot(this.direction),s=Ai.dot(Ai)-i*i,a=e.radius*e.radius;if(s>a)return null;let r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,r=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,r=(e.min.y-h.y)*u),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,s,a){let r=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-r.x,h=e.y-r.y,f=e.z-r.z,g=t.x-r.x,x=t.y-r.y,m=t.z-r.z,p=i.x-r.x,E=i.y-r.y,w=i.z-r.z,y=Math.abs(l),b=Math.abs(c),A=Math.abs(u),C,v,M,R,F,q,z,D,G,K,$,re;if(y>=b&&y>=A?(M=l,q=d,G=g,re=p,l>=0?(C=c,v=u,R=h,F=f,z=x,D=m,K=E,$=w):(C=u,v=c,R=f,F=h,z=m,D=x,K=w,$=E)):b>=A?(M=c,q=h,G=x,re=E,c>=0?(C=u,v=l,R=f,F=d,z=m,D=g,K=w,$=p):(C=l,v=u,R=d,F=f,z=g,D=m,K=p,$=w)):(M=u,q=f,G=m,re=w,u>=0?(C=l,v=c,R=d,F=h,z=g,D=x,K=p,$=E):(C=c,v=l,R=h,F=d,z=x,D=g,K=E,$=p)),M===0)return null;let j=C/M,se=v/M,ae=1/M,Ue=R-j*q,Pe=F-se*q,rt=z-j*G,Ze=D-se*G,et=K-j*re,Q=$-se*re,ie=et*Ze-Q*rt,be=Ue*Q-Pe*et,He=rt*Pe-Ze*Ue;if(s){if(ie<0||be<0||He<0)return null}else if((ie<0||be<0||He<0)&&(ie>0||be>0||He>0))return null;let Ae=ie+be+He;if(Ae===0)return null;let $e=ae*(ie*q+be*G+He*re);return(Ae>0?$e<0:$e>0)?null:this.at($e/Ae,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Bn=class extends Li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jd=new dt,Ts=new ga,Xo=new Ci,Zd=new P,Yo=new P,$o=new P,Jo=new P,Vu=new P,Zo=new P,jd=new P,jo=new P,le=class extends en{constructor(e=new Dt,t=new Bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(a&&o){Zo.set(0,0,0);for(let l=0,c=a.length;l<c;l++){let u=o[l],d=a[l];u!==0&&(Vu.fromBufferAttribute(d,e),r?Zo.addScaledVector(Vu,u):Zo.addScaledVector(Vu.sub(t),u))}t.add(Zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xo.copy(i.boundingSphere),Xo.applyMatrix4(a),Ts.copy(e.ray).recast(e.near),!(Xo.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Xo,Zd)===null||Ts.origin.distanceToSquared(Zd)>(e.far-e.near)**2))&&(Jd.copy(a).invert(),Ts.copy(e.ray).applyMatrix4(Jd),!(i.boundingBox!==null&&Ts.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,i){let s,a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,h=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=r[m.materialIndex],E=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,b=w;y<b;y+=3){let A=o.getX(y),C=o.getX(y+1),v=o.getX(y+2);s=Ko(this,p,e,i,c,u,d,A,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=Ko(this,r,e,i,c,u,d,E,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=r[m.materialIndex],E=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,b=w;y<b;y+=3){let A=y,C=y+1,v=y+2;s=Ko(this,p,e,i,c,u,d,A,C,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let E=m,w=m+1,y=m+2;s=Ko(this,r,e,i,c,u,d,E,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function _0(n,e,t,i,s,a,r,o){let l;if(e.side===Ut?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,e.side===as,o),l===null)return null;jo.copy(o),jo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(jo);return c<t.near||c>t.far?null:{distance:c,point:jo.clone(),object:n}}function Ko(n,e,t,i,s,a,r,o,l,c){n.getVertexPosition(o,Yo),n.getVertexPosition(l,$o),n.getVertexPosition(c,Jo);let u=_0(n,e,t,i,Yo,$o,Jo,jd);if(u){let d=new P;Qi.getBarycoord(jd,Yo,$o,Jo,d),s&&(u.uv=Qi.getInterpolatedAttribute(s,o,l,c,d,new pe)),a&&(u.uv1=Qi.getInterpolatedAttribute(a,o,l,c,d,new pe)),r&&(u.normal=Qi.getInterpolatedAttribute(r,o,l,c,d,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new P,materialIndex:0};Qi.getNormal(Yo,$o,Jo,h.normal),u.face=h,u.barycoord=d}return u}var vr=class extends gn{constructor(e=null,t=1,i=1,s,a,r,o,l,c=Jt,u=Jt,d,h){super(null,r,o,l,c,u,s,a,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yr=class extends un{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},aa=new dt,Kd=new dt,Qo=[],Qd=new ai,v0=new dt,ar=new le,rr=new Ci,xa=class extends le{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,v0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ai),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,aa),Qd.copy(e.boundingBox).applyMatrix4(aa),this.boundingBox.union(Qd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ci),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,aa),rr.copy(e.boundingSphere).applyMatrix4(aa),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,r=e*a+1;for(let o=0;o<i.length;o++)i[o]=s[r+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(ar.geometry=this.geometry,ar.material=this.material,ar.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(i),e.ray.intersectsSphere(rr)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,aa),Kd.multiplyMatrices(i,aa),ar.matrixWorld=Kd,ar.raycast(e,Qo);for(let r=0,o=Qo.length;r<o;r++){let l=Qo[r];l.instanceId=a,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,jl,Pn));let a=this.morphTexture.source.data.data,r=0;for(let c=0;c<i.length;c++)r+=i[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=s*e;return a[l]=o,a.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ws=new Ci,y0=new pe(.5,.5),el=new P,_a=class{constructor(e=new En,t=new En,i=new En,s=new En,a=new En,r=new En){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn,i=!1){let s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],u=a[4],d=a[5],h=a[6],f=a[7],g=a[8],x=a[9],m=a[10],p=a[11],E=a[12],w=a[13],y=a[14],b=a[15];if(s[0].setComponents(c-r,f-u,p-g,b-E).normalize(),s[1].setComponents(c+r,f+u,p+g,b+E).normalize(),s[2].setComponents(c+o,f+d,p+x,b+w).normalize(),s[3].setComponents(c-o,f-d,p-x,b-w).normalize(),i)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,b-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,b-y).normalize(),t===qn)s[5].setComponents(c+l,f+h,p+m,b+y).normalize();else if(t===ha)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);let t=y0.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(el.x=s.normal.x>0?e.max.x:e.min.x,el.y=s.normal.y>0?e.max.y:e.min.y,el.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var va=class extends Li{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ef=new dt,Ku=new ga,tl=new Ci,nl=new P,Sr=class extends en{constructor(e=new Dt,t=new va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tl.copy(i.boundingSphere),tl.applyMatrix4(s),tl.radius+=a,e.ray.intersectsSphere(tl)===!1)return;ef.copy(s).invert(),Ku.copy(e.ray).applyMatrix4(ef);let o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let h=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=h,x=f;g<x;g++){let m=c.getX(g);nl.fromBufferAttribute(d,m),tf(nl,m,l,s,e,t,this)}}else{let h=Math.max(0,r.start),f=Math.min(d.count,r.start+r.count);for(let g=h,x=f;g<x;g++)nl.fromBufferAttribute(d,g),tf(nl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){let o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}};function tf(n,e,t,i,s,a,r){let o=Ku.distanceSqToPoint(n);if(o<t){let l=new P;Ku.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Mr=class extends gn{constructor(e=[],t=rs,i,s,a,r,o,l,c,u){super(e,t,i,s,a,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hn=class extends gn{constructor(e,t,i,s,a,r,o,l,c){super(e,t,i,s,a,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var es=class extends gn{constructor(e,t,i=Vn,s,a,r,o=Jt,l=Jt,c,u=ni,d=1){if(u!==ni&&u!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:d};super(h,s,a,r,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ml=class extends es{constructor(e,t=Vn,i=rs,s,a,r=Jt,o=Jt,l,c=ni){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,i,s,a,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Er=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Et=class n extends Dt{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};let o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2));function g(x,m,p,E,w,y,b,A,C,v,M){let R=y/C,F=b/v,q=y/2,z=b/2,D=A/2,G=C+1,K=v+1,$=0,re=0,j=new P;for(let se=0;se<K;se++){let ae=se*F-z;for(let Ue=0;Ue<G;Ue++){let Pe=Ue*R-q;j[x]=Pe*E,j[m]=ae*w,j[p]=D,c.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=A>0?1:-1,u.push(j.x,j.y,j.z),d.push(Ue/C),d.push(1-se/v),$+=1}}for(let se=0;se<v;se++)for(let ae=0;ae<C;ae++){let Ue=h+ae+G*se,Pe=h+ae+G*(se+1),rt=h+(ae+1)+G*(se+1),Ze=h+(ae+1)+G*se;l.push(Ue,Pe,Ze),l.push(Pe,rt,Ze),re+=6}o.addGroup(f,re,M),f+=re,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ri=class n extends Dt{constructor(e=1,t=1,i=4,s=8,a=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:a},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),a=Math.max(1,Math.floor(a));let r=[],o=[],l=[],c=[],u=t/2,d=Math.PI/2*e,h=t,f=2*d+h,g=i*2+a,x=s+1,m=new P,p=new P;for(let E=0;E<=g;E++){let w=0,y=0,b=0,A=0;if(E<=i){let M=E/i,R=M*Math.PI/2;y=-u-e*Math.cos(R),b=e*Math.sin(R),A=-e*Math.cos(R),w=M*d}else if(E<=i+a){let M=(E-i)/a;y=-u+M*t,b=e,A=0,w=d+M*h}else{let M=(E-i-a)/i,R=M*Math.PI/2;y=u+e*Math.sin(R),b=e*Math.cos(R),A=e*Math.sin(R),w=d+h+M*d}let C=Math.max(0,Math.min(1,w/f)),v=0;E===0?v=.5/s:E===g&&(v=-.5/s);for(let M=0;M<=s;M++){let R=M/s,F=R*Math.PI*2,q=Math.sin(F),z=Math.cos(F);p.x=-b*z,p.y=y,p.z=b*q,o.push(p.x,p.y,p.z),m.set(-b*z,A,b*q),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+v,C)}if(E>0){let M=(E-1)*x;for(let R=0;R<s;R++){let F=M+R,q=M+R+1,z=E*x+R,D=E*x+R+1;r.push(F,q,z),r.push(q,D,z)}}}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ls=class n extends Dt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let a=[],r=[],o=[],l=[],c=new P,u=new pe;r.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(r[h]/e+1)/2,u.y=(r[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)a.push(d,d+1,0);this.setIndex(a),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(o,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class n extends Dt{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),a=Math.floor(a);let u=[],d=[],h=[],f=[],g=0,x=[],m=i/2,p=0;E(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new ct(d,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function E(){let y=new P,b=new P,A=0,C=(t-e)/i;for(let v=0;v<=a;v++){let M=[],R=v/a,F=R*(t-e)+e;for(let q=0;q<=s;q++){let z=q/s,D=z*l+o,G=Math.sin(D),K=Math.cos(D);b.x=F*G,b.y=-R*i+m,b.z=F*K,d.push(b.x,b.y,b.z),y.set(G,C,K).normalize(),h.push(y.x,y.y,y.z),f.push(z,1-R),M.push(g++)}x.push(M)}for(let v=0;v<s;v++)for(let M=0;M<a;M++){let R=x[M][v],F=x[M+1][v],q=x[M+1][v+1],z=x[M][v+1];(e>0||M!==0)&&(u.push(R,F,z),A+=3),(t>0||M!==a-1)&&(u.push(F,q,z),A+=3)}c.addGroup(p,A,0),p+=A}function w(y){let b=g,A=new pe,C=new P,v=0,M=y===!0?e:t,R=y===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),g++;let F=g;for(let q=0;q<=s;q++){let D=q/s*l+o,G=Math.cos(D),K=Math.sin(D);C.x=M*K,C.y=m*R,C.z=M*G,d.push(C.x,C.y,C.z),h.push(0,R,0),A.x=G*.5+.5,A.y=K*.5*R+.5,f.push(A.x,A.y),g++}for(let q=0;q<s;q++){let z=b+q,D=F+q;y===!0?u.push(D,D+1,z):u.push(D+1,D,z),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},oi=class n extends yt{constructor(e=1,t=1,i=32,s=1,a=!1,r=0,o=Math.PI*2){super(0,e,t,i,s,a,r,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),a=0;t.push(0);for(let r=1;r<=e;r++)i=this.getPoint(r/e),a+=i.distanceTo(s),t.push(a),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,a=i.length,r;t?r=t:r=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-r,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===r)return s/(a-1);let u=i[s],h=i[s+1]-u,f=(r-u)/h;return(s+f)/(a-1)}getTangent(e,t){let s=e-1e-4,a=e+1e-4;s<0&&(s=0),a>1&&(a=1);let r=this.getPoint(s),o=this.getPoint(a),l=t||(r.isVector2?new pe:new P);return l.copy(o).sub(r).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new P,s=[],a=[],r=[],o=new P,l=new dt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}a[0]=new P,r[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),h<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],o),r[0].crossVectors(s[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),r[f]=r[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(it(s[f-1].dot(s[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}r[f].crossVectors(s[f],a[f])}if(t===!0){let f=Math.acos(it(a[0].dot(a[e]),-1,1));f/=e,s[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),r[g].crossVectors(s[g],a[g])}return{tangents:s,normals:a,binormals:r}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ya=class extends bn{constructor(e=0,t=0,i=1,s=1,a=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new pe){let i=t,s=Math.PI*2,a=this.aEndAngle-this.aStartAngle,r=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(r?a=0:a=s),this.aClockwise===!0&&!r&&(a===s?a=-s:a=a-s);let o=this.aStartAngle+e*a,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},El=class extends ya{constructor(e,t,i,s,a,r){super(e,t,i,i,s,a,r),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let n=0,e=0,t=0,i=0;function s(a,r,o,l){n=a,e=o,t=-3*a+3*r-2*o-l,i=2*a-2*r+o+l}return{initCatmullRom:function(a,r,o,l,c){s(r,o,c*(o-a),c*(l-r))},initNonuniformCatmullRom:function(a,r,o,l,c,u,d){let h=(r-a)/c-(o-a)/(c+u)+(o-r)/u,f=(o-r)/u-(l-r)/(u+d)+(l-o)/d;h*=u,f*=u,s(r,o,h,f)},calc:function(a){let r=a*a,o=r*a;return n+e*a+t*r+i*o}}}var nf=new P,sf=new P,ku=new bh,Gu=new bh,Wu=new bh,bl=class extends bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new P){let i=t,s=this.points,a=s.length,r=(a-(this.closed?0:1))*e,o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%a]:(sf.subVectors(s[0],s[1]).add(s[0]),c=sf);let d=s[o%a],h=s[(o+1)%a];if(this.closed||o+2<a?u=s[(o+2)%a]:(nf.subVectors(s[a-1],s[a-2]).add(s[a-1]),u=nf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ku.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,x,m),Gu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,x,m),Wu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ku.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Gu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Wu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return i.set(ku.calc(l),Gu.calc(l),Wu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function af(n,e,t,i,s){let a=(i-e)*.5,r=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+a+r)*l+(-3*t+3*i-2*a-r)*o+a*n+t}function S0(n,e){let t=1-n;return t*t*e}function M0(n,e){return 2*(1-n)*n*e}function E0(n,e){return n*n*e}function lr(n,e,t,i){return S0(n,e)+M0(n,t)+E0(n,i)}function b0(n,e){let t=1-n;return t*t*t*e}function A0(n,e){let t=1-n;return 3*t*t*n*e}function T0(n,e){return 3*(1-n)*n*n*e}function w0(n,e){return n*n*n*e}function cr(n,e,t,i,s){return b0(n,e)+A0(n,t)+T0(n,i)+w0(n,s)}var br=class extends bn{constructor(e=new pe,t=new pe,i=new pe,s=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new pe){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(cr(e,s.x,a.x,r.x,o.x),cr(e,s.y,a.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Al=class extends bn{constructor(e=new P,t=new P,i=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new P){let i=t,s=this.v0,a=this.v1,r=this.v2,o=this.v3;return i.set(cr(e,s.x,a.x,r.x,o.x),cr(e,s.y,a.y,r.y,o.y),cr(e,s.z,a.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ar=class extends bn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tl=class extends bn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tr=class extends bn{constructor(e=new pe,t=new pe,i=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new pe){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(lr(e,s.x,a.x,r.x),lr(e,s.y,a.y,r.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wl=class extends bn{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){let i=t,s=this.v0,a=this.v1,r=this.v2;return i.set(lr(e,s.x,a.x,r.x),lr(e,s.y,a.y,r.y),lr(e,s.z,a.z,r.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let i=t,s=this.points,a=(s.length-1)*e,r=Math.floor(a),o=a-r,l=s[r===0?r:r-1],c=s[r],u=s[r>s.length-2?s.length-1:r+1],d=s[r>s.length-3?s.length-1:r+2];return i.set(af(o,l.x,c.x,u.x,d.x),af(o,l.y,c.y,u.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new pe().fromArray(s))}return this}},rf=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:bl,CubicBezierCurve:br,CubicBezierCurve3:Al,EllipseCurve:ya,LineCurve:Ar,LineCurve3:Tl,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:wl,SplineCurve:wr}),Rl=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rf[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),a=0;for(;a<s.length;){if(s[a]>=i){let r=s[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,a=this.curves;s<a.length;s++){let r=a[s],o=r.isEllipseCurve?e*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?e*r.points.length:e,l=r.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new rf[s.type]().fromJSON(s))}return this}},Is=class extends Rl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ar(this.currentPoint.clone(),new pe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let a=new Tr(this.currentPoint.clone(),new pe(e,t),new pe(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,a,r){let o=new br(this.currentPoint.clone(),new pe(e,t),new pe(i,s),new pe(a,r));return this.curves.push(o),this.currentPoint.set(a,r),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new wr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,a,r){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,a,r),this}absarc(e,t,i,s,a,r){return this.absellipse(e,t,i,i,s,a,r),this}ellipse(e,t,i,s,a,r,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,s,a,r,o,l),this}absellipse(e,t,i,s,a,r,o,l){let c=new ya(e,t,i,s,a,r,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Cl=class extends Is{constructor(e){super(e),this.uuid=Ca(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Is().fromJSON(s))}return this}};function R0(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,a=ap(n,0,s,t,!0),r=[];if(!a||a.next===a.prev)return r;let o,l,c;if(i&&(a=N0(n,e,a,t)),n.length>80*t){o=n[0],l=n[1];let u=o,d=l;for(let h=t;h<s;h+=t){let f=n[h],g=n[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Rr(a,r,t,o,l,c,0),r}function ap(n,e,t,i,s){let a;if(s===G0(n,e,t,i)>0)for(let r=e;r<t;r+=i)a=of(r/i|0,n[r],n[r+1],a);else for(let r=t-i;r>=e;r-=i)a=of(r/i|0,n[r],n[r+1],a);return a&&Sa(a,a.next)&&(Lr(a),a=a.next),a}function Ps(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Sa(t,t.next)||Lt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Rr(n,e,t,i,s,a,r){if(!n)return;!r&&a&&q0(n,i,s,a);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(a?L0(n,i,s,a):C0(n)){e.push(l.i,n.i,c.i),Lr(n),n=c.next,o=c.next;continue}if(n=c,n===o){r?r===1?(n=I0(Ps(n),e),Rr(n,e,t,i,s,a,2)):r===2&&P0(n,e,t,i,s,a):Rr(Ps(n),e,t,i,s,a,1);break}}}function C0(n){let e=n.prev,t=n,i=n.next;if(Lt(e,t,i)>=0)return!1;let s=e.x,a=t.x,r=i.x,o=e.y,l=t.y,c=i.y,u=Math.min(s,a,r),d=Math.min(o,l,c),h=Math.max(s,a,r),f=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&or(s,o,a,l,r,c,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function L0(n,e,t,i){let s=n.prev,a=n,r=n.next;if(Lt(s,a,r)>=0)return!1;let o=s.x,l=a.x,c=r.x,u=s.y,d=a.y,h=r.y,f=Math.min(o,l,c),g=Math.min(u,d,h),x=Math.max(o,l,c),m=Math.max(u,d,h),p=Qu(f,g,e,t,i),E=Qu(x,m,e,t,i),w=n.prevZ,y=n.nextZ;for(;w&&w.z>=p&&y&&y.z<=E;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&or(o,u,l,d,c,h,w.x,w.y)&&Lt(w.prev,w,w.next)>=0||(w=w.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&or(o,u,l,d,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&or(o,u,l,d,c,h,w.x,w.y)&&Lt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;y&&y.z<=E;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==r&&or(o,u,l,d,c,h,y.x,y.y)&&Lt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function I0(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Sa(i,s)&&op(i,t,t.next,s)&&Cr(i,s)&&Cr(s,i)&&(e.push(i.i,t.i,s.i),Lr(t),Lr(t.next),t=n=s),t=t.next}while(t!==n);return Ps(t)}function P0(n,e,t,i,s,a){let r=n;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&z0(r,o)){let l=lp(r,o);r=Ps(r,r.next),l=Ps(l,l.next),Rr(r,e,t,i,s,a,0),Rr(l,e,t,i,s,a,0);return}o=o.next}r=r.next}while(r!==n)}function N0(n,e,t,i){let s=[];for(let a=0,r=e.length;a<r;a++){let o=e[a]*i,l=a<r-1?e[a+1]*i:n.length,c=ap(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(H0(c))}s.sort(D0);for(let a=0;a<s.length;a++)t=O0(s[a],t);return t}function D0(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function O0(n,e){let t=U0(n,e);if(!t)return e;let i=lp(t,n);return Ps(i,i.next),Ps(t,t.next)}function U0(n,e){let t=e,i=n.x,s=n.y,a=-1/0,r;if(Sa(n,t))return t;do{if(Sa(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>a&&(a=d,r=t.x<t.next.x?t:t.next,d===i))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,u=1/0;t=r;do{if(i>=t.x&&t.x>=l&&i!==t.x&&rp(s<c?i:a,s,l,c,s<c?a:i,s,t.x,t.y)){let d=Math.abs(s-t.y)/(i-t.x);Cr(t,n)&&(d<u||d===u&&(t.x>r.x||t.x===r.x&&F0(r,t)))&&(r=t,u=d)}t=t.next}while(t!==o);return r}function F0(n,e){return Lt(n.prev,n,e.prev)<0&&Lt(e.next,n,n.next)<0}function q0(n,e,t,i){let s=n;do s.z===0&&(s.z=Qu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,B0(s)}function B0(n){let e,t=1;do{let i=n,s;n=null;let a=null;for(e=0;i;){e++;let r=i,o=0;for(let c=0;c<t&&(o++,r=r.nextZ,!!r);c++);let l=t;for(;o>0||l>0&&r;)o!==0&&(l===0||!r||i.z<=r.z)?(s=i,i=i.nextZ,o--):(s=r,r=r.nextZ,l--),a?a.nextZ=s:n=s,s.prevZ=a,a=s;i=r}a.nextZ=null,t*=2}while(e>1);return n}function Qu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function H0(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function rp(n,e,t,i,s,a,r,o){return(s-r)*(e-o)>=(n-r)*(a-o)&&(n-r)*(i-o)>=(t-r)*(e-o)&&(t-r)*(a-o)>=(s-r)*(i-o)}function or(n,e,t,i,s,a,r,o){return!(n===r&&e===o)&&rp(n,e,t,i,s,a,r,o)}function z0(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!V0(n,e)&&(Cr(n,e)&&Cr(e,n)&&k0(n,e)&&(Lt(n.prev,n,e.prev)||Lt(n,e.prev,e))||Sa(n,e)&&Lt(n.prev,n,n.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Sa(n,e){return n.x===e.x&&n.y===e.y}function op(n,e,t,i){let s=sl(Lt(n,e,t)),a=sl(Lt(n,e,i)),r=sl(Lt(t,i,n)),o=sl(Lt(t,i,e));return!!(s!==a&&r!==o||s===0&&il(n,t,e)||a===0&&il(n,i,e)||r===0&&il(t,n,i)||o===0&&il(t,e,i))}function il(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function sl(n){return n>0?1:n<0?-1:0}function V0(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&op(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Cr(n,e){return Lt(n.prev,n,n.next)<0?Lt(n,e,n.next)>=0&&Lt(n,n.prev,e)>=0:Lt(n,e,n.prev)<0||Lt(n,n.next,e)<0}function k0(n,e){let t=n,i=!1,s=(n.x+e.x)/2,a=(n.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&s<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function lp(n,e){let t=eh(n.i,n.x,n.y),i=eh(e.i,e.x,e.y),s=n.next,a=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function of(n,e,t,i){let s=eh(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Lr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function eh(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(n,e,t,i){let s=0;for(let a=e,r=t-i;a<t;a+=i)s+=(n[r]-n[a])*(n[a+1]+n[r+1]),r=a;return s}var th=class{static triangulate(e,t,i=2){return R0(e,t,i)}},Ll=class n{static area(e){let t=e.length,i=0;for(let s=t-1,a=0;a<t;s=a++)i+=e[s].x*e[a].y-e[a].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],a=[];lf(e),cf(i,e);let r=e.length;t.forEach(lf);for(let l=0;l<t.length;l++)s.push(r),r+=t[l].length,cf(i,t[l]);let o=th.triangulate(i,s);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function lf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function cf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var li=class n extends Dt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let a=e/2,r=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let E=p*h-r;for(let w=0;w<c;w++){let y=w*d-a;g.push(y,-E,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let w=E+c*p,y=E+c*(p+1),b=E+1+c*(p+1),A=E+1+c*p;f.push(w,y,A),f.push(y,b,A)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ma=class n extends Dt{constructor(e=.5,t=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,h=(t-e)/s,f=new P,g=new pe;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){let p=a+m/i*r;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}d+=h}for(let x=0;x<s;x++){let m=x*(i+1);for(let p=0;p<i;p++){let E=p+m,w=E,y=E+i+1,b=E+i+2,A=E+1;o.push(w,y,A),o.push(y,b,A)}}this.setIndex(o),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ii=class n extends Dt{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(r+o,Math.PI),c=0,u=[],d=new P,h=new P,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let E=[],w=p/i,y=r+w*o,b=e*Math.cos(y),A=Math.sqrt(e*e-b*b),C=0;p===0&&r===0?C=.5/t:p===i&&l===Math.PI&&(C=-.5/t);for(let v=0;v<=t;v++){let M=v/t,R=s+M*a;d.x=-A*Math.cos(R),d.y=b,d.z=A*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),x.push(h.x,h.y,h.z),m.push(M+C,1-w),E.push(c++)}u.push(E)}for(let p=0;p<i;p++)for(let E=0;E<t;E++){let w=u[p][E+1],y=u[p][E],b=u[p+1][E],A=u[p+1][E+1];(p!==0||r>0)&&f.push(w,y,A),(p!==i-1||l<Math.PI)&&f.push(y,b,A)}this.setIndex(f),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var An=class n extends Dt{constructor(e=1,t=.4,i=12,s=48,a=Math.PI*2,r=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:a,thetaStart:r,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new P,f=new P,g=new P;for(let x=0;x<=i;x++){let m=r+x/i*o;for(let p=0;p<=s;p++){let E=p/s*a;f.x=(e+t*Math.cos(m))*Math.cos(E),f.y=(e+t*Math.cos(m))*Math.sin(E),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,E=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,y=(s+1)*x+m;l.push(p,E,y),l.push(E,w,y)}this.setIndex(l),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Hs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(uf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(uf(s[0])){let a=[];for(let r=0,o=s.length;r<o;r++)a[r]=s[r].clone();e[t][i]=a}else e[t][i]=s.slice();else e[t][i]=s}}return e}function hn(n){let e={};for(let t=0;t<n.length;t++){let i=Hs(n[t]);for(let s in i)e[s]=i[s]}return e}function uf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function W0(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ah(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Ni={clone:Hs,merge:hn},X0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Y0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends Li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=X0,this.fragmentShader=Y0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=W0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Fe().setHex(s.value);break;case"v2":this.uniforms[i].value=new pe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new P().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[i].value=new dt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ea=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vt=class extends Li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ns=class extends Vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Il=class extends Li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends Li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ra(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Xu(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ts=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],a=t[i-1];n:{e:{let r;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=s,s=t[++i],e<s)break e}r=t.length;break t}if(!(e>=a)){let o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=a,a=t[--i-1],e>=a)break e}r=i,i=0;break t}break n}for(;i<r;){let o=i+r>>>1;e<t[o]?r=o:i=o+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let r=0;r!==s;++r)t[r]=i[a+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nl=class extends ts{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ju,endingEnd:Ju}}intervalChanged_(e,t,i){let s=this.parameterPositions,a=e-2,r=e+1,o=s[a],l=s[r];if(o===void 0)switch(this.getSettings_().endingStart){case Zu:a=e,o=2*t-i;break;case ju:a=s.length-2,o=t+s[a]-s[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zu:r=e,l=2*i-t;break;case ju:r=1,l=i+s[1]-s[0];break;default:r=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*u,this._offsetNext=r*u}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,E=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,y=f*m-f*x;for(let b=0;b!==o;++b)a[b]=p*r[u+b]+E*r[c+b]+w*r[l+b]+y*r[d+b];return a}},Dl=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),d=1-u;for(let h=0;h!==o;++h)a[h]=r[c+h]*d+r[l+h]*u;return a}},Ol=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Ul=class extends ts{interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(i-t)/(s-t),x=1-g;for(let m=0;m!==o;++m)a[m]=r[c+m]*x+r[l+m]*g;return a}let h=o*2,f=e-1;for(let g=0;g!==o;++g){let x=r[c+g],m=r[l+g],p=f*h+g*2,E=d[p],w=d[p+1],y=e*h+g*2,b=u[y],A=u[y+1],C=J0(i,t,E,b,s);a[g]=cp(C,x,w,A,m)}return a}};function cp(n,e,t,i,s){let a=1-n;return a*a*a*e+3*a*a*n*t+3*a*n*n*i+n*n*n*s}function $0(n,e,t,i,s){let a=1-n;return 3*a*a*(t-e)+6*a*n*(i-t)+3*n*n*(s-i)}function J0(n,e,t,i,s){let a=(n-e)/(s-e);for(let r=0;r<8;r++){let o=cp(a,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=$0(a,e,t,i,s);if(Math.abs(l)<1e-10)break;a=Math.max(0,Math.min(1,a-o/l))}return a}var Tn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ra(t,this.TimeBufferType),this.values=ra(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ra(e.times,Array),values:ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Xu(e.settings)&&(i.settings={inTangents:ra(e.settings.inTangents,Array),outTangents:ra(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ul(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth;break;case $u:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return ol;case this.InterpolantFactoryMethodBezier:return $u}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Xu(this.settings)&&(hf(this.settings.inTangents,e),hf(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,a=0,r=s-1;for(;a!==s&&i[a]<e;)++a;for(;r!==-1&&i[r]>t;)--r;if(++r,a!==0||r!==s){a>=r&&(r=Math.max(r,1),a=r-1);let o=this.getValueSize();this.times=i.slice(a,r),this.values=this.values.slice(a*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,a=i.length;a===0&&(ze("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==a;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){ze("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(s!==void 0&&e0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ol,a=e.length-1,r=1;for(let o=1;o<a;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,h=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[h+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let d=o*i,h=r*i;for(let f=0;f!==i;++f)t[h+f]=t[d+f]}++r}}if(a>0){e[r]=e[a];for(let o=a*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Xu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hf(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Tn.prototype.ValueTypeName="";Tn.prototype.TimeBufferType=Float32Array;Tn.prototype.ValueBufferType=Float32Array;Tn.prototype.DefaultInterpolation=xl;var ns=class extends Tn{constructor(e,t,i){super(e,t,i)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=ur;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Fl=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}};Fl.prototype.ValueTypeName="color";var ql=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}};ql.prototype.ValueTypeName="number";var Bl=class extends ts{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let a=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)si.slerpFlat(a,0,r,c-o,r,c,l);return a}},Ir=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}};Ir.prototype.ValueTypeName="quaternion";Ir.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Tn{constructor(e,t,i){super(e,t,i)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=ur;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Tn{constructor(e,t,i,s){super(e,t,i,s)}};Hl.prototype.ValueTypeName="vector";var nh={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(df(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!df(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function df(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var zl=class{constructor(e,t,i){let s=this,a=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,a===!1&&s.onStart!==void 0&&s.onStart(u,r,o),a=!0},this.itemEnd=function(u){r++,s.onProgress!==void 0&&s.onProgress(u,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},up=new zl,Ds=class{constructor(e){this.manager=e!==void 0?e:up,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ds.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ti={},ih=class extends Error{constructor(e,t){super(e),this.response=t}},Pr=class extends Ds{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=nh.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(Ti[e]!==void 0){Ti[e].push({onLoad:t,onProgress:i,onError:s});return}Ti[e]=[],Ti[e].push({onLoad:t,onProgress:i,onError:s});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ti[e],d=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=h?parseInt(h):0,g=f!==0,x=0,m=new ReadableStream({start(p){E();function E(){d.read().then(({done:w,value:y})=>{if(w)p.close();else{x+=y.byteLength;let b=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,C=u.length;A<C;A++){let v=u[A];v.onProgress&&v.onProgress(b)}p.enqueue(y),E()}},w=>{p.error(w)})}}});return new Response(m)}else throw new ih(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(h);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{nh.add(`file:${e}`,c);let u=Ti[e];delete Ti[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ti[e];for(let d=0,h=u.length;d<h;d++){let f=u[d];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ba=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Nr=class extends ba{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yu=new dt,ff=new P,pf=new P,Dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(ff),pf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Yu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Yu,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,r=s?s.z/a.x:1,o=s?s.w/a.y:1,l=s?s.x/a.x:0,c=s?s.y/a.y:0;e.coordinateSystem===ha||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},al=new P,rl=new si,ei=new P,Or=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,rl,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,rl,ei.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(al,rl,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,rl,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ki=new P,mf=new pe,gf=new pe,Kt=class extends Or{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(Mu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,mf,gf),t.subVectors(gf,mf)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mu*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}let o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var sh=class extends Dr{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends ba{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new sh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ss=class extends Or{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,a=i-e,r=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ah=class extends Dr{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ur=class extends ba{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new ah}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var oa=-90,la=1,Vl=class extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Kt(oa,la,e,t);s.layers=this.layers,this.add(s);let a=new Kt(oa,la,e,t);a.layers=this.layers,this.add(a);let r=new Kt(oa,la,e,t);r.layers=this.layers,this.add(r);let o=new Kt(oa,la,e,t);o.layers=this.layers,this.add(o);let l=new Kt(oa,la,e,t);l.layers=this.layers,this.add(l);let c=new Kt(oa,la,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,l]=t;for(let c of t)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,r,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},kl=class extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Fr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Z0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Z0(){this._document.hidden===!1&&this.reset()}var Th="\\[\\]\\.:\\/",j0=new RegExp("["+Th+"]","g"),wh="[^"+Th+"]",K0="[^"+Th.replace("\\.","")+"]",Q0=/((?:WC+[\/:])*)/.source.replace("WC",wh),e1=/(WCOD+)?/.source.replace("WCOD",K0),t1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),n1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),i1=new RegExp("^"+Q0+e1+t1+n1+"$"),s1=["material","materials","bones","map"],rh=class{constructor(e,t,i){let s=i||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Tt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(j0,"")}static parseTrackName(e){let t=i1.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);s1.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(a){for(let r=0;r<a.length;r++){let o=a[r];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,a=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[s];if(r===void 0){let c=t.nodeName;ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=a}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=rh;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var l3=new Float32Array(1);var xf=new dt,qr=class{constructor(e,t,i=0,s=1/0){this.ray=new ga(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xf),this}intersectObject(e,t=!0,i=[]){return oh(e,this,i,t),i.sort(_f),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)oh(e[s],this,i,t);return i.sort(_f),i}};function _f(n,e){return n.distance-e.distance}function oh(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let a=n.children;for(let r=0,o=a.length;r<o;r++)oh(a[r],e,t,!0)}}var Br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var lh=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=s,this}},vf=new pe,Gl=class{constructor(e=new pe(1/0,1/0),t=new pe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=vf.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vf).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};var Hr=class{constructor(){this.type="ShapePath",this.color=new Fe,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Is,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,s){return this.currentPath.quadraticCurveTo(e,t,i,s),this}bezierCurveTo(e,t,i,s,a,r){return this.currentPath.bezierCurveTo(e,t,i,s,a,r),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1,d=c.length;for(let h=0,f=d-1;h<d;f=h++){let g=c[h],x=c[f];g.y>l.y!=x.y>l.y&&l.x<(x.x-g.x)*(l.y-g.y)/(x.y-g.y)+g.x&&(u=!u)}return u}function t(l,c){let u=c.getCenter(new pe);if(e(u,l))return u;let d=u.y,h=[],f=l.length;for(let g=0;g<f;g++){let x=l[g],m=l[(g+1)%f];if(x.y>d!=m.y>d){let p=x.x+(d-x.y)*(m.x-x.x)/(m.y-x.y);h.push(p)}}return h.length>1&&(h.sort((g,x)=>g-x),u.x=(h[0]+h[1])/2),u}let i=this.userData.style&&this.userData.style.fillRule||"nonzero";i!=="nonzero"&&i!=="evenodd"&&(qe('Fill-rule "'+i+'" is not supported, falling back to "nonzero".'),i="nonzero");let s=i==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),a=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let u=Ll.area(c);if(u===0)continue;let d=new Gl;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);a.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}a.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<a.length;l++){let c=a[l],u=0;for(let d=l-1;d>=0;d--){let h=a[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}s(c.winding)===s(u)&&(c.exclude=!0)}for(let l of a)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let r=[],o=new Map;for(let l of a){if(l.exclude||l.role!=="outer")continue;let c=new Cl;c.curves=l.subPath.curves,r.push(c),o.set(l,c)}for(let l of a){if(l.exclude||l.role!=="hole")continue;let c=o.get(l.container);if(!c)continue;let u=new Is;u.curves=l.subPath.curves,c.holes.push(u)}return r}};function Rh(n,e,t,i){let s=a1(i);switch(t){case yh:return n*e;case jl:return n*e/s.components*s.byteLength;case Kl:return n*e/s.components*s.byteLength;case cs:return n*e*2/s.components*s.byteLength;case Ql:return n*e*2/s.components*s.byteLength;case Sh:return n*e*3/s.components*s.byteLength;case Nn:return n*e*4/s.components*s.byteLength;case ec:return n*e*4/s.components*s.byteLength;case Zr:case jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Kr:case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nc:case sc:return Math.max(n,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(n,8)*Math.max(e,8)/2;case ac:case rc:case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oc:case eo:case uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case mc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case gc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case vc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case yc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ac:case Tc:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rc:case Cc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case to:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a1(n){switch(n){case vn:case gh:return{byteLength:1,components:1};case wa:case xh:case nn:return{byteLength:2,components:1};case Jl:case Zl:return{byteLength:2,components:4};case Vn:case $l:case Pn:return{byteLength:4,components:1};case _h:case vh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pp(){let n=null,e=!1,t=null,i=null;function s(a,r){i=n.requestAnimationFrame(s),t(a,r)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function o1(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var l1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c1=`#ifdef USE_ALPHAHASH
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
#endif`,u1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,f1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p1=`#ifdef USE_AOMAP
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
#endif`,m1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g1=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,x1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S1=`#ifdef USE_IRIDESCENCE
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
#endif`,M1=`#ifdef USE_BUMPMAP
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
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,P1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N1=`vec3 transformedNormal = objectNormal;
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
#endif`,D1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q1="gl_FragColor = linearToOutputTexel( gl_FragColor );",B1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,W1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
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
}`,Z1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q1=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,eg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ag=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,rg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,og=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ug=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ig=`#ifdef USE_NORMALMAP
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
#endif`,Pg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Yg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Zg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ex=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nx=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ix=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,lx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cx=`uniform sampler2D t2D;
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`#include <common>
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
}`,mx=`#if DEPTH_PACKING == 3200
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
}`,gx=`#define DISTANCE
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
}`,xx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`uniform float scale;
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
}`,Sx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Ex=`uniform vec3 diffuse;
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
}`,bx=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Tx=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lx=`#define PHONG
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
}`,Ix=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,Px=`#define STANDARD
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
}`,Nx=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Dx=`#define TOON
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
}`,Ox=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,Ux=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,qx=`#include <common>
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
}`,Bx=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,Hx=`uniform float rotation;
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
}`,zx=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:l1,alphahash_pars_fragment:c1,alphamap_fragment:u1,alphamap_pars_fragment:h1,alphatest_fragment:d1,alphatest_pars_fragment:f1,aomap_fragment:p1,aomap_pars_fragment:m1,batching_pars_vertex:g1,batching_vertex:x1,begin_vertex:_1,beginnormal_vertex:v1,bsdfs:y1,iridescence_fragment:S1,bumpmap_pars_fragment:M1,clipping_planes_fragment:E1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:T1,color_fragment:w1,color_pars_fragment:R1,color_pars_vertex:C1,color_vertex:L1,common:I1,cube_uv_reflection_fragment:P1,defaultnormal_vertex:N1,displacementmap_pars_vertex:D1,displacementmap_vertex:O1,emissivemap_fragment:U1,emissivemap_pars_fragment:F1,colorspace_fragment:q1,colorspace_pars_fragment:B1,envmap_fragment:H1,envmap_common_pars_fragment:z1,envmap_pars_fragment:V1,envmap_pars_vertex:k1,envmap_physical_pars_fragment:eg,envmap_vertex:G1,fog_vertex:W1,fog_pars_vertex:X1,fog_fragment:Y1,fog_pars_fragment:$1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:Z1,lights_lambert_fragment:j1,lights_lambert_pars_fragment:K1,lights_pars_begin:Q1,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:ag,lights_physical_pars_fragment:rg,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,lightprobes_pars_fragment:ug,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:dg,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:pg,map_fragment:mg,map_pars_fragment:gg,map_particle_fragment:xg,map_particle_pars_fragment:_g,metalnessmap_fragment:vg,metalnessmap_pars_fragment:yg,morphinstance_vertex:Sg,morphcolor_vertex:Mg,morphnormal_vertex:Eg,morphtarget_pars_vertex:bg,morphtarget_vertex:Ag,normal_fragment_begin:Tg,normal_fragment_maps:wg,normal_pars_fragment:Rg,normal_pars_vertex:Cg,normal_vertex:Lg,normalmap_pars_fragment:Ig,clearcoat_normal_fragment_begin:Pg,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Dg,iridescence_pars_fragment:Og,opaque_fragment:Ug,packing:Fg,premultiplied_alpha_fragment:qg,project_vertex:Bg,dithering_fragment:Hg,dithering_pars_fragment:zg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:Yg,skinbase_vertex:$g,skinning_pars_vertex:Jg,skinning_vertex:Zg,skinnormal_vertex:jg,specularmap_fragment:Kg,specularmap_pars_fragment:Qg,tonemapping_fragment:ex,tonemapping_pars_fragment:tx,transmission_fragment:nx,transmission_pars_fragment:ix,uv_pars_fragment:sx,uv_pars_vertex:ax,uv_vertex:rx,worldpos_vertex:ox,background_vert:lx,background_frag:cx,backgroundCube_vert:ux,backgroundCube_frag:hx,cube_vert:dx,cube_frag:fx,depth_vert:px,depth_frag:mx,distance_vert:gx,distance_frag:xx,equirect_vert:_x,equirect_frag:vx,linedashed_vert:yx,linedashed_frag:Sx,meshbasic_vert:Mx,meshbasic_frag:Ex,meshlambert_vert:bx,meshlambert_frag:Ax,meshmatcap_vert:Tx,meshmatcap_frag:wx,meshnormal_vert:Rx,meshnormal_frag:Cx,meshphong_vert:Lx,meshphong_frag:Ix,meshphysical_vert:Px,meshphysical_frag:Nx,meshtoon_vert:Dx,meshtoon_frag:Ox,points_vert:Ux,points_frag:Fx,shadow_vert:qx,shadow_frag:Bx,sprite_vert:Hx,sprite_frag:zx},ye={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},ui={basic:{uniforms:hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:hn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:hn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:hn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:hn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:hn([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:hn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:hn([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:hn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:hn([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:hn([ye.common,ye.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:hn([ye.lights,ye.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};ui.physical={uniforms:hn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Dc={r:0,b:0,g:0},Vx=new dt,Np=new ke;Np.set(-1,0,0,0,1,0,0,0,1);function kx(n,e,t,i,s,a){let r=new Fe(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(E){let w=E.isScene===!0?E.background:null;if(w&&w.isTexture){let y=E.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(E){let w=!1,y=f(E);y===null?m(r,o):y&&y.isColor&&(m(y,1),w=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(E,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===$r)?(c===void 0&&(c=new le(new Et(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Hs(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Np),c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ht,(u!==y||d!==y.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new le(new li(2,2),new Ot({name:"BackgroundMaterial",uniforms:Hs(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=nt.getTransfer(y.colorSpace)!==ht,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,w){E.getRGB(Dc,Ah(n)),t.buffers.color.setClear(Dc.r,Dc.g,Dc.b,w,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(E,w=1){r.set(E),o=w,m(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(r,o)},render:g,addToRenderList:x,dispose:p}}function Gx(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),a=s,r=!1;function o(F,q,z,D,G){let K=!1,$=d(F,D,z,q);a!==$&&(a=$,c(a.object)),K=f(F,D,z,G),K&&g(F,D,z,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(F,q,z,D),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(F){return n.bindVertexArray(F)}function u(F){return n.deleteVertexArray(F)}function d(F,q,z,D){let G=D.wireframe===!0,K=i[q.id];K===void 0&&(K={},i[q.id]=K);let $=F.isInstancedMesh===!0?F.id:0,re=K[$];re===void 0&&(re={},K[$]=re);let j=re[z.id];j===void 0&&(j={},re[z.id]=j);let se=j[G];return se===void 0&&(se=h(l()),j[G]=se),se}function h(F){let q=[],z=[],D=[];for(let G=0;G<t;G++)q[G]=0,z[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:z,attributeDivisors:D,object:F,attributes:{},index:null}}function f(F,q,z,D){let G=a.attributes,K=q.attributes,$=0,re=z.getAttributes();for(let j in re)if(re[j].location>=0){let ae=G[j],Ue=K[j];if(Ue===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(Ue=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(Ue=F.instanceColor)),ae===void 0||ae.attribute!==Ue||Ue&&ae.data!==Ue.data)return!0;$++}return a.attributesNum!==$||a.index!==D}function g(F,q,z,D){let G={},K=q.attributes,$=0,re=z.getAttributes();for(let j in re)if(re[j].location>=0){let ae=K[j];ae===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));let Ue={};Ue.attribute=ae,ae&&ae.data&&(Ue.data=ae.data),G[j]=Ue,$++}a.attributes=G,a.attributesNum=$,a.index=D}function x(){let F=a.newAttributes;for(let q=0,z=F.length;q<z;q++)F[q]=0}function m(F){p(F,0)}function p(F,q){let z=a.newAttributes,D=a.enabledAttributes,G=a.attributeDivisors;z[F]=1,D[F]===0&&(n.enableVertexAttribArray(F),D[F]=1),G[F]!==q&&(n.vertexAttribDivisor(F,q),G[F]=q)}function E(){let F=a.newAttributes,q=a.enabledAttributes;for(let z=0,D=q.length;z<D;z++)q[z]!==F[z]&&(n.disableVertexAttribArray(z),q[z]=0)}function w(F,q,z,D,G,K,$){$===!0?n.vertexAttribIPointer(F,q,z,G,K):n.vertexAttribPointer(F,q,z,D,G,K)}function y(F,q,z,D){x();let G=D.attributes,K=z.getAttributes(),$=q.defaultAttributeValues;for(let re in K){let j=K[re];if(j.location>=0){let se=G[re];if(se===void 0&&(re==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),re==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),se!==void 0){let ae=se.normalized,Ue=se.itemSize,Pe=e.get(se);if(Pe===void 0)continue;let rt=Pe.buffer,Ze=Pe.type,et=Pe.bytesPerElement,Q=Ze===n.INT||Ze===n.UNSIGNED_INT||se.gpuType===$l;if(se.isInterleavedBufferAttribute){let ie=se.data,be=ie.stride,He=se.offset;if(ie.isInstancedInterleavedBuffer){for(let Ae=0;Ae<j.locationSize;Ae++)p(j.location+Ae,ie.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ae=0;Ae<j.locationSize;Ae++)m(j.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let Ae=0;Ae<j.locationSize;Ae++)w(j.location+Ae,Ue/j.locationSize,Ze,ae,be*et,(He+Ue/j.locationSize*Ae)*et,Q)}else{if(se.isInstancedBufferAttribute){for(let ie=0;ie<j.locationSize;ie++)p(j.location+ie,se.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ie=0;ie<j.locationSize;ie++)m(j.location+ie);n.bindBuffer(n.ARRAY_BUFFER,rt);for(let ie=0;ie<j.locationSize;ie++)w(j.location+ie,Ue/j.locationSize,Ze,ae,Ue*et,Ue/j.locationSize*ie*et,Q)}}else if($!==void 0){let ae=$[re];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(j.location,ae);break;case 3:n.vertexAttrib3fv(j.location,ae);break;case 4:n.vertexAttrib4fv(j.location,ae);break;default:n.vertexAttrib1fv(j.location,ae)}}}}E()}function b(){M();for(let F in i){let q=i[F];for(let z in q){let D=q[z];for(let G in D){let K=D[G];for(let $ in K)u(K[$].object),delete K[$];delete D[G]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;let q=i[F.id];for(let z in q){let D=q[z];for(let G in D){let K=D[G];for(let $ in K)u(K[$].object),delete K[$];delete D[G]}}delete i[F.id]}function C(F){for(let q in i){let z=i[q];for(let D in z){let G=z[D];if(G[F.id]===void 0)continue;let K=G[F.id];for(let $ in K)u(K[$].object),delete K[$];delete G[F.id]}}}function v(F){for(let q in i){let z=i[q],D=F.isInstancedMesh===!0?F.id:0,G=z[D];if(G!==void 0){for(let K in G){let $=G[K];for(let re in $)u($[re].object),delete $[re];delete G[K]}delete z[D],Object.keys(z).length===0&&delete i[q]}}}function M(){R(),r=!0,a!==s&&(a=s,c(a.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Wx(n,e,t){let i;function s(l){i=l}function a(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function r(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,i,1)}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o}function Xx(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let v=C===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==vn&&C!==Pn&&!v&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:y,maxSamples:b,samples:A}}function Yx(n){let e=this,t=null,i=0,s=!1,a=!1,r=new En,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||a&&!m)a?u(null):c();else{let E=a?0:i,w=E*4,y=p.clippingState||null;l.value=y,y=u(g,h,w,f);for(let b=0;b!==w;++b)y[b]=t[b];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,E=h.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==x;++w,y+=4)r.copy(d[w]).applyMatrix4(E,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var Ia=4,$x=6,Jx=20,Zx=256,no=new ss,hp=new Fe,Ch=null,Lh=0,Ih=0,Ph=!1,jx=new P,zs=new P,Uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){let{size:r=256,position:o=jx}=a;Ch=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Lh,Ih),this._renderer.xr.enabled=Ph,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Lh=this._renderer.getActiveCubeFace(),Ih=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:nn,format:Nn,colorSpace:hr,depthBuffer:!1},s=dp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dp(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Kx(a)),this._blurMaterial=e_(a,e,t),this._ggxMaterial=Qx(a,e,t)}return s}_compileMaterial(e){let t=new le(new Dt,e);this._renderer.compile(t,no)}_sceneToCubeUV(e,t,i,s,a){let l=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(hp),d.toneMapping=zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Et,new Bn({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(hp),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[w],a.y,a.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[w],a.z)):(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[w]));let b=this._cubeSize;La(s,y*b,w>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=E}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===rs||e.mapping===Bs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fp());let a=s?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=a;let o=a.uniforms;o.envMap.value=e;let l=this._cubeSize;La(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,no)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,a=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[i];o.material=r;let l=r.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Ia?i-g+Ia:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,La(a,m,p,3*x,2*x),s.setRenderTarget(a),s.render(o,no),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=g-i,La(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,no)}_blur(e,t,i,s){let a=this._pingPongRenderTarget,r=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,r),this._blurPass(a,e,i,i,r)}_blurPass(e,t,i,s,a){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ia?s-this._lodMax+Ia:0),h=4*(this._cubeSize-u);La(t,d,h,3*u,2*u),r.setRenderTarget(t),r.render(l,no)}};function Kx(n){let e=[],t=[],i=n,s=n-Ia+1+$x;for(let a=0;a<s;a++){let r=Math.pow(2,i);e.push(r);let o=1/(r-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),x=new Float32Array(f*h*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,w=p>2?0:-1,y=[E,w,0,E+2/3,w,0,E+2/3,w+1,0,E,w,0,E+2/3,w+1,0,E,w+1,0];g.set(y,f*h*p);for(let b=0;b<h;b++){let A=u[b*2]*2-1,C=u[b*2+1]*2-1;p===0?zs.set(1,C,A):p===1?zs.set(-A,1,-C):p===2?zs.set(-A,C,1):p===3?zs.set(-1,C,-A):p===4?zs.set(-A,-1,C):zs.set(A,C,-1),zs.toArray(x,(p*h+b)*f)}}let m=new Dt;m.setAttribute("position",new un(g,f)),m.setAttribute("outputDirection",new un(x,f)),t.push(new le(m,null)),i>Ia&&i--}return{lodMeshes:t,sizeLods:e}}function dp(n,e,t){let i=new Ht(n,e,t);return i.texture.mapping=$r,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Qx(n,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function e_(n,e,t){return new Ot({name:"SphericalGaussianBlur",defines:{SAMPLES:Jx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function fp(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bc(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function pp(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Mr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Et(5,5,5),a=new Ot({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ut,blending:In});a.uniforms.tEquirect.value=t;let r=new le(s,a),o=t.minFilter;return t.minFilter===os&&(t.minFilter=Qt),new Vl(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}};function t_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?r(h):a(h)}function a(h){if(h&&h.isTexture){let f=h.mapping;if(f===Wl||f===Xl)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Fc(g.height);return x.fromEquirectangularTexture(n,h),e.set(h,x),h.addEventListener("dispose",c),o(x.texture,h.mapping)}else return null}}return h}function r(h){if(h&&h.isTexture){let f=h.mapping,g=f===Wl||f===Xl,x=f===rs||f===Bs;if(g||x){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Uc(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let E=h.image;return g&&E&&E.height>0||x&&E&&l(E)?(i===null&&(i=new Uc(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===Wl?h.mapping=rs:f===Xl&&(h.mapping=Bs),h}function l(h){let f=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function n_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Rs("WebGLRenderer: "+i+" extension not supported."),s}}}function i_(n,e,t,i){let s={},a=new WeakMap;function r(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete s[h.id];let f=a.get(h);f&&(e.remove(f),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",r),s[h.id]=!0,t.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let E=f.array;x=f.version;for(let w=0,y=E.length;w<y;w+=3){let b=E[w+0],A=E[w+1],C=E[w+2];h.push(b,A,A,C,C,b)}}else{let E=g.array;x=g.version;for(let w=0,y=E.length/3-1;w<y;w+=3){let b=w+0,A=w+1,C=w+2;h.push(b,A,A,C,C,b)}}let m=new(g.count>=65535?_r:xr)(h,1);m.version=x;let p=a.get(d);p&&e.remove(p),a.set(d,m)}function u(d){let h=a.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function s_(n,e,t){let i;function s(d){i=d}let a,r;function o(d){a=d.type,r=d.bytesPerElement}function l(d,h){n.drawElements(i,h,a,d*r),t.update(h,i,1)}function c(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,a,d*r,f),t.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,d,0,f);let x=0;for(let m=0;m<f;m++)x+=h[m];t.update(x,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function a_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:ze("WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function r_(n,e,t){let i=new WeakMap,s=new Ct;function a(r,o,l){let c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==d){let M=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*b*4*d),C=new pr(A,y,b,d);C.type=Pn,C.needsUpdate=!0;let v=w*4;for(let R=0;R<d;R++){let F=m[R],q=p[R],z=E[R],D=y*b*4*R;for(let G=0;G<F.count;G++){let K=G*v;f===!0&&(s.fromBufferAttribute(F,G),A[D+K+0]=s.x,A[D+K+1]=s.y,A[D+K+2]=s.z,A[D+K+3]=0),g===!0&&(s.fromBufferAttribute(q,G),A[D+K+4]=s.x,A[D+K+5]=s.y,A[D+K+6]=s.z,A[D+K+7]=0),x===!0&&(s.fromBufferAttribute(z,G),A[D+K+8]=s.x,A[D+K+9]=s.y,A[D+K+10]=s.z,A[D+K+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:C,size:new pe(y,b)},i.set(o,h),o.addEventListener("dispose",M)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:a}}function o_(n,e,t,i,s){let a=new WeakMap;function r(c){let u=s.render.frame,d=c.geometry,h=e.get(c,d);if(a.get(h)!==u&&(e.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;a.get(f)!==u&&(f.update(),a.set(f,u))}return h}function o(){a=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:o}}var l_={[Vr]:"LINEAR_TONE_MAPPING",[kr]:"REINHARD_TONE_MAPPING",[Gr]:"CINEON_TONE_MAPPING",[qs]:"ACES_FILMIC_TONE_MAPPING",[Xr]:"AGX_TONE_MAPPING",[Yr]:"NEUTRAL_TONE_MAPPING",[Wr]:"CUSTOM_TONE_MAPPING"};function c_(n,e,t,i,s,a){let r=new Ht(e,t,{type:n,depthBuffer:s,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Dt;c.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ct([0,2,0,0,2,0],2));let u=new Ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new le(c,u),h=new ss(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,E=[],w=!1;this.setSize=function(y,b){r.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let A=0;A<E.length;A++){let C=E[A];C.setSize&&C.setSize(y,b)}},this.setEffects=function(y){E=y,w=E.length>0&&E[0].isRenderPass===!0;let b=r.width,A=r.height;E.length>0&&o===null&&(o=new Ht(b,A,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new Ht(b,A,{type:nn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<E.length;C++){let v=E[C];v.setSize&&v.setSize(b,A)}},this.begin=function(y,b){if(x||y.toneMapping===zn&&E.length===0)return!1;if(p=b,b!==null){let A=b.width,C=b.height;(r.width!==A||r.height!==C)&&this.setSize(A,C)}return w===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=zn,!0},this.hasRenderPass=function(){return w},this.end=function(y,b){y.toneMapping=m,x=!0;let A=r,C=o;for(let v=0;v<E.length;v++){let M=E[v];M.enabled!==!1&&(M.render(y,C,A,b),M.needsSwap!==!1&&(A=C,C=C===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},nt.getTransfer(f)===ht&&(u.defines.SRGB_TRANSFER="");let v=l_[g];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=A.texture,y.setRenderTarget(p),y.render(d,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Dp=new gn,Oh=new es(1,1),Op=new pr,Up=new Sl,Fp=new Mr,mp=[],gp=[],xp=new Float32Array(16),_p=new Float32Array(9),vp=new Float32Array(4);function Na(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,a=mp[s];if(a===void 0&&(a=new Float32Array(s),mp[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function kt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Gt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hc(n,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function u_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function h_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2fv(this.addr,e),Gt(t,e)}}function d_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;n.uniform3fv(this.addr,e),Gt(t,e)}}function f_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4fv(this.addr,e),Gt(t,e)}}function p_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,i))return;vp.set(i),n.uniformMatrix2fv(this.addr,!1,vp),Gt(t,i)}}function m_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,i))return;_p.set(i),n.uniformMatrix3fv(this.addr,!1,_p),Gt(t,i)}}function g_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(kt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,i))return;xp.set(i),n.uniformMatrix4fv(this.addr,!1,xp),Gt(t,i)}}function x_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function __(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2iv(this.addr,e),Gt(t,e)}}function v_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3iv(this.addr,e),Gt(t,e)}}function y_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4iv(this.addr,e),Gt(t,e)}}function S_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;n.uniform2uiv(this.addr,e),Gt(t,e)}}function E_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;n.uniform3uiv(this.addr,e),Gt(t,e)}}function b_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;n.uniform4uiv(this.addr,e),Gt(t,e)}}function A_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(Oh.compareFunction=t.isReversedDepthBuffer()?Nc:Pc,a=Oh):a=Dp,t.setTexture2D(e||a,s)}function T_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Up,s)}function w_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Fp,s)}function R_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Op,s)}function C_(n){switch(n){case 5126:return u_;case 35664:return h_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return g_;case 5124:case 35670:return x_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return y_;case 5125:return S_;case 36294:return M_;case 36295:return E_;case 36296:return b_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return T_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return R_}}function L_(n,e){n.uniform1fv(this.addr,e)}function I_(n,e){let t=Na(e,this.size,2);n.uniform2fv(this.addr,t)}function P_(n,e){let t=Na(e,this.size,3);n.uniform3fv(this.addr,t)}function N_(n,e){let t=Na(e,this.size,4);n.uniform4fv(this.addr,t)}function D_(n,e){let t=Na(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O_(n,e){let t=Na(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function U_(n,e){let t=Na(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F_(n,e){n.uniform1iv(this.addr,e)}function q_(n,e){n.uniform2iv(this.addr,e)}function B_(n,e){n.uniform3iv(this.addr,e)}function H_(n,e){n.uniform4iv(this.addr,e)}function z_(n,e){n.uniform1uiv(this.addr,e)}function V_(n,e){n.uniform2uiv(this.addr,e)}function k_(n,e){n.uniform3uiv(this.addr,e)}function G_(n,e){n.uniform4uiv(this.addr,e)}function W_(n,e,t){let i=this.cache,s=e.length,a=Hc(t,s);kt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));let r;this.type===n.SAMPLER_2D_SHADOW?r=Oh:r=Dp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||r,a[o])}function X_(n,e,t){let i=this.cache,s=e.length,a=Hc(t,s);kt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Up,a[r])}function Y_(n,e,t){let i=this.cache,s=e.length,a=Hc(t,s);kt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Fp,a[r])}function $_(n,e,t){let i=this.cache,s=e.length,a=Hc(t,s);kt(i,a)||(n.uniform1iv(this.addr,a),Gt(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||Op,a[r])}function J_(n){switch(n){case 5126:return L_;case 35664:return I_;case 35665:return P_;case 35666:return N_;case 35674:return D_;case 35675:return O_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return q_;case 35668:case 35672:return B_;case 35669:case 35673:return H_;case 5125:return z_;case 36294:return V_;case 36295:return k_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return Y_;case 36289:case 36303:case 36311:case 36292:return $_}}var Uh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=C_(t.type)}},Fh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J_(t.type)}},qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let a=0,r=s.length;a!==r;++a){let o=s[a];o.setValue(e,t[o.id],i)}}},Nh=/(\w+)(\])?(\[|\.)?/g;function yp(n,e){n.seq.push(e),n.map[e.id]=e}function Z_(n,e,t){let i=n.name,s=i.length;for(Nh.lastIndex=0;;){let a=Nh.exec(i),r=Nh.lastIndex,o=a[1],l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){yp(t,c===void 0?new Uh(o,n,e):new Fh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new qh(o),yp(t,d)),t=d}}}var Pa=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Z_(o,l,this)}let s=[],a=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(r):a.push(r);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){let a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){let o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,a=e.length;s!==a;++s){let r=e[s];r.id in t&&i.push(r)}return i}};function Sp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var j_=37297,K_=0;function Q_(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){let o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}var Mp=new ke;function e2(n){nt._getMatrix(Mp,nt.workingColorSpace,n);let e=`mat3( ${Mp.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case dr:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Ep(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";let r=/ERROR: 0:(\d+)/.exec(a);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Q_(n.getShaderSource(e),o)}else return a}function t2(n,e){let t=e2(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var n2={[Vr]:"Linear",[kr]:"Reinhard",[Gr]:"Cineon",[qs]:"ACESFilmic",[Xr]:"AgX",[Yr]:"Neutral",[Wr]:"Custom"};function i2(n,e){let t=n2[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Oc=new P;function s2(){nt.getLuminanceCoefficients(Oc);let n=Oc.x.toFixed(4),e=Oc.y.toFixed(4),t=Oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function r2(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function o2(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let a=n.getActiveAttrib(e,s),r=a.name,o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function so(n){return n!==""}function bp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ap(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var l2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(n){return n.replace(l2,u2)}var c2=new Map;function u2(n,e){let t=Qe[e];if(t===void 0){let i=c2.get(e);if(i!==void 0)t=Qe[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bh(t)}var h2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(n){return n.replace(h2,d2)}function d2(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function wp(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var f2={[zr]:"SHADOWMAP_TYPE_PCF",[Aa]:"SHADOWMAP_TYPE_VSM"};function p2(n){return f2[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var m2={[rs]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function g2(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":m2[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var x2={[Bs]:"ENVMAP_MODE_REFRACTION"};function _2(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":x2[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var v2={[ph]:"ENVMAP_BLENDING_MULTIPLY",[zf]:"ENVMAP_BLENDING_MIX",[Vf]:"ENVMAP_BLENDING_ADD"};function y2(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":v2[n.combine]||"ENVMAP_BLENDING_NONE"}function S2(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function M2(n,e,t,i){let s=n.getContext(),a=t.defines,r=t.vertexShader,o=t.fragmentShader,l=p2(t),c=g2(t),u=_2(t),d=y2(t),h=S2(t),f=a2(t),g=r2(a),x=s.createProgram(),m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(so).join(`
`),p.length>0&&(p+=`
`)):(m=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),p=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zn?"#define TONE_MAPPING":"",t.toneMapping!==zn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==zn?i2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,t2("linearToOutputTexel",t.outputColorSpace),s2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),r=Bh(r),r=bp(r,t),r=Ap(r,t),o=Bh(o),o=bp(o,t),o=Ap(o,t),r=Tp(r),o=Tp(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=E+m+r,y=E+p+o,b=Sp(s,s.VERTEX_SHADER,w),A=Sp(s,s.FRAGMENT_SHADER,y);s.attachShader(x,b),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(F){if(n.debug.checkShaderErrors){let q=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(A)||"",G=q.trim(),K=z.trim(),$=D.trim(),re=!0,j=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,b,A);else{let se=Ep(s,b,"vertex"),ae=Ep(s,A,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+G+`
`+se+`
`+ae)}else G!==""?qe("WebGLProgram: Program Info Log:",G):(K===""||$==="")&&(j=!1);j&&(F.diagnostics={runnable:re,programLog:G,vertexShader:{log:K,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(b),s.deleteShader(A),v=new Pa(s,x),M=o2(s,x)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,j_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=A,this}var E2=0,Hh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zh(e),t.set(e,i)),i}},zh=class{constructor(e){this.id=E2++,this.code=e,this.usedTimes=0}};function b2(n){return n===cs||n===eo||n===to}function A2(n,e,t,i,s,a){let r=new pa,o=new Hh,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,h=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,M,R,F,q,z){let D=F.fog,G=q.geometry,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?F.environment:null,$=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,re=e.get(v.envMap||K,$),j=re&&re.mapping===$r?re.image.height:null,se=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));let ae=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ue=ae!==void 0?ae.length:0,Pe=0;G.morphAttributes.position!==void 0&&(Pe=1),G.morphAttributes.normal!==void 0&&(Pe=2),G.morphAttributes.color!==void 0&&(Pe=3);let rt,Ze,et,Q;if(se){let xe=ui[se];rt=xe.vertexShader,Ze=xe.fragmentShader}else{rt=v.vertexShader,Ze=v.fragmentShader;let xe=o.getVertexShaderStage(v),ce=o.getFragmentShaderStage(v);o.update(v,xe,ce),et=xe.id,Q=ce.id}let ie=n.getRenderTarget(),be=n.state.buffers.depth.getReversed(),He=q.isInstancedMesh===!0,Ae=q.isBatchedMesh===!0,$e=!!v.map,pt=!!v.matcap,Me=!!re,tt=!!v.aoMap,ft=!!v.lightMap,je=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,It=!!v.displacementMap,rn=!!v.emissiveMap,_t=!!v.metalnessMap,bt=!!v.roughnessMap,U=v.anisotropy>0,Ft=v.clearcoat>0,ot=v.dispersion>0,T=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,W=v.transmission>0,J=U&&!!v.anisotropyMap,ue=Ft&&!!v.clearcoatMap,de=Ft&&!!v.clearcoatNormalMap,Z=Ft&&!!v.clearcoatRoughnessMap,te=_&&!!v.iridescenceMap,_e=_&&!!v.iridescenceThicknessMap,Ne=B&&!!v.sheenColorMap,ge=B&&!!v.sheenRoughnessMap,ve=!!v.specularMap,De=!!v.specularColorMap,Ce=!!v.specularIntensityMap,Xe=W&&!!v.transmissionMap,O=W&&!!v.thicknessMap,fe=!!v.gradientMap,ee=!!v.alphaMap,L=v.alphaTest>0,H=!!v.alphaHash,I=!!v.extensions,X=zn;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(X=n.toneMapping);let ne={shaderID:se,shaderType:v.type,shaderName:v.name,vertexShader:rt,fragmentShader:Ze,defines:v.defines,customVertexShaderID:et,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&q._colorsTexture!==null,instancing:He,instancingColor:He&&q.instanceColor!==null,instancingMorph:He&&q.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:pt,envMap:Me,envMapMode:Me&&re.mapping,envMapCubeUVHeight:j,aoMap:tt,lightMap:ft,bumpMap:je,normalMap:xt,displacementMap:It,emissiveMap:rn,normalMapObjectSpace:xt&&v.normalMapType===Wf,normalMapTangentSpace:xt&&v.normalMapType===Ic,packedNormalMap:xt&&v.normalMapType===Ic&&b2(v.normalMap.format),metalnessMap:_t,roughnessMap:bt,anisotropy:U,anisotropyMap:J,clearcoat:Ft,clearcoatMap:ue,clearcoatNormalMap:de,clearcoatRoughnessMap:Z,dispersion:ot,retroreflection:T,iridescence:_,iridescenceMap:te,iridescenceThicknessMap:_e,sheen:B,sheenColorMap:Ne,sheenRoughnessMap:ge,specularMap:ve,specularColorMap:De,specularIntensityMap:Ce,transmission:W,transmissionMap:Xe,thicknessMap:O,gradientMap:fe,opaque:v.transparent===!1&&v.blending===Ta&&v.alphaToCoverage===!1,alphaMap:ee,alphaTest:L,alphaHash:H,combine:v.combine,mapUv:$e&&g(v.map.channel),aoMapUv:tt&&g(v.aoMap.channel),lightMapUv:ft&&g(v.lightMap.channel),bumpMapUv:je&&g(v.bumpMap.channel),normalMapUv:xt&&g(v.normalMap.channel),displacementMapUv:It&&g(v.displacementMap.channel),emissiveMapUv:rn&&g(v.emissiveMap.channel),metalnessMapUv:_t&&g(v.metalnessMap.channel),roughnessMapUv:bt&&g(v.roughnessMap.channel),anisotropyMapUv:J&&g(v.anisotropyMap.channel),clearcoatMapUv:ue&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:ge&&g(v.sheenRoughnessMap.channel),specularMapUv:ve&&g(v.specularMap.channel),specularColorMapUv:De&&g(v.specularColorMap.channel),specularIntensityMapUv:Ce&&g(v.specularIntensityMap.channel),transmissionMapUv:Xe&&g(v.transmissionMap.channel),thicknessMapUv:O&&g(v.thicknessMap.channel),alphaMapUv:ee&&g(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||U),vertexNormals:!!G.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!G.attributes.uv&&($e||ee),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||G.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:q.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:Pe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:X,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&nt.getTransfer(v.map.colorSpace)===ht,decodeVideoTextureEmissive:rn&&v.emissiveMap.isVideoTexture===!0&&nt.getTransfer(v.emissiveMap.colorSpace)===ht,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===tn,flipSided:v.side===Ut,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:I&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(I&&v.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function m(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let R in v.defines)M.push(R),M.push(v.defines[R]);return v.isRawShaderMaterial===!1&&(p(M,v),E(M,v),M.push(n.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function E(v,M){r.disableAll(),M.instancing&&r.enable(0),M.instancingColor&&r.enable(1),M.instancingMorph&&r.enable(2),M.matcap&&r.enable(3),M.envMap&&r.enable(4),M.normalMapObjectSpace&&r.enable(5),M.normalMapTangentSpace&&r.enable(6),M.clearcoat&&r.enable(7),M.iridescence&&r.enable(8),M.alphaTest&&r.enable(9),M.vertexColors&&r.enable(10),M.vertexAlphas&&r.enable(11),M.vertexUv1s&&r.enable(12),M.vertexUv2s&&r.enable(13),M.vertexUv3s&&r.enable(14),M.vertexTangents&&r.enable(15),M.anisotropy&&r.enable(16),M.alphaHash&&r.enable(17),M.batching&&r.enable(18),M.dispersion&&r.enable(19),M.retroreflection&&r.enable(24),M.batchingColor&&r.enable(20),M.gradientMap&&r.enable(21),M.packedNormalMap&&r.enable(22),M.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),M.fog&&r.enable(0),M.useFog&&r.enable(1),M.flatShading&&r.enable(2),M.logarithmicDepthBuffer&&r.enable(3),M.reversedDepthBuffer&&r.enable(4),M.skinning&&r.enable(5),M.morphTargets&&r.enable(6),M.morphNormals&&r.enable(7),M.morphColors&&r.enable(8),M.premultipliedAlpha&&r.enable(9),M.shadowMapEnabled&&r.enable(10),M.doubleSided&&r.enable(11),M.flipSided&&r.enable(12),M.useDepthPacking&&r.enable(13),M.dithering&&r.enable(14),M.transmission&&r.enable(15),M.sheen&&r.enable(16),M.opaque&&r.enable(17),M.pointsUvs&&r.enable(18),M.decodeVideoTexture&&r.enable(19),M.decodeVideoTextureEmissive&&r.enable(20),M.alphaToCoverage&&r.enable(21),M.numLightProbeGrids>0&&r.enable(22),M.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function w(v){let M=f[v.type],R;if(M){let F=ui[M];R=Ni.clone(F.uniforms)}else R=v.uniforms;return R}function y(v,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new M2(n,M,v,s),c.push(R),u.set(M,R)),R}function b(v){if(--v.usedTimes===0){let M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function C(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:C}}function T2(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function w2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Rp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cp(){let n=[],e=0,t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,x,m,p){let E=n[e];return E===void 0?(E={id:h.id,object:h,geometry:f,material:g,materialVariant:r(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},n[e]=E):(E.id=h.id,E.object=h,E.geometry=f,E.material=g,E.materialVariant=r(h),E.groupOrder=x,E.renderOrder=h.renderOrder,E.z=m,E.group=p),e++,E}function l(h,f,g,x,m,p,E){E.reversedDepth===!0&&(m=-m);let w=o(h,f,g,x,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(h,f,g,x,m,p){let E=o(h,f,g,x,m,p);g.transmission>0?i.unshift(E):g.transparent===!0?s.unshift(E):t.unshift(E)}function u(h,f){t.length>1&&t.sort(h||w2),i.length>1&&i.sort(f||Rp),s.length>1&&s.sort(f||Rp)}function d(){for(let h=e,f=n.length;h<f;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:l,unshift:c,finish:d,sort:u}}function R2(){let n=new WeakMap;function e(i,s){let a=n.get(i),r;return a===void 0?(r=new Cp,n.set(i,[r])):s>=a.length?(r=new Cp,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function C2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new Fe};break;case"SpotLight":t={position:new P,direction:new P,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function L2(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var I2=0;function P2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function N2(n){let e=new C2,t=L2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);let s=new P,a=new dt,r=new dt;function o(c){let u=0,d=0,h=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,E=0,w=0,y=0,b=0,A=0,C=0,v=0,M=0,R=0;c.sort(P2);for(let q=0,z=c.length;q<z;q++){let D=c[q],G=D.color,K=D.intensity,$=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===cs?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=G.r*K,d+=G.g*K,h+=G.b*K;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],K);R++}else if(D.isSunLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),i.sunShadow[g]=ae,i.sunShadowMap[g]=re;let Ue=se.getViewportCount();for(let Pe=0;Pe<Ue;Pe++)i.sunShadowMatrix[x+Pe]=se.getMatrix(Pe),i.sunShadowCascade[x+Pe]=se._cascadeData[Pe];x+=Ue,g++}i.sun[f]=j,f++}else if(D.isDirectionalLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let se=D.shadow,ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,i.directionalShadow[m]=ae,i.directionalShadowMap[m]=re,i.directionalShadowMatrix[m]=D.shadow.matrix,b++}i.directional[m]=j,m++}else if(D.isSpotLight){let j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(K),j.distance=$,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[E]=j;let se=D.shadow;if(D.map&&(i.spotLightMap[v]=D.map,v++,se.updateMatrices(D),D.castShadow&&M++),i.spotLightMatrix[E]=se.matrix,D.castShadow){let ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,i.spotShadow[E]=ae,i.spotShadowMap[E]=re,C++}E++}else if(D.isRectAreaLight){let j=e.get(D);j.color.copy(G).multiplyScalar(K),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[w]=j,w++}else if(D.isPointLight){let j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){let se=D.shadow,ae=t.get(D);ae.shadowIntensity=se.intensity,ae.shadowBias=se.bias,ae.shadowNormalBias=se.normalBias,ae.shadowRadius=se.radius,ae.shadowMapSize=se.mapSize,ae.shadowCameraNear=se.camera.near,ae.shadowCameraFar=se.camera.far,i.pointShadow[p]=ae,i.pointShadowMap[p]=re,i.pointShadowMatrix[p]=D.shadow.matrix,A++}i.point[p]=j,p++}else if(D.isHemisphereLight){let j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(K),j.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[y]=j,y++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;let F=i.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==E||F.rectAreaLength!==w||F.hemiLength!==y||F.numSunShadows!==g||F.numDirectionalShadows!==b||F.numPointShadows!==A||F.numSpotShadows!==C||F.numSpotMaps!==v||F.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=E,i.rectArea.length=w,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+v-M,i.spotLightMap.length=v,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=E,F.rectAreaLength=w,F.hemiLength=y,F.numSunShadows=g,F.numDirectionalShadows=b,F.numPointShadows=A,F.numSpotShadows=C,F.numSpotMaps=v,F.numLightProbes=R,i.version=I2++)}function l(c,u){let d=0,h=0,f=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let E=0,w=c.length;E<w;E++){let y=c[E];if(y.isSunLight){let b=i.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(y.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let b=i.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(r),b.halfHeight.applyMatrix4(r),x++}else if(y.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Lp(n){let e=new N2(n),t=[],i=[],s=[];function a(h){d.camera=h,t.length=0,i.length=0,s.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let d={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:c,setupLightsView:u,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function D2(n){let e=new WeakMap;function t(s,a=0){let r=e.get(s),o;return r===void 0?(o=new Lp(n),e.set(s,[o])):a>=r.length?(o=new Lp(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var O2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,F2=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],q2=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Ip=new dt,io=new P,Dh=new P;function B2(n,e,t){let i=new _a,s=new pe,a=new pe,r=new Ct,o=new Il,l=new Pl,c={},u=t.maxTextureSize,d={[as]:Ut,[Ut]:as,[tn]:tn},h=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:O2,fragmentShader:U2}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new le(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zr;let p=this.type;this.render=function(A,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Mf&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zr);let M=n.getRenderTarget(),R=n.getActiveCubeFace(),F=n.getActiveMipmapLevel(),q=n.state;q.setBlending(In),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=p!==this.type;z&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(G=>G.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,G=A.length;D<G;D++){let K=A[D],$=K.shadow;if($===void 0){qe("WebGLShadowMap:",K,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let re=$.getFrameExtents();s.multiply(re),a.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(a.x=Math.floor(u/re.x),s.x=a.x*re.x,$.mapSize.x=a.x),s.y>u&&(a.y=Math.floor(u/re.y),s.y=a.y*re.y,$.mapSize.y=a.y));let j=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=j,$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Aa){if(K.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ht(s.x,s.y,{format:cs,type:nn,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),$.map.texture.name=K.name+".shadowMap",$.map.depthTexture=new es(s.x,s.y,Pn),$.map.depthTexture.name=K.name+".shadowMapDepth",$.map.depthTexture.format=ni,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Jt,$.map.depthTexture.magFilter=Jt}else K.isPointLight?($.map=new Fc(s.x),$.map.depthTexture=new Ml(s.x,Vn)):($.map=new Ht(s.x,s.y),$.map.depthTexture=new es(s.x,s.y,Vn)),$.map.depthTexture.name=K.name+".shadowMap",$.map.depthTexture.format=ni,this.type===zr?($.map.depthTexture.compareFunction=j?Nc:Pc,$.map.depthTexture.minFilter=Qt,$.map.depthTexture.magFilter=Qt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Jt,$.map.depthTexture.magFilter=Jt);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let se=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();K.isPointLight!==!0&&$.updateMatrices(K,v);for(let ae=0;ae<se;ae++){let Ue=$.getCamera(ae);if(K.isPointLight){let Pe=$.camera,rt=$.matrix,Ze=K.distance||Pe.far;Ze!==Pe.far&&(Pe.far=Ze,Pe.updateProjectionMatrix()),io.setFromMatrixPosition(K.matrixWorld),Pe.position.copy(io),Dh.copy(Pe.position),Dh.add(F2[ae]),Pe.up.copy(q2[ae]),Pe.lookAt(Dh),Pe.updateMatrixWorld(),rt.makeTranslation(-io.x,-io.y,-io.z),Ip.multiplyMatrices(Pe.projectionMatrix,Pe.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Ip,Pe.coordinateSystem,Pe.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,ae),n.clear();else{ae===0&&(n.setRenderTarget($.map),n.clear());let Pe=$.getViewport(ae);r.set(a.x*Pe.x,a.y*Pe.y,a.x*Pe.z,a.y*Pe.w),q.viewport(r)}i=$.getFrustum(ae),y(C,v,Ue,K,this.type)}$.isPointLightShadow!==!0&&this.type===Aa&&E($,v),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,R,F)};function E(A,C){let v=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ht(s.x,s.y,{format:cs,type:nn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(C,null,v,h,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(C,null,v,f,x,null)}function w(A,C,v,M){let R=null,F=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)R=F;else if(R=v.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let q=R.uuid,z=C.uuid,D=c[q];D===void 0&&(D={},c[q]=D);let G=D[z];G===void 0&&(G=R.clone(),D[z]=G,C.addEventListener("dispose",b)),R=G}if(R.visible=C.visible,R.wireframe=C.wireframe,M===Aa?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:d[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let q=n.properties.get(R);q.light=v}return R}function y(A,C,v,M,R){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===Aa)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);let z=e.update(A),D=A.material;if(Array.isArray(D)){let G=z.groups;for(let K=0,$=G.length;K<$;K++){let re=G[K],j=D[re.materialIndex];if(j&&j.visible){let se=w(A,j,M,R);A.onBeforeShadow(n,A,C,v,z,se,re),n.renderBufferDirect(v,null,z,se,A,re),A.onAfterShadow(n,A,C,v,z,se,re)}}}else if(D.visible){let G=w(A,D,M,R);A.onBeforeShadow(n,A,C,v,z,G,null),n.renderBufferDirect(v,null,z,G,A,null),A.onAfterShadow(n,A,C,v,z,G,null)}}let q=A.children;for(let z=0,D=q.length;z<D;z++)y(q[z],C,v,M,R)}function b(A){A.target.removeEventListener("dispose",b);for(let v in c){let M=c[v],R=A.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function H2(n,e){function t(){let O=!1,fe=new Ct,ee=null,L=new Ct(0,0,0,0);return{setMask:function(H){ee!==H&&!O&&(n.colorMask(H,H,H,H),ee=H)},setLocked:function(H){O=H},setClear:function(H,I,X,ne,xe){xe===!0&&(H*=ne,I*=ne,X*=ne),fe.set(H,I,X,ne),L.equals(fe)===!1&&(n.clearColor(H,I,X,ne),L.copy(fe))},reset:function(){O=!1,ee=null,L.set(-1,0,0,0)}}}function i(){let O=!1,fe=!1,ee=null,L=null,H=null;return{setReversed:function(I){if(fe!==I){let X=e.get("EXT_clip_control");I?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),fe=I;let ne=H;H=null,this.setClear(ne)}},getReversed:function(){return fe},setTest:function(I){I?ie(n.DEPTH_TEST):be(n.DEPTH_TEST)},setMask:function(I){ee!==I&&!O&&(n.depthMask(I),ee=I)},setFunc:function(I){if(fe&&(I=ip[I]),L!==I){switch(I){case cl:n.depthFunc(n.NEVER);break;case ul:n.depthFunc(n.ALWAYS);break;case hl:n.depthFunc(n.LESS);break;case ua:n.depthFunc(n.LEQUAL);break;case dl:n.depthFunc(n.EQUAL);break;case fl:n.depthFunc(n.GEQUAL);break;case pl:n.depthFunc(n.GREATER);break;case ml:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}L=I}},setLocked:function(I){O=I},setClear:function(I){H!==I&&(H=I,fe&&(I=1-I),n.clearDepth(I))},reset:function(){O=!1,ee=null,L=null,H=null,fe=!1}}}function s(){let O=!1,fe=null,ee=null,L=null,H=null,I=null,X=null,ne=null,xe=null;return{setTest:function(ce){O||(ce?ie(n.STENCIL_TEST):be(n.STENCIL_TEST))},setMask:function(ce){fe!==ce&&!O&&(n.stencilMask(ce),fe=ce)},setFunc:function(ce,Je,Rt){(ee!==ce||L!==Je||H!==Rt)&&(n.stencilFunc(ce,Je,Rt),ee=ce,L=Je,H=Rt)},setOp:function(ce,Je,Rt){(I!==ce||X!==Je||ne!==Rt)&&(n.stencilOp(ce,Je,Rt),I=ce,X=Je,ne=Rt)},setLocked:function(ce){O=ce},setClear:function(ce){xe!==ce&&(n.clearStencil(ce),xe=ce)},reset:function(){O=!1,fe=null,ee=null,L=null,H=null,I=null,X=null,ne=null,xe=null}}}let a=new t,r=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,E=null,w=null,y=null,b=null,A=null,C=null,v=new Fe(0,0,0),M=0,R=!1,F=null,q=null,z=null,D=null,G=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,re=0,j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=re>=1):j.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=re>=2);let se=null,ae={},Ue=n.getParameter(n.SCISSOR_BOX),Pe=n.getParameter(n.VIEWPORT),rt=new Ct().fromArray(Ue),Ze=new Ct().fromArray(Pe);function et(O,fe,ee,L){let H=new Uint8Array(4),I=n.createTexture();n.bindTexture(O,I),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let X=0;X<ee;X++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(fe,0,n.RGBA,1,1,L,0,n.RGBA,n.UNSIGNED_BYTE,H):n.texImage2D(fe+X,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,H);return I}let Q={};Q[n.TEXTURE_2D]=et(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=et(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=et(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=et(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),ie(n.DEPTH_TEST),r.setFunc(ua),je(!1),xt(ch),ie(n.CULL_FACE),tt(In);function ie(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function be(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function He(O,fe){return h[O]!==fe?(n.bindFramebuffer(O,fe),h[O]=fe,O===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=fe),O===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=fe),!0):!1}function Ae(O,fe){let ee=g,L=!1;if(O){ee=f.get(fe),ee===void 0&&(ee=[],f.set(fe,ee));let H=O.textures;if(ee.length!==H.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let I=0,X=H.length;I<X;I++)ee[I]=n.COLOR_ATTACHMENT0+I;ee.length=H.length,L=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,L=!0);L&&n.drawBuffers(ee)}function $e(O){return x!==O?(n.useProgram(O),x=O,!0):!1}let pt={[Fs]:n.FUNC_ADD,[bf]:n.FUNC_SUBTRACT,[Af]:n.FUNC_REVERSE_SUBTRACT};pt[Tf]=n.MIN,pt[wf]=n.MAX;let Me={[Rf]:n.ZERO,[Cf]:n.ONE,[Lf]:n.SRC_COLOR,[dh]:n.SRC_ALPHA,[Uf]:n.SRC_ALPHA_SATURATE,[Df]:n.DST_COLOR,[Pf]:n.DST_ALPHA,[If]:n.ONE_MINUS_SRC_COLOR,[fh]:n.ONE_MINUS_SRC_ALPHA,[Of]:n.ONE_MINUS_DST_COLOR,[Nf]:n.ONE_MINUS_DST_ALPHA,[Ff]:n.CONSTANT_COLOR,[qf]:n.ONE_MINUS_CONSTANT_COLOR,[Bf]:n.CONSTANT_ALPHA,[Hf]:n.ONE_MINUS_CONSTANT_ALPHA};function tt(O,fe,ee,L,H,I,X,ne,xe,ce){if(O===In){m===!0&&(be(n.BLEND),m=!1);return}if(m===!1&&(ie(n.BLEND),m=!0),O!==Ef){if(O!==p||ce!==R){if((E!==Fs||b!==Fs)&&(n.blendEquation(n.FUNC_ADD),E=Fs,b=Fs),ce)switch(O){case Ta:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Us:n.blendFunc(n.ONE,n.ONE);break;case uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case hh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ze("WebGLState: Invalid blending: ",O);break}else switch(O){case Ta:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case uh:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hh:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",O);break}w=null,y=null,A=null,C=null,v.set(0,0,0),M=0,p=O,R=ce}return}H=H||fe,I=I||ee,X=X||L,(fe!==E||H!==b)&&(n.blendEquationSeparate(pt[fe],pt[H]),E=fe,b=H),(ee!==w||L!==y||I!==A||X!==C)&&(n.blendFuncSeparate(Me[ee],Me[L],Me[I],Me[X]),w=ee,y=L,A=I,C=X),(ne.equals(v)===!1||xe!==M)&&(n.blendColor(ne.r,ne.g,ne.b,xe),v.copy(ne),M=xe),p=O,R=!1}function ft(O,fe){O.side===tn?be(n.CULL_FACE):ie(n.CULL_FACE);let ee=O.side===Ut;fe&&(ee=!ee),je(ee),O.blending===Ta&&O.transparent===!1?tt(In):tt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),a.setMask(O.colorWrite);let L=O.stencilWrite;o.setTest(L),L&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),rn(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):be(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){F!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),F=O)}function xt(O){O!==yf?(ie(n.CULL_FACE),O!==q&&(O===ch?n.cullFace(n.BACK):O===Sf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):be(n.CULL_FACE),q=O}function It(O){O!==z&&($&&n.lineWidth(O),z=O)}function rn(O,fe,ee){O?(ie(n.POLYGON_OFFSET_FILL),(D!==fe||G!==ee)&&(D=fe,G=ee,r.getReversed()&&(fe=-fe),n.polygonOffset(fe,ee))):be(n.POLYGON_OFFSET_FILL)}function _t(O){O?ie(n.SCISSOR_TEST):be(n.SCISSOR_TEST)}function bt(O){O===void 0&&(O=n.TEXTURE0+K-1),se!==O&&(n.activeTexture(O),se=O)}function U(O,fe,ee){ee===void 0&&(se===null?ee=n.TEXTURE0+K-1:ee=se);let L=ae[ee];L===void 0&&(L={type:void 0,texture:void 0},ae[ee]=L),(L.type!==O||L.texture!==fe)&&(se!==ee&&(n.activeTexture(ee),se=ee),n.bindTexture(O,fe||Q[O]),L.type=O,L.texture=fe)}function Ft(){let O=ae[se];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function _(){try{n.texSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function B(){try{n.texSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function ue(){try{n.texStorage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function de(){try{n.texStorage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function Z(){try{n.texImage2D(...arguments)}catch(O){ze("WebGLState:",O)}}function te(){try{n.texImage3D(...arguments)}catch(O){ze("WebGLState:",O)}}function _e(O){return d[O]!==void 0?d[O]:n.getParameter(O)}function Ne(O,fe){d[O]!==fe&&(n.pixelStorei(O,fe),d[O]=fe)}function ge(O){rt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),rt.copy(O))}function ve(O){Ze.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ze.copy(O))}function De(O,fe){let ee=c.get(fe);ee===void 0&&(ee=new WeakMap,c.set(fe,ee));let L=ee.get(O);L===void 0&&(L=n.getUniformBlockIndex(fe,O.name),ee.set(O,L))}function Ce(O,fe){let L=c.get(fe).get(O);l.get(fe)!==L&&(n.uniformBlockBinding(fe,L,O.__bindingPointIndex),l.set(fe,L))}function Xe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},se=null,ae={},h={},f=new WeakMap,g=[],x=null,m=!1,p=null,E=null,w=null,y=null,b=null,A=null,C=null,v=new Fe(0,0,0),M=0,R=!1,F=null,q=null,z=null,D=null,G=null,rt.set(0,0,n.canvas.width,n.canvas.height),Ze.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:ie,disable:be,bindFramebuffer:He,drawBuffers:Ae,useProgram:$e,setBlending:tt,setMaterial:ft,setFlipSided:je,setCullFace:xt,setLineWidth:It,setPolygonOffset:rn,setScissorTest:_t,activeTexture:bt,bindTexture:U,unbindTexture:Ft,compressedTexImage2D:ot,compressedTexImage3D:T,texImage2D:Z,texImage3D:te,pixelStorei:Ne,getParameter:_e,updateUBOMapping:De,uniformBlockBinding:Ce,texStorage2D:ue,texStorage3D:de,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:J,scissor:ge,viewport:ve,reset:Xe}}function z2(n,e,t,i,s,a,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pe,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,_){return g?new OffscreenCanvas(T,_):fr("canvas")}function m(T,_,B){let W=1,J=ot(T);if((J.width>B||J.height>B)&&(W=B/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ue=Math.floor(W*J.width),de=Math.floor(W*J.height);h===void 0&&(h=x(ue,de));let Z=_?x(ue,de):h;return Z.width=ue,Z.height=de,Z.getContext("2d").drawImage(T,0,0,ue,de),qe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+de+")."),Z}else return"data"in T&&qe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps}function E(T){n.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(T,_,B,W,J,ue=!1){if(T!==null){if(n[T]!==void 0)return n[T];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de;W&&(de=e.get("EXT_texture_norm16"),de||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8),B===n.UNSIGNED_SHORT&&de&&(Z=de.R16_EXT),B===n.SHORT&&de&&(Z=de.R16_SNORM_EXT)),_===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),_===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8),B===n.UNSIGNED_SHORT&&de&&(Z=de.RG16_EXT),B===n.SHORT&&de&&(Z=de.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&(B===n.UNSIGNED_SHORT&&de&&(Z=de.RGB16_EXT),B===n.SHORT&&de&&(Z=de.RGB16_SNORM_EXT),B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),B===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),_===n.RGBA){let te=ue?dr:nt.getTransfer(J);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=te===ht?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT&&de&&(Z=de.RGBA16_EXT),B===n.SHORT&&de&&(Z=de.RGBA16_SNORM_EXT),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(T,_){let B;return T?_===null||_===Vn||_===Ra?B=n.DEPTH24_STENCIL8:_===Pn?B=n.DEPTH32F_STENCIL8:_===wa&&(B=n.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vn||_===Ra?B=n.DEPTH_COMPONENT24:_===Pn?B=n.DEPTH_COMPONENT32F:_===wa&&(B=n.DEPTH_COMPONENT16),B}function A(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Jt&&T.minFilter!==Qt?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){let _=T.target;_.removeEventListener("dispose",C),M(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&d.delete(_)}function v(T){let _=T.target;_.removeEventListener("dispose",v),F(_)}function M(T){let _=i.get(T);if(_.__webglInit===void 0)return;let B=T.source,W=f.get(B);if(W){let J=W[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(T),Object.keys(W).length===0&&f.delete(B)}i.remove(T)}function R(T){let _=i.get(T);n.deleteTexture(_.__webglTexture);let B=T.source,W=f.get(B);delete W[_.__cacheKey],r.memory.textures--}function F(T){let _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let J=0;J<_.__webglFramebuffer[W].length;J++)n.deleteFramebuffer(_.__webglFramebuffer[W][J]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=T.textures;for(let W=0,J=B.length;W<J;W++){let ue=i.get(B[W]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),r.memory.textures--),i.remove(B[W])}i.remove(T)}let q=0;function z(){q=0}function D(){return q}function G(T){q=T}function K(){let T=q;return T>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function $(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function re(T,_){let B=i.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let W=T.image;if(W===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{be(B,T,_);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+_)}function j(T,_){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){be(B,T,_);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+_)}function se(T,_){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){be(B,T,_);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+_)}function ae(T,_){let B=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&B.__version!==T.version){He(B,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+_)}let Ue={[Cs]:n.REPEAT,[ti]:n.CLAMP_TO_EDGE,[gl]:n.MIRRORED_REPEAT},Pe={[Jt]:n.NEAREST,[kf]:n.NEAREST_MIPMAP_NEAREST,[Jr]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Yl]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},rt={[Yf]:n.NEVER,[Kf]:n.ALWAYS,[$f]:n.LESS,[Pc]:n.LEQUAL,[Jf]:n.EQUAL,[Nc]:n.GEQUAL,[Zf]:n.GREATER,[jf]:n.NOTEQUAL};function Ze(T,_){if(_.type===Pn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Qt||_.magFilter===Yl||_.magFilter===Jr||_.magFilter===os||_.minFilter===Qt||_.minFilter===Yl||_.minFilter===Jr||_.minFilter===os)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Ue[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Ue[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Ue[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Pe[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Pe[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,rt[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Jt||_.minFilter!==Jr&&_.minFilter!==os||_.type===Pn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function et(T,_){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));let W=_.source,J=f.get(W);J===void 0&&(J={},f.set(W,J));let ue=$(_);if(ue!==T.__cacheKey){J[ue]===void 0&&(J[ue]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,B=!0),J[ue].usedTimes++;let de=J[T.__cacheKey];de!==void 0&&(J[T.__cacheKey].usedTimes--,de.usedTimes===0&&R(_)),T.__cacheKey=ue,T.__webglTexture=J[ue].texture}return B}function Q(T,_,B){return Math.floor(Math.floor(T/B)/_)}function ie(T,_,B,W){let ue=T.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,B,W,_.data);else{ue.sort((Ne,ge)=>Ne.start-ge.start);let de=0;for(let Ne=1;Ne<ue.length;Ne++){let ge=ue[de],ve=ue[Ne],De=ge.start+ge.count,Ce=Q(ve.start,_.width,4),Xe=Q(ge.start,_.width,4);ve.start<=De+1&&Ce===Xe&&Q(ve.start+ve.count-1,_.width,4)===Ce?ge.count=Math.max(ge.count,ve.start+ve.count-ge.start):(++de,ue[de]=ve)}ue.length=de+1;let Z=t.getParameter(n.UNPACK_ROW_LENGTH),te=t.getParameter(n.UNPACK_SKIP_PIXELS),_e=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ne=0,ge=ue.length;Ne<ge;Ne++){let ve=ue[Ne],De=Math.floor(ve.start/4),Ce=Math.ceil(ve.count/4),Xe=De%_.width,O=Math.floor(De/_.width),fe=Ce,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),t.pixelStorei(n.UNPACK_SKIP_ROWS,O),t.texSubImage2D(n.TEXTURE_2D,0,Xe,O,fe,ee,B,W,_.data)}T.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,Z),t.pixelStorei(n.UNPACK_SKIP_PIXELS,te),t.pixelStorei(n.UNPACK_SKIP_ROWS,_e)}}function be(T,_,B){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);let J=et(T,_),ue=_.source;t.bindTexture(W,T.__webglTexture,n.TEXTURE0+B);let de=i.get(ue);if(ue.version!==de.__version||J===!0){if(t.activeTexture(n.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ee=nt.getPrimaries(nt.workingColorSpace),L=_.colorSpace===Pi?null:nt.getPrimaries(_.colorSpace),H=_.colorSpace===Pi||ee===L?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,H)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let te=m(_.image,!1,s.maxTextureSize);te=Ft(_,te);let _e=a.convert(_.format,_.colorSpace),Ne=a.convert(_.type),ge=y(_.internalFormat,_e,Ne,_.normalized,_.colorSpace,_.isVideoTexture);Ze(W,_);let ve,De=_.mipmaps,Ce=_.isVideoTexture!==!0,Xe=de.__version===void 0||J===!0,O=ue.dataReady,fe=A(_,te);if(_.isDepthTexture)ge=b(_.format===ls,_.type),Xe&&(Ce?t.texStorage2D(n.TEXTURE_2D,1,ge,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,ge,te.width,te.height,0,_e,Ne,null));else if(_.isDataTexture)if(De.length>0){Ce&&Xe&&t.texStorage2D(n.TEXTURE_2D,fe,ge,De[0].width,De[0].height);for(let ee=0,L=De.length;ee<L;ee++)ve=De[ee],Ce?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ve.width,ve.height,_e,Ne,ve.data):t.texImage2D(n.TEXTURE_2D,ee,ge,ve.width,ve.height,0,_e,Ne,ve.data);_.generateMipmaps=!1}else Ce?(Xe&&t.texStorage2D(n.TEXTURE_2D,fe,ge,te.width,te.height),O&&ie(_,te,_e,Ne)):t.texImage2D(n.TEXTURE_2D,0,ge,te.width,te.height,0,_e,Ne,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ce&&Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ge,De[0].width,De[0].height,te.depth);for(let ee=0,L=De.length;ee<L;ee++)if(ve=De[ee],_.format!==Nn)if(_e!==null)if(Ce){if(O)if(_.layerUpdates.size>0){let H=Rh(ve.width,ve.height,_.format,_.type);for(let I of _.layerUpdates){let X=ve.data.subarray(I*H/ve.data.BYTES_PER_ELEMENT,(I+1)*H/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,I,ve.width,ve.height,1,_e,X)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,te.depth,_e,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,ge,ve.width,ve.height,te.depth,0,ve.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ce?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ve.width,ve.height,te.depth,_e,Ne,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,ge,ve.width,ve.height,te.depth,0,_e,Ne,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ce&&Xe&&t.texStorage2D(n.TEXTURE_2D,fe,ge,De[0].width,De[0].height);for(let ee=0,L=De.length;ee<L;ee++)ve=De[ee],_.format!==Nn?_e!==null?Ce?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,ge,ve.width,ve.height,0,ve.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ve.width,ve.height,_e,Ne,ve.data):t.texImage2D(n.TEXTURE_2D,ee,ge,ve.width,ve.height,0,_e,Ne,ve.data)}else if(_.isDataArrayTexture)if(Ce){if(Xe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,ge,te.width,te.height,te.depth),O)if(_.layerUpdates.size>0){let ee=Rh(te.width,te.height,_.format,_.type);for(let L of _.layerUpdates){let H=te.data.subarray(L*ee/te.data.BYTES_PER_ELEMENT,(L+1)*ee/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,L,te.width,te.height,1,_e,Ne,H)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,_e,Ne,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,te.width,te.height,te.depth,0,_e,Ne,te.data);else if(_.isData3DTexture)Ce?(Xe&&t.texStorage3D(n.TEXTURE_3D,fe,ge,te.width,te.height,te.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,_e,Ne,te.data)):t.texImage3D(n.TEXTURE_3D,0,ge,te.width,te.height,te.depth,0,_e,Ne,te.data);else if(_.isFramebufferTexture){if(Xe)if(Ce)t.texStorage2D(n.TEXTURE_2D,fe,ge,te.width,te.height);else{let ee=te.width,L=te.height;for(let H=0;H<fe;H++)t.texImage2D(n.TEXTURE_2D,H,ge,ee,L,0,_e,Ne,null),ee>>=1,L>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),te.parentNode!==ee){ee.appendChild(te),d.add(_),ee.onpaint=L=>{let H=L.changedElements;for(let I of d)H.includes(I.image)&&(I.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,te);else{let H=n.RGBA,I=n.RGBA,X=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,H,I,X,te)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(De.length>0){if(Ce&&Xe){let ee=ot(De[0]);t.texStorage2D(n.TEXTURE_2D,fe,ge,ee.width,ee.height)}for(let ee=0,L=De.length;ee<L;ee++)ve=De[ee],Ce?O&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,_e,Ne,ve):t.texImage2D(n.TEXTURE_2D,ee,ge,_e,Ne,ve);_.generateMipmaps=!1}else if(Ce){if(Xe){let ee=ot(te);t.texStorage2D(n.TEXTURE_2D,fe,ge,ee.width,ee.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,_e,Ne,te)}else t.texImage2D(n.TEXTURE_2D,0,ge,_e,Ne,te);p(_)&&E(W),de.__version=ue.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function He(T,_,B){if(_.image.length!==6)return;let W=et(T,_),J=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+B);let ue=i.get(J);if(J.version!==ue.__version||W===!0){t.activeTexture(n.TEXTURE0+B);let de=nt.getPrimaries(nt.workingColorSpace),Z=_.colorSpace===Pi?null:nt.getPrimaries(_.colorSpace),te=_.colorSpace===Pi||de===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let _e=_.isCompressedTexture||_.image[0].isCompressedTexture,Ne=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let I=0;I<6;I++)!_e&&!Ne?ge[I]=m(_.image[I],!0,s.maxCubemapSize):ge[I]=Ne?_.image[I].image:_.image[I],ge[I]=Ft(_,ge[I]);let ve=ge[0],De=a.convert(_.format,_.colorSpace),Ce=a.convert(_.type),Xe=y(_.internalFormat,De,Ce,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,fe=ue.__version===void 0||W===!0,ee=J.dataReady,L=A(_,ve);Ze(n.TEXTURE_CUBE_MAP,_);let H;if(_e){O&&fe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,L,Xe,ve.width,ve.height);for(let I=0;I<6;I++){H=ge[I].mipmaps;for(let X=0;X<H.length;X++){let ne=H[X];_.format!==Nn?De!==null?O?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X,0,0,ne.width,ne.height,De,ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X,Xe,ne.width,ne.height,0,ne.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X,0,0,ne.width,ne.height,De,Ce,ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X,Xe,ne.width,ne.height,0,De,Ce,ne.data)}}}else{if(H=_.mipmaps,O&&fe){H.length>0&&L++;let I=ot(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,L,Xe,I.width,I.height)}for(let I=0;I<6;I++)if(Ne){O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,ge[I].width,ge[I].height,De,Ce,ge[I].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Xe,ge[I].width,ge[I].height,0,De,Ce,ge[I].data);for(let X=0;X<H.length;X++){let xe=H[X].image[I].image;O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X+1,0,0,xe.width,xe.height,De,Ce,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X+1,Xe,xe.width,xe.height,0,De,Ce,xe.data)}}else{O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,0,0,De,Ce,ge[I]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,0,Xe,De,Ce,ge[I]);for(let X=0;X<H.length;X++){let ne=H[X];O?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X+1,0,0,De,Ce,ne.image[I]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+I,X+1,Xe,De,Ce,ne.image[I])}}}p(_)&&E(n.TEXTURE_CUBE_MAP),ue.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Ae(T,_,B,W,J,ue){let de=a.convert(B.format,B.colorSpace),Z=a.convert(B.type),te=y(B.internalFormat,de,Z,B.normalized,B.colorSpace),_e=i.get(_),Ne=i.get(B);if(Ne.__renderTarget=_,!_e.__hasExternalTextures){let ge=Math.max(1,_.width>>ue),ve=Math.max(1,_.height>>ue);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ue,te,ge,ve,_.depth,0,de,Z,null):t.texImage2D(J,ue,te,ge,ve,0,de,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),bt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,J,Ne.__webglTexture,0,_t(_)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,J,Ne.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function $e(T,_,B){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){let W=_.depthTexture,J=W&&W.isDepthTexture?W.type:null,ue=b(_.stencilBuffer,J),de=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;bt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(_),ue,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(_),ue,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ue,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,T)}else{let W=_.textures;for(let J=0;J<W.length;J++){let ue=W[J],de=a.convert(ue.format,ue.colorSpace),Z=a.convert(ue.type),te=y(ue.internalFormat,de,Z,ue.normalized,ue.colorSpace);bt(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(_),te,_.width,_.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(_),te,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,te,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pt(T,_,B){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,_.depthTexture);let _e=a.convert(_.depthTexture.format),Ne=a.convert(_.depthTexture.type),ge;_.depthTexture.format===ni?ge=n.DEPTH_COMPONENT24:_.depthTexture.format===ls&&(ge=n.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ge,_.width,_.height,0,_e,Ne,null)}}else re(_.depthTexture,0);let ue=J.__webglTexture,de=_t(_),Z=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+B:n.TEXTURE_2D,te=_.depthTexture.format===ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===ni)bt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,ue,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,ue,0);else if(_.depthTexture.format===ls)bt(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,Z,ue,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,te,Z,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(T){let _=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let W=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=W}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)pt(_.__webglFramebuffer[W],T,W);else{let W=T.texture.mipmaps;W&&W.length>0?pt(_.__webglFramebuffer[0],T,0):pt(_.__webglFramebuffer,T,0)}else if(B){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),$e(_.__webglDepthbuffer[W],T,!1);else{let J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}else{let W=T.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),$e(_.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function tt(T,_,B){let W=i.get(T);_!==void 0&&Ae(W.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Me(T)}function ft(T){let _=T.texture,B=i.get(T),W=i.get(_);T.addEventListener("dispose",v);let J=T.textures,ue=T.isWebGLCubeRenderTarget===!0,de=J.length>1;if(de||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,r.memory.textures++),ue){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let te=0;te<_.mipmaps.length;te++)B.__webglFramebuffer[Z][te]=n.createFramebuffer()}else B.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)B.__webglFramebuffer[Z]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(de)for(let Z=0,te=J.length;Z<te;Z++){let _e=i.get(J[Z]);_e.__webglTexture===void 0&&(_e.__webglTexture=n.createTexture(),r.memory.textures++)}if(T.samples>0&&bt(T)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<J.length;Z++){let te=J[Z];B.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let _e=a.convert(te.format,te.colorSpace),Ne=a.convert(te.type),ge=y(te.internalFormat,_e,Ne,te.normalized,te.colorSpace,T.isXRRenderTarget===!0),ve=_t(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ge,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),$e(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Ae(B.__webglFramebuffer[Z][te],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,te);else Ae(B.__webglFramebuffer[Z],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(_)&&E(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let Z=0,te=J.length;Z<te;Z++){let _e=J[Z],Ne=i.get(_e),ge=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ge=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,Ne.__webglTexture),Ze(ge,_e),Ae(B.__webglFramebuffer,T,_e,n.COLOR_ATTACHMENT0+Z,ge,0),p(_e)&&E(ge)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,W.__webglTexture),Ze(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let te=0;te<_.mipmaps.length;te++)Ae(B.__webglFramebuffer[te],T,_,n.COLOR_ATTACHMENT0,Z,te);else Ae(B.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,Z,0);p(_)&&E(Z),t.unbindTexture()}T.depthBuffer&&Me(T)}function je(T){let _=T.textures;for(let B=0,W=_.length;B<W;B++){let J=_[B];if(p(J)){let ue=w(T),de=i.get(J).__webglTexture;t.bindTexture(ue,de),E(ue),t.unbindTexture()}}}let xt=[],It=[];function rn(T){if(T.samples>0){if(bt(T)===!1){let _=T.textures,B=T.width,W=T.height,J=n.COLOR_BUFFER_BIT,ue=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(T),Z=_.length>1;if(Z)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let te=T.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);let Ne=i.get(_[_e]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,B,W,0,0,B,W,J,n.NEAREST),l===!0&&(xt.length=0,It.length=0,xt.push(n.COLOR_ATTACHMENT0+_e),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(xt.push(ue),It.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,It)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,de.__webglColorRenderbuffer[_e]);let Ne=i.get(_[_e]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function _t(T){return Math.min(s.maxSamples,T.samples)}function bt(T){let _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(T){let _=r.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Ft(T,_){let B=T.colorSpace,W=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==hr&&B!==Pi&&(nt.getTransfer(B)===ht?(W!==Nn||J!==vn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",B)),_}function ot(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=z,this.getTextureUnits=D,this.setTextureUnits=G,this.setTexture2D=re,this.setTexture2DArray=j,this.setTexture3D=se,this.setTextureCube=ae,this.rebindTextures=tt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function V2(n,e){function t(i,s=Pi){let a,r=nt.getTransfer(s);if(i===vn)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_h)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===vh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return n.BYTE;if(i===xh)return n.SHORT;if(i===wa)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===Vn)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===nn)return n.HALF_FLOAT;if(i===yh)return n.ALPHA;if(i===Sh)return n.RGB;if(i===Nn)return n.RGBA;if(i===ni)return n.DEPTH_COMPONENT;if(i===ls)return n.DEPTH_STENCIL;if(i===jl)return n.RED;if(i===Kl)return n.RED_INTEGER;if(i===cs)return n.RG;if(i===Ql)return n.RG_INTEGER;if(i===ec)return n.RGBA_INTEGER;if(i===Zr||i===jr||i===Kr||i===Qr)if(r===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Zr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Zr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Kr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===sc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===tc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===rc||i===oc||i===lc||i===cc||i===eo||i===uc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===ac||i===rc)return r===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===oc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===lc)return a.COMPRESSED_R11_EAC;if(i===cc)return a.COMPRESSED_SIGNED_R11_EAC;if(i===eo)return a.COMPRESSED_RG11_EAC;if(i===uc)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===xc||i===_c||i===vc||i===yc||i===Sc||i===Mc||i===Ec||i===bc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===hc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===pc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===gc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ac||i===Tc||i===wc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ac)return r===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rc||i===Cc||i===to||i===Lc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Rc)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Cc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===to)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Lc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ra?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var k2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G2=`
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

}`,Vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Er(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ot({vertexShader:k2,fragmentShader:G2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kh=class extends ii{constructor(e,t){super();let i=this,s=null,a=1,r=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Vh,p={},E=t.getContextAttributes(),w=null,y=null,b=[],A=[],C=new pe,v=null,M=null,R=new Kt;R.viewport=new Ct;let F=new Kt;F.viewport=new Ct;let q=[R,F],z=new kl,D=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=b[Q];return ie===void 0&&(ie=new ma,b[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=b[Q];return ie===void 0&&(ie=new ma,b[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=b[Q];return ie===void 0&&(ie=new ma,b[Q]=ie),ie.getHandSpace()};function K(Q){let ie=A.indexOf(Q.inputSource);if(ie===-1)return;let be=b[ie];be!==void 0&&(be.update(Q.inputSource,Q.frame,c||r),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function $(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let Q=0;Q<b.length;Q++){let ie=A[Q];ie!==null&&(A[Q]=null,b[Q].disconnect(ie))}D=null,G=null,m.reset();for(let Q in p)delete p[Q];if(e.setRenderTarget(w),f=null,h=null,d=null,s=null,y=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(C.width,C.height,!1),M!==null){let Q=M.camera;Q.fov=M.fov,Q.zoom=M.zoom,Q.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){a=Q,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),E.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,He=null,Ae=null;E.depth&&(Ae=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=E.stencil?ls:ni,He=E.stencil?Ra:Vn);let $e={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:a};d=this.getBinding(),h=d.createProjectionLayer($e),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Ht(h.textureWidth,h.textureHeight,{format:Nn,type:vn,depthTexture:new es(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let be={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(s,t,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Ht(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),et.setContext(s),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(Q){for(let ie=0;ie<Q.removed.length;ie++){let be=Q.removed[ie],He=A.indexOf(be);He>=0&&(A[He]=null,b[He].disconnect(be))}for(let ie=0;ie<Q.added.length;ie++){let be=Q.added[ie],He=A.indexOf(be);if(He===-1){for(let $e=0;$e<b.length;$e++)if($e>=A.length){A.push(be),He=$e;break}else if(A[$e]===null){A[$e]=be,He=$e;break}if(He===-1)break}let Ae=b[He];Ae&&Ae.connect(be)}}let j=new P,se=new P;function ae(Q,ie,be){j.setFromMatrixPosition(ie.matrixWorld),se.setFromMatrixPosition(be.matrixWorld);let He=j.distanceTo(se),Ae=ie.projectionMatrix.elements,$e=be.projectionMatrix.elements,pt=Ae[14]/(Ae[10]-1),Me=Ae[14]/(Ae[10]+1),tt=(Ae[9]+1)/Ae[5],ft=(Ae[9]-1)/Ae[5],je=(Ae[8]-1)/Ae[0],xt=($e[8]+1)/$e[0],It=pt*je,rn=pt*xt,_t=He/(-je+xt),bt=_t*-je;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(bt),Q.translateZ(_t),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ae[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let U=pt+_t,Ft=Me+_t,ot=It-bt,T=rn+(He-bt),_=tt*Me/Ft*U,B=ft*Me/Ft*U;Q.projectionMatrix.makePerspective(ot,T,_,B,U,Ft),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ue(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ie=Q.near,be=Q.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(be=m.depthFar)),z.near=F.near=R.near=ie,z.far=F.far=R.far=be,(D!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),D=z.near,G=z.far),z.layers.mask=Q.layers.mask|6,R.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;let He=Q.parent,Ae=z.cameras;Ue(z,He);for(let $e=0;$e<Ae.length;$e++)Ue(Ae[$e],He);Ae.length===2?ae(z,R,F):z.projectionMatrix.copy(R.projectionMatrix),M===null&&Q.isPerspectiveCamera&&(M={camera:Q,fov:Q.fov,zoom:Q.zoom}),Pe(Q,z,He)};function Pe(Q,ie,be){be===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_l*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Q){l=Q,h!==null&&(h.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(Q){return p[Q]};let rt=null;function Ze(Q,ie){if(u=ie.getViewerPose(c||r),g=ie,u!==null){let be=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let He=!1;be.length!==z.cameras.length&&(z.cameras.length=0,He=!0);for(let Me=0;Me<be.length;Me++){let tt=be[Me],ft=null;if(f!==null)ft=f.getViewport(tt);else{let xt=d.getViewSubImage(h,tt);ft=xt.viewport,Me===0&&(e.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(y))}let je=q[Me];je===void 0&&(je=new Kt,je.layers.enable(Me),je.viewport=new Ct,q[Me]=je),je.matrix.fromArray(tt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(tt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ft.x,ft.y,ft.width,ft.height),Me===0&&(z.matrix.copy(je.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),He===!0&&z.cameras.push(je)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let Me=d.getDepthInformation(be[0]);Me&&Me.isValid&&Me.texture&&m.init(Me,s.renderState)}if(Ae&&Ae.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let Me=0;Me<be.length;Me++){let tt=be[Me].camera;if(tt){let ft=p[tt];ft||(ft=new Er,p[tt]=ft);let je=d.getCameraImage(tt);ft.sourceTexture=je}}}}for(let be=0;be<b.length;be++){let He=A[be],Ae=b[be];He!==null&&Ae!==void 0&&Ae.update(He,ie,c||r)}rt&&rt(Q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let et=new Pp;et.setAnimationLoop(Ze),this.setAnimationLoop=function(Q){rt=Q},this.dispose=function(){}}},W2=new dt,qp=new ke;qp.set(-1,0,0,0,1,0,0,0,1);function X2(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ah(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(m,p):p.isMeshLambertMaterial?(a(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(m,p),d(m,p)):p.isMeshPhongMaterial?(a(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(a(m,p),g(m,p)):p.isMeshDepthMaterial?a(m,p):p.isMeshDistanceMaterial?(a(m,p),x(m,p)):p.isMeshNormalMaterial?a(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=e.get(p),w=E.envMap,y=E.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(W2.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(qp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Y2(n,e,t,i){let s={},a={},r=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let A=b.program;i.uniformBlockBinding(y,A)}function c(y,b){let A=s[y.id];A===void 0&&(m(y),A=u(y),s[y.id]=A,y.addEventListener("dispose",E));let C=b.program;i.updateUBOMapping(y,C);let v=e.render.frame;a[y.id]!==v&&(h(y),a[y.id]=v)}function u(y){let b=d();y.__bindingPointIndex=b;let A=n.createBuffer(),C=y.__size,v=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,C,v),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,A),A}function d(){for(let y=0;y<o;y++)if(r.indexOf(y)===-1)return r.push(y),y;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let b=s[y.id],A=y.uniforms,C=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let v=0,M=A.length;v<M;v++){let R=A[v];if(Array.isArray(R))for(let F=0,q=R.length;F<q;F++)f(R[F],v,F,C);else f(R,v,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(y,b,A,C){if(x(y,b,A,C)===!0){let v=y.__offset,M=y.value;if(Array.isArray(M)){let R=0;for(let F=0;F<M.length;F++){let q=M[F],z=p(q);g(q,y.__data,R),typeof q!="number"&&typeof q!="boolean"&&!q.isMatrix3&&!ArrayBuffer.isView(q)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,v,y.__data)}}function g(y,b,A){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,A)}function x(y,b,A,C){let v=y.value,M=b+"_"+A;if(C[M]===void 0)return typeof v=="number"||typeof v=="boolean"?C[M]=v:ArrayBuffer.isView(v)?C[M]=v.slice():C[M]=v.clone(),!0;{let R=C[M];if(typeof v=="number"||typeof v=="boolean"){if(R!==v)return C[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(R.equals(v)===!1)return R.copy(v),!0}}return!1}function m(y){let b=y.uniforms,A=0,C=16;for(let M=0,R=b.length;M<R;M++){let F=Array.isArray(b[M])?b[M]:[b[M]];for(let q=0,z=F.length;q<z;q++){let D=F[q],G=Array.isArray(D.value)?D.value:[D.value];for(let K=0,$=G.length;K<$;K++){let re=G[K],j=p(re),se=A%C,ae=se%j.boundary,Ue=se+ae;A+=ae,Ue!==0&&C-Ue<j.storage&&(A+=C-Ue),D.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=A,A+=j.storage}}}let v=A%C;return v>0&&(A+=C-v),y.__size=A,y.__cache={},this}function p(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",y),b}function E(y){let b=y.target;b.removeEventListener("dispose",E);let A=r.indexOf(b.__bindingPointIndex);r.splice(A,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete a[b.id]}function w(){for(let y in s)n.deleteBuffer(s[y]);r=[],s={},a={}}return{bind:l,update:c,dispose:w}}var $2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ci=null;function J2(){return ci===null&&(ci=new vr($2,16,16,cs,nn),ci.name="DFG_LUT",ci.minFilter=Qt,ci.magFilter=Qt,ci.wrapS=ti,ci.wrapT=ti,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}var qc=class{constructor(e={}){let{canvas:t=ep(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=vn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=r;let x=f,m=new Set([ec,Ql,Kl]),p=new Set([vn,Vn,wa,Ra,Jl,Zl]),E=new Uint32Array(4),w=new Int32Array(4),y=new P,b=null,A=null,C=[],v=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,F=!1,q=null,z=null,D=null,G=null;this._outputColorSpace=Nt;let K=0,$=0,re=null,j=-1,se=null,ae=new Ct,Ue=new Ct,Pe=null,rt=new Fe(0),Ze=0,et=t.width,Q=t.height,ie=1,be=null,He=null,Ae=new Ct(0,0,et,Q),$e=new Ct(0,0,et,Q),pt=!1,Me=new _a,tt=!1,ft=!1,je=new dt,xt=new P,It=new Ct,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_t=!1;function bt(){return re===null?ie:1}let U=i;function Ft(S,N){return t.getContext(S,N)}let ot,T,_,B,W,J,ue,de,Z,te,_e,Ne,ge,ve,De,Ce,Xe,O,fe,ee,L,H,I;try{let S={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",Je,!1),U===null){let N="webgl2";if(U=Ft(N,S),U===null)throw Ft(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}X()}catch(S){throw t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),ze("WebGLRenderer: "+S.message),S}function X(){ot=new n_(U),ot.init(),L=new V2(U,ot),T=new Xx(U,ot,e,L),_=new H2(U,ot),T.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),z=U.createFramebuffer(),D=U.createFramebuffer(),G=U.createFramebuffer(),B=new a_(U),W=new T2,J=new z2(U,ot,_,W,T,L,B),ue=new t_(R),de=new o1(U),H=new Gx(U,de),Z=new i_(U,de,B,H),te=new o_(U,Z,de,H,B),O=new r_(U,T,J),De=new Yx(W),_e=new A2(R,ue,ot,T,H,De),Ne=new X2(R,W),ge=new R2,ve=new D2(ot),Xe=new kx(R,ue,_,te,g,l),Ce=new B2(R,te,T),I=new Y2(U,B,T,_),fe=new Wx(U,ot,B),ee=new s_(U,ot,B),B.programs=_e.programs,R.capabilities=T,R.extensions=ot,R.properties=W,R.renderLists=ge,R.shadowMap=Ce,R.state=_,R.info=B}x!==vn&&(M=new c_(x,t.width,t.height,o,s,a));let ne=new kh(R,U);this.xr=ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let S=ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize(et,Q,!1))},this.getSize=function(S){return S.set(et,Q)},this.setSize=function(S,N,Y=!0){if(ne.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}et=S,Q=N,t.width=Math.floor(S*ie),t.height=Math.floor(N*ie),Y===!0&&(t.style.width=S+"px",t.style.height=N+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(et*ie,Q*ie).floor()},this.setDrawingBufferSize=function(S,N,Y){et=S,Q=N,ie=Y,t.width=Math.floor(S*Y),t.height=Math.floor(N*Y),this.setViewport(0,0,S,N)},this.setEffects=function(S){if(x===vn){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let N=0;N<S.length;N++)if(S[N].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ae)},this.getViewport=function(S){return S.copy(Ae)},this.setViewport=function(S,N,Y,V){S.isVector4?Ae.set(S.x,S.y,S.z,S.w):Ae.set(S,N,Y,V),_.viewport(ae.copy(Ae).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy($e)},this.setScissor=function(S,N,Y,V){S.isVector4?$e.set(S.x,S.y,S.z,S.w):$e.set(S,N,Y,V),_.scissor(Ue.copy($e).multiplyScalar(ie).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(S){_.setScissorTest(pt=S)},this.setOpaqueSort=function(S){be=S},this.setTransparentSort=function(S){He=S},this.getClearColor=function(S){return S.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(S=!0,N=!0,Y=!0){let V=0;if(S){let k=!1;if(re!==null){let Ee=re.texture.format;k=m.has(Ee)}if(k){let Ee=re.texture.type,we=p.has(Ee),Se=Xe.getClearColor(),Le=Xe.getClearAlpha(),Oe=Se.r,Ke=Se.g,st=Se.b;we?(E[0]=Oe,E[1]=Ke,E[2]=st,E[3]=Le,U.clearBufferuiv(U.COLOR,0,E)):(w[0]=Oe,w[1]=Ke,w[2]=st,w[3]=Le,U.clearBufferiv(U.COLOR,0,w))}else V|=U.COLOR_BUFFER_BIT}N&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),q=S},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Xe.dispose(),ge.dispose(),ve.dispose(),W.dispose(),ue.dispose(),te.dispose(),H.dispose(),I.dispose(),_e.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Rd),ne.removeEventListener("sessionend",Cd),Es.stop()};function xe(S){S.preventDefault(),Eh("WebGLRenderer: Context Lost."),F=!0}function ce(){Eh("WebGLRenderer: Context Restored."),F=!1;let S=B.autoReset,N=Ce.enabled,Y=Ce.autoUpdate,V=Ce.needsUpdate,k=Ce.type;X(),B.autoReset=S,Ce.enabled=N,Ce.autoUpdate=Y,Ce.needsUpdate=V,Ce.type=k}function Je(S){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Rt(S){let N=S.target;N.removeEventListener("dispose",Rt),vu(N)}function vu(S){Do(S),W.remove(S)}function Do(S){let N=W.get(S).programs;N!==void 0&&(N.forEach(function(Y){_e.releaseProgram(Y)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,Y,V,k,Ee){N===null&&(N=rn);let we=k.isMesh&&k.matrixWorld.determinantAffine()<0,Se=Zm(S,N,Y,V,k);_.setMaterial(V,we);let Le=Y.index,Oe=1;if(V.wireframe===!0){if(Le=Z.getWireframeAttribute(Y),Le===void 0)return;Oe=2}let Ke=Y.drawRange,st=Y.attributes.position,Ie=Ke.start*Oe,mt=(Ke.start+Ke.count)*Oe;Ee!==null&&(Ie=Math.max(Ie,Ee.start*Oe),mt=Math.min(mt,(Ee.start+Ee.count)*Oe)),Le!==null?(Ie=Math.max(Ie,0),mt=Math.min(mt,Le.count)):st!=null&&(Ie=Math.max(Ie,0),mt=Math.min(mt,st.count));let qt=mt-Ie;if(qt<0||qt===1/0)return;H.setup(k,V,Se,Y,Le);let At,St=fe;if(Le!==null&&(At=de.get(Le),St=ee,St.setIndex(At)),k.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*bt()),St.setMode(U.LINES)):St.setMode(U.TRIANGLES);else if(k.isLine){let on=V.linewidth;on===void 0&&(on=1),_.setLineWidth(on*bt()),k.isLineSegments?St.setMode(U.LINES):k.isLineLoop?St.setMode(U.LINE_LOOP):St.setMode(U.LINE_STRIP)}else k.isPoints?St.setMode(U.POINTS):k.isSprite&&St.setMode(U.TRIANGLES);if(k.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))St.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let on=k._multiDrawStarts,Te=k._multiDrawCounts,mn=k._multiDrawCount,lt=Le?de.get(Le).bytesPerElement:1,Cn=W.get(V).currentProgram.getUniforms();for(let Qn=0;Qn<mn;Qn++)Cn.setValue(U,"_gl_DrawID",Qn),St.render(on[Qn]/lt,Te[Qn])}else if(k.isInstancedMesh)St.renderInstances(Ie,qt,k.count);else if(Y.isInstancedBufferGeometry){let on=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Te=Math.min(Y.instanceCount,on);St.renderInstances(Ie,qt,Te)}else St.render(Ie,qt)};function wd(S,N,Y,V){q!==null&&S.isNodeMaterial&&q.setObject(V,S),tt===!0&&De.setState(S,Y,!1),S.transparent===!0&&S.side===tn&&S.forceSinglePass===!1?(S.side=Ut,S.needsUpdate=!0,Uo(S,N,V),S.side=as,S.needsUpdate=!0,Uo(S,N,V),S.side=tn):Uo(S,N,V)}this.compile=function(S,N,Y=null){Y===null&&(Y=S),q!==null&&q.renderStart(S,N,Y),A=ve.get(Y),A.init(N),v.push(A),Y.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),S!==Y&&S.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(A.pushLight(k),k.castShadow&&A.pushShadow(k))}),A.setupLights(),q!==null&&q.updateLights(A.state.lightsArray),ft=this.localClippingEnabled,tt=De.init(this.clippingPlanes,ft),tt===!0&&De.setGlobalState(this.clippingPlanes,N),q!==null&&Ce.render(A.state.shadowsArray,Y,N);let V=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let Ee=k.material;if(Ee)if(Array.isArray(Ee))for(let we=0;we<Ee.length;we++){let Se=Ee[we];wd(Se,Y,N,k),V.add(Se)}else wd(Ee,Y,N,k),V.add(Ee)}),A=v.pop(),q!==null&&q.renderEnd(),V},this.compileAsync=function(S,N,Y=null){let V=this.compile(S,N,Y);return new Promise(k=>{function Ee(){if(V.forEach(function(we){let Le=W.get(we).currentProgram;(Le===void 0||Le.isReady())&&V.delete(we)}),V.size===0){k(S);return}setTimeout(Ee,10)}ot.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let yu=null;function $m(S){yu&&yu(S)}function Rd(){Es.stop()}function Cd(){Es.start()}let Es=new Pp;Es.setAnimationLoop($m),typeof self<"u"&&Es.setContext(self),this.setAnimationLoop=function(S){yu=S,ne.setAnimationLoop(S),S===null?Es.stop():Es.start()},ne.addEventListener("sessionstart",Rd),ne.addEventListener("sessionend",Cd),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;q!==null&&q.renderStart(S,N);let Y=ne.enabled===!0&&ne.isPresenting===!0,V=M!==null&&(re===null||Y)&&M.begin(R,re);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(N),N=ne.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,N,re),A=ve.get(S,v.length),A.init(N),A.state.textureUnits=J.getTextureUnits(),v.push(A),je.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Me.setFromProjectionMatrix(je,qn,N.reversedDepth),ft=this.localClippingEnabled,tt=De.init(this.clippingPlanes,ft),b=ge.get(S,C.length),b.init(),C.push(b),ne.enabled===!0&&ne.isPresenting===!0){let we=R.xr.getDepthSensingMesh();we!==null&&Su(we,N,-1/0,R.sortObjects)}Su(S,N,0,R.sortObjects),b.finish(),q!==null&&q.updateLights(A.state.lightsArray),R.sortObjects===!0&&b.sort(be,He),_t=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,_t&&Xe.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),tt===!0&&De.beginShadows();let k=A.state.shadowsArray;if(Ce.render(k,S,N),tt===!0&&De.endShadows(),(V&&M.hasRenderPass())===!1){let we=b.opaque,Se=b.transmissive;if(A.setupLights(),N.isArrayCamera){let Le=N.cameras;if(Se.length>0)for(let Oe=0,Ke=Le.length;Oe<Ke;Oe++){let st=Le[Oe];Id(we,Se,S,st)}_t&&Xe.render(S);for(let Oe=0,Ke=Le.length;Oe<Ke;Oe++){let st=Le[Oe];Ld(b,S,st,st.viewport)}}else Se.length>0&&Id(we,Se,S,N),_t&&Xe.render(S),Ld(b,S,N)}re!==null&&$===0&&(J.updateMultisampleRenderTarget(re),J.updateRenderTargetMipmap(re)),V&&M.end(R),S.isScene===!0&&S.onAfterRender(R,S,N),H.resetDefaultState(),j=-1,se=null,v.pop(),v.length>0?(A=v[v.length-1],J.setTextureUnits(A.state.textureUnits),tt===!0&&De.setGlobalState(R.clippingPlanes,A.state.camera)):A=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,q!==null&&q.renderEnd()};function Su(S,N,Y,V){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLightProbeGrid)A.pushLightProbeGrid(S);else if(S.isLight)A.pushLight(S),S.castShadow&&A.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Me)){V&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(je);let we=te.update(S),Se=S.material;Se.visible&&b.push(S,we,Se,Y,It.z,null,N)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Me))){let we=te.update(S),Se=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),It.copy(we.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(je)),Array.isArray(Se)){let Le=we.groups;for(let Oe=0,Ke=Le.length;Oe<Ke;Oe++){let st=Le[Oe],Ie=Se[st.materialIndex];Ie&&Ie.visible&&b.push(S,we,Ie,Y,It.z,st,N)}}else Se.visible&&b.push(S,we,Se,Y,It.z,null,N)}}let Ee=S.children;for(let we=0,Se=Ee.length;we<Se;we++)Su(Ee[we],N,Y,V)}function Ld(S,N,Y,V){let{opaque:k,transmissive:Ee,transparent:we}=S;A.setupLightsView(Y),tt===!0&&De.setGlobalState(R.clippingPlanes,Y),V&&_.viewport(ae.copy(V)),k.length>0&&Oo(k,N,Y),Ee.length>0&&Oo(Ee,N,Y),we.length>0&&Oo(we,N,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Id(S,N,Y,V){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[V.id]===void 0){let Ie=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[V.id]=new Ht(1,1,{generateMipmaps:!0,type:Ie?nn:vn,minFilter:os,samples:Math.max(4,T.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Ee=A.state.transmissionRenderTarget[V.id],we=V.viewport||ae;Ee.setSize(we.z*R.transmissionResolutionScale,we.w*R.transmissionResolutionScale);let Se=R.getRenderTarget(),Le=R.getActiveCubeFace(),Oe=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(rt),Ze=R.getClearAlpha(),Ze<1&&R.setClearColor(16777215,.5),R.clear(),_t&&Xe.render(Y);let Ke=R.toneMapping;R.toneMapping=zn;let st=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),A.setupLightsView(V),tt===!0&&De.setGlobalState(R.clippingPlanes,V),Oo(S,Y,V),J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let mt=0,qt=N.length;mt<qt;mt++){let At=N[mt],{object:St,geometry:on,material:Te,group:mn}=At;if(Te.side===tn&&St.layers.test(V.layers)){let lt=Te.side;Te.side=Ut,Te.needsUpdate=!0,Pd(St,Y,V,on,Te,mn),Te.side=lt,Te.needsUpdate=!0,Ie=!0}}Ie===!0&&(J.updateMultisampleRenderTarget(Ee),J.updateRenderTargetMipmap(Ee))}R.setRenderTarget(Se,Le,Oe),R.setClearColor(rt,Ze),st!==void 0&&(V.viewport=st),R.toneMapping=Ke}function Oo(S,N,Y){let V=N.isScene===!0?N.overrideMaterial:null;for(let k=0,Ee=S.length;k<Ee;k++){let we=S[k],{object:Se,geometry:Le,group:Oe}=we,Ke=we.material;Ke.allowOverride===!0&&V!==null&&(Ke=V),Se.layers.test(Y.layers)&&Pd(Se,N,Y,Le,Ke,Oe)}}function Pd(S,N,Y,V,k,Ee){q!==null&&k.isNodeMaterial&&q.setObject(S,k),S.onBeforeRender(R,N,Y,V,k,Ee),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(R,N,Y,V,S,Ee),k.transparent===!0&&k.side===tn&&k.forceSinglePass===!1?(k.side=Ut,k.needsUpdate=!0,R.renderBufferDirect(Y,N,V,k,S,Ee),k.side=as,k.needsUpdate=!0,R.renderBufferDirect(Y,N,V,k,S,Ee),k.side=tn):R.renderBufferDirect(Y,N,V,k,S,Ee),S.onAfterRender(R,N,Y,V,k,Ee)}function Uo(S,N,Y){N.isScene!==!0&&(N=rn);let V=W.get(S),k=A.state.lights,Ee=A.state.shadowsArray,we=k.state.version,Se=_e.getParameters(S,k.state,Ee,N,Y,A.state.lightProbeGridArray),Le=_e.getProgramCacheKey(Se),Oe=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,V.fog=N.fog;let Ke=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=ue.get(S.envMap||V.environment,Ke),V.envMapRotation=V.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Oe===void 0&&(S.addEventListener("dispose",Rt),Oe=new Map,V.programs=Oe);let st=Oe.get(Le);if(st!==void 0){if(V.currentProgram===st&&V.lightsStateVersion===we)return Dd(S,Se),st}else Se.uniforms=_e.getUniforms(S),q!==null&&S.isNodeMaterial&&q.build(S,Y,Se),S.onBeforeCompile(Se,R),st=_e.acquireProgram(Se,Le),Oe.set(Le,st),V.uniforms=Se.uniforms;let Ie=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ie.clippingPlanes=De.uniform),Dd(S,Se),V.needsLights=Km(S),V.lightsStateVersion=we,V.needsLights&&(Ie.ambientLightColor.value=k.state.ambient,Ie.lightProbe.value=k.state.probe,Ie.sunLights.value=k.state.sun,Ie.sunLightShadows.value=k.state.sunShadow,Ie.directionalLights.value=k.state.directional,Ie.directionalLightShadows.value=k.state.directionalShadow,Ie.spotLights.value=k.state.spot,Ie.spotLightShadows.value=k.state.spotShadow,Ie.rectAreaLights.value=k.state.rectArea,Ie.ltc_1.value=k.state.rectAreaLTC1,Ie.ltc_2.value=k.state.rectAreaLTC2,Ie.pointLights.value=k.state.point,Ie.pointLightShadows.value=k.state.pointShadow,Ie.hemisphereLights.value=k.state.hemi,Ie.sunShadowMatrix.value=k.state.sunShadowMatrix,Ie.sunShadowCascade.value=k.state.sunShadowCascade,Ie.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ie.spotLightMatrix.value=k.state.spotLightMatrix,Ie.spotLightMap.value=k.state.spotLightMap,Ie.pointShadowMatrix.value=k.state.pointShadowMatrix),V.lightProbeGrid=A.state.lightProbeGridArray.length>0,V.currentProgram=st,V.uniformsList=null,st}function Nd(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Pa.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Dd(S,N){let Y=W.get(S);Y.outputColorSpace=N.outputColorSpace,Y.batching=N.batching,Y.batchingColor=N.batchingColor,Y.instancing=N.instancing,Y.instancingColor=N.instancingColor,Y.instancingMorph=N.instancingMorph,Y.skinning=N.skinning,Y.morphTargets=N.morphTargets,Y.morphNormals=N.morphNormals,Y.morphColors=N.morphColors,Y.morphTargetsCount=N.morphTargetsCount,Y.numClippingPlanes=N.numClippingPlanes,Y.numIntersection=N.numClipIntersection,Y.vertexAlphas=N.vertexAlphas,Y.vertexTangents=N.vertexTangents,Y.toneMapping=N.toneMapping}function Jm(S,N){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(N.matrixWorld);for(let Y=0,V=S.length;Y<V;Y++){let k=S[Y];if(k.texture!==null&&k.boundingBox.containsPoint(y))return k}return null}function Zm(S,N,Y,V,k){N.isScene!==!0&&(N=rn),J.resetTextureUnits();let Ee=N.fog,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?N.environment:null,Se=re===null?R.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:nt.workingColorSpace,Le=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Oe=ue.get(V.envMap||we,Le),Ke=V.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,st=!!Y.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ie=!!Y.morphAttributes.position,mt=!!Y.morphAttributes.normal,qt=!!Y.morphAttributes.color,At=zn;V.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(At=R.toneMapping);let St=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,on=St!==void 0?St.length:0,Te=W.get(V),mn=A.state.lights;if(tt===!0&&(ft===!0||S!==se)){let Mt=S===se&&V.id===j;De.setState(V,S,Mt)}let lt=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==mn.state.version||Te.outputColorSpace!==Se||k.isBatchedMesh&&Te.batching===!1||!k.isBatchedMesh&&Te.batching===!0||k.isBatchedMesh&&Te.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Te.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Te.instancing===!1||!k.isInstancedMesh&&Te.instancing===!0||k.isSkinnedMesh&&Te.skinning===!1||!k.isSkinnedMesh&&Te.skinning===!0||k.isInstancedMesh&&Te.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Te.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Te.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Te.instancingMorph===!1&&k.morphTexture!==null||Te.envMap!==Oe||V.fog===!0&&Te.fog!==Ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==De.numPlanes||Te.numIntersection!==De.numIntersection)||Te.vertexAlphas!==Ke||Te.vertexTangents!==st||Te.morphTargets!==Ie||Te.morphNormals!==mt||Te.morphColors!==qt||Te.toneMapping!==At||Te.morphTargetsCount!==on||!!Te.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Te.__version=V.version);let Cn=Te.currentProgram;lt===!0&&(Cn=Uo(V,N,k),q&&V.isNodeMaterial&&q.onUpdateProgram(V,Cn,Te));let Qn=!1,Wi=!1,Ys=!1,vt=Cn.getUniforms(),Pt=Te.uniforms;if(_.useProgram(Cn.program)&&(Qn=!0,Wi=!0,Ys=!0),V.id!==j&&(j=V.id,Wi=!0),Te.needsLights){let Mt=Jm(A.state.lightProbeGridArray,k);Te.lightProbeGrid!==Mt&&(Te.lightProbeGrid=Mt,Wi=!0)}if(Qn||se!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),vt.setValue(U,"projectionMatrix",S.projectionMatrix),vt.setValue(U,"viewMatrix",S.matrixWorldInverse);let Yi=vt.map.cameraPosition;Yi!==void 0&&Yi.setValue(U,xt.setFromMatrixPosition(S.matrixWorld)),T.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),se!==S&&(se=S,Wi=!0,Ys=!0)}if(Te.needsLights&&(mn.state.sunShadowMap.length>0&&vt.setValue(U,"sunShadowMap",mn.state.sunShadowMap,J),mn.state.directionalShadowMap.length>0&&vt.setValue(U,"directionalShadowMap",mn.state.directionalShadowMap,J),mn.state.spotShadowMap.length>0&&vt.setValue(U,"spotShadowMap",mn.state.spotShadowMap,J),mn.state.pointShadowMap.length>0&&vt.setValue(U,"pointShadowMap",mn.state.pointShadowMap,J)),k.isSkinnedMesh){vt.setOptional(U,k,"bindMatrix"),vt.setOptional(U,k,"bindMatrixInverse");let Mt=k.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),vt.setValue(U,"boneTexture",Mt.boneTexture,J))}k.isBatchedMesh&&(vt.setOptional(U,k,"batchingTexture"),vt.setValue(U,"batchingTexture",k._matricesTexture,J),vt.setOptional(U,k,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",k._indirectTexture,J),vt.setOptional(U,k,"batchingColorTexture"),k._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",k._colorsTexture,J));let Xi=Y.morphAttributes;if((Xi.position!==void 0||Xi.normal!==void 0||Xi.color!==void 0)&&O.update(k,Y,Cn),(Wi||Te.receiveShadow!==k.receiveShadow)&&(Te.receiveShadow=k.receiveShadow,vt.setValue(U,"receiveShadow",k.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&N.environment!==null&&(Pt.envMapIntensity.value=N.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=J2()),Wi){if(vt.setValue(U,"toneMappingExposure",R.toneMappingExposure),Te.needsLights&&jm(Pt,Ys),Ee&&V.fog===!0&&Ne.refreshFogUniforms(Pt,Ee),Ne.refreshMaterialUniforms(Pt,V,ie,Q,A.state.transmissionRenderTarget[S.id]),Te.needsLights&&Te.lightProbeGrid){let Mt=Te.lightProbeGrid;Pt.probesSH.value=Mt.texture,Pt.probesMin.value.copy(Mt.boundingBox.min),Pt.probesMax.value.copy(Mt.boundingBox.max),Pt.probesResolution.value.copy(Mt.resolution)}Pa.upload(U,Nd(Te),Pt,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pa.upload(U,Nd(Te),Pt,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(U,"center",k.center),vt.setValue(U,"modelViewMatrix",k.modelViewMatrix),vt.setValue(U,"normalMatrix",k.normalMatrix),vt.setValue(U,"modelMatrix",k.matrixWorld),V.uniformsGroups!==void 0){let Mt=V.uniformsGroups;for(let Yi=0,$s=Mt.length;Yi<$s;Yi++){let Ud=Mt[Yi];I.update(Ud,Cn),I.bind(Ud,Cn)}}return Cn}function jm(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.sunLights.needsUpdate=N,S.sunLightShadows.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Km(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(S,N,Y){let V=W.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=N,W.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Y,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,N){let Y=W.get(S);Y.__webglFramebuffer=N,Y.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,Y=0){re=S,K=N,$=Y;let V=null,k=!1,Ee=!1;if(S){let Se=W.get(S);if(Se.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,Se.__webglFramebuffer),ae.copy(S.viewport),Ue.copy(S.scissor),Pe=S.scissorTest,_.viewport(ae),_.scissor(Ue),_.setScissorTest(Pe),j=-1;return}else if(Se.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(Se.__hasExternalTextures)J.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Ke=S.depthTexture;if(Se.__boundDepthTexture!==Ke){if(Ke!==null&&W.has(Ke)&&(S.width!==Ke.image.width||S.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(S)}}let Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(Ee=!0);let Oe=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Oe[N])?V=Oe[N][Y]:V=Oe[N],k=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?V=W.get(S).__webglMultisampledFramebuffer:Array.isArray(Oe)?V=Oe[Y]:V=Oe,ae.copy(S.viewport),Ue.copy(S.scissor),Pe=S.scissorTest}else ae.copy(Ae).multiplyScalar(ie).floor(),Ue.copy($e).multiplyScalar(ie).floor(),Pe=pt;if(Y!==0&&(V=z),_.bindFramebuffer(U.FRAMEBUFFER,V)&&_.drawBuffers(S,V),_.viewport(ae),_.scissor(Ue),_.setScissorTest(Pe),k){let Se=W.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Se.__webglTexture,Y)}else if(Ee){let Se=N;for(let Le=0;Le<S.textures.length;Le++){let Oe=W.get(S.textures[Le]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Le,Oe.__webglTexture,Y,Se)}}else if(S!==null&&Y!==0){let Se=W.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Se.__webglTexture,Y)}j=-1};function Od(S){let N=W.get(S);return(N.__readFormat!==S.format||N.__readType!==S.type)&&(N.__readFormat=S.format,N.__readType=S.type,N.__formatReadable=T.textureFormatReadable(S.format),N.__typeReadable=T.textureTypeReadable(S.type)),N}this.readRenderTargetPixels=function(S,N,Y,V,k,Ee,we,Se=0){if(!(S&&S.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){_.bindFramebuffer(U.FRAMEBUFFER,Le);try{let Oe=S.textures[Se],Ke=Oe.format,st=Oe.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se);let Ie=Od(Oe);if(Ie.__formatReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-V&&Y>=0&&Y<=S.height-k&&U.readPixels(N,Y,V,k,L.convert(Ke),L.convert(st),Ee)}finally{let Oe=re!==null?W.get(re).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(S,N,Y,V,k,Ee,we,Se=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le)if(N>=0&&N<=S.width-V&&Y>=0&&Y<=S.height-k){_.bindFramebuffer(U.FRAMEBUFFER,Le);let Oe=S.textures[Se],Ke=Oe.format,st=Oe.type;S.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se);let Ie=Od(Oe);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.bufferData(U.PIXEL_PACK_BUFFER,Ee.byteLength,U.STREAM_READ),U.readPixels(N,Y,V,k,L.convert(Ke),L.convert(st),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let qt=re!==null?W.get(re).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,qt);let At=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await np(U,At,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,mt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ee),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(mt),U.deleteSync(At),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,N=null,Y=0){let V=Math.pow(2,-Y),k=Math.floor(S.image.width*V),Ee=Math.floor(S.image.height*V),we=N!==null?N.x:0,Se=N!==null?N.y:0;J.setTexture2D(S,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,we,Se,k,Ee),_.unbindTexture()},this.copyTextureToTexture=function(S,N,Y=null,V=null,k=0,Ee=0){let we,Se,Le,Oe,Ke,st,Ie,mt,qt,At=S.isCompressedTexture?S.mipmaps[Ee]:S.image;if(Y!==null)we=Y.max.x-Y.min.x,Se=Y.max.y-Y.min.y,Le=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,Ke=Y.min.y,st=Y.isBox3?Y.min.z:0;else{let Pt=Math.pow(2,-k);we=Math.floor(At.width*Pt),Se=Math.floor(At.height*Pt),S.isDataArrayTexture?Le=At.depth:S.isData3DTexture?Le=Math.floor(At.depth*Pt):Le=1,Oe=0,Ke=0,st=0}V!==null?(Ie=V.x,mt=V.y,qt=V.z):(Ie=0,mt=0,qt=0);let St=L.convert(N.format),on=L.convert(N.type),Te;N.isData3DTexture?(J.setTexture3D(N,0),Te=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(J.setTexture2DArray(N,0),Te=U.TEXTURE_2D_ARRAY):(J.setTexture2D(N,0),Te=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);let mn=_.getParameter(U.UNPACK_ROW_LENGTH),lt=_.getParameter(U.UNPACK_IMAGE_HEIGHT),Cn=_.getParameter(U.UNPACK_SKIP_PIXELS),Qn=_.getParameter(U.UNPACK_SKIP_ROWS),Wi=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,At.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,At.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Oe),_.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),_.pixelStorei(U.UNPACK_SKIP_IMAGES,st);let Ys=S.isDataArrayTexture||S.isData3DTexture,vt=N.isDataArrayTexture||N.isData3DTexture;if(S.isDepthTexture){let Pt=W.get(S),Xi=W.get(N),Mt=W.get(Pt.__renderTarget),Yi=W.get(Xi.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,Mt.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Yi.__webglFramebuffer);for(let $s=0;$s<Le;$s++)Ys&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(S).__webglTexture,k,st+$s),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(N).__webglTexture,Ee,qt+$s)),U.blitFramebuffer(Oe,Ke,we,Se,Ie,mt,we,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||W.has(S)){let Pt=W.get(S),Xi=W.get(N);_.bindFramebuffer(U.READ_FRAMEBUFFER,D),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Mt=0;Mt<Le;Mt++)Ys?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,k,st+Mt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Pt.__webglTexture,k),vt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xi.__webglTexture,Ee,qt+Mt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xi.__webglTexture,Ee),k!==0?U.blitFramebuffer(Oe,Ke,we,Se,Ie,mt,we,Se,U.COLOR_BUFFER_BIT,U.NEAREST):vt?U.copyTexSubImage3D(Te,Ee,Ie,mt,qt+Mt,Oe,Ke,we,Se):U.copyTexSubImage2D(Te,Ee,Ie,mt,Oe,Ke,we,Se);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else vt?S.isDataTexture||S.isData3DTexture?U.texSubImage3D(Te,Ee,Ie,mt,qt,we,Se,Le,St,on,At.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Te,Ee,Ie,mt,qt,we,Se,Le,St,At.data):U.texSubImage3D(Te,Ee,Ie,mt,qt,we,Se,Le,St,on,At):S.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ee,Ie,mt,we,Se,St,on,At.data):S.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ee,Ie,mt,At.width,At.height,St,At.data):U.texSubImage2D(U.TEXTURE_2D,Ee,Ie,mt,we,Se,St,on,At);_.pixelStorei(U.UNPACK_ROW_LENGTH,mn),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Cn),_.pixelStorei(U.UNPACK_SKIP_ROWS,Qn),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Wi),Ee===0&&N.generateMipmaps&&U.generateMipmap(Te),_.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){K=0,$=0,re=null,_.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Vc=class extends Ds{constructor(e){super(e)}load(e,t,i,s){let a=this,r=new Pr(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,function(o){let l=a.parse(JSON.parse(o));t&&t(l)},i,s)}parse(e){return new Gh(e)}},Gh=class{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,i="ltr"){let s=[],a=Z2(e,t,this.data,i);for(let r=0,o=a.length;r<o;r++)s.push(...a[r].toShapes());return s}};function Z2(n,e,t,i){let s=Array.from(n),a=e/t.resolution,r=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*a,o=[],l=0,c=0;(i=="rtl"||i=="tb")&&s.reverse();for(let u=0;u<s.length;u++){let d=s[u];if(d===`
`)l=0,c-=r;else{let h=j2(d,a,l,c,t);i=="tb"?(l=0,c+=t.ascender*a):l+=h.offsetX,o.push(h.path)}}return o}function j2(n,e,t,i,s){let a=s.glyphs[n]||s.glyphs["?"];if(!a){console.error('THREE.Font: character "'+n+'" does not exists in font family '+s.familyName+".");return}let r=new Hr,o,l,c,u,d,h,f,g;if(a.o){let x=a._cachedOutline||(a._cachedOutline=a.o.split(" "));for(let m=0,p=x.length;m<p;)switch(x[m++]){case"m":o=x[m++]*e+t,l=x[m++]*e+i,r.moveTo(o,l);break;case"l":o=x[m++]*e+t,l=x[m++]*e+i,r.lineTo(o,l);break;case"q":c=x[m++]*e+t,u=x[m++]*e+i,d=x[m++]*e+t,h=x[m++]*e+i,r.quadraticCurveTo(d,h,c,u);break;case"b":c=x[m++]*e+t,u=x[m++]*e+i,d=x[m++]*e+t,h=x[m++]*e+i,f=x[m++]*e+t,g=x[m++]*e+i,r.bezierCurveTo(d,h,f,g,c,u);break}}return{offsetX:a.ha*e,path:r}}var Bp={glyphs:{\u03BF:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},S:{x_min:0,x_max:826,ha:915,o:"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"\xA6":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{x_min:196.109375,x_max:632.5625,ha:828,o:"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},\u03A4:{x_min:-.609375,x_max:808,ha:878,o:"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},y:{x_min:0,x_max:738.890625,ha:828,o:"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},\u03A0:{x_min:0,x_max:809,ha:922,o:"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},\u0390:{x_min:-162,x_max:364,ha:364,o:"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},g:{x_min:0,x_max:724,ha:839,o:"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"\xB2":{x_min:0,x_max:463,ha:560,o:"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"\u2013":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},\u039A:{x_min:0,x_max:899.671875,ha:969,o:"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},\u0192:{x_min:-46,x_max:440,ha:525,o:"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},e:{x_min:0,x_max:708,ha:808,o:"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},\u03CC:{x_min:0,x_max:764,ha:863,o:"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},J:{x_min:0,x_max:649,ha:760,o:"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"\xBB":{x_min:-.234375,x_max:526,ha:624,o:"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"\xA9":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},\u03CE:{x_min:0,x_max:945,ha:1051,o:"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{x_min:197.21875,x_max:630.5625,ha:828,o:"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"\xAB":{x_min:0,x_max:526.546875,ha:624,o:"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},D:{x_min:0,x_max:864,ha:968,o:"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"\u2219":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u00FF:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1056.953125,ha:1150,o:"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},$:{x_min:0,x_max:704,ha:800,o:"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\":{x_min:-.03125,x_max:434.765625,ha:532,o:"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},\u00B5:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},\u0399:{x_min:42,x_max:250,ha:413,o:"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},\u038E:{x_min:0,x_max:1211.15625,ha:1289,o:"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2019":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},\u039D:{x_min:0,x_max:833,ha:946,o:"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{x_min:27.78125,x_max:413.890625,ha:525,o:"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},Q:{x_min:0,x_max:995.59375,ha:1096,o:"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},\u03C2:{x_min:0,x_max:731.78125,ha:768,o:"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},M:{x_min:0,x_max:1019,ha:1135,o:"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},\u03A8:{x_min:0,x_max:995,ha:1085,o:"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},C:{x_min:0,x_max:970.828125,ha:1043,o:"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{x_min:0,x_max:204,ha:307,o:"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{x_min:0,x_max:501.390625,ha:599,o:"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},X:{x_min:0,x_max:894.453125,ha:999,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{x_min:0,x_max:1019.453125,ha:1117,o:"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},\u03B9:{x_min:42,x_max:242,ha:389,o:"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},\u0386:{x_min:0,x_max:995.828125,ha:1072,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{x_min:0,x_max:389,ha:486,o:"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},\u03B5:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},\u0394:{x_min:0,x_max:981.953125,ha:1057,o:"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{x_min:0,x_max:500,ha:597,o:"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"\u2030":{x_min:0,x_max:1681,ha:1775,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},a:{x_min:0,x_max:700,ha:786,o:"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"\u2014":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{x_min:29.171875,x_max:798.609375,ha:828,o:"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},N:{x_min:0,x_max:833,ha:949,o:"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},\u03C1:{x_min:0,x_max:722,ha:810,o:"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"2":{x_min:64,x_max:764,ha:828,o:"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"\xAF":{x_min:0,x_max:775,ha:771,o:"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},Z:{x_min:0,x_max:804.171875,ha:906,o:"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},u:{x_min:0,x_max:668,ha:782,o:"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},k:{x_min:0,x_max:688.890625,ha:771,o:"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},\u0397:{x_min:0,x_max:837,ha:950,o:"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},\u0391:{x_min:0,x_max:966.671875,ha:1043,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},s:{x_min:0,x_max:681,ha:775,o:"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},B:{x_min:0,x_max:835,ha:938,o:"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"\u2026":{x_min:0,x_max:819,ha:963,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{x_min:1,x_max:687,ha:785,o:"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},H:{x_min:0,x_max:838,ha:953,o:"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},\u03BD:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},c:{x_min:0,x_max:751.390625,ha:828,o:"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"\xB6":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},\u03B2:{x_min:0,x_max:703,ha:789,o:"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},\u039C:{x_min:0,x_max:1019,ha:1132,o:"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},\u038C:{x_min:.15625,x_max:1174,ha:1271,o:"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},\u0389:{x_min:0,x_max:1248,ha:1361,o:"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"\u2022":{x_min:-27.78125,x_max:691.671875,ha:775,o:"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"\xA5":{x_min:0,x_max:836,ha:931,o:"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{x_min:0,x_max:388.890625,ha:486,o:"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},U:{x_min:0,x_max:813,ha:926,o:"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},\u03B3:{x_min:.0625,x_max:729.234375,ha:815,o:"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},\u03B1:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},F:{x_min:0,x_max:706.953125,ha:778,o:"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"\xAD":{x_min:0,x_max:704.171875,ha:801,o:"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},\u03A7:{x_min:0,x_max:894.453125,ha:978,o:"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{x_min:115,x_max:713,ha:828,o:"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"\u2020":{x_min:0,x_max:809,ha:894,o:"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"\xB0":{x_min:-1,x_max:363,ha:460,o:"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},V:{x_min:0,x_max:895.828125,ha:997,o:"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},\u039E:{x_min:0,x_max:751.390625,ha:800,o:"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "},"\xA0":{x_min:0,x_max:0,ha:853},\u03AB:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"0":{x_min:51,x_max:779,ha:828,o:"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"\u201D":{x_min:0,x_max:469,ha:567,o:"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{x_min:0,x_max:1276,ha:1374,o:"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},\u038A:{x_min:0,x_max:619,ha:732,o:"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},i:{x_min:14,x_max:214,ha:326,o:"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},\u0392:{x_min:0,x_max:835,ha:961,o:"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},\u03C5:{x_min:0,x_max:656,ha:767,o:"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{x_min:0,x_max:349,ha:446,o:"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},m:{x_min:0,x_max:1065,ha:1174,o:"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},\u03C7:{x_min:0,x_max:759.71875,ha:847,o:"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"8":{x_min:57,x_max:770,ha:828,o:"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},\u03AF:{x_min:42,x_max:371.171875,ha:389,o:"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},\u0396:{x_min:0,x_max:804.171875,ha:886,o:"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},R:{x_min:0,x_max:836.109375,ha:947,o:"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},o:{x_min:0,x_max:764,ha:871,o:"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"5":{x_min:59,x_max:767,ha:828,o:"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"7":{x_min:65.28125,x_max:762.5,ha:828,o:"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},K:{x_min:0,x_max:900,ha:996,o:"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{x_min:0,x_max:206,ha:303,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},d:{x_min:0,x_max:722,ha:836,o:"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"\xA8":{x_min:212,x_max:609,ha:933,o:"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},E:{x_min:0,x_max:761.109375,ha:824,o:"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},Y:{x_min:0,x_max:836,ha:931,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},'"':{x_min:0,x_max:357,ha:454,o:"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\u2039":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\u201E":{x_min:0,x_max:483,ha:588,o:"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},\u03B4:{x_min:6,x_max:732,ha:835,o:"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},\u03AD:{x_min:16.671875,x_max:652.78125,ha:742,o:"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},\u03C9:{x_min:0,x_max:945,ha:1051,o:"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"\xB4":{x_min:0,x_max:132,ha:299,o:"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"\xB1":{x_min:29,x_max:798,ha:828,o:"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{x_min:0,x_max:143,ha:240,o:"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},\u03CB:{x_min:0,x_max:656,ha:767,o:"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"\xA7":{x_min:0,x_max:633,ha:731,o:"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},b:{x_min:0,x_max:722,ha:822,o:"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},q:{x_min:0,x_max:722,ha:833,o:"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},\u03A9:{x_min:-.03125,x_max:1008.53125,ha:1108,o:"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},\u03CD:{x_min:0,x_max:656,ha:767,o:"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},z:{x_min:0,x_max:663.890625,ha:753,o:"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"\u2122":{x_min:0,x_max:951,ha:1063,o:"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},\u03AE:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},\u0398:{x_min:0,x_max:993,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"\xAE":{x_min:3,x_max:1007,ha:1104,o:"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{x_min:0,x_max:851,ha:949,o:"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},\u0395:{x_min:0,x_max:761.546875,ha:824,o:"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"\xB3":{x_min:0,x_max:467,ha:564,o:"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{x_min:0,x_max:347.21875,ha:444,o:"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},L:{x_min:0,x_max:704.171875,ha:763,o:"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},\u03C3:{x_min:0,x_max:851.3125,ha:940,o:"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},\u03B6:{x_min:0,x_max:622,ha:701,o:"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},\u03B8:{x_min:0,x_max:714,ha:817,o:"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},\u039F:{x_min:0,x_max:995,ha:1092,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},\u0393:{x_min:0,x_max:703.84375,ha:742,o:"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:0,x_max:1111,ha:1213,o:"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},P:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},\u0388:{x_min:0,x_max:1172.546875,ha:1235,o:"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},\u038F:{x_min:.4375,x_max:1189.546875,ha:1289,o:"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},_:{x_min:61.109375,x_max:766.671875,ha:828,o:"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},\u03AA:{x_min:-56,x_max:342,ha:503,o:"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{x_min:43,x_max:784,ha:828,o:"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"\xBD":{x_min:0,x_max:1090,ha:1188,o:"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},\u03A1:{x_min:0,x_max:771,ha:838,o:"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"'":{x_min:0,x_max:192,ha:289,o:"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},\u00AA:{x_min:0,x_max:350,ha:393,o:"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"\u0385":{x_min:57,x_max:584,ha:753,o:"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},T:{x_min:0,x_max:809,ha:894,o:"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},\u03A6:{x_min:0,x_max:949,ha:1032,o:"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},j:{x_min:-45.828125,x_max:242,ha:361,o:"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},\u03A3:{x_min:0,x_max:772.21875,ha:849,o:"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"1":{x_min:197.609375,x_max:628,ha:828,o:"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"\u203A":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{x_min:35.984375,x_max:791.671875,ha:828,o:"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"\xA3":{x_min:0,x_max:716.546875,ha:814,o:"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},t:{x_min:0,x_max:412,ha:511,o:"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"\xAC":{x_min:0,x_max:704,ha:801,o:"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},\u03BB:{x_min:0,x_max:701.390625,ha:775,o:"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},W:{x_min:0,x_max:1291.671875,ha:1399,o:"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{x_min:36.109375,x_max:792,ha:828,o:"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},v:{x_min:0,x_max:740.28125,ha:828,o:"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},\u03C4:{x_min:.28125,x_max:618.734375,ha:699,o:"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},\u03BE:{x_min:0,x_max:640,ha:715,o:"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{x_min:-1,x_max:910.109375,ha:1007,o:"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},\u039B:{x_min:0,x_max:894.453125,ha:974,o:"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},I:{x_min:41,x_max:249,ha:365,o:"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},G:{x_min:0,x_max:971,ha:1057,o:"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},\u03B0:{x_min:0,x_max:655,ha:767,o:"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{x_min:0,x_max:190,ha:288,o:"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"\xB7":{x_min:0,x_max:207,ha:304,o:"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},\u03A5:{x_min:-.21875,x_max:836.171875,ha:914,o:"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},r:{x_min:0,x_max:431.9375,ha:513,o:"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},x:{x_min:0,x_max:738.890625,ha:826,o:"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},\u03BC:{x_min:0,x_max:647,ha:754,o:"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},h:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{x_min:0,x_max:206,ha:303,o:"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},\u03C6:{x_min:-1,x_max:921,ha:990,o:"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{x_min:0,x_max:208,ha:306,o:"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},f:{x_min:0,x_max:424,ha:525,o:"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"\u201C":{x_min:0,x_max:468,ha:567,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},A:{x_min:0,x_max:966.671875,ha:1069,o:"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"6":{x_min:57,x_max:771,ha:828,o:"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"\u2018":{x_min:0,x_max:190,ha:289,o:"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},\u03CA:{x_min:-55,x_max:337,ha:389,o:"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},\u03C0:{x_min:.5,x_max:838.890625,ha:938,o:"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},\u03AC:{x_min:-1,x_max:722,ha:835,o:"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},O:{x_min:0,x_max:994,ha:1094,o:"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},n:{x_min:0,x_max:669,ha:782,o:"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"3":{x_min:61,x_max:767,ha:828,o:"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"9":{x_min:58,x_max:769,ha:828,o:"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},l:{x_min:41,x_max:240,ha:363,o:"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"\xA4":{x_min:40.265625,x_max:727.203125,ha:825,o:"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},\u03BA:{x_min:0,x_max:691.84375,ha:779,o:"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"4":{x_min:53,x_max:775.21875,ha:828,o:"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},p:{x_min:0,x_max:722,ha:824,o:"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"\u2021":{x_min:0,x_max:809,ha:894,o:"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},\u03C8:{x_min:0,x_max:875,ha:979,o:"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},\u03B7:{x_min:0,x_max:669,ha:779,o:"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}},cssFontWeight:"bold",ascender:1216,underlinePosition:-100,cssFontStyle:"normal",boundingBox:{yMin:-333,xMin:-162,yMax:1216,xMax:1681},resolution:1e3,original_font_information:{postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},descender:-334,familyName:"Helvetiker",lineHeight:1549,underlineThickness:50};var gM=new Vc().parse(Bp),xM="ABCDEFGHIJLMN\xD1OPQRSTUVXYZ".split("");function Ye(n,e={}){return new Vt({color:n,roughness:.45,metalness:.1,...e})}function kn(n,e=1.5,t={}){return new Vt({color:0,emissive:n,emissiveIntensity:e,roughness:.6,...t})}function Da({body:n=3364266,legs:e=2236979,skin:t=13148282,hair:i=2759184,seated:s=!1,scale:a=1}={}){let r=new gt,o=Ye(n,{roughness:.7}),l=Ye(e,{roughness:.8}),c=Ye(t,{roughness:.8}),u=Ye(i,{roughness:.9}),d=new le(new ri(.2,.45,4,12),o);d.scale.set(1.05,1,.7);let h=new le(new Ii(.13,16,12),c),f=new le(new Ii(.138,16,12,0,Math.PI*2,0,Math.PI*.55),u);f.rotation.x=-.35;let g=new ri(.06,.45,3,8),x=new le(g,o),m=new le(g,o),p=new ri(.08,.6,3,8),E=new le(p,l),w=new le(p,l);return s?(E.position.set(-.1,.05,.25),w.position.set(.1,.05,.25),E.rotation.x=w.rotation.x=Math.PI/2,d.position.y=.4,h.position.y=.86,f.position.y=.88,x.position.set(-.28,.42,.15),m.position.set(.28,.42,.15),x.rotation.x=m.rotation.x=-.9):(E.position.set(-.1,.4,0),w.position.set(.1,.4,0),d.position.y=1.05,h.position.y=1.5,f.position.y=1.52,x.position.set(-.28,1.05,0),m.position.set(.28,1.05,0),x.rotation.z=.12,m.rotation.z=-.12),r.add(d,h,f,x,m,E,w),r.scale.setScalar(a),r.traverse(y=>{y.isMesh&&(y.castShadow=!0)}),r}var Hp=["#e8322b","#f7a21b","#ffe12e","#3cc24a","#1fa3e8","#2a52d8","#8d3ad8","#e83ca0"];function zp(n,e,t,i,s=0,a=Hp){n.save(),n.translate(e,t),n.rotate(s*.4);let r=24;for(let o=0;o<r;o++)n.beginPath(),n.moveTo(0,0),n.arc(0,0,i,o*Math.PI*2/r,(o+1)*Math.PI*2/r),n.closePath(),n.fillStyle=a[o%a.length],n.fill();n.lineWidth=i*.05,n.strokeStyle="#fff",n.beginPath(),n.arc(0,0,i,0,7),n.stroke();for(let o=0;o<r;o++){let l=o*Math.PI*2/r;n.fillStyle="#fff",n.beginPath(),n.arc(Math.cos(l)*i*.95,Math.sin(l)*i*.95,i*.025,0,7),n.fill()}n.fillStyle="#1a2a8a",n.beginPath(),n.arc(0,0,i*.28,0,7),n.fill(),n.strokeStyle="#ffe12e",n.lineWidth=i*.03,n.stroke(),n.restore()}function Wh(n,e,t,i,s=0,{retro:a=!1}={}){let r=i*.2;n.save(),n.globalAlpha=.95,zp(n,e,t-r*.15,r*1.55,s,a?["#b8862b","#7a1a1a","#e8c66a","#2a4a2a"]:Hp),n.restore(),n.save();let o=n.createRadialGradient(e,t,r*.2,e,t,i*.55);o.addColorStop(0,"rgba(5,10,60,0.55)"),o.addColorStop(1,"rgba(5,10,60,0)"),n.fillStyle=o,n.fillRect(e-i,t-i,i*2,i*2),n.restore();let l=(u,d,h,f,g,x=-.12)=>{n.save(),n.translate(e,d),n.transform(1,0,x,1,0,0),n.font=`900 ${h}px "Arial Black", Impact, Arial`,n.textAlign="center",n.textBaseline="middle";let m=n.measureText(u).width;if(m>i){let p=i/m;n.scale(p,p)}n.lineJoin="round",n.lineWidth=h*.22,n.strokeStyle=g,n.strokeText(u,0,0),n.lineWidth=h*.07,n.strokeStyle="#fff",n.strokeText(u,0,0),n.fillStyle=f,n.shadowColor="rgba(0,0,0,.5)",n.shadowBlur=h*.15,n.fillText(u,0,0),n.restore()},c=(u,d,h)=>{let f=n.createLinearGradient(0,u-r/2,0,u+r/2);return f.addColorStop(0,d),f.addColorStop(1,h),f};a?(l("LA RULETA",t-r*.55,r*1,c(t-r*.55,"#fff6c0","#d4a020"),"#4a1a08",0),l("DE LA FORTUNA",t+r*.55,r*.62,c(t+r*.55,"#ffffff","#e8c66a"),"#4a1a08",0)):(l("LA",t-r*.95,r*.42,"#ffffff","#0a1a6a"),l("RULETA",t-r*.2,r*1.15,c(t-r*.2,"#ffffff","#5fc8ff"),"#0a1a6a"),l("DE LA SUERTE",t+r*.75,r*.55,c(t+r*.75,"#fff6a0","#ffb000"),"#5a1a00"))}var us={r:"#e8322b",o:"#f7a21b",y:"#ffd21a",g:"#2fb64a",c:"#1fa3e8",b:"#2a52d8",p:"#8d3ad8",m:"#e83ca0"},Vp=[us.r,us.o,us.y,us.g,us.c,us.b,us.p,us.m],dn=n=>({tipo:"num",v:n,t:String(n)}),Zt=[dn(100),dn(25),{tipo:"quiebra",t:"QUIEBRA"},dn(75),dn(150),{tipo:"pierde",t:"PIERDE TURNO"},dn(50),dn(200),{tipo:"x2",t:"X2"},dn(25),dn(100),{tipo:"comodin",t:"COMOD\xCDN",v:50},dn(75),dn(125),{tipo:"quiebra",t:"QUIEBRA"},dn(50),dn(150),{tipo:"melo",t:"ME LO QUEDO"},dn(0),dn(100),{tipo:"mitad",t:"1/2"},dn(200),{tipo:"selodoy",t:"SE LO DOY"},dn(50)],Q2=0;Zt.forEach(n=>{n.tipo==="num"&&(n.color=Vp[Q2++%Vp.length])});Object.assign(Zt[2],{color:"#0a0a0a",txt:"#ffffff"});Object.assign(Zt[14],{color:"#0a0a0a",txt:"#ffffff"});Object.assign(Zt[5],{color:"#ffffff",txt:"#111111"});Object.assign(Zt[8],{color:"#c0c0c8",txt:"#5a1a9a"});Object.assign(Zt[11],{color:"#18a050",txt:"#ffe14a"});Object.assign(Zt[17],{color:"#ff69b4",txt:"#ffffff"});Object.assign(Zt[20],{color:"#00b8b0",txt:"#ffffff"});Object.assign(Zt[22],{color:"#ff7a1a",txt:"#ffffff"});var kc=Zt.length,Gc=Math.PI*2/kc,Gn=2.55;function kp(n=!1,e=!1){let i=document.createElement("canvas");i.width=i.height=2048;let s=i.getContext("2d"),a=2048/2,r=2048/2*.985;for(let l=0;l<kc;l++){let c=Zt[l],u=-(l+1)*Gc,d=-l*Gc,h=n?l%2?"#d4a020":"#f3d36a":c.color;e&&!n&&c.tipo==="num"&&(h=["#b83a2a","#d48a2a","#e8c66a","#3a7a3a","#2a5a9a","#6a3a8a"][l%6]),s.beginPath(),s.moveTo(a,a),s.arc(a,a,r,u,d),s.closePath(),s.fillStyle=h,s.fill();let f=s.createRadialGradient(a,a,r*.3,a,a,r);f.addColorStop(0,"rgba(255,255,255,0.18)"),f.addColorStop(1,"rgba(0,0,0,0.12)"),s.fillStyle=f,s.fill(),s.strokeStyle=e?"#e8c66a":"#ffffff",s.lineWidth=6,s.stroke();let g=n?"\u2605 SOBRE \u2605":c.t;s.save(),s.translate(a,a),s.rotate((u+d)/2+Math.PI);let x=r*.6,m=r*.115;s.font=`900 ${m}px "Arial Black", Arial`;let p=s.measureText(g).width;p>x&&(m*=x/p,s.font=`900 ${m}px "Arial Black", Arial`),s.textAlign="left",s.textBaseline="middle",s.fillStyle=n?"#5a2a00":c.txt||"#ffffff",s.lineWidth=m*.12,s.strokeStyle="rgba(0,0,0,.45)",!c.txt&&!n&&s.strokeText(g,-r*.94,0),s.fillText(g,-r*.94,0),c.tipo==="num"&&!n&&(s.font=`900 ${m*.55}px Arial`,s.fillText("\u20AC",-r*.94+s.measureText(g).width+m*.9,0)),s.restore()}s.lineWidth=18,s.strokeStyle=e?"#c9962a":"#ffffff",s.beginPath(),s.arc(a,a,r-9,0,7),s.stroke();let o=new Hn(i);return o.colorSpace=Nt,o.anisotropy=8,o}function Gp(n){let t=document.createElement("canvas");t.width=t.height=512;let i=t.getContext("2d"),s=i.createRadialGradient(512/2,512/2,10,512/2,512/2,512/2);if(s.addColorStop(0,"#3a6aff"),s.addColorStop(1,"#0a1a7a"),i.fillStyle=s,i.fillRect(0,0,512,512),n&&n.naturalWidth){let r=Math.min(409.6/n.naturalWidth,409.6/n.naturalHeight);i.drawImage(n,512/2-n.naturalWidth*r/2,512/2-n.naturalHeight*r/2,n.naturalWidth*r,n.naturalHeight*r)}else i.fillStyle="#fff",i.font='900 92px "Arial Black", Arial',i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(512/2,512/2),i.transform(1,0,-.15,1,0,0),i.fillText("RULETA",0,-10),i.font="900 44px Arial",i.fillStyle="#ffd21a",i.fillText("DE LA SUERTE",0,62),i.restore();let a=new Hn(t);return a.colorSpace=Nt,a}function Wp(n,e,{onClic:t=()=>{}}={}){let i=new gt;n.add(i);let s=new gt;s.position.y=1.08,i.add(s);let a=new Vt({map:kp(),roughness:.35,metalness:.1,emissive:16777215,emissiveIntensity:.12});a.emissiveMap=a.map;let r=new le(new Ls(Gn,96),a);r.rotation.x=-Math.PI/2,r.receiveShadow=!0,s.add(r);let o=new le(new yt(Gn,Gn,.08,96,1,!0),Ye(15263984,{metalness:.6,roughness:.3}));o.position.y=-.04,s.add(o);let l=new Vt({map:Gp(null),roughness:.3,emissive:16777215,emissiveIntensity:.25});l.emissiveMap=l.map;let c=new le(new yt(.62,.66,.12,48),[Ye(13687039,{metalness:.7}),l,Ye(2241416)]);c.position.y=.06,s.add(c);let u=Ye(15921906,{metalness:.9,roughness:.2});for(let x=0;x<kc;x++){let m=x*Gc,p=new le(new yt(.025,.025,.12,8),u);p.position.set(Math.cos(m)*(Gn-.06),.06,-Math.sin(m)*(Gn-.06)),s.add(p)}let d=e.map(x=>{let m=new gt;m.position.set(Math.cos(x)*(Gn+.12),1.16,-Math.sin(x)*(Gn+.12)),m.rotation.y=x,i.add(m);let p=new Vt({color:16777215,emissive:0,metalness:.4,roughness:.3}),E=new le(new oi(.09,.42,3),p);return E.rotation.z=Math.PI/2,E.position.x=-.12,E.scale.z=.4,m.add(E),{piv:m,m:p,phi:x,kick:0}}),h={ang:Math.random()*Math.PI*2,omega:0,activo:0,ultimo:-1,res:null,final:!1,retro:!1},f=x=>{let m=(x-h.ang)%(Math.PI*2);return m<0&&(m+=Math.PI*2),Math.floor(m/Gc)%kc},g={grupo:i,disco:s,flechas:d,st:h,GAJOS:Zt,get girando(){return h.omega!==0},activar(x,m){h.activo=x,d.forEach((p,E)=>{p.m.emissive.set(E===x?m||16765466:0),p.m.emissiveIntensity=E===x?1.6:0,p.m.color.set(E===x?m||16765466:14540253)})},gajoActual(){return f((d[h.activo]||d[0]).phi)},girar(x){return d[h.activo]||(h.activo=0),h.omega=x,h.ultimo=f(d[h.activo].phi),new Promise(m=>{h.res=m})},empujar(x){h.ang+=x,s.rotation.y=h.ang},setFinal(x){h.final=x,a.map.dispose(),a.map=a.emissiveMap=kp(x,h.retro),a.needsUpdate=!0},setRetro(x){h.retro=x,this.setFinal(h.final)},setLogo(x){l.map.dispose(),l.map=l.emissiveMap=Gp(x),l.needsUpdate=!0},update(x,m){if(h.omega!==0){let p=Math.abs(h.omega),E=Math.sign(h.omega);h.ang+=h.omega*x;let w=Math.max(0,p-(.28+.16*p)*x);h.omega=E*w;let y=f((d[h.activo]||d[0]).phi);if(y!==h.ultimo&&(h.ultimo=y,t(p),(d[h.activo]||d[0]).kick=Math.min(.6,.15+p*.05),p<2.5&&(h.omega*=.93)),w<.05){h.omega=0;let b=h.res;h.res=null,b&&b(this.gajoActual())}s.rotation.y=h.ang}d.forEach(p=>{p.kick*=Math.exp(-x*14),p.piv.rotation.y=p.phi+p.kick*(h.omega>=0?1:-1)})}};return s.rotation.y=h.ang,g}var Oa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},ev=new ss(-1,1,1,-1,0,1),Xh=class extends Dt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},tv=new Xh,hs=class{constructor(e){this._mesh=new le(tv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ev)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wc=class extends wn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ni.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hs(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ao=class extends wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let r,o;this.inverse?(r=0,o=1):(r=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}},Xc=class extends wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Yc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new pe);this._width=i.width,this._height=i.height,t=new Ht(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wc(Oa),this.copyPass.material.blending=In,this.timer=new Fr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,a=this.passes.length;s<a;s++){let r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ao!==void 0&&(r instanceof ao?i=!0:r instanceof Xc&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var $c=class extends wn{constructor(e,t,i=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Fe}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let a,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=s}};var Xp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ua=class n extends wn{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new pe(e.x,e.y):new pe(256,256),this.clearColor=new Fe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ht(a,r,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Ht(a,r,{type:nn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let h=new Ht(a,r,{type:nn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),r=Math.round(r/2)}let o=Xp;this.highPassUniforms=Ni.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];a=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new pe(1/a,1/r),a=Math.round(a/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ni.clone(Oa.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader,premultipliedAlpha:!0,blending:Us,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Fe,this._oldClearAlpha=1,this._basic=new Bn,this._fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,s),this.renderTargetsVertical[a].setSize(i,s),this.separableBlurMaterials[a].uniforms.invSize.value=new pe(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){let t=[],i=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(i*i))/i);let s=[],a=[];for(let r=1;r<e;r+=2){let o=t[r],l=r+1<e?t[r+1]:0,c=o+l;s.push((r*o+(r+1)*l)/c),a.push(c)}return new Ot({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new pe(.5,.5)},direction:{value:new pe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:a}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ua.BlurDirectionX=new pe(1,0);Ua.BlurDirectionY=new pe(0,1);var ro={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Jc=class extends wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ni.clone(ro.uniforms),this.material=new Ea({name:ro.name,uniforms:this.uniforms,vertexShader:ro.vertexShader,fragmentShader:ro.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===ht&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vr?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===kr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Yp=[12,14,14,12],nv={1:[1],2:[1],3:[1,0],4:[0]},Fa=["A","E","I","O","U"],iv="ABCDEFGHIJKLMN\xD1OPQRSTUVWXYZ".split(""),qa=iv.filter(n=>!Fa.includes(n)),Ba=n=>{let e=String(n).toUpperCase();return e==="\xD1"?"\xD1":e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},Yh=n=>/[A-ZÑ]/.test(Ba(n)),lo=n=>String(n||"").toUpperCase().split("").map(Ba).join("").replace(/[^A-ZÑ0-9]/g,"");function sv(n,e){let t=[],i="";for(let s of n.split(/\s+/).filter(Boolean)){let a=(i+" "+s).trim();if(t.length<e.length&&a.length<=e[t.length]){i=a;continue}if(!i||(t.push(i),i=s,t.length>=e.length||i.length>e[t.length]))return null}return i&&t.push(i),t}function av(n){for(let e of[1,2,3,4])for(let t of nv[e]){let i=sv(n,Yp.slice(t,t+e));if(i)return{ini:t,lineas:i}}return{ini:0,lineas:[n.slice(0,12),n.slice(12,26),n.slice(26,40),n.slice(40,52)]}}function rv(n){let{ini:e,lineas:t}=av(n),i=[];for(let s=0;s<4;s++){i.push([]);for(let a=0;a<14;a++)i[s].push((s===0||s===3)&&(a===0||a===13)?null:"")}return t.forEach((s,a)=>{let r=e+a,o=Yp[r],c=(r===0||r===3?1:0)+Math.floor((o-s.length)/2);[...s].forEach((u,d)=>{u!==" "&&(i[r][c+d]=u)})}),i}function co(n){return{f:n.f,tema:n.tema,g:rv(n.f),rev:new Set,luz:new Set,vis:new Set,usadas:new Set,modo:"juego",resuelto:!1}}var Ha=(n,e)=>[...n.f].filter(t=>Ba(t)===e).length,Zc=(n,e)=>e.filter(t=>!n.rev.has(t)&&Ha(n,t)>0),uo=n=>[...n.f].filter(Yh).length,ho=n=>{let e=0;return n.g.forEach((t,i)=>t.forEach((s,a)=>{s&&Yh(s)&&(n.rev.has(Ba(s))||n.vis.has(i+","+a))&&e++})),e},Vs=n=>ho(n)/Math.max(1,uo(n)),$p=n=>{let e=[];return n.g.forEach((t,i)=>t.forEach((s,a)=>{s&&Yh(s)&&e.push(i+","+a)})),e},Jp=(n,e)=>{let t=[];return n.g.forEach((i,s)=>i.forEach((a,r)=>{a&&Ba(a)===e&&t.push(s+","+r)})),t};function za(n,e=""){let t=co({f:n,tema:e});return t.modo="texto",t}var jc={fortuna:{fondo:"#1a0c06",marco:"#c9962a",bombillas:"#ffe9a0",vacia:"#0e4a24",ficha:"#f3eedb",letra:"#101010",luz:"#ffd34a",franja:"#7a1a12",franjaTxt:"#ffe9a0"},a2006:{fondo:"#0a1a3a",marco:"#e8eef8",bombillas:null,vacia:"#14b07a",ficha:"#ffffff",letra:"#0a1a3a",luz:"#3ad0ff",franja:"#1a5adf",franjaTxt:"#ffffff"},piramides:{fondo:"#0a1a50",marco:"#d9b24a",bombillas:"#fff2b0",vacia:"#1a46c8",ficha:"#ffffff",letra:"#0a1a50",luz:"#3ad0ff",franja:"#0d2f9a",franjaTxt:"#ffffff"},verano:{fondo:"#0a1a50",marco:"#f0a020",bombillas:"#fff2b0",vacia:"#1a8ad8",ficha:"#ffffff",letra:"#0a1a50",luz:"#ffd34a",franja:"#0a6ab0",franjaTxt:"#ffffff"},neon:{fondo:"#12052a",marco:"#c64dff",bombillas:null,neon:!0,vacia:"#3b1680",ficha:"#ffffff",letra:"#1a0640",luz:"#33e6ff",franja:"#5a1aa8",franjaTxt:"#ffffff"}};function oo(n,e,t,i,s,a){n.beginPath(),n.moveTo(e+a,t),n.arcTo(e+i,t,e+i,t+s,a),n.arcTo(e+i,t+s,e,t+s,a),n.arcTo(e,t+s,e,t,a),n.arcTo(e,t,e+i,t,a),n.closePath()}function Kc(n,e,t,i,s=jc.piramides,{franja:a=.16,t:r=0}={}){n.clearRect(0,0,e,t);let o=a?t*a:0,l=t-o;if(n.fillStyle=s.fondo,oo(n,0,0,e,l,t*.04),n.fill(),n.lineWidth=t*.03,n.strokeStyle=s.marco,s.neon&&(n.shadowColor=s.marco,n.shadowBlur=t*.05),oo(n,t*.02,t*.02,e-t*.04,l-t*.04,t*.04),n.stroke(),n.shadowBlur=0,s.bombillas){let x=2*(e+l);for(let m=0;m<40;m++){let p=m/40*x,E,w,y=t*.02;p<e?(E=p,w=y):p<e+l?(E=e-y,w=p-e):p<2*e+l?(E=e-(p-e-l),w=l-y):(E=y,w=l-(p-2*e-l));let b=(Math.floor(r*4)+m)%3!==0;n.fillStyle=b?s.bombillas:"#6a5a30",n.beginPath(),n.arc(Math.min(e-y,Math.max(y,E)),Math.min(l-y,Math.max(y,w)),t*.012,0,7),n.fill()}}let c=e*.05,u=l*.09,d=(e-c*2)/14,h=(l-u*2)/4,f=Math.max(1,d*.06);for(let g=0;g<4;g++)for(let x=0;x<14;x++){let m=i.g[g][x];if(m===null)continue;let p=c+x*d+f/2,E=u+g*h+f/2,w=d-f,y=h-f,b=g+","+x,A=m&&m!=="",C=A&&(i.modo==="texto"||i.resuelto||i.rev.has(Ba(m))||i.vis&&i.vis.has(b)||!/[A-ZÑÁÉÍÓÚÜ]/i.test(m));if(!A){n.fillStyle=s.vacia,oo(n,p,E,w,y,w*.08),n.fill(),n.fillStyle="rgba(255,255,255,.08)",n.fillRect(p+w*.1,E+y*.08,w*.8,y*.12);continue}let v=i.luz.has(b);n.fillStyle=v?s.luz:s.ficha,v&&(n.shadowColor=s.luz,n.shadowBlur=w*.5),oo(n,p,E,w,y,w*.08),n.fill(),n.shadowBlur=0,n.strokeStyle="rgba(0,0,0,.25)",n.lineWidth=1,n.stroke(),C&&!v&&(n.fillStyle=s.letra,n.font=`900 ${y*.72}px Arial, Helvetica, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(m.toUpperCase(),p+w/2,E+y*.55))}o&&(n.fillStyle=s.franja,oo(n,e*.04,l+o*.1,e*.92,o*.8,o*.2),n.fill(),n.strokeStyle="rgba(255,255,255,.6)",n.lineWidth=2,n.stroke(),n.fillStyle=s.franjaTxt,n.font=`900 ${o*.5}px Arial, Helvetica, sans-serif`,n.textAlign="center",n.textBaseline="middle",n.fillText(String(i.tema||"").toUpperCase(),e/2,l+o*.52))}var Jh=["#1f6bff","#ff2a2a","#ffd21a"],Zp={fortuna:{panel:"fortuna",fondo:1181188,niebla:[1181188,26,70],expo:.95},a2006:{panel:"a2006",fondo:666250,niebla:[666250,30,80],expo:1},piramides:{panel:"piramides",fondo:397882,niebla:[397882,30,80],expo:1,suelo:"oro"},pirazul:{panel:"piramides",fondo:397882,niebla:[397882,30,80],expo:1,suelo:"azul"},verano:{panel:"verano",fondo:1054768,niebla:[1054768,30,85],expo:1.05},neon:{panel:"neon",fondo:328206,niebla:[328206,28,75],expo:.95}};function ds(n,e,t,i=null){let s=document.createElement("canvas");s.width=n,s.height=e;let a=s.getContext("2d");t(a,n,e);let r=new Hn(s);return r.colorSpace=Nt,r.anisotropy=4,i&&(r.wrapS=r.wrapT=Cs,r.repeat.set(...i)),r}var Zh=n=>()=>(n=(n*9301+49297)%233280)/233280;function fo(n,e=1,t={}){return new Vt({color:0,emissive:16777215,emissiveMap:n,emissiveIntensity:e,roughness:.8,...t})}function ov(n){return ds(2048,2048,(e,t,i)=>{let s=Zh(11),a=t/2,r=i/2;if(n==="fortuna"){let o=e.createRadialGradient(a,r,40,a,r,t/2);o.addColorStop(0,"#6a1a14"),o.addColorStop(1,"#2a0806"),e.fillStyle=o,e.fillRect(0,0,t,i),e.save(),e.translate(a,r);for(let l=0;l<32;l++)e.rotate(Math.PI/16),e.fillStyle=l%2?"rgba(232,198,106,.16)":"rgba(0,0,0,.1)",e.beginPath(),e.moveTo(0,0),e.lineTo(t,-70),e.lineTo(t,70),e.fill();e.restore(),e.strokeStyle="#e8c66a",e.lineWidth=14,[380,620,900].forEach(l=>{e.beginPath(),e.arc(a,r,l,0,7),e.stroke()});for(let l=0;l<24;l++){let c=l/24*Math.PI*2;lv(e,a+Math.cos(c)*760,r+Math.sin(c)*760,34,"#ffe9a0")}}else if(n==="a2006"){e.fillStyle="#04103a",e.fillRect(0,0,t,i);for(let o=0;o<9;o++){let l=s()*t,c=s()*i,u=160+s()*160;for(let d=0;d<22;d++)e.strokeStyle=d%2?"rgba(60,120,255,.85)":"rgba(120,200,255,.55)",e.lineWidth=9,e.beginPath(),e.arc(l,c,u*(d/22),d*.5,d*.5+3.4),e.stroke()}e.strokeStyle="rgba(255,255,255,.75)",e.lineWidth=6;for(let o=0;o<6;o++)e.beginPath(),e.moveTo(a,r),e.lineTo(a+Math.cos(o+.3)*t,r+Math.sin(o+.3)*t),e.stroke()}else if(n==="neon"){e.fillStyle="#05030a",e.fillRect(0,0,t,i),e.globalAlpha=.5,e.fillStyle="#1a0a30";for(let l=0;l<400;l++)e.fillRect(s()*t,s()*i,3,3);e.globalAlpha=1;let o=["#ffd21a","#1fa3ff","#ff7a1a","#ff2a4a"];for(let l=0;l<9;l++)e.strokeStyle=o[l%4],e.lineWidth=16,e.shadowColor=o[l%4],e.shadowBlur=30,e.beginPath(),e.arc(a+160,r-60,380+l*70,.2,2.9),e.stroke();e.shadowBlur=0}else{let o=n==="piramides",l=n==="verano",c=e.createRadialGradient(a,r,30,a,r,t/2);c.addColorStop(0,l?"#f4f6ff":o?"#f2c25a":"#2a7aff"),c.addColorStop(1,l?"#c8d0e8":o?"#b8801a":"#0a2aa8"),e.fillStyle=c,e.fillRect(0,0,t,i);let u=[];for(let d=0;d<70;d++)u.push([s()*t,s()*i]);e.strokeStyle=l?"rgba(40,40,60,.55)":"rgba(255,255,255,.9)",e.lineWidth=16,u.forEach((d,h)=>{u.map((g,x)=>[Math.hypot(d[0]-g[0],d[1]-g[1]),x]).sort((g,x)=>g[0]-x[0]).slice(1,4).forEach(([,g])=>{g>h&&(e.beginPath(),e.moveTo(...d),e.lineTo(...u[g]),e.stroke())})}),e.globalAlpha=.25,e.fillStyle="#ffffff";for(let d=0;d<30;d++)e.save(),e.translate(s()*t,s()*i),e.rotate(s()*3),e.fillRect(-200,-8,400,16),e.restore();e.globalAlpha=1}})}function lv(n,e,t,i,s){n.fillStyle=s,n.beginPath();for(let a=0;a<10;a++){let r=a*Math.PI/5-Math.PI/2,o=a%2?i*.45:i;n.lineTo(e+Math.cos(r)*o,t+Math.sin(r)*o)}n.fill()}function cv(n){return ds(512,512,(e,t)=>{let s=t/8;for(let a=0;a<8;a++)for(let r=0;r<8;r++){let o=a*s,l=r*s,c=[o+s/2,l+s/2],u=n[(a*3+r*5)%n.length];[[[o,l],[o+s,l],1],[[o+s,l],[o+s,l+s],.75],[[o+s,l+s],[o,l+s],.45],[[o,l+s],[o,l],.65]].forEach(([d,h,f])=>{e.fillStyle=uv(u,f),e.beginPath(),e.moveTo(...d),e.lineTo(...h),e.lineTo(...c),e.closePath(),e.fill()})}},[10,2])}function uv(n,e){let t=new Fe(n);return t.multiplyScalar(e),"#"+t.getHexString()}function hv(n,e){return ds(1024,128,(t,i,s)=>{let a=Zh(n);t.fillStyle="#05060e",t.fillRect(0,0,i,s);for(let r=0;r<i;r+=16)t.fillStyle=e[Math.floor(a()*e.length)],t.globalAlpha=.5+a()*.5,t.fillRect(r+2,6,12,s-12);t.globalAlpha=1},[4,1])}function Qc(n,{color:e="#b04dff",fondo:t="#f4f6ff",alto:i=128,ancho:s=2048,glowc:a=null,espejo:r=!1}={}){let o=ds(s,i,(l,c,u)=>{l.fillStyle=t,l.fillRect(0,0,c,u),l.font=`900 ${u*.62}px "Arial Black", Arial`,l.textAlign="center",l.textBaseline="middle",a&&(l.shadowColor=a,l.shadowBlur=u*.25),l.fillStyle=e;let d=l.measureText(n).width,h=Math.max(1,Math.floor(c/(d+u)));for(let f=0;f<h;f++)l.fillText(n,(f+.5)*c/h,u/2)});return r&&(o.wrapS=Cs,o.repeat.x=-1),o}function $h(n,e,t,i,s=.06){let a=new le(new An(n,s,6,120,t),kn(i,2.5));return a.rotation.set(-Math.PI/2,0,Math.PI/2-t/2),a.position.y=e,a}var Va=n=>Math.PI-n/2;function dv(){return ds(512,512,(n,e,t)=>{for(let i=0;i<e;i++){let s=.55+.45*Math.sin(i/e*Math.PI*24);n.fillStyle=`rgb(${120*s+30},${10*s},${14*s})`,n.fillRect(i,0,1,t)}},[8,1])}function jp(n=15263984){let e=new gt,t=new Ns({color:n,metalness:.6,roughness:.25,clearcoat:1}),i=new le(new Et(3.6,.6,1.6),t);i.position.y=.55,e.add(i);let s=new le(new Et(.9,.35,1.58),t);s.position.set(1.55,.5,0),e.add(s);let a=new le(new Et(1.9,.55,1.45),new Ns({color:658970,metalness:.3,roughness:.05}));a.position.set(-.2,1.1,0),e.add(a);let r=new le(new Et(1.6,.06,1.42),t);r.position.set(-.25,1.4,0),e.add(r);let o=new yt(.34,.34,.26,20),l=Ye(1118481),c=Ye(13421772,{metalness:.9});return[[1.15,.8],[1.15,-.8],[-1.15,.8],[-1.15,-.8]].forEach(([u,d])=>{let h=new le(o,l);h.rotation.x=Math.PI/2,h.position.set(u,.34,d),e.add(h);let f=new le(new yt(.18,.18,.28,12),c);f.rotation.x=Math.PI/2,f.position.set(u,.34,d),e.add(f)}),[[1.98,.55],[1.98,-.55]].forEach(([u,d])=>{let h=new le(new Et(.05,.12,.35),kn(16777215,3));h.position.set(u,.62,d),e.add(h)}),e.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),e}function fv(n=13642346,e=3809296){let t=Da({body:n,legs:14266508,skin:14266508,hair:e}),i=new le(new oi(.32,.55,16,1,!0),Ye(n,{roughness:.5,side:tn}));i.position.y=.72,t.add(i);let s=new le(new ri(.12,.25,4,8),Ye(e,{roughness:.9}));return s.position.set(0,1.4,-.07),t.add(s),t}function pv(n,e,t,i,s){let a=new gt;a.userData.publico=!0;let r=new xa(new ri(.2,.35,3,8),new Vt({roughness:.8}),n),o=new xa(new Ii(.13,10,8),Ye(14266508),n),l=new dt,c=new Fe,u=Zh(5),d=s||[16730698,3832575,16765466,2797642,16777215,16743104,2236962,9063167],h=[];for(let f=0;f<n;f++){let g=f%t,x=(u()-.5)*e,m=.75+g*.6,p=i-g*.9;h.push([x,m,p]),l.makeTranslation(x,m,p),r.setMatrixAt(f,l),l.makeTranslation(x,m+.42,p),o.setMatrixAt(f,l),r.setColorAt(f,c.set(d[f%d.length]))}return a.add(r,o),a.userData.anim={cuerpos:r,cabezas:o,base:h,salto:0},a}function po(n,e,t,i,s,a){let r=new gt;r.position.set(i,0,s),r.rotation.y=a;for(let o=0;o<n;o++){let l=new le(new Et(e,.3,.6),Ye(15790320,{roughness:.4}));l.position.set(0,.15+o*.3,-o*.6),r.add(l);let c=new le(new Et(e,.05,.03),kn(t,2.5));c.position.set(0,.29+o*.3,-o*.6+.31),c.userData.tinte="b",r.add(c)}return r}function eu(n,e){let t=new gt;t.position.set(n,0,e);let i=new le(new yt(.12,.2,3.4,8),Ye(9067050));i.position.y=1.7,i.rotation.z=.12,t.add(i);for(let s=0;s<7;s++){let a=new le(new oi(.25,1.8,4),Ye(2793546));a.position.set(.2,3.4,0),a.rotation.set(Math.cos(s)*.4,s*.9,1.9),a.translateY(.8),t.add(a)}return t}function Kp(n,e,t){let i=new gt;n.add(i),n.background=new Fe(397882),n.fog=new mr(397882,30,80);let s=new Nr(12570879,2105408,1);i.add(s);let a=new Ur(16777215,1.5);a.position.set(4,16,10),a.castShadow=!0,a.shadow.mapSize.set(1024,1024),Object.assign(a.shadow.camera,{left:-14,right:14,top:14,bottom:-14,near:1,far:40}),i.add(a);let r=new Os(16732072,25,30,1.6);r.position.set(-8,6,2),i.add(r);let o=new Os(3836927,25,30,1.6);o.position.set(8,6,2),i.add(o);let l=new Os(16777215,12,9,1.5);l.position.set(0,4,0),i.add(l);let c=new Vt({roughness:.15,metalness:.35}),u=new le(new Ls(19,72),c);u.rotation.x=-Math.PI/2,u.receiveShadow=!0,i.add(u);let d=new le(new Ma(19,60,48),Ye(329230,{roughness:.9}));d.rotation.x=-Math.PI/2,d.position.y=-.01,i.add(d);let f=[-38,0,38].map(L=>L*Math.PI/180).map(L=>new P(Math.sin(L)*3.65,0,-Math.cos(L)*3.65)),g=Ye(16054011,{roughness:.3,metalness:.2}),x=new le(new yt(3.05,3.15,1,72),g);x.position.y=.5,x.receiveShadow=x.castShadow=!0,i.add(x);let m=new le(new An(3.12,.05,8,120),kn(3854591,2.5));m.rotation.x=Math.PI/2,m.position.y=.72,m.userData.tinte="a",i.add(m);let p=m.clone();p.material=kn(16732072,2.5),p.material.userData={},p.userData.tinte="b",p.position.y=.3,i.add(p);let E=new le(new Ma(Gn+.02,3.05,72),Ye(14673650,{metalness:.5,roughness:.25}));E.rotation.x=-Math.PI/2,E.position.y=1.005,i.add(E);let w=f.map(L=>Math.atan2(-L.z,L.x)),y=()=>{},b=Wp(i,w,{onClic:L=>y(L)}),A=new gt;i.add(A);{let L=Ye(15265528,{metalness:.8,roughness:.2});for(let I=0;I<40;I++){let X=I/40*Math.PI*2;if(w.some(xe=>Math.abs(Math.atan2(Math.sin(X-xe),Math.cos(X-xe)))<.32))continue;let ne=new le(new yt(.02,.02,.45,6),L);ne.position.set(Math.cos(X)*2.85,1.22,-Math.sin(X)*2.85),A.add(ne)}let H=new le(new An(2.85,.025,6,120),L);H.rotation.x=Math.PI/2,H.position.y=1.45,A.add(H)}let C=[],v=[],M=[2775807,14694970,15777824];f.forEach((L,H)=>{let I=new gt,X=2.98;I.position.set(L.x/3.65*X,1,L.z/3.65*X),I.rotation.y=Math.atan2(-L.x,-L.z),i.add(I);let ne=document.createElement("canvas");ne.width=512,ne.height=192;let xe=new Hn(ne);xe.colorSpace=Nt;let ce=new le(new Et(1.25,.5,.12),Ye(1711402,{metalness:.5}));ce.position.y=.32,ce.rotation.x=-.25,I.add(ce);let Je=new le(new li(1.18,.44),new Bn({map:xe,toneMapped:!1}));Je.position.set(0,.33,.065),Je.rotation.x=-.25,I.add(Je);let Rt=Da({body:M[H],legs:2236986,skin:[14266508,13145450,15254688][H],hair:[2759184,6961690,1118481][H]});Rt.position.copy(L),Rt.rotation.y=Math.atan2(-L.x,-L.z),i.add(Rt),C.push({g:I,c:ne,tex:xe,datos:{nombre:["AZUL","ROJO","AMARILLO"][H],dinero:0,activo:!1},color:Jh[H]}),v.push(Rt)});function R(L,H){let I=C[L];Object.assign(I.datos,H);let X=I.c.getContext("2d"),ne=512,xe=192,ce=I.datos;X.fillStyle="#0a0e1e",X.fillRect(0,0,ne,xe),X.fillStyle=I.color,X.fillRect(0,0,ne,64),ce.activo&&(X.strokeStyle="#ffffff",X.lineWidth=12,X.strokeRect(6,6,ne-12,xe-12)),X.fillStyle=L===2?"#111":"#fff",X.font="900 46px Arial",X.textAlign="center",X.textBaseline="middle",X.fillText(String(ce.nombre).toUpperCase().slice(0,16),ne/2,34),X.fillStyle="#ffe066",X.font='900 84px "Arial Black", Arial',X.fillText(ce.texto??ce.dinero+" \u20AC",ne/2,130),I.tex.needsUpdate=!0}C.forEach((L,H)=>R(H,{}));let F=new gt;i.add(F),F.visible=!1,[-19,19].forEach(L=>{let H=L*Math.PI/180,I=new le(new li(1.2,2),new Ns({color:13625599,transmission:.9,transparent:!0,opacity:.35,roughness:.05,side:tn}));I.position.set(Math.sin(H)*3.7,1,-Math.cos(H)*3.7),I.rotation.y=-H+Math.PI/2,F.add(I)});let q=Da({body:1711402,legs:1381663,skin:14266508,hair:2759184});q.position.set(-3.95,0,.35),q.rotation.y=1.15,i.add(q);let z=new le(new Et(.06,.3,.02),Ye(12593706));z.position.set(0,1.15,.15),q.add(z);let D=new le(new Et(.15,.2,.01),Ye(16777215));D.position.set(.3,.9,.2),q.add(D);let G=8.4,K=4.2,$=new gt;$.position.set(-7.6,0,-6.4),$.rotation.y=.62,i.add($);let re=document.createElement("canvas");re.width=1680,re.height=840;let j=new Hn(re);j.colorSpace=Nt,j.anisotropy=8;let se=new le(new Et(G+.4,K+.4,.4),Ye(1711402,{metalness:.6}));se.position.y=1+K/2,$.add(se);let ae=new le(new li(G,K),new Bn({map:j,toneMapped:!1}));ae.position.set(0,1+K/2,.21),$.add(ae);let Ue=new le(new Et(G+1.6,.25,2.2),Ye(15265528,{roughness:.3}));Ue.position.set(0,.12,.8),$.add(Ue);let Pe=new le(new Et(G+1.6,.05,.02),kn(3854591,2.5));Pe.position.set(0,.2,1.91),Pe.userData.tinte="a",$.add(Pe);let rt=fv(13642346);rt.position.set(0,.25,.95),$.add(rt);let Ze={x:2.5},et=new gt;et.position.set(7.2,0,-5.6),i.add(et);let Q=new le(new yt(2.2,2.3,.35,48),Ye(15790840,{metalness:.4,roughness:.25}));Q.position.y=.17,et.add(Q);let ie=new le(new An(2.25,.05,8,80),kn(3854591,2.5));ie.rotation.x=Math.PI/2,ie.position.y=.3,ie.userData.tinte="a",et.add(ie);let be=new gt;be.position.y=.35,et.add(be);let He=jp(15921910);be.add(He);let Ae=new gt;i.add(Ae);for(let L=0;L<4;L++){let H=new le(new Et(14,.6,.9),Ye(2764090));H.position.set(1,.3+L*.6,-12.4-L*.9),Ae.add(H)}let $e=pv(90,13,4,-12.4,null);Ae.add($e);let pt=new gt;pt.position.set(9.6,0,-9.6),pt.rotation.y=-.7,i.add(pt);{let L=new le(new Et(4.2,.6,2.4),Ye(1710628));L.position.y=.3,pt.add(L);let H=new le(new yt(.4,.4,.35,20),Ye(16777215));H.rotation.x=Math.PI/2,H.position.set(0,1,-.4),pt.add(H),[[-.5,1.2],[.5,1.25]].forEach(([X,ne])=>{let xe=new le(new yt(.28,.28,.02,16),Ye(13934624,{metalness:.9}));xe.position.set(X,ne+.3,-.4),pt.add(xe)});let I=new le(new Et(1.2,.08,.35),Ye(1118481));I.position.set(1.4,1.4,.2),pt.add(I),[[-1.5,.3,16747034],[0,-.9,3355443],[1.4,-.2,2775807]].forEach(([X,ne,xe])=>{let ce=Da({body:xe,legs:1118481});ce.position.set(X,.6,ne),pt.add(ce)})}pt.userData.banda=!0;let Me=new gt;i.add(Me);let tt=[],ft=[],je="piramides",xt=jc.piramides,It={color:397882};function rn(){Me.traverse(L=>{L.geometry&&L.geometry.dispose(),L.material&&[].concat(L.material).forEach(H=>{H.map&&H.map.dispose(),H.emissiveMap&&H.emissiveMap.dispose(),H.dispose()})}),Me.clear(),ft.length=0}function _t(L,H=16.5,I=12,X=.2,ne=2.75,xe={}){let ce=new le(new yt(H,H,I,64,1,!0,Va(ne)+X,ne),new Vt({map:L,side:Ut,roughness:.7,...xe}));return ce.position.y=I/2,ce.rotation.y=0,Me.add(ce),ce}function bt(L,H=10){let I=new le(new An(9,.12,6,60),Ye(3355460,{metalness:.8}));I.rotation.x=Math.PI/2,I.position.y=11,Me.add(I);for(let X=0;X<H;X++){let ne=X/H*Math.PI*2,xe=new gt;xe.position.set(Math.cos(ne)*9,11,Math.sin(ne)*9),Me.add(xe);let ce=new le(new oi(1.1,10,24,1,!0),new Bn({color:L[X%L.length],transparent:!0,opacity:.035,blending:Us,depthWrite:!1,side:tn}));ce.position.y=-5,xe.add(ce);let Je=new le(new yt(.2,.28,.4,10),Ye(1118481));xe.add(Je),ft.push({piv:xe,cone:ce,fase:X*1.7})}}function U(L,H,I,X,ne,xe=0,ce=2.2){let Je=Va(ce)+xe,Rt=new le(new yt(L,L,I,64,1,!0,Je,ce),new Vt({color:16054015,roughness:.3,emissive:4212832,side:tn}));if(Rt.position.y=H,Me.add(Rt),X){let vu=Qc(X,{color:ne,fondo:"#2a1060",glowc:ne,ancho:4096,espejo:!0}),Do=new le(new yt(L-.03,L-.03,I*.5,64,1,!0,Je+.1,ce-.2),fo(vu,1.6,{side:Ut}));Do.position.y=H,Me.add(Do)}return Rt}function Ft(L,H,I,X,ne=.03){I.forEach((xe,ce)=>{let Je=new le(new An(xe,.09,6,140),kn(X[ce%X.length],3));Je.rotation.x=Math.PI/2,Je.position.set(L,ne,H),Je.userData.tinteIdx=ce,Me.add(Je),tt.push(Je)})}let ot={fortuna(){_t(dv(),16.5,12);let L=new le(new Et(12,1.6,.4),Ye(3803654));L.position.set(0,8.5,-14.2),Me.add(L);let H=new le(new li(11.4,1.2),fo(Qc("LA RULETA DE LA FORTUNA",{color:"#ffe9a0",fondo:"#3a0a06",glowc:"#ffb000"}),1.4));H.position.set(0,8.5,-13.98),Me.add(H);for(let I=0;I<30;I++){let X=new le(new Ii(.09,8,6),kn(16771488,3));X.position.set(-6+I*12/29,I%2?9.35:7.65,-13.95),Me.add(X)}for(let I=-3;I<=3;I++){let X=new le(new yt(.25,.3,7,16),Ye(13211178,{metalness:.8,roughness:.3}));X.position.set(I*3.6,3.5,-14.6+Math.abs(I)*.9),Me.add(X)}bt([16771488,16756832],8)},a2006(){_t(ds(64,512,(I,X,ne)=>{let xe=I.createLinearGradient(0,0,0,ne);xe.addColorStop(0,"#5ab0ff"),xe.addColorStop(.5,"#1a5aff"),xe.addColorStop(1,"#0a2a9a"),I.fillStyle=xe,I.fillRect(0,0,X,ne)}),17,14,-.1,3.4,{emissive:1718938,emissiveIntensity:.6});let L=new le(new yt(15.4,15.4,2.4,64,1,!0,Va(2.65),2.65),fo(hv(3,["#ff2a6a","#ffd21a","#2aff8a","#33c6ff","#ff7a1a","#ffffff","#a04dff"]),1.4,{side:Ut}));L.position.y=1.2,Me.add(L),Me.add($h(15.35,2.45,2.65,16777215)),U(9.5,7.2,1,"LA RULETA DE LA SUERTE","#c070ff",.25,1.9),U(7.6,6,.6,null,null,-.3,1.5),U(11.5,8.4,.9,"LA RULETA DE LA SUERTE","#c070ff",-.95,1.5),Me.add(po(7,2.2,16765466,-4.2,-11.2,0),po(7,2.2,16765466,6,-11.2,0));let H=new le(new yt(4.6,4.8,.12,64),Ye(662106,{metalness:.5,roughness:.2}));H.position.y=.06,Me.add(H),Ft(0,0,[3.6,4,4.4],[16742938,16732072,16765466],.13),bt([16777215,10475775],10)},piramides(L){_t(cv(L?["#e8f0ff","#5a9aff","#2ae0a0","#ffffff"]:["#ffffff","#cfe0ff","#7ac8ff","#9af0c0","#ffffff"]),16.5,11,.2,2.75,{emissive:4214912,emissiveIntensity:.25});let I=$h(15.8,10.8,2.4,0,.25);I.material=Ye(15265528,{metalness:.6}),Me.add(I);for(let ne=0;ne<6;ne++){let xe=Math.PI+.45+ne*.45,ce=new le(new Et(.35,11,.35),Ye(15791359,{metalness:.5})),Je=Math.PI-1.2+ne*.48;ce.position.set(Math.sin(Je)*15.9,5.5,Math.cos(Je)*15.9),Me.add(ce)}let X=new le(new yt(13.6,13.6,.5,64,1,!0,Va(1.9),1.9),fo(Qc("LA RULETA DE LA SUERTE",{color:"#ffffff",fondo:"#0a1a50",espejo:!0}),1.1,{side:Ut}));X.position.y=2.9,Me.add(X),Me.add(po(7,2.2,3854591,-4.4,-11.2,0)),bt([16777215,12574975],10)},verano(){ot.piramides(!1);let L=new le(new yt(12.5,12.5,1.3,64,1,!0,Va(1.55),1.55),new Vt({color:16054015,roughness:.3,side:tn}));L.position.y=8.8,Me.add(L);let H=new le(new yt(12.4,12.4,.9,64,1,!0,Va(1.4),1.4),fo(Qc("LA RULETA DE LA SUERTE",{color:"#ff7a3a",fondo:"#f4f6ff",glowc:"#ff5a1a",ancho:2048,espejo:!0}),1.2,{side:Ut}));H.position.y=8.8,Me.add(H);for(let xe=0;xe<9;xe++){let ce=new le(new An(.42,.14,6,16,Math.PI),Ye(1735384,{emissive:670346}));ce.position.set(-1.2+xe*.85,.08,4.2),Me.add(ce);let Je=new le(new Et(.85,.12,.2),Ye(2792176));Je.position.set(-1.2+xe*.85,.06,4.2),Me.add(Je)}for(let xe=0;xe<6;xe++){let ce=new le(new An(.42,.14,6,16,Math.PI),Ye(1735384,{emissive:670346}));ce.position.set(4.4+xe*.85,.08,-1.5),Me.add(ce)}Me.add(eu(-11,-5),eu(11.5,-3.5),eu(-3.2,-10.6),eu(12,-8));let I=new gt;I.position.set(-12.2,0,.6);let X=new le(new yt(.04,.04,2.8,6),Ye(16777215));X.position.y=1.4,I.add(X);let ne=new le(new oi(1.3,.5,12,1,!0),new Vt({map:ds(256,32,(xe,ce,Je)=>{for(let Rt=0;Rt<12;Rt++)xe.fillStyle=Rt%2?"#ff3a3a":"#ffffff",xe.fillRect(Rt*ce/12,0,ce/12,Je)}),side:tn}));ne.position.y=2.8,I.add(ne),Me.add(I)},neon(){_t(ds(1024,512,(I,X,ne)=>{I.fillStyle="#0a0418",I.fillRect(0,0,X,ne);let xe=["#ff3a6a","#3ad0ff","#ffd21a","#ff7a1a","#a04dff"];for(let ce=0;ce<9;ce++)I.strokeStyle=xe[ce%5],I.lineWidth=6,I.shadowColor=xe[ce%5],I.shadowBlur=16,I.beginPath(),I.moveTo(0,60+ce*26),I.bezierCurveTo(X*.3,20+ce*30,X*.7,120+ce*24,X,50+ce*28),I.stroke()}),17,12,.1,2.95,{emissive:16777215,emissiveIntensity:.5}),Me.children[Me.children.length-1].material.emissiveMap=Me.children[Me.children.length-1].material.map,Ft(0,0,[3.5,4,4.6,5.3,6.1,7,8],[16765466,2073599,16742938,16722506],.04),Ft(-7.6,-6.4,[3,3.6],[12996095,2073599],.05);let L=po(8,3,3854591,3.4,-10.6,-.2);Me.add(L);let H=po(8,3,16742938,-3.8,-10.8,.2);Me.add(H);for(let I=0;I<4;I++){let X=$h(14.8-I*.5,2.6+I*.6,2.6,[16765466,2073599,16742938,16722506][I]);Me.add(X),tt.push(X),X.userData.tinteIdx=I}bt([16777215,10475775,16751320],12)}},T={neon:3872384};function _(L){Zp[L]||(L="piramides"),je=L;let H=Zp[L];xt=jc[H.panel],rn(),tt.length=0,L==="piramides"||L==="pirazul"?ot.piramides(L==="pirazul"):ot[L](),c.map?.dispose(),c.map=ov(L==="pirazul"?"azul":L),c.metalness=L==="verano"?.55:.35,c.roughness=L==="verano"?.06:.15,c.needsUpdate=!0,It.color=H.fondo,n.background.set(H.fondo),n.fog.color.set(H.niebla[0]),n.fog.near=H.niebla[1],n.fog.far=H.niebla[2],t&&(t.toneMappingExposure=H.expo),A.visible=L!=="fortuna"&&L!=="a2006",pt.visible=!["fortuna","a2006"].includes(L),b.setRetro(L==="fortuna"),se.material.color.set(L==="neon"?T.neon:L==="fortuna"?3807752:1711402),rt.children[0].material.color.set(L==="fortuna"?2779706:L==="verano"?16747050:L==="neon"?9054936:13642346),be.remove(He),He=jp(L==="fortuna"?11545114:L==="a2006"?15921910:L==="neon"?1118488:L==="verano"?6953562:1731327),be.add(He),ue(0),te()}let B=za(" LA RULETA DE LA SUERTE",""),W=0,J=!0;function ue(L){let H=re.getContext("2d");Kc(H,re.width,re.height,B,xt,{franja:.16,t:L}),j.needsUpdate=!0,J=!1}function de(){return je==="fortuna"?"LA RULETA DE LA FORTUNA":"LA RULETA DE LA SUERTE"}let Z=null;function te(){let L=Z?.neones||null;tt.forEach(H=>{let I=H.userData.defColor??(H.userData.defColor=H.material.emissive.getHex());H.material.emissive.set(L?L[H.userData.tinteIdx%L.length]:I)}),[m,p,Pe,ie].forEach((H,I)=>{let X=H.userData.defColor??(H.userData.defColor=H.material.emissive.getHex());H.material.emissive.set(L?L[I%L.length]:X)}),r.color.set(Z?.luzA??16732072),o.color.set(Z?.luzB??3836927),ft.forEach((H,I)=>{Z?.focos&&H.cone.material.color.set(Z.focos[I%Z.focos.length])}),n.background.set(Z?.fondo??It.color)}function _e(L){Z=L||null,te()}let Ne=Da({body:16742938,legs:2241365});Ne.visible=!1,i.add(Ne);let ge=new le(new An(.55,.06,8,36),kn(3407752,3));ge.rotation.x=Math.PI/2,ge.visible=!1,i.add(ge);let ve=L=>{let H=new P;return v[L].getWorldPosition(H),H};function De(L,H){if(Math.hypot(L,H)>17||Math.hypot(L,H)<3.3)return!0;let I=new P(L,0,H);return $.worldToLocal(I),Math.abs(I.x)<G/2+.8&&I.z<.4&&I.z>-1||Math.hypot(L-7.2,H+5.6)<2.4||H<-11.6||Math.hypot(L-9.6,H+9.6)<2.6}let Ce=null;function Xe(){Ce&&i.remove(Ce);let L=500,H=new Dt,I=new Float32Array(L*3),X=new Float32Array(L*3),ne=[],xe=[16765466,2059263,16722474,16777215,2797642].map(ce=>new Fe(ce));for(let ce=0;ce<L;ce++){I.set([(Math.random()-.5)*22,10+Math.random()*7,(Math.random()-.5)*18],ce*3);let Je=xe[ce%xe.length];X.set([Je.r,Je.g,Je.b],ce*3),ne.push(1+Math.random()*2)}H.setAttribute("position",new un(I,3)),H.setAttribute("color",new un(X,3)),Ce=new Sr(H,new va({size:.16,vertexColors:!0})),Ce.userData={vel:ne,t:0},i.add(Ce),$e.userData.anim.salto=4}function O(L){Ze.x=-G/2+(L+.5)*G/14}let fe=new dt;function ee(L,H){b.update(H*(window.__VEL||1),L),W+=H,(J||W>.25)&&(ue(L),W=0),ft.forEach(X=>{X.piv.rotation.z=Math.sin(L*.6+X.fase)*.5,X.piv.rotation.x=Math.cos(L*.45+X.fase*1.3)*.35}),be.rotation.y+=H*.25,rt.position.x+=(Ze.x-rt.position.x)*Math.min(1,H*4),rt.rotation.y=Math.abs(Ze.x-rt.position.x)>.1?Math.sign(Ze.x-rt.position.x)*1.2:.35,q.rotation.y=1.15+Math.sin(L*.6)*.2;let I=$e.userData.anim;if(I.salto>0||Math.floor(L*4)%8===0){I.salto=Math.max(0,I.salto-H);for(let X=0;X<I.base.length;X++){let[ne,xe,ce]=I.base[X],Je=I.salto>0?Math.abs(Math.sin(L*9+X))*.15:0;fe.makeTranslation(ne,xe+Je,ce),I.cuerpos.setMatrixAt(X,fe),fe.makeTranslation(ne,xe+.42+Je,ce),I.cabezas.setMatrixAt(X,fe)}I.cuerpos.instanceMatrix.needsUpdate=I.cabezas.instanceMatrix.needsUpdate=!0}if(tt.forEach((X,ne)=>{X.material.emissiveIntensity=2.4+Math.sin(L*2+ne)*.7}),Ce){let X=Ce.geometry.attributes.position;Ce.userData.t+=H;for(let ne=0;ne<X.count;ne++)X.setX(ne,X.getX(ne)+Math.sin(L*3+ne)*H*.5),X.setY(ne,X.getY(ne)-Ce.userData.vel[ne]*H);X.needsUpdate=!0,Ce.userData.t>9&&(i.remove(Ce),Ce=null)}}return _("piramides"),{root:i,update:ee,setTema:_e,setEtapa:_,celebrar:Xe,presentador:q,copre:rt,figs:v,atriles:C,setMarcador:R,walker:Ne,marca:ge,posAtril:ve,bloqueado:De,alturaEn:()=>0,rueda:b,panelG:$,peana:et,mamparas:F,gente:$e,get etapa(){return je},get estilo(){return xt},onClic(L){y=L},copreA:O,panel(L){B=L||za(de()),J=!0},panelActual:()=>B,pantalla(L,H={}){L==="info"?B=za(String(H.title||"").slice(0,50),(H.rows||[]).map(I=>I.join(": ")).join(" \xB7 ").slice(0,60)):B=za(de()),J=!0},refrescarPantalla(){b.setLogo(e.logoPantalla),J=!0},ocultarFig(L,H){v[L]&&(v[L].visible=!H)},bombilla(){},reset(){b.setFinal(!1),b.activar(-1),B=za(de()),J=!0,v.forEach(L=>{L.visible=!0}),Ze.x=2.5,C.forEach((L,H)=>R(H,{activo:!1,texto:null}))}}}var Di=(n,e,t,i,s=null)=>({neones:n,luzA:e,luzB:t,focos:i,fondo:s}),tu=[{t:"\u{1F697} \xA1Un coche!",coche:!0},{t:"5.000 \u20AC",v:5e3},{t:"10.000 \u20AC",v:1e4},{t:"20.000 \u20AC",v:2e4},{t:"\u2708\uFE0F Un viaje para dos",viaje:!0},{t:"3.000 \u20AC",v:3e3}],Wt={normal:{name:"Normal",emoji:"\u{1F3A1}",paleta:null,hashtag:"#LaRuletaDeLaSuerte"},blackfriday:{name:"Black Friday",emoji:"\u{1F6CD}\uFE0F",banner:"ESPECIAL BLACK FRIDAY",hashtag:"#RuletaBlackFriday",paneles:"blackfriday",mult:1.5,paleta:Di([1118481,16765466,16777215],16765466,2236962,[16765466,16777215],197379),saludo:"\xA1Bienvenidos al especial Black Friday de La ruleta de la suerte! Hoy todo est\xE1 rebajado\u2026 menos los premios, que est\xE1n m\xE1s gordos que nunca.",extra:["Los gajos valen m\xE1s, as\xED que \xA1a llenar el carrito!"]},navidad:{name:"Navidad",emoji:"\u{1F384}",banner:"ESPECIAL NAVIDAD",hashtag:"#RuletaNavidad",paneles:"navidad",festivo:!0,paleta:Di([16722474,2817898,16765466],16722474,2817898,[16777215,16730698],134150),saludo:"\xA1Feliz Navidad! Bienvenidos a La ruleta de la suerte m\xE1s navide\xF1a, con turr\xF3n, villancicos de nuestra banda y paneles con espumill\xF3n."},finano:{name:"Fin de A\xF1o",emoji:"\u{1F942}",banner:"ESPECIAL FIN DE A\xD1O",hashtag:"#RuletaFinDeA\xF1o",festivo:!0,paleta:Di([16765466,12632319,16777215],16765466,12632319,[16777215,16765466],197384),saludo:"\xA1Bienvenidos a la \xFAltima ruleta del a\xF1o! Antes de las uvas, unos cuantos giros."},pandemia:{name:"Pandemia",emoji:"\u{1F637}",banner:"PROGRAMA SIN P\xDABLICO",hashtag:"#RuletaEnCasa",paneles:"pandemia",sinPublico:!0,mamparas:!0,paleta:Di([3854591,16777215],3854591,16777215,[16777215]),saludo:"Bienvenidos a La ruleta de la suerte. Hoy estamos sin p\xFAblico, con mamparas y mucha distancia\u2026 pero con las mismas ganas de girar.",extra:["Un saludo enorme a todos los que nos veis desde casa. \xA1Este aplauso es para vosotros!"]},noche:{name:"Ruleta Noche",emoji:"\u{1F319}",banner:"LA RULETA DE LA SUERTE NOCHE",hashtag:"#RuletaNoche",paneles:"noche",festivo:!0,mult:5,premios:[{t:"100.000 \u20AC",v:1e5},{t:"50.000 \u20AC",v:5e4},{t:"\u{1F697} \xA1Un coche!",coche:!0},{t:"25.000 \u20AC",v:25e3},{t:"30.000 \u20AC",v:3e4},{t:"60.000 \u20AC",v:6e4}],paleta:Di([10505727,16765466,3854591],10505727,16765466,[16765466,10505727],328206),saludo:"\xA1Buenas noches! Bienvenidos a la gran noche de La ruleta de la suerte. Esta noche los gajos valen cinco veces m\xE1s\u2026 \xA1y en la ruleta final hay hasta cien mil euros!"},verano:{name:"Verano",emoji:"\u{1F3D6}\uFE0F",banner:"ESPECIAL VERANO",hashtag:"#RuletaVerano",paneles:"verano",plato:"verano",paleta:null,saludo:"\xA1Bienvenidos al especial de verano! Hoy el plat\xF3 huele a crema solar: tenemos olas, palmeras y una sombrilla. \xA1Que no se os queme la ruleta!"},halloween:{name:"Halloween",emoji:"\u{1F383}",banner:"ESPECIAL HALLOWEEN",hashtag:"#RuletaHalloween",paleta:Di([16742912,10170623,3211104],16742912,10170623,[16742912,10170623],328200),saludo:"\xA1Muajaja! Bienvenidos al especial de Halloween. Cuidado con la quiebra: esta noche da todav\xEDa m\xE1s miedo."},sanvalentin:{name:"San Valent\xEDn",emoji:"\u{1F498}",banner:"ESPECIAL SAN VALENT\xCDN",hashtag:"#RuletaSanValent\xEDn",paleta:Di([16731501,16764117],16731501,16764117,[16764117,16731501],786948),saludo:"\xA1Feliz San Valent\xEDn! Hoy la ruleta gira\u2026 \xA1con mucho amor!"},ninos:{name:"Ni\xF1os",emoji:"\u{1F9F8}",banner:"ESPECIAL NI\xD1OS",hashtag:"#RuletaNi\xF1os",festivo:!0,paleta:Di([16735400,16766474,3401471],16735400,3401471,[16777215,16766474]),saludo:"\xA1Hola, chicos y chicas! Bienvenidos al especial infantil. \xA1Hoy los m\xE1s peque\xF1os hacen girar la ruleta!"},especial300:{name:"Especial 300 suscriptores",emoji:"\u{1F3C6}",banner:"ESPECIAL 300 SUSCRIPTORES",hashtag:"#Ruleta300",festivo:!0,mult:2,paleta:Di([16765466,16777215,16756736],16765466,16777215,[16777215,16770688],460034),saludo:"\xA1Bienvenidos a esta ruleta tan especial! Est\xE1 dedicada a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB.",extra:["\xA1Ya sois trescientos! Muchas gracias. Hoy, para celebrarlo, los gajos valen el doble."]}};var mv="rs3d",Kh="media",gv=["mp3","ogg","wav","m4a"],xv=["png","webp","jpg","jpeg","svg"];function _v(){return new Promise((n,e)=>{if(!("indexedDB"in window))return e(new Error("Sin IndexedDB"));let t=indexedDB.open(mv,1);t.onupgradeneeded=()=>t.result.createObjectStore(Kh),t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error)})}async function jh(n,e){let t=await _v();return new Promise((i,s)=>{let a=t.transaction(Kh,n),r=a.objectStore(Kh),o=e(r);a.oncomplete=()=>i(o&&o.result),a.onerror=()=>s(a.error)})}var Wn={get:n=>jh("readonly",e=>e.get(n)).catch(()=>{}),put:(n,e)=>jh("readwrite",t=>t.put(e,n)),del:n=>jh("readwrite",e=>e.delete(n))};function vv(n){return new Promise(e=>{let t=new Audio,i=!1,s=a=>{i||(i=!0,e(a?n:null))};t.preload="metadata",t.onloadedmetadata=()=>s(!0),t.onerror=()=>s(!1),setTimeout(()=>s(!1),2500),t.src=n})}function yv(n){return new Promise(e=>{let t=new Image;t.onload=()=>e(n),t.onerror=()=>e(null),t.src=n,setTimeout(()=>e(null),2500)})}async function Qp(n,e,t){for(let i of e){let s=await t(`${n}.${i}`);if(s)return s}return null}var em={};function iu(n){return em["a:"+n]??=Qp(`audio/${n}`,gv,vv)}function Sv(n){return em["i:"+n]??=Qp(`logos/${n}`,xv,yv)}var nu={};async function Mv(n){let e=await Wn.get(n);return!e||!e.blob?null:(nu[n]&&URL.revokeObjectURL(nu[n].url),nu[n]={url:URL.createObjectURL(e.blob),name:e.name},nu[n])}async function ks(n,e){let t=await Mv(`${n}:${e.id}`);if(t)return{url:t.url,origen:"subido",nombre:t.name};let i=n==="musica"?e.archivosMusica:e.archivosLogo;for(let s of i||[]){let a=n==="musica"?await iu(s):await Sv(s);if(a)return{url:a,origen:"carpeta",nombre:a}}return null}async function Qh(n,e,t){await Wn.put(`${n}:${e}`,{blob:t,name:t.name,type:t.type,fecha:Date.now()})}async function ed(n,e){await Wn.del(`${n}:${e}`)}var mo=null;function tm(){return mo||(mo=new(window.AudioContext||window.webkitAudioContext)),mo.state==="suspended"&&mo.resume(),mo}var Ge={tone(n,e,t,i,s,a="sine",r=.2){let o=n.createOscillator(),l=n.createGain();o.type=a,o.frequency.setValueAtTime(i,t),l.gain.setValueAtTime(0,t),l.gain.linearRampToValueAtTime(r,t+.01),l.gain.exponentialRampToValueAtTime(1e-4,t+s),o.connect(l).connect(e),o.start(t),o.stop(t+s+.05)},noiseBuffer(n,e=2){let t=n.createBuffer(1,n.sampleRate*e,n.sampleRate),i=t.getChannelData(0);for(let s=0;s<i.length;s++)i[s]=Math.random()*2-1;return t},whoosh(n,e,t,i=.7,s=-1,a=1,r=.35){let o=n.createBufferSource();o.buffer=Ge.noiseBuffer(n,i+.1);let l=n.createBiquadFilter();l.type="bandpass",l.Q.value=1.2,l.frequency.setValueAtTime(300,t),l.frequency.exponentialRampToValueAtTime(3500,t+i*.6),l.frequency.exponentialRampToValueAtTime(600,t+i);let c=n.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(r,t+i*.55),c.gain.exponentialRampToValueAtTime(1e-4,t+i);let u=n.createStereoPanner?n.createStereoPanner():null;o.connect(l).connect(c),u?(u.pan.setValueAtTime(s,t),u.pan.linearRampToValueAtTime(a,t+i),c.connect(u).connect(e)):c.connect(e),o.start(t),o.stop(t+i+.1)},kick(n,e,t,i=.5){let s=n.createOscillator(),a=n.createGain();s.frequency.setValueAtTime(140,t),s.frequency.exponentialRampToValueAtTime(42,t+.18),a.gain.setValueAtTime(i,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.3),s.connect(a).connect(e),s.start(t),s.stop(t+.35)},hat(n,e,t,i=.06){let s=n.createBufferSource();s.buffer=Ge.noiseBuffer(n,.06);let a=n.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;let r=n.createGain();r.gain.setValueAtTime(i,t),r.gain.exponentialRampToValueAtTime(1e-4,t+.05),s.connect(a).connect(r).connect(e),s.start(t)},chord(n,e,t,i,s=2.5,a=.09){let r=n.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(400,t),r.frequency.exponentialRampToValueAtTime(4e3,t+.08),r.frequency.exponentialRampToValueAtTime(900,t+s),r.connect(e);for(let o of i)for(let l of[-6,6]){let c=n.createOscillator(),u=n.createGain();c.type="sawtooth",c.frequency.value=o,c.detune.value=l,u.gain.setValueAtTime(0,t),u.gain.linearRampToValueAtTime(a,t+.03),u.gain.setTargetAtTime(0,t+s*.5,s*.25),c.connect(u).connect(r),c.start(t),c.stop(t+s+.5)}},applause(n,e,t,i=3.5,s=.5){let a=Ge.noiseBuffer(n,.03),r=n.createGain();r.gain.setValueAtTime(1e-4,t),r.gain.exponentialRampToValueAtTime(s,t+.4),r.gain.setValueAtTime(s,t+i-1),r.gain.exponentialRampToValueAtTime(1e-4,t+i),r.connect(e);let o=Math.floor(i*160);for(let l=0;l<o;l++){let c=n.createBufferSource();c.buffer=a;let u=n.createBiquadFilter();u.type="bandpass",u.frequency.value=900+Math.random()*2200,u.Q.value=.8;let d=n.createGain();d.gain.value=.25+Math.random()*.5;let h=n.createStereoPanner?n.createStereoPanner():null;c.connect(u).connect(d),h?(h.pan.value=Math.random()*2-1,d.connect(h).connect(r)):d.connect(r),c.start(t+Math.random()*i)}}};function Ev(n,e){let t=new TextEncoder().encode(n+"|"+String(e).trim()),i=2166136261;for(let s of t)i^=s,i=Math.imul(i,16777619)>>>0;return i.toString(16).padStart(8,"0")}var nm={davefx:{id:"davefx",modelo:"es_ES-davefx-medium",licencia:"CC0",sexo:"m"},sharvard:{id:"sharvard",modelo:"es_ES-sharvard-medium",licencia:"CC BY 3.0 (Univ. de Edimburgo)",sexo:"m"},carlfm:{id:"carlfm",modelo:"es_ES-carlfm-x_low",licencia:"dominio p\xFAblico",sexo:"m"},ald:{id:"ald",modelo:"es_MX-ald-medium",licencia:"Unlicense",sexo:"m"},daniela:{id:"daniela",modelo:"es_AR-daniela-high",licencia:"CC BY-SA 4.0 (corpus OpenSLR 61)",sexo:"f"}},sm=["Voces sint\xE9ticas gen\xE9ricas (Piper TTS)",["Presentador: davefx (CC0)","Concursantes: sharvard (CC BY 3.0, Univ. de Edimburgo),","carlfm (dominio p\xFAblico), ald (Unlicense),","daniela (CC BY-SA 4.0, corpus OpenSLR 61)"]],im={p:null,q:null},nd="./",td=n=>im[n]||(im[n]=fetch(`${nd}voz/${n==="q"?"q/":""}index.json`).then(e=>e.ok?e.json():{}).catch(()=>({}))),ka=null,go=null,fs={activo:()=>!0,volumen:()=>1,rapida:()=>!1,velocidad:()=>1};function am(n){Object.assign(fs,n),n.base&&(nd=n.base),td("p"),td("q")}function bv(){if(go)return go;let n=speechSynthesis.getVoices();if(!n.length)return null;let e=n.filter(a=>/^es(-|_)ES/i.test(a.lang)),t=n.filter(a=>/^es/i.test(a.lang)),i=/(male|hombre|pablo|jorge|[áa]lvaro|diego|enrique|carlos|ra[uú]l|antonio|juan|miguel|manuel|sergio|david|xavier|javier)/i,s=/(female|mujer|helena|laura|lucia|luc[íi]a|m[oó]nica|paulina|elvira|conchita|sabina|marisol|esperanza|dalia|elena)/i;return go=e.find(a=>i.test(a.name))||e.find(a=>!s.test(a.name))||t.find(a=>i.test(a.name))||e[0]||t[0]||null,go}typeof speechSynthesis<"u"&&(speechSynthesis.onvoiceschanged=()=>{go=null});function id(){ka&&(ka.pause(),ka=null);try{speechSynthesis.cancel()}catch{}}async function rm(n,{voz:e="davefx",pregunta:t=!1,pitch:i=1,rate:s=1,minMs:a=0}={}){if(id(),!n||!fs.activo())return;let r=Ev(e,n),o=await td(t?"q":"p"),l=fs.velocidad();if(o[r]!=null){let c=new Audio(`${nd}voz/${t?"q/":""}${r}.mp3`);return c.volume=Math.min(1,fs.volumen()),c.playbackRate=fs.rapida()?1.25:1,ka=c,new Promise(u=>{let d=!1,h=()=>{d||(d=!0,ka===c&&(ka=null),u())};c.onended=h,c.onerror=h,c.onpause=h,c.play().catch(h),setTimeout(h,(o[r]*1e3+1500)/(fs.rapida()?1.25:1))})}return typeof speechSynthesis>"u"?new Promise(c=>setTimeout(c,Math.max(a,n.length*55)/l)):new Promise(c=>{let u=new SpeechSynthesisUtterance(n);u.lang="es-ES",u.pitch=i*(nm[e]?.sexo==="f"?1.1:.85),u.rate=s*(fs.rapida()?1.25:1),u.volume=Math.min(1,fs.volumen());let d=bv();d&&nm[e]?.sexo!=="f"&&(u.voice=d);let h=!1,f=()=>{h||(h=!0,c())};u.onend=f,u.onerror=f,setTimeout(f,Math.max(3e3,n.length*90)),speechSynthesis.speak(u)})}var Av={music:!0,musicVol:.8,sfx:!0,sfxVol:.9,publico:!0,publicoVol:.8,gradas:!0,voz:!0,lee:!0,leeVel:"normal",chistes:!0,monologo:!1,cabecera:"3d",etapa:"piramides",quality:"media",nombre:"",profesion:"",presentador:"Tito Giros",copresentadora:"Lola Letras",presentaciones:!0,platoLuz:"auto",giro:"boton",banda:!0},sd="1.1",he=Object.assign({},Av,JSON.parse(localStorage.getItem("rs3d_cfg")||"{}")),Tv=new Set;function xo(){localStorage.setItem("rs3d_cfg",JSON.stringify(he)),Tv.forEach(n=>n(he))}var wv=new Set(["aplausos","risas","ovacion","ooh"]),_o=[],su=new Set,ps=null,au=null,om=()=>{let n=tm();return au||(au=n.createGain(),au.connect(n.destination)),[n,au]};am({activo:()=>he.voz,volumen:()=>1,rapida:()=>he.leeVel==="rapida",velocidad:()=>window.__VEL||1});var lm={tecla:(n,e,t)=>Ge.tone(n,e,t,900,.05,"square",.05),pop:(n,e,t)=>{Ge.tone(n,e,t,500,.08,"sine",.2),Ge.tone(n,e,t+.05,900,.1,"sine",.15)},acierto:(n,e,t)=>{Ge.tone(n,e,t,1046,.18,"triangle",.22),Ge.tone(n,e,t+.09,1568,.45,"sine",.18),Ge.hat(n,e,t,.08)},fallo:(n,e,t)=>{Ge.kick(n,e,t,.35);let i=n.createBufferSource();i.buffer=Ge.noiseBuffer(n,.6);let s=n.createBiquadFilter();s.type="highpass",s.frequency.value=3500;let a=n.createGain();a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.55),i.connect(s).connect(a).connect(e),i.start(t);for(let r=0;r<8;r++)Ge.tone(n,e,t+.05+Math.random()*.4,2500+Math.random()*3e3,.08,"sine",.05);Ge.tone(n,e,t+.1,140,.5,"sawtooth",.06)},rayo:(n,e,t)=>{let i=n.createBufferSource();i.buffer=Ge.noiseBuffer(n,.5);let s=n.createBiquadFilter();s.type="bandpass",s.frequency.setValueAtTime(5e3,t),s.frequency.exponentialRampToValueAtTime(300,t+.45);let a=n.createGain();a.gain.setValueAtTime(.45,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.5),i.connect(s).connect(a).connect(e),i.start(t),Ge.tone(n,e,t,60,.4,"sawtooth",.1)},pulsador:(n,e,t)=>{Ge.tone(n,e,t,330,.25,"square",.12),Ge.tone(n,e,t,495,.25,"square",.08)},comodin:(n,e,t)=>{[784,988,1175,1568].forEach((i,s)=>Ge.tone(n,e,t+s*.07,i,.25,"triangle",.15))},tictac:(n,e,t)=>Ge.tone(n,e,t,1500,.03,"square",.05),aplausos:(n,e,t)=>Ge.applause(n,e,t,3,.4),ovacion:(n,e,t)=>Ge.applause(n,e,t,5,.55),ooh:(n,e,t)=>{let i=n.createOscillator(),s=n.createGain(),a=n.createBiquadFilter();a.type="lowpass",a.frequency.value=700,i.type="sawtooth",i.frequency.setValueAtTime(260,t),i.frequency.linearRampToValueAtTime(170,t+1),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.12,t+.15),s.gain.exponentialRampToValueAtTime(1e-4,t+1.1),i.connect(a).connect(s).connect(e),i.start(t),i.stop(t+1.2)},risas:(n,e,t)=>{for(let i=0;i<10;i++)Ge.tone(n,e,t+i*.13,300+Math.random()*200,.1,"sawtooth",.03);Ge.applause(n,e,t,1.6,.15)},badumtss:(n,e,t)=>{Ge.kick(n,e,t,.4),Ge.kick(n,e,t+.16,.4),Ge.hat(n,e,t+.35,.2)},banner:(n,e,t)=>{Ge.chord(n,e,t,[392,494,587],.6,.06),lm.rayo(n,e,t)},bote:(n,e,t)=>{[523,659,784,1046].forEach((i,s)=>Ge.tone(n,e,t+s*.12,i,.3,"triangle",.15))},clic:(n,e,t)=>{let i=n.createBufferSource();i.buffer=Ge.noiseBuffer(n,.03);let s=n.createBiquadFilter();s.type="bandpass",s.frequency.value=2400+Math.random()*600,s.Q.value=4;let a=n.createGain();a.gain.setValueAtTime(.5,t),a.gain.exponentialRampToValueAtTime(1e-4,t+.03),i.connect(s).connect(a).connect(e),i.start(t),Ge.tone(n,e,t,1800,.015,"square",.05)},ding:(n,e,t)=>{Ge.tone(n,e,t,1318,.25,"sine",.16),Ge.tone(n,e,t,2637,.12,"sine",.05)},volteo:(n,e,t)=>Ge.tone(n,e,t,700,.06,"triangle",.08),caja:(n,e,t)=>{[1568,2093].forEach((i,s)=>Ge.tone(n,e,t+s*.08,i,.2,"triangle",.12)),Ge.hat(n,e,t,.1)},resuelto:(n,e,t)=>{[523,659,784,1046,1318].forEach((i,s)=>Ge.tone(n,e,t+s*.09,i,.5,"triangle",.13)),Ge.chord(n,e,t+.45,[523,659,784],1.2,.05)},quiebra:(n,e,t)=>{[440,370,311,220].forEach((i,s)=>Ge.tone(n,e,t+s*.16,i,.25,"sawtooth",.08)),Ge.kick(n,e,t+.64,.4)},tension:(n,e,t)=>{for(let i=0;i<6;i++)Ge.tone(n,e,t+i*.18,110+i*15,.2,"sawtooth",.05)}},Rv={menu:{bpm:118,notas:[220,277,330,277,247,311,370,311],bajo:110},tension:{bpm:138,notas:[110,110,131,110,98,110,147,131],bajo:55},trilha:{bpm:122,notas:[196,247,294,247,220,262,330,262],bajo:98},musical:{bpm:104,notas:[262,330,392,523,392,330,294,349],bajo:131},velocidad:{bpm:150,notas:[330,392,440,392,330,294,262,294],bajo:82},panel:{bpm:112,notas:[262,330,392,330,294,349,440,349],bajo:131},diabolico:{bpm:160,notas:[147,147,175,147,131,147,196,175],bajo:73}},oe={aplicarNiveles(){ps?.a&&(ps.a.volume=he.music?he.musicVol:0),ps?.g&&(ps.g.gain.value=he.music?.5*he.musicVol:0)},async play(n,{volume:e=1}={}){let t=wv.has(n);if(t?!he.publico:!he.sfx)return null;e*=t?he.publicoVol:he.sfxVol;let i=await iu(n);if(i){let s=new Audio(i);return s.volume=Math.min(1,e),su.add(s),s.onended=()=>su.delete(s),s.play().catch(()=>{}),s}try{let[s,a]=om(),r=s.createGain();r.gain.value=e,r.connect(a),lm[n]?.(s,r,s.currentTime+.01),setTimeout(()=>r.disconnect(),7e3)}catch{}return null},async music(n,{etapa:e=null,cancion:t=!1}={}){this.stopMusic();let i={};ps=i;let s=null;if(e){let r=await ks("musica",e);r&&(s=r.url)}if(!s&&t&&_o.length&&(s=_o[Math.floor(Math.random()*_o.length)]),s||(s=await iu("musica_"+n)),ps!==i)return;if(s){let r=new Audio(s);r.loop=n!=="cabecera",r.volume=he.music?he.musicVol:0,i.a=r,r.play().catch(()=>{});return}let a=Rv[n];if(a)try{let[r,o]=om(),l=r.createGain();l.gain.value=he.music?.5*he.musicVol:0,l.connect(o);let c=r.currentTime+.05,u=0,d=60/a.bpm/2;i.iv=setInterval(()=>{for(;c<r.currentTime+.4;)Ge.tone(r,l,c,a.notas[u%a.notas.length],d*.9,"triangle",.05),u%4===0&&(Ge.kick(r,l,c,.12),Ge.tone(r,l,c,a.bajo,d*1.8,"sawtooth",.03)),u%2&&Ge.hat(r,l,c,.015),c+=d,u++},120),i.g=l}catch{}},hayCanciones:()=>_o.length>0,setCanciones(n){_o=n||[]},stopMusic(){let n=ps;if(ps=null,!!n&&(n.a&&n.a.pause(),n.iv)){clearInterval(n.iv);try{n.g.disconnect()}catch{}}},say(n,e="davefx",t={}){return window.__frasesUsadas&&window.__frasesUsadas.add(JSON.stringify({v:e,t:String(n).trim(),q:!!t.pregunta})),rm(String(n||"").replace(/<[^>]+>/g,""),{voz:e,...t})},stopVoice(){id()},stopAll(){su.forEach(n=>n.pause()),su.clear(),this.stopMusic(),this.stopVoice()}};var me=n=>document.querySelector(n),at=n=>String(n??"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),ru=()=>window.__VEL||1,ad="\u20AC",cm=n=>{ad=n},Cv=n=>{let e=Math.round(Number(n)||0);return(e<0?"-":"")+String(Math.abs(e)).replace(/\B(?=(\d{3})+(?!\d))/g,".")},Lv=[[/cien mil euros/gi,"diez millones de pesetas"],[/doscientos euros/gi,"veinte mil pesetas"],[/cincuenta euros/gi,"cinco mil pesetas"],[/(\d)\s*€/g,"$1 pesetas"],[/\beuros\b/gi,"pesetas"],[/\beuro\b/gi,"peseta"]],rd=n=>Lv.reduce((e,[t,i])=>e.replace(t,i),String(n)),Iv=n=>ad==="pts"?rd(n):n,xn=n=>Cv(n)+(ad==="pts"?" ptas.":" \u20AC");var od=n=>{n=n.slice();for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},Dn=n=>n[Math.floor(Math.random()*n.length)],Gs={abort:!0},yo=0,hi=new Set;function ou(){yo++;let n=[...hi];return hi=new Set,n.forEach(e=>e()),yo}function um(n){if(n!==yo)throw Gs}var ut=(n,e=yo)=>new Promise((t,i)=>{let s=()=>{clearTimeout(a),i(Gs)},a=setTimeout(()=>{hi.delete(s),e===yo?t():i(Gs)},n/ru());hi.add(s)}),zt=n=>new Promise((e,t)=>{let i=()=>t(Gs);hi.add(i),n.then(s=>{hi.delete(i),e(s)},s=>{hi.delete(i),t(s)})}),ld=n=>hi.add(n);addEventListener("unhandledrejection",n=>{n.reason===Gs&&n.preventDefault()});var So=class{constructor(e,t){this.ilimitado=!e||e===1/0,this.rest=this.ilimitado?1/0:e,this.onTick=t,this.corriendo=!1,this.terminado=!1,this.fin=new Promise(s=>this._res=s);let i=Math.ceil(this.rest);this._iv=setInterval(()=>{!this.corriendo||this.terminado||this.ilimitado||(this.rest=Math.max(0,this.rest-.1*ru()),this.onTick&&this.onTick(this.rest),Math.ceil(this.rest)!==i&&(i=Math.ceil(this.rest),i<=10&&oe.play("tictac")),this.rest<=0&&(this.terminado=!0,clearInterval(this._iv),this._res("TIEMPO")))},100),this._l=()=>this.stop(),hi.add(this._l),t&&t(this.rest)}start(){return this.corriendo=!0,this}pause(){this.corriendo=!1}sumar(e){this.ilimitado||(this.rest=Math.max(.1,this.rest+e)),this.onTick&&this.onTick(this.rest)}stop(){hi.delete(this._l),!this.terminado&&(this.terminado=!0,clearInterval(this._iv),this._res("STOP"))}},Pv=n=>n===1/0?"\u221E":String(Math.ceil(n)),vo=()=>me("#overlay");function Mo(){vo().classList.add("hidden"),vo().innerHTML=""}function hm(n){vo().innerHTML=n,vo().classList.remove("hidden"),vo().onclick=null}async function lu(n,e="",t=2600){oe.play("banner"),hm(`<div class="banner-at"><div class="ba-rayo">\u{1F3A1}</div><div class="ba-t">${at(n)}</div>${e?`<div class="ba-s">${at(e)}</div>`:""}</div>`),await ut(t),Mo()}async function Eo(n,e="",t=2600){hm(`<div class="txt">${n}</div>${e?`<div class="sub">${e}</div>`:""}`),await ut(t),Mo()}var Xn={hasta:0,nombre:"Presentador",quien:null};function sn(n,e=3500,t=null,i=null){let s=me("#bubble");s.innerHTML=`<b>${at(i||Xn.nombre)}:</b> ${at(n)}`,s.classList.toggle("conc",!!t),s.classList.remove("hidden"),Xn.hasta=performance.now()+e/ru(),Xn.quien=t}var Nv=n=>ut(Math.max(1400,String(n).length*55));async function We(n,e=3800){if(n=Iv(n),sn(n,e+1500),!he.voz)return Nv(n);await zt(oe.say(n,"davefx"))}async function ms(n,e){if(sn(e,2600,n.fig??null,n.nombre),!he.voz)return ut(1100);await zt(Promise.race([oe.say(e,n.voz||"sharvard"),new Promise(t=>setTimeout(t,4e3))]))}var fn={show(n){me("#hud").classList.toggle("hidden",!n)},set(n,e=-1){n&&(me("#hudConc").innerHTML=n.conc.map((t,i)=>`<div class="hc ${i===e?"act":""} ${t.fuera?"fuera":""} ${t.plantado?"plant":""}" style="--c:${t.color}"><div class="n">${at(t.nombre)}${t.humano&&t.nombre!=="T\xFA"?" (T\xDA)":""}</div><div class="d">${xn(t.dinero)}</div><div class="x">${t.ronda?(t.ronda>0?"+":"")+xn(t.ronda):""}${t.comodines?' <i class="cmd">'+"\u{1F0CF}".repeat(t.comodines)+"</i>":""}${t.plantado?" \u270B":""}</div></div>`).join(""))},timer(n,e=10){let t=me("#timer");t.textContent=Pv(n),t.classList.toggle("low",n!==1/0&&n<=e)},sinTimer(){me("#timer").textContent="",me("#timer").classList.remove("low")},ronda(n){me("#roundTxt").textContent=n}};function gs(n){let e=me("#hashtag");e.textContent=n||"",e.classList.toggle("on",!!n)}async function Ga(n,e="",t=3200){let i=me("#lower3"),s=document.createElement("div");s.className="l3",s.innerHTML=`<b>${at(n)}</b>${e?`<span>${at(e)}</span>`:""}`,i.appendChild(s),i.classList.remove("hidden"),await ut(t),s.classList.add("out"),setTimeout(()=>{s.remove(),i.children.length||i.classList.add("hidden")},400)}function dm(){me("#lower3").innerHTML="",me("#lower3").classList.add("hidden")}function yn(n,e=2500){let t=me("#toast");t.textContent=n,t.classList.remove("hidden"),clearTimeout(yn._t),yn._t=setTimeout(()=>t.classList.add("hidden"),e)}function Oi(n){let e=me("#actions");e.innerHTML="",(n||[]).forEach(t=>{let i=document.createElement("button");i.className="abtn "+(t.cls||""),i.textContent=t.label,i.onclick=s=>{s.stopPropagation(),oe.play("tecla"),e.innerHTML="",t.fn()},e.appendChild(i)})}async function fm(n,e=14e3){let t=me("#credits"),i=me("#creditsRoll");i.innerHTML=n.map(([a,r])=>`<h4>${at(a)}</h4>${r.map(at).join("<br>")}`).join(""),t.classList.remove("hidden","fadeout"),i.style.transition="none",i.style.transform="translateY(0)",i.offsetHeight;let s=e/ru();i.style.transition=`transform ${s}ms linear`,i.style.transform=`translateY(calc(-100% - ${t.clientHeight}px))`;try{await ut(e)}finally{t.classList.add("hidden")}}function cu(){me("#credits").classList.add("hidden")}var Be={bienvenida:"\xA1Muy buenas y bienvenidos a La ruleta de la suerte! Tres concursantes, una ruleta de veinticuatro gajos y un panel lleno de letras. \xA1Que empiece el giro!",bienvenidaFortuna:"\xA1Buenas tardes y bienvenidos a La ruleta de la fortuna! Pesetas, letras y una ruleta que no para de girar.",copreEntra:"Y como siempre, a mi lado, la reina del panel. \xA1Un aplauso para ella!",presentacion:"Vamos a conocer a los concursantes de hoy.",velocidad:"\xA1Prueba de velocidad! Las letras se destapan solas. El primero que pulse y acierte el panel se lleva el premio. \xA1Atentos!",velocidad2:"Segunda prueba de velocidad. Esta vale el doble. \xA1Dedos en el pulsador!",pulsa:"\xA1Has pulsado! Resuelve el panel.",nadie:"\xA1Nadie lo ha sacado! El panel se queda sin due\xF1o.",panel:"Vamos con el panel. Recordad: girad la ruleta, decid una consonante, y si est\xE1, el dinero se multiplica por cada letra. Las vocales se compran a cincuenta euros.",panelCrono:"\xA1Panel con crono! Cada jugada tiene solo diez segundos. Si se acaba el tiempo, pasa el turno. \xA1R\xE1pido!",cronoFin:"\xA1Se acab\xF3 el tiempo de la jugada!",turnoTuyo:"Te toca. \xBFGiras, compras vocal o resuelves?",gira:"\xA1A girar!",consonante:"Dime una consonante.",vocal:"\xBFQu\xE9 vocal compras?",noHay:"No hay ninguna. Lo siento, pierdes el turno.",yaDicha:"Esa letra ya se ha dicho. Pierdes el turno.",quiebra:"\xA1Quiebra! Pierdes todo lo acumulado en este panel.",pierde:"\xA1Pierde turno!",comodin:"\xA1Comod\xEDn! Gu\xE1rdalo bien: te salva de perder el turno.",usaComodin:"Usas el comod\xEDn y sigues jugando.",x2:"\xA1Gajo por dos! Si la consonante est\xE1, se duplica lo que llevas.",mitad:"\xA1Un medio! Si la consonante est\xE1, tu marcador se queda a la mitad.",melo:"\xA1Me lo quedo! Si aciertas la consonante, te quedas con el dinero de un rival.",selodoy:"\xA1Se lo doy! Si la consonante est\xE1, tienes que regalar tu dinero a un rival.",correcto:"\xA1Correcto! \xA1Panel resuelto!",incorrecto:"\xA1No es correcto! Pasa el turno.",sinConsonantes:"\xA1Ya no quedan consonantes! Solo se pueden comprar vocales o resolver.",sinNada:"Ya est\xE1 todo destapado. \xA1Resuelve!",vocalNo:"Necesitas cincuenta euros para comprar una vocal.",clasificacion:"As\xED queda el marcador despu\xE9s de todos los paneles.",final:"\xA1Ruleta final! Primero giramos la ruleta de los sobres para saber qu\xE9 premio te juegas. Luego eliges cuatro consonantes y una vocal, y tienes diez segundos para resolver.",finalSobre:"Ya tienes tu sobre. No lo abriremos hasta el final.",finalLetras:"Elige cuatro consonantes y una vocal.",finalTiempo:"\xA1Diez segundos! \xA1Resuelve!",finalGana:"\xA1Enhorabuena! \xA1Has resuelto el panel de la ruleta final!",finalPierde:"\xA1Oh! No ha podido ser. Vamos a ver qu\xE9 hab\xEDa en el sobre\u2026",coche:"\xA1Te llevas el coche! \xA1Arranca, que es tuyo!",despedida:"\xA1Y hasta aqu\xED la ruleta de hoy! Gracias por girar con nosotros. Ma\xF1ana m\xE1s letras, m\xE1s gajos y m\xE1s suerte. \xA1Hasta ma\xF1ana!",paseo:"\xA1Concursante, ve hasta tu marcador! Es el del aro verde, detr\xE1s de la ruleta.",entreno:"\xA1Bienvenido al entrenamiento! Aqu\xED la quiebra no duele. Practica tranquilo.",explora:"\xA1Bienvenido al plat\xF3! Date una vuelta, pero no gires la ruleta sin permiso.",exploraSaludo:"\xA1Hombre! \xBFVienes a concursar? Ponte en tu atril, que empezamos enseguida.",girarLibre:"Gira la ruleta todas las veces que quieras. \xA1Arrastra con el dedo o pulsa el bot\xF3n!",hayN:["\xA1Hay una!","\xA1Hay dos!","\xA1Hay tres!","\xA1Hay cuatro!","\xA1Hay cinco!","\xA1Hay seis!","\xA1Hay siete!","\xA1Hay ocho!"],ganaDia:"\xA1Tenemos ganador del d\xEDa! Se va a la ruleta final.",empate:"Hay empate en el marcador. \xA1Desempate con una prueba de velocidad!"},Yn={hola:"\xA1Hola a todos! Yo me encargo de las letras. \xA1Mucha suerte, concursantes!",destapa:["\xA1Vamos all\xE1!","\xA1Ah\xED van!","\xA1Mirad cu\xE1ntas!","\xA1Os destapo las letras!"],final:"\xA1Te deseo toda la suerte del mundo en el panel final!",adios:"\xA1Hasta ma\xF1ana! \xA1Os esperamos con m\xE1s letras!"},di={giro:["\xA1Giro!","Voy a girar.","\xA1Que gire!","Giro la ruleta."],vocal:["Compro una vocal.","Quiero una vocal."],resuelvo:["\xA1Resuelvo!","Quiero resolver.","\xA1Lo tengo!"],bien:["\xA1Toma!","\xA1Bien!","\xA1Lo sab\xEDa!","\xA1S\xED se\xF1or!"],mal:["\xA1No puede ser!","\xA1Vaya!","\xA1Qu\xE9 rabia!","\xA1Ay, mi dinero!"],hola:["\xA1Hola a todos!","\xA1Encantado de estar aqu\xED!","\xA1Hola, hola! \xA1Qu\xE9 nervios!"]},uu={A:"a",B:"be",C:"ce",D:"de",E:"e",F:"efe",G:"ge",H:"hache",I:"i",J:"jota",K:"ka",L:"ele",M:"eme",N:"ene",\u00D1:"e\xF1e",O:"o",P:"pe",Q:"cu",R:"erre",S:"ese",T:"te",U:"u",V:"uve",W:"uve doble",X:"equis",Y:"i griega",Z:"zeta"},hu=["\xBFSab\xE9is por qu\xE9 la ruleta nunca se marea? Porque lleva toda la vida dando vueltas.","Un concursante me pregunt\xF3 si pod\xEDa comprar una consonante. \xA1Le dije que eso ya es de otro concurso!","Mi m\xE9dico me dijo que hiciera ejercicio. As\xED que ahora giro la ruleta con las dos manos.","\xBFQu\xE9 le dice la Q a la U? \xA1Sin ti no soy nadie!","En casa me piden que resuelva las cosas r\xE1pido\u2026 y yo les pido una vocal.","La quiebra es como el lunes: nadie la quiere, pero siempre llega.","\xBFPor qu\xE9 la letra E est\xE1 tan contenta? Porque siempre sale en el panel.","Mi abuela juega en casa y siempre acierta el panel antes que nadie. \xA1Pero no quiere venir porque dice que aqu\xED hay mucha luz!"],xs=[{nombre:"Paco Gajos",prof:"Afinador de ruletas de feria",voz:"carlfm",emoji:"\u{1F9D4}"},{nombre:"Rosi Vocales",prof:"Coleccionista de sopas de letras",voz:"daniela",emoji:"\u{1F469}"},{nombre:"Ram\xF3n Quiebras",prof:"Contador de baldosas del pasillo",voz:"sharvard",emoji:"\u{1F468}\u200D\u{1F9B2}"},{nombre:"Toni Comod\xEDn",prof:"Instructor de siestas en hamaca",voz:"ald",emoji:"\u{1F9D1}"},{nombre:"Encarna Paneles",prof:"Campeona regional de crucigramas",voz:"daniela",emoji:"\u{1F475}"},{nombre:"Juli\xE1n Consonante",prof:"Inspector de colas del supermercado",voz:"ald",emoji:"\u{1F474}"},{nombre:"Merche Letras",prof:"Catadora oficial de churros",voz:"daniela",emoji:"\u{1F471}\u200D\u2640\uFE0F"},{nombre:"Ferm\xEDn Giros",prof:"Repartidor de propaganda en ascensores",voz:"carlfm",emoji:"\u{1F468}"},{nombre:"Lolo Pivote",prof:"Domador de paraguas rebeldes",voz:"sharvard",emoji:"\u{1F9D1}\u200D\u{1F9B1}"},{nombre:"Nati Ruletas",prof:"Probadora de colchones",voz:"daniela",emoji:"\u{1F469}\u200D\u{1F9B0}"}];var Wa={paneles:[{tema:"REFR\xC1N",f:"A QUIEN MADRUGA DIOS LE AYUDA"},{tema:"REFR\xC1N",f:"NO POR MUCHO MADRUGAR AMANECE M\xC1S TEMPRANO"},{tema:"REFR\xC1N",f:"M\xC1S VALE TARDE QUE NUNCA"},{tema:"REFR\xC1N",f:"EN BOCA CERRADA NO ENTRAN MOSCAS"},{tema:"REFR\xC1N",f:"PERRO LADRADOR POCO MORDEDOR"},{tema:"REFR\xC1N",f:"A CABALLO REGALADO NO LE MIRES EL DIENTE"},{tema:"REFR\xC1N",f:"CR\xCDA CUERVOS Y TE SACAR\xC1N LOS OJOS"},{tema:"REFR\xC1N",f:"DIME CON QUI\xC9N ANDAS Y TE DIR\xC9 QUI\xC9N ERES"},{tema:"REFR\xC1N",f:"AL MAL TIEMPO BUENA CARA"},{tema:"REFR\xC1N",f:"EL QUE LA SIGUE LA CONSIGUE"},{tema:"REFR\xC1N",f:"OJOS QUE NO VEN CORAZ\xD3N QUE NO SIENTE"},{tema:"REFR\xC1N",f:"M\xC1S VALE P\xC1JARO EN MANO QUE CIENTO VOLANDO"},{tema:"REFR\xC1N",f:"AGUA QUE NO HAS DE BEBER D\xC9JALA CORRER"},{tema:"REFR\xC1N",f:"QUIEN BIEN TE QUIERE TE HAR\xC1 LLORAR"},{tema:"REFR\xC1N",f:"A FALTA DE PAN BUENAS SON TORTAS"},{tema:"REFR\xC1N",f:"NO HAY MAL QUE POR BIEN NO VENGA"},{tema:"REFR\xC1N",f:"CADA OVEJA CON SU PAREJA"},{tema:"REFR\xC1N",f:"DE TAL PALO TAL ASTILLA"},{tema:"REFR\xC1N",f:"EL QUE ALGO QUIERE ALGO LE CUESTA"},{tema:"REFR\xC1N",f:"EN ABRIL AGUAS MIL"},{tema:"REFR\xC1N",f:"EN MARTES NI TE CASES NI TE EMBARQUES"},{tema:"REFR\xC1N",f:"CAMAR\xD3N QUE SE DUERME SE LO LLEVA LA CORRIENTE"},{tema:"REFR\xC1N",f:"MUCHO RUIDO Y POCAS NUECES"},{tema:"REFR\xC1N",f:"LA CURIOSIDAD MAT\xD3 AL GATO"},{tema:"REFR\xC1N",f:"QUIEN ROMPE PAGA"},{tema:"REFR\xC1N",f:"A BUEN ENTENDEDOR POCAS PALABRAS BASTAN"},{tema:"REFR\xC1N",f:"DONDE FUERES HAZ LO QUE VIERES"},{tema:"FRASE HECHA",f:"ESTAR EN LAS NUBES"},{tema:"FRASE HECHA",f:"CONSULTARLO CON LA ALMOHADA"},{tema:"FRASE HECHA",f:"TIRAR LA CASA POR LA VENTANA"},{tema:"FRASE HECHA",f:"SER UN CULO DE MAL ASIENTO"},{tema:"FRASE HECHA",f:"NO TENER PELOS EN LA LENGUA"},{tema:"FRASE HECHA",f:"ECHAR UNA MANO"},{tema:"FRASE HECHA",f:"COSTAR UN OJO DE LA CARA"},{tema:"FRASE HECHA",f:"DARSE CON UN CANTO EN LOS DIENTES"},{tema:"FRASE HECHA",f:"IRSE POR LAS RAMAS"},{tema:"FRASE HECHA",f:"TOMAR EL PELO"},{tema:"FRASE HECHA",f:"SER PAN COMIDO"},{tema:"FRASE HECHA",f:"ESTAR COMO UNA CABRA"},{tema:"FRASE HECHA",f:"BUSCAR UNA AGUJA EN UN PAJAR"},{tema:"FRASE HECHA",f:"MATAR DOS P\xC1JAROS DE UN TIRO"},{tema:"FRASE HECHA",f:"METER LA PATA"},{tema:"FRASE HECHA",f:"PONERSE LAS PILAS"},{tema:"FRASE HECHA",f:"HABLAR POR LOS CODOS"},{tema:"FRASE HECHA",f:"ESTAR HECHO UN FLAN"},{tema:"FRASE HECHA",f:"DORMIR COMO UN LIR\xD3N"},{tema:"FRASE HECHA",f:"QUEDARSE EN BLANCO"},{tema:"FRASE HECHA",f:"LLOVER A C\xC1NTAROS"},{tema:"FRASE HECHA",f:"SACAR LAS CASTA\xD1AS DEL FUEGO"},{tema:"FRASE HECHA",f:"PONER LAS CARTAS SOBRE LA MESA"},{tema:"FRASE HECHA",f:"DAR GATO POR LIEBRE"},{tema:"FRASE HECHA",f:"TENER LA SART\xC9N POR EL MANGO"},{tema:"FRASE HECHA",f:"HACER LA VISTA GORDA"},{tema:"FRASE HECHA",f:"ESTAR A LAS DURAS Y A LAS MADURAS"},{tema:"FRASE HECHA",f:"SER UNA GOTA EN EL OC\xC9ANO"},{tema:"COMIDA Y BEBIDA",f:"TORTILLA DE PATATAS CON CEBOLLA"},{tema:"COMIDA Y BEBIDA",f:"PAELLA DE MARISCO"},{tema:"COMIDA Y BEBIDA",f:"CHURROS CON CHOCOLATE"},{tema:"COMIDA Y BEBIDA",f:"GAZPACHO ANDALUZ BIEN FRESQUITO"},{tema:"COMIDA Y BEBIDA",f:"CROQUETAS CASERAS DE JAM\xD3N"},{tema:"COMIDA Y BEBIDA",f:"PULPO A LA GALLEGA"},{tema:"COMIDA Y BEBIDA",f:"FABADA ASTURIANA"},{tema:"COMIDA Y BEBIDA",f:"PIMIENTOS DE PADR\xD3N"},{tema:"COMIDA Y BEBIDA",f:"CALAMARES A LA ROMANA"},{tema:"COMIDA Y BEBIDA",f:"BOCADILLO DE CALAMARES"},{tema:"COMIDA Y BEBIDA",f:"MACEDONIA DE FRUTAS"},{tema:"COMIDA Y BEBIDA",f:"LENTEJAS CON CHORIZO"},{tema:"COMIDA Y BEBIDA",f:"ARROZ CON LECHE Y CANELA"},{tema:"COMIDA Y BEBIDA",f:"CAF\xC9 CON LECHE Y TOSTADAS"},{tema:"COMIDA Y BEBIDA",f:"ZUMO DE NARANJA NATURAL"},{tema:"COMIDA Y BEBIDA",f:"TARTA DE QUESO AL HORNO"},{tema:"COMIDA Y BEBIDA",f:"SOPA DE AJO"},{tema:"COMIDA Y BEBIDA",f:"ENSALADA MIXTA CON AT\xDAN"},{tema:"COMIDA Y BEBIDA",f:"PATATAS BRAVAS CON ALIOLI"},{tema:"COMIDA Y BEBIDA",f:"TURR\xD3N DE JIJONA"},{tema:"COMIDA Y BEBIDA",f:"MAZAP\xC1N DE TOLEDO"},{tema:"COMIDA Y BEBIDA",f:"CORDERO ASADO"},{tema:"COMIDA Y BEBIDA",f:"HUEVOS ROTOS CON JAM\xD3N"},{tema:"COMIDA Y BEBIDA",f:"MAGDALENAS RECI\xC9N HECHAS"},{tema:"COSAS",f:"UN PARAGUAS AMARILLO"},{tema:"COSAS",f:"LA LLAVE DEL TRASTERO"},{tema:"COSAS",f:"UNA BOMBILLA DE BAJO CONSUMO"},{tema:"COSAS",f:"EL MANDO DE LA TELEVISI\xD3N"},{tema:"COSAS",f:"UNA MALETA CON RUEDAS"},{tema:"COSAS",f:"LAS GAFAS DE SOL"},{tema:"COSAS",f:"UN CEPILLO DE DIENTES EL\xC9CTRICO"},{tema:"COSAS",f:"UNA LINTERNA SIN PILAS"},{tema:"COSAS",f:"EL CARGADOR DEL M\xD3VIL"},{tema:"COSAS",f:"UNA TAZA DE PORCELANA"},{tema:"COSAS",f:"UN RELOJ DE CUCO"},{tema:"COSAS",f:"UNA ALFOMBRA PERSA"},{tema:"COSAS",f:"EL BOTIQU\xCDN DE PRIMEROS AUXILIOS"},{tema:"COSAS",f:"UN SACAPUNTAS DE COLORES"},{tema:"COSAS",f:"LA AGENDA DE TEL\xC9FONOS"},{tema:"COSAS",f:"UNA HAMACA EN EL JARD\xCDN"},{tema:"COSAS",f:"UN MOLINILLO DE CAF\xC9"},{tema:"COSAS",f:"UNA PECERA REDONDA"},{tema:"COSAS",f:"EL BUZ\xD3N DE CORREOS"},{tema:"COSAS",f:"UNA REGADERA DE PL\xC1STICO"},{tema:"COSAS",f:"UN GLOBO TERR\xC1QUEO"},{tema:"LUGAR",f:"LA PLAZA MAYOR"},{tema:"LUGAR",f:"UNA CASA RURAL EN LA MONTA\xD1A"},{tema:"LUGAR",f:"EL PARQUE DE ATRACCIONES"},{tema:"LUGAR",f:"LA SALA DE ESPERA DEL DENTISTA"},{tema:"LUGAR",f:"UN FARO JUNTO AL MAR"},{tema:"LUGAR",f:"LA ESTACI\xD3N DE TREN"},{tema:"LUGAR",f:"EL MERCADO DE ABASTOS"},{tema:"LUGAR",f:"UNA CUEVA CON ESTALACTITAS"},{tema:"LUGAR",f:"LA BIBLIOTECA MUNICIPAL"},{tema:"LUGAR",f:"EL PATIO DEL COLEGIO"},{tema:"LUGAR",f:"UNA ISLA DESIERTA"},{tema:"LUGAR",f:"LA TERMINAL DEL AEROPUERTO"},{tema:"LUGAR",f:"UN CHIRINGUITO EN LA PLAYA"},{tema:"LUGAR",f:"EL CAMERINO DEL TEATRO"},{tema:"LUGAR",f:"LA CIMA DEL EVEREST"},{tema:"LUGAR",f:"EL ZOOL\xD3GICO DE LA CIUDAD"},{tema:"LUGAR",f:"UN PUEBLO BLANCO DE ANDALUC\xCDA"},{tema:"LUGAR",f:"LA PISCINA MUNICIPAL"},{tema:"LUGAR",f:"EL ASCENSOR DEL EDIFICIO"},{tema:"ANIMALES",f:"UN PERRO SALCHICHA"},{tema:"ANIMALES",f:"EL OSO PANDA"},{tema:"ANIMALES",f:"UNA JIRAFA DE CUELLO LARGO"},{tema:"ANIMALES",f:"EL LINCE IB\xC9RICO"},{tema:"ANIMALES",f:"UN CANGURO CON SU CR\xCDA"},{tema:"ANIMALES",f:"LA BALLENA AZUL"},{tema:"ANIMALES",f:"UN LORO QUE HABLA"},{tema:"ANIMALES",f:"EL CABALLITO DE MAR"},{tema:"ANIMALES",f:"UNA MANADA DE ELEFANTES"},{tema:"ANIMALES",f:"EL \xC1GUILA REAL"},{tema:"ANIMALES",f:"UN GATO PERSA"},{tema:"ANIMALES",f:"LA TORTUGA BOBA"},{tema:"ANIMALES",f:"UNA COLONIA DE PING\xDCINOS"},{tema:"ANIMALES",f:"EL CAMALE\xD3N CAMBIA DE COLOR"},{tema:"ANIMALES",f:"UN BURRO CARGADO DE PAJA"},{tema:"PROFESI\xD3N",f:"BOMBERO FORESTAL"},{tema:"PROFESI\xD3N",f:"PROFESORA DE INFANTIL"},{tema:"PROFESI\xD3N",f:"CONDUCTOR DE AUTOB\xDAS"},{tema:"PROFESI\xD3N",f:"PELUQUERA CANINA"},{tema:"PROFESI\xD3N",f:"ASTRONAUTA"},{tema:"PROFESI\xD3N",f:"FONTANERO DE GUARDIA"},{tema:"PROFESI\xD3N",f:"CAMARERO DE PISO"},{tema:"PROFESI\xD3N",f:"PANADERO MADRUGADOR"},{tema:"PROFESI\xD3N",f:"SOCORRISTA DE PLAYA"},{tema:"PROFESI\xD3N",f:"DOMADOR DE CABALLOS"},{tema:"PROFESI\xD3N",f:"CARTERO RURAL"},{tema:"PROFESI\xD3N",f:"ARQUITECTA DE INTERIORES"},{tema:"PROFESI\xD3N",f:"PILOTO DE AVIONETA"},{tema:"PROFESI\xD3N",f:"ENFERMERA DE NOCHE"},{tema:"PROFESI\xD3N",f:"JARDINERO MUNICIPAL"},{tema:"PROFESI\xD3N",f:"RELOJERO ARTESANO"},{tema:"ACCI\xD3N",f:"HACER LA COMPRA DEL MES"},{tema:"ACCI\xD3N",f:"SACAR AL PERRO DE PASEO"},{tema:"ACCI\xD3N",f:"TENDER LA ROPA AL SOL"},{tema:"ACCI\xD3N",f:"RESERVAR MESA PARA CENAR"},{tema:"ACCI\xD3N",f:"MONTAR UN MUEBLE SIN INSTRUCCIONES"},{tema:"ACCI\xD3N",f:"APRENDER A NADAR"},{tema:"ACCI\xD3N",f:"REGAR LAS PLANTAS DEL BALC\xD3N"},{tema:"ACCI\xD3N",f:"BAILAR UN PASODOBLE"},{tema:"ACCI\xD3N",f:"HACER UNA FOTO DE GRUPO"},{tema:"ACCI\xD3N",f:"ABRIR LOS REGALOS DE REYES"},{tema:"ACCI\xD3N",f:"ESPERAR EL AUTOB\xDAS"},{tema:"ACCI\xD3N",f:"PINTAR LAS PAREDES DEL SAL\xD3N"},{tema:"ACCI\xD3N",f:"COLGAR UN CUADRO TORCIDO"},{tema:"ACCI\xD3N",f:"APAGAR LAS VELAS DE LA TARTA"},{tema:"ACCI\xD3N",f:"GIRAR LA RULETA"},{tema:"ACCI\xD3N",f:"COMPRAR UNA VOCAL"},{tema:"ACCI\xD3N",f:"RESOLVER EL PANEL"},{tema:"DEPORTE",f:"UN PARTIDO DE TENIS"},{tema:"DEPORTE",f:"LA VUELTA CICLISTA"},{tema:"DEPORTE",f:"GOL EN EL \xDALTIMO MINUTO"},{tema:"DEPORTE",f:"SALTO DE LONGITUD"},{tema:"DEPORTE",f:"UNA MARAT\xD3N POPULAR"},{tema:"DEPORTE",f:"TIRO CON ARCO"},{tema:"DEPORTE",f:"CAMPEONATO DE NATACI\xD3N"},{tema:"DEPORTE",f:"PARTIDO DE BALONCESTO"},{tema:"DEPORTE",f:"ESQU\xCD DE FONDO"},{tema:"DEPORTE",f:"CARRERA DE RELEVOS"},{tema:"DEPORTE",f:"PENALTI EN LA PR\xD3RROGA"},{tema:"DEPORTE",f:"LA PELOTA VASCA"},{tema:"DEPORTE",f:"UNA PARTIDA DE AJEDREZ"},{tema:"EN LA CASA",f:"LA LAVADORA CENTRIFUGANDO"},{tema:"EN LA CASA",f:"EL SOF\xC1 DEL SAL\xD3N"},{tema:"EN LA CASA",f:"UNA LITERA PARA LOS NI\xD1OS"},{tema:"EN LA CASA",f:"LA NEVERA LLENA DE IMANES"},{tema:"EN LA CASA",f:"EL CAJ\xD3N DE LOS CUBIERTOS"},{tema:"EN LA CASA",f:"LA ESTANTER\xCDA DE LIBROS"},{tema:"EN LA CASA",f:"EL GRIFO QUE GOTEA"},{tema:"EN LA CASA",f:"LA PERSIANA DEL DORMITORIO"},{tema:"EN LA CASA",f:"UN ARMARIO EMPOTRADO"},{tema:"EN LA CASA",f:"LA MESA DEL COMEDOR"},{tema:"NATURALEZA",f:"UN ARCO\xCDRIS DESPU\xC9S DE LA TORMENTA"},{tema:"NATURALEZA",f:"LAS HOJAS SECAS DEL OTO\xD1O"},{tema:"NATURALEZA",f:"UN VOLC\xC1N EN ERUPCI\xD3N"},{tema:"NATURALEZA",f:"LA LUNA LLENA"},{tema:"NATURALEZA",f:"UNA CASCADA DE AGUA CRISTALINA"},{tema:"NATURALEZA",f:"EL BOSQUE ENCANTADO"},{tema:"NATURALEZA",f:"LAS DUNAS DEL DESIERTO"},{tema:"NATURALEZA",f:"UNA LLUVIA DE ESTRELLAS"},{tema:"NATURALEZA",f:"LOS CAMPOS DE GIRASOLES"},{tema:"NATURALEZA",f:"LA PUESTA DE SOL"},{tema:"FIESTAS",f:"LAS CAMPANADAS DE FIN DE A\xD1O"},{tema:"FIESTAS",f:"LA CABALGATA DE REYES"},{tema:"FIESTAS",f:"EL ROSC\xD3N CON SORPRESA"},{tema:"FIESTAS",f:"LA NOCHE DE SAN JUAN"},{tema:"FIESTAS",f:"LOS FUEGOS ARTIFICIALES"},{tema:"FIESTAS",f:"LA VERBENA DEL BARRIO"},{tema:"FIESTAS",f:"EL DISFRAZ DE CARNAVAL"},{tema:"FIESTAS",f:"LAS UVAS DE LA SUERTE"},{tema:"FIESTAS",f:"UNA BODA EN PRIMAVERA"},{tema:"FIESTAS",f:"LA FIESTA SORPRESA"},{tema:"TRANSPORTE",f:"UN TREN DE ALTA VELOCIDAD"},{tema:"TRANSPORTE",f:"EL BARCO DE VAPOR"},{tema:"TRANSPORTE",f:"UNA BICICLETA T\xC1NDEM"},{tema:"TRANSPORTE",f:"EL GLOBO AEROST\xC1TICO"},{tema:"TRANSPORTE",f:"UN TAXI LIBRE"},{tema:"TRANSPORTE",f:"EL TELEF\xC9RICO"},{tema:"TRANSPORTE",f:"UN PATINETE EL\xC9CTRICO"},{tema:"TRANSPORTE",f:"EL AUTOB\xDAS DE DOS PISOS"},{tema:"M\xDASICA",f:"UNA GUITARRA ESPA\xD1OLA"},{tema:"M\xDASICA",f:"LA BANDA DEL PUEBLO"},{tema:"M\xDASICA",f:"UN CONCIERTO AL AIRE LIBRE"},{tema:"M\xDASICA",f:"EL SOLO DE BATER\xCDA"},{tema:"M\xDASICA",f:"UN PIANO DE COLA"},{tema:"M\xDASICA",f:"LA ORQUESTA SINF\xD3NICA"},{tema:"M\xDASICA",f:"CANTAR EN LA DUCHA"},{tema:"M\xDASICA",f:"UN VILLANCICO POPULAR"},{tema:"PERSONAJE",f:"EL RATONCITO P\xC9REZ"},{tema:"PERSONAJE",f:"LOS TRES REYES MAGOS"},{tema:"PERSONAJE",f:"PAP\xC1 NOEL"},{tema:"PERSONAJE",f:"CAPERUCITA ROJA"},{tema:"PERSONAJE",f:"EL FLAUTISTA DE HAMEL\xCDN"},{tema:"PERSONAJE",f:"LA BELLA DURMIENTE"},{tema:"PERSONAJE",f:"EL GATO CON BOTAS"},{tema:"PERSONAJE",f:"BLANCANIEVES"},{tema:"PERSONAJE",f:"EL HOMBRE DEL SACO"},{tema:"PERSONAJE",f:"PULGARCITO"},{tema:"TIEMPO LIBRE",f:"UN CRUCIGRAMA DEL PERI\xD3DICO"},{tema:"TIEMPO LIBRE",f:"UNA PARTIDA DE PARCH\xCDS"},{tema:"TIEMPO LIBRE",f:"UN PUZLE DE MIL PIEZAS"},{tema:"TIEMPO LIBRE",f:"IR AL CINE EL DOMINGO"},{tema:"TIEMPO LIBRE",f:"UNA EXCURSI\xD3N EN BICICLETA"},{tema:"TIEMPO LIBRE",f:"LA SIESTA DE VERANO"},{tema:"TIEMPO LIBRE",f:"UNA BARBACOA CON AMIGOS"},{tema:"TIEMPO LIBRE",f:"VER UNA SERIE EN EL SOF\xC1"}],especiales:{blackfriday:[{tema:"OFERTAS",f:"DESCUENTOS DE INFARTO"},{tema:"OFERTAS",f:"EL CARRITO DE LA COMPRA"},{tema:"OFERTAS",f:"REBAJAS HASTA EL CINCUENTA POR CIENTO"},{tema:"OFERTAS",f:"LA COLA DEL CENTRO COMERCIAL"},{tema:"OFERTAS",f:"COMPRAR SIN MIRAR EL PRECIO"},{tema:"OFERTAS",f:"UNA GANGA IRRESISTIBLE"}],navidad:[{tema:"NAVIDAD",f:"EL \xC1RBOL DE NAVIDAD"},{tema:"NAVIDAD",f:"LA CESTA DE NAVIDAD"},{tema:"NAVIDAD",f:"EL BEL\xC9N DEL SAL\xD3N"},{tema:"NAVIDAD",f:"LA LOTER\xCDA DE NAVIDAD"},{tema:"NAVIDAD",f:"TURR\xD3N DE CHOCOLATE"},{tema:"NAVIDAD",f:"LA CARTA A LOS REYES MAGOS"},{tema:"NAVIDAD",f:"UN JERSEY DE RENOS"}],verano:[{tema:"VERANO",f:"CREMA SOLAR"},{tema:"VERANO",f:"UN CASTILLO DE ARENA"},{tema:"VERANO",f:"LA TOALLA EN LA PLAYA"},{tema:"VERANO",f:"UN HELADO DE FRESA"},{tema:"VERANO",f:"LAS VACACIONES DE AGOSTO"},{tema:"VERANO",f:"UNA SOMBRILLA DE RAYAS"},{tema:"VERANO",f:"BA\xD1O EN LA PISCINA"},{tema:"VERANO",f:"CHANCLAS Y BA\xD1ADOR"}],noche:[{tema:"GRAN NOCHE",f:"UNA NOCHE DE ESTRELLAS"},{tema:"GRAN NOCHE",f:"EL PREMIO GORDO"},{tema:"GRAN NOCHE",f:"GALA DE GRAN NOCHE"},{tema:"GRAN NOCHE",f:"CIEN MIL EUROS EN JUEGO"},{tema:"GRAN NOCHE",f:"LA SUERTE EST\xC1 DE NUESTRO LADO"}],pandemia:[{tema:"EN CASA",f:"LAVARSE LAS MANOS"},{tema:"EN CASA",f:"APLAUSOS EN EL BALC\xD3N"},{tema:"EN CASA",f:"VIDEOLLAMADA CON LA FAMILIA"},{tema:"EN CASA",f:"PAN CASERO EN EL HORNO"},{tema:"EN CASA",f:"TELETRABAJO EN PIJAMA"},{tema:"EN CASA",f:"DISTANCIA DE SEGURIDAD"}]}};var pm="SRNDLCTMPBGVYQHFZJ\xD1XKW".split(""),Ov="AEOIU".split(""),bo=n=>`El tema es: ${n}.`,dd=n=>`La ${uu[n]||n}.`;function Uv(n){let e=window.PANELES_EXTRA&&window.PANELES_EXTRA.paneles||[];return{base:[...Wa.paneles,...e.filter(i=>i&&i.f&&i.tema).map(i=>({f:String(i.f).toUpperCase(),tema:String(i.tema).toUpperCase()}))],esp:n&&Wa.especiales[n]||[]}}function fd(n,{max:e=99}={}){let{base:t,esp:i}=Uv(n.T.paneles),s=o=>o.filter(l=>!n.usados.has(l.f)&&l.f.length<=e),a=s(i);(!a.length||Math.random()<.45)&&(a=s(t)),a.length||(n.usados.clear(),a=t.filter(o=>o.f.length<=e));let r=Dn(a);return n.usados.add(r.f),r}function Ui(n,e){n.P.panel(e);let t=me("#panel2d canvas");t&&Kc(t.getContext("2d"),t.width,t.height,e,n.P.estilo,{franja:.18,t:performance.now()/1e3})}function Ws(n,e,t=!0){me("#panel2d").classList.toggle("hidden",!t),t&&Ui(n,e)}function Ao(){me("#panel2d").classList.add("hidden"),Fi()}async function cd(n,e,t){let i=Jp(e,t);if(!i.length)return 0;Math.random()<.5&&sn(Dn(Yn.destapa),1400,"copre",he.copresentadora);for(let s of i)e.luz.add(s),n.P.copreA(+s.split(",")[1]),Ui(n,e),oe.play("ding"),await ut(260);await ut(300);for(let s of i)e.luz.delete(s),e.vis.add(s),Ui(n,e),oe.play("volteo"),await ut(140);return e.rev.add(t),Ui(n,e),i.length}function jt(n,e=n.activo??-1){fn.set(n,e),n.conc.forEach((t,i)=>n.P.setMarcador(i,{nombre:t.nombre,texto:xn(t.ronda||0),activo:i===e}))}var To=()=>me("#jugada");function Fi(){let n=To();n&&(n.innerHTML="",n.className="hidden")}function Fv(n){let e=To();return e.className="botonera",e.innerHTML="",zt(new Promise(t=>{n.forEach(i=>{let s=document.createElement("button");s.className="jbtn "+(i.cls||""),s.innerHTML=i.label,s.disabled=!!i.disabled,s.onclick=a=>{a.stopPropagation(),oe.play("tecla"),Fi(),t(i.v)},e.appendChild(s)})})).finally(Fi)}function qv(n,e,t){let i=To();i.className="teclado",i.innerHTML=`<div class="jt">${at(t)}</div><div class="teclas"></div>`;let s=i.querySelector(".teclas"),a="ABCDEFGHIJKLMN\xD1OPQRSTUVWXYZ".split("");return zt(new Promise(r=>{a.forEach(l=>{let c=document.createElement("button");c.className="tecla"+(Fa.includes(l)?" voc":""),c.textContent=l,c.disabled=!e.includes(l),c.onclick=u=>{u.stopPropagation(),oe.play("tecla"),r(l)},s.appendChild(c)});let o=l=>{let c=l.key.toUpperCase();e.includes(c)&&(l.preventDefault(),r(c))};addEventListener("keydown",o),n.limpiar.push(()=>removeEventListener("keydown",o))})).finally(()=>{n.limpiar.splice(0).forEach(r=>r()),Fi()})}function mm(n,e=20){let t=To();t.className="resolver",t.innerHTML='<div class="jt">\u270D\uFE0F Escribe la soluci\xF3n del panel</div><div class="fila"><input id="solucion" autocomplete="off" spellcheck="false" placeholder="Escribe aqu\xED\u2026"><button class="jbtn gold" id="btnSol">Resolver</button><button class="jbtn" id="btnRend">No lo s\xE9</button></div><div class="jcrono"></div>';let i=t.querySelector("#solucion");setTimeout(()=>i.focus(),50);let s=new So(e,a=>{let r=t.querySelector(".jcrono");r&&(r.textContent="\u23F1\uFE0F "+Math.ceil(a))});return s.start(),zt(Promise.race([new Promise(a=>{t.querySelector("#btnSol").onclick=r=>{r.stopPropagation(),a(i.value)},t.querySelector("#btnRend").onclick=r=>{r.stopPropagation(),a("")},i.onkeydown=r=>{r.stopPropagation(),r.key==="Enter"&&a(i.value)}}),s.fin.then(()=>"")])).finally(()=>{s.stop(),Fi()})}var $n=(n,e)=>e.humano&&!n.auto;function Bv(n,e,t){let i=qa.filter(a=>!e.usadas.has(a)),s=Zc(e,qa).filter(a=>!e.usadas.has(a));return s.length&&Math.random()<t.habil?pm.find(a=>s.includes(a))||s[0]:pm.find(a=>i.includes(a)&&Math.random()<.6)||i[0]}function Hv(n,e){let t=Fa.filter(s=>!n.usadas.has(s)),i=t.filter(s=>Ha(n,s)>0);return i.length&&Math.random()<.85?Ov.find(s=>i.includes(s)):t[0]}function pd(n,e){let t=Vs(n);return Math.random()<Math.max(0,Math.min(.97,(t-.3)*1.6*(.6+e.habil*.6)))}async function gm(n,e,t,i=20){if($n(n,t)){let s=await mm(n,i);return s?(sn(s.toUpperCase(),2500,t.fig,t.nombre),lo(s)===lo(e.f)):(sn("\u2026",1e3,t.fig,t.nombre),!1)}return await ms(t,Dn(di.resuelvo)),ho(e)>=uo(e)||pd(e,t)||n.auto&&t.humano&&Vs(e)>.4}async function xm(n,e,t){e.resuelto=!0,Ui(n,e),oe.play("resuelto"),oe.play("aplausos"),n.P.celebrar&&Vs(e)<.5&&n.P.celebrar(),await Promise.all([he.lee&&he.voz?oe.say(e.f,"davefx",{pregunta:!0}):ut(800),ut(1200)]),await We(Be.correcto),await ms(t,Dn(di.bien))}async function wo(n,e,{titulo:t="PRUEBA DE VELOCIDAD",explicar:i=Be.velocidad}={}){let s=fd(n),a=co(s);a.vis=new Set,jt(n,-1),await lu(t,`Premio: ${xn(e)}`),Ws(n,a,!n.api.camLibre?.()),Ui(n,a),n.cam("panel"),await We(i),await We(bo(s.tema));let r=od($p(a)),o=new Set,l=null,c=n.conc.find(g=>$n(n,g)),u=null,d=g=>{!u&&!o.has(g)&&(u=g)},h=()=>{let g=To();if(!c||o.has(c)){Fi();return}g.className="pulsador",g.innerHTML='<button class="jbtn pulsar">\u{1F514} \xA1PULSAR!<small>(o barra espaciadora)</small></button>',g.querySelector("button").onclick=x=>{x.stopPropagation(),d(c)}},f=g=>{g.code==="Space"&&c&&document.activeElement?.id!=="solucion"&&(g.preventDefault(),d(c))};addEventListener("keydown",f);try{for(oe.music("velocidad"),h();r.length&&!l;){for(let x=0;x<6&&!u;x++){await ut(130);for(let m of n.conc)!$n(n,m)&&!o.has(m)&&!u&&Math.random()<Math.max(0,Vs(a)-.42)*.22*(.5+m.habil)&&d(m)}if(u){let x=u;if(oe.stopMusic(),oe.play("pulsador"),Fi(),n.activo=n.conc.indexOf(x),jt(n),n.cam("conc",n.activo),await ut(1100),n.cam("panel"),$n(n,x)&&await We(Be.pulsa),await gm(n,a,x,15)){console.info("[ruleta] velocidad \u2192",x.nombre,"+"+e),l=x,x.dinero+=e,await xm(n,a,x),jt(n);break}if(oe.play("fallo"),await We(Be.incorrecto),o.add(x),u=null,n.activo=-1,jt(n),o.size>=n.conc.length)break;Ws(n,a,!n.api.camLibre?.()),n.cam("panel"),oe.music("velocidad"),h();continue}let g=r.shift();a.vis.add(g),Ui(n,a),oe.play("ding")}l||(oe.stopMusic(),a.resuelto=!0,Ui(n,a),await We(Be.nadie),he.lee&&he.voz&&await oe.say(a.f,"davefx",{pregunta:!0}))}finally{removeEventListener("keydown",f),Fi(),oe.stopMusic()}return await ut(1200),Ws(n,a,!1),n.activo=-1,jt(n,-1),l}var ud=n=>50*n.factor;async function zv(n,e,t,i){let s=Zc(e,qa).length>0,a=Fa.some(o=>!e.usadas.has(o)),r=a&&t.ronda>=ud(n);if(ho(e)>=uo(e))return"resolver";if($n(n,t)){let o=[{label:"\u{1F3A1} Girar la ruleta",v:"girar",cls:"gold",disabled:!s},{label:`\u{1F524} Comprar vocal <small>${xn(ud(n))}</small>`,v:"vocal",disabled:!r},{label:"\u{1F4A1} Resolver",v:"resolver"}],l=Fv(o);return i?Promise.race([l,i.fin.then(()=>"tiempo")]).finally(Fi):l}return await ut(700),!s&&!r||(t.ronda||0)>0&&pd(e,t)&&Vs(e)>.45?"resolver":r&&(Math.random()<.3||!s)?"vocal":s?"girar":"resolver"}async function hd(n,e,t,i){let a=(i==="vocal"?Fa:qa).filter(o=>!e.usadas.has(o)),r;return $n(n,t)?r=await qv(n,a,i==="vocal"?"\u{1F524} Elige una vocal":"\u{1F524} Elige una consonante"):(await ut(500),r=i==="vocal"?Hv(e,t):Bv(n,e,t)),sn(`\xA1La ${r}!`,1800,t.fig,t.nombre),he.voz?await zt(Promise.race([oe.say(dd(r),t.voz||"sharvard"),ut(2500)])):await ut(600),r}async function du(n,e,t){return t&&await We(t),e.comodines>0?(e.comodines--,jt(n),oe.play("comodin"),await We(Be.usaComodin),!1):(oe.play("fallo"),!0)}async function Vv(n,e,t,{crono:i=!1}={}){for(;;){n.activo=n.conc.indexOf(t),jt(n),n.P.rueda.activar(n.activo,t.color);let s=null;i&&!n.ilimitado&&(s=new So(10,h=>fn.timer(h,4)),s.start());let a;try{a=await zv(n,e,t,s)}finally{s&&a!=="tiempo"&&s.stop()}if(a==="tiempo")return fn.sinTimer(),oe.play("fallo"),await We(Be.cronoFin),"pasa";if(s&&(s.stop(),fn.sinTimer()),a==="resolver")return await gm(n,e,t)?(await xm(n,e,t),"resuelto"):(oe.play("fallo"),await We(Be.incorrecto),"pasa");if(a==="vocal"){$n(n,t)?await We(Be.vocal):await ms(t,Dn(di.vocal)),t.ronda-=ud(n),jt(n),oe.play("caja");let h=await hd(n,e,t,"vocal"),f=e.usadas.has(h);e.usadas.add(h);let g=f?0:Ha(e,h);if(g>0){await We(Be.hayN[Math.min(7,g-1)]),await cd(n,e,h);continue}if(await du(n,t,f?Be.yaDicha:Be.noHay))return"pasa";continue}$n(n,t)||await ms(t,Dn(di.giro)),n.cam("ruleta");let r=await n.api.girar(t),o=Zt[r];n.cam("conc",n.activo);let l=(o.v??0)*n.mult*n.factor;if(o.tipo==="quiebra"){if(oe.play("quiebra"),oe.play("ooh"),t.ronda=0,jt(n),await du(n,t,Be.quiebra))return"pasa";continue}if(o.tipo==="pierde"){if(oe.play("ooh"),await du(n,t,Be.pierde))return"pasa";continue}o.tipo==="comodin"?(t.comodines++,oe.play("comodin"),jt(n),await We(Be.comodin)):o.tipo==="num"?await We(`${l} ${n.factor>1?"pesetas":"euros"}.`):await We(Be[o.tipo]),$n(n,t)&&await We(Be.consonante);let c=await hd(n,e,t,"consonante"),u=e.usadas.has(c);e.usadas.add(c);let d=u?0:Ha(e,c);if(d>0){if(await We(Be.hayN[Math.min(7,d-1)]),await cd(n,e,c),o.tipo==="num"||o.tipo==="comodin")t.ronda+=l*d;else if(o.tipo==="x2")t.ronda=Math.max(t.ronda*2,0);else if(o.tipo==="mitad")t.ronda=Math.floor(t.ronda/2);else if(o.tipo==="melo"){let h=n.conc.filter(f=>f!==t).sort((f,g)=>g.ronda-f.ronda)[0];t.ronda+=h.ronda,h.ronda&&yn(`\u{1F4B0} ${t.nombre} se queda los ${xn(h.ronda)} de ${h.nombre}`),h.ronda=0}else if(o.tipo==="selodoy"){let h=n.conc.filter(f=>f!==t).sort((f,g)=>f.ronda-g.ronda)[0];h.ronda+=t.ronda,t.ronda&&yn(`\u{1F381} ${t.nombre} le da ${xn(t.ronda)} a ${h.nombre}`),t.ronda=0}oe.play("caja"),jt(n),!Zc(e,qa).length&&ho(e)<uo(e)&&await We(Be.sinConsonantes);continue}if(await du(n,t,u?Be.yaDicha:Be.noHay))return"pasa"}}async function Xa(n,{num:e=1,crono:t=!1}={}){let i=fd(n),s=co(i);n.conc.forEach(l=>{l.ronda=0}),jt(n,-1),await lu(t?"PANEL CON CRONO":`PANEL ${e}`,i.tema),Ws(n,s),n.cam("panel"),t?await We(Be.panelCrono):(e===1||n.entreno)&&await We(Be.panel),await We(bo(i.tema)),oe.music("panel",{cancion:!0});let a=n.turno%n.conc.length,r=null,o=0;for(;!r&&o<60;){let l=n.conc[a];if(n.cam("conc",a),$n(n,l)?await We(Be.turnoTuyo):sn(`Te toca, ${l.nombre}.`,1500),await Vv(n,s,l,{crono:t})==="resuelto"){r=l;break}a=(a+1)%n.conc.length,o++}if(oe.stopMusic(),console.info("[ruleta] panel",e,t?"crono":"","\u2192",r?r.nombre+" +"+r.ronda:"nadie",n.conc.map(l=>l.nombre+":"+l.dinero+"/"+l.ronda).join(" ")),r){let l=Math.max(r.ronda,0);r.dinero+=l,n.conc.forEach(c=>{c.ronda=0}),await Ga(`${r.nombre} gana ${xn(l)}`,"Panel resuelto",2200)}return n.activo=-1,n.P.rueda.activar(-5),jt(n,-1),fn.sinTimer(),await ut(600),Ws(n,s,!1),n.turno=(a+1)%n.conc.length,r}async function md(n,e){let t=od(n.T.premios||n.premiosBase);n.activo=n.conc.indexOf(e),jt(n),await lu("RULETA FINAL",e.nombre),n.cam("ruleta"),n.P.rueda.setFinal(!0),n.P.rueda.activar(n.activo,e.color),await We(Be.final);let i=await n.api.girar(e),s=t[i%t.length];oe.play("bote"),await We(Be.finalSobre),n.P.rueda.setFinal(!1);let a=fd(n,{max:28}),r=co(a);Ws(n,r),n.cam("panel"),await We(bo(a.tema)),sn(Yn.final,2500,"copre",he.copresentadora),await zt(oe.say(Yn.final,"daniela")),await We(Be.finalLetras);let o=[];for(let c=0;c<5;c++){let u=c<4?"consonante":"vocal",d=await hd(n,r,e,u);r.usadas.add(d),o.push(d)}for(let c of o)Ha(r,c)&&await cd(n,r,c);await We(Be.finalTiempo),oe.music("velocidad");let l;if($n(n,e)){let c=await mm(n,n.ilimitado?600:10);l=lo(c)===lo(r.f),c&&sn(c.toUpperCase(),2500,e.fig,e.nombre)}else await ut(2500),l=pd(r,e)||n.auto&&Vs(r)>.35||Math.random()<.35,await ms(e,Dn(di.resuelvo));return oe.stopMusic(),r.resuelto=!0,Ui(n,r),he.lee&&he.voz&&await oe.say(r.f,"davefx",{pregunta:!0}),l?(oe.play("resuelto"),oe.play("ovacion"),await We(Be.finalGana)):(oe.play("ooh"),await We(Be.finalPierde)),n.cam("coche"),await ut(800),await We(`En el sobre hab\xEDa\u2026 ${s.t.replace(/[^\p{L}\p{N} .,!¡€]/gu,"").trim()}.`),await Eo(`\u2709\uFE0F ${at(s.t)}`,l?"\xA1PREMIO CONSEGUIDO!":"Esta vez no ha podido ser",2600),l&&(n.P.celebrar(),oe.play("ovacion"),s.coche?(n.cam("coche"),await We(Be.coche)):s.v&&(e.dinero+=s.v)),Ws(n,r,!1),{ok:l,premio:s}}var Jn={fortuna:{id:"fortuna",nombre:"La ruleta de la fortuna (1990-1997)",corto:"Fortuna \xB7 1990",escenario:"fortuna",moneda:"pts",factor:100,nota:"Plat\xF3 retro de los 90: tel\xF3n rojo, columnas doradas, r\xF3tulo de bombillas y suelo granate con estrellas. Se juega en pesetas."},a2006:{id:"a2006",nombre:"Antena 3 (2006-2013) \xB7 plat\xF3 azul",corto:"Antena 3 \xB7 2006",escenario:"a2006",nota:"Fondo azul, anillos blancos colgantes con letras moradas, paredes de LED de colores, escaleras amarillas y suelo azul con espirales."},piramides:{id:"piramides",nombre:"Plat\xF3 de las pir\xE1mides \xB7 suelo dorado",corto:"Pir\xE1mides \xB7 oro",escenario:"piramides",nota:"Paredes de pir\xE1mides blancas, azules y verdes, suelo dorado con l\xEDneas blancas, panel con marco de bombillas y banda en la grada."},pirazul:{id:"pirazul",nombre:"Plat\xF3 de las pir\xE1mides \xB7 suelo azul",corto:"Pir\xE1mides \xB7 azul",escenario:"pirazul",nota:"La misma escenograf\xEDa de pir\xE1mides con el suelo azul brillante y l\xEDneas blancas."},verano:{id:"verano",nombre:"Plat\xF3 de verano",corto:"Verano",escenario:"verano",nota:"Pir\xE1mides con r\xF3tulo de ne\xF3n naranja, olas azules en el suelo, palmeras, sombrilla y suelo reflectante (tambi\xE9n se pone solo en el especial de verano)."},neon:{id:"neon",nombre:"Plat\xF3 actual \xB7 aros de ne\xF3n",corto:"Ne\xF3n \xB7 actual",escenario:"neon",nota:"Suelo negro con aros de ne\xF3n amarillos, azules, naranjas y rojos, escaleras iluminadas, panel morado con marco de ne\xF3n y ruleta con barandilla."}};Object.values(Jn).forEach(n=>{n.archivosMusica=["cabecera_"+n.id,"cabecera"],n.archivosLogo=["logo_"+n.id,"logo"],n.factor=n.factor||1,n.moneda=n.moneda||"\u20AC"});var ym=`<p><b>Objetivo:</b> resolver los paneles de letras y acabar el programa con m\xE1s dinero que los rivales para jugar la <b>Ruleta final</b>.</p>
<p><b>El panel</b> tiene 52 casillas (filas de 12, 14, 14 y 12) y una franja con el <b>tema</b> o pista.</p>
<p><b>En tu turno</b> puedes: \u{1F3A1} <b>Girar la ruleta</b> y decir una consonante (cobras el valor del gajo por cada vez que aparezca), \u{1F524} <b>Comprar una vocal</b> por 50 \u20AC o \u{1F4A1} <b>Resolver</b> el panel escribiendo la soluci\xF3n. Si la letra no est\xE1, pasa el turno.</p>
<p><b>Los gajos:</b> cifras de 0 a 200 \u20AC, <b>Quiebra</b> (pierdes lo del panel), <b>Pierde turno</b>, <b>Comod\xEDn</b> (te salva una vez de perder el turno), <b>X2</b> (duplica lo que llevas), <b>1/2</b> (lo divide), <b>Me lo quedo</b> (te quedas el dinero de un rival) y <b>Se lo doy</b> (regalas el tuyo).</p>
<p>Solo cobra el dinero de un panel <b>quien lo resuelve</b>.</p>
<p><b>Prueba de velocidad:</b> las letras se destapan solas. Pulsa \u{1F514} (o la barra espaciadora) y escribe la soluci\xF3n. Si fallas, ya no puedes pulsar en ese panel.</p>
<p><b>Panel con crono:</b> cada jugada tiene 10 segundos.</p>
<p><b>Ruleta final:</b> el ganador gira la ruleta de los sobres, elige 4 consonantes y 1 vocal y tiene 10 segundos para resolver. En el sobre puede haber dinero, un viaje\u2026 \xA1o el coche!</p>
<p><b>Girar:</b> mant\xE9n pulsado \xABGirar\xBB para cargar la fuerza y suelta, o <b>arrastra la ruleta</b> con el dedo o el rat\xF3n.</p>
<p><b>Controles 3D:</b> \u2630 men\xFA \xB7 \u{1F441} c\xE1mara \xB7 \u{1F4A1} luces \xB7 \xABSaltar \u23ED\xBB pasa la cabecera, los mon\xF3logos y la despedida. En \xABExplorar el plat\xF3\xBB: joystick o WASD.</p>`,gd={panel:["Panel con ruleta","Gira, di consonantes, compra vocales y resuelve"],velocidad:["Prueba de velocidad","Pulsa antes que nadie"],crono:["Panel con crono","10 segundos por jugada"],final:["Ruleta final","4 consonantes + 1 vocal y 10 segundos"],girar:["Girar la ruleta","Practica el giro: bot\xF3n o arrastre"]};function xd(n){let e=n?n.conc:xs.slice(0,3);return[["Presentado por",[`${he.presentador||"Tito Giros"} (presentador virtual)`]],["Copresentadora",[`${he.copresentadora||"Lola Letras"} (copresentadora virtual)`]],["Concursantes",e.map((t,i)=>`${["\u{1F7E6}","\u{1F7E5}","\u{1F7E8}"][i]||""} ${t.nombre} \xB7 ${t.prof}`)],["Juego creado por",["Iker"]],["Basado en",["El concurso \xABLa ruleta de la suerte\xBB y \xABLa ruleta de la fortuna\xBB (adaptaci\xF3n no oficial)","Formato basado en \xABWheel of Fortune\xBB (EE. UU.)"]],["Plat\xF3s, logo, ruleta y grafismos",["Creaci\xF3n original en 3D (Three.js), inspirada en las fotos de cada etapa"]],["Paneles",["Originales del juego (data/paneles_extra.js para a\xF1adir m\xE1s)"]],["M\xFAsica y sonidos",["Los que subas t\xFA desde Opciones (Mis canciones, cabecera)","o efectos y bucles sintetizados por el propio juego","Clics de los pivotes generados por c\xF3digo"]],sm,["P\xFAblico de las gradas",["Aplausos, \xABooh\xBB y risas sintetizados (no son grabaciones)"]],["Interfaz",["Basada en el APK \xAB\xA1Ahora Caigo! El juego 3D\xBB de Iker"]],["Programaci\xF3n",["Grok Bot"]]]}function Sm({etapa:n,tema:e="normal",entreno:t=!1,ilimitado:i=!1},s){let a=Jn[n]||Jn.piramides,r=Wt[e]||Wt.normal;cm(a.moneda);let o=[...xs].sort(()=>Math.random()-.5).slice(0,2),c=[{nombre:he.nombre||"T\xFA",prof:he.profesion||"Concursante",voz:"sharvard",emoji:"\u{1F64B}",humano:!0,habil:.75},...o.map(h=>({...h,habil:.55+Math.random()*.25}))].map((h,f)=>({...h,color:Jh[f],dinero:0,ronda:0,comodines:0,atril:f,fig:f})),u=a.factor>1?[{t:"\u{1F697} \xA1Un coche!",coche:!0},{t:"500.000 pesetas",v:5e5},{t:"1.000.000 de pesetas",v:1e6},{t:"\u2708\uFE0F Un viaje para dos",viaje:!0},{t:"250.000 pesetas",v:25e4}]:tu,d={P:s.P(),api:s,conc:c,E:a,T:r,mult:r.mult||1,factor:a.factor,usados:new Set,turno:0,activo:-1,limpiar:[],auto:!!window.__AUTO,entreno:t,ilimitado:i,cam:(h,f)=>s.cam(h,f),premiosBase:u};return d.P.mamparas.visible=!!r.mamparas,d.P.gente.visible=he.gradas&&!r.sinPublico,jt(d,-1),d}async function _m(){!he.chistes||Math.random()>.6||(await We(Dn(hu)),oe.play("badumtss"),oe.play("risas"))}async function Gv(n,e,t){fn.show(!1),await e.cabecera(),e.cam("presentador"),oe.play("aplausos"),oe.music("trilha"),await We(t.saludo||(n.E.id==="fortuna"?Be.bienvenidaFortuna:Be.bienvenida));for(let i of t.extra||[])await We(i);t.festivo&&(n.P.celebrar(),oe.play("ovacion")),await We(Be.copreEntra),e.cam("panel"),oe.play("aplausos"),sn(Yn.hola,4e3,"copre",he.copresentadora),await zt(he.voz?oe.say(Yn.hola,"daniela"):ut(2500)),he.monologo&&await e.monologo(null,!0)}async function Wv(n,e){if(he.presentaciones){e.cam("presentador"),await We(Be.presentacion),Ga(`Presentado por ${he.presentador||"Tito Giros"}`,`Con ${he.copresentadora||"Lola Letras"} en el panel`,2600);for(let t of n.conc)e.cam("conc",t.atril),await Ga(`${["\u{1F7E6}","\u{1F7E5}","\u{1F7E8}"][t.atril]} ${t.nombre}${t.humano?" (T\xDA)":""}`,t.prof,2400),t.humano||await ms(t,Dn(di.hola))}}function Mm(n,e){let t=e.tema(),i=Wt[t]||Wt.normal;return Yv(e,i,t,n)}async function Xv(n,e,t,i){oe.stopMusic(),oe.play("ovacion"),fn.show(!1),Ao(),n.orbita(),oe.music("trilha"),e.P.celebrar();let s=(async()=>{await We(Be.despedida),sn(Yn.adios,3e3,"copre",he.copresentadora),he.voz&&await oe.say(Yn.adios,"daniela")})();await n.saltable(Promise.all([s,fm(xd(e),16e3)])),cu(),await Eo("FIN DEL PROGRAMA",i,3200),n.marcador(i),Oi([{label:"Jugar otra vez",cls:"gold",fn:()=>n.iniciar(t)},{label:"Men\xFA",fn:()=>n.menu("play")}]),await zt(new Promise(()=>{}))}var vm=n=>[...n.conc].sort((e,t)=>t.dinero-e.dinero);async function Yv(n,e,t,i){let s=i==="clasico",a=s?"fortuna":e.plato||he.etapa;n.setEtapa(a);let r=Sm({etapa:a,tema:t},n),o=150*r.mult*r.factor;gs(e.hashtag&&t!=="normal"?e.hashtag:s?"#LaRuletaDeLaFortuna":"#LaRuletaDeLaSuerte"),await Gv(r,n,e),await Wv(r,n),r.conc[0].humano&&(fn.show(!1),await n.paseo(0)),fn.show(!0),jt(r,-1),r.cam("general");let l=await wo(r,o);if(l&&(r.turno=r.conc.indexOf(l)),await Xa(r,{num:1}),await _m(),await Xa(r,{num:2}),!s){let g=await wo(r,o*2,{titulo:"VELOCIDAD 2",explicar:Be.velocidad2});g&&(r.turno=r.conc.indexOf(g)),await _m()}await Xa(r,{num:3,crono:!0});let c=vm(r);if(await Eo("MARCADOR",c.map((g,x)=>`${x+1}. ${at(g.nombre)} \xB7 ${xn(g.dinero)}`).join("<br>"),3e3),c[0].dinero===c[1].dinero){await We(Be.empate);let g=c.filter(p=>p.dinero===c[0].dinero),x=await wo(r,50*r.factor,{titulo:"DESEMPATE",explicar:Be.velocidad}),m=g.includes(x)?x:Dn(g);m.dinero+=1,c=vm(r)}let u=c[0];r.cam("conc",u.atril),await We(Be.ganaDia),await Ga(`\u{1F3C6} ${u.nombre}`,`Ganador del d\xEDa \xB7 ${xn(u.dinero)}`,2600);let d=await md(r,u),h=r.conc.find(g=>g.humano),f=`${d.ok?"\u{1F3C6}":"\u{1F3A1}"} ${at(u.nombre)} ${d.ok?"gana "+at(d.premio.t):"no resolvi\xF3 la ruleta final"}<br>${r.conc.map(g=>`${at(g.nombre)}: ${xn(Math.max(0,g.dinero))}`).join(" \xB7 ")}${h?`<br>T\xFA: ${h===u?d.ok?"\xA1ganador absoluto!":"ganador del d\xEDa":"gracias por jugar"}`:""}`;await Xv(n,r,i,f)}async function Em(n,e,{ilimitado:t=!1}={}){for(;;){let i=e.tema()==="verano"?"verano":he.etapa;e.setEtapa(i);let s=Sm({etapa:i,entreno:!0,ilimitado:t,tema:e.tema()},e);fn.show(!0),gs("#RuletaEntrena"),s.cam("general");let a=s.conc[0],r="";if(n==="velocidad"){let l=await wo(s,150*s.factor);r=l===a?"\xA1Lo has resuelto el primero!":l?`Lo ha resuelto ${l.nombre}`:"Nadie lo ha resuelto"}if(n==="panel"){let l=await Xa(s,{num:1});r=l===a?`\xA1Resuelto! Ganas ${xn(a.dinero)}`:`Lo ha resuelto ${l?l.nombre:"nadie"}`}if(n==="crono"){let l=await Xa(s,{num:1,crono:!0});r=l===a?`\xA1Resuelto! Ganas ${xn(a.dinero)}`:`Lo ha resuelto ${l?l.nombre:"nadie"}`}if(n==="final"){let l=await md(s,a);r=l.ok?`\xA1Resuelto! En el sobre: ${l.premio.t}`:`No resuelto. En el sobre hab\xEDa: ${l.premio.t}`}if(n==="girar"){await We(Be.girarLibre),s.activo=0,jt(s);let l=[];for(let c=0;c<(s.auto?3:6);c++){s.cam("ruleta");let u=await e.girar(a),d=Zt[u];l.push(d.t),oe.play(d.tipo==="quiebra"?"quiebra":"caja"),yn(`\u{1F3A1} ${d.t}${d.tipo==="num"?" \u20AC":""}`,1500),await ut(900)}r="Has sacado: "+l.join(" \xB7 ")}oe.stopMusic(),fn.show(!1),Ao(),e.marcador(`${at(gd[n][0])}<br><small>${at(r)}</small>`);let o=await zt(new Promise(l=>Oi([{label:"Repetir",cls:"gold",fn:()=>l("otra")},{label:"Entrenamiento",fn:()=>l("menu")}])));if(e.marcador(null),o==="menu")return e.menu("train")}}var fu=[{t:"El origen",emoji:"\u{1F30D}",cam:"ruleta",sub:"Todo empez\xF3 en Estados Unidos con Wheel of Fortune, un concurso de los a\xF1os setenta en el que hab\xEDa que adivinar un panel de letras girando una enorme ruleta. El formato dio la vuelta al mundo.",rows:[["Formato original","Wheel of Fortune"],["Pa\xEDs","Estados Unidos"],["D\xE9cada","A\xF1os 70"],["Clave","Ruleta + panel"]]},{t:"La ruleta de la fortuna",emoji:"\u{1F4FA}",cam:"general",etapa:"fortuna",sub:"En Espa\xF1a lleg\xF3 primero como La ruleta de la fortuna. Se emiti\xF3 en Antena 3 entre 1990 y 1992, y despu\xE9s en Telecinco desde 1993 hasta 1997. Se jugaba en pesetas.",rows:[["Antena 3","1990-1992"],["Telecinco","1993-1997"],["Moneda","Pesetas"]]},{t:"Nace La ruleta de la suerte",emoji:"\u{1F3A1}",cam:"general",etapa:"a2006",sub:"En 2006 el formato volvi\xF3 a Antena 3 con un nombre nuevo: La ruleta de la suerte. Un plat\xF3 azul, anillos blancos colgando del techo y paredes de luces de colores.",rows:[["Estreno","2006"],["Cadena","Antena 3"],["Plat\xF3","Azul, anillos y LED"]]},{t:"Presentador y copresentadora",emoji:"\u{1F3A4}",cam:"panel",sub:"El programa lo conduce un presentador, y a su lado est\xE1 la copresentadora, que destapa las letras del panel. Hoy los presentan Jorge Fern\xE1ndez y Laura Moure. En este juego, los presentadores son personajes virtuales inventados.",rows:[["Presentador","Jorge Fern\xE1ndez"],["Copresentadora","Laura Moure"],["En el juego","Personajes virtuales"]]},{t:"Los concursantes",emoji:"\u{1F7E6}",cam:"atriles",sub:"Juegan tres concursantes alrededor de la ruleta, cada uno con su marcador: azul, rojo y amarillo. Solo se queda el dinero de un panel quien lo resuelve.",rows:[["Concursantes","3"],["Colores","Azul \xB7 rojo \xB7 amarillo"]]},{t:"La ruleta",emoji:"\u{1F3AF}",cam:"ruleta",sub:"La ruleta tiene veinticuatro gajos. Hay cifras de cero a doscientos euros, y gajos temidos como la quiebra, que te deja a cero, o el pierde turno. Tambi\xE9n hay gajos especiales, como el comod\xEDn.",rows:[["Gajos","24"],["Cifras","0 \u2013 200 \u20AC"],["Peligro","Quiebra \xB7 Pierde turno"]]},{t:"El panel",emoji:"\u{1F524}",cam:"panel",sub:"El panel tiene cincuenta y dos casillas, y debajo una franja con la pista o el tema. Las consonantes se dicen despu\xE9s de girar; las vocales se compran por cincuenta euros.",rows:[["Casillas","52"],["Pista","Franja inferior"],["Vocal","50 \u20AC"]]},{t:"Las pruebas",emoji:"\u23F1\uFE0F",cam:"panel",sub:"Adem\xE1s de los paneles normales, hay pruebas de velocidad, en las que las letras se destapan solas y gana el primero que pulse y acierte, y paneles con crono, en los que cada jugada va contra el reloj.",rows:[["Velocidad","Pulsador"],["Crono","Contra el reloj"]]},{t:"La ruleta final",emoji:"\u{1F697}",cam:"coche",sub:"El ganador del d\xEDa juega la ruleta final. Elige cuatro consonantes y una vocal, y tiene unos segundos para resolver. En el sobre puede haber dinero\u2026 o un coche.",rows:[["Letras","4 consonantes + 1 vocal"],["Premio","Dinero o un coche"]]},{t:"Los plat\xF3s",emoji:"\u{1F53A}",cam:"general",etapa:"piramides",sub:"Con los a\xF1os el plat\xF3 cambi\xF3: llegaron las paredes de pir\xE1mides blancas, azules y verdes, el suelo dorado con l\xEDneas blancas, el panel con marco de bombillas y los atriles curvos.",rows:[["Paredes","Pir\xE1mides"],["Panel","Marco de bombillas"]]},{t:"La banda en directo",emoji:"\u{1F3B8}",cam:"banda",sub:"Desde 2012 el programa tiene una banda en directo en la grada, que pone m\xFAsica a los giros, a las quiebras y a los paneles resueltos.",rows:[["Desde","2012"],["D\xF3nde","En la grada"]]},{t:"Los especiales",emoji:"\u{1F384}",cam:"publico",etapa:"verano",sub:"Ha habido muchos especiales: Black Friday, Navidad, programas de verano con olas y palmeras, la ruleta sin p\xFAblico durante la pandemia y La ruleta de la suerte Noche, con premios de hasta cien mil euros.",rows:[["Black Friday","\u{1F6CD}\uFE0F"],["Navidad","\u{1F384}"],["Verano","\u{1F3D6}\uFE0F"],["Noche","Hasta 100.000 \u20AC"]]},{t:"El plat\xF3 de ne\xF3n",emoji:"\u{1F4AB}",cam:"general",etapa:"neon",sub:"Y llegamos al plat\xF3 actual: suelo negro con aros de ne\xF3n amarillos, azules, naranjas y rojos, escaleras iluminadas, un panel morado con marco de ne\xF3n y una ruleta multicolor con barandilla.",rows:[["Suelo","Negro con aros de ne\xF3n"],["Panel","Morado"],["Ruleta","Con barandilla"]]}];var bm={publico:"\u{1F44F}",telefono:"\u{1F4DE}",normas:"\u{1F4DC}"},Am={publico:"Con el p\xFAblico",telefono:"Al tel\xE9fono",normas:"Las normas"},fi=[{id:"pub-saludo",tipo:"publico",titulo:"Bajando a saludar",cam:"publico",lineas:["\xA1Un momento! Antes de girar voy a saludar a la gente de las gradas.","Se\xF1ora de la primera fila, \xA1ese vestido tiene m\xE1s colores que nuestra ruleta!","Caballero, \xBFusted viene todos los d\xEDas? \xA1Si ya se sabe los paneles de memoria!","\xA1Muchas gracias! Me vuelvo al plat\xF3 antes de que alguien compre una vocal sin pagar."]},{id:"pub-cumple",tipo:"publico",titulo:"Un cumplea\xF1os en el p\xFAblico",cam:"publico",lineas:["Me dicen que hoy hay alguien de cumplea\xF1os en el p\xFAblico.","\xA1Felicidades! Aqu\xED no tenemos tarta, pero tenemos veinticuatro gajos. Uno por cada vela, m\xE1s o menos.","Pide un deseo\u2026 y que no sea la quiebra.","\xA1Un aplauso para nuestro cumplea\xF1ero!"]},{id:"tel-madre",tipo:"telefono",titulo:"Llama mi madre",cam:"presentador",lineas:["Perdonad, que me suena el m\xF3vil\u2026 \xA1Es mi madre!","\xBFS\xED, mam\xE1? S\xED, estoy en directo. No, no puedo decirte el panel.","\xBFQue ya lo has resuelto desde el sof\xE1? \xA1Pues ven t\xFA a concursar!","Vale, mam\xE1, un beso. Me dice que os salude a todos\u2026 y que compr\xE9is la E."]},{id:"tel-banda",tipo:"telefono",titulo:"Llamada de la banda",cam:"banda",lineas:["\xA1Me llama el bater\xEDa de nuestra banda! Y eso que est\xE1 ah\xED mismo.","\xBFQu\xE9 dices? \xBFQue quieres tocar m\xE1s fuerte en la quiebra? \xA1M\xE1s fuerte todav\xEDa no, por favor!","Dice que la ruleta va a tres por cuatro. Yo no s\xE9 lo que es eso, pero suena muy bien.","\xA1Un aplauso para la banda!"]},{id:"norma-vocal",tipo:"normas",titulo:"La vocal gratis",cam:"ruleta",lineas:["Atenci\xF3n, que voy a cambiar una norma.","A partir de hoy, las vocales son gratis\u2026 \xA1Es broma! Siguen costando cincuenta euros.","Pero os doy un consejo: la E y la A casi nunca fallan.","Y ahora, sigamos, que la ruleta se enfr\xEDa."]},{id:"norma-quiebra",tipo:"normas",titulo:"Prohibida la quiebra",cam:"ruleta",lineas:["Me han pedido los concursantes que quitemos la quiebra.","He hablado con la direcci\xF3n y me han dicho\u2026 que ni hablar.","As\xED que, si cae en quiebra, ya sab\xE9is: sonrisa, aplauso y a esperar el siguiente turno.","\xA1Que siga la ruleta!"]}];var pi=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),qi=()=>{},Tm=n=>{qi=n},an=n=>n&&n.stopPropagation();function wm(n,e,t,i){let s=document.createElement("button");return s.className="mbtn "+(t||""),s.innerHTML=`<span class="fp"></span><span>${n}${e?`<small>${e}</small>`:""}</span>`,s.onclick=a=>{an(a),qi(),i()},s}function Rm(n){let e=document.createElement("button");return e.className="tbtn back",e.textContent="\u27F5 Volver",e.onclick=t=>{an(t),qi(),n()},e}function Bi(n){let e=document.createElement("h2");return e.textContent=n,e}function mi(n,e="onote"){let t=document.createElement("p");return t.className=e,t.textContent=n,t}function Xt(n,...e){let t=document.createElement("div");t.className="orow";let i=document.createElement("label");return i.textContent=n,t.append(i,...e),t}function Cm(n,e,t){let i=document.createElement("button"),s=()=>{i.className="tbtn"+(n[e]?" sel":""),i.textContent=n[e]?"S\xED":"No"};return s(),i.onclick=a=>{an(a),n[e]=!n[e],s(),qi(),t&&t(n[e])},i}function Lm(n,e,t,i){return t.map(([s,a])=>{let r=document.createElement("button");return r.className="tbtn"+(n[e]===s?" sel":""),r.textContent=a,r.dataset.v=s,r.onclick=o=>{an(o),n[e]=s,qi(),r.parentNode.querySelectorAll(".tbtn[data-v]").forEach(l=>l.classList.toggle("sel",l.dataset.v===s)),i&&i(s)},r})}function Im(n,e,t,i){let s=document.createElement("input");return s.type="range",s.min=0,s.max=100,s.value=Math.round((n[e]??1)*100),s.oninput=()=>{n[e]=s.value/100,t&&t(n[e])},s.onchange=()=>i&&i(n[e]),s.onpointerdown=an,s}function _s(n,...e){let t=document.createElement("div");t.className="ocustom";let i=document.createElement("div");return i.className="olabel",i.textContent=n,t.append(i,...e.filter(Boolean)),t}function Hi(n,e="oname"){let t=document.createElement("div");return t.className=e,t.innerHTML=n,t}function Zn(n){let e=document.createElement("div");e.className="obtns";for(let t of n){let i;if(t.file){i=document.createElement("label");let s=document.createElement("input");s.type="file",s.accept=t.file.accept,s.onclick=an,s.onchange=()=>s.files[0]&&t.file.onFile(s.files[0]),i.append(document.createTextNode(t.t),s)}else i=document.createElement("button"),i.textContent=t.t,i.disabled=!!t.disabled,i.onclick=s=>{an(s),qi(),t.fn&&t.fn(i)};i.className="tbtn"+(t.sel?" sel":"")+(t.full?" full":""),e.appendChild(i)}return e}function Pm(n,e,t,i,s){let a=document.createElement("input");return a.className="otext",a.value=n[e]||"",a.placeholder=t,a.maxLength=i,a.oninput=()=>{n[e]=a.value.trim(),s&&s(n[e])},a.onkeydown=an,a.onpointerdown=an,a}function Nm(n,e,t){let i=document.createElement("div");i.className="themes";for(let[s,a]of Object.entries(n)){let r=document.createElement("button");r.className="tbtn"+(s===e?" sel":""),r.innerHTML=`<span>${a.emoji}</span>${pi(a.name)}`,r.onclick=o=>{an(o),qi(),t(s)},i.appendChild(r)}return i}function Dm(n,{logo:e,sub:t="El juego",tap:i="Toca para empezar",onStart:s}){n.classList.remove("hidden"),n.innerHTML=`<div class="title"><img class="tlogo" src="${e}" alt=""><div class="tsub">${pi(t)}</div><div class="ttap">${pi(i)}</div></div>`;let a=r=>{an(r),n.removeEventListener("pointerup",a),removeEventListener("keydown",a),s()};setTimeout(()=>{n.addEventListener("pointerup",a),addEventListener("keydown",a)},200)}function Om(n,{logo:e,tag:t,version:i,cls:s=""}){n.classList.remove("hidden"),n.innerHTML="";let a=document.createElement("div");a.className="mbox";let r=document.createElement("div");r.className="logo",r.innerHTML=`<img class="mlogo" src="${e}" alt=""><div class="mtag">${pi(t)}</div>`;let o=document.createElement("div");o.className="col ui "+s;let l=document.createElement("div");return l.className="mver",l.textContent="v"+i,a.append(l,r,o),n.appendChild(a),o}function Um(n,e){let t=document.createElement("div");return t.className="modal ui",t.innerHTML=`<div class="mcard">${e}<button class="tbtn back" data-cerrar>Cerrar</button></div>`,n.appendChild(t),t.querySelector("[data-cerrar]").onclick=i=>{an(i),t.remove()},t}function Fm({total:n,presentador:e="El presentador",padre:t=document.body}){document.getElementById("historia")?.remove();let i=document.createElement("div");i.id="historia",i.className="ui",i.innerHTML=`<div class="hcard" id="hCard"></div><div class="hsub" id="hSub"><b>${pi(e)}</b><span></span></div>
    <div class="hctl"><button class="tbtn" id="hPrev">\u25C4 Anterior</button><button class="tbtn" id="hSkip">\u23ED Saltar</button><button class="tbtn sel" id="hNext">Siguiente \u25BA</button></div>
    <div class="hdots" id="hDots">${Array.from({length:n},(a,r)=>`<i data-i="${r}"></i>`).join("")}</div>`,t.appendChild(i);let s=a=>i.querySelector("#"+a);return{el:i,mostrar(a,r){let o=s("hCard");o.classList.remove("in"),o.innerHTML=`<div class="hhead">${a>=0?`<span class="hnum">${a+1}/${n}</span>`:""}<span class="hemo">${r.emoji||""}</span><b>${pi(r.t)}</b></div>`+(r.rows||[]).map(([l,c])=>`<div class="hrow"><small>${pi(l)}</small><span>${pi(c)}</span></div>`).join(""),o.offsetWidth,o.classList.add("in"),i.querySelectorAll("#hDots i").forEach((l,c)=>l.classList.toggle("on",c===a)),s("hPrev").disabled=a<=0,s("hNext").textContent=a>=n-1?"Terminar \u25BA":"Siguiente \u25BA"},subtitulo(a){s("hSub").querySelector("span").textContent=a,s("hSub").classList.toggle("vacio",!a)},on({prev:a,next:r,skip:o,ir:l}){s("hPrev").onclick=c=>{an(c),qi(),a()},s("hNext").onclick=c=>{an(c),qi(),r()},s("hSkip").onclick=c=>{an(c),o()},s("hSub").onclick=c=>{an(c),o()},i.querySelectorAll("#hDots i").forEach(c=>c.onclick=u=>{an(u),l(+c.dataset.i)})},cerrar(){i.remove()}}}function qm(n){return n.map(([e,t])=>`<p><b>${pi(e)}</b><br>${t.map(pi).join("<br>")}</p>`).join("")}var yi=new URLSearchParams(location.search);yi.get("vel")&&(window.__VEL=+yi.get("vel"));yi.has("auto")&&(window.__AUTO=!0,window.__AUTO_ELIGE=+(yi.get("elige")||0));Xn.nombre=he.presentador||"Tito Giros";var xu=matchMedia("(pointer: coarse)").matches||"ontouchstart"in window,Yt=new qc({antialias:!xu,preserveDrawingBuffer:yi.has("capture"),powerPreference:"high-performance"});Yt.setPixelRatio(Math.min(devicePixelRatio,xu?1.25:1.75));Yt.setSize(innerWidth,innerHeight);Yt.toneMapping=qs;Yt.toneMappingExposure=1;Yt.shadowMap.enabled=!0;me("#app").appendChild(Yt.domElement);var _u=new gr,Ss=new Kt(52,innerWidth/innerHeight,.1,220),Ka=new Yc(Yt);Ka.addPass(new $c(_u,Ss));var Jv=new Ua(new pe(innerWidth,innerHeight),.35,.3,.85);Ka.addPass(Jv);Ka.addPass(new Jc);var Hm=he.quality==="alta",pn=yi.get("tema")||localStorage.getItem("rs3d_theme")||"normal";Wt[pn]||(pn="normal");var Rn={logoPantalla:null,logoOpts:null,banner:null},Re=Kp(_u,Rn,Yt);Re.onClic(n=>{oe.play("clic",{volume:Math.min(1,.4+n*.08)})});var Qa=()=>Jn[he.etapa]||Jn.piramides,Za=()=>Wt[pn]?.plato||Qa().escenario;async function mu(){let n=Qa();Rn.logoOpts={retro:Za()==="fortuna"};let e=await ks("logo",n);if(!e)return Rn.logoPantalla=null,Re.refrescarPantalla(),null;let t=new Image;return t.src=e.url,await t.decode().catch(()=>{}),Rn.logoPantalla=t,Re.refrescarPantalla(),e.url}var Bm={blanco:{neones:[16777215,14543103],luzA:16777215,luzB:14543103,focos:[16777215]},morado:{neones:[12996095,8006399],luzA:12996095,luzB:8006399,focos:[12996095,16777215]},arcoiris:{neones:[16765466,2073599,16742938,16722506,2797642],luzA:16732072,luzB:3836927,focos:[16765466,2073599,16722506]}};function vi(n,e=!0){pn=n;let t=Wt[n]||Wt.normal,i=t.paleta?{...t.paleta}:{};Bm[he.platoLuz]&&(i={...i,...Bm[he.platoLuz]});let s=t.plato||Qa().escenario;Re.etapa!==s&&document.querySelector("#menu")&&!me("#menu").classList.contains("hidden")&&Re.setEtapa(s),Re.setTema(Object.keys(i).length?i:null),Rn.banner=t.banner||null,Rn.logoOpts={retro:s==="fortuna"},Re.refrescarPantalla(),e&&localStorage.setItem("rs3d_theme",n)}var gu={general:[[0,6.4,11.5],[-.8,1.4,-2.5]],ruleta:[[0,7.2,4.4],[0,.6,-.8]],panel:[[-2.6,3.5,.6],[-7.6,3.1,-6.4]],atriles:[[0,3.4,3.4],[0,1.4,-3.6]],presentador:[[-1.3,2.1,2.3],[-3.95,1.6,.35]],publico:[[1,4.2,-3.5],[1,2.2,-13]],coche:[[3.4,2.6,-1],[7.2,.9,-5.6]],banda:[[5.2,3.2,-4.2],[9.6,1.5,-9.6]],pantalla:[[-2.6,3.5,.6],[-7.6,3.1,-6.4]]},Ve={mode:"menu",pos:new P(0,9,26),look:new P(0,2,0),tPos:new P(0,9,26),tLook:new P(0,2,0),yaw:0,pitch:.3};function No(n,e,t=!1){Ve.mode="show",Ve.tPos.set(...n),Ve.tLook.set(...e),t&&(Ve.pos.copy(Ve.tPos),Ve.look.copy(Ve.tLook))}var ki=n=>{let e=gu[n]||gu.general;No(e[0],e[1])};function Zv(n){let e=Re.posAtril(n),t=new P(-e.x,0,-e.z).normalize();No([e.x+t.x*3.4+.6,2.6,e.z+t.z*3.4+.8],[e.x,1.5,e.z])}var xi=null;Yt.domElement.addEventListener("pointerdown",n=>{xi={id:n.pointerId,x:n.clientX,y:n.clientY}});addEventListener("pointermove",n=>{if(!xi||xi.id!==n.pointerId)return;let e=n.clientX-xi.x,t=n.clientY-xi.y;xi.x=n.clientX,xi.y=n.clientY,Ve.yaw-=e*.006,Ve.pitch=Math.max(-.3,Math.min(1.1,Ve.pitch+t*.004))});addEventListener("pointerup",n=>{xi&&xi.id===n.pointerId&&(xi=null)});var jn={};addEventListener("keydown",n=>{jn[n.code]=!0});addEventListener("keyup",n=>{jn[n.code]=!1});var $a={x:0,y:0};{let n=me("#joy"),e=me("#knob"),t=null,i=a=>{let r=n.getBoundingClientRect(),o=a.clientX-(r.left+r.width/2),l=a.clientY-(r.top+r.height/2),c=Math.hypot(o,l),u=r.width/2-10;c>u&&(o*=u/c,l*=u/c),e.style.transform=`translate(${o}px,${l}px)`,$a.x=o/u,$a.y=l/u};n.addEventListener("pointerdown",a=>{t=a.pointerId,n.setPointerCapture(t),i(a),a.stopPropagation()}),n.addEventListener("pointermove",a=>{a.pointerId===t&&i(a)});let s=a=>{a.pointerId===t&&(t=null,$a.x=$a.y=0,e.style.transform="")};n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s)}var Lo=null;function zm(n){Ve.mode=n?"walk":Ve.mode,me("#joy").classList.toggle("hidden",!(n&&xu)),n&&(Re.walker.visible=!0,Ve.yaw=0,Ve.pitch=.3)}function Io(n){let e=me("#hint");e.textContent=n,e.classList.toggle("hidden",!n)}var Ms=null;async function jv(){let n=Kv();document.body.classList.add("en-cabecera"),me("#btnSkip").classList.remove("hidden"),oe.stopMusic();let e=null,t=await ks("musica",Qa());t?(e=new Audio(t.url),e.volume=he.music?he.musicVol:0,e.play().catch(()=>{})):oe.music("menu");let i=me("#cabLogo");i.src=Sd(1e3,640);let s=[[[-12,1.5,9],[0,1,0],[-4,3,10]],[[0,7.5,3.2],[0,.8,-.5],[.5,5.2,4.2]],[[-3,3.4,1.2],[-7.6,3.1,-6.4],[-1.5,3.2,1.8]],[[3,2.4,-1.4],[7.2,1,-5.6],[4,3.2,.5]],[[0,12,16],[0,2,-3],[0,8,12]]];Re.rueda.activar(1),Re.rueda.st.omega=4;let a=!1;Ms=()=>{a=!0};try{for(let[r,o,l]of s){if(a)break;me("#fx-flash").style.opacity=.9,oe.play("clic"),setTimeout(()=>me("#fx-flash").style.opacity=0,90),No(r,o,!0),Ve.tPos.set(...l),Ve.tLook.set(...o),Re.luces.vel=3;for(let c=0;c<16&&!a;c++)await ut(100)}if(!a){i.classList.add("on"),oe.play("banner");for(let r=0;r<28&&!a;r++)await ut(100)}}finally{if(i.classList.remove("on"),Re.luces.vel=1,Ms=null,Re.rueda.st.omega=0,document.body.classList.remove("en-cabecera"),me("#btnSkip").classList.add("hidden"),e){let r=e.volume,o=setInterval(()=>{r-=.08,e.volume=Math.max(0,r),r<=0&&(e.pause(),clearInterval(o))},80)}oe.stopMusic()}}var Kv=()=>0;async function Qv(){let n=await Wn.get("video:cabecera");if(!n||!n.blob)return!1;let e=URL.createObjectURL(n.blob),t=me("#video"),i=t.querySelector("video");return zt(new Promise(s=>{let a=!1,r=()=>{a||(a=!0,i.pause(),i.removeAttribute("src"),i.load(),t.classList.add("hidden"),me("#btnSkip").classList.add("hidden"),URL.revokeObjectURL(e),Ms=null,s(!0))};i.onended=r,i.onerror=r,Ms=r,i.src=e,i.volume=he.music?he.musicVol:0,t.classList.remove("hidden"),me("#btnSkip").classList.remove("hidden"),i.play().catch(()=>{i.muted=!0,i.play().catch(r)})}))}var Vi=null,_i={P:()=>Re,tema:()=>pn,camLibre:()=>!Vi,cam:(n,e)=>{Vi||(n==="conc"?Zv(e):ki(n))},setEtapa(n){let e=Jn[n]||Jn.piramides;Rn.logoOpts={retro:e.escenario==="fortuna"},Re.setEtapa(e.escenario),vi(pn,!1),Re.refrescarPantalla()},girar(n){let e=Re.rueda;return e.activar(n.atril,n.color),Vi||ki("ruleta"),me("#panel2d").classList.add("p2mini"),ld(()=>me("#panel2d").classList.remove("p2mini")),!n.humano||window.__AUTO?zt(ut(500).then(()=>e.girar((Math.random()<.5?-1:1)*(5+Math.random()*6)))).finally(()=>me("#panel2d").classList.remove("p2mini")):zt(new Promise(t=>{let i=me("#giro");i.innerHTML='<div class="gtit">\u{1F3A1} \xA1Gira la ruleta!</div><div class="gbar"><i></i></div><button class="jbtn gold" id="btnGiro">Mant\xE9n pulsado y suelta</button><div class="gnota">o arrastra la ruleta con el dedo o el rat\xF3n \xB7 Espacio tambi\xE9n vale</div>',i.classList.remove("hidden");let s=i.querySelector(".gbar i"),a=i.querySelector("#btnGiro"),r=null,o=0,l=0,c=!1,u=null,d=()=>{if(r==null)return;let M=(performance.now()-o)/900%2;r=M<1?M:2-M,s.style.width=r*100+"%",l=requestAnimationFrame(d)},h=M=>{M&&M.stopPropagation(),!(r!=null||c)&&(r=0,o=performance.now(),d())},f=M=>{c||(c=!0,v(),e.girar(M).then(t))},g=M=>{if(M&&M.stopPropagation(),r==null)return;let R=r;r=null,cancelAnimationFrame(l),f(-(4.5+R*9))},x=new qr,m=new En(new P(0,1,0),-1.08),p=new P,E=M=>(x.setFromCamera(new pe(M.clientX/innerWidth*2-1,-M.clientY/innerHeight*2+1),Ss),!x.ray.intersectPlane(m,p)||Math.hypot(p.x,p.z)>Gn+.4?null:Math.atan2(-p.z,p.x)),w=M=>{let R=E(M);R==null||c||(u={a:R,t:performance.now(),w:0})},y=M=>{if(!u)return;let R=E(M);if(R==null)return;let F=R-u.a;F=Math.atan2(Math.sin(F),Math.cos(F));let q=performance.now(),z=Math.max(1,q-u.t)/1e3;e.empujar(F),u.w=u.w*.5+F/z*.5,u.a=R,u.t=q},b=()=>{if(!u)return;let M=u.w;u=null,Math.abs(M)>1.5?f(Math.sign(M)*Math.min(14,Math.max(4.5,Math.abs(M)))):yn("Arrastra m\xE1s r\xE1pido para que gire",1500)},A=M=>{M.code==="Space"&&!M.repeat&&(M.preventDefault(),h())},C=M=>{M.code==="Space"&&(M.preventDefault(),g())};a.addEventListener("pointerdown",h),a.addEventListener("pointerup",g),a.addEventListener("pointerleave",g),Yt.domElement.addEventListener("pointerdown",w),addEventListener("pointermove",y),addEventListener("pointerup",b),addEventListener("keydown",A),addEventListener("keyup",C);function v(){i.classList.add("hidden"),i.innerHTML="",cancelAnimationFrame(l),Yt.domElement.removeEventListener("pointerdown",w),removeEventListener("pointermove",y),removeEventListener("pointerup",b),removeEventListener("keydown",A),removeEventListener("keyup",C)}ld(v)})).finally(()=>me("#panel2d").classList.remove("p2mini"))},async cabecera(){if(!(he.cabecera==="video"&&await Qv()))return jv()},paseo(n){Re.ocultarFig(n,!0),Re.walker.position.set(0,0,9),Re.walker.rotation.y=Math.PI;let e=Re.posAtril(n);return Re.marca.position.set(e.x,.05,e.z),Re.marca.visible=!0,Ve.pos.set(0,3.5,16),zm(!0),sn(Be.paseo,6e3),oe.say(Be.paseo),Io("\u{1F579}\uFE0F Camina hasta el aro verde detr\xE1s de la ruleta \xB7 PC: WASD + rat\xF3n"),Oi([{label:"Ir a mi marcador \u25B6",fn:()=>{Re.walker.position.set(e.x,0,e.z)}}]),zt(new Promise(t=>{Lo=()=>{Math.hypot(Re.walker.position.x-e.x,Re.walker.position.z-e.z)<.9&&(Lo=null,t())},(yi.has("autopaseo")||window.__AUTO)&&setTimeout(()=>{Re.walker.position.set(e.x,0,e.z)},300)})).finally(()=>{Io(""),Oi([]),Re.marca.visible=!1,Re.walker.visible=!1,Ja=!1,Re.ocultarFig(n,!1),me("#joy").classList.add("hidden"),ki("general")})},orbita(){Ve.mode="menu"},saltable(n){return me("#btnSkip").classList.remove("hidden"),zt(Promise.race([n,new Promise(e=>{Ms=()=>e("skip")})])).finally(()=>{Ms=null,me("#btnSkip").classList.add("hidden"),oe.stopVoice()})},marcador(n){let e=me("#marcador");if(!n){e.classList.add("hidden");return}e.innerHTML=n,e.classList.remove("hidden")},monologo:(n,e=!1)=>Vm(n,e),iniciar:n=>Kn(n),menu:(n="main")=>Gi(n)},Xs="title",e3={title:null,main:"title",play:"main",train:"play",options:"main",help:"main",credits:"main",concursantes:"options",canciones:"options",monologos:"play"};Tm(()=>oe.play("tecla"));function Sd(n=900,e=560){let t=document.createElement("canvas");t.width=n,t.height=e;let i=t.getContext("2d");if(Rn.logoPantalla&&Rn.logoPantalla.complete&&Rn.logoPantalla.naturalWidth){let s=Rn.logoPantalla,a=Math.min((n-40)/s.naturalWidth,(e-20)/s.naturalHeight);i.drawImage(s,(n-s.naturalWidth*a)/2,(e-s.naturalHeight*a)/2,s.naturalWidth*a,s.naturalHeight*a)}else Wh(i,n*.5,e*.5,n*.78,.3,Rn.logoOpts||{});return t.toDataURL("image/png")}var Po=()=>{xo(),oe.aplicarNiveles()},zi=(n,e)=>Cm(he,n,t=>{Po(),e&&e(t)}),_d=(n,e,t)=>Lm(he,n,e,i=>{Po(),t&&t(i)}),vd=n=>Im(he,n,Po,()=>oe.play(n==="publicoVol"?"aplausos":"tecla")),Ya="",vs=null,ja=!1;function Gi(n="main"){ou(),oe.stopAll(),Mo(),Ao(),me("#giro").classList.add("hidden"),fn.show(!1),Io(""),me("#bubble").classList.add("hidden"),gi?.cerrar(),gi=null,Lo=null,Re.walker.visible=!1,Re.marca.visible=!1,me("#joy").classList.add("hidden"),Ja=!1,Vi=null,dm(),Oi([]),cu(),gs(""),_i.marcador(null),me("#video").classList.add("hidden"),me("#topbar").classList.add("hidden"),me("#glights").classList.add("hidden"),document.body.classList.remove("en-cabecera"),me("#cabLogo").classList.remove("on"),Re.reset(),fn.sinTimer(),Re.etapa!==Za()&&(Re.setEtapa(Za()),vi(pn,!1)),Ve.mode="menu",ja||(oe.music("menu"),ja=!0),wt(n)}function wt(n){Xs=n;let e=me("#menu"),t=Wt[pn]||Wt.normal,i=Qa();if(n==="title")return Dm(e,{logo:Sd(900,640),sub:"El juego",onStart:()=>{oe.play("banner"),Gi("main")}});let s=Om(e,{logo:Sd(),tag:pn==="normal"?"EL JUEGO \xB7 3D \xB7 "+i.corto:t.emoji+" "+(t.banner||"Especial "+t.name),version:sd,cls:["options","concursantes","canciones"].includes(n)?"opts":["help","credits"].includes(n)?"text":""}),a=wm,r=o=>Rm(()=>wt(o));if(n==="main")s.append(a("Jugar","Programa completo, entrenamiento, cl\xE1sico\u2026","gold",()=>wt("play")),a("Opciones","Sonido, etapa, calidad gr\xE1fica, pantalla completa","",()=>wt("options")),a("La historia de La ruleta",`${at(he.presentador)} te cuenta la historia del programa`,"",()=>Kn("historia")),a("C\xF3mo se juega","Las reglas del concurso","",()=>wt("help")),a("Cr\xE9ditos","","",()=>wt("credits"))),matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches||s.append(a("Instalar app","Juega sin conexi\xF3n desde tu pantalla de inicio","inst",n3));else if(n==="play")s.append(a("Programa completo",`Cabecera, 2 velocidades, 3 paneles, ruleta final y despedida \xB7 ${at(t.plato?Jn[t.plato].corto:i.corto)}`,"gold",()=>Kn("programa")),a("Entrenamiento","Practica cada prueba por separado","",()=>wt("train")),a("Cl\xE1sico","La ruleta de la fortuna (1990-97): plat\xF3 retro y pesetas","",()=>Kn("clasico")),a("Explorar el plat\xF3","Pasea libremente por el plat\xF3 3D","",()=>Kn("explorar")),a("Mon\xF3logos del presentador","Con el p\xFAblico, al tel\xE9fono y las normas","",()=>wt("monologos")),Bi("Programa especial"),Nm(Wt,pn,o=>{vi(o),wt("play")}),r("main"));else if(n==="train"){s.append(Bi("Entrenamiento (sin presi\xF3n)")),Object.entries(gd).forEach(([u,[d,h]],f)=>s.append(a(d,h,f===0?"gold":"",()=>Kn("entreno:"+u))));let o=document.createElement("div");o.className="mrow";let l=document.createElement("button"),c=()=>{l.className="tbtn"+(Co?" sel":""),l.innerHTML=Co?"<span>\u267E\uFE0F</span>Tiempo ilimitado":"<span>\u23F1\uFE0F</span>Con reloj"};c(),l.onclick=u=>{u.stopPropagation(),Co=!Co,c(),oe.play("tecla")},o.append(l,r("play")),s.append(o)}else if(n==="options"){s.append(Bi("Opciones")),s.append(_s("\u{1F3DF}\uFE0F Etapa / plat\xF3",Zn(Object.values(Jn).map(h=>({t:h.corto,sel:he.etapa===h.id,fn:()=>{he.etapa=h.id,Po(),Re.setEtapa(Za()),vi(pn,!1),mu().then(()=>wt("options"))}}))),mi(`${i.nombre}: ${i.nota}${Wt[pn]?.plato?" (Ahora tienes elegido el especial de verano, que usa su propio plat\xF3.)":""}`))),s.append(Xt("\u{1F3B5} M\xFAsica",zi("music"),vd("musicVol"))),s.append(Xt("\u{1F3AC} Cabecera",..._d("cabecera",[["video","Mi v\xEDdeo"],["3d","Plat\xF3 3D"]])));let o=_s("\u{1F3B6} M\xFAsica de la cabecera");s.append(o),t3(o),s.append(Xt("\u{1F50A} Efectos",zi("sfx"),vd("sfxVol")));let l=_s("",Xt("\u{1F44F} P\xFAblico",zi("publico"),vd("publicoVol")),Xt("\u{1F465} P\xFAblico en las gradas",zi("gradas",Wm)),mi("Aplausos, \xABooh\xBB y risas del p\xFAblico. Son sonidos sintetizados por el propio juego (no son grabaciones)."));l.querySelector(".olabel").remove(),s.append(l),s.append(Xt("\u{1F3A4} Voz del presentador",zi("voz")),Xt("\u{1F4D6} El presentador lee las preguntas",zi("lee")),Xt("\u23E9 Velocidad de lectura",..._d("leeVel",[["normal","Normal"],["rapida","R\xE1pida"]])),Xt("\u{1F604} Chistes del presentador",zi("chistes")),Xt("\u{1F3AD} Mon\xF3logo del presentador",zi("monologo"))),s.append(_s("\u{1F465} Concursantes",Hi(`${he.nombre?"T\xFA: "+at(he.nombre)+(he.profesion?" \xB7 "+at(he.profesion):""):"T\xFA: sin nombre"} \xB7 Rivales: ${xs.slice(0,3).map(h=>at(h.nombre)).join(", ")}\u2026 \xB7 Presenta: ${at(he.presentador)}`),Zn([{t:"\u270F\uFE0F Nombres y profesiones",sel:!0,full:!0,fn:()=>wt("concursantes")}]))),s.append(_s("\u{1F4A1} Luces del plat\xF3",Zn([["auto","Auto"],["blanco","Blanco"],["morado","Morado"],["arcoiris","Arco\xEDris"]].map(([h,f])=>({t:f,sel:he.platoLuz===h,fn:()=>{he.platoLuz=h,Po(),vi(pn),wt("options")}}))))),s.append(mi("Ti\xF1e los neones, las tiras de luz y los focos del plat\xF3. "+(he.platoLuz==="auto"?"Las luces autom\xE1ticas siguen los colores de cada especial.":"Las luces fijas se mantienen en todos los especiales."),"mtext"));let c=Xt("\u2728 Calidad gr\xE1fica",..._d("quality",[["baja","Baja"],["media","Media"],["alta","Alta"]],Gm));s.append(c),Md().then(h=>{let f=_s("\u{1F3B5} Mis canciones",Hi(h.length?`${h.length} ${h.length===1?"canci\xF3n":"canciones"}: ${at(h.map(g=>g.name).join(", "))}`:"Sin canciones: suena la m\xFAsica del juego"),Zn([{t:"\u{1F3B5} Gestionar mis canciones",sel:!0,full:!0,fn:()=>wt("canciones")}]),mi("Sube canciones desde tu dispositivo (se quedan solo en \xE9l). Las toca la banda durante los paneles."));s.insertBefore(f,c)});let u=matchMedia("(display-mode: standalone), (display-mode: fullscreen)").matches,d=Zn([{t:u?"Siempre (app)":document.fullscreenElement?"Salir":"Activar",sel:!!document.fullscreenElement,disabled:u,fn:async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else{await document.documentElement.requestFullscreen({navigationUI:"hide"});try{await screen.orientation.lock("landscape")}catch{}}}catch{yn("Tu navegador no permite pantalla completa aqu\xED")}setTimeout(()=>wt("options"),300)}}]);s.append(Xt("\u26F6 Pantalla completa",d),mi(`Rendimiento actual: ${Math.round(bd)} fps. Si el juego va lento en tu m\xF3vil, elige calidad \xABBaja\xBB.`,"mtext"),r("main"))}else if(n==="canciones"){s.append(Bi("Mis canciones"));let o=document.createElement("div");o.className="ocustom",s.append(o),Md().then(l=>{o.innerHTML="",l.length||o.append(Hi("Todav\xEDa no has subido ninguna canci\xF3n.")),l.forEach((c,u)=>o.append(Xt("\u{1F3B5} "+c.name,...Zn([{t:"\u25B6 Probar",fn:d=>Ad(URL.createObjectURL(c.blob),d)},{t:"\u{1F5D1} Quitar",fn:async()=>{l.splice(u,1),await Wn.put("canciones",l),await Ed(),wt("canciones")}}]).children))),o.append(Zn([{t:"\u{1F4C2} Subir canci\xF3n de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async c=>{l.push({name:c.name.replace(/\.[^.]+$/,""),blob:c}),await Wn.put("canciones",l),await Ed(),yn("\u2705 \xA1Canci\xF3n guardada en este dispositivo!"),wt("canciones")}}}]))}),s.append(mi("Las canciones se quedan solo en este dispositivo; no se suben ni se comparten. Las toca la banda durante los paneles."),r("options"))}else if(n==="concursantes"){s.append(Bi("Concursantes"));let o=(l,c,u)=>Pm(he,l,c,u,()=>{xo(),l==="presentador"&&(Xn.nombre=he.presentador||"Tito Giros")});s.append(Xt("\u{1F64B} Tu nombre",o("nombre","Ej.: Iker",18)),Xt("\u{1F4BC} Profesi\xF3n",o("profesion","Ej.: estudiante",24)),Xt("\u{1F399}\uFE0F Presentador",o("presentador","Tito Giros",22)),Xt("\u{1F524} Copresentadora",o("copresentadora","Lola Letras",22)),Xt("\u{1FAAA} Presentar a los concursantes",zi("presentaciones"))),s.append(_s("Tus rivales virtuales",...xs.map(l=>Hi(`${l.emoji} <b>${at(l.nombre)}</b> \xB7 ${at(l.prof)}`)))),s.append(mi(`${he.presentador||"Tito Giros"} te presentar\xE1 al empezar el Programa completo. Tu nombre sale en tu marcador azul y en los cr\xE9ditos.`),r("options"))}else if(n==="monologos"){s.append(Bi("Mon\xF3logos del presentador"),a("\u{1F3B2} Al azar","Uno cualquiera (y luego \xABSiguiente\xBB)","gold",()=>Kn("mono:azar")));let o=document.createElement("div");o.className="monolist",fi.forEach(l=>{let c=document.createElement("button");c.className="tbtn",c.innerHTML=`<span>${bm[l.tipo]}</span><b>${at(l.titulo)}</b><small>${Am[l.tipo]}</small>`,c.onclick=u=>{u.stopPropagation(),oe.play("tecla"),Kn("mono:"+l.id)},o.appendChild(c)}),s.append(o,mi(`${he.presentador} es un presentador virtual inventado, con voz sint\xE9tica de Piper (davefx). Pulsa \xABSaltar \u23ED\xBB para terminar el mon\xF3logo.`,"mtext"),r("play"))}else if(n==="help"){s.append(r("main"),Bi("C\xF3mo se juega"));let o=document.createElement("div");o.className="mtext",o.innerHTML=ym,s.append(o)}else if(n==="credits"){s.append(r("main"),Bi("Cr\xE9ditos"));let o=document.createElement("div");o.className="mtext creditos",o.innerHTML=qm(xd(null))+`<p><b>Especial 300 suscriptores</b><br>Dedicado a los suscriptores del canal de YouTube \xABIkeriano el campe\xF3n 2\xBB</p><p class="small">Versi\xF3n ${sd}</p><p class="small">Juego de fans sin \xE1nimo de lucro. \xABLa ruleta de la suerte\xBB y \xABLa ruleta de la fortuna\xBB son formatos de televisi\xF3n de sus respectivos due\xF1os (basados en \xABWheel of Fortune\xBB); este juego no est\xE1 afiliado a ninguna cadena ni productora. El presentador, la copresentadora y los concursantes son personajes virtuales inventados, sin caras de personas reales. Interfaz basada en el APK \xAB\xA1Ahora Caigo! El juego 3D\xBB de Iker.</p>`,s.append(o)}}function Ad(n,e){if(vs){vs.pause(),vs=null,e&&(e.textContent="\u25B6 Probar"),ja=!1,oe.music("menu"),ja=!0;return}oe.stopMusic(),vs=new Audio(n),vs.volume=he.musicVol,vs.play().catch(()=>{}),e&&(e.textContent="\u23F9 Parar");let t=vs;setTimeout(()=>{vs===t&&Ad(null,e)},12e3)}async function t3(n){let e=Qa(),t=await ks("musica",e),i=await ks("logo",e),s=await Wn.get("video:cabecera");n.append(Hi(t?`\u{1F3B5} <b>${at(t.nombre)}</b> (${at(e.corto)})`:"Sin audio propio: suena la m\xFAsica del juego"),Zn([{t:"\u{1F4C2} Elegir audio de mi dispositivo",sel:!0,full:!0,file:{accept:"audio/*",onFile:async a=>{n.querySelector(".oname").textContent="\u23F3 Cargando \xAB"+a.name+"\xBB\u2026",await Qh("musica",e.id,a),Ya="\u2705 \xA1Audio guardado en este dispositivo!",wt("options")}}},{t:"\u25B6 Probar",disabled:!t,fn:a=>Ad(t.url,a)},{t:"\u{1F5D1} Quitar",disabled:!t||t.origen!=="subido",fn:async()=>{await ed("musica",e.id),Ya="Audio quitado: vuelve la m\xFAsica del juego",wt("options")}}])),Ya&&(n.append(Hi(Ya,"omsg")),Ya=""),n.append(mi("El audio se queda solo en este dispositivo; no se sube ni se comparte. Cada etapa puede tener su propia cabecera.")),n.append(Hi(`\u{1F39E}\uFE0F Mi v\xEDdeo de cabecera: ${s?"<b>"+at(s.name)+"</b>":"ninguno"}`),Zn([{t:"\u{1F4C2} Elegir v\xEDdeo",file:{accept:"video/*",onFile:async a=>{await Wn.put("video:cabecera",{blob:a,name:a.name,type:a.type}),he.cabecera="video",xo(),Ya="\u2705 \xA1V\xEDdeo guardado!",wt("options")}}},{t:"\u{1F5D1} Quitar v\xEDdeo",disabled:!s,fn:async()=>{await Wn.del("video:cabecera"),he.cabecera="3d",xo(),wt("options")}},{t:"\u25B6 Ver cabecera",fn:async()=>{me("#menu").classList.add("hidden"),ou(),ja=!1;try{await _i.cabecera()}catch{}Gi("options")}}])),n.append(Hi(`\u{1F5BC}\uFE0F Logo propio (${at(e.corto)}): ${i&&i.origen==="subido"?"<b>"+at(i.nombre)+"</b>":"el del juego"}`),Zn([{t:"\u{1F4C2} Elegir imagen",file:{accept:"image/*",onFile:async a=>{await Qh("logo",e.id,a),await mu(),wt("options")}}},{t:"\u{1F5D1} Quitar logo",disabled:!i||i.origen!=="subido",fn:async()=>{await ed("logo",e.id),await mu(),wt("options")}}]))}var Md=async()=>await Wn.get("canciones")||[];async function Ed(){let n=await Md();oe.setCanciones(n.map(e=>URL.createObjectURL(e.blob)))}var Co=!1;function n3(){let n=Um(me("#menu"),`<h2>Instalar La ruleta de la suerte</h2>${pu?'<p><button class="mbtn gold" id="instNow">\u{1F4F2} Instalar ahora</button></p>':""}<p><b>Android (Chrome):</b> men\xFA \u22EE \u2192 \xABInstalar aplicaci\xF3n\xBB o \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>iPhone/iPad (Safari):</b> bot\xF3n Compartir \u2192 \xABA\xF1adir a pantalla de inicio\xBB.</p><p><b>PC (Chrome/Edge):</b> icono de instalar \u2295 en la barra de direcciones.</p><p>Una vez instalada funciona <b>sin conexi\xF3n</b>.</p>`),e=n.querySelector("#instNow");e&&(e.onclick=async t=>{t.stopPropagation();let i=pu;pu=null,i.prompt(),n.remove()})}var pu=null;addEventListener("beforeinstallprompt",n=>{n.preventDefault(),pu=n});async function Kn(n){let e=ou();Xs="juego",oe.stopAll(),ja=!1,Mo(),me("#menu").classList.add("hidden"),me("#topbar").classList.remove("hidden"),Oi([]),_i.marcador(null);try{if(n==="historia")return await a3(e),Gi("main");if(n==="explorar")return await i3(e);if(n.startsWith("mono:"))return await Vm(n.slice(5));if(n.startsWith("entreno:"))return _i.cam("presentador"),await We(Be.entreno),await Em(n.slice(8),_i,{ilimitado:Co});await Mm(n,_i)}catch(t){t!==Gs&&(console.error(t),yn("Error: "+t.message,5e3),Gi("play"))}}async function i3(n){Re.walker.position.set(0,0,9),zm(!0),oe.music("trilha"),gs("#LaRuletaDeLaSuerte"),Io("\u{1F579}\uFE0F Joystick / WASD para andar \xB7 arrastra para mirar \xB7 \u{1F441} cambia de c\xE1mara"),setTimeout(()=>Io(""),6e3),sn(Be.explora,4500),oe.say(Be.explora);let e=!1,t=new P;for(;;){await ut(300,n),Re.presentador.getWorldPosition(t);let i=Math.hypot(t.x-Re.walker.position.x,t.z-Re.walker.position.z);i<2.6&&!e&&(e=!0,sn(Be.exploraSaludo,3500),oe.say(Be.exploraSaludo)),i>4&&(e=!1)}}async function Vm(n,e=!1){let t=!n||n==="azar"?fi[Math.floor(Math.random()*fi.length)]:fi.find(r=>r.id===n)||fi[0];e||(oe.play("aplausos"),gs("#LaRuletaDeLaSuerte")),ki(t.cam);let i=(async()=>{for(let r of t.lineas)await We(r,3500),await ut(400);oe.play("badumtss"),oe.play("aplausos")})();if(await _i.saltable(i),me("#bubble").classList.add("hidden"),e)return;let s=fi.indexOf(t),a=n==="azar"?"azar":fi[(s+1)%fi.length].id;_i.marcador(`\u{1F3AD} \xAB${at(t.titulo)}\xBB`),_i.orbita(),Oi([{label:"Siguiente \u25B6",cls:"gold",fn:()=>Kn("mono:"+a)},{label:"Repetir",fn:()=>Kn("mono:"+t.id)},{label:"Lista",fn:()=>Gi("monologos")}]),await zt(new Promise(()=>{}))}var Ja=!1,yd=[null,"general","ruleta","panel","atriles","presentador","coche","publico"];me("#btnMenu").onclick=n=>{n.stopPropagation(),oe.play("tecla"),Gi(Xs==="juego"?"play":"main")};me("#btnCam").onclick=n=>{if(n.stopPropagation(),oe.play("tecla"),Ve.mode==="walk"){Ja=!Ja,yn(Ja?"\u{1F441} Primera persona":"\u{1F441} Tercera persona",1200);return}Vi=yd[(yd.indexOf(Vi)+1)%yd.length],Vi&&ki(Vi),yn("\u{1F441} C\xE1mara: "+(Vi||"autom\xE1tica"),1200)};me("#btnSkip").onclick=n=>{n.stopPropagation(),Ms&&Ms()};me("#btnLuces").onclick=n=>{n.stopPropagation(),me("#glights").classList.toggle("hidden")};function km(){if(me("#menu .modal"))return me("#menu .modal").remove(),!0;if(me("#menu").classList.contains("hidden"))return me("#btnMenu").click(),!0;let n=e3[Xs];return n?(oe.play("tecla"),wt(n),!0):!1}window.__back=km;addEventListener("keydown",n=>{n.key==="Escape"&&km()});var Td={vel:1};Re.luces=Td;me("#glights").innerHTML=`<div class="gl-head"><b>\u{1F4A1} Luces del plat\xF3</b><button data-close>\u2715</button></div>
  <label>Velocidad focos <input type="range" min="0" max="3" step="0.1" value="1" id="glVel"></label>
  <label>Exposici\xF3n <input type="range" min="0.4" max="1.6" step="0.05" value="1" id="glInt"></label>
  <div class="chips">${Object.entries(Wt).map(([n,e])=>`<button data-gl="${n}">${e.emoji} ${at(e.name)}</button>`).join("")}<button data-gl="flash">\u26A1 Fogonazo</button><button data-gl="giro">\u{1F3A1} Girar la ruleta</button><button data-gl="confeti">\u{1F389} Confeti</button></div>`;me("#glights").addEventListener("click",n=>{n.stopPropagation(),n.target.closest("[data-close]")&&me("#glights").classList.add("hidden");let e=n.target.closest("[data-gl]");if(!e)return;let t=e.dataset.gl;Wt[t]?vi(t,!1):t==="flash"?(oe.play("rayo"),me("#fx-flash").style.opacity=.8,setTimeout(()=>me("#fx-flash").style.opacity=0,120)):t==="giro"?Re.rueda.girando||(Re.rueda.st.activo<0&&Re.rueda.activar(1),Re.rueda.girar(-8)):(Re.celebrar(),oe.play("ovacion"))});me("#glVel").oninput=n=>{Td.vel=+n.target.value};me("#glInt").oninput=n=>{Yt.toneMappingExposure=+n.target.value};function Gm(){let n=he.quality;Yt.setPixelRatio(n==="baja"?.75:n==="media"?Math.min(devicePixelRatio,xu?1:1.25):Math.min(devicePixelRatio,1.75)),Yt.shadowMap.enabled=n!=="baja",Hm=n==="alta",Yt.setSize(innerWidth,innerHeight),Ka.setSize(innerWidth,innerHeight)}function Wm(){Re.gente.visible=he.gradas}var gi=null,s3=()=>`\xA1Hola! Soy ${he.presentador||"Tito Giros"}. Bienvenidos a la historia de La ruleta de la suerte. Empecemos por el principio.`,Xm="\xA1Hola! Bienvenidos a la historia de La ruleta de la suerte. Empecemos por el principio.",Ym="Y esta ha sido la historia de La ruleta de la suerte. \xA1Gracias por acompa\xF1arme!";async function a3(n){oe.music("trilha"),gs("#RuletaHistoria");let e=fu.length;gi=Fm({total:e,presentador:he.presentador||"El presentador"});let t=0,i=null;gi.on({prev:()=>i&&i(Math.max(0,t-1)),next:()=>i&&i(t+1),skip:()=>i&&i("skip"),ir:r=>i&&i(r)});let s=async(r,o=r)=>{gi.subtitulo(r);let l=null,c=new Promise(d=>{i=h=>{l=h,d()}}),u=he.voz?oe.say(o).then(()=>ut(1500,n)):ut(Math.max(3500,r.length*60),n);return await zt(Promise.race([u,c])),oe.stopVoice(),um(n),l};ki("presentador"),Re.pantalla("info",{title:"LA HISTORIA",rows:[["Cap\xEDtulos",String(e)],["Desde","1990"]]}),gi.mostrar(-1,{emoji:"\u{1F4D6}",t:"La historia de La ruleta de la suerte",rows:[["Cap\xEDtulos",String(e)],["Presenta",he.presentador||"Tito Giros"]]});let a=await s(s3(),Xm);for(t=typeof a=="number"?a:0;t<e;){let r=fu[t];Re.setEtapa(r.etapa||Za()),vi(pn,!1),r.cam==="ruleta"&&(Re.rueda.activar(1),Re.rueda.girar(-6)),ki(r.cam),Re.pantalla("info",{title:r.t.toUpperCase(),rows:r.rows}),gi.mostrar(t,{emoji:r.emoji,t:r.t,rows:r.rows}),a=await s(r.sub),t=a==="skip"||a==null?t+1:a}Re.setEtapa(Za()),vi(pn,!1),Re.pantalla("logo"),ki("presentador"),oe.play("aplausos"),gi.mostrar(e-1,{emoji:"\u{1F3A1}",t:"\xA1Fin!",rows:[]}),await s(Ym),gi.cerrar(),gi=null}window.__frases=()=>{let n=[],e=(r,o="davefx",l=!1)=>{r&&typeof r=="string"&&n.push({v:o,t:r.trim(),q:l})};Object.values(Be).forEach(r=>Array.isArray(r)?r.forEach(o=>e(o)):e(r)),hu.forEach(r=>e(r)),fi.forEach(r=>r.lineas.forEach(o=>e(o))),fu.forEach(r=>e(r.sub)),[Xm,Ym].forEach(r=>e(r)),Object.values(Wt).forEach(r=>{e(r.saludo),(r.extra||[]).forEach(o=>e(o))}),Object.values(Yn).forEach(r=>Array.isArray(r)?r.forEach(o=>e(o,"daniela")):e(r,"daniela"));let t=[...new Set(xs.map(r=>r.voz).concat(["sharvard"]))];Object.values(di).flat().forEach(r=>t.forEach(o=>e(r,o))),Object.keys(uu).forEach(r=>t.forEach(o=>e(dd(r),o))),xs.forEach(r=>e(`Te toca, ${r.nombre}.`));let i=[...new Set([1,...Object.values(Wt).map(r=>r.mult||1)])];Zt.filter(r=>r.tipo==="num").forEach(r=>{i.forEach(o=>e(`${r.v*o} euros.`)),e(`${r.v*100} pesetas.`)}),[...tu,...Object.values(Wt).flatMap(r=>r.premios||[]),{t:"500.000 pesetas"},{t:"1.000.000 de pesetas"},{t:"250.000 pesetas"}].forEach(r=>e(`En el sobre hab\xEDa\u2026 ${r.t.replace(/[^\p{L}\p{N} .,!¡€]/gu,"").trim()}.`));let a=new Set;return[...Wa.paneles,...Object.values(Wa.especiales).flat()].forEach(r=>{e(r.f,"davefx",!0),a.add(r.tema)}),a.forEach(r=>e(bo(r))),n.filter(r=>r.v==="davefx"&&!r.q&&/euro|€/i.test(r.t)).forEach(r=>e(rd(r.t))),n};addEventListener("resize",()=>{Ss.aspect=innerWidth/innerHeight,Ss.updateProjectionMatrix(),Yt.setSize(innerWidth,innerHeight),Ka.setSize(innerWidth,innerHeight)});var r3=new Br,Ro=0,bd=60,ys=new P;function o3(){let n=Math.min(r3.getDelta(),.05);Ro+=n,bd=bd*.95+1/Math.max(n,.001)*.05;let e=Re.walker;if(Ve.mode==="walk"){let s=$a.x,a=$a.y;(jn.KeyW||jn.ArrowUp)&&(a-=1),(jn.KeyS||jn.ArrowDown)&&(a+=1),(jn.KeyA||jn.ArrowLeft)&&(s-=1),(jn.KeyD||jn.ArrowRight)&&(s+=1);let r=Math.hypot(s,a);if(r>.1){let o=(jn.ShiftLeft?6:3.6)*Math.min(1,r)*n;s/=Math.max(1,r),a/=Math.max(1,r);let l=-Math.sin(Ve.yaw),c=-Math.cos(Ve.yaw),u=Math.cos(Ve.yaw),d=-Math.sin(Ve.yaw),h=(l*-a+u*s)*o,f=(c*-a+d*s)*o,g=e.position.x+h,x=e.position.z+f;Re.bloqueado(g,x)?Re.bloqueado(g,e.position.z)?Re.bloqueado(e.position.x,x)||(e.position.z=x):e.position.x=g:(e.position.x=g,e.position.z=x),e.rotation.y=Math.atan2(h,f),e.children.forEach((m,p)=>{p>=5&&(m.rotation.x=Math.sin(Ro*10)*.5*(p%2?1:-1))})}if(Ja)e.visible=!1,Ve.tPos.set(e.position.x,1.65,e.position.z),Ve.tLook.set(e.position.x-Math.sin(Ve.yaw)*5,1.65-Ve.pitch*3,e.position.z-Math.cos(Ve.yaw)*5);else{e.visible=!0;let o=4.4*Math.cos(Ve.pitch*.6);Ve.tPos.set(e.position.x+Math.sin(Ve.yaw)*o,1.8+Ve.pitch*2.6,e.position.z+Math.cos(Ve.yaw)*o),Ve.tLook.set(e.position.x,1.4,e.position.z)}Lo&&Lo()}else if(Ve.mode==="menu"){let s=Math.sin(Ro*.06)*.75;Ve.tPos.set(Math.sin(s)*15,6.5+Math.sin(Ro*.2)*1.2,Math.cos(s)*15+3),Ve.tLook.set(0,3,-5)}let t=Ve.mode==="walk"?10:2.2;Ve.pos.lerp(Ve.tPos,Math.min(1,n*t)),Ve.look.lerp(Ve.tLook,Math.min(1,n*t)),Ss.position.copy(Ve.pos),Ss.lookAt(Ve.look),Re.update(Ro*Td.vel,n);let i=me("#bubble");if(!i.classList.contains("hidden"))if(performance.now()>Xn.hasta)i.classList.add("hidden");else{(Xn.quien==="copre"?Re.copre:Xn.quien!=null&&Re.figs[Xn.quien]?Re.figs[Xn.quien]:Re.presentador).getWorldPosition(ys),ys.y+=2,ys.project(Ss);let a=ys.z<1&&Math.abs(ys.x)<1.1&&Math.abs(ys.y)<1.1;i.style.left=Math.max(160,Math.min(innerWidth-160,(ys.x*.5+.5)*innerWidth))+"px",i.style.top=Math.max(80,a?(-ys.y*.5+.5)*innerHeight:90)+"px"}Hm?Ka.render():Yt.render(_u,Ss)}Yt.setAnimationLoop(o3);vi(pn,!1);Gm();Wm();Ed();mu().then(()=>{(Xs==="title"||Xs==="main")&&!me("#menu").classList.contains("hidden")&&wt(Xs)});Gi(yi.has("main")?"main":"title");document.addEventListener("visibilitychange",()=>{document.hidden?oe.stopMusic():me("#menu").classList.contains("hidden")||oe.music("menu")});addEventListener("pointerdown",function n(){me("#menu").classList.contains("hidden")||oe.music("menu"),removeEventListener("pointerdown",n)});setTimeout(()=>me("#loading").classList.add("hidden"),600);yi.get("cam")&&(me("#menu").classList.add("hidden"),No(...gu[yi.get("cam")],!0));"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.__rs=window.__at={P:Re,api:_i,iniciar:Kn,irMenu:Gi,Lt:wt,camara:ki,show:No,CAMS:gu,aplicarTema:vi,ETAPAS:Jn,ctx:Rn,cfg:he};window.__plato={ok:!0,scene:_u,renderer:Yt};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
