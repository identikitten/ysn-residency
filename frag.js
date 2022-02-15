const frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;



varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b) {
     return vec4(r / 255.0, g / 255.0, b/255.0, 1.0);
}

void main(void)
{
    vec2 uv = v_texcoord;
  




    vec4 tl = rgb(255.0,252.0,255.0);
    vec4 tr = rgb(255.0,0.0,252.0);
    vec4 bl = rgb(174.0,223.0,227.0);
    vec4 br = rgb(234.0, 214.0, 170.0);

    float dispY = 0.2 * sin(u_time - 0.25);
    float dispX = 0.2 * sin(u_time * 0.25);

    vec4 color = mix(
    mix(tl, tr, uv.x + dispX),
    mix(bl, br, uv.x - dispX),
    uv.y + dispY
    );

    gl_FragColor = color;
}
`
