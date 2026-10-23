// Feature implementation recovered from Omar’s public FORMA demo, 23 October 2026.
// Source: https://omartamerr10.github.io/forma-demo/assets/index-pbD0ZS0m.js
// React runtime replaced by normal package imports. Domain rules and bilingual screens retained.
import React, * as V from "react";
import * as e from "react/jsx-runtime";
import * as rg from "react-dom";
import OrbitHome from "./OrbitHome.jsx";
import { OrbitChrome, useOrbitMotion } from "./OrbitChrome.jsx";
const Tn = React;
import {
  wu,
  xe,
  Nu,
  be,
  Ka,
  Nf,
  Sf,
  mt,
  Ye,
  Ks,
  Cl,
  Cf,
  Ve,
  ea,
  Wt,
  dt,
  Jt,
  as,
  Fo,
  fn,
  zf,
  Tf,
  Jn,
  qo,
  Qo,
  Mf,
  Pf,
  kl,
  de,
  ze,
  En,
  Xt,
  lt,
  Mn,
  ks,
  Za,
  zl,
  qt,
  Ef,
  Tl,
  Ml,
  If,
  Yo,
  Pl,
  Lf,
  bt,
  gn,
  Pn,
  Xa,
  en,
  El,
  Ja,
  Su,
  Ko,
  Re,
  Wa,
  ta,
  Il,
  Zs,
  Zo,
  bl,
  Cu,
  ts,
  Xo,
  Jo,
  Ll,
  zu,
  Af,
  er,
  Tu,
  Mu,
  Pu,
  ec,
  $f,
  Of,
  Rf,
  Ff,
  qf,
  _f,
  wl,
  Df,
  Hf,
  Eu,
  Bf,
  tc,
  Wf,
  Iu,
  Uf,
  Vf,
  _o,
  Gf,
  js,
  Qf,
  Yf,
  Kf,
  Zf,
  Lu,
  Xf,
} from "./domain.js";
import { Jf, eg, tg, ng, sg, ag, ru, Qa, Au } from "./i18n.js";
var Ao = { exports: {} },
  lu;
function lg() {
  return (
    lu ||
      ((lu = 1),
      (function (s, i) {
        var a = (function () {
          var l = function (L, G) {
            var H = 236,
              O = 17,
              R = L,
              K = m[G],
              E = null,
              z = 0,
              F = null,
              A = [],
              Y = {},
              je = function (W, Q) {
                ((z = R * 4 + 17),
                  (E = (function (U) {
                    for (var J = new Array(U), ne = 0; ne < U; ne += 1) {
                      J[ne] = new Array(U);
                      for (var ue = 0; ue < U; ue += 1) J[ne][ue] = null;
                    }
                    return J;
                  })(z)),
                  he(0, 0),
                  he(z - 7, 0),
                  he(0, z - 7),
                  oe(),
                  ie(),
                  X(W, Q),
                  R >= 7 && $(W),
                  F == null && (F = Ae(R, K, A)),
                  Te(F, Q));
              },
              he = function (W, Q) {
                for (var U = -1; U <= 7; U += 1)
                  if (!(W + U <= -1 || z <= W + U))
                    for (var J = -1; J <= 7; J += 1)
                      Q + J <= -1 ||
                        z <= Q + J ||
                        ((0 <= U && U <= 6 && (J == 0 || J == 6)) ||
                        (0 <= J && J <= 6 && (U == 0 || U == 6)) ||
                        (2 <= U && U <= 4 && 2 <= J && J <= 4)
                          ? (E[W + U][Q + J] = !0)
                          : (E[W + U][Q + J] = !1));
              },
              ee = function () {
                for (var W = 0, Q = 0, U = 0; U < 8; U += 1) {
                  je(!0, U);
                  var J = p.getLostPoint(Y);
                  (U == 0 || W > J) && ((W = J), (Q = U));
                }
                return Q;
              },
              ie = function () {
                for (var W = 8; W < z - 8; W += 1)
                  E[W][6] == null && (E[W][6] = W % 2 == 0);
                for (var Q = 8; Q < z - 8; Q += 1)
                  E[6][Q] == null && (E[6][Q] = Q % 2 == 0);
              },
              oe = function () {
                for (
                  var W = p.getPatternPosition(R), Q = 0;
                  Q < W.length;
                  Q += 1
                )
                  for (var U = 0; U < W.length; U += 1) {
                    var J = W[Q],
                      ne = W[U];
                    if (E[J][ne] == null)
                      for (var ue = -2; ue <= 2; ue += 1)
                        for (var Ne = -2; Ne <= 2; Ne += 1)
                          ue == -2 ||
                          ue == 2 ||
                          Ne == -2 ||
                          Ne == 2 ||
                          (ue == 0 && Ne == 0)
                            ? (E[J + ue][ne + Ne] = !0)
                            : (E[J + ue][ne + Ne] = !1);
                  }
              },
              $ = function (W) {
                for (var Q = p.getBCHTypeNumber(R), U = 0; U < 18; U += 1) {
                  var J = !W && ((Q >> U) & 1) == 1;
                  E[Math.floor(U / 3)][(U % 3) + z - 8 - 3] = J;
                }
                for (var U = 0; U < 18; U += 1) {
                  var J = !W && ((Q >> U) & 1) == 1;
                  E[(U % 3) + z - 8 - 3][Math.floor(U / 3)] = J;
                }
              },
              X = function (W, Q) {
                for (
                  var U = (K << 3) | Q, J = p.getBCHTypeInfo(U), ne = 0;
                  ne < 15;
                  ne += 1
                ) {
                  var ue = !W && ((J >> ne) & 1) == 1;
                  ne < 6
                    ? (E[ne][8] = ue)
                    : ne < 8
                      ? (E[ne + 1][8] = ue)
                      : (E[z - 15 + ne][8] = ue);
                }
                for (var ne = 0; ne < 15; ne += 1) {
                  var ue = !W && ((J >> ne) & 1) == 1;
                  ne < 8
                    ? (E[8][z - ne - 1] = ue)
                    : ne < 9
                      ? (E[8][15 - ne - 1 + 1] = ue)
                      : (E[8][15 - ne - 1] = ue);
                }
                E[z - 8][8] = !W;
              },
              Te = function (W, Q) {
                for (
                  var U = -1,
                    J = z - 1,
                    ne = 7,
                    ue = 0,
                    Ne = p.getMaskFunction(Q),
                    we = z - 1;
                  we > 0;
                  we -= 2
                )
                  for (we == 6 && (we -= 1); ;) {
                    for (var We = 0; We < 2; We += 1)
                      if (E[J][we - We] == null) {
                        var st = !1;
                        ue < W.length && (st = ((W[ue] >>> ne) & 1) == 1);
                        var Me = Ne(J, we - We);
                        (Me && (st = !st),
                          (E[J][we - We] = st),
                          (ne -= 1),
                          ne == -1 && ((ue += 1), (ne = 7)));
                      }
                    if (((J += U), J < 0 || z <= J)) {
                      ((J -= U), (U = -U));
                      break;
                    }
                  }
              },
              Ee = function (W, Q) {
                for (
                  var U = 0,
                    J = 0,
                    ne = 0,
                    ue = new Array(Q.length),
                    Ne = new Array(Q.length),
                    we = 0;
                  we < Q.length;
                  we += 1
                ) {
                  var We = Q[we].dataCount,
                    st = Q[we].totalCount - We;
                  ((J = Math.max(J, We)),
                    (ne = Math.max(ne, st)),
                    (ue[we] = new Array(We)));
                  for (var Me = 0; Me < ue[we].length; Me += 1)
                    ue[we][Me] = 255 & W.getBuffer()[Me + U];
                  U += We;
                  var Nt = p.getErrorCorrectPolynomial(st),
                    gt = y(ue[we], Nt.getLength() - 1),
                    xn = gt.mod(Nt);
                  Ne[we] = new Array(Nt.getLength() - 1);
                  for (var Me = 0; Me < Ne[we].length; Me += 1) {
                    var ws = Me + xn.getLength() - Ne[we].length;
                    Ne[we][Me] = ws >= 0 ? xn.getAt(ws) : 0;
                  }
                }
                for (var sa = 0, Me = 0; Me < Q.length; Me += 1)
                  sa += Q[Me].totalCount;
                for (var Ns = new Array(sa), ls = 0, Me = 0; Me < J; Me += 1)
                  for (var we = 0; we < Q.length; we += 1)
                    Me < ue[we].length && ((Ns[ls] = ue[we][Me]), (ls += 1));
                for (var Me = 0; Me < ne; Me += 1)
                  for (var we = 0; we < Q.length; we += 1)
                    Me < Ne[we].length && ((Ns[ls] = Ne[we][Me]), (ls += 1));
                return Ns;
              },
              Ae = function (W, Q, U) {
                for (
                  var J = j.getRSBlocks(W, Q), ne = C(), ue = 0;
                  ue < U.length;
                  ue += 1
                ) {
                  var Ne = U[ue];
                  (ne.put(Ne.getMode(), 4),
                    ne.put(Ne.getLength(), p.getLengthInBits(Ne.getMode(), W)),
                    Ne.write(ne));
                }
                for (var we = 0, ue = 0; ue < J.length; ue += 1)
                  we += J[ue].dataCount;
                if (ne.getLengthInBits() > we * 8)
                  throw (
                    "code length overflow. (" +
                    ne.getLengthInBits() +
                    ">" +
                    we * 8 +
                    ")"
                  );
                for (
                  ne.getLengthInBits() + 4 <= we * 8 && ne.put(0, 4);
                  ne.getLengthInBits() % 8 != 0;
                )
                  ne.putBit(!1);
                for (
                  ;
                  !(
                    ne.getLengthInBits() >= we * 8 ||
                    (ne.put(H, 8), ne.getLengthInBits() >= we * 8)
                  );
                )
                  ne.put(O, 8);
                return Ee(ne, J);
              };
            ((Y.addData = function (W, Q) {
              Q = Q || "Byte";
              var U = null;
              switch (Q) {
                case "Numeric":
                  U = v(W);
                  break;
                case "Alphanumeric":
                  U = g(W);
                  break;
                case "Byte":
                  U = N(W);
                  break;
                case "Kanji":
                  U = k(W);
                  break;
                default:
                  throw "mode:" + Q;
              }
              (A.push(U), (F = null));
            }),
              (Y.isDark = function (W, Q) {
                if (W < 0 || z <= W || Q < 0 || z <= Q) throw W + "," + Q;
                return E[W][Q];
              }),
              (Y.getModuleCount = function () {
                return z;
              }),
              (Y.make = function () {
                if (R < 1) {
                  for (var W = 1; W < 40; W++) {
                    for (
                      var Q = j.getRSBlocks(W, K), U = C(), J = 0;
                      J < A.length;
                      J++
                    ) {
                      var ne = A[J];
                      (U.put(ne.getMode(), 4),
                        U.put(
                          ne.getLength(),
                          p.getLengthInBits(ne.getMode(), W),
                        ),
                        ne.write(U));
                    }
                    for (var ue = 0, J = 0; J < Q.length; J++)
                      ue += Q[J].dataCount;
                    if (U.getLengthInBits() <= ue * 8) break;
                  }
                  R = W;
                }
                je(!1, ee());
              }),
              (Y.createTableTag = function (W, Q) {
                ((W = W || 2), (Q = typeof Q > "u" ? W * 4 : Q));
                var U = "";
                ((U += '<table style="'),
                  (U += " border-width: 0px; border-style: none;"),
                  (U += " border-collapse: collapse;"),
                  (U += " padding: 0px; margin: " + Q + "px;"),
                  (U += '">'),
                  (U += "<tbody>"));
                for (var J = 0; J < Y.getModuleCount(); J += 1) {
                  U += "<tr>";
                  for (var ne = 0; ne < Y.getModuleCount(); ne += 1)
                    ((U += '<td style="'),
                      (U += " border-width: 0px; border-style: none;"),
                      (U += " border-collapse: collapse;"),
                      (U += " padding: 0px; margin: 0px;"),
                      (U += " width: " + W + "px;"),
                      (U += " height: " + W + "px;"),
                      (U += " background-color: "),
                      (U += Y.isDark(J, ne) ? "#000000" : "#ffffff"),
                      (U += ";"),
                      (U += '"/>'));
                  U += "</tr>";
                }
                return ((U += "</tbody>"), (U += "</table>"), U);
              }),
              (Y.createSvgTag = function (W, Q, U, J) {
                var ne = {};
                (typeof arguments[0] == "object" &&
                  ((ne = arguments[0]),
                  (W = ne.cellSize),
                  (Q = ne.margin),
                  (U = ne.alt),
                  (J = ne.title)),
                  (W = W || 2),
                  (Q = typeof Q > "u" ? W * 4 : Q),
                  (U = typeof U == "string" ? { text: U } : U || {}),
                  (U.text = U.text || null),
                  (U.id = U.text ? U.id || "qrcode-description" : null),
                  (J = typeof J == "string" ? { text: J } : J || {}),
                  (J.text = J.text || null),
                  (J.id = J.text ? J.id || "qrcode-title" : null));
                var ue = Y.getModuleCount() * W + Q * 2,
                  Ne,
                  we,
                  We,
                  st,
                  Me = "",
                  Nt;
                for (
                  Nt = "l" + W + ",0 0," + W + " -" + W + ",0 0,-" + W + "z ",
                    Me +=
                      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',
                    Me += ne.scalable
                      ? ""
                      : ' width="' + ue + 'px" height="' + ue + 'px"',
                    Me += ' viewBox="0 0 ' + ue + " " + ue + '" ',
                    Me += ' preserveAspectRatio="xMinYMin meet"',
                    Me +=
                      J.text || U.text
                        ? ' role="img" aria-labelledby="' +
                          Ie([J.id, U.id].join(" ").trim()) +
                          '"'
                        : "",
                    Me += ">",
                    Me += J.text
                      ? '<title id="' +
                        Ie(J.id) +
                        '">' +
                        Ie(J.text) +
                        "</title>"
                      : "",
                    Me += U.text
                      ? '<description id="' +
                        Ie(U.id) +
                        '">' +
                        Ie(U.text) +
                        "</description>"
                      : "",
                    Me +=
                      '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',
                    Me += '<path d="',
                    We = 0;
                  We < Y.getModuleCount();
                  We += 1
                )
                  for (
                    st = We * W + Q, Ne = 0;
                    Ne < Y.getModuleCount();
                    Ne += 1
                  )
                    Y.isDark(We, Ne) &&
                      ((we = Ne * W + Q), (Me += "M" + we + "," + st + Nt));
                return (
                  (Me += '" stroke="transparent" fill="black"/>'),
                  (Me += "</svg>"),
                  Me
                );
              }),
              (Y.createDataURL = function (W, Q) {
                ((W = W || 2), (Q = typeof Q > "u" ? W * 4 : Q));
                var U = Y.getModuleCount() * W + Q * 2,
                  J = Q,
                  ne = U - Q;
                return _(U, U, function (ue, Ne) {
                  if (J <= ue && ue < ne && J <= Ne && Ne < ne) {
                    var we = Math.floor((ue - J) / W),
                      We = Math.floor((Ne - J) / W);
                    return Y.isDark(We, we) ? 0 : 1;
                  } else return 1;
                });
              }),
              (Y.createImgTag = function (W, Q, U) {
                ((W = W || 2), (Q = typeof Q > "u" ? W * 4 : Q));
                var J = Y.getModuleCount() * W + Q * 2,
                  ne = "";
                return (
                  (ne += "<img"),
                  (ne += ' src="'),
                  (ne += Y.createDataURL(W, Q)),
                  (ne += '"'),
                  (ne += ' width="'),
                  (ne += J),
                  (ne += '"'),
                  (ne += ' height="'),
                  (ne += J),
                  (ne += '"'),
                  U && ((ne += ' alt="'), (ne += Ie(U)), (ne += '"')),
                  (ne += "/>"),
                  ne
                );
              }));
            var Ie = function (W) {
                for (var Q = "", U = 0; U < W.length; U += 1) {
                  var J = W.charAt(U);
                  switch (J) {
                    case "<":
                      Q += "&lt;";
                      break;
                    case ">":
                      Q += "&gt;";
                      break;
                    case "&":
                      Q += "&amp;";
                      break;
                    case '"':
                      Q += "&quot;";
                      break;
                    default:
                      Q += J;
                      break;
                  }
                }
                return Q;
              },
              Be = function (W) {
                var Q = 1;
                W = typeof W > "u" ? Q * 2 : W;
                var U = Y.getModuleCount() * Q + W * 2,
                  J = W,
                  ne = U - W,
                  ue,
                  Ne,
                  we,
                  We,
                  st,
                  Me = { "██": "█", "█ ": "▀", " █": "▄", "  ": " " },
                  Nt = { "██": "▀", "█ ": "▀", " █": " ", "  ": " " },
                  gt = "";
                for (ue = 0; ue < U; ue += 2) {
                  for (
                    we = Math.floor((ue - J) / Q),
                      We = Math.floor((ue + 1 - J) / Q),
                      Ne = 0;
                    Ne < U;
                    Ne += 1
                  )
                    ((st = "█"),
                      J <= Ne &&
                        Ne < ne &&
                        J <= ue &&
                        ue < ne &&
                        Y.isDark(we, Math.floor((Ne - J) / Q)) &&
                        (st = " "),
                      J <= Ne &&
                      Ne < ne &&
                      J <= ue + 1 &&
                      ue + 1 < ne &&
                      Y.isDark(We, Math.floor((Ne - J) / Q))
                        ? (st += " ")
                        : (st += "█"),
                      (gt += W < 1 && ue + 1 >= ne ? Nt[st] : Me[st]));
                  gt += `
`;
                }
                return U % 2 && W > 0
                  ? gt.substring(0, gt.length - U - 1) + Array(U + 1).join("▀")
                  : gt.substring(0, gt.length - 1);
              };
            return (
              (Y.createASCII = function (W, Q) {
                if (((W = W || 1), W < 2)) return Be(Q);
                ((W -= 1), (Q = typeof Q > "u" ? W * 2 : Q));
                var U = Y.getModuleCount() * W + Q * 2,
                  J = Q,
                  ne = U - Q,
                  ue,
                  Ne,
                  we,
                  We,
                  st = Array(W + 1).join("██"),
                  Me = Array(W + 1).join("  "),
                  Nt = "",
                  gt = "";
                for (ue = 0; ue < U; ue += 1) {
                  for (
                    we = Math.floor((ue - J) / W), gt = "", Ne = 0;
                    Ne < U;
                    Ne += 1
                  )
                    ((We = 1),
                      J <= Ne &&
                        Ne < ne &&
                        J <= ue &&
                        ue < ne &&
                        Y.isDark(we, Math.floor((Ne - J) / W)) &&
                        (We = 0),
                      (gt += We ? st : Me));
                  for (we = 0; we < W; we += 1)
                    Nt +=
                      gt +
                      `
`;
                }
                return Nt.substring(0, Nt.length - 1);
              }),
              (Y.renderTo2dContext = function (W, Q) {
                Q = Q || 2;
                for (var U = Y.getModuleCount(), J = 0; J < U; J++)
                  for (var ne = 0; ne < U; ne++)
                    ((W.fillStyle = Y.isDark(J, ne) ? "black" : "white"),
                      W.fillRect(J * Q, ne * Q, Q, Q));
              }),
              Y
            );
          };
          ((l.stringToBytesFuncs = {
            default: function (L) {
              for (var G = [], H = 0; H < L.length; H += 1) {
                var O = L.charCodeAt(H);
                G.push(O & 255);
              }
              return G;
            },
          }),
            (l.stringToBytes = l.stringToBytesFuncs.default),
            (l.createStringToBytes = function (L, G) {
              var H = (function () {
                  for (
                    var R = S(L),
                      K = function () {
                        var ie = R.read();
                        if (ie == -1) throw "eof";
                        return ie;
                      },
                      E = 0,
                      z = {};
                    ;
                  ) {
                    var F = R.read();
                    if (F == -1) break;
                    var A = K(),
                      Y = K(),
                      je = K(),
                      he = String.fromCharCode((F << 8) | A),
                      ee = (Y << 8) | je;
                    ((z[he] = ee), (E += 1));
                  }
                  if (E != G) throw E + " != " + G;
                  return z;
                })(),
                O = 63;
              return function (R) {
                for (var K = [], E = 0; E < R.length; E += 1) {
                  var z = R.charCodeAt(E);
                  if (z < 128) K.push(z);
                  else {
                    var F = H[R.charAt(E)];
                    typeof F == "number"
                      ? (F & 255) == F
                        ? K.push(F)
                        : (K.push(F >>> 8), K.push(F & 255))
                      : K.push(O);
                  }
                }
                return K;
              };
            }));
          var c = {
              MODE_NUMBER: 1,
              MODE_ALPHA_NUM: 2,
              MODE_8BIT_BYTE: 4,
              MODE_KANJI: 8,
            },
            m = { L: 1, M: 0, Q: 3, H: 2 },
            h = {
              PATTERN000: 0,
              PATTERN001: 1,
              PATTERN010: 2,
              PATTERN011: 3,
              PATTERN100: 4,
              PATTERN101: 5,
              PATTERN110: 6,
              PATTERN111: 7,
            },
            p = (function () {
              var L = [
                  [],
                  [6, 18],
                  [6, 22],
                  [6, 26],
                  [6, 30],
                  [6, 34],
                  [6, 22, 38],
                  [6, 24, 42],
                  [6, 26, 46],
                  [6, 28, 50],
                  [6, 30, 54],
                  [6, 32, 58],
                  [6, 34, 62],
                  [6, 26, 46, 66],
                  [6, 26, 48, 70],
                  [6, 26, 50, 74],
                  [6, 30, 54, 78],
                  [6, 30, 56, 82],
                  [6, 30, 58, 86],
                  [6, 34, 62, 90],
                  [6, 28, 50, 72, 94],
                  [6, 26, 50, 74, 98],
                  [6, 30, 54, 78, 102],
                  [6, 28, 54, 80, 106],
                  [6, 32, 58, 84, 110],
                  [6, 30, 58, 86, 114],
                  [6, 34, 62, 90, 118],
                  [6, 26, 50, 74, 98, 122],
                  [6, 30, 54, 78, 102, 126],
                  [6, 26, 52, 78, 104, 130],
                  [6, 30, 56, 82, 108, 134],
                  [6, 34, 60, 86, 112, 138],
                  [6, 30, 58, 86, 114, 142],
                  [6, 34, 62, 90, 118, 146],
                  [6, 30, 54, 78, 102, 126, 150],
                  [6, 24, 50, 76, 102, 128, 154],
                  [6, 28, 54, 80, 106, 132, 158],
                  [6, 32, 58, 84, 110, 136, 162],
                  [6, 26, 54, 82, 110, 138, 166],
                  [6, 30, 58, 86, 114, 142, 170],
                ],
                G = 1335,
                H = 7973,
                O = 21522,
                R = {},
                K = function (E) {
                  for (var z = 0; E != 0;) ((z += 1), (E >>>= 1));
                  return z;
                };
              return (
                (R.getBCHTypeInfo = function (E) {
                  for (var z = E << 10; K(z) - K(G) >= 0;)
                    z ^= G << (K(z) - K(G));
                  return ((E << 10) | z) ^ O;
                }),
                (R.getBCHTypeNumber = function (E) {
                  for (var z = E << 12; K(z) - K(H) >= 0;)
                    z ^= H << (K(z) - K(H));
                  return (E << 12) | z;
                }),
                (R.getPatternPosition = function (E) {
                  return L[E - 1];
                }),
                (R.getMaskFunction = function (E) {
                  switch (E) {
                    case h.PATTERN000:
                      return function (z, F) {
                        return (z + F) % 2 == 0;
                      };
                    case h.PATTERN001:
                      return function (z, F) {
                        return z % 2 == 0;
                      };
                    case h.PATTERN010:
                      return function (z, F) {
                        return F % 3 == 0;
                      };
                    case h.PATTERN011:
                      return function (z, F) {
                        return (z + F) % 3 == 0;
                      };
                    case h.PATTERN100:
                      return function (z, F) {
                        return (Math.floor(z / 2) + Math.floor(F / 3)) % 2 == 0;
                      };
                    case h.PATTERN101:
                      return function (z, F) {
                        return ((z * F) % 2) + ((z * F) % 3) == 0;
                      };
                    case h.PATTERN110:
                      return function (z, F) {
                        return (((z * F) % 2) + ((z * F) % 3)) % 2 == 0;
                      };
                    case h.PATTERN111:
                      return function (z, F) {
                        return (((z * F) % 3) + ((z + F) % 2)) % 2 == 0;
                      };
                    default:
                      throw "bad maskPattern:" + E;
                  }
                }),
                (R.getErrorCorrectPolynomial = function (E) {
                  for (var z = y([1], 0), F = 0; F < E; F += 1)
                    z = z.multiply(y([1, f.gexp(F)], 0));
                  return z;
                }),
                (R.getLengthInBits = function (E, z) {
                  if (1 <= z && z < 10)
                    switch (E) {
                      case c.MODE_NUMBER:
                        return 10;
                      case c.MODE_ALPHA_NUM:
                        return 9;
                      case c.MODE_8BIT_BYTE:
                        return 8;
                      case c.MODE_KANJI:
                        return 8;
                      default:
                        throw "mode:" + E;
                    }
                  else if (z < 27)
                    switch (E) {
                      case c.MODE_NUMBER:
                        return 12;
                      case c.MODE_ALPHA_NUM:
                        return 11;
                      case c.MODE_8BIT_BYTE:
                        return 16;
                      case c.MODE_KANJI:
                        return 10;
                      default:
                        throw "mode:" + E;
                    }
                  else if (z < 41)
                    switch (E) {
                      case c.MODE_NUMBER:
                        return 14;
                      case c.MODE_ALPHA_NUM:
                        return 13;
                      case c.MODE_8BIT_BYTE:
                        return 16;
                      case c.MODE_KANJI:
                        return 12;
                      default:
                        throw "mode:" + E;
                    }
                  else throw "type:" + z;
                }),
                (R.getLostPoint = function (E) {
                  for (var z = E.getModuleCount(), F = 0, A = 0; A < z; A += 1)
                    for (var Y = 0; Y < z; Y += 1) {
                      for (
                        var je = 0, he = E.isDark(A, Y), ee = -1;
                        ee <= 1;
                        ee += 1
                      )
                        if (!(A + ee < 0 || z <= A + ee))
                          for (var ie = -1; ie <= 1; ie += 1)
                            Y + ie < 0 ||
                              z <= Y + ie ||
                              (ee == 0 && ie == 0) ||
                              (he == E.isDark(A + ee, Y + ie) && (je += 1));
                      je > 5 && (F += 3 + je - 5);
                    }
                  for (var A = 0; A < z - 1; A += 1)
                    for (var Y = 0; Y < z - 1; Y += 1) {
                      var oe = 0;
                      (E.isDark(A, Y) && (oe += 1),
                        E.isDark(A + 1, Y) && (oe += 1),
                        E.isDark(A, Y + 1) && (oe += 1),
                        E.isDark(A + 1, Y + 1) && (oe += 1),
                        (oe == 0 || oe == 4) && (F += 3));
                    }
                  for (var A = 0; A < z; A += 1)
                    for (var Y = 0; Y < z - 6; Y += 1)
                      E.isDark(A, Y) &&
                        !E.isDark(A, Y + 1) &&
                        E.isDark(A, Y + 2) &&
                        E.isDark(A, Y + 3) &&
                        E.isDark(A, Y + 4) &&
                        !E.isDark(A, Y + 5) &&
                        E.isDark(A, Y + 6) &&
                        (F += 40);
                  for (var Y = 0; Y < z; Y += 1)
                    for (var A = 0; A < z - 6; A += 1)
                      E.isDark(A, Y) &&
                        !E.isDark(A + 1, Y) &&
                        E.isDark(A + 2, Y) &&
                        E.isDark(A + 3, Y) &&
                        E.isDark(A + 4, Y) &&
                        !E.isDark(A + 5, Y) &&
                        E.isDark(A + 6, Y) &&
                        (F += 40);
                  for (var $ = 0, Y = 0; Y < z; Y += 1)
                    for (var A = 0; A < z; A += 1) E.isDark(A, Y) && ($ += 1);
                  var X = Math.abs((100 * $) / z / z - 50) / 5;
                  return ((F += X * 10), F);
                }),
                R
              );
            })(),
            f = (function () {
              for (
                var L = new Array(256), G = new Array(256), H = 0;
                H < 8;
                H += 1
              )
                L[H] = 1 << H;
              for (var H = 8; H < 256; H += 1)
                L[H] = L[H - 4] ^ L[H - 5] ^ L[H - 6] ^ L[H - 8];
              for (var H = 0; H < 255; H += 1) G[L[H]] = H;
              var O = {};
              return (
                (O.glog = function (R) {
                  if (R < 1) throw "glog(" + R + ")";
                  return G[R];
                }),
                (O.gexp = function (R) {
                  for (; R < 0;) R += 255;
                  for (; R >= 256;) R -= 255;
                  return L[R];
                }),
                O
              );
            })();
          function y(L, G) {
            if (typeof L.length > "u") throw L.length + "/" + G;
            var H = (function () {
                for (var R = 0; R < L.length && L[R] == 0;) R += 1;
                for (
                  var K = new Array(L.length - R + G), E = 0;
                  E < L.length - R;
                  E += 1
                )
                  K[E] = L[E + R];
                return K;
              })(),
              O = {};
            return (
              (O.getAt = function (R) {
                return H[R];
              }),
              (O.getLength = function () {
                return H.length;
              }),
              (O.multiply = function (R) {
                for (
                  var K = new Array(O.getLength() + R.getLength() - 1), E = 0;
                  E < O.getLength();
                  E += 1
                )
                  for (var z = 0; z < R.getLength(); z += 1)
                    K[E + z] ^= f.gexp(f.glog(O.getAt(E)) + f.glog(R.getAt(z)));
                return y(K, 0);
              }),
              (O.mod = function (R) {
                if (O.getLength() - R.getLength() < 0) return O;
                for (
                  var K = f.glog(O.getAt(0)) - f.glog(R.getAt(0)),
                    E = new Array(O.getLength()),
                    z = 0;
                  z < O.getLength();
                  z += 1
                )
                  E[z] = O.getAt(z);
                for (var z = 0; z < R.getLength(); z += 1)
                  E[z] ^= f.gexp(f.glog(R.getAt(z)) + K);
                return y(E, 0).mod(R);
              }),
              O
            );
          }
          var j = (function () {
              var L = [
                  [1, 26, 19],
                  [1, 26, 16],
                  [1, 26, 13],
                  [1, 26, 9],
                  [1, 44, 34],
                  [1, 44, 28],
                  [1, 44, 22],
                  [1, 44, 16],
                  [1, 70, 55],
                  [1, 70, 44],
                  [2, 35, 17],
                  [2, 35, 13],
                  [1, 100, 80],
                  [2, 50, 32],
                  [2, 50, 24],
                  [4, 25, 9],
                  [1, 134, 108],
                  [2, 67, 43],
                  [2, 33, 15, 2, 34, 16],
                  [2, 33, 11, 2, 34, 12],
                  [2, 86, 68],
                  [4, 43, 27],
                  [4, 43, 19],
                  [4, 43, 15],
                  [2, 98, 78],
                  [4, 49, 31],
                  [2, 32, 14, 4, 33, 15],
                  [4, 39, 13, 1, 40, 14],
                  [2, 121, 97],
                  [2, 60, 38, 2, 61, 39],
                  [4, 40, 18, 2, 41, 19],
                  [4, 40, 14, 2, 41, 15],
                  [2, 146, 116],
                  [3, 58, 36, 2, 59, 37],
                  [4, 36, 16, 4, 37, 17],
                  [4, 36, 12, 4, 37, 13],
                  [2, 86, 68, 2, 87, 69],
                  [4, 69, 43, 1, 70, 44],
                  [6, 43, 19, 2, 44, 20],
                  [6, 43, 15, 2, 44, 16],
                  [4, 101, 81],
                  [1, 80, 50, 4, 81, 51],
                  [4, 50, 22, 4, 51, 23],
                  [3, 36, 12, 8, 37, 13],
                  [2, 116, 92, 2, 117, 93],
                  [6, 58, 36, 2, 59, 37],
                  [4, 46, 20, 6, 47, 21],
                  [7, 42, 14, 4, 43, 15],
                  [4, 133, 107],
                  [8, 59, 37, 1, 60, 38],
                  [8, 44, 20, 4, 45, 21],
                  [12, 33, 11, 4, 34, 12],
                  [3, 145, 115, 1, 146, 116],
                  [4, 64, 40, 5, 65, 41],
                  [11, 36, 16, 5, 37, 17],
                  [11, 36, 12, 5, 37, 13],
                  [5, 109, 87, 1, 110, 88],
                  [5, 65, 41, 5, 66, 42],
                  [5, 54, 24, 7, 55, 25],
                  [11, 36, 12, 7, 37, 13],
                  [5, 122, 98, 1, 123, 99],
                  [7, 73, 45, 3, 74, 46],
                  [15, 43, 19, 2, 44, 20],
                  [3, 45, 15, 13, 46, 16],
                  [1, 135, 107, 5, 136, 108],
                  [10, 74, 46, 1, 75, 47],
                  [1, 50, 22, 15, 51, 23],
                  [2, 42, 14, 17, 43, 15],
                  [5, 150, 120, 1, 151, 121],
                  [9, 69, 43, 4, 70, 44],
                  [17, 50, 22, 1, 51, 23],
                  [2, 42, 14, 19, 43, 15],
                  [3, 141, 113, 4, 142, 114],
                  [3, 70, 44, 11, 71, 45],
                  [17, 47, 21, 4, 48, 22],
                  [9, 39, 13, 16, 40, 14],
                  [3, 135, 107, 5, 136, 108],
                  [3, 67, 41, 13, 68, 42],
                  [15, 54, 24, 5, 55, 25],
                  [15, 43, 15, 10, 44, 16],
                  [4, 144, 116, 4, 145, 117],
                  [17, 68, 42],
                  [17, 50, 22, 6, 51, 23],
                  [19, 46, 16, 6, 47, 17],
                  [2, 139, 111, 7, 140, 112],
                  [17, 74, 46],
                  [7, 54, 24, 16, 55, 25],
                  [34, 37, 13],
                  [4, 151, 121, 5, 152, 122],
                  [4, 75, 47, 14, 76, 48],
                  [11, 54, 24, 14, 55, 25],
                  [16, 45, 15, 14, 46, 16],
                  [6, 147, 117, 4, 148, 118],
                  [6, 73, 45, 14, 74, 46],
                  [11, 54, 24, 16, 55, 25],
                  [30, 46, 16, 2, 47, 17],
                  [8, 132, 106, 4, 133, 107],
                  [8, 75, 47, 13, 76, 48],
                  [7, 54, 24, 22, 55, 25],
                  [22, 45, 15, 13, 46, 16],
                  [10, 142, 114, 2, 143, 115],
                  [19, 74, 46, 4, 75, 47],
                  [28, 50, 22, 6, 51, 23],
                  [33, 46, 16, 4, 47, 17],
                  [8, 152, 122, 4, 153, 123],
                  [22, 73, 45, 3, 74, 46],
                  [8, 53, 23, 26, 54, 24],
                  [12, 45, 15, 28, 46, 16],
                  [3, 147, 117, 10, 148, 118],
                  [3, 73, 45, 23, 74, 46],
                  [4, 54, 24, 31, 55, 25],
                  [11, 45, 15, 31, 46, 16],
                  [7, 146, 116, 7, 147, 117],
                  [21, 73, 45, 7, 74, 46],
                  [1, 53, 23, 37, 54, 24],
                  [19, 45, 15, 26, 46, 16],
                  [5, 145, 115, 10, 146, 116],
                  [19, 75, 47, 10, 76, 48],
                  [15, 54, 24, 25, 55, 25],
                  [23, 45, 15, 25, 46, 16],
                  [13, 145, 115, 3, 146, 116],
                  [2, 74, 46, 29, 75, 47],
                  [42, 54, 24, 1, 55, 25],
                  [23, 45, 15, 28, 46, 16],
                  [17, 145, 115],
                  [10, 74, 46, 23, 75, 47],
                  [10, 54, 24, 35, 55, 25],
                  [19, 45, 15, 35, 46, 16],
                  [17, 145, 115, 1, 146, 116],
                  [14, 74, 46, 21, 75, 47],
                  [29, 54, 24, 19, 55, 25],
                  [11, 45, 15, 46, 46, 16],
                  [13, 145, 115, 6, 146, 116],
                  [14, 74, 46, 23, 75, 47],
                  [44, 54, 24, 7, 55, 25],
                  [59, 46, 16, 1, 47, 17],
                  [12, 151, 121, 7, 152, 122],
                  [12, 75, 47, 26, 76, 48],
                  [39, 54, 24, 14, 55, 25],
                  [22, 45, 15, 41, 46, 16],
                  [6, 151, 121, 14, 152, 122],
                  [6, 75, 47, 34, 76, 48],
                  [46, 54, 24, 10, 55, 25],
                  [2, 45, 15, 64, 46, 16],
                  [17, 152, 122, 4, 153, 123],
                  [29, 74, 46, 14, 75, 47],
                  [49, 54, 24, 10, 55, 25],
                  [24, 45, 15, 46, 46, 16],
                  [4, 152, 122, 18, 153, 123],
                  [13, 74, 46, 32, 75, 47],
                  [48, 54, 24, 14, 55, 25],
                  [42, 45, 15, 32, 46, 16],
                  [20, 147, 117, 4, 148, 118],
                  [40, 75, 47, 7, 76, 48],
                  [43, 54, 24, 22, 55, 25],
                  [10, 45, 15, 67, 46, 16],
                  [19, 148, 118, 6, 149, 119],
                  [18, 75, 47, 31, 76, 48],
                  [34, 54, 24, 34, 55, 25],
                  [20, 45, 15, 61, 46, 16],
                ],
                G = function (R, K) {
                  var E = {};
                  return ((E.totalCount = R), (E.dataCount = K), E);
                },
                H = {},
                O = function (R, K) {
                  switch (K) {
                    case m.L:
                      return L[(R - 1) * 4 + 0];
                    case m.M:
                      return L[(R - 1) * 4 + 1];
                    case m.Q:
                      return L[(R - 1) * 4 + 2];
                    case m.H:
                      return L[(R - 1) * 4 + 3];
                    default:
                      return;
                  }
                };
              return (
                (H.getRSBlocks = function (R, K) {
                  var E = O(R, K);
                  if (typeof E > "u")
                    throw (
                      "bad rs block @ typeNumber:" +
                      R +
                      "/errorCorrectionLevel:" +
                      K
                    );
                  for (var z = E.length / 3, F = [], A = 0; A < z; A += 1)
                    for (
                      var Y = E[A * 3 + 0],
                        je = E[A * 3 + 1],
                        he = E[A * 3 + 2],
                        ee = 0;
                      ee < Y;
                      ee += 1
                    )
                      F.push(G(je, he));
                  return F;
                }),
                H
              );
            })(),
            C = function () {
              var L = [],
                G = 0,
                H = {};
              return (
                (H.getBuffer = function () {
                  return L;
                }),
                (H.getAt = function (O) {
                  var R = Math.floor(O / 8);
                  return ((L[R] >>> (7 - (O % 8))) & 1) == 1;
                }),
                (H.put = function (O, R) {
                  for (var K = 0; K < R; K += 1)
                    H.putBit(((O >>> (R - K - 1)) & 1) == 1);
                }),
                (H.getLengthInBits = function () {
                  return G;
                }),
                (H.putBit = function (O) {
                  var R = Math.floor(G / 8);
                  (L.length <= R && L.push(0),
                    O && (L[R] |= 128 >>> (G % 8)),
                    (G += 1));
                }),
                H
              );
            },
            v = function (L) {
              var G = c.MODE_NUMBER,
                H = L,
                O = {};
              ((O.getMode = function () {
                return G;
              }),
                (O.getLength = function (E) {
                  return H.length;
                }),
                (O.write = function (E) {
                  for (var z = H, F = 0; F + 2 < z.length;)
                    (E.put(R(z.substring(F, F + 3)), 10), (F += 3));
                  F < z.length &&
                    (z.length - F == 1
                      ? E.put(R(z.substring(F, F + 1)), 4)
                      : z.length - F == 2 &&
                        E.put(R(z.substring(F, F + 2)), 7));
                }));
              var R = function (E) {
                  for (var z = 0, F = 0; F < E.length; F += 1)
                    z = z * 10 + K(E.charAt(F));
                  return z;
                },
                K = function (E) {
                  if ("0" <= E && E <= "9") return E.charCodeAt(0) - 48;
                  throw "illegal char :" + E;
                };
              return O;
            },
            g = function (L) {
              var G = c.MODE_ALPHA_NUM,
                H = L,
                O = {};
              ((O.getMode = function () {
                return G;
              }),
                (O.getLength = function (K) {
                  return H.length;
                }),
                (O.write = function (K) {
                  for (var E = H, z = 0; z + 1 < E.length;)
                    (K.put(R(E.charAt(z)) * 45 + R(E.charAt(z + 1)), 11),
                      (z += 2));
                  z < E.length && K.put(R(E.charAt(z)), 6);
                }));
              var R = function (K) {
                if ("0" <= K && K <= "9") return K.charCodeAt(0) - 48;
                if ("A" <= K && K <= "Z") return K.charCodeAt(0) - 65 + 10;
                switch (K) {
                  case " ":
                    return 36;
                  case "$":
                    return 37;
                  case "%":
                    return 38;
                  case "*":
                    return 39;
                  case "+":
                    return 40;
                  case "-":
                    return 41;
                  case ".":
                    return 42;
                  case "/":
                    return 43;
                  case ":":
                    return 44;
                  default:
                    throw "illegal char :" + K;
                }
              };
              return O;
            },
            N = function (L) {
              var G = c.MODE_8BIT_BYTE,
                H = l.stringToBytes(L),
                O = {};
              return (
                (O.getMode = function () {
                  return G;
                }),
                (O.getLength = function (R) {
                  return H.length;
                }),
                (O.write = function (R) {
                  for (var K = 0; K < H.length; K += 1) R.put(H[K], 8);
                }),
                O
              );
            },
            k = function (L) {
              var G = c.MODE_KANJI,
                H = l.stringToBytesFuncs.SJIS;
              if (!H) throw "sjis not supported.";
              (function (K, E) {
                var z = H(K);
                if (z.length != 2 || ((z[0] << 8) | z[1]) != E)
                  throw "sjis not supported.";
              })("友", 38726);
              var O = H(L),
                R = {};
              return (
                (R.getMode = function () {
                  return G;
                }),
                (R.getLength = function (K) {
                  return ~~(O.length / 2);
                }),
                (R.write = function (K) {
                  for (var E = O, z = 0; z + 1 < E.length;) {
                    var F = ((255 & E[z]) << 8) | (255 & E[z + 1]);
                    if (33088 <= F && F <= 40956) F -= 33088;
                    else if (57408 <= F && F <= 60351) F -= 49472;
                    else throw "illegal char at " + (z + 1) + "/" + F;
                    ((F = ((F >>> 8) & 255) * 192 + (F & 255)),
                      K.put(F, 13),
                      (z += 2));
                  }
                  if (z < E.length) throw "illegal char at " + (z + 1);
                }),
                R
              );
            },
            b = function () {
              var L = [],
                G = {};
              return (
                (G.writeByte = function (H) {
                  L.push(H & 255);
                }),
                (G.writeShort = function (H) {
                  (G.writeByte(H), G.writeByte(H >>> 8));
                }),
                (G.writeBytes = function (H, O, R) {
                  ((O = O || 0), (R = R || H.length));
                  for (var K = 0; K < R; K += 1) G.writeByte(H[K + O]);
                }),
                (G.writeString = function (H) {
                  for (var O = 0; O < H.length; O += 1)
                    G.writeByte(H.charCodeAt(O));
                }),
                (G.toByteArray = function () {
                  return L;
                }),
                (G.toString = function () {
                  var H = "";
                  H += "[";
                  for (var O = 0; O < L.length; O += 1)
                    (O > 0 && (H += ","), (H += L[O]));
                  return ((H += "]"), H);
                }),
                G
              );
            },
            w = function () {
              var L = 0,
                G = 0,
                H = 0,
                O = "",
                R = {},
                K = function (z) {
                  O += String.fromCharCode(E(z & 63));
                },
                E = function (z) {
                  if (!(z < 0)) {
                    if (z < 26) return 65 + z;
                    if (z < 52) return 97 + (z - 26);
                    if (z < 62) return 48 + (z - 52);
                    if (z == 62) return 43;
                    if (z == 63) return 47;
                  }
                  throw "n:" + z;
                };
              return (
                (R.writeByte = function (z) {
                  for (L = (L << 8) | (z & 255), G += 8, H += 1; G >= 6;)
                    (K(L >>> (G - 6)), (G -= 6));
                }),
                (R.flush = function () {
                  if (
                    (G > 0 && (K(L << (6 - G)), (L = 0), (G = 0)), H % 3 != 0)
                  )
                    for (var z = 3 - (H % 3), F = 0; F < z; F += 1) O += "=";
                }),
                (R.toString = function () {
                  return O;
                }),
                R
              );
            },
            S = function (L) {
              var G = L,
                H = 0,
                O = 0,
                R = 0,
                K = {};
              K.read = function () {
                for (; R < 8;) {
                  if (H >= G.length) {
                    if (R == 0) return -1;
                    throw "unexpected end of file./" + R;
                  }
                  var z = G.charAt(H);
                  if (((H += 1), z == "=")) return ((R = 0), -1);
                  if (z.match(/^\s$/)) continue;
                  ((O = (O << 6) | E(z.charCodeAt(0))), (R += 6));
                }
                var F = (O >>> (R - 8)) & 255;
                return ((R -= 8), F);
              };
              var E = function (z) {
                if (65 <= z && z <= 90) return z - 65;
                if (97 <= z && z <= 122) return z - 97 + 26;
                if (48 <= z && z <= 57) return z - 48 + 52;
                if (z == 43) return 62;
                if (z == 47) return 63;
                throw "c:" + z;
              };
              return K;
            },
            ae = function (L, G) {
              var H = L,
                O = G,
                R = new Array(L * G),
                K = {};
              ((K.setPixel = function (A, Y, je) {
                R[Y * H + A] = je;
              }),
                (K.write = function (A) {
                  (A.writeString("GIF87a"),
                    A.writeShort(H),
                    A.writeShort(O),
                    A.writeByte(128),
                    A.writeByte(0),
                    A.writeByte(0),
                    A.writeByte(0),
                    A.writeByte(0),
                    A.writeByte(0),
                    A.writeByte(255),
                    A.writeByte(255),
                    A.writeByte(255),
                    A.writeString(","),
                    A.writeShort(0),
                    A.writeShort(0),
                    A.writeShort(H),
                    A.writeShort(O),
                    A.writeByte(0));
                  var Y = 2,
                    je = z(Y);
                  A.writeByte(Y);
                  for (var he = 0; je.length - he > 255;)
                    (A.writeByte(255), A.writeBytes(je, he, 255), (he += 255));
                  (A.writeByte(je.length - he),
                    A.writeBytes(je, he, je.length - he),
                    A.writeByte(0),
                    A.writeString(";"));
                }));
              var E = function (A) {
                  var Y = A,
                    je = 0,
                    he = 0,
                    ee = {};
                  return (
                    (ee.write = function (ie, oe) {
                      if (ie >>> oe) throw "length over";
                      for (; je + oe >= 8;)
                        (Y.writeByte(255 & ((ie << je) | he)),
                          (oe -= 8 - je),
                          (ie >>>= 8 - je),
                          (he = 0),
                          (je = 0));
                      ((he = (ie << je) | he), (je = je + oe));
                    }),
                    (ee.flush = function () {
                      je > 0 && Y.writeByte(he);
                    }),
                    ee
                  );
                },
                z = function (A) {
                  for (
                    var Y = 1 << A,
                      je = (1 << A) + 1,
                      he = A + 1,
                      ee = F(),
                      ie = 0;
                    ie < Y;
                    ie += 1
                  )
                    ee.add(String.fromCharCode(ie));
                  (ee.add(String.fromCharCode(Y)),
                    ee.add(String.fromCharCode(je)));
                  var oe = b(),
                    $ = E(oe);
                  $.write(Y, he);
                  var X = 0,
                    Te = String.fromCharCode(R[X]);
                  for (X += 1; X < R.length;) {
                    var Ee = String.fromCharCode(R[X]);
                    ((X += 1),
                      ee.contains(Te + Ee)
                        ? (Te = Te + Ee)
                        : ($.write(ee.indexOf(Te), he),
                          ee.size() < 4095 &&
                            (ee.size() == 1 << he && (he += 1),
                            ee.add(Te + Ee)),
                          (Te = Ee)));
                  }
                  return (
                    $.write(ee.indexOf(Te), he),
                    $.write(je, he),
                    $.flush(),
                    oe.toByteArray()
                  );
                },
                F = function () {
                  var A = {},
                    Y = 0,
                    je = {};
                  return (
                    (je.add = function (he) {
                      if (je.contains(he)) throw "dup key:" + he;
                      ((A[he] = Y), (Y += 1));
                    }),
                    (je.size = function () {
                      return Y;
                    }),
                    (je.indexOf = function (he) {
                      return A[he];
                    }),
                    (je.contains = function (he) {
                      return typeof A[he] < "u";
                    }),
                    je
                  );
                };
              return K;
            },
            _ = function (L, G, H) {
              for (var O = ae(L, G), R = 0; R < G; R += 1)
                for (var K = 0; K < L; K += 1) O.setPixel(K, R, H(K, R));
              var E = b();
              O.write(E);
              for (
                var z = w(), F = E.toByteArray(), A = 0;
                A < F.length;
                A += 1
              )
                z.writeByte(F[A]);
              return (z.flush(), "data:image/gif;base64," + z);
            };
          return l;
        })();
        ((function () {
          a.stringToBytesFuncs["UTF-8"] = function (l) {
            function c(m) {
              for (var h = [], p = 0; p < m.length; p++) {
                var f = m.charCodeAt(p);
                f < 128
                  ? h.push(f)
                  : f < 2048
                    ? h.push(192 | (f >> 6), 128 | (f & 63))
                    : f < 55296 || f >= 57344
                      ? h.push(
                          224 | (f >> 12),
                          128 | ((f >> 6) & 63),
                          128 | (f & 63),
                        )
                      : (p++,
                        (f =
                          65536 +
                          (((f & 1023) << 10) | (m.charCodeAt(p) & 1023))),
                        h.push(
                          240 | (f >> 18),
                          128 | ((f >> 12) & 63),
                          128 | ((f >> 6) & 63),
                          128 | (f & 63),
                        ));
              }
              return h;
            }
            return c(l);
          };
        })(),
          (function (l) {
            s.exports = l();
          })(function () {
            return a;
          }));
      })(Ao)),
    Ao.exports
  );
}
var ig = lg();
const og =
  ig && ig.__esModule && Object.prototype.hasOwnProperty.call(ig, "default")
    ? ig.default
    : ig;
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cg = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  $u = (...s) =>
    s
      .filter((i, a, l) => !!i && i.trim() !== "" && l.indexOf(i) === a)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var dg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mg = V.forwardRef(
  (
    {
      color: s = "currentColor",
      size: i = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: l,
      className: c = "",
      children: m,
      iconNode: h,
      ...p
    },
    f,
  ) =>
    V.createElement(
      "svg",
      {
        ref: f,
        ...dg,
        width: i,
        height: i,
        stroke: s,
        strokeWidth: l ? (Number(a) * 24) / Number(i) : a,
        className: $u("lucide", c),
        ...p,
      },
      [
        ...h.map(([y, j]) => V.createElement(y, j)),
        ...(Array.isArray(m) ? m : [m]),
      ],
    ),
);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ce = (s, i) => {
  const a = V.forwardRef(({ className: l, ...c }, m) =>
    V.createElement(mg, {
      ref: m,
      iconNode: i,
      className: $u(`lucide-${cg(s)}`, l),
      ...c,
    }),
  );
  return ((a.displayName = `${s}`), a);
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iu = ce("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ug = ce("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pg = ce("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hg = ce("ArrowUpRight", [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fg = ce("Ban", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m4.9 4.9 14.2 14.2", key: "1m5liu" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = ce("Banknote", [
  [
    "rect",
    { width: "20", height: "12", x: "2", y: "6", rx: "2", key: "9lu3g6" },
  ],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "M6 12h.01M18 12h.01", key: "113zkx" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yg = ce("Bike", [
  ["circle", { cx: "18.5", cy: "17.5", r: "3.5", key: "15x4ox" }],
  ["circle", { cx: "5.5", cy: "17.5", r: "3.5", key: "1noe27" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["path", { d: "M12 17.5V14l-3-3 4-3 2 3h2", key: "1npguv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = ce("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vg = ce("CalendarClock", [
  [
    "path",
    {
      d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
      key: "1osxxc",
    },
  ],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jg = ce("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kg = ce("ChartColumn", [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bg = ce("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wg = ce("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ng = ce("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sg = ce("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = ce("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zg = ce("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tg = ce("Coffee", [
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M14 2v2", key: "6buw04" }],
  [
    "path",
    {
      d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
      key: "pwadti",
    },
  ],
  ["path", { d: "M6 2v2", key: "colzsn" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mg = ce("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pg = ce("CreditCard", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" },
  ],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eg = ce("CupSoda", [
  [
    "path",
    {
      d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",
      key: "8166m8",
    },
  ],
  ["path", { d: "M5 8h14", key: "pcz4l3" }],
  [
    "path",
    { d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0", key: "yjz344" },
  ],
  ["path", { d: "m12 8 1-6h2", key: "3ybfa4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ig = ce("DoorOpen", [
  ["path", { d: "M13 4h3a2 2 0 0 1 2 2v14", key: "hrm0s9" }],
  ["path", { d: "M2 20h3", key: "1gaodv" }],
  ["path", { d: "M13 20h9", key: "s90cdi" }],
  ["path", { d: "M10 12v.01", key: "vx6srw" }],
  [
    "path",
    {
      d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",
      key: "199qr4",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fl = ce("Dumbbell", [
  ["path", { d: "M14.4 14.4 9.6 9.6", key: "ic80wn" }],
  [
    "path",
    {
      d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",
      key: "nnl7wr",
    },
  ],
  ["path", { d: "m21.5 21.5-1.4-1.4", key: "1f1ice" }],
  ["path", { d: "M3.9 3.9 2.5 2.5", key: "1evmna" }],
  [
    "path",
    {
      d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",
      key: "yhosts",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lg = ce("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ag = ce("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $g = ce("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Og = ce("Flag", [
  [
    "path",
    {
      d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",
      key: "i9b6wo",
    },
  ],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rg = ce("Flame", [
  [
    "path",
    {
      d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
      key: "96xj49",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ou = ce("Footprints", [
  [
    "path",
    {
      d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",
      key: "1dudjm",
    },
  ],
  [
    "path",
    {
      d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",
      key: "l2t8xc",
    },
  ],
  ["path", { d: "M16 17h4", key: "1dejxt" }],
  ["path", { d: "M4 13h4", key: "1bwh8b" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fg = ce("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qg = ce("HandCoins", [
  [
    "path",
    { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17", key: "geh8rc" },
  ],
  [
    "path",
    {
      d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "1fto5m",
    },
  ],
  ["path", { d: "m2 16 6 6", key: "1pfhp9" }],
  ["circle", { cx: "16", cy: "9", r: "2.9", key: "1n0dlu" }],
  ["circle", { cx: "6", cy: "5", r: "3", key: "151irh" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _g = ce("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dg = ce("History", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hg = ce("Hourglass", [
  ["path", { d: "M5 22h14", key: "ehvnwv" }],
  ["path", { d: "M5 2h14", key: "pdyrp9" }],
  [
    "path",
    {
      d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",
      key: "1d314k",
    },
  ],
  [
    "path",
    {
      d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",
      key: "1vvvr6",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bg = ce("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wg = ce("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ug = ce("Languages", [
  ["path", { d: "m5 8 6 6", key: "1wu5hv" }],
  ["path", { d: "m4 14 6-6 2-3", key: "1k1g8d" }],
  ["path", { d: "M2 5h12", key: "or177f" }],
  ["path", { d: "M7 2h1", key: "1t2jsx" }],
  ["path", { d: "m22 22-5-10-5 10", key: "don7ne" }],
  ["path", { d: "M14 18h6", key: "1m8k6r" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vg = ce("LayoutGrid", [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" },
  ],
  [
    "rect",
    { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gg = ce("Library", [
  ["path", { d: "m16 6 4 14", key: "ji33uf" }],
  ["path", { d: "M12 6v14", key: "1n7gus" }],
  ["path", { d: "M8 8v12", key: "1gg7y9" }],
  ["path", { d: "M4 4v16", key: "6qkkli" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qg = ce("ListChecks", [
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yg = ce("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kg = ce("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zg = ce("Map", [
  [
    "path",
    {
      d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
      key: "169xi5",
    },
  ],
  ["path", { d: "M15 5.764v15", key: "1pn4in" }],
  ["path", { d: "M9 3.236v15", key: "1uimfh" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xg = ce("MessagesSquare", [
  [
    "path",
    {
      d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",
      key: "p1xzt8",
    },
  ],
  [
    "path",
    { d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1", key: "1cx29u" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jg = ce("Minus", [["path", { d: "M5 12h14", key: "1ays0h" }]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ey = ce("Monitor", [
  [
    "rect",
    { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
  ],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cu = ce("Move", [
  ["path", { d: "M12 2v20", key: "t6zp3m" }],
  ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
  ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
  ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ty = ce("Nfc", [
  ["path", { d: "M6 8.32a7.43 7.43 0 0 1 0 7.36", key: "9iaqei" }],
  ["path", { d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58", key: "1yha7l" }],
  ["path", { d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8", key: "4iu2gk" }],
  ["path", { d: "M16.37 2a20.16 20.16 0 0 1 0 20", key: "sap9u2" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ny = ce("Package", [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw",
    },
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["path", { d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7", key: "yx3hmr" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sy = ce("Percent", [
  ["line", { x1: "19", x2: "5", y1: "5", y2: "19", key: "1x9vlm" }],
  ["circle", { cx: "6.5", cy: "6.5", r: "2.5", key: "4mh3h7" }],
  ["circle", { cx: "17.5", cy: "17.5", r: "2.5", key: "1mdrzq" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ay = ce("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ry = ce("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ly = ce("QrCode", [
  ["rect", { width: "5", height: "5", x: "3", y: "3", rx: "1", key: "1tu5fj" }],
  [
    "rect",
    { width: "5", height: "5", x: "16", y: "3", rx: "1", key: "1v8r4q" },
  ],
  [
    "rect",
    { width: "5", height: "5", x: "3", y: "16", rx: "1", key: "1x03jg" },
  ],
  ["path", { d: "M21 16h-3a2 2 0 0 0-2 2v3", key: "177gqh" }],
  ["path", { d: "M21 21v.01", key: "ents32" }],
  ["path", { d: "M12 7v3a2 2 0 0 1-2 2H7", key: "8crl2c" }],
  ["path", { d: "M3 12h.01", key: "nlz23k" }],
  ["path", { d: "M12 3h.01", key: "n36tog" }],
  ["path", { d: "M12 16v.01", key: "133mhm" }],
  ["path", { d: "M16 12h1", key: "1slzba" }],
  ["path", { d: "M21 12v.01", key: "1lwtk9" }],
  ["path", { d: "M12 21v-1", key: "1880an" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iy = ce("Receipt", [
  [
    "path",
    {
      d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",
      key: "q3az6g",
    },
  ],
  ["path", { d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8", key: "1h4pet" }],
  ["path", { d: "M12 17.5v-11", key: "1jc1ny" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oy = ce("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cy = ce("Route", [
  ["circle", { cx: "6", cy: "19", r: "3", key: "1kj8tv" }],
  [
    "path",
    { d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15", key: "1d8sl" },
  ],
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dy = ce("Salad", [
  ["path", { d: "M7 21h10", key: "1b0cd5" }],
  ["path", { d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z", key: "4rw317" }],
  [
    "path",
    {
      d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",
      key: "10xrj0",
    },
  ],
  ["path", { d: "m13 12 4-4", key: "1hckqy" }],
  [
    "path",
    { d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2", key: "1p4srx" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const my = ce("ScanLine", [
  ["path", { d: "M3 7V5a2 2 0 0 1 2-2h2", key: "aa7l1z" }],
  ["path", { d: "M17 3h2a2 2 0 0 1 2 2v2", key: "4qcy5o" }],
  ["path", { d: "M21 17v2a2 2 0 0 1-2 2h-2", key: "6vwrx8" }],
  ["path", { d: "M7 21H5a2 2 0 0 1-2-2v-2", key: "ioqczr" }],
  ["path", { d: "M7 12h10", key: "b7w52i" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uy = ce("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const py = ce("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hy = ce("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fy = ce("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gy = ce("SlidersHorizontal", [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yy = ce("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xy = ce("Snowflake", [
  ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "m20 16-4-4 4-4", key: "rquw4f" }],
  ["path", { d: "m4 8 4 4-4 4", key: "12s3z9" }],
  ["path", { d: "m16 4-4 4-4-4", key: "1tumq1" }],
  ["path", { d: "m8 20 4-4 4 4", key: "9p200w" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ou = ce("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vy = ce("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jy = ce("Store", [
  [
    "path",
    {
      d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",
      key: "ztvudi",
    },
  ],
  ["path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8", key: "1b2hhj" }],
  ["path", { d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4", key: "2ebpfo" }],
  ["path", { d: "M2 7h20", key: "1fcdvo" }],
  [
    "path",
    {
      d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",
      key: "6c3vgh",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ky = ce("Tablet", [
  [
    "rect",
    {
      width: "16",
      height: "20",
      x: "4",
      y: "2",
      rx: "2",
      ry: "2",
      key: "76otgf",
    },
  ],
  ["line", { x1: "12", x2: "12.01", y1: "18", y2: "18", key: "1dp563" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const by = ce("Tag", [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0",
    },
  ],
  [
    "circle",
    { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wy = ce("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ny = ce("Ticket", [
  [
    "path",
    {
      d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",
      key: "qn84l0",
    },
  ],
  ["path", { d: "M13 5v2", key: "dyzc3o" }],
  ["path", { d: "M13 17v2", key: "1ont0d" }],
  ["path", { d: "M13 11v2", key: "1wjjxi" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sy = ce("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cy = ce("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const zy = ce("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ty = ce("UserPlus", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["line", { x1: "19", x2: "19", y1: "8", y2: "14", key: "1bvyxn" }],
  ["line", { x1: "22", x2: "16", y1: "11", y2: "11", key: "1shjgl" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const My = ce("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Py = ce("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6",
    },
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ey = ce("Watch", [
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["polyline", { points: "12 10 12 12 13 13", key: "19dquz" }],
  [
    "path",
    {
      d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",
      key: "18k57s",
    },
  ],
  [
    "path",
    {
      d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",
      key: "16ny36",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Iy = ce("WifiOff", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ly = ce("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ay = ce("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi",
    },
  ],
]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $y = ce("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Al = V.createContext(null),
  me = () => V.useContext(Al),
  Ru = V.createContext(null);
function Fu() {
  const { s } = me();
  return V.useMemo(() => Au(s.lang, s.arabicDigits), [s.lang, s.arabicDigits]);
}
const Oy = {
    activity: iu,
    back: ug,
    arrow: pg,
    out: hg,
    ban: fg,
    cash: gg,
    bike: yg,
    building: xg,
    calendarClock: vg,
    calendar: jg,
    clock: zg,
    card: Pg,
    target: wy,
    chart: kg,
    check: bg,
    chevronStart: wg,
    chevron: Ng,
    alert: Sg,
    ok: Cg,
    coffee: Tg,
    copy: Mg,
    cup: Eg,
    door: Ig,
    dumbbell: fl,
    eye: Ag,
    eyeOff: Lg,
    file: $g,
    flag: Og,
    flame: Rg,
    steps: ou,
    gift: Fg,
    coins: qg,
    heart: _g,
    history: Dg,
    hourglass: Hg,
    home: Bg,
    info: Wg,
    lang: Ug,
    grid: Vg,
    library: Gg,
    list: Qg,
    lock: Yg,
    logout: Kg,
    map: Zg,
    chat: Xg,
    minus: Jg,
    monitor: ey,
    move: cu,
    nfc: ty,
    package: ny,
    percent: sy,
    play: ay,
    plus: ry,
    qr: ly,
    receipt: iy,
    reset: oy,
    route: cy,
    salad: dy,
    scan: my,
    search: uy,
    send: py,
    settings: hy,
    shield: fy,
    sliders: gy,
    phone: yy,
    snow: xy,
    sparkles: Ou,
    edit: vy,
    store: jy,
    tablet: ky,
    tag: by,
    ticket: Ny,
    timer: Sy,
    warn: Cy,
    trophy: zy,
    userPlus: Ty,
    users: My,
    wallet: Py,
    watch: Ey,
    wifi: Ly,
    wifiOff: Iy,
    wrench: Ay,
    x: $y,
    treadmill: ou,
    rower: iu,
    machine: fl,
    cable: cu,
    rack: fl,
    bench: fl,
  },
  Ry = new Set([
    "back",
    "arrow",
    "out",
    "chevron",
    "chevronStart",
    "send",
    "logout",
  ]);
function M({ name: s, size: i = 20, className: a = "", ...l }) {
  const c = Oy[s] || Ou;
  return e.jsx(c, {
    size: i,
    strokeWidth: 1.75,
    "aria-hidden": "true",
    className: `${Ry.has(s) ? "dir-flip" : ""} ${a}`,
    ...l,
  });
}
function Z({
  children: s,
  icon: i,
  iconEnd: a,
  variant: l = "primary",
  size: c = "",
  className: m = "",
  block: h = !1,
  ...p
}) {
  return e.jsxs("button", {
    type: "button",
    className: `btn btn-${l} ${c ? `btn-${c}` : ""} ${h ? "btn-block" : ""} ${m}`,
    ...p,
    children: [
      i && e.jsx(M, { name: i, size: c === "lg" ? 20 : 18 }),
      s && e.jsx("span", { children: s }),
      a && e.jsx(M, { name: a, size: 18 }),
    ],
  });
}
function yn({ icon: s, label: i, className: a = "", size: l = 20, ...c }) {
  return e.jsx("button", {
    type: "button",
    className: `icon-btn ${a}`,
    "aria-label": i,
    title: i,
    ...c,
    children: e.jsx(M, { name: s, size: l }),
  });
}
function ge({ children: s, tone: i = "neutral", icon: a, className: l = "" }) {
  return e.jsxs("span", {
    className: `tag tag-${i} ${l}`,
    children: [a && e.jsx(M, { name: a, size: 13 }), s],
  });
}
function Ge({ phase: s }) {
  const { t: i } = Fu();
  return e.jsx("span", {
    className: `phase phase-${s}`,
    title: i(`phase.${s}.long`),
    children: i(`phase.${s}`),
  });
}
const Fy = {
  active: "ok",
  paid: "ok",
  booked: "ok",
  attended: "ok",
  completed: "ok",
  ready: "ok",
  expiring: "warn",
  pending: "warn",
  waitlisted: "warn",
  maintenance: "warn",
  expired: "bad",
  noshow: "bad",
  cancelled: "neutral",
  frozen: "frost",
  scheduled: "neutral",
  used: "neutral",
  inactive: "neutral",
};
function _e({ value: s }) {
  const { t: i } = Fu();
  return e.jsx("span", {
    className: `status status-${Fy[s] || "neutral"}`,
    children: i(`status.${s}`),
  });
}
function Ke({ name: s = "", initials: i, tone: a = "", size: l = "" }) {
  const c =
    i ||
    s
      .split(" ")
      .map((m) => m[0])
      .slice(0, 2)
      .join("");
  return e.jsx("span", {
    className: `avatar ${a} ${l}`,
    "aria-hidden": "true",
    children: c,
  });
}
function nt({ options: s, value: i, onChange: a, label: l, size: c = "" }) {
  return e.jsx("div", {
    className: `segmented ${c}`,
    role: "radiogroup",
    "aria-label": l,
    children: s.map((m) =>
      e.jsxs(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": i === m.value,
          className: i === m.value ? "on" : "",
          onClick: () => a(m.value),
          children: [
            m.icon && e.jsx(M, { name: m.icon, size: 16 }),
            m.label,
            m.count != null &&
              e.jsx("span", { className: "count", children: m.count }),
          ],
        },
        m.value,
      ),
    ),
  });
}
function es({
  checked: s,
  onChange: i,
  label: a,
  description: l,
  disabled: c,
}) {
  return e.jsxs("label", {
    className: `toggle ${c ? "is-disabled" : ""}`,
    children: [
      e.jsxs("span", {
        className: "toggle-text",
        children: [
          e.jsx("strong", { children: a }),
          l && e.jsx("small", { children: l }),
        ],
      }),
      e.jsx("input", {
        type: "checkbox",
        role: "switch",
        checked: s,
        disabled: c,
        onChange: (m) => i(m.target.checked),
      }),
      e.jsx("span", { className: "toggle-track", "aria-hidden": "true" }),
    ],
  });
}
function It({ label: s, hint: i, children: a }) {
  return e.jsxs("label", {
    className: "field",
    children: [
      e.jsx("span", { className: "field-label", children: s }),
      a,
      i && e.jsx("small", { className: "field-hint", children: i }),
    ],
  });
}
function tr({ value: s, max: i = 1, tone: a = "", label: l }) {
  const c = Math.max(0, Math.min(100, (s / i) * 100));
  return e.jsx("div", {
    className: `meter ${a}`,
    role: "meter",
    "aria-valuemin": 0,
    "aria-valuemax": i,
    "aria-valuenow": s,
    "aria-label": l,
    children: e.jsx("span", { style: { inlineSize: `${c}%` } }),
  });
}
function Ze({ icon: s = "sparkles", title: i, children: a, action: l }) {
  return e.jsxs("div", {
    className: "empty",
    children: [
      e.jsx("span", {
        className: "empty-icon",
        children: e.jsx(M, { name: s, size: 22 }),
      }),
      e.jsx("strong", { children: i }),
      a && e.jsx("p", { children: a }),
      l,
    ],
  });
}
function Ue({
  icon: s,
  iconTone: i = "",
  title: a,
  meta: l,
  end: c,
  onClick: m,
  className: h = "",
  lead: p,
}) {
  const f = m ? "button" : "div";
  return e.jsxs(f, {
    type: m ? "button" : void 0,
    className: `row ${m ? "row-click" : ""} ${h}`,
    onClick: m,
    children: [
      p,
      s &&
        e.jsx("span", {
          className: `row-icon ${i}`,
          children: e.jsx(M, { name: s, size: 18 }),
        }),
      e.jsxs("span", {
        className: "row-body",
        children: [
          e.jsx("span", { className: "row-title", children: a }),
          l && e.jsx("span", { className: "row-meta", children: l }),
        ],
      }),
      c != null && e.jsx("span", { className: "row-end", children: c }),
      m && !c && e.jsx(M, { name: "chevron", size: 16, className: "row-chev" }),
    ],
  });
}
function et({
  title: s,
  onClose: i,
  children: a,
  footer: l,
  wide: c = !1,
  labelledBy: m,
}) {
  const h = V.useContext(Ru),
    p = V.useRef(null);
  V.useEffect(() => {
    var C;
    const y = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    (C = p.current) == null || C.focus();
    const j = (v) => {
      if ((v.key === "Escape" && i(), v.key !== "Tab" || !p.current)) return;
      const g = [
        ...p.current.querySelectorAll(
          "button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),a[href]",
        ),
      ];
      g.length &&
        (v.shiftKey &&
        (document.activeElement === g[0] ||
          document.activeElement === p.current)
          ? (v.preventDefault(), g.at(-1).focus())
          : !v.shiftKey &&
            document.activeElement === g.at(-1) &&
            (v.preventDefault(), g[0].focus()));
    };
    return (
      document.addEventListener("keydown", j),
      () => {
        var v;
        document.body.style.overflow = previousOverflow;
        (document.removeEventListener("keydown", j),
          (v = y == null ? void 0 : y.focus) == null || v.call(y));
      }
    );
  }, [i]);
  const f = e.jsx("div", {
    className: `sheet-backdrop ${h ? "in-device" : ""}`,
    onMouseDown: (y) => y.target === y.currentTarget && i(),
    children: e.jsxs("section", {
      ref: p,
      tabIndex: -1,
      role: "dialog",
      "aria-modal": "true",
      "aria-label": s,
      className: `sheet ${c ? "wide" : ""}`,
      children: [
        e.jsxs("header", {
          className: "sheet-head",
          children: [
            e.jsx("h2", { children: s }),
            e.jsx(yn, { icon: "x", label: "Close", onClick: i }),
          ],
        }),
        e.jsx("div", { className: "sheet-body", children: a }),
        l && e.jsx("footer", { className: "sheet-foot", children: l }),
      ],
    }),
  });
  return rg.createPortal(f, (h == null ? void 0 : h.current) || document.body);
}
function qu({ value: s, size: i = 200 }) {
  const a = V.useMemo(() => {
    const l = og(0, "M");
    (l.addData(s), l.make());
    const c = l.getModuleCount(),
      m = [];
    for (let h = 0; h < c; h++)
      for (let p = 0; p < c; p++)
        l.isDark(h, p) && m.push(`M${p} ${h}h1v1h-1z`);
    return { n: c, d: m.join("") };
  }, [s]);
  return e.jsxs("svg", {
    className: "qr",
    viewBox: `-2 -2 ${a.n + 4} ${a.n + 4}`,
    width: i,
    height: i,
    role: "img",
    "aria-label": "Entry QR code",
    shapeRendering: "crispEdges",
    children: [
      e.jsx("rect", {
        x: "-2",
        y: "-2",
        width: a.n + 4,
        height: a.n + 4,
        fill: "#fff",
      }),
      e.jsx("path", { d: a.d, fill: "currentColor" }),
    ],
  });
}
function _u({ data: s, nowHour: i, f: a, highlight: l, height: c = 64 }) {
  return e.jsx("div", {
    className: "hourbars",
    style: { blockSize: c },
    "aria-hidden": "true",
    children: s.map((m) =>
      e.jsx(
        "span",
        {
          className: `hb ${m.h === i ? "now" : ""} ${l === m.h ? "best" : ""} ${m.h < i ? "past" : ""}`,
          style: { blockSize: `${Math.max(6, m.pct * 100)}%` },
          title: `${a.time(m.h * 60)}`,
        },
        m.h,
      ),
    ),
  });
}
function qy() {
  const { s, act: i, t: a, f: l, L: c, notify: m } = me(),
    h = Pl(s),
    [p, f] = V.useState("rewards"),
    [y, j] = V.useState(null),
    [C, v] = V.useState(null),
    [g, N] = V.useState(null),
    k = s.ledger.filter((w) => w.memberId === be),
    b = s.redemptions.filter((w) => w.memberId === be);
  return e.jsxs("div", {
    className: "mscreen rewards",
    children: [
      e.jsxs("header", {
        className: "wallet",
        children: [
          e.jsxs("div", {
            className: "wallet-top",
            children: [
              e.jsx("h1", { children: a("m.rw.title") }),
              e.jsx(Ge, { phase: "3" }),
            ],
          }),
          e.jsxs("p", {
            className: "wallet-num tnum",
            children: [l.num(h), e.jsx("span", { children: a("ptsWord") })],
          }),
          e.jsx("p", {
            className: "wallet-note",
            children: a("m.rw.expiry", { n: s.settings.pointsExpiryMonths }),
          }),
        ],
      }),
      e.jsx("div", {
        className: "mpad",
        children: e.jsx(nt, {
          size: "block",
          value: p,
          onChange: f,
          label: a("m.rw.title"),
          options: [
            { value: "rewards", label: a("m.rw.tabRewards") },
            { value: "offers", label: a("m.rw.tabOffers") },
            { value: "earn", label: a("m.rw.tabEarn") },
          ],
        }),
      }),
      p === "rewards" &&
        e.jsxs(e.Fragment, {
          children: [
            b.length > 0 &&
              e.jsxs("section", {
                className: "msec",
                children: [
                  e.jsx("div", {
                    className: "msec-head",
                    children: e.jsx("h2", { children: a("m.rw.yours") }),
                  }),
                  b.map((w) =>
                    e.jsx(
                      Ue,
                      {
                        icon: "ticket",
                        iconTone: "lime",
                        title: c(de(Jn, w.rewardId).name),
                        meta: e.jsx("span", {
                          className: "tnum code",
                          children: w.code,
                        }),
                        end: e.jsx(_e, { value: w.status }),
                        onClick: () => j(w),
                      },
                      w.id,
                    ),
                  ),
                ],
              }),
            e.jsx("section", {
              className: "msec",
              children: e.jsx("ul", {
                className: "reward-list",
                children: Jn.map((w) => {
                  const S = s.rewardStock[w.id] ?? 0,
                    ae = h >= w.pts && S > 0;
                  return e.jsxs(
                    "li",
                    {
                      className: "reward",
                      children: [
                        e.jsx("span", {
                          className: `reward-ico ${w.funded}`,
                          children: e.jsx(M, { name: w.icon, size: 22 }),
                        }),
                        e.jsxs("span", {
                          className: "reward-body",
                          children: [
                            e.jsx("strong", { children: c(w.name) }),
                            e.jsxs("small", {
                              children: [
                                w.partner ? w.partner : c(s.gym.name),
                                " · ",
                                a("m.rw.left", { n: S }),
                              ],
                            }),
                            !ae &&
                              S > 0 &&
                              e.jsx(tr, {
                                value: h,
                                max: w.pts,
                                label: c(w.name),
                              }),
                          ],
                        }),
                        e.jsxs("span", {
                          className: "reward-act",
                          children: [
                            e.jsx("b", {
                              className: "tnum",
                              children: l.num(w.pts),
                            }),
                            e.jsx(Z, {
                              size: "sm",
                              variant: ae ? "primary" : "quiet",
                              disabled: !ae,
                              onClick: () => v(w),
                              children:
                                S < 1
                                  ? a("m.rw.soldOut")
                                  : ae
                                    ? a("m.rw.redeem")
                                    : a("m.rw.toGo", { n: l.num(w.pts - h) }),
                            }),
                          ],
                        }),
                      ],
                    },
                    w.id,
                  );
                }),
              }),
            }),
            e.jsxs("section", {
              className: "msec",
              children: [
                e.jsx("div", {
                  className: "msec-head",
                  children: e.jsx("h2", { children: a("m.rw.history") }),
                }),
                k.slice(0, 8).map((w) => {
                  var S;
                  return e.jsx(
                    Ue,
                    {
                      icon: w.pts > 0 ? "plus" : w.pts < 0 ? "gift" : "minus",
                      iconTone: w.pts > 0 ? "" : "plain",
                      title:
                        w.kind === "redeem"
                          ? c(
                              (S = de(Jn, w.rewardId)) == null
                                ? void 0
                                : S.name,
                            )
                          : a(`earn.${w.kind}`),
                      meta:
                        w.at === xe
                          ? w.clock
                            ? `${a("today")} · ${l.time(w.clock)}`
                            : a("today")
                          : l.date(w.at),
                      end: e.jsxs("b", {
                        className: `tnum ${w.pts > 0 ? "plus" : ""}`,
                        children: [w.pts > 0 ? "+" : "", l.num(w.pts)],
                      }),
                    },
                    w.id,
                  );
                }),
              ],
            }),
          ],
        }),
      p === "offers" &&
        e.jsxs("section", {
          className: "msec",
          children: [
            e.jsxs("div", {
              className: "msec-head",
              children: [
                e.jsx("h2", { children: a("m.rw.offersTitle") }),
                e.jsx(Ge, { phase: "4" }),
              ],
            }),
            e.jsx("p", {
              className: "muted msec-lead",
              children: a("m.rw.offersLead"),
            }),
            e.jsx("ul", {
              className: "offers",
              children: qo.map((w) => {
                const S = s.promoReveals.find(
                  (ae) => ae.offerId === w.id && ae.memberId === be,
                );
                return e.jsxs(
                  "li",
                  {
                    className: "offer",
                    children: [
                      e.jsxs("span", {
                        className: "offer-partner",
                        children: [
                          e.jsx(Ke, { name: w.partner, tone: "clay" }),
                          e.jsxs("span", {
                            children: [
                              e.jsx("strong", { children: w.partner }),
                              e.jsx("small", {
                                children: a("m.rw.walk", { n: w.distance }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("strong", {
                        className: "offer-title",
                        children: c(w.title),
                      }),
                      e.jsx("p", { children: c(w.detail) }),
                      S
                        ? e.jsxs("div", {
                            className: "promo",
                            children: [
                              e.jsx("span", {
                                className: "tnum",
                                children: w.code,
                              }),
                              e.jsx("small", {
                                children: S.redeemed
                                  ? a("m.rw.used")
                                  : a("m.rw.showCode"),
                              }),
                            ],
                          })
                        : e.jsx(Z, {
                            size: "sm",
                            variant: "secondary",
                            icon: "tag",
                            onClick: () => {
                              (i(Ff, w.id), N(w));
                            },
                            children: a("m.rw.getCode"),
                          }),
                    ],
                  },
                  w.id,
                );
              }),
            }),
            e.jsxs("p", {
              className: "policy",
              children: [
                e.jsx(M, { name: "info", size: 15 }),
                a("m.rw.noDelivery"),
              ],
            }),
          ],
        }),
      p === "earn" &&
        e.jsxs("section", {
          className: "msec",
          children: [
            e.jsx("p", {
              className: "muted msec-lead",
              children: a("m.rw.earnLead"),
            }),
            e.jsx("ul", {
              className: "earn-table",
              children: Qo.map((w) =>
                e.jsxs(
                  "li",
                  {
                    className: w.pts === 0 ? "zero" : "",
                    children: [
                      e.jsxs("span", {
                        children: [
                          e.jsx("strong", { children: a(`earn.${w.id}`) }),
                          e.jsx("small", { children: a(`earn.${w.id}.how`) }),
                        ],
                      }),
                      e.jsx("b", {
                        className: "tnum",
                        children: w.pts ? `+${l.num(w.pts)}` : l.num(0),
                      }),
                    ],
                  },
                  w.id,
                ),
              ),
            }),
            e.jsxs("p", {
              className: "policy",
              children: [
                e.jsx(M, { name: "shield", size: 15 }),
                a("m.rw.rules"),
              ],
            }),
          ],
        }),
      C &&
        e.jsxs(et, {
          title: c(C.name),
          onClose: () => v(null),
          footer: e.jsx(Z, {
            block: !0,
            size: "lg",
            onClick: () => {
              (s.redemptions.length,
                i(Rf, C.id),
                v(null),
                m(a("m.rw.redeemedToast")),
                setTimeout(() => f("rewards"), 0));
            },
            children: a("m.rw.confirm", { n: l.num(C.pts) }),
          }),
          children: [
            e.jsx("p", {
              children: a(
                C.funded === "partner"
                  ? "m.rw.partnerFunded"
                  : "m.rw.gymFunded",
                { partner: C.partner || "" },
              ),
            }),
            e.jsx("div", {
              className: "sheet-facts",
              children: e.jsxs("span", {
                children: [
                  e.jsx(M, { name: "wallet", size: 16 }),
                  a("m.rw.after", { n: l.num(h - C.pts) }),
                ],
              }),
            }),
          ],
        }),
      y &&
        e.jsxs(et, {
          title: c(de(Jn, y.rewardId).name),
          onClose: () => j(null),
          children: [
            e.jsx("div", { className: "bigcode tnum", children: y.code }),
            e.jsx("p", {
              className: "muted center",
              children: a("m.rw.codeHelp"),
            }),
          ],
        }),
      g &&
        e.jsxs(et, {
          title: g.partner,
          onClose: () => N(null),
          children: [
            e.jsx("div", { className: "bigcode tnum", children: g.code }),
            e.jsx("p", {
              className: "center",
              children: e.jsx("strong", { children: c(g.title) }),
            }),
            e.jsx("p", {
              className: "muted center",
              children: a("m.rw.codeTracked"),
            }),
          ],
        }),
    ],
  });
}
function _y() {
  const { s, act: i, go: a, t: l, f: c, L: m, notify: h } = me(),
    p = ze(s, be),
    f = En(p),
    y = lt(s, p),
    [j, C] = V.useState(null),
    v = s.payments.filter((g) => g.memberId === be);
  return e.jsxs("div", {
    className: "mscreen me",
    children: [
      e.jsxs("header", {
        className: "me-head",
        children: [
          e.jsx(Ke, { name: m(p.name), tone: "lime", size: "xl" }),
          e.jsxs("div", {
            children: [
              e.jsx("h1", { children: m(p.name) }),
              e.jsxs("p", {
                className: "tnum",
                children: [
                  c.digits(p.code),
                  " · ",
                  l("m.me.since", {
                    date: c.date(`${p.since}-01`, {
                      month: "long",
                      year: "numeric",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "mcard plan-card",
        children: [
          e.jsxs("div", {
            className: "plan-top",
            children: [
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: l("m.me.plan") }),
                  e.jsxs("strong", {
                    children: [m(f.name), " · ", c.money(f.price)],
                  }),
                ],
              }),
              e.jsx(_e, { value: y }),
            ],
          }),
          e.jsxs("div", {
            className: "plan-dates",
            children: [
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: l("m.me.ends") }),
                  e.jsx("b", {
                    className: "tnum",
                    children: c.date(p.end, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }),
                  }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: l("m.me.freezeLeft") }),
                  e.jsx("b", {
                    className: "tnum",
                    children: l("daysN", { n: ks(s, p) }),
                  }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: l("m.me.guests") }),
                  e.jsx("b", {
                    className: "tnum",
                    children: l("of", {
                      a: c.num(Za(p)),
                      b: c.num(f.guestPasses),
                    }),
                  }),
                ],
              }),
            ],
          }),
          p.freeze &&
            e.jsxs("p", {
              className: "plan-freeze",
              children: [
                e.jsx(M, { name: "snow", size: 16 }),
                l("m.me.frozenLine", {
                  from: c.date(p.freeze.start),
                  to: c.date(Ye(p.freeze.start, p.freeze.days)),
                }),
              ],
            }),
          e.jsxs("div", {
            className: "plan-actions",
            children: [
              e.jsx(Z, {
                variant: "primary",
                icon: "card",
                onClick: () => C("renew"),
                children: l("m.me.renew"),
              }),
              p.freeze
                ? e.jsx(Z, {
                    variant: "secondary",
                    icon: "snow",
                    onClick: () => {
                      (i(ec, be), h(l("m.me.unfrozenToast")));
                    },
                    children: l("m.me.endFreeze"),
                  })
                : e.jsx(Z, {
                    variant: "secondary",
                    icon: "snow",
                    disabled: ks(s, p) < 1,
                    onClick: () => C("freeze"),
                    children: l("m.me.freeze"),
                  }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: l("m.me.payments") }),
          }),
          v.map((g) =>
            e.jsx(
              Ue,
              {
                icon:
                  g.method === "cash"
                    ? "cash"
                    : g.method === "card"
                      ? "card"
                      : "receipt",
                iconTone: g.status === "pending" ? "warn" : "",
                title: `${l(`m.me.pay.${g.label}`)} · ${c.money(g.amount)}`,
                meta: `${l(`method.${g.method}`)} · ${g.at === xe ? l("today") : c.date(g.at)}${g.ref ? ` · ${l("m.me.fawryRef", { ref: c.digits(g.ref) })}` : ""}`,
                end: e.jsx(_e, { value: g.status }),
              },
              g.id,
            ),
          ),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: l("m.me.more") }),
          }),
          e.jsx(Ue, {
            icon: "chat",
            title: l("m.nav.coach"),
            meta: l("m.me.coachMeta"),
            end: e.jsx(Ge, { phase: "2" }),
            onClick: () => a("member", "coach"),
          }),
          e.jsx(Ue, {
            icon: "users",
            title: l("m.nav.community"),
            meta: l("m.me.communityMeta"),
            end: e.jsx(Ge, { phase: "3" }),
            onClick: () => a("member", "community"),
          }),
          e.jsx(Ue, {
            icon: "watch",
            title: l("m.nav.health"),
            meta: s.consent.wearable ? l("m.me.healthOn") : l("m.me.healthOff"),
            end: e.jsx(Ge, { phase: "3" }),
            onClick: () => a("member", "health"),
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: l("m.me.settings") }),
          }),
          e.jsxs("div", {
            className: "mcard pad-x",
            children: [
              e.jsx(es, {
                label: l("m.me.arabic"),
                description: l("m.me.arabicHint"),
                checked: s.lang === "ar",
                onChange: (g) => i((N) => ({ ...N, lang: g ? "ar" : "en" })),
              }),
              e.jsx(es, {
                label: l("digits.label"),
                description: l("m.me.digitsHint"),
                checked: s.arabicDigits,
                onChange: (g) => i((N) => ({ ...N, arabicDigits: g })),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: l("m.me.privacy") }),
          }),
          e.jsx("p", {
            className: "muted msec-lead",
            children: l("m.me.privacyLead"),
          }),
          e.jsx(Ue, {
            icon: "file",
            title: l("m.me.export"),
            meta: l("m.me.exportMeta"),
            onClick: () => h(l("m.me.exportToast")),
          }),
          e.jsx(Ue, {
            icon: "eyeOff",
            title: l("m.me.delete"),
            meta: l("m.me.deleteMeta"),
            onClick: () => C("delete"),
          }),
        ],
      }),
      j === "renew" && e.jsx(Dy, { onClose: () => C(null) }),
      j === "freeze" && e.jsx(Hy, { onClose: () => C(null) }),
      j === "delete" &&
        e.jsx(et, {
          title: l("m.me.delete"),
          onClose: () => C(null),
          footer: e.jsx(Z, {
            variant: "secondary",
            block: !0,
            onClick: () => C(null),
            children: l("close"),
          }),
          children: e.jsx("p", { children: l("m.me.deleteText") }),
        }),
    ],
  });
}
function Dy({ onClose: s }) {
  const { s: i, act: a, t: l, f: c, L: m, notify: h } = me(),
    p = ze(i, be),
    [f, y] = V.useState(p.planId),
    [j, C] = V.useState("card"),
    v = de(Wt, f),
    g = p.end > xe ? p.end : xe,
    N = Cl(g, v.months);
  return e.jsxs(et, {
    title: l("m.me.renew"),
    onClose: s,
    footer:
      j === "cash"
        ? e.jsx(Z, {
            block: !0,
            size: "lg",
            variant: "secondary",
            onClick: s,
            children: l("m.renew.cashOk"),
          })
        : e.jsx(Z, {
            block: !0,
            size: "lg",
            onClick: () => {
              (a(er, be, f, j, "app"),
                h(
                  l(
                    j === "card" ? "m.renew.paidToast" : "m.renew.pendingToast",
                    { method: l(`method.${j}`) },
                  ),
                ),
                s());
            },
            children: l("m.renew.pay", { amount: c.money(v.price) }),
          }),
    children: [
      e.jsx("div", {
        className: "choice-list",
        role: "radiogroup",
        "aria-label": l("m.me.plan"),
        children: Wt.map((k) =>
          e.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": f === k.id,
              className: `choice ${f === k.id ? "on" : ""}`,
              onClick: () => y(k.id),
              children: [
                e.jsxs("span", {
                  children: [
                    e.jsx("strong", { children: m(k.name) }),
                    e.jsx("small", {
                      children: l("m.renew.guests", { n: k.guestPasses }),
                    }),
                  ],
                }),
                e.jsx("b", { className: "tnum", children: c.money(k.price) }),
              ],
            },
            k.id,
          ),
        ),
      }),
      e.jsx(It, {
        label: l("m.renew.method"),
        children: e.jsx("div", {
          className: "method-grid",
          children: ["card", "fawry", "instapay", "cash"].map((k) =>
            e.jsxs(
              "button",
              {
                type: "button",
                className: `method ${j === k ? "on" : ""}`,
                "aria-pressed": j === k,
                onClick: () => C(k),
                children: [
                  e.jsx(M, {
                    name:
                      k === "cash"
                        ? "cash"
                        : k === "card"
                          ? "card"
                          : k === "fawry"
                            ? "receipt"
                            : "send",
                    size: 18,
                  }),
                  l(`method.${k}`),
                ],
              },
              k,
            ),
          ),
        }),
      }),
      e.jsxs("p", {
        className: "sheet-note",
        children: [
          e.jsx(M, { name: "info", size: 16 }),
          l(`m.renew.note.${j}`),
        ],
      }),
      e.jsx("div", {
        className: "sheet-facts",
        children: e.jsxs("span", {
          children: [
            e.jsx(M, { name: "calendar", size: 16 }),
            l("m.renew.newEnd", {
              date: c.date(N, {
                day: "numeric",
                month: "long",
                year: "numeric",
              }),
            }),
          ],
        }),
      }),
    ],
  });
}
function Hy({ onClose: s }) {
  const { s: i, act: a, t: l, f: c, notify: m } = me(),
    h = ze(i, be),
    p = ks(i, h),
    [f, y] = V.useState(1),
    [j, C] = V.useState(Math.min(14, p)),
    v = Ye(xe, f);
  return e.jsxs(et, {
    title: l("m.me.freeze"),
    onClose: s,
    footer: e.jsx(Z, {
      block: !0,
      size: "lg",
      icon: "snow",
      onClick: () => {
        (a(Pu, be, f, j), m(l("m.freeze.toast", { n: j })), s());
      },
      children: l("m.freeze.confirm", { n: j }),
    }),
    children: [
      e.jsx("p", {
        className: "muted",
        children: l("m.freeze.lead", {
          n: i.settings.freezeDaysPerYear,
          left: p,
        }),
      }),
      e.jsx(It, {
        label: l("m.freeze.start"),
        children: e.jsx(nt, {
          size: "block",
          value: f,
          onChange: y,
          label: l("m.freeze.start"),
          options: [
            { value: 0, label: l("today") },
            { value: 1, label: l("tomorrow") },
            { value: 7, label: l("m.freeze.nextWeek") },
          ],
        }),
      }),
      e.jsx(It, {
        label: l("m.freeze.length", { n: j }),
        children: e.jsx("input", {
          type: "range",
          className: "range",
          min: 1,
          max: p,
          value: j,
          onChange: (g) => C(Number(g.target.value)),
          "aria-valuetext": l("daysN", { n: j }),
        }),
      }),
      e.jsxs("div", {
        className: "freeze-preview",
        children: [
          e.jsxs("span", {
            children: [
              e.jsx("small", { children: l("m.freeze.pauses") }),
              e.jsx("b", { className: "tnum", children: c.date(v) }),
            ],
          }),
          e.jsx(M, { name: "arrow", size: 16 }),
          e.jsxs("span", {
            children: [
              e.jsx("small", { children: l("m.freeze.resumes") }),
              e.jsx("b", { className: "tnum", children: c.date(Ye(v, j)) }),
            ],
          }),
          e.jsxs("span", {
            className: "freeze-end",
            children: [
              e.jsx("small", { children: l("m.freeze.newEnd") }),
              e.jsx("b", { className: "tnum", children: c.date(Ye(h.end, j)) }),
            ],
          }),
        ],
      }),
      f === 0 &&
        e.jsxs("p", {
          className: "sheet-note",
          children: [
            e.jsx(M, { name: "info", size: 16 }),
            l("m.freeze.todayNote"),
          ],
        }),
    ],
  });
}
const By = ["all", "legs", "back", "chest", "shoulders", "arms", "full"];
function Wy() {
  const { s, t: i, L: a } = me(),
    [l, c] = V.useState("all"),
    [m, h] = V.useState(null),
    p = s.equipment.map((y) => ({ ...y, lib: Xt(y) })),
    f = (y) => l === "all" || y.lib.muscles.includes(l);
  return e.jsxs("div", {
    className: "mscreen explore",
    children: [
      e.jsx("p", { className: "muted mpad", children: i("m.ex.lead") }),
      e.jsx("div", {
        className: "chips mpad-x",
        role: "group",
        "aria-label": i("m.ex.muscle"),
        children: By.map((y) =>
          e.jsx(
            "button",
            {
              type: "button",
              className: l === y ? "on" : "",
              "aria-pressed": l === y,
              onClick: () => c(y),
              children: i(y === "all" ? "all" : `muscle.${y}`),
            },
            y,
          ),
        ),
      }),
      e.jsx(Du, { items: p, match: f, onPick: h }),
      e.jsx("section", {
        className: "msec",
        children: p.filter(f).map((y) =>
          e.jsx(
            Ue,
            {
              icon: y.lib.icon,
              iconTone: y.status === "maintenance" ? "warn" : "",
              title: a(y.lib.name),
              meta: `${y.label} · ${i(`zone.${y.zone}`)} · ${y.lib.muscles.map((j) => i(`muscle.${j}`)).join("، ")}`,
              end:
                y.status === "maintenance"
                  ? e.jsx(_e, { value: "maintenance" })
                  : void 0,
              onClick: () => h(y),
            },
            y.id,
          ),
        ),
      }),
      e.jsxs("p", {
        className: "policy",
        children: [e.jsx(M, { name: "info", size: 15 }), i("m.ex.boundary")],
      }),
      m &&
        e.jsxs(et, {
          title: a(m.lib.name),
          onClose: () => h(null),
          children: [
            e.jsxs("div", {
              className: "sheet-facts",
              children: [
                e.jsxs("span", {
                  children: [
                    e.jsx(M, { name: "map", size: 16 }),
                    m.label,
                    " · ",
                    i(`zone.${m.zone}`),
                  ],
                }),
                e.jsxs("span", {
                  children: [
                    e.jsx(M, { name: "target", size: 16 }),
                    m.lib.muscles.map((y) => i(`muscle.${y}`)).join(" · "),
                  ],
                }),
                m.lib.brand !== "—" &&
                  e.jsxs("span", {
                    children: [
                      e.jsx(M, { name: "tag", size: 16 }),
                      m.lib.brand,
                    ],
                  }),
              ],
            }),
            m.status === "maintenance" &&
              e.jsxs("p", {
                className: "sheet-note bad",
                children: [
                  e.jsx(M, { name: "wrench", size: 16 }),
                  i("m.ex.maint"),
                ],
              }),
            e.jsxs("div", {
              children: [
                e.jsx("h3", { className: "mini-h", children: i("m.ex.how") }),
                e.jsx("p", { children: a(m.lib.how) }),
              ],
            }),
            e.jsx("p", {
              className: "muted small",
              children: i("m.ex.libraryNote"),
            }),
          ],
        }),
    ],
  });
}
function Du({
  items: s,
  match: i = () => !0,
  onPick: a,
  editable: l = !1,
  onMove: c,
  selected: m,
}) {
  const { t: h, L: p } = me(),
    f = Tn.useRef(null),
    y = Tn.useRef(null),
    j = (v, g) => {
      l && ((y.current = g.id), v.currentTarget.setPointerCapture(v.pointerId));
    },
    C = (v) => {
      if (!l || !y.current) return;
      const g = f.current.getBoundingClientRect(),
        N = Math.max(4, Math.min(96, ((v.clientX - g.left) / g.width) * 100)),
        k = Math.max(6, Math.min(94, ((v.clientY - g.top) / g.height) * 100));
      c == null || c(y.current, Math.round(N), Math.round(k));
    };
  return e.jsxs("div", {
    className: `floor ${l ? "editable" : ""}`,
    ref: f,
    onPointerMove: C,
    onPointerUp: () => (y.current = null),
    dir: "ltr",
    children: [
      e.jsx("span", { className: "fz fz-cardio", children: h("zone.cardio") }),
      e.jsx("span", {
        className: "fz fz-strength",
        children: h("zone.strength"),
      }),
      e.jsx("span", { className: "fz fz-free", children: h("zone.free") }),
      e.jsx("span", { className: "fz fz-ladies", children: h("zone.ladies") }),
      e.jsx("span", { className: "fwall fwall-v" }),
      e.jsx("span", { className: "fwall fwall-h" }),
      e.jsxs("span", {
        className: "fdoor",
        children: [e.jsx(M, { name: "door", size: 14 }), h("m.ex.entrance")],
      }),
      s.map((v) =>
        e.jsxs(
          "button",
          {
            type: "button",
            className: `pin ${v.status === "maintenance" ? "maint" : ""} ${i(v) ? "" : "dim"} ${m === v.id ? "sel" : ""} ${v.isNew ? "new" : ""}`,
            style: { left: `${v.x}%`, top: `${v.y}%` },
            onClick: () => (a == null ? void 0 : a(v)),
            onPointerDown: (g) => j(g, v),
            "aria-label": `${p(v.lib.name)} ${v.label}`,
            children: [
              e.jsx(M, { name: v.lib.icon, size: 16 }),
              e.jsx("span", { className: "pin-label", children: v.label }),
            ],
          },
          v.id,
        ),
      ),
    ],
  });
}
function Uy() {
  const { s, act: i, go: a, t: l, f: c, L: m, notify: h } = me(),
    p = s.programs.find((g) => g.memberId === be),
    [f, y] = V.useState({});
  if (!p) return e.jsx(Ze, { icon: "dumbbell", title: l("m.tr.none") });
  const j = de(dt, p.trainerId),
    C = s.workoutLogs.filter((g) => g.memberId === be),
    v = p.items.every((g, N) => f[N]);
  return e.jsxs("div", {
    className: "mscreen training",
    children: [
      e.jsxs("section", {
        className: "program-head",
        children: [
          e.jsxs("span", {
            className: "program-by",
            children: [
              e.jsx(Ke, { name: m(j.name), size: "sm" }),
              l("m.tr.from", { name: m(j.name) }),
            ],
          }),
          e.jsx("h2", { children: m(p.name) }),
          p.note && e.jsxs("p", { children: ["“", m(p.note), "”"] }),
        ],
      }),
      e.jsx("ol", {
        className: "exercises",
        children: p.items.map((g, N) => {
          const k = de(s.equipment, g.equipmentId),
            b = k && Xt(k);
          return k
            ? e.jsxs(
                "li",
                {
                  className: `exercise ${f[N] ? "done" : ""} ${k.status === "maintenance" ? "maint" : ""}`,
                  children: [
                    e.jsx("button", {
                      type: "button",
                      className: "ex-check",
                      "aria-pressed": !!f[N],
                      "aria-label": m(b.name),
                      onClick: () => y((w) => ({ ...w, [N]: !w[N] })),
                      children: e.jsx(M, {
                        name: f[N] ? "check" : b.icon,
                        size: 18,
                      }),
                    }),
                    e.jsxs("span", {
                      className: "ex-body",
                      children: [
                        e.jsx("strong", { children: m(b.name) }),
                        e.jsxs("small", {
                          className: "tnum",
                          children: [
                            g.unit === "min"
                              ? l("min", { n: g.reps })
                              : l("m.tr.sets", { s: g.sets, r: g.reps }),
                            " · ",
                            k.label,
                          ],
                        }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: "link",
                      onClick: () => a("member", "explore"),
                      children: l("m.tr.where"),
                    }),
                  ],
                },
                N,
              )
            : null;
        }),
      }),
      e.jsxs("div", {
        className: "mpad",
        children: [
          e.jsx(Z, {
            block: !0,
            size: "lg",
            variant: v ? "primary" : "secondary",
            icon: "check",
            onClick: () => {
              (i(_f, p.id), y({}), h(l("m.tr.logged")));
            },
            children: l("m.tr.log"),
          }),
          e.jsxs("p", {
            className: "policy",
            children: [
              e.jsx(M, { name: "info", size: 15 }),
              l("m.tr.noPoints"),
            ],
          }),
        ],
      }),
      C.length > 0 &&
        e.jsxs("section", {
          className: "msec",
          children: [
            e.jsx("div", {
              className: "msec-head",
              children: e.jsx("h2", { children: l("m.tr.history") }),
            }),
            C.map((g) =>
              e.jsx(
                Ue,
                {
                  icon: "ok",
                  title: m(p.name),
                  meta: `${l("today")} · ${c.time(g.at)}`,
                  end: e.jsxs("span", {
                    className: "muted tnum",
                    children: [c.num(0), " ", l("ptsWord")],
                  }),
                },
                g.id,
              ),
            ),
          ],
        }),
    ],
  });
}
function Vy() {
  const { s, act: i, t: a, f: l, L: c, notify: m } = me(),
    h = ze(s, be),
    [p, f] = V.useState("challenge"),
    [y, j] = V.useState(null),
    C = Xo(s),
    v = s.challenge.target,
    g = s.ledger.some((k) => k.key === "weekly-43"),
    N = Qf(s);
  return e.jsxs("div", {
    className: "mscreen community",
    children: [
      e.jsx("div", {
        className: "mpad",
        children: e.jsx(nt, {
          size: "block",
          value: p,
          onChange: f,
          label: a("m.nav.community"),
          options: [
            { value: "challenge", label: a("m.cm.challenges") },
            { value: "partners", label: a("m.cm.partners") },
          ],
        }),
      }),
      p === "challenge"
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsxs("section", {
                className: "challenge",
                children: [
                  e.jsx(ge, {
                    tone: "lime",
                    icon: "trophy",
                    children: a("m.cm.thisWeek"),
                  }),
                  e.jsx("h2", { children: a("m.cm.chTitle", { n: v }) }),
                  e.jsx("p", { children: a("m.cm.chText") }),
                  e.jsx("div", {
                    className: "visits",
                    "aria-label": a("of", { a: C, b: v }),
                    children: Array.from({ length: v }).map((k, b) =>
                      e.jsx(
                        "span",
                        {
                          className: b < C ? "on" : "",
                          children:
                            b < C
                              ? e.jsx(M, { name: "check", size: 16 })
                              : l.num(b + 1),
                        },
                        b,
                      ),
                    ),
                  }),
                  e.jsx("p", {
                    className: "challenge-foot",
                    children: g
                      ? a("m.cm.earned")
                      : a("m.cm.toGo", { n: Math.max(0, v - C) }),
                  }),
                ],
              }),
              e.jsxs("section", {
                className: "msec",
                children: [
                  e.jsx("div", {
                    className: "msec-head",
                    children: e.jsx("h2", { children: a("m.cm.board") }),
                  }),
                  [
                    { n: { en: "Dina Farouk", ar: "دينا فاروق" }, v: 5 },
                    { n: h.name, v: C, me: !0 },
                    { n: { en: "Reem Abdallah", ar: "ريم عبدالله" }, v: 4 },
                    { n: { en: "Mariam Tarek", ar: "مريم طارق" }, v: 2 },
                  ]
                    .sort((k, b) => b.v - k.v)
                    .map((k, b) =>
                      e.jsx(
                        Ue,
                        {
                          lead: e.jsx("span", {
                            className: "rank tnum",
                            children: l.num(b + 1),
                          }),
                          title: `${c(k.n)}${k.me ? ` · ${a("m.cm.you")}` : ""}`,
                          meta: a("m.cm.visits", { n: k.v }),
                          className: k.me ? "is-me" : "",
                        },
                        b,
                      ),
                    ),
                  e.jsxs("p", {
                    className: "policy",
                    children: [
                      e.jsx(M, { name: "heart", size: 15 }),
                      a("m.cm.safe"),
                    ],
                  }),
                ],
              }),
            ],
          })
        : s.settings.partnerMatching
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsxs("section", {
                  className: "mcard pad-x",
                  children: [
                    e.jsx(es, {
                      label: a("m.cm.optIn"),
                      description: a("m.cm.optInHint"),
                      checked: s.consent.matching,
                      onChange: (k) => i(js, { matching: k }),
                    }),
                    e.jsx(es, {
                      label: a("m.cm.same"),
                      description: a("m.cm.sameHint"),
                      checked: s.consent.sameGender,
                      disabled: !s.consent.matching,
                      onChange: (k) => i(js, { sameGender: k }),
                    }),
                  ],
                }),
                s.consent.matching
                  ? e.jsxs("section", {
                      className: "msec",
                      children: [
                        e.jsx("p", {
                          className: "muted msec-lead",
                          children: a("m.cm.minors"),
                        }),
                        N.slice(0, 5).map((k) => {
                          const b = s.invites[k.id];
                          return e.jsx(
                            Ue,
                            {
                              lead: e.jsx(Ke, {
                                name: c(k.name),
                                tone: k.gender === "F" ? "ladies" : "frost",
                              }),
                              title: c(k.name),
                              meta: a("m.cm.match", { n: k.age }),
                              end: e.jsxs(e.Fragment, {
                                children: [
                                  b === "accepted"
                                    ? e.jsx(ge, {
                                        tone: "ok",
                                        children: a("m.cm.connected"),
                                      })
                                    : b === "pending"
                                      ? e.jsx(Z, {
                                          size: "sm",
                                          variant: "ghost",
                                          onClick: () => i(Kf, k.id),
                                          children: a("m.cm.simAccept"),
                                        })
                                      : e.jsx(Z, {
                                          size: "sm",
                                          variant: "secondary",
                                          onClick: () => {
                                            (i(Yf, k.id),
                                              m(
                                                a("m.cm.invited", {
                                                  name: c(k.name),
                                                }),
                                              ));
                                          },
                                          children: a("m.cm.invite"),
                                        }),
                                  e.jsx("button", {
                                    type: "button",
                                    className: "icon-btn",
                                    "aria-label": a("m.cm.safety"),
                                    onClick: () => j(k),
                                    children: e.jsx(M, {
                                      name: "flag",
                                      size: 16,
                                    }),
                                  }),
                                ],
                              }),
                            },
                            k.id,
                          );
                        }),
                      ],
                    })
                  : e.jsx(Ze, {
                      icon: "users",
                      title: a("m.cm.hiddenTitle"),
                      children: a("m.cm.hiddenText"),
                    }),
              ],
            })
          : e.jsx(Ze, {
              icon: "ban",
              title: a("m.cm.offTitle"),
              children: a("m.cm.offText"),
            }),
      y &&
        e.jsx(et, {
          title: a("m.cm.safety"),
          onClose: () => j(null),
          footer: e.jsxs(e.Fragment, {
            children: [
              e.jsx(Z, {
                variant: "ghost",
                onClick: () => {
                  (m(a("m.cm.reported")), j(null));
                },
                children: a("m.cm.report"),
              }),
              e.jsx(Z, {
                variant: "danger",
                icon: "ban",
                onClick: () => {
                  (i(Zf, y.id), m(a("m.cm.blockedToast")), j(null));
                },
                children: a("m.cm.block"),
              }),
            ],
          }),
          children: e.jsx("p", {
            children: a("m.cm.safetyText", { name: c(y.name) }),
          }),
        }),
    ],
  });
}
function Gy() {
  const { s, act: i, t: a, f: l, L: c, notify: m } = me(),
    h = ze(s, be),
    p = de(dt, h.trainerId),
    f = en(s, be, h.trainerId),
    y = f && de(Jt, f.packageId),
    j = s.ptSessions
      .filter((w) => w.memberId === be)
      .sort((w, S) => w.day - S.day || Ve(w.time) - Ve(S.time)),
    C = s.messages.filter((w) => w.thread === be),
    v = s.documents.filter((w) => w.memberId === be),
    [g, N] = V.useState(""),
    [k, b] = V.useState(!1);
  return e.jsxs("div", {
    className: "mscreen coach",
    children: [
      e.jsxs("section", {
        className: "coach-head",
        children: [
          e.jsx(Ke, { name: c(p.name), size: "lg", tone: "ladies" }),
          e.jsxs("div", {
            children: [
              e.jsx("strong", { children: c(p.name) }),
              e.jsx("small", { children: c(p.specialty) }),
            ],
          }),
        ],
      }),
      e.jsx("section", {
        className: "mcard pkg",
        children: f
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsxs("div", {
                  className: "pkg-top",
                  children: [
                    e.jsxs("span", {
                      children: [
                        e.jsx("small", {
                          children: a("m.co.package", { n: y.sessions }),
                        }),
                        e.jsx("strong", {
                          className: "tnum",
                          children: a("m.co.left", { n: f.remaining }),
                        }),
                      ],
                    }),
                    e.jsx(ge, {
                      tone: "forest",
                      children: a("m.co.expires", { date: l.date(f.expires) }),
                    }),
                  ],
                }),
                e.jsx("div", {
                  className: "pkg-dots",
                  "aria-hidden": "true",
                  children: Array.from({ length: y.sessions }).map((w, S) =>
                    e.jsx(
                      "i",
                      { className: S < y.sessions - f.remaining ? "used" : "" },
                      S,
                    ),
                  ),
                }),
                e.jsx("p", {
                  className: "muted small",
                  children: a("m.co.deduct"),
                }),
              ],
            })
          : e.jsx(Ze, {
              icon: "package",
              title: a("m.co.noPkg"),
              action: e.jsx(Z, {
                onClick: () => b(!0),
                children: a("m.co.buy"),
              }),
            }),
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { children: a("m.co.sessions") }),
              f &&
                e.jsx("button", {
                  type: "button",
                  className: "link",
                  onClick: () => b(!0),
                  children: a("m.co.buyMore"),
                }),
            ],
          }),
          j.map((w) =>
            e.jsx(
              Ue,
              {
                icon: "calendarClock",
                title: `${w.day === 0 ? a("today") : l.weekday(Ye(xe, w.day), "long")} · ${l.clock(w.time)}`,
                meta: c(p.name),
                end: e.jsx(_e, { value: w.status }),
              },
              w.id,
            ),
          ),
        ],
      }),
      v.length > 0 &&
        e.jsxs("section", {
          className: "msec",
          children: [
            e.jsx("div", {
              className: "msec-head",
              children: e.jsx("h2", { children: a("m.co.files") }),
            }),
            v.map((w) =>
              e.jsx(
                Ue,
                { icon: "file", title: c(w.title), meta: a("m.co.general") },
                w.id,
              ),
            ),
          ],
        }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: a("m.co.chat") }),
          }),
          e.jsx("div", {
            className: "chat",
            children: C.map((w) =>
              e.jsxs(
                "p",
                {
                  className: `bubble ${w.from === be ? "mine" : ""}`,
                  children: [
                    c(w.text),
                    e.jsx("time", { children: l.clock(w.at) }),
                  ],
                },
                w.id,
              ),
            ),
          }),
          e.jsxs("form", {
            className: "composer",
            onSubmit: (w) => {
              (w.preventDefault(), i(tc, be, be, g), N(""));
            },
            children: [
              e.jsx("input", {
                className: "input",
                value: g,
                onChange: (w) => N(w.target.value),
                placeholder: a("m.co.write"),
                "aria-label": a("m.co.write"),
              }),
              e.jsx(Z, {
                type: "submit",
                icon: "send",
                disabled: !g.trim(),
                "aria-label": a("m.co.send"),
              }),
            ],
          }),
        ],
      }),
      k &&
        e.jsxs(et, {
          title: a("m.co.buy"),
          onClose: () => b(!1),
          children: [
            e.jsx("div", {
              className: "choice-list",
              children: Jt.map((w) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "choice",
                    onClick: () => {
                      (i(Eu, be, h.trainerId, w.id, "card", "app"),
                        m(a("m.co.bought")),
                        b(!1));
                    },
                    children: [
                      e.jsxs("span", {
                        children: [
                          e.jsx("strong", {
                            children: a("m.co.package", { n: w.sessions }),
                          }),
                          e.jsxs("small", {
                            children: [
                              a("m.co.valid", { n: w.validityDays }),
                              " · ",
                              a("m.co.per", {
                                price: l.money(
                                  Math.round(w.price / w.sessions),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsx("b", {
                        className: "tnum",
                        children: l.money(w.price),
                      }),
                    ],
                  },
                  w.id,
                ),
              ),
            }),
            e.jsxs("p", {
              className: "sheet-note",
              children: [
                e.jsx(M, { name: "cash", size: 16 }),
                a("m.co.cashToo"),
              ],
            }),
          ],
        }),
    ],
  });
}
function Qy() {
  const { s, act: i, t: a, notify: l, L: c } = me(),
    m = de(dt, ze(s, be).trainerId),
    [h, p] = V.useState(!1);
  return s.consent.wearable
    ? e.jsxs("div", {
        className: "mscreen health",
        children: [
          e.jsxs("section", {
            className: "health-stats",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("small", { children: a("m.h.steps") }),
                  e.jsx("b", { className: "tnum", children: "8,420" }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("small", { children: a("m.h.active") }),
                  e.jsx("b", { className: "tnum", children: "52" }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("small", { children: a("m.h.rhr") }),
                  e.jsx("b", { className: "tnum", children: "64" }),
                ],
              }),
            ],
          }),
          e.jsx("p", {
            className: "muted mpad small",
            children: a("m.h.sample", {
              src: a(`m.h.${s.consent.wearableSource}`),
            }),
          }),
          e.jsx("section", {
            className: "mcard pad-x",
            children: e.jsx(es, {
              label: a("m.h.share", { name: c(m.name) }),
              description: a("m.h.shareHint"),
              checked: s.consent.shareWithTrainer,
              onChange: (f) => i(js, { shareWithTrainer: f }),
            }),
          }),
          e.jsx("div", {
            className: "mpad",
            children: e.jsx(Z, {
              variant: "danger-ghost",
              block: !0,
              icon: "x",
              onClick: () => {
                (i(js, { wearable: !1 }), l(a("m.h.revoked")));
              },
              children: a("m.h.revoke"),
            }),
          }),
        ],
      })
    : e.jsxs("div", {
        className: "mscreen health",
        children: [
          e.jsxs("section", {
            className: "consent",
            children: [
              e.jsx("span", {
                className: "consent-ico",
                children: e.jsx(M, { name: "heart", size: 28 }),
              }),
              e.jsx("h2", { children: a("m.h.title") }),
              e.jsx("p", { children: a("m.h.lead") }),
              e.jsxs("ul", {
                children: [
                  e.jsxs("li", {
                    children: [
                      e.jsx(M, { name: "check", size: 16 }),
                      a("m.h.c1"),
                    ],
                  }),
                  e.jsxs("li", {
                    children: [
                      e.jsx(M, { name: "check", size: 16 }),
                      a("m.h.c2"),
                    ],
                  }),
                  e.jsxs("li", {
                    children: [
                      e.jsx(M, { name: "check", size: 16 }),
                      a("m.h.c3"),
                    ],
                  }),
                ],
              }),
              e.jsx(Z, {
                block: !0,
                size: "lg",
                onClick: () => p(!0),
                children: a("m.h.connect"),
              }),
              e.jsx("p", { className: "muted small", children: a("m.h.law") }),
            ],
          }),
          h &&
            e.jsxs(et, {
              title: a("m.h.connect"),
              onClose: () => p(!1),
              children: [
                e.jsx("div", {
                  className: "choice-list",
                  children: ["healthkit", "healthconnect"].map((f) =>
                    e.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "choice",
                        onClick: () => {
                          (i(js, { wearable: !0, wearableSource: f }),
                            p(!1),
                            l(a("m.h.connected")));
                        },
                        children: [
                          e.jsxs("span", {
                            children: [
                              e.jsx("strong", { children: a(`m.h.${f}`) }),
                              e.jsx("small", { children: a(`m.h.${f}.os`) }),
                            ],
                          }),
                          e.jsx(M, { name: "chevron", size: 16 }),
                        ],
                      },
                      f,
                    ),
                  ),
                }),
                e.jsxs("p", {
                  className: "sheet-note",
                  children: [
                    e.jsx(M, { name: "info", size: 16 }),
                    a("m.h.later"),
                  ],
                }),
              ],
            }),
        ],
      });
}
const Do = [
    { id: "home", icon: "home", label: "m.nav.home", tab: !0 },
    { id: "book", icon: "calendar", label: "m.nav.book", tab: !0 },
    { id: "pass", icon: "qr", label: "m.nav.pass", tab: !0 },
    { id: "rewards", icon: "gift", label: "m.nav.rewards", tab: !0 },
    { id: "me", icon: "users", label: "m.nav.me", tab: !0 },
    { id: "explore", icon: "map", label: "m.nav.explore", parent: "home" },
    {
      id: "training",
      icon: "dumbbell",
      label: "m.nav.training",
      parent: "home",
    },
    {
      id: "community",
      icon: "trophy",
      label: "m.nav.community",
      parent: "home",
    },
    { id: "coach", icon: "chat", label: "m.nav.coach", parent: "me" },
    { id: "health", icon: "watch", label: "m.nav.health", parent: "me" },
  ],
  Yy = {
    home: {
      phase: "pilot",
      ref: "§3 · §6",
      lead: "m.p.home.lead",
      points: ["m.p.home.1", "m.p.home.2", "m.p.home.3"],
      tries: [
        { label: "m.try.scan", icon: "scan", go: ["reception", "desk", "m1"] },
        { label: "m.try.advance", icon: "timer", run: (s) => ts(s, 30) },
      ],
    },
    pass: {
      phase: "pilot",
      ref: "§2 Connectivity · Feature 7",
      lead: "m.p.pass.lead",
      points: ["m.p.pass.1", "m.p.pass.2", "m.p.pass.3"],
      tries: [
        {
          label: "m.try.scanHere",
          icon: "scan",
          run: (s) => Zs(s, be, { method: "qr", by: "turnstile" }),
          disabled: (s) => !!qt(s, be),
        },
        { label: "m.try.offline", icon: "wifiOff", go: ["reception", "desk"] },
      ],
    },
    book: {
      phase: "pilot",
      ref: "Feature 1 · §2",
      lead: "m.p.book.lead",
      points: ["m.p.book.1", "m.p.book.2", "m.p.book.3"],
      tries: [
        {
          label: "m.try.bookClass",
          icon: "calendar",
          run: (s) => Ll(s, "c3"),
          disabled: (s) => !!Xa(s, "c3"),
        },
        { label: "m.try.attend", icon: "timer", run: (s) => ts(s, 60) },
      ],
    },
    rewards: {
      phase: "3",
      ref: "§8 · §9",
      lead: "m.p.rewards.lead",
      points: ["m.p.rewards.1", "m.p.rewards.2", "m.p.rewards.3"],
      tries: [
        {
          label: "m.try.liability",
          icon: "chart",
          go: ["admin", "engagement"],
        },
      ],
    },
    me: {
      phase: "pilot",
      ref: "§2 Freeze · Cash · Law 151",
      lead: "m.p.me.lead",
      points: ["m.p.me.1", "m.p.me.2", "m.p.me.3"],
      tries: [
        {
          label: "m.try.deskFreeze",
          icon: "snow",
          go: ["reception", "members", "m1"],
        },
      ],
    },
    explore: {
      phase: "2",
      ref: "§5 Equipment onboarding",
      lead: "m.p.explore.lead",
      points: ["m.p.explore.1", "m.p.explore.2", "m.p.explore.3"],
      tries: [
        { label: "m.try.library", icon: "library", go: ["admin", "equipment"] },
      ],
    },
    training: {
      phase: "2",
      ref: "§7 Trainer workflow",
      lead: "m.p.training.lead",
      points: ["m.p.training.1", "m.p.training.2"],
      tries: [
        { label: "m.try.builder", icon: "edit", go: ["trainer", "programs"] },
      ],
    },
    community: {
      phase: "3",
      ref: "Feature 5 · 6",
      lead: "m.p.community.lead",
      points: ["m.p.community.1", "m.p.community.2", "m.p.community.3"],
      tries: [
        {
          label: "m.try.matchingOff",
          icon: "settings",
          go: ["admin", "settings"],
        },
      ],
    },
    coach: {
      phase: "2",
      ref: "§7 Packages",
      lead: "m.p.coach.lead",
      points: ["m.p.coach.1", "m.p.coach.2"],
      tries: [
        {
          label: "m.try.trainerConfirm",
          icon: "check",
          go: ["trainer", "today"],
        },
      ],
    },
    health: {
      phase: "3",
      ref: "Feature 4 · Law 151",
      lead: "m.p.health.lead",
      points: ["m.p.health.1", "m.p.health.2"],
    },
  };
function Ky({ page: s }) {
  const { go: i, t: a } = me(),
    l = Do.find((p) => p.id === s),
    m =
      {
        home: OrbitHome,
        book: ex,
        pass: Xy,
        rewards: qy,
        me: _y,
        explore: Wy,
        training: Uy,
        community: Vy,
        coach: Gy,
        health: Qy,
      }[s] || du,
    h = l != null && l.tab ? s : l == null ? void 0 : l.parent;
  return (
    V.useEffect(() => {
      var p;
      (p = document.querySelector(".mapp-scroll")) == null ||
        p.scrollTo({ top: 0 });
    }, [s]),
    e.jsxs("div", {
      className: `mapp ${s === "pass" ? "mapp-pass" : ""}`,
      children: [
        e.jsxs("div", {
          className: "mapp-scroll",
          children: [
            (l == null ? void 0 : l.parent) &&
              e.jsxs("div", {
                className: "mbar",
                children: [
                  e.jsx(yn, {
                    icon: "back",
                    label: a("back"),
                    onClick: () => i("member", l.parent),
                  }),
                  e.jsx("h1", { children: a(l.label) }),
                ],
              }),
            e.jsx(m, {}),
          ],
        }),
        e.jsx("nav", {
          className: "tabbar",
          "aria-label": a("m.nav.label"),
          children: Do.filter((p) => p.tab).map((p) =>
            e.jsxs(
              "button",
              {
                type: "button",
                className: `${h === p.id ? "on" : ""} ${p.id === "pass" ? "tab-pass" : ""}`,
                "aria-current": h === p.id ? "page" : void 0,
                onClick: () => i("member", p.id),
                children: [
                  e.jsx("span", {
                    className: "tab-ico",
                    children: e.jsx(M, {
                      name: p.icon,
                      size: p.id === "pass" ? 24 : 21,
                    }),
                  }),
                  e.jsx("span", {
                    className: "tab-label",
                    children: a(p.label),
                  }),
                ],
              },
              p.id,
            ),
          ),
        }),
      ],
    })
  );
}
function du() {
  const { s, go: i, t: a, f: l, L: c } = me(),
    m = ze(s, be),
    h = lt(s, m),
    p = Tl(s),
    f = qt(s, be),
    y = Lf(s),
    j = If(s),
    C = Math.floor(s.clock / 60),
    v = s.sessions
      .filter((_) => _.day === 0 && gn(s, _) === "upcoming")
      .slice(0, 4),
    g = s.bookings
      .filter(
        (_) => _.memberId === be && ["booked", "waitlisted"].includes(_.status),
      )
      .map((_) => ({ b: _, sess: de(s.sessions, _.sessionId) }))
      .sort((_, L) => bt(_.sess) - bt(L.sess)),
    N = s.ptSessions.find(
      (_) => _.memberId === be && _.status === "scheduled" && _.day === 0,
    ),
    k = en(s, be),
    b = s.programs.find((_) => _.memberId === be),
    w = Pl(s),
    S = Xo(s),
    ae =
      s.clock < 720
        ? "m.home.morning"
        : s.clock < 1020
          ? "m.home.afternoon"
          : "m.home.evening";
  return e.jsxs("div", {
    className: "mscreen home",
    children: [
      e.jsxs("header", {
        className: "home-head",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                children: a(ae, { name: c(m.name).split(" ")[0] }),
              }),
              e.jsxs("p", {
                className: "home-gym",
                children: [
                  c(s.gym.name),
                  " · ",
                  c(s.gym.branch).split(" · ")[0],
                ],
              }),
            ],
          }),
          e.jsx("button", {
            type: "button",
            className: "home-avatar",
            onClick: () => i("member", "me"),
            "aria-label": a("m.nav.me"),
            children: e.jsx(Ke, { name: c(m.name), tone: "lime" }),
          }),
        ],
      }),
      e.jsx(Zy, {}),
      e.jsxs("section", {
        className: `crowd ${f ? "is-in" : ""}`,
        "aria-labelledby": "crowd-h",
        children: [
          e.jsxs("div", {
            className: "crowd-top",
            children: [
              e.jsx("h2", { id: "crowd-h", children: a("m.home.crowdTitle") }),
              e.jsx(ge, {
                tone: "dark",
                icon: "info",
                children: a("estimated"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "crowd-figure",
            children: [
              e.jsx("span", {
                className: "crowd-num tnum",
                children: l.num(p.count),
              }),
              e.jsxs("span", {
                className: "crowd-level",
                children: [
                  e.jsx("b", {
                    className: `lvl lvl-${p.level}`,
                    children: a(`crowd.${p.level}`),
                  }),
                  e.jsx("small", {
                    children: a("m.home.crowdOf", { cap: p.capacity }),
                  }),
                ],
              }),
            ],
          }),
          e.jsx(_u, {
            data: Ml(),
            nowHour: C,
            highlight: j == null ? void 0 : j.h,
            f: l,
            height: 54,
          }),
          e.jsxs("div", {
            className: "crowd-axis tnum",
            "aria-hidden": "true",
            children: [
              e.jsx("span", { children: l.time(360) }),
              e.jsx("span", { children: l.time(720) }),
              e.jsx("span", { children: l.time(1080) }),
              e.jsx("span", { children: l.time(1380) }),
            ],
          }),
          j &&
            e.jsxs("p", {
              className: "crowd-best",
              children: [
                e.jsx("i", {}),
                a("m.home.best", { time: l.time(j.h * 60) }),
              ],
            }),
          f
            ? e.jsxs("div", {
                className: "crowd-in",
                children: [
                  e.jsx(M, { name: "ok", size: 20 }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("strong", {
                        children: a("m.home.inSince", { time: l.time(f.inAt) }),
                      }),
                      e.jsxs("small", {
                        children: [
                          y
                            ? y.minutesLeft > 0
                              ? a("m.home.ptsIn", { n: y.minutesLeft })
                              : a("m.home.ptsSoon")
                            : a("m.home.ptsEarned"),
                          " · ",
                          a("m.home.autoOut", {
                            time: l.time(f.inAt + s.settings.avgVisitMin),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : e.jsx(Z, {
                variant: "accent",
                icon: "qr",
                block: !0,
                size: "lg",
                onClick: () => i("member", "pass"),
                disabled: h === "expired" || h === "frozen",
                children: a("m.home.showPass"),
              }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { children: a("m.home.next") }),
              e.jsx("button", {
                type: "button",
                className: "link",
                onClick: () => i("member", "book"),
                children: a("m.home.allBookings"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "next-list",
            children: [
              N &&
                e.jsxs("button", {
                  type: "button",
                  className: "next-item pt",
                  onClick: () => i("member", "coach"),
                  children: [
                    e.jsx("span", {
                      className: "next-time tnum",
                      children: l.clock(N.time),
                    }),
                    e.jsxs("span", {
                      className: "next-body",
                      children: [
                        e.jsx("strong", {
                          children: a("m.home.ptWith", {
                            name: c(de(dt, N.trainerId).name),
                          }),
                        }),
                        e.jsx("small", {
                          children: k
                            ? a("m.home.pkgLeft", { n: k.remaining })
                            : "",
                        }),
                      ],
                    }),
                    e.jsx(Ge, { phase: "2" }),
                  ],
                }),
              g.slice(0, 2).map(({ b: _, sess: L }) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "next-item",
                    onClick: () => i("member", "book"),
                    children: [
                      e.jsxs("span", {
                        className: "next-time tnum",
                        children: [
                          l.clock(L.time),
                          e.jsx("small", {
                            children:
                              L.day === 0 ? a("today") : l.weekday(ea(L)),
                          }),
                        ],
                      }),
                      e.jsxs("span", {
                        className: "next-body",
                        children: [
                          e.jsx("strong", { children: c(L.title) }),
                          e.jsxs("small", {
                            children: [
                              L.womenOnly ? `${a("ladiesOnly")} · ` : "",
                              L.trainerId
                                ? c(de(dt, L.trainerId).name)
                                : a(`cat.${L.cat}`),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(_e, { value: _.status }),
                    ],
                  },
                  _.id,
                ),
              ),
              !N &&
                !g.length &&
                e.jsx("p", {
                  className: "muted small-pad",
                  children: a("m.home.nothingNext"),
                }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: a("m.home.tonight") }),
          }),
          e.jsxs("div", {
            className: "hscroll",
            children: [
              v.map((_) => {
                const L = Pn(s, _),
                  G = Xa(s, _.id);
                return e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: `tonight cat-${_.cat}`,
                    onClick: () => i("member", "book"),
                    children: [
                      e.jsx("span", {
                        className: "tonight-time tnum",
                        children: l.clock(_.time),
                      }),
                      e.jsx("strong", { children: c(_.title) }),
                      e.jsx("small", {
                        children: G
                          ? a(`status.${G.status}`)
                          : L
                            ? a("m.book.spots", { n: L })
                            : a("m.book.full"),
                      }),
                    ],
                  },
                  _.id,
                );
              }),
              !v.length &&
                e.jsx("p", {
                  className: "muted small-pad",
                  children: a("m.home.noneTonight"),
                }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec later",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: a("m.home.more") }),
          }),
          e.jsxs("div", {
            className: "later-list",
            children: [
              e.jsx(Ue, {
                icon: "dumbbell",
                title: b ? c(b.name) : a("m.nav.training"),
                meta: a("m.home.programBy", {
                  name: c(
                    de(dt, (b == null ? void 0 : b.trainerId) || "t2").name,
                  ),
                }),
                end: e.jsx(Ge, { phase: "2" }),
                onClick: () => i("member", "training"),
              }),
              e.jsx(Ue, {
                icon: "map",
                title: a("m.home.floorTitle"),
                meta: a("m.home.floorMeta", {
                  n: s.equipment.filter((_) => _.status === "active").length,
                }),
                end: e.jsx(Ge, { phase: "2" }),
                onClick: () => i("member", "explore"),
              }),
              e.jsx(Ue, {
                icon: "trophy",
                iconTone: "lime",
                title: a("m.home.challenge"),
                meta: e.jsxs("span", {
                  className: "challenge-meta",
                  children: [
                    e.jsx(tr, {
                      value: Math.min(S, s.challenge.target),
                      max: s.challenge.target,
                      tone: "lime",
                      label: a("m.home.challenge"),
                    }),
                    e.jsx("span", {
                      className: "tnum",
                      children: a("of", {
                        a: l.num(Math.min(S, s.challenge.target)),
                        b: l.num(s.challenge.target),
                      }),
                    }),
                  ],
                }),
                end: e.jsx(Ge, { phase: "3" }),
                onClick: () => i("member", "community"),
              }),
              e.jsx(Ue, {
                icon: "gift",
                title: a("m.home.points", { n: l.num(w) }),
                meta: a("m.home.pointsMeta"),
                end: e.jsx(Ge, { phase: "3" }),
                onClick: () => i("member", "rewards"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Zy() {
  const { s, go: i, t: a, f: l, L: c } = me(),
    m = ze(s, be),
    h = lt(s, m),
    p = En(m),
    f = Mn(m);
  return e.jsxs("button", {
    type: "button",
    className: `mstrip mstrip-${h}`,
    onClick: () => i("member", "me"),
    children: [
      e.jsx("span", { className: "mstrip-dot", "aria-hidden": "true" }),
      e.jsxs("span", {
        className: "mstrip-body",
        children: [
          e.jsx("strong", { children: a(`m.strip.${h}`, { plan: c(p.name) }) }),
          e.jsx("small", {
            children:
              h === "frozen"
                ? a("m.strip.frozenUntil", {
                    date: l.date(Ye(m.freeze.start, m.freeze.days)),
                  })
                : h === "expired"
                  ? a("m.strip.renewNow")
                  : a("m.strip.until", { date: l.date(m.end), n: f }),
          }),
        ],
      }),
      e.jsx(M, { name: "chevron", size: 16 }),
    ],
  });
}
function Xy() {
  const { s, act: i, go: a, t: l, f: c, L: m, notify: h } = me(),
    p = ze(s, be),
    f = lt(s, p),
    y = qt(s, be),
    [j, C] = V.useState(30),
    [v, g] = V.useState(0),
    [N, k] = V.useState("qr");
  V.useEffect(() => {
    const S = setInterval(() => {
      C((ae) => (ae <= 1 ? (g((_) => _ + 1), 30) : ae - 1));
    }, 1e3);
    return () => clearInterval(S);
  }, []);
  const b = f === "expired" || f === "frozen",
    w = `FORMA|${p.code}|${s.clock}|${v}|sig:${(p.code.charCodeAt(5) * 7919 + v * 104729).toString(36)}`;
  return e.jsxs("div", {
    className: "mscreen pass",
    children: [
      e.jsxs("header", {
        className: "pass-head",
        children: [
          e.jsx("h1", { children: l("m.pass.title") }),
          e.jsxs("p", {
            children: [m(s.gym.name), " · ", m(s.gym.branch).split(" · ")[0]],
          }),
        ],
      }),
      e.jsxs("section", {
        className: `pass-card ${b ? "is-blocked" : ""} ${y ? "is-in" : ""}`,
        children: [
          e.jsxs("div", {
            className: "pass-id",
            children: [
              e.jsx(Ke, { name: m(p.name), tone: "lime", size: "lg" }),
              e.jsxs("div", {
                children: [
                  e.jsx("strong", { children: m(p.name) }),
                  e.jsx("span", {
                    className: "tnum",
                    children: c.digits(p.code),
                  }),
                ],
              }),
              e.jsx(_e, { value: f === "expiring" ? "active" : f }),
            ],
          }),
          y
            ? e.jsxs("div", {
                className: "pass-state in",
                children: [
                  e.jsx("span", {
                    className: "pass-check",
                    children: e.jsx(M, { name: "check", size: 40 }),
                  }),
                  e.jsx("strong", { children: l("m.pass.inTitle") }),
                  e.jsx("p", {
                    children: l("m.pass.inText", {
                      time: c.time(y.inAt),
                      out: c.time(y.inAt + s.settings.avgVisitMin),
                    }),
                  }),
                  e.jsx(Z, {
                    variant: "secondary",
                    icon: "logout",
                    onClick: () => {
                      (i(Zo, be), h(l("m.pass.outToast")));
                    },
                    children: l("m.pass.checkout"),
                  }),
                ],
              })
            : b
              ? e.jsxs("div", {
                  className: "pass-state blocked",
                  children: [
                    e.jsx("span", {
                      className: "pass-check bad",
                      children: e.jsx(M, {
                        name: f === "frozen" ? "snow" : "lock",
                        size: 36,
                      }),
                    }),
                    e.jsx("strong", { children: l(`m.pass.blocked.${f}`) }),
                    e.jsx("p", { children: l(`m.pass.blockedText.${f}`) }),
                    e.jsx(Z, {
                      variant: "primary",
                      onClick: () => a("member", "me"),
                      children: l(
                        f === "frozen" ? "m.pass.manageFreeze" : "m.pass.renew",
                      ),
                    }),
                  ],
                })
              : e.jsxs(e.Fragment, {
                  children: [
                    e.jsx(nt, {
                      size: "block",
                      value: N,
                      onChange: k,
                      label: l("m.pass.title"),
                      options: [
                        { value: "qr", label: l("method.qr"), icon: "qr" },
                        { value: "nfc", label: l("method.nfc"), icon: "nfc" },
                      ],
                    }),
                    N === "qr"
                      ? e.jsxs("div", {
                          className: "pass-qr",
                          children: [
                            e.jsx(qu, { value: w, size: 208 }),
                            e.jsxs("div", {
                              className: "pass-refresh",
                              "aria-live": "off",
                              children: [
                                e.jsxs("svg", {
                                  viewBox: "0 0 36 36",
                                  "aria-hidden": "true",
                                  children: [
                                    e.jsx("circle", {
                                      cx: "18",
                                      cy: "18",
                                      r: "15",
                                    }),
                                    e.jsx("circle", {
                                      cx: "18",
                                      cy: "18",
                                      r: "15",
                                      className: "arc",
                                      style: {
                                        strokeDashoffset: `${94.2 * (1 - j / 30)}`,
                                      },
                                    }),
                                  ],
                                }),
                                e.jsx("span", {
                                  className: "tnum",
                                  children: l("m.pass.refresh", { n: j }),
                                }),
                              ],
                            }),
                          ],
                        })
                      : e.jsxs("div", {
                          className: "pass-nfc",
                          children: [
                            e.jsxs("span", {
                              className: "nfc-waves",
                              "aria-hidden": "true",
                              children: [
                                e.jsx("i", {}),
                                e.jsx("i", {}),
                                e.jsx("i", {}),
                                e.jsx(M, { name: "phone", size: 34 }),
                              ],
                            }),
                            e.jsx("strong", { children: l("m.pass.nfcTitle") }),
                            e.jsx("p", { children: l("m.pass.nfcText") }),
                          ],
                        }),
                  ],
                }),
        ],
      }),
      e.jsxs("ul", {
        className: "pass-facts",
        children: [
          e.jsxs("li", {
            children: [
              e.jsx(M, { name: "wifiOff", size: 18 }),
              e.jsx("span", { children: l("m.pass.fact1") }),
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx(M, { name: "shield", size: 18 }),
              e.jsx("span", { children: l("m.pass.fact2") }),
            ],
          }),
          e.jsxs("li", {
            children: [
              e.jsx(M, { name: "clock", size: 18 }),
              e.jsx("span", {
                children: l("m.pass.fact3", { n: s.settings.avgVisitMin }),
              }),
            ],
          }),
        ],
      }),
      Yo(s) &&
        e.jsx("p", {
          className: "pass-ladies",
          children: e.jsx(ge, { tone: "ladies", children: l("ladiesHours") }),
        }),
    ],
  });
}
const Jy = [0, 1, 2, 3, 4, 5, 6];
function ex() {
  const { s, act: i, t: a, f: l, L: c, notify: m } = me(),
    h = ze(s, be),
    [p, f] = V.useState("discover"),
    [y, j] = V.useState(0),
    [C, v] = V.useState("all"),
    [g, N] = V.useState(null),
    k = s.bookings
      .filter((S) => S.memberId === be && S.status !== "cancelled")
      .map((S) => ({ b: S, sess: de(s.sessions, S.sessionId) }))
      .sort((S, ae) => bt(S.sess) - bt(ae.sess)),
    b = k.filter(({ b: S }) => ["booked", "waitlisted"].includes(S.status)),
    w = s.sessions
      .filter((S) => S.day === y)
      .filter(
        (S) =>
          C === "all" ||
          (C === "ladies"
            ? S.womenOnly
            : C === "facility"
              ? S.kind === "facility"
              : S.kind === "class"),
      )
      .sort((S, ae) => Ve(S.time) - Ve(ae.time));
  return e.jsxs("div", {
    className: "mscreen book",
    children: [
      e.jsxs("header", {
        className: "mhead",
        children: [
          e.jsx("h1", { children: a("m.book.title") }),
          e.jsx(nt, {
            size: "block",
            value: p,
            onChange: f,
            label: a("m.book.title"),
            options: [
              { value: "discover", label: a("m.book.discover") },
              {
                value: "mine",
                label: a("m.book.mine"),
                count: b.length || null,
              },
            ],
          }),
        ],
      }),
      p === "discover"
        ? e.jsxs(e.Fragment, {
            children: [
              e.jsx("div", {
                className: "daystrip",
                role: "tablist",
                "aria-label": a("m.book.days"),
                children: Jy.map((S) => {
                  const ae = Ye(xe, S),
                    _ = s.sessions.some((L) => L.day === S && L.womenOnly);
                  return e.jsxs(
                    "button",
                    {
                      type: "button",
                      role: "tab",
                      "aria-selected": y === S,
                      className: y === S ? "on" : "",
                      onClick: () => j(S),
                      children: [
                        e.jsx("small", {
                          children: S === 0 ? a("today") : l.weekday(ae),
                        }),
                        e.jsx("b", {
                          className: "tnum",
                          children: l.num(Number(ae.slice(8))),
                        }),
                        _ &&
                          e.jsx("i", {
                            className: "ladies-dot",
                            title: a("ladiesOnly"),
                          }),
                      ],
                    },
                    S,
                  );
                }),
              }),
              e.jsx("div", {
                className: "chips",
                role: "group",
                "aria-label": a("m.book.filter"),
                children: ["all", "class", "facility", "ladies"].map((S) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      className: C === S ? "on" : "",
                      "aria-pressed": C === S,
                      onClick: () => v(S),
                      children: a(`m.book.k.${S}`),
                    },
                    S,
                  ),
                ),
              }),
              Yo(s, 660) &&
                y === 0 &&
                C !== "ladies" &&
                e.jsxs("p", {
                  className: "book-note",
                  children: [
                    e.jsx(ge, { tone: "ladies", children: a("ladiesHours") }),
                    " ",
                    a("m.book.ladiesNote", {
                      from: l.clock(s.settings.ladiesHours.from),
                      to: l.clock(s.settings.ladiesHours.to),
                    }),
                  ],
                }),
              e.jsxs("ol", {
                className: "slots",
                children: [
                  w.map((S) => {
                    const ae = gn(s, S),
                      _ = Pn(s, S),
                      L = Xa(s, S.id),
                      G = Jo(s, S),
                      H = S.trainerId && de(dt, S.trainerId);
                    return e.jsxs(
                      "li",
                      {
                        className: `slot ${ae !== "upcoming" ? "is-past" : ""} ${S.womenOnly ? "is-ladies" : ""}`,
                        children: [
                          e.jsxs("button", {
                            type: "button",
                            className: "slot-main",
                            onClick: () => N(S),
                            children: [
                              e.jsxs("span", {
                                className: "slot-time tnum",
                                children: [
                                  l.clock(S.time),
                                  e.jsx("small", {
                                    children: a("min", { n: S.dur }),
                                  }),
                                ],
                              }),
                              e.jsxs("span", {
                                className: "slot-body",
                                children: [
                                  e.jsx("strong", { children: c(S.title) }),
                                  e.jsxs("small", {
                                    children: [
                                      H ? c(H.name) : a(`cat.${S.cat}`),
                                      S.price ? ` · ${l.money(S.price)}` : "",
                                    ],
                                  }),
                                  e.jsxs("span", {
                                    className: "slot-tags",
                                    children: [
                                      S.womenOnly &&
                                        e.jsx(ge, {
                                          tone: "ladies",
                                          children: a("ladiesOnly"),
                                        }),
                                      ae === "upcoming" &&
                                        !L &&
                                        e.jsx("span", {
                                          className: `spots ${_ === 0 ? "full" : _ <= 3 ? "low" : ""}`,
                                          children: _
                                            ? a("m.book.spots", { n: _ })
                                            : a("m.book.fullWait"),
                                        }),
                                      ae === "live" &&
                                        e.jsx(ge, {
                                          tone: "lime",
                                          children: a("m.book.live"),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("span", {
                            className: "slot-act",
                            children: L
                              ? e.jsx(_e, { value: L.status })
                              : ae !== "upcoming"
                                ? e.jsx("span", {
                                    className: "muted small",
                                    children: a("m.book.ended"),
                                  })
                                : G.ok
                                  ? e.jsx(Z, {
                                      size: "sm",
                                      variant: G.waitlist
                                        ? "secondary"
                                        : "primary",
                                      onClick: () => {
                                        (i(Ll, S.id),
                                          m(
                                            a(
                                              G.waitlist
                                                ? "m.book.waitToast"
                                                : "m.book.bookedToast",
                                              { name: c(S.title) },
                                            ),
                                          ));
                                      },
                                      children: G.waitlist
                                        ? a("m.book.wait")
                                        : a("m.book.book"),
                                    })
                                  : e.jsxs("span", {
                                      className: "slot-lock",
                                      title: a(`deny.${G.reason}`),
                                      children: [
                                        e.jsx(M, { name: "lock", size: 15 }),
                                        G.reason === "ladies"
                                          ? a("ladiesOnly")
                                          : a(`deny.${G.reason}`),
                                      ],
                                    }),
                          }),
                        ],
                      },
                      S.id,
                    );
                  }),
                  !w.length &&
                    e.jsx(Ze, {
                      icon: "calendar",
                      title: a("m.book.emptyTitle"),
                      children: a("m.book.emptyText"),
                    }),
                ],
              }),
              e.jsxs("p", {
                className: "policy",
                children: [
                  e.jsx(M, { name: "info", size: 15 }),
                  a("m.book.policy", {
                    h: s.settings.cancelWindowHrs,
                    n: s.settings.noShowLimit,
                  }),
                ],
              }),
            ],
          })
        : e.jsxs("div", {
            className: "mylist",
            children: [
              k.length
                ? k.map(({ b: S, sess: ae }) => {
                    const _ = gn(s, ae);
                    return e.jsxs(
                      "div",
                      {
                        className: "mybook",
                        children: [
                          e.jsxs("span", {
                            className: "slot-time tnum",
                            children: [
                              l.clock(ae.time),
                              e.jsx("small", {
                                children:
                                  ae.day === 0 ? a("today") : l.weekday(ea(ae)),
                              }),
                            ],
                          }),
                          e.jsxs("span", {
                            className: "slot-body",
                            children: [
                              e.jsx("strong", { children: c(ae.title) }),
                              e.jsx(_e, { value: S.status }),
                            ],
                          }),
                          ["booked", "waitlisted"].includes(S.status) &&
                            _ === "upcoming" &&
                            e.jsx(Z, {
                              size: "sm",
                              variant: "ghost",
                              onClick: () => N(ae),
                              children: a("m.book.manage"),
                            }),
                        ],
                      },
                      S.id,
                    );
                  })
                : e.jsx(Ze, {
                    icon: "calendar",
                    title: a("m.book.noneTitle"),
                    children: a("m.book.noneText"),
                  }),
              e.jsxs("p", {
                className: "policy",
                children: [
                  e.jsx(M, { name: "flag", size: 15 }),
                  a("m.book.noShows", {
                    n: h.noShows,
                    max: s.settings.noShowLimit,
                  }),
                ],
              }),
            ],
          }),
      g && e.jsx(tx, { sess: g, onClose: () => N(null) }),
    ],
  });
}
function tx({ sess: s, onClose: i }) {
  const { s: a, act: l, t: c, f: m, L: h, notify: p } = me(),
    f = s.trainerId && de(dt, s.trainerId),
    y = Xa(a, s.id),
    j = Jo(a, s),
    C = Pn(a, s),
    v = y && zu(a, s);
  return e.jsxs(et, {
    title: h(s.title),
    onClose: i,
    footer:
      y &&
      ["booked", "waitlisted"].includes(y.status) &&
      gn(a, s) === "upcoming"
        ? e.jsx(Z, {
            variant: v ? "danger" : "secondary",
            block: !0,
            onClick: () => {
              (l(Af, y.id),
                p(
                  c(v ? "m.book.lateToast" : "m.book.cancelToast"),
                  v ? "bad" : "ok",
                ),
                i());
            },
            children: c(v ? "m.book.cancelLate" : "m.book.cancel"),
          })
        : j.ok
          ? e.jsx(Z, {
              variant: "primary",
              block: !0,
              size: "lg",
              onClick: () => {
                (l(Ll, s.id),
                  p(
                    c(j.waitlist ? "m.book.waitToast" : "m.book.bookedToast", {
                      name: h(s.title),
                    }),
                  ),
                  i());
              },
              children: j.waitlist
                ? c("m.book.wait")
                : s.price
                  ? c("m.book.bookPaid", { price: m.money(s.price) })
                  : c("m.book.book"),
            })
          : null,
    children: [
      e.jsxs("div", {
        className: "sheet-facts",
        children: [
          e.jsxs("span", {
            children: [
              e.jsx(M, { name: "calendar", size: 16 }),
              s.day === 0 ? c("today") : m.weekday(ea(s), "long"),
              " · ",
              e.jsx("b", { className: "tnum", children: m.clock(s.time) }),
            ],
          }),
          e.jsxs("span", {
            children: [
              e.jsx(M, { name: "clock", size: 16 }),
              c("min", { n: s.dur }),
            ],
          }),
          e.jsxs("span", {
            children: [
              e.jsx(M, { name: "users", size: 16 }),
              C ? c("m.book.spots", { n: C }) : c("m.book.fullWait"),
            ],
          }),
          f &&
            e.jsxs("span", {
              children: [e.jsx(Ke, { name: h(f.name), size: "sm" }), h(f.name)],
            }),
        ],
      }),
      s.womenOnly &&
        e.jsxs("p", {
          className: "sheet-note ladies",
          children: [
            e.jsx(M, { name: "shield", size: 16 }),
            c("m.book.ladiesSheet"),
          ],
        }),
      !j.ok &&
        !y &&
        e.jsxs("p", {
          className: "sheet-note bad",
          children: [
            e.jsx(M, { name: "lock", size: 16 }),
            c(`deny.${j.reason}`),
          ],
        }),
      y &&
        e.jsxs("p", {
          className: "sheet-note",
          children: [
            e.jsx(M, { name: "ok", size: 16 }),
            c(`m.book.mine.${y.status}`),
          ],
        }),
      v &&
        e.jsxs("p", {
          className: "sheet-note bad",
          children: [
            e.jsx(M, { name: "warn", size: 16 }),
            c("m.book.lateWarn", { h: a.settings.cancelWindowHrs }),
          ],
        }),
      e.jsx("p", { className: "muted", children: c("m.book.attendNote") }),
    ],
  });
}
function bs({ title: s, end: i, children: a, className: l = "", id: c }) {
  return e.jsxs("section", {
    className: `rc-panel ${l}`,
    "aria-labelledby": c,
    children: [
      (s || i) &&
        e.jsxs("header", {
          className: "rc-panel-head",
          children: [s && e.jsx("h2", { id: c, children: s }), i],
        }),
      a,
    ],
  });
}
function nc({ value: s, onChange: i, placeholder: a, autoFocus: l }) {
  const { t: c } = me();
  return e.jsxs("label", {
    className: "searchbox rc-search",
    children: [
      e.jsx(M, { name: "search", size: 18 }),
      e.jsx("span", { className: "sr-only", children: c("search") }),
      e.jsx("input", {
        type: "search",
        value: s,
        onChange: (m) => i(m.target.value),
        placeholder: a,
        autoComplete: "off",
        autoFocus: l,
      }),
      s &&
        e.jsx(yn, {
          icon: "x",
          size: 16,
          label: c("r.clear"),
          className: "rc-search-clear",
          onClick: () => i(""),
        }),
    ],
  });
}
function Nl({ m: s, on: i, onClick: a, end: l, meta: c }) {
  const { s: m, t: h, f: p, L: f } = me(),
    y = lt(m, s);
  return e.jsxs("button", {
    type: "button",
    className: `rc-mline ${i ? "on" : ""}`,
    "aria-pressed": i || void 0,
    onClick: a,
    children: [
      e.jsx(Ke, {
        name: f(s.name),
        size: "sm",
        tone: s.gender === "F" ? "ladies" : "",
      }),
      e.jsxs("span", {
        className: "rc-mline-body",
        children: [
          e.jsx("strong", { children: f(s.name) }),
          e.jsx("small", {
            className: "tnum",
            children: c ?? `${p.digits(s.code)} · ${p.digits(s.phone)}`,
          }),
        ],
      }),
      l ?? e.jsx(_e, { value: y }),
    ],
  });
}
const ns = {
    cash: "cash",
    card: "card",
    fawry: "receipt",
    instapay: "phone",
    qr: "qr",
    nfc: "nfc",
    manual: "edit",
  },
  nx = ["cash", "card", "instapay", "fawry"];
function sc({ value: s, onChange: i }) {
  const { t: a } = me();
  return e.jsx("div", {
    className: "rc-methods",
    role: "radiogroup",
    "aria-label": a("r.pay.method"),
    children: nx.map((l) =>
      e.jsxs(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": s === l,
          className: `rc-method ${s === l ? "on" : ""}`,
          onClick: () => i(l),
          children: [
            e.jsx(M, { name: ns[l], size: 20 }),
            e.jsx("span", { children: a(`method.${l}`) }),
          ],
        },
        l,
      ),
    ),
  });
}
function hn({ label: s, children: i, tone: a = "" }) {
  return e.jsxs("div", {
    className: `rc-fact ${a}`,
    children: [e.jsx("dt", { children: s }), e.jsx("dd", { children: i })],
  });
}
const Hu = (s, i) => `⁦${s}–${i}⁩`,
  mu = (s) => (s === "ar" ? "←" : "→"),
  sx = "٠١٢٣٤٥٦٧٨٩",
  ax = (s) => String(s).replace(/[٠-٩]/g, (i) => String(sx.indexOf(i)));
function ac(s, i) {
  const a = ax(i).trim().toLowerCase();
  if (!a) return [];
  const l = a.replace(/\D/g, "");
  return s.members.filter(
    (c) =>
      !!(
        c.name.en.toLowerCase().includes(a) ||
        c.name.ar.includes(a) ||
        c.code.toLowerCase().includes(a) ||
        (l.length >= 3 &&
          (c.phone.replace(/\D/g, "").includes(l) ||
            c.code.replace(/\D/g, "").includes(l)))
      ),
  );
}
function Bu(s) {
  const i = s.payments.filter((c) => c.at === xe),
    a = i.filter((c) => c.status === "paid"),
    l = (c) =>
      a.filter((m) => m.method === c).reduce((m, h) => m + h.amount, 0);
  return {
    today: i,
    cash: l("cash"),
    card: l("card"),
    fawry: l("fawry"),
    instapay: l("instapay"),
    total: a.reduce((c, m) => c + m.amount, 0),
    renewals: a.filter((c) => c.label === "renewal").length,
    packages: a.filter((c) => c.label === "package").length,
    pending: s.payments.filter((c) => c.status === "pending"),
  };
}
const rx = new Set(["checkIn", "checkInOffline", "entryDenied", "checkOut"]),
  Wu = (s) =>
    s.audit.filter((i) => {
      var a;
      return rx.has(i.type) && ((a = i.params) == null ? void 0 : a.memberId);
    });
function Uu(s) {
  return s.freeze ? Ye(s.freeze.start, s.freeze.days) : null;
}
function lx(s, i) {
  return {
    ...s,
    members: s.members.map((a) => (a.id === i ? { ...a, app: !0 } : a)),
    audit: [
      {
        id: mt("a"),
        type: "appInstalled",
        params: { memberId: i },
        at: s.clock,
      },
      ...s.audit,
    ].slice(0, 80),
  };
}
const ix = ["m1", "m4", "m5", "m3", "m8", "m9", "m6", "m12", "m11", "m7"];
function Vu({ param: s }) {
  const { s: i, act: a, go: l, t: c, f: m, L: h } = me(),
    [p, f] = V.useState("qr"),
    [y, j] = V.useState(""),
    [C, v] = V.useState("arrivals"),
    [g, N] = V.useState(null),
    [k, b] = V.useState(0),
    w = V.useRef(null),
    S = s ? ze(i, s) : null;
  V.useEffect(() => {
    N((O) => (O && O.id === s ? O : null));
  }, [s]);
  const ae = () => {
      var O;
      (O = window.matchMedia) != null &&
        O.call(window, "(max-width: 760px)").matches &&
        setTimeout(() => {
          var R;
          return (R = w.current) == null
            ? void 0
            : R.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
    },
    _ = (O) => {
      (N(null), l("reception", "desk", O), ae());
    },
    L = (O) => {
      if ((b((K) => K + 1), !O)) {
        (N({ unknown: !0 }), l("reception", "desk"), ae());
        return;
      }
      (Il(i, O).ok || a(Zs, O, { method: p, by: "reception" }),
        N({ id: O }),
        l("reception", "desk", O),
        ae());
    },
    G = ix.map((O) => ze(i, O)).filter((O) => O && !qt(i, O.id)),
    H = y.trim() ? ac(i, y) : null;
  return e.jsxs("div", {
    className: "rc-page rc-desk",
    children: [
      e.jsx(ox, {}),
      e.jsxs("div", {
        className: "rc-desk-grid",
        children: [
          e.jsxs("div", {
            className: "rc-col rc-col-side",
            children: [
              e.jsxs(bs, {
                className: "rc-scanpanel",
                children: [
                  e.jsxs(
                    "div",
                    {
                      className: `rc-scanner ${i.online ? "" : "is-offline"}`,
                      children: [
                        e.jsxs("span", {
                          className: "rc-scan-frame",
                          "aria-hidden": "true",
                          children: [
                            e.jsx("i", {}),
                            e.jsx("i", {}),
                            e.jsx("i", {}),
                            e.jsx("i", {}),
                            e.jsx("span", { className: "rc-scan-line" }),
                            e.jsx(M, {
                              name: p === "nfc" ? "nfc" : "qr",
                              size: 30,
                            }),
                          ],
                        }),
                        e.jsxs("span", {
                          className: "rc-scan-text",
                          children: [
                            e.jsx("strong", { children: c("r.scan.ready") }),
                            e.jsx("small", {
                              children: c(
                                p === "nfc"
                                  ? "r.scan.hintNfc"
                                  : "r.scan.hintQr",
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    k,
                  ),
                  e.jsx(nt, {
                    size: "block",
                    value: p,
                    onChange: f,
                    label: c("r.scan.reader"),
                    options: [
                      { value: "qr", label: c("method.qr"), icon: "qr" },
                      { value: "nfc", label: c("method.nfc"), icon: "nfc" },
                    ],
                  }),
                  e.jsx(Z, {
                    size: "lg",
                    block: !0,
                    icon: "scan",
                    onClick: () => {
                      var O;
                      return L((O = G[0]) == null ? void 0 : O.id);
                    },
                    disabled: !G.length,
                    children: c("r.scan.next"),
                  }),
                  e.jsx("p", {
                    className: "rc-scan-next",
                    children: G.length
                      ? c("r.scan.nextIs", { name: h(G[0].name) })
                      : c("r.scan.queueEmpty"),
                  }),
                ],
              }),
              e.jsxs(bs, {
                className: "rc-listpanel",
                children: [
                  e.jsx(nc, {
                    value: y,
                    onChange: j,
                    placeholder: c("r.search.ph"),
                  }),
                  H
                    ? e.jsxs("div", {
                        className: "rc-list",
                        "aria-live": "polite",
                        children: [
                          e.jsxs("p", {
                            className: "rc-list-note",
                            children: [
                              c("r.search.count", { n: H.length }),
                              " · ",
                              c("r.search.manual"),
                            ],
                          }),
                          H.map((O) =>
                            e.jsx(
                              Nl,
                              {
                                m: O,
                                on: (S == null ? void 0 : S.id) === O.id,
                                onClick: () => _(O.id),
                              },
                              O.id,
                            ),
                          ),
                          !H.length &&
                            e.jsx(Ze, {
                              icon: "search",
                              title: c("r.search.none"),
                              action: e.jsx(Z, {
                                variant: "secondary",
                                size: "sm",
                                icon: "userPlus",
                                onClick: () =>
                                  l("reception", "payments", "new"),
                                children: c("r.search.register"),
                              }),
                              children: c("r.search.noneText"),
                            }),
                        ],
                      })
                    : e.jsxs(e.Fragment, {
                        children: [
                          e.jsx(nt, {
                            size: "block",
                            value: C,
                            onChange: v,
                            label: c("r.desk.lists"),
                            options: [
                              {
                                value: "arrivals",
                                label: c("r.desk.arrivals"),
                              },
                              {
                                value: "recent",
                                label: c("r.desk.recent"),
                                count: Wu(i).length || null,
                              },
                            ],
                          }),
                          C === "arrivals"
                            ? e.jsxs("div", {
                                className: "rc-list",
                                children: [
                                  e.jsx("p", {
                                    className: "rc-list-note",
                                    children: c("r.desk.arrivalsNote"),
                                  }),
                                  G.slice(0, 6).map((O) =>
                                    e.jsx(
                                      Nl,
                                      {
                                        m: O,
                                        on:
                                          (S == null ? void 0 : S.id) === O.id,
                                        onClick: () => L(O.id),
                                      },
                                      O.id,
                                    ),
                                  ),
                                  e.jsxs("button", {
                                    type: "button",
                                    className: `rc-mline rc-unknown ${g != null && g.unknown ? "on" : ""}`,
                                    onClick: () => L(null),
                                    children: [
                                      e.jsx("span", {
                                        className: "rc-unknown-ico",
                                        children: e.jsx(M, {
                                          name: "nfc",
                                          size: 16,
                                        }),
                                      }),
                                      e.jsxs("span", {
                                        className: "rc-mline-body",
                                        children: [
                                          e.jsx("strong", {
                                            children: c("r.desk.strayCard"),
                                          }),
                                          e.jsx("small", {
                                            children: c("r.desk.strayMeta"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : e.jsx(cx, { onPick: _ }),
                        ],
                      }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "rc-col rc-col-main",
            children: [
              e.jsx("div", {
                ref: w,
                className: "rc-card-anchor",
                children: S
                  ? e.jsx(
                      dx,
                      {
                        m: S,
                        scanned: (g == null ? void 0 : g.id) === S.id,
                        reader: p,
                        onDone: () => N(null),
                      },
                      S.id,
                    )
                  : g != null && g.unknown
                    ? e.jsx(mx, {})
                    : e.jsx("section", {
                        className: "rc-card rc-card-empty",
                        children: e.jsx(Ze, {
                          icon: "scan",
                          title: c("r.card.emptyTitle"),
                          children: c("r.card.emptyText"),
                        }),
                      }),
              }),
              e.jsx(ux, { onPick: _, selId: S == null ? void 0 : S.id }),
            ],
          }),
        ],
      }),
    ],
  });
}
function ox() {
  const { s, act: i, t: a, f: l, notify: c } = me(),
    m = Tl(s),
    h = Ve(s.settings.ladiesHours.from),
    p = Ve(s.settings.ladiesHours.to),
    f = s.clock < h ? "soon" : s.clock < p ? "now" : "ended",
    y = s.audit.filter((C) => C.type === "entryDenied").length,
    j = s.offlineQueue.length;
  return e.jsxs("section", {
    className: "rc-strip",
    "aria-label": a("r.strip.label"),
    children: [
      e.jsxs("div", {
        className: "rc-cell rc-cell-occ",
        children: [
          e.jsx("span", {
            className: "rc-cell-label",
            children: a("r.strip.occ"),
          }),
          e.jsxs("span", {
            className: "rc-cell-value",
            children: [
              e.jsx("b", { className: "tnum", children: l.num(m.count) }),
              e.jsxs("small", {
                className: "tnum",
                children: ["/ ", l.num(m.capacity)],
              }),
              e.jsx("span", {
                className: `rc-level rc-level-${m.level}`,
                children: a(`crowd.${m.level}`),
              }),
            ],
          }),
          e.jsx(tr, {
            value: m.pct,
            max: 1,
            tone: m.level === "busy" ? "warn" : "",
            label: a("r.strip.occ"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "rc-cell",
        children: [
          e.jsx("span", {
            className: "rc-cell-label",
            children: a("r.strip.today"),
          }),
          e.jsxs("span", {
            className: "rc-cell-value",
            children: [
              e.jsx("b", {
                className: "tnum",
                children: l.num(s.visits.length),
              }),
              e.jsx("small", { children: a("r.strip.checkins") }),
            ],
          }),
          e.jsx("span", {
            className: "rc-cell-sub",
            children: a("r.strip.inRefused", { in: zl(s).length, refused: y }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: `rc-cell ${f === "now" ? "is-ladies" : ""}`,
        children: [
          e.jsx("span", {
            className: "rc-cell-label",
            children: a("ladiesHours"),
          }),
          e.jsx("span", {
            className: "rc-cell-value",
            children: e.jsx("b", {
              className: "tnum rc-b-sm",
              children: Hu(
                l.clock(s.settings.ladiesHours.from),
                l.clock(s.settings.ladiesHours.to),
              ),
            }),
          }),
          e.jsx("span", {
            className: "rc-cell-sub",
            children: a(`r.strip.ladies.${f}`, {
              from: l.clock(s.settings.ladiesHours.from),
              to: l.clock(s.settings.ladiesHours.to),
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: `rc-cell rc-cell-net ${s.online ? "" : "is-off"}`,
        children: [
          e.jsx("span", {
            className: "rc-cell-label",
            children: a("r.strip.net"),
          }),
          e.jsxs("span", {
            className: "rc-cell-value",
            children: [
              e.jsx(M, { name: s.online ? "wifi" : "wifiOff", size: 18 }),
              e.jsx("b", {
                className: "rc-b-sm",
                children: a(s.online ? "r.net.online" : "r.net.offline"),
              }),
              s.online &&
                e.jsx(Z, {
                  className: "rc-net-btn",
                  size: "sm",
                  variant: "secondary",
                  icon: "wifiOff",
                  onClick: () => {
                    (i(bl, !1), c(a("r.net.wentToast"), "bad"));
                  },
                  children: a("r.net.simulate"),
                }),
            ],
          }),
          e.jsx("span", {
            className: "rc-cell-sub",
            children: s.online
              ? a("r.net.allSynced")
              : a("r.net.queued", { n: j }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "rc-cell rc-cell-curve",
        "aria-hidden": "true",
        children: [
          e.jsx("span", {
            className: "rc-cell-label",
            children: a("r.strip.typical"),
          }),
          e.jsx(_u, {
            data: Ml(),
            nowHour: Math.floor(s.clock / 60),
            f: l,
            height: 34,
          }),
        ],
      }),
    ],
  });
}
function cx({ onPick: s }) {
  const { s: i, t: a, f: l, L: c } = me(),
    m = Wu(i).slice(0, 12);
  return m.length
    ? e.jsx("ol", {
        className: "rc-list rc-recent",
        children: m.map((h) => {
          const p = ze(i, h.params.memberId);
          if (!p) return null;
          const f =
              h.type === "entryDenied"
                ? "bad"
                : h.type === "checkOut"
                  ? "out"
                  : h.type === "checkInOffline"
                    ? "queued"
                    : "ok",
            y =
              f === "bad"
                ? "ban"
                : f === "out"
                  ? "logout"
                  : f === "queued"
                    ? "wifiOff"
                    : "check",
            j =
              h.type === "entryDenied"
                ? a(`deny.${h.params.reason}`)
                : h.type === "checkOut"
                  ? a("r.recent.out")
                  : h.type === "checkInOffline"
                    ? a("r.recent.inOffline")
                    : a("r.recent.in", {
                        method: a(`method.${h.params.method || "qr"}`),
                      });
          return e.jsx(
            "li",
            {
              children: e.jsxs("button", {
                type: "button",
                className: `rc-event rc-event-${f}`,
                onClick: () => s(p.id),
                children: [
                  e.jsx("time", { children: l.time(h.at) }),
                  e.jsx("span", {
                    className: "rc-event-ico",
                    children: e.jsx(M, { name: y, size: 14 }),
                  }),
                  e.jsxs("span", {
                    className: "rc-event-body",
                    children: [
                      e.jsx("strong", { children: c(p.name) }),
                      e.jsx("small", { children: j }),
                    ],
                  }),
                ],
              }),
            },
            h.id,
          );
        }),
      })
    : e.jsx(Ze, {
        icon: "history",
        title: a("r.recent.emptyTitle"),
        children: a("r.recent.emptyText"),
      });
}
function dx({ m: s, scanned: i, reader: a, onDone: l }) {
  const { s: c, act: m, go: h, t: p, f, L: y, notify: j } = me(),
    C = y(s.name),
    v = qt(c, s.id),
    g = Il(c, s.id),
    N = lt(c, s),
    k = En(s),
    b = Mn(s),
    w =
      v && !i
        ? "inside"
        : g.ok
          ? "ok"
          : g.reason === "already"
            ? "already"
            : "refused",
    S = i ? a : "manual",
    ae = v ? v.inAt + c.settings.avgVisitMin : null,
    _ = () => {
      (m(Zs, s.id, { method: S, by: "reception" }),
        j(p(c.online ? "r.toast.in" : "r.toast.inOffline", { name: C })),
        l());
    },
    L = () => {
      (m(Zo, s.id), j(p("r.toast.out", { name: C })), l());
    },
    G = () => {
      (m(ec, s.id),
        m(Zs, s.id, { method: S, by: "reception" }),
        j(p("r.toast.unfrozenIn", { name: C })),
        l());
    };
  let H;
  if (w === "ok")
    H = {
      tone: "ok",
      icon: "check",
      title: p("r.v.ok"),
      sub:
        N === "expiring"
          ? p("r.v.okExpiring", { n: b })
          : p("r.v.okSub", { plan: y(k.name), date: f.date(s.end) }),
      action: e.jsx(Z, {
        size: "lg",
        icon: "door",
        onClick: _,
        children: p("r.v.checkIn"),
      }),
      foot: p("r.v.recordAs", { method: p(`method.${S}`) }),
    };
  else if (w === "inside")
    H = {
      tone: "in",
      icon: "door",
      title: p("r.v.inside"),
      sub: p("r.v.insideSub", { time: f.time(v.inAt), out: f.time(ae) }),
      action: e.jsx(Z, {
        size: "lg",
        variant: "secondary",
        icon: "logout",
        onClick: L,
        children: p("r.v.checkOut"),
      }),
      foot: v.synced
        ? p("r.v.via", { method: p(`method.${v.method}`), by: p(`by.${v.by}`) })
        : p("r.v.queued"),
    };
  else if (w === "already")
    H = {
      tone: "warn",
      icon: "alert",
      title: p("r.v.already"),
      sub: p("r.v.alreadySub", { time: f.time(v.inAt) }),
      action: e.jsx(Z, {
        size: "lg",
        variant: "secondary",
        icon: "logout",
        onClick: L,
        children: p("r.v.closeVisit"),
      }),
    };
  else {
    const A = g.reason,
      Y =
        A === "expired"
          ? p("r.v.expiredSub", { date: f.date(s.end), n: -b })
          : A === "frozen"
            ? p("r.v.frozenSub", {
                from: f.date(s.freeze.start),
                to: f.date(Uu(s)),
              })
            : A === "ladies"
              ? p("r.v.ladiesSub", { to: f.clock(c.settings.ladiesHours.to) })
              : "";
    H = {
      tone: "bad",
      icon: A === "frozen" ? "snow" : A === "ladies" ? "shield" : "ban",
      title: p("r.v.refused"),
      reason: p(`deny.${A}`),
      sub: Y,
      action:
        A === "expired"
          ? e.jsx(Z, {
              size: "lg",
              icon: "card",
              onClick: () => h("reception", "payments", s.id),
              children: p("r.v.renew"),
            })
          : A === "frozen"
            ? e.jsx(Z, {
                size: "lg",
                icon: "snow",
                onClick: G,
                children: p("r.v.endFreeze"),
              })
            : null,
      foot:
        A === "frozen"
          ? p("r.v.endFreezeNote")
          : A === "expired"
            ? p("r.v.renewNote")
            : null,
    };
  }
  const O = c.bookings
      .filter(
        (A) =>
          A.memberId === s.id &&
          ["booked", "waitlisted", "attended"].includes(A.status),
      )
      .map((A) => ({ b: A, sess: de(c.sessions, A.sessionId) }))
      .filter((A) => {
        var Y;
        return ((Y = A.sess) == null ? void 0 : Y.day) === 0;
      })
      .sort((A, Y) => Ve(A.sess.time) - Ve(Y.sess.time)),
    R = c.ptSessions.find(
      (A) => A.memberId === s.id && A.day === 0 && A.status === "scheduled",
    ),
    K = en(c, s.id),
    E = c.payments.find((A) => A.memberId === s.id && A.status === "pending"),
    z = c.visits.filter((A) => A.memberId === s.id).length,
    F = [];
  return (
    E &&
      F.push({
        tone: "warn",
        icon: "hourglass",
        text: p("r.flag.pending", {
          amount: f.money(E.amount),
          method: p(`method.${E.method}`),
        }),
        act: p("r.flag.review"),
        go: ["payments", s.id],
      }),
    N === "expiring" &&
      w !== "refused" &&
      F.push({
        tone: "warn",
        icon: "calendarClock",
        text: p("r.flag.expiring", { n: b }),
        act: p("r.flag.renew"),
        go: ["payments", s.id],
      }),
    c.settings.noShowPenalty &&
      s.noShows >= c.settings.noShowLimit &&
      F.push({
        tone: "bad",
        icon: "flag",
        text: p("r.flag.noshows", { n: s.noShows }),
      }),
    s.app ||
      F.push({
        tone: "plain",
        icon: "phone",
        text: p("r.flag.noApp"),
        act: p("r.flag.install"),
        go: ["members", s.id],
      }),
    e.jsxs("section", {
      className: "rc-card",
      "aria-labelledby": "rc-card-name",
      children: [
        e.jsxs("div", {
          className: `rc-verdict is-${H.tone}`,
          role: "status",
          "aria-live": "polite",
          children: [
            e.jsx("span", {
              className: "rc-verdict-ico",
              children: e.jsx(M, { name: H.icon, size: 34 }),
            }),
            e.jsxs("span", {
              className: "rc-verdict-body",
              children: [
                e.jsx("strong", {
                  className: "rc-verdict-title",
                  children: H.title,
                }),
                H.reason &&
                  e.jsx("b", {
                    className: "rc-verdict-reason",
                    children: H.reason,
                  }),
                H.sub &&
                  e.jsx("span", {
                    className: "rc-verdict-sub",
                    children: H.sub,
                  }),
              ],
            }),
            H.action &&
              e.jsxs("span", {
                className: "rc-verdict-act",
                children: [
                  H.action,
                  H.foot && e.jsx("small", { children: H.foot }),
                ],
              }),
          ],
        }),
        e.jsxs("div", {
          className: "rc-id",
          children: [
            e.jsx(Ke, {
              name: C,
              size: "lg",
              tone: s.gender === "F" ? "ladies" : "",
            }),
            e.jsxs("div", {
              className: "rc-id-body",
              children: [
                e.jsx("h2", { id: "rc-card-name", children: C }),
                e.jsxs("p", {
                  className: "tnum",
                  children: [f.digits(s.code), " · ", f.digits(s.phone)],
                }),
                e.jsxs("p", {
                  className: "rc-id-tags",
                  children: [
                    e.jsxs(ge, {
                      tone: s.gender === "F" ? "ladies" : "neutral",
                      children: [
                        p(`gender.${s.gender}`),
                        " · ",
                        p("r.age", { n: s.age }),
                      ],
                    }),
                    s.app
                      ? e.jsx(ge, {
                          tone: "forest",
                          icon: "phone",
                          children: p("r.app.yes"),
                        })
                      : e.jsx(ge, { icon: "phone", children: p("r.app.no") }),
                    s.isNew &&
                      e.jsx(ge, { tone: "lime", children: p("r.newMember") }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "rc-id-links",
              children: [
                e.jsx(Z, {
                  variant: "ghost",
                  size: "sm",
                  icon: "users",
                  onClick: () => h("reception", "members", s.id),
                  children: p("r.card.profile"),
                }),
                e.jsx(Z, {
                  variant: "ghost",
                  size: "sm",
                  icon: "receipt",
                  onClick: () => h("reception", "payments", s.id),
                  children: p("r.card.payment"),
                }),
              ],
            }),
          ],
        }),
        e.jsxs("dl", {
          className: "rc-facts",
          children: [
            e.jsx(hn, { label: p("r.f.plan"), children: y(k.name) }),
            e.jsxs(hn, {
              label: p("r.f.ends"),
              tone: N === "expired" ? "bad" : N === "expiring" ? "warn" : "",
              children: [
                e.jsx("span", { className: "tnum", children: f.date(s.end) }),
                e.jsx("small", {
                  children:
                    b >= 0
                      ? p("r.f.daysLeft", { n: b })
                      : p("r.f.daysAgo", { n: -b }),
                }),
              ],
            }),
            e.jsx(hn, {
              label: p("r.f.today"),
              children:
                O.length || R
                  ? e.jsx("span", {
                      className: "rc-fact-list",
                      children: [
                        ...O.map(({ b: A, sess: Y }) => ({
                          key: A.id,
                          time: Y.time,
                          label: y(Y.title),
                          done: A.status === "attended",
                        })),
                        ...(R
                          ? [{ key: R.id, time: R.time, label: p("r.f.pt") }]
                          : []),
                      ]
                        .sort((A, Y) => Ve(A.time) - Ve(Y.time))
                        .map((A) =>
                          e.jsxs(
                            "span",
                            {
                              className: `tnum ${A.done ? "rc-done" : ""}`,
                              children: [
                                f.clock(A.time),
                                " · ",
                                A.label,
                                A.done ? ` · ${p("status.attended")}` : "",
                              ],
                            },
                            A.key,
                          ),
                        ),
                    })
                  : e.jsx("span", {
                      className: "muted",
                      children: p("r.f.noBookings"),
                    }),
            }),
            e.jsx(hn, {
              label: p("r.f.visits"),
              children: e.jsx("span", {
                className: "tnum",
                children: f.num(z),
              }),
            }),
            e.jsx(hn, {
              label: p("r.f.guests"),
              children: e.jsx("span", {
                className: "tnum",
                children: p("of", { a: f.num(Za(s)), b: f.num(k.guestPasses) }),
              }),
            }),
            e.jsx(hn, {
              label: p("r.f.package"),
              children: K
                ? e.jsx("span", {
                    className: "tnum",
                    children: p("r.f.pkgLeft", { n: K.remaining }),
                  })
                : e.jsx("span", {
                    className: "muted",
                    children: p("r.f.none"),
                  }),
            }),
          ],
        }),
        F.length > 0 &&
          e.jsx("ul", {
            className: "rc-flags",
            children: F.map((A) =>
              e.jsxs(
                "li",
                {
                  className: `rc-flag is-${A.tone}`,
                  children: [
                    e.jsx(M, { name: A.icon, size: 17 }),
                    e.jsx("span", { children: A.text }),
                    A.act &&
                      e.jsxs("button", {
                        type: "button",
                        className: "rc-flag-act",
                        onClick: () => h("reception", ...A.go),
                        children: [
                          A.act,
                          e.jsx(M, { name: "arrow", size: 14 }),
                        ],
                      }),
                  ],
                },
                A.text,
              ),
            ),
          }),
      ],
    })
  );
}
function mx() {
  const { go: s, t: i } = me();
  return e.jsxs("section", {
    className: "rc-card",
    children: [
      e.jsxs("div", {
        className: "rc-verdict is-bad",
        role: "status",
        "aria-live": "polite",
        children: [
          e.jsx("span", {
            className: "rc-verdict-ico",
            children: e.jsx(M, { name: "ban", size: 34 }),
          }),
          e.jsxs("span", {
            className: "rc-verdict-body",
            children: [
              e.jsx("strong", {
                className: "rc-verdict-title",
                children: i("r.v.refused"),
              }),
              e.jsx("b", {
                className: "rc-verdict-reason",
                children: i("deny.unknown"),
              }),
              e.jsx("span", {
                className: "rc-verdict-sub",
                children: i("r.v.unknownSub"),
              }),
            ],
          }),
          e.jsx("span", {
            className: "rc-verdict-act",
            children: e.jsx(Z, {
              size: "lg",
              icon: "userPlus",
              onClick: () => s("reception", "payments", "new"),
              children: i("r.v.register"),
            }),
          }),
        ],
      }),
      e.jsxs("p", {
        className: "rc-card-note",
        children: [e.jsx(M, { name: "info", size: 16 }), i("r.v.unknownNote")],
      }),
    ],
  });
}
function ux({ onPick: s, selId: i }) {
  const { s: a, act: l, t: c, f: m, L: h, notify: p } = me(),
    f = [...zl(a)].sort((j, C) => C.inAt - j.inAt),
    y = a.settings.avgVisitMin;
  return e.jsx(bs, {
    id: "rc-innow-h",
    className: "rc-innow",
    title: e.jsxs(e.Fragment, {
      children: [
        c("r.in.title"),
        " ",
        e.jsx("span", {
          className: "rc-count tnum",
          children: m.num(f.length),
        }),
      ],
    }),
    end: e.jsxs("span", {
      className: "rc-panel-note",
      children: [
        e.jsx(M, { name: "timer", size: 15 }),
        c("r.in.auto", { n: y }),
      ],
    }),
    children: f.length
      ? e.jsx("ul", {
          className: "rc-inlist",
          children: f.map((j) => {
            const C = ze(a, j.memberId);
            if (!C) return null;
            const v = j.inAt + y,
              g = v - a.clock <= 15;
            return e.jsxs(
              "li",
              {
                className: `rc-in ${i === C.id ? "on" : ""}`,
                children: [
                  e.jsxs("button", {
                    type: "button",
                    className: "rc-in-who",
                    onClick: () => s(C.id),
                    children: [
                      e.jsx(Ke, {
                        name: h(C.name),
                        size: "sm",
                        tone: C.gender === "F" ? "ladies" : "",
                      }),
                      e.jsxs("span", {
                        children: [
                          e.jsx("strong", { children: h(C.name) }),
                          e.jsxs("small", {
                            className: "tnum",
                            children: [
                              e.jsx(M, {
                                name: ns[j.method] || "qr",
                                size: 13,
                              }),
                              " ",
                              m.time(j.inAt),
                              " · ",
                              c(`by.${j.by}`),
                              !j.synced &&
                                e.jsx(ge, {
                                  tone: "warn",
                                  icon: "wifiOff",
                                  children: c("r.in.queued"),
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("span", {
                    className: "rc-in-bar",
                    children: [
                      e.jsx(tr, {
                        value: Math.min(y, a.clock - j.inAt),
                        max: y,
                        tone: g ? "warn" : "",
                        label: c("r.in.autoAt", { time: m.time(v) }),
                      }),
                      e.jsx("small", {
                        className: "tnum",
                        children: c("r.in.autoAt", { time: m.time(v) }),
                      }),
                    ],
                  }),
                  e.jsx(yn, {
                    icon: "logout",
                    label: c("r.v.checkOut"),
                    onClick: () => {
                      (l(Zo, C.id), p(c("r.toast.out", { name: h(C.name) })));
                    },
                  }),
                ],
              },
              j.id,
            );
          }),
        })
      : e.jsx(Ze, {
          icon: "door",
          title: c("r.in.emptyTitle"),
          children: c("r.in.emptyText", { n: y }),
        }),
  });
}
const Gu = (s) => s === "fawry" || s === "instapay";
function $l() {
  const { t: s, L: i } = me();
  return (a) => {
    if (a.label === "package") {
      const c = de(Jt, a.packageId),
        m = de(dt, a.trainerId);
      return s("r.item.package", {
        n: (c == null ? void 0 : c.sessions) ?? "",
        trainer: m ? i(m.name) : "",
      });
    }
    const l = de(Wt, a.planId);
    return s("r.item.renewal", { plan: l ? i(l.name) : "" });
  };
}
function px({ param: s }) {
  const { s: i, go: a, t: l } = me(),
    [c, m] = V.useState(s === "new" ? "new" : "renew"),
    [h, p] = V.useState(null),
    [f, y] = V.useState(!1),
    [j, C] = V.useState(!1),
    v = s && s !== "new" ? ze(i, s) : null;
  (V.useEffect(() => {
    s === "new" && m("new");
  }, [s]),
    V.useEffect(() => {
      j && (C(!1), m("renew"), a("reception", "payments", i.members[0].id));
    }, [j, i.members, a]));
  const g = h === "latest" ? i.payments[0] : h ? de(i.payments, h) : null;
  return e.jsxs("div", {
    className: "rc-page rc-pay",
    children: [
      e.jsx(hx, { onClose: () => y(!0) }),
      e.jsxs("div", {
        className: "rc-pay-grid",
        children: [
          e.jsx("div", {
            className: "rc-col rc-col-main",
            children: e.jsx(bs, {
              id: "rc-sale-h",
              className: "rc-sale",
              title: l("r.pay.title"),
              end: e.jsx(nt, {
                value: c,
                onChange: (N) => {
                  (m(N),
                    N === "new"
                      ? a("reception", "payments", "new")
                      : s === "new" && a("reception", "payments"));
                },
                label: l("r.pay.title"),
                options: [
                  { value: "renew", label: l("r.pay.k.renew"), icon: "card" },
                  {
                    value: "package",
                    label: l("r.pay.k.package"),
                    icon: "dumbbell",
                  },
                  { value: "new", label: l("r.pay.k.new"), icon: "userPlus" },
                ],
              }),
              children:
                c === "new"
                  ? e.jsx(vx, {
                      onDone: () => {
                        (p("latest"), C(!0));
                      },
                    })
                  : e.jsxs(e.Fragment, {
                      children: [
                        e.jsx(fx, { sel: v }),
                        c === "renew"
                          ? e.jsx(yx, { m: v, onDone: () => p("latest") })
                          : e.jsx(xx, { m: v, onDone: () => p("latest") }),
                      ],
                    }),
            }),
          }),
          e.jsxs("div", {
            className: "rc-col rc-col-side",
            children: [e.jsx(jx, { onOpen: p }), e.jsx(kx, { onOpen: p })],
          }),
        ],
      }),
      g && e.jsx(Qu, { p: g, onClose: () => p(null) }),
      f && e.jsx(bx, { onClose: () => y(!1) }),
    ],
  });
}
function hx({ onClose: s }) {
  const { s: i, t: a, f: l, L: c } = me(),
    m = Bu(i),
    h = [
      { k: "card", v: m.card },
      { k: "instapay", v: m.instapay },
      { k: "fawry", v: m.fawry },
    ];
  return e.jsxs("section", {
    className: "rc-strip rc-shift",
    "aria-label": a("r.shift.label"),
    children: [
      e.jsxs("div", {
        className: "rc-cell rc-cell-cash",
        children: [
          e.jsxs("span", {
            className: "rc-cell-label",
            children: [
              e.jsx(M, { name: "cash", size: 15 }),
              a("r.shift.drawer"),
            ],
          }),
          e.jsx("span", {
            className: "rc-cell-value",
            children: e.jsx("b", {
              className: "tnum",
              children: l.money(m.cash),
            }),
          }),
          e.jsx("span", {
            className: "rc-cell-sub",
            children: a("r.shift.drawerSub"),
          }),
        ],
      }),
      h.map((p) =>
        e.jsxs(
          "div",
          {
            className: "rc-cell",
            children: [
              e.jsxs("span", {
                className: "rc-cell-label",
                children: [
                  e.jsx(M, { name: ns[p.k], size: 15 }),
                  a(`method.${p.k}`),
                ],
              }),
              e.jsx("span", {
                className: "rc-cell-value",
                children: e.jsx("b", {
                  className: "tnum rc-b-sm",
                  children: l.money(p.v),
                }),
              }),
            ],
          },
          p.k,
        ),
      ),
      e.jsxs("div", {
        className: "rc-cell",
        children: [
          e.jsxs("span", {
            className: "rc-cell-label",
            children: [
              e.jsx(M, { name: "receipt", size: 15 }),
              a("r.shift.count"),
            ],
          }),
          e.jsx("span", {
            className: "rc-cell-value",
            children: e.jsx("b", {
              className: "tnum rc-b-sm",
              children: a("r.shift.renewals", { n: m.renewals }),
            }),
          }),
          e.jsx("span", {
            className: "rc-cell-sub",
            children: a("r.shift.packages", { n: m.packages }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "rc-cell rc-cell-end",
        children: [
          e.jsx(Z, {
            variant: "secondary",
            size: "sm",
            icon: "lock",
            onClick: s,
            children: a("r.shift.close"),
          }),
          e.jsx("span", {
            className: "rc-cell-sub",
            children: a("r.shift.who", {
              name: c(de(as, Ka).name),
              time: l.clock("14:00"),
            }),
          }),
        ],
      }),
    ],
  });
}
function fx({ sel: s }) {
  const { s: i, go: a, t: l, f: c, L: m } = me(),
    [h, p] = V.useState("");
  if (s) {
    const j = lt(i, s);
    return e.jsxs("div", {
      className: "rc-picked",
      children: [
        e.jsx(Ke, { name: m(s.name), tone: s.gender === "F" ? "ladies" : "" }),
        e.jsxs("span", {
          className: "rc-picked-body",
          children: [
            e.jsx("strong", { children: m(s.name) }),
            e.jsxs("small", {
              className: "tnum",
              children: [
                c.digits(s.code),
                " · ",
                m(En(s).name),
                " · ",
                j === "expired"
                  ? l("r.f.endedOn", { date: c.date(s.end) })
                  : l("r.f.endsOn", { date: c.date(s.end) }),
              ],
            }),
          ],
        }),
        e.jsx("span", {
          className: "rc-picked-status",
          children:
            j === "frozen"
              ? e.jsx(ge, {
                  tone: "frost",
                  icon: "snow",
                  children: l("status.frozen"),
                })
              : e.jsx(_e, { value: j }),
        }),
        e.jsx(Z, {
          variant: "ghost",
          size: "sm",
          onClick: () => a("reception", "payments"),
          children: l("r.pay.change"),
        }),
      ],
    });
  }
  const f = h.trim() ? ac(i, h) : null,
    y = i.members
      .filter((j) => ["expired", "expiring"].includes(lt(i, j)) || gx(j) <= 14)
      .sort((j, C) => (j.end < C.end ? -1 : 1))
      .slice(0, 4);
  return e.jsxs("div", {
    className: "rc-pick",
    children: [
      e.jsx(nc, { value: h, onChange: p, placeholder: l("r.search.ph") }),
      e.jsx("p", {
        className: "rc-list-note",
        children: f ? l("r.search.count", { n: f.length }) : l("r.pay.due"),
      }),
      e.jsxs("div", {
        className: "rc-pick-list",
        children: [
          (f || y).slice(0, 5).map((j) =>
            e.jsx(
              Nl,
              {
                m: j,
                onClick: () => a("reception", "payments", j.id),
                meta: `${c.digits(j.code)} · ${Mn(j) < 0 ? l("r.f.endedOn", { date: c.date(j.end) }) : l("r.f.endsOn", { date: c.date(j.end) })}`,
              },
              j.id,
            ),
          ),
          f &&
            !f.length &&
            e.jsx("p", {
              className: "muted rc-pad",
              children: l("r.search.noneText"),
            }),
        ],
      }),
    ],
  });
}
const gx = (s) => Mn(s);
function yx({ m: s, onDone: i }) {
  const { s: a, act: l, t: c, f: m, L: h, notify: p } = me(),
    [f, y] = V.useState((s == null ? void 0 : s.planId) || "monthly"),
    [j, C] = V.useState("cash");
  V.useEffect(() => {
    s && y(s.planId);
  }, [s == null ? void 0 : s.id]);
  const v = de(Wt, f),
    g = s && s.end > xe ? s.end : xe,
    N = Cl(g, v.months),
    k = s && lt(a, s) === "frozen",
    b = () => {
      (l(er, s.id, f, j, Ka),
        p(
          c(Gu(j) ? "r.toast.pending" : "r.toast.paid", {
            amount: m.money(v.price),
            name: h(s.name),
          }),
        ),
        i());
    };
  return e.jsxs("div", {
    className: `rc-form ${s ? "" : "is-waiting"}`,
    children: [
      e.jsxs("fieldset", {
        className: "rc-fs",
        children: [
          e.jsx("legend", { children: c("r.pay.plan") }),
          e.jsx("div", {
            className: "rc-plans",
            role: "radiogroup",
            "aria-label": c("r.pay.plan"),
            children: Wt.map((w) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": f === w.id,
                  className: `rc-plan ${f === w.id ? "on" : ""}`,
                  onClick: () => y(w.id),
                  children: [
                    e.jsx("strong", { children: h(w.name) }),
                    e.jsx("b", {
                      className: "tnum",
                      children: m.money(w.price),
                    }),
                    e.jsx("small", {
                      children: c("r.pay.guests", { n: w.guestPasses }),
                    }),
                    (s == null ? void 0 : s.planId) === w.id &&
                      e.jsx("span", {
                        className: "rc-plan-cur",
                        children: c("r.pay.current"),
                      }),
                  ],
                },
                w.id,
              ),
            ),
          }),
        ],
      }),
      e.jsxs("fieldset", {
        className: "rc-fs",
        children: [
          e.jsx("legend", { children: c("r.pay.method") }),
          e.jsx(sc, { value: j, onChange: C }),
          e.jsxs("p", {
            className: "rc-hint",
            children: [
              e.jsx(M, { name: "info", size: 15 }),
              c(`r.pay.note.${j}`),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "rc-summary",
        children: [
          e.jsxs("dl", {
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: c("r.pay.item") }),
                  e.jsx("dd", {
                    children: c("r.item.renewal", { plan: h(v.name) }),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: c("r.pay.validUntil") }),
                  e.jsxs("dd", {
                    className: "tnum",
                    children: [
                      m.date(N, {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      }),
                      s && s.end < xe
                        ? e.jsx("small", { children: c("r.pay.fromToday") })
                        : s
                          ? e.jsx("small", { children: c("r.pay.fromEnd") })
                          : null,
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsx(Z, {
            size: "lg",
            icon: ns[j],
            disabled: !s,
            onClick: b,
            children: c(`r.pay.do.${j}`, { amount: m.money(v.price) }),
          }),
        ],
      }),
      !s &&
        e.jsxs("p", {
          className: "rc-hint",
          children: [
            e.jsx(M, { name: "arrow", size: 15 }),
            c("r.pay.pickFirst"),
          ],
        }),
      k &&
        e.jsxs("p", {
          className: "rc-hint",
          children: [
            e.jsx(M, { name: "snow", size: 15 }),
            c("r.pay.frozenNote"),
          ],
        }),
    ],
  });
}
function xx({ m: s, onDone: i }) {
  const { act: a, t: l, f: c, L: m, notify: h } = me(),
    [p, f] = V.useState((s == null ? void 0 : s.trainerId) || "t2"),
    [y, j] = V.useState("pk8"),
    [C, v] = V.useState("cash"),
    g = de(Jt, y),
    N = de(dt, p),
    k = () => {
      (a(Eu, s.id, p, y, C, Ka),
        h(
          l(Gu(C) ? "r.toast.pending" : "r.toast.paid", {
            amount: c.money(g.price),
            name: m(s.name),
          }),
        ),
        i());
    };
  return e.jsxs("div", {
    className: `rc-form ${s ? "" : "is-waiting"}`,
    children: [
      e.jsxs("fieldset", {
        className: "rc-fs",
        children: [
          e.jsxs("legend", {
            children: [l("r.pkg.trainer"), " ", e.jsx(Ge, { phase: "2" })],
          }),
          e.jsx("div", {
            className: "rc-trainers",
            role: "radiogroup",
            "aria-label": l("r.pkg.trainer"),
            children: dt.map((b) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": p === b.id,
                  className: `rc-trainer ${p === b.id ? "on" : ""}`,
                  onClick: () => f(b.id),
                  children: [
                    e.jsx(Ke, {
                      initials: b.initials,
                      size: "sm",
                      tone: b.gender === "F" ? "ladies" : "",
                    }),
                    e.jsxs("span", {
                      children: [
                        e.jsx("strong", { children: m(b.name) }),
                        e.jsx("small", { children: m(b.specialty) }),
                      ],
                    }),
                  ],
                },
                b.id,
              ),
            ),
          }),
        ],
      }),
      e.jsxs("fieldset", {
        className: "rc-fs",
        children: [
          e.jsx("legend", { children: l("r.pkg.size") }),
          e.jsx("div", {
            className: "rc-plans rc-plans-2",
            role: "radiogroup",
            "aria-label": l("r.pkg.size"),
            children: Jt.map((b) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": y === b.id,
                  className: `rc-plan ${y === b.id ? "on" : ""}`,
                  onClick: () => j(b.id),
                  children: [
                    e.jsx("strong", {
                      children: l("sessionsN", { n: b.sessions }),
                    }),
                    e.jsx("b", {
                      className: "tnum",
                      children: c.money(b.price),
                    }),
                    e.jsx("small", {
                      children: l("r.pkg.meta", {
                        per: c.money(Math.round(b.price / b.sessions)),
                        days: b.validityDays,
                      }),
                    }),
                  ],
                },
                b.id,
              ),
            ),
          }),
        ],
      }),
      e.jsxs("fieldset", {
        className: "rc-fs",
        children: [
          e.jsx("legend", { children: l("r.pay.method") }),
          e.jsx(sc, { value: C, onChange: v }),
        ],
      }),
      e.jsxs("div", {
        className: "rc-summary",
        children: [
          e.jsxs("dl", {
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: l("r.pay.item") }),
                  e.jsx("dd", {
                    children: l("r.item.package", {
                      n: g.sessions,
                      trainer: m(N.name),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: l("r.pkg.expires") }),
                  e.jsx("dd", {
                    className: "tnum",
                    children: c.date(Ye(xe, g.validityDays), {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsx(Z, {
            size: "lg",
            icon: ns[C],
            disabled: !s,
            onClick: k,
            children: l(`r.pay.do.${C}`, { amount: c.money(g.price) }),
          }),
        ],
      }),
      e.jsxs("p", {
        className: "rc-hint",
        children: [
          e.jsx(M, { name: "info", size: 15 }),
          l("r.pkg.split", { pct: 60 }),
        ],
      }),
    ],
  });
}
function vx({ onDone: s }) {
  const { act: i, t: a, f: l, L: c, notify: m } = me(),
    [h, p] = V.useState({
      name: "",
      phone: "",
      gender: "F",
      age: "",
      planId: "monthly",
      method: "cash",
    }),
    [f, y] = V.useState(!1),
    j = (k) => (b) => p((w) => ({ ...w, [k]: b })),
    C = de(Wt, h.planId),
    v = h.phone.replace(/\D/g, "").length >= 10,
    g = h.name.trim().length >= 3 && v,
    N = () => {
      (y(!0),
        g &&
          (i(Of, { ...h, name: h.name.trim() }),
          m(a("r.toast.registered", { name: h.name.trim() })),
          s()));
    };
  return e.jsxs("div", {
    className: "rc-form",
    children: [
      e.jsxs("div", {
        className: "rc-form-grid",
        children: [
          e.jsx(It, {
            label: a("r.new.name"),
            hint: f && h.name.trim().length < 3 ? a("r.new.nameErr") : null,
            children: e.jsx("input", {
              value: h.name,
              onChange: (k) => j("name")(k.target.value),
              placeholder: a("r.new.namePh"),
              autoComplete: "off",
              "aria-invalid": f && h.name.trim().length < 3,
            }),
          }),
          e.jsx(It, {
            label: a("r.new.phone"),
            hint: a(f && !v ? "r.new.phoneErr" : "r.new.phoneHint"),
            children: e.jsx("input", {
              value: h.phone,
              onChange: (k) => j("phone")(k.target.value),
              inputMode: "tel",
              placeholder: "010 0000 0000",
              dir: "ltr",
              autoComplete: "off",
              "aria-invalid": f && !v,
            }),
          }),
          e.jsxs("div", {
            className: "field",
            children: [
              e.jsx("span", {
                className: "field-label",
                children: a("r.new.gender"),
              }),
              e.jsx(nt, {
                size: "block",
                value: h.gender,
                onChange: j("gender"),
                label: a("r.new.gender"),
                options: [
                  { value: "F", label: a("gender.F") },
                  { value: "M", label: a("gender.M") },
                ],
              }),
            ],
          }),
          e.jsx(It, {
            label: a("r.new.age"),
            children: e.jsx("input", {
              value: h.age,
              onChange: (k) =>
                j("age")(k.target.value.replace(/\D/g, "").slice(0, 2)),
              inputMode: "numeric",
              placeholder: "25",
            }),
          }),
        ],
      }),
      e.jsxs("fieldset", {
        className: "rc-fs",
        children: [
          e.jsx("legend", { children: a("r.pay.plan") }),
          e.jsx("div", {
            className: "rc-plans",
            role: "radiogroup",
            "aria-label": a("r.pay.plan"),
            children: Wt.map((k) =>
              e.jsxs(
                "button",
                {
                  type: "button",
                  role: "radio",
                  "aria-checked": h.planId === k.id,
                  className: `rc-plan ${h.planId === k.id ? "on" : ""}`,
                  onClick: () => j("planId")(k.id),
                  children: [
                    e.jsx("strong", { children: c(k.name) }),
                    e.jsx("b", {
                      className: "tnum",
                      children: l.money(k.price),
                    }),
                    e.jsx("small", {
                      children: a("r.pay.guests", { n: k.guestPasses }),
                    }),
                  ],
                },
                k.id,
              ),
            ),
          }),
        ],
      }),
      e.jsxs("fieldset", {
        className: "rc-fs",
        children: [
          e.jsx("legend", { children: a("r.pay.method") }),
          e.jsx(sc, { value: h.method, onChange: j("method") }),
        ],
      }),
      e.jsxs("div", {
        className: "rc-summary",
        children: [
          e.jsxs("dl", {
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: a("r.pay.item") }),
                  e.jsx("dd", {
                    children: a("r.item.renewal", { plan: c(C.name) }),
                  }),
                ],
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: a("r.new.card") }),
                  e.jsx("dd", { children: a("r.new.cardText") }),
                ],
              }),
            ],
          }),
          e.jsx(Z, {
            size: "lg",
            icon: "userPlus",
            onClick: N,
            children: a("r.new.submit", { amount: l.money(C.price) }),
          }),
        ],
      }),
    ],
  });
}
function jx({ onOpen: s }) {
  const { s: i, act: a, t: l, f: c, L: m, notify: h } = me(),
    p = $l(),
    f = i.payments.filter((y) => y.status === "pending");
  return e.jsx(bs, {
    id: "rc-pending-h",
    className: "rc-pending",
    title: e.jsxs(e.Fragment, {
      children: [
        l("r.pend.title"),
        " ",
        f.length > 0 &&
          e.jsx("span", {
            className: "rc-count is-warn tnum",
            children: c.num(f.length),
          }),
      ],
    }),
    children: f.length
      ? e.jsx("ul", {
          className: "rc-paylist",
          children: f.map((y) => {
            const j = ze(i, y.memberId);
            return e.jsxs(
              "li",
              {
                className: "rc-pend",
                children: [
                  e.jsxs("button", {
                    type: "button",
                    className: "rc-pend-body",
                    onClick: () => s(y.id),
                    children: [
                      e.jsx("strong", { children: j ? m(j.name) : "" }),
                      e.jsx("small", { children: p(y) }),
                      e.jsxs("small", {
                        className: "tnum",
                        children: [
                          l(`method.${y.method}`),
                          " · ",
                          l(`by.${y.by === "app" ? "app" : "reception"}`),
                          y.ref
                            ? ` · ${l("r.ref", { ref: c.digits(y.ref) })}`
                            : "",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("span", {
                    className: "rc-pend-end",
                    children: [
                      e.jsx("b", {
                        className: "tnum",
                        children: c.money(y.amount),
                      }),
                      e.jsx(Z, {
                        size: "sm",
                        icon: "check",
                        onClick: () => {
                          (a(Mu, y.id),
                            h(
                              l("r.toast.confirmed", {
                                method: l(`method.${y.method}`),
                                name: j ? m(j.name) : "",
                              }),
                            ));
                        },
                        children: l("r.pend.confirm"),
                      }),
                    ],
                  }),
                ],
              },
              y.id,
            );
          }),
        })
      : e.jsx(Ze, {
          icon: "hourglass",
          title: l("r.pend.emptyTitle"),
          children: l("r.pend.emptyText"),
        }),
  });
}
function kx({ onOpen: s }) {
  const { s: i, t: a, f: l, L: c } = me(),
    m = $l(),
    h = i.payments.filter((p) => p.at === xe);
  return e.jsx(bs, {
    id: "rc-today-h",
    className: "rc-todaypay",
    title: a("r.today.title"),
    end: e.jsx("span", {
      className: "rc-panel-note tnum",
      children: a("r.today.count", { n: h.length }),
    }),
    children: h.length
      ? e.jsx("ul", {
          className: "rc-paylist",
          children: h.map((p) => {
            const f = ze(i, p.memberId);
            return e.jsx(
              "li",
              {
                children: e.jsxs("button", {
                  type: "button",
                  className: "rc-payrow",
                  onClick: () => s(p.id),
                  children: [
                    e.jsx("span", {
                      className: "rc-payrow-ico",
                      children: e.jsx(M, { name: ns[p.method], size: 16 }),
                    }),
                    e.jsxs("span", {
                      className: "rc-payrow-body",
                      children: [
                        e.jsx("strong", { children: f ? c(f.name) : "" }),
                        e.jsxs("small", {
                          className: "tnum",
                          children: [
                            l.digits(p.receipt),
                            " · ",
                            p.clock != null ? l.time(p.clock) : "",
                            " · ",
                            m(p),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("span", {
                      className: "rc-payrow-end",
                      children: [
                        e.jsx("b", {
                          className: "tnum",
                          children: l.money(p.amount),
                        }),
                        e.jsx(_e, { value: p.status }),
                      ],
                    }),
                  ],
                }),
              },
              p.id,
            );
          }),
        })
      : e.jsx(Ze, {
          icon: "receipt",
          title: a("r.today.emptyTitle"),
          children: a("r.today.emptyText"),
        }),
  });
}
function Qu({ p: s, onClose: i }) {
  const { s: a, go: l, t: c, f: m, L: h, notify: p } = me(),
    f = $l(),
    y = ze(a, s.memberId),
    j = s.by === "app" ? c("by.app") : h(de(as, Ka).name),
    C = y && s.at === xe && Il(a, y.id).ok,
    v =
      s.label === "package"
        ? a.packagePurchases.find(
            (g) => g.memberId === s.memberId && g.packageId === s.packageId,
          )
        : null;
  return e.jsx(et, {
    title: c("r.rc.title"),
    onClose: i,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, {
          variant: "ghost",
          icon: "receipt",
          onClick: () => p(c("r.rc.printed")),
          children: c("r.rc.print"),
        }),
        e.jsx(Z, {
          variant: C ? "secondary" : "primary",
          onClick: i,
          children: c("done"),
        }),
        C &&
          e.jsx(Z, {
            icon: "door",
            onClick: () => {
              (i(), l("reception", "desk", y.id));
            },
            children: c("r.rc.toDesk"),
          }),
      ],
    }),
    children: e.jsxs("article", {
      className: "rc-receipt",
      "aria-label": c("r.rc.title"),
      children: [
        e.jsxs("header", {
          className: "rc-receipt-head",
          children: [
            e.jsxs("span", {
              className: "rc-receipt-gym",
              children: [
                e.jsx("strong", { children: h(a.gym.name) }),
                e.jsx("small", { children: h(a.gym.branch) }),
              ],
            }),
            e.jsxs("span", {
              className: "rc-receipt-no",
              children: [
                e.jsx("b", {
                  className: "tnum",
                  children: m.digits(s.receipt),
                }),
                e.jsxs("small", {
                  className: "tnum",
                  children: [
                    m.date(s.at, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }),
                    s.clock != null ? ` · ${m.time(s.clock)}` : "",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("dl", {
          className: "rc-receipt-lines",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("dt", { children: c("r.rc.member") }),
                e.jsx("dd", {
                  children: y ? `${h(y.name)} · ${m.digits(y.code)}` : "",
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("dt", { children: c("r.pay.item") }),
                e.jsx("dd", { children: f(s) }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsx("dt", { children: c("r.pay.method") }),
                e.jsxs("dd", {
                  children: [
                    c(`method.${s.method}`),
                    s.ref ? ` · ${c("r.ref", { ref: m.digits(s.ref) })}` : "",
                  ],
                }),
              ],
            }),
            s.label === "renewal" &&
              y &&
              e.jsxs("div", {
                children: [
                  e.jsx("dt", {
                    children:
                      s.status === "paid"
                        ? c("r.rc.validUntil")
                        : c("r.rc.startsWhen"),
                  }),
                  e.jsx("dd", {
                    className: "tnum",
                    children:
                      s.status === "paid"
                        ? m.date(y.end, {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        : c("r.rc.onConfirm"),
                  }),
                ],
              }),
            v &&
              e.jsxs("div", {
                children: [
                  e.jsx("dt", { children: c("r.pkg.expires") }),
                  e.jsx("dd", {
                    className: "tnum",
                    children: m.date(v.expires, {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }),
                  }),
                ],
              }),
            e.jsxs("div", {
              children: [
                e.jsx("dt", { children: c("r.rc.cashier") }),
                e.jsx("dd", { children: j }),
              ],
            }),
          ],
        }),
        e.jsxs("div", {
          className: "rc-receipt-total",
          children: [
            e.jsx("span", { children: c("r.rc.total") }),
            e.jsx("b", { className: "tnum", children: m.money(s.amount) }),
          ],
        }),
        e.jsxs("p", {
          className: `rc-receipt-status is-${s.status}`,
          children: [
            e.jsx(M, {
              name: s.status === "paid" ? "ok" : "hourglass",
              size: 18,
            }),
            s.status === "paid"
              ? c("r.rc.paid", { method: c(`method.${s.method}`) })
              : c(`r.rc.pending.${s.method}`),
          ],
        }),
        e.jsxs("p", {
          className: "rc-receipt-foot",
          children: [
            y != null && y.app
              ? `${c("r.rc.inApp", { name: h(y.name).split(" ")[0] })} · `
              : "",
            c("r.rc.foot"),
          ],
        }),
      ],
    }),
  });
}
function bx({ onClose: s }) {
  const { s: i, t: a, f: l, notify: c } = me(),
    m = Bu(i),
    [h, p] = V.useState(""),
    f = Number(h.replace(/\D/g, "")),
    y = h ? f - m.cash : null;
  return e.jsxs(et, {
    title: a("r.shift.closeTitle"),
    onClose: s,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, { variant: "ghost", onClick: s, children: a("cancel") }),
        e.jsx(Z, {
          icon: "lock",
          disabled: !h,
          onClick: () => {
            (c(a("r.shift.closedToast")), s());
          },
          children: a("r.shift.confirm"),
        }),
      ],
    }),
    children: [
      e.jsxs("dl", {
        className: "rc-receipt-lines",
        children: [
          ["cash", "card", "instapay", "fawry"].map((j) =>
            e.jsxs(
              "div",
              {
                children: [
                  e.jsx("dt", { children: a(`method.${j}`) }),
                  e.jsx("dd", { className: "tnum", children: l.money(m[j]) }),
                ],
              },
              j,
            ),
          ),
          e.jsxs("div", {
            className: "rc-line-strong",
            children: [
              e.jsx("dt", { children: a("r.shift.total") }),
              e.jsx("dd", { className: "tnum", children: l.money(m.total) }),
            ],
          }),
          m.pending.length > 0 &&
            e.jsxs("div", {
              children: [
                e.jsx("dt", { children: a("r.shift.pending") }),
                e.jsx("dd", {
                  className: "tnum",
                  children: a("r.shift.pendingN", { n: m.pending.length }),
                }),
              ],
            }),
        ],
      }),
      e.jsx(It, {
        label: a("r.shift.counted"),
        hint: a("r.shift.countedHint"),
        children: e.jsx("input", {
          value: h,
          onChange: (j) =>
            p(
              j.target.value
                .replace(/[^\d٠-٩]/g, "")
                .replace(/[٠-٩]/g, (C) => "٠١٢٣٤٥٦٧٨٩".indexOf(C)),
            ),
          inputMode: "numeric",
          placeholder: String(m.cash),
          dir: "ltr",
        }),
      }),
      y != null &&
        e.jsxs("p", {
          className: `rc-diff ${y === 0 ? "is-ok" : "is-bad"}`,
          children: [
            e.jsx(M, { name: y === 0 ? "ok" : "warn", size: 18 }),
            y === 0
              ? a("r.shift.match")
              : a(y > 0 ? "r.shift.over" : "r.shift.short", {
                  amount: l.money(Math.abs(y)),
                }),
          ],
        }),
    ],
  });
}
const wx = ["all", "active", "expiring", "expired", "frozen", "noapp"],
  uu = (s, i, a) =>
    a === "all" ? !0 : a === "noapp" ? !i.app : lt(s, i) === a;
function Nx({ param: s }) {
  const { s: i, go: a, t: l, f: c } = me(),
    [m, h] = V.useState(""),
    [p, f] = V.useState("all"),
    y = V.useRef(null),
    j = s ? ze(i, s) : null,
    C = m.trim() ? ac(i, m) : i.members,
    v = C.filter((b) => uu(i, b, p)),
    g = i.members.filter((b) => b.app).length,
    N = Math.round((g / i.members.length) * 100),
    k = (b) => {
      var w;
      (a("reception", "members", b),
        (w = window.matchMedia) != null &&
          w.call(window, "(max-width: 760px)").matches &&
          setTimeout(() => {
            var S;
            return (S = y.current) == null
              ? void 0
              : S.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 60));
    };
  return e.jsx("div", {
    className: "rc-page rc-members",
    children: e.jsxs("div", {
      className: `rc-members-grid ${j ? "has-sel" : ""}`,
      children: [
        e.jsxs(bs, {
          className: "rc-mlist",
          id: "rc-mlist-h",
          title: l("r.mem.title"),
          end: e.jsx("span", {
            className: "rc-panel-note tnum",
            children: l("membersN", { n: i.members.length }),
          }),
          children: [
            e.jsx(nc, { value: m, onChange: h, placeholder: l("r.search.ph") }),
            e.jsx("div", {
              className: "rc-chips",
              role: "group",
              "aria-label": l("r.mem.filter"),
              children: wx.map((b) => {
                const w = C.filter((S) => uu(i, S, b)).length;
                return e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: p === b ? "on" : "",
                    "aria-pressed": p === b,
                    onClick: () => f(b),
                    children: [
                      l(`r.mem.f.${b}`),
                      " ",
                      e.jsx("span", { className: "tnum", children: c.num(w) }),
                    ],
                  },
                  b,
                );
              }),
            }),
            e.jsxs("div", {
              className: "rc-list rc-mlist-scroll",
              children: [
                v.map((b) =>
                  e.jsx(
                    Nl,
                    {
                      m: b,
                      on: (j == null ? void 0 : j.id) === b.id,
                      onClick: () => k(b.id),
                      end: e.jsxs("span", {
                        className: "rc-mline-end",
                        children: [
                          !b.app &&
                            e.jsx("span", {
                              className: "rc-noapp",
                              children: l("r.app.no"),
                            }),
                          lt(i, b) === "frozen"
                            ? e.jsx(ge, {
                                tone: "frost",
                                icon: "snow",
                                children: l("status.frozen"),
                              })
                            : e.jsx(_e, { value: lt(i, b) }),
                        ],
                      }),
                    },
                    b.id,
                  ),
                ),
                !v.length &&
                  e.jsx(Ze, {
                    icon: "search",
                    title: l("r.search.none"),
                    action: e.jsx(Z, {
                      variant: "secondary",
                      size: "sm",
                      icon: "userPlus",
                      onClick: () => a("reception", "payments", "new"),
                      children: l("r.search.register"),
                    }),
                    children: l("r.mem.noneText"),
                  }),
              ],
            }),
            e.jsxs("div", {
              className: "rc-activation",
              children: [
                e.jsxs("span", {
                  className: "rc-activation-top",
                  children: [
                    e.jsx("strong", { children: l("r.mem.activation") }),
                    e.jsx("b", { className: "tnum", children: c.pct(N) }),
                  ],
                }),
                e.jsx(tr, {
                  value: N,
                  max: 100,
                  tone: "lime",
                  label: l("r.mem.activation"),
                }),
                e.jsx("small", {
                  children: l("r.mem.activationSub", {
                    a: g,
                    b: i.members.length,
                    target: c.pct(40),
                  }),
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          ref: y,
          className: "rc-detail-anchor",
          children: j
            ? e.jsx(Sx, { m: j }, j.id)
            : e.jsx("section", {
                className: "rc-card rc-card-empty",
                children: e.jsx(Ze, {
                  icon: "users",
                  title: l("r.mem.emptyTitle"),
                  children: l("r.mem.emptyText"),
                }),
              }),
        }),
      ],
    }),
  });
}
function Sx({ m: s }) {
  const { s: i, act: a, go: l, t: c, f: m, L: h, notify: p } = me(),
    f = $l(),
    [y, j] = V.useState(null),
    [C, v] = V.useState(null),
    g = h(s.name),
    N = lt(i, s),
    k = En(s),
    b = Mn(s),
    w = ks(i, s),
    S = Za(s),
    ae = i.visits
      .filter((z) => z.memberId === s.id)
      .sort((z, F) => F.inAt - z.inAt),
    _ = i.payments.filter((z) => z.memberId === s.id),
    L = i.bookings
      .filter((z) => z.memberId === s.id && z.status !== "cancelled")
      .map((z) => ({ b: z, sess: de(i.sessions, z.sessionId) }))
      .filter((z) => z.sess)
      .sort((z, F) => bt(z.sess) - bt(F.sess)),
    G = i.packagePurchases.filter(
      (z) => z.memberId === s.id && z.remaining > 0,
    ),
    H = i.guests.filter((z) => z.hostId === s.id),
    O = Uu(s),
    R = s.freeze && xe < s.freeze.start,
    K = s.freeze && xe >= O,
    E = qt(i, s.id);
  return e.jsxs("section", {
    className: "rc-card rc-detail",
    "aria-labelledby": "rc-detail-name",
    children: [
      e.jsxs("div", {
        className: "rc-id rc-id-detail",
        children: [
          e.jsx(Ke, {
            name: g,
            size: "lg",
            tone: s.gender === "F" ? "ladies" : "",
          }),
          e.jsxs("div", {
            className: "rc-id-body",
            children: [
              e.jsx("h2", { id: "rc-detail-name", children: g }),
              e.jsxs("p", {
                className: "tnum",
                children: [
                  m.digits(s.code),
                  " · ",
                  e.jsx("span", { dir: "ltr", children: m.digits(s.phone) }),
                ],
              }),
              e.jsxs("p", {
                className: "rc-id-tags",
                children: [
                  N === "frozen"
                    ? e.jsx(ge, {
                        tone: "frost",
                        icon: "snow",
                        children: c("status.frozen"),
                      })
                    : e.jsx(ge, {
                        tone:
                          N === "active"
                            ? "ok"
                            : N === "expired"
                              ? "bad"
                              : "warn",
                        children: c(`status.${N}`),
                      }),
                  e.jsxs(ge, {
                    tone: s.gender === "F" ? "ladies" : "neutral",
                    children: [
                      c(`gender.${s.gender}`),
                      " · ",
                      c("r.age", { n: s.age }),
                    ],
                  }),
                  e.jsx(ge, {
                    children: c("r.mem.since", {
                      date: m.date(`${s.since}-01`, {
                        month: "short",
                        year: "numeric",
                      }),
                    }),
                  }),
                  E &&
                    e.jsx(ge, {
                      tone: "lime",
                      icon: "door",
                      children: c("r.mem.inside", { time: m.time(E.inAt) }),
                    }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "rc-id-actions",
            children: [
              e.jsx(Z, {
                variant: "secondary",
                icon: "door",
                onClick: () => l("reception", "desk", s.id),
                children: c("r.mem.toDesk"),
              }),
              e.jsx(Z, {
                icon: "card",
                onClick: () => l("reception", "payments", s.id),
                children: c(N === "expired" ? "r.v.renew" : "r.mem.toPay"),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("dl", {
        className: "rc-facts rc-facts-4",
        children: [
          e.jsxs(hn, {
            label: c("r.f.plan"),
            children: [
              h(k.name),
              " ",
              e.jsx("small", { className: "tnum", children: m.money(k.price) }),
            ],
          }),
          e.jsx(hn, {
            label: c("r.f.period"),
            children: e.jsxs("span", {
              className: "tnum",
              children: [m.date(s.start), " – ", m.date(s.end)],
            }),
          }),
          e.jsx(hn, {
            label: b >= 0 ? c("r.f.remaining") : c("status.expired"),
            tone: N === "expired" ? "bad" : N === "expiring" ? "warn" : "",
            children: e.jsx("span", {
              className: "tnum",
              children:
                b >= 0
                  ? c("r.f.daysLeft", { n: b })
                  : c("r.f.daysAgo", { n: -b }),
            }),
          }),
          e.jsxs(hn, {
            label: c("r.f.noshows"),
            tone: s.noShows >= i.settings.noShowLimit ? "bad" : "",
            children: [
              e.jsx("span", {
                className: "tnum",
                children: c("of", {
                  a: m.num(s.noShows),
                  b: m.num(i.settings.noShowLimit),
                }),
              }),
              s.noShows >= i.settings.noShowLimit &&
                e.jsx("small", { children: c("r.mem.paused") }),
            ],
          }),
        ],
      }),
      e.jsxs("ul", {
        className: "rc-actrows",
        children: [
          e.jsxs("li", {
            className: "rc-actrow",
            children: [
              e.jsx("span", {
                className: `row-icon ${s.freeze && !K ? "frost" : "plain"}`,
                children: e.jsx(M, { name: "snow", size: 18 }),
              }),
              e.jsxs("span", {
                className: "rc-actrow-body",
                children: [
                  e.jsx("strong", { children: c("r.fz.title") }),
                  e.jsx("small", {
                    className: "tnum",
                    children:
                      s.freeze && !K
                        ? c(R ? "r.fz.planned" : "r.fz.current", {
                            from: m.date(s.freeze.start),
                            to: m.date(O),
                            n: s.freeze.days,
                          })
                        : c("r.fz.left", {
                            n: w,
                            max: i.settings.freezeDaysPerYear,
                          }),
                  }),
                ],
              }),
              s.freeze && !K
                ? e.jsx(Z, {
                    variant: "secondary",
                    icon: "snow",
                    onClick: () => j("unfreeze"),
                    children: c("r.fz.end"),
                  })
                : e.jsx(Z, {
                    variant: "secondary",
                    icon: "snow",
                    disabled: w < 1 || N === "expired",
                    onClick: () => j("freeze"),
                    children: c("r.fz.apply"),
                  }),
            ],
          }),
          e.jsxs("li", {
            className: "rc-actrow",
            children: [
              e.jsx("span", {
                className: "row-icon plain",
                children: e.jsx(M, { name: "userPlus", size: 18 }),
              }),
              e.jsxs("span", {
                className: "rc-actrow-body",
                children: [
                  e.jsx("strong", { children: c("r.gs.title") }),
                  e.jsxs("small", {
                    className: "tnum",
                    children: [
                      c("r.gs.left", { a: S, b: k.guestPasses }),
                      H.length > 0 &&
                        ` · ${c("r.gs.today", { names: H.map((z) => z.name).join(i.lang === "ar" ? "، " : ", ") })}`,
                    ],
                  }),
                ],
              }),
              e.jsx(Z, {
                variant: "secondary",
                icon: "userPlus",
                disabled: S < 1 || N === "expired" || N === "frozen",
                onClick: () => j("guest"),
                children: c("r.gs.register"),
              }),
            ],
          }),
          e.jsxs("li", {
            className: `rc-actrow ${s.app ? "" : "is-nudge"}`,
            children: [
              e.jsx("span", {
                className: `row-icon ${s.app ? "" : "lime"}`,
                children: e.jsx(M, { name: "phone", size: 18 }),
              }),
              e.jsxs("span", {
                className: "rc-actrow-body",
                children: [
                  e.jsx("strong", {
                    children: s.app ? c("r.app.yes") : c("r.app.notYet"),
                  }),
                  e.jsx("small", {
                    children: s.app ? c("r.app.yesSub") : c("r.app.noSub"),
                  }),
                ],
              }),
              !s.app &&
                e.jsx(Z, {
                  variant: "accent",
                  icon: "qr",
                  onClick: () => j("install"),
                  children: c("r.app.help"),
                }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "rc-activity",
        children: [
          e.jsxs("div", {
            className: "rc-act-col",
            children: [
              e.jsx("h3", { children: c("r.mem.visits") }),
              ae.length
                ? e.jsx("ul", {
                    className: "rc-mini",
                    children: ae.map((z) =>
                      e.jsxs(
                        "li",
                        {
                          children: [
                            e.jsx(M, { name: ns[z.method] || "qr", size: 15 }),
                            e.jsxs("span", {
                              className: "tnum",
                              children: [
                                c("today"),
                                " · ",
                                m.time(z.inAt),
                                " – ",
                                z.outAt != null
                                  ? m.time(z.outAt)
                                  : c("r.mem.now"),
                              ],
                            }),
                            e.jsx("small", {
                              children: z.auto
                                ? c("r.mem.autoOut")
                                : c(`by.${z.by}`),
                            }),
                          ],
                        },
                        z.id,
                      ),
                    ),
                  })
                : e.jsx("p", {
                    className: "rc-none",
                    children: c("r.mem.noVisits"),
                  }),
              e.jsx("h3", { children: c("r.mem.bookings") }),
              L.length || G.length
                ? e.jsxs("ul", {
                    className: "rc-mini",
                    children: [
                      L.map(({ b: z, sess: F }) =>
                        e.jsxs(
                          "li",
                          {
                            children: [
                              e.jsx(M, { name: "calendar", size: 15 }),
                              e.jsxs("span", {
                                className: "tnum",
                                children: [
                                  F.day === 0 ? c("today") : m.weekday(ea(F)),
                                  " · ",
                                  m.clock(F.time),
                                  " · ",
                                  h(F.title),
                                ],
                              }),
                              e.jsx(_e, { value: z.status }),
                            ],
                          },
                          z.id,
                        ),
                      ),
                      G.map((z) =>
                        e.jsxs(
                          "li",
                          {
                            children: [
                              e.jsx(M, { name: "dumbbell", size: 15 }),
                              e.jsx("span", {
                                children: c("r.mem.pkg", {
                                  trainer: h(de(dt, z.trainerId).name),
                                }),
                              }),
                              e.jsx("small", {
                                className: "tnum",
                                children: c("r.f.pkgLeft", { n: z.remaining }),
                              }),
                            ],
                          },
                          z.id,
                        ),
                      ),
                    ],
                  })
                : e.jsx("p", {
                    className: "rc-none",
                    children: c("r.mem.noBookings"),
                  }),
            ],
          }),
          e.jsxs("div", {
            className: "rc-act-col",
            children: [
              e.jsx("h3", { children: c("r.mem.payments") }),
              _.length
                ? e.jsx("ul", {
                    className: "rc-mini",
                    children: _.map((z) =>
                      e.jsx(
                        "li",
                        {
                          children: e.jsxs("button", {
                            type: "button",
                            className: "rc-mini-btn",
                            onClick: () => v(z.id),
                            children: [
                              e.jsx(M, { name: ns[z.method], size: 15 }),
                              e.jsxs("span", {
                                children: [
                                  e.jsxs("span", {
                                    className: "tnum",
                                    children: [
                                      z.at === xe ? c("today") : m.date(z.at),
                                      " · ",
                                      f(z),
                                    ],
                                  }),
                                  e.jsxs("small", {
                                    className: "tnum",
                                    children: [
                                      m.digits(z.receipt),
                                      " · ",
                                      c(`method.${z.method}`),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("span", {
                                className: "rc-mini-end",
                                children: [
                                  e.jsx("b", {
                                    className: "tnum",
                                    children: m.money(z.amount),
                                  }),
                                  e.jsx(_e, { value: z.status }),
                                ],
                              }),
                            ],
                          }),
                        },
                        z.id,
                      ),
                    ),
                  })
                : e.jsx("p", {
                    className: "rc-none",
                    children: c("r.mem.noPayments"),
                  }),
            ],
          }),
        ],
      }),
      e.jsxs("p", {
        className: "rc-card-note",
        children: [e.jsx(M, { name: "info", size: 16 }), c("r.mem.sample")],
      }),
      y === "freeze" && e.jsx(Cx, { m: s, onClose: () => j(null) }),
      y === "unfreeze" &&
        e.jsx(et, {
          title: c("r.fz.endTitle", { name: g }),
          onClose: () => j(null),
          footer: e.jsxs(e.Fragment, {
            children: [
              e.jsx(Z, {
                variant: "ghost",
                onClick: () => j(null),
                children: c("cancel"),
              }),
              e.jsx(Z, {
                icon: "snow",
                onClick: () => {
                  (a(ec, s.id), p(c("r.toast.unfrozen", { name: g })), j(null));
                },
                children: c("r.fz.end"),
              }),
            ],
          }),
          children: e.jsx("p", {
            children: c("r.fz.endText", {
              n: R ? s.freeze.days : Math.max(0, Ks(xe, O)),
              date: m.date(
                Ye(s.end, -(R ? s.freeze.days : Math.max(0, Ks(xe, O)))),
                { day: "numeric", month: "long" },
              ),
            }),
          }),
        }),
      y === "guest" && e.jsx(zx, { m: s, onClose: () => j(null) }),
      y === "install" &&
        e.jsx(Tx, {
          m: s,
          onClose: () => j(null),
          onDone: () => {
            (a(lx, s.id), p(c("r.toast.installed", { name: g })), j(null));
          },
        }),
      C && e.jsx(Qu, { p: de(i.payments, C), onClose: () => v(null) }),
    ],
  });
}
function Cx({ m: s, onClose: i }) {
  const { s: a, act: l, t: c, f: m, L: h, notify: p } = me(),
    f = ks(a, s),
    [y, j] = V.useState(0),
    [C, v] = V.useState(Math.min(7, f)),
    g = Ye(xe, y),
    N = Ye(g, C),
    k = y === 0 && qt(a, s.id),
    b = [7, 14, 30].filter((w) => w <= f);
  return e.jsxs(et, {
    title: c("r.fz.sheet", { name: h(s.name) }),
    onClose: i,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, { variant: "ghost", onClick: i, children: c("cancel") }),
        e.jsx(Z, {
          icon: "snow",
          disabled: C < 1,
          onClick: () => {
            (l(Pu, s.id, y, C),
              p(c("r.toast.frozen", { name: h(s.name), n: C })),
              i());
          },
          children: c("r.fz.confirm", { n: C }),
        }),
      ],
    }),
    children: [
      e.jsxs("div", {
        className: "field",
        children: [
          e.jsx("span", {
            className: "field-label",
            children: c("r.fz.starts"),
          }),
          e.jsx(nt, {
            size: "block",
            value: y,
            onChange: j,
            label: c("r.fz.starts"),
            options: [
              { value: 0, label: c("today") },
              { value: 1, label: c("tomorrow") },
              { value: 7, label: c("r.fz.nextWeek") },
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "field",
        children: [
          e.jsx("span", {
            className: "field-label",
            children: c("r.fz.length"),
          }),
          e.jsxs("div", {
            className: "rc-stepper",
            children: [
              e.jsx(yn, {
                icon: "minus",
                label: c("r.fz.less"),
                disabled: C <= 1,
                onClick: () => v((w) => Math.max(1, w - 1)),
              }),
              e.jsx("output", {
                className: "tnum",
                "aria-live": "polite",
                children: c("daysN", { n: C }),
              }),
              e.jsx(yn, {
                icon: "plus",
                label: c("r.fz.more"),
                disabled: C >= f,
                onClick: () => v((w) => Math.min(f, w + 1)),
              }),
              e.jsx("span", {
                className: "rc-presets",
                children: b.map((w) =>
                  e.jsx(
                    "button",
                    {
                      type: "button",
                      className: C === w ? "on" : "",
                      "aria-pressed": C === w,
                      onClick: () => v(w),
                      children: c("daysN", { n: w }),
                    },
                    w,
                  ),
                ),
              }),
            ],
          }),
          e.jsx("small", {
            className: "field-hint",
            children: c("r.fz.policy", {
              n: f,
              max: a.settings.freezeDaysPerYear,
            }),
          }),
        ],
      }),
      e.jsxs("dl", {
        className: "rc-receipt-lines rc-preview",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("r.fz.period") }),
              e.jsxs("dd", {
                className: "tnum",
                children: [m.date(g), " ", mu(a.lang), " ", m.date(N)],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("r.fz.newEnd") }),
              e.jsxs("dd", {
                className: "tnum",
                children: [
                  m.date(s.end),
                  " ",
                  mu(a.lang),
                  " ",
                  e.jsx("b", {
                    children: m.date(Ye(s.end, C), {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("r.fz.after") }),
              e.jsx("dd", {
                className: "tnum",
                children: c("daysN", { n: f - C }),
              }),
            ],
          }),
        ],
      }),
      k &&
        e.jsxs("p", {
          className: "rc-note is-warn",
          children: [
            e.jsx(M, { name: "door", size: 16 }),
            c("r.fz.insideNote"),
          ],
        }),
      e.jsxs("p", {
        className: "rc-note",
        children: [e.jsx(M, { name: "shield", size: 16 }), c("r.fz.audit")],
      }),
    ],
  });
}
function zx({ m: s, onClose: i }) {
  const { act: a, t: l, L: c, notify: m } = me(),
    [h, p] = V.useState(""),
    f = Za(s),
    y = h.trim().length >= 3,
    j = () => {
      y &&
        (a($f, s.id, h),
        m(l("r.toast.guest", { guest: h.trim(), name: c(s.name) })),
        i());
    };
  return e.jsxs(et, {
    title: l("r.gs.sheet", { name: c(s.name) }),
    onClose: i,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, { variant: "ghost", onClick: i, children: l("cancel") }),
        e.jsx(Z, {
          icon: "userPlus",
          disabled: !y,
          onClick: j,
          children: l("r.gs.confirm"),
        }),
      ],
    }),
    children: [
      e.jsx(It, {
        label: l("r.gs.name"),
        hint: l("r.gs.hint"),
        children: e.jsx("input", {
          value: h,
          onChange: (C) => p(C.target.value),
          placeholder: l("r.gs.namePh"),
          autoFocus: !0,
          autoComplete: "off",
          onKeyDown: (C) => C.key === "Enter" && j(),
        }),
      }),
      e.jsxs("p", {
        className: "rc-note",
        children: [
          e.jsx(M, { name: "ticket", size: 16 }),
          l("r.gs.after", { n: f - 1 }),
        ],
      }),
    ],
  });
}
function Tx({ m: s, onClose: i, onDone: a }) {
  const { t: l, f: c, L: m, notify: h } = me();
  return e.jsxs(et, {
    title: l("r.app.sheet"),
    onClose: i,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, {
          variant: "ghost",
          icon: "send",
          onClick: () => h(l("r.app.smsToast", { phone: c.digits(s.phone) })),
          children: l("r.app.sms"),
        }),
        e.jsx(Z, { icon: "check", onClick: a, children: l("r.app.done") }),
      ],
    }),
    children: [
      e.jsxs("div", {
        className: "rc-install",
        children: [
          e.jsx("span", {
            className: "rc-install-qr",
            children: e.jsx(qu, { value: `FORMA-INVITE|${s.code}`, size: 150 }),
          }),
          e.jsxs("ol", {
            className: "rc-steps",
            children: [
              e.jsxs("li", {
                children: [
                  e.jsx("b", { className: "tnum", children: c.num(1) }),
                  e.jsx("span", { children: l("r.app.s1") }),
                ],
              }),
              e.jsxs("li", {
                children: [
                  e.jsx("b", { className: "tnum", children: c.num(2) }),
                  e.jsx("span", {
                    children: l("r.app.s2", { phone: c.digits(s.phone) }),
                  }),
                ],
              }),
              e.jsxs("li", {
                children: [
                  e.jsx("b", { className: "tnum", children: c.num(3) }),
                  e.jsx("span", { children: l("r.app.s3") }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("p", {
        className: "rc-note",
        children: [
          e.jsx(M, { name: "target", size: 16 }),
          l("r.app.why", { name: m(s.name).split(" ")[0] }),
        ],
      }),
    ],
  });
}
const Yu = [
    { id: "desk", icon: "scan", label: "r.nav.desk" },
    { id: "payments", icon: "cash", label: "r.nav.payments" },
    { id: "members", icon: "users", label: "r.nav.members" },
  ],
  Mx = {
    desk: {
      phase: "pilot",
      ref: "§4 Roles · §6 Entry",
      lead: "r.p.desk.lead",
      points: ["r.p.desk.1", "r.p.desk.2", "r.p.desk.3"],
      tries: [
        {
          label: "r.try.offline",
          icon: "wifiOff",
          run: (s) => bl(s, !1),
          disabled: (s) => !s.online,
        },
        { label: "r.try.clock", icon: "timer", run: (s) => ts(s, 30) },
        { label: "r.try.pass", icon: "qr", go: ["member", "pass"] },
      ],
    },
    payments: {
      phase: "pilot",
      ref: "§4 Roles · §6 Payments",
      lead: "r.p.pay.lead",
      points: ["r.p.pay.1", "r.p.pay.2", "r.p.pay.3"],
      tries: [
        {
          label: "r.try.instapay",
          icon: "phone",
          run: (s) => er(s, "m3", "monthly", "instapay", "app"),
          disabled: (s) =>
            s.payments.some(
              (i) => i.memberId === "m3" && i.status === "pending",
            ),
        },
        {
          label: "r.try.renewAhmed",
          icon: "card",
          go: ["reception", "payments", "m4"],
        },
        { label: "r.try.admin", icon: "chart", go: ["admin", "overview"] },
      ],
    },
    members: {
      phase: "pilot",
      ref: "§4 Roles · §6 Freeze",
      lead: "r.p.mem.lead",
      points: ["r.p.mem.1", "r.p.mem.2", "r.p.mem.3"],
      tries: [
        {
          label: "r.try.install",
          icon: "qr",
          go: ["reception", "members", "m4"],
        },
        { label: "r.try.memberFreeze", icon: "snow", go: ["member", "me"] },
        {
          label: "r.try.activation",
          icon: "target",
          go: ["admin", "overview"],
        },
      ],
    },
  },
  Px = { desk: Vu, payments: px, members: Nx };
function Ex({ page: s, param: i }) {
  const { s: a, act: l, go: c, t: m, f: h, L: p, notify: f } = me(),
    y = Px[s] || Vu,
    j = V.useRef(null),
    C = a.payments.filter((g) => g.status === "pending").length,
    v = de(as, Ka);
  return (
    V.useEffect(() => {
      var g;
      (g = j.current) == null || g.scrollTo({ top: 0 });
    }, [s]),
    e.jsxs("div", {
      className: "rc-app",
      children: [
        e.jsxs("header", {
          className: "rc-top",
          children: [
            e.jsxs("div", {
              className: "rc-brand",
              children: [
                e.jsx("span", {
                  className: "rc-brand-mark",
                  "aria-hidden": "true",
                  children: e.jsx(M, { name: "tablet", size: 18 }),
                }),
                e.jsxs("span", {
                  className: "rc-brand-text",
                  children: [
                    e.jsx("strong", { children: m("r.top.title") }),
                    e.jsxs("small", {
                      children: [
                        p(a.gym.name),
                        " · ",
                        p(a.gym.branch).split(" · ")[0],
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("nav", {
              className: "rc-nav",
              "aria-label": m("r.nav.label"),
              children: Yu.map((g) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: s === g.id ? "on" : "",
                    "aria-current": s === g.id ? "page" : void 0,
                    onClick: () => c("reception", g.id),
                    children: [
                      e.jsx(M, { name: g.icon, size: 19 }),
                      e.jsx("span", {
                        className: "rc-nav-label",
                        children: m(g.label),
                      }),
                      g.id === "payments" &&
                        C > 0 &&
                        e.jsx("span", {
                          className: "rc-nav-badge tnum",
                          "aria-label": m("r.nav.pending", { n: C }),
                          children: h.num(C),
                        }),
                    ],
                  },
                  g.id,
                ),
              ),
            }),
            e.jsxs("div", {
              className: "rc-top-end",
              children: [
                e.jsxs("button", {
                  type: "button",
                  className: `rc-net ${a.online ? "" : "is-off"}`,
                  onClick: () => {
                    (l(bl, !a.online),
                      f(
                        a.online
                          ? m("r.net.wentToast")
                          : m("r.net.backToast", { n: a.offlineQueue.length }),
                        a.online ? "bad" : "ok",
                      ));
                  },
                  title: m(a.online ? "r.net.simulate" : "r.net.reconnect"),
                  children: [
                    e.jsx(M, { name: a.online ? "wifi" : "wifiOff", size: 16 }),
                    e.jsx("span", {
                      children: m(a.online ? "r.net.online" : "r.net.offline"),
                    }),
                  ],
                }),
                e.jsxs("span", {
                  className: "rc-staff",
                  children: [
                    e.jsx(Ke, { initials: "KN", size: "sm", tone: "lime" }),
                    e.jsxs("span", {
                      className: "rc-staff-text",
                      children: [
                        e.jsx("strong", { children: p(v.name) }),
                        e.jsx("small", {
                          children: m("r.top.shift", {
                            from: Hu(h.clock("14:00"), h.clock("22:00")),
                            to: "",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        !a.online &&
          e.jsxs("div", {
            className: "rc-offline",
            role: "status",
            children: [
              e.jsx(M, { name: "wifiOff", size: 20 }),
              e.jsxs("span", {
                className: "rc-offline-text",
                children: [
                  e.jsx("strong", { children: m("r.off.title") }),
                  e.jsx("span", {
                    children: m("r.off.text", { n: a.offlineQueue.length }),
                  }),
                ],
              }),
              e.jsx(Z, {
                size: "sm",
                variant: "accent",
                icon: "wifi",
                onClick: () => {
                  (l(bl, !0),
                    f(m("r.net.backToast", { n: a.offlineQueue.length })));
                },
                children: m("r.net.reconnect"),
              }),
            ],
          }),
        e.jsx("main", {
          className: "rc-main",
          ref: j,
          children: e.jsx(y, { param: i }),
        }),
      ],
    })
  );
}
const Oe = Nf,
  Xs = 60,
  Ix = () => de(dt, Oe),
  na = (s) => s.members.filter((i) => i.trainerId === Oe),
  Ku = (s, i) => na(s).some((a) => a.id === i),
  ss = (s) => s.day * 1440 + Ve(s.time),
  Ya = (s) =>
    s.ptSessions
      .filter((i) => i.trainerId === Oe)
      .sort((i, a) => ss(i) - ss(a)),
  Sl = (s, i) => Ya(s).filter((a) => a.memberId === i),
  Zu = (s, i) =>
    Sl(s, i).find((a) => a.status === "scheduled" && ss(a) + Xs > s.clock) ||
    Sl(s, i).find((a) => a.status === "scheduled");
function Ol(s, i) {
  if (i.status !== "scheduled") return i.status;
  const a = ss(i);
  return s.clock >= a + Xs ? "due" : s.clock >= a ? "live" : "upcoming";
}
const Ho = (s) =>
    s.sessions.filter((i) => i.trainerId === Oe).sort((i, a) => bt(i) - bt(a)),
  Xu = (s, i) => i.cap - Pn(s, i),
  Ju = (s) => s.packagePurchases.filter((i) => i.trainerId === Oe),
  Rl = (s, i) => en(s, i, Oe) || Ju(s).find((a) => a.memberId === i),
  zn = (s) => de(Jt, s.packageId),
  Lx = (s) => s.settings.trainerSharePct / 100,
  Js = (s, i) => Math.round(i * Lx(s));
function Ax(s, i) {
  const a = s.visits
      .filter((h) => h.memberId === i)
      .sort((h, p) => p.inAt - h.inAt)[0],
    l = s.bookings
      .filter((h) => h.memberId === i && h.status === "attended")
      .map((h) => de(s.sessions, h.sessionId))
      .filter((h) => h && h.day === 0)
      .sort((h, p) => Ve(p.time) - Ve(h.time))[0],
    c = a ? a.inAt : -1,
    m = l ? Ve(l.time) : -1;
  return c < 0 && m < 0
    ? null
    : c >= m
      ? { kind: "visit", at: c, active: a.outAt == null }
      : { kind: "class", at: m, sess: l };
}
function $x(s, i) {
  return i !== be || !s.consent.wearable
    ? "none"
    : s.consent.shareWithTrainer
      ? "shared"
      : "notShared";
}
const ep = new Set(["msg2"]),
  Ox = (s) => s.forEach((i) => ep.add(i)),
  nr = (s, i) => s.messages.filter((a) => a.thread === i);
function rc(s, i) {
  const a = nr(s, i);
  let l = 0;
  for (let c = a.length - 1; c >= 0 && a[c].from !== Oe; c--)
    ep.has(a[c].id) || l++;
  return l;
}
const Rx = (s) => na(s).reduce((i, a) => i + rc(s, a.id), 0);
function tp(s, i, a, l, c = {}) {
  const m = (j) =>
      Qa[j][l].replace(/\{(\w+)\}/g, (C, v) => {
        const g = c[v];
        return g == null ? "" : typeof g == "object" ? g[j] : String(g);
      }),
    h = m("en"),
    p = m("ar"),
    f = tc(s, i, a, h),
    y = f.messages.at(-1);
  return {
    ...f,
    messages: [...f.messages.slice(0, -1), { ...y, text: { en: h, ar: p } }],
  };
}
function Fx(s, i) {
  const a = de(s.ptSessions, i);
  return !a || a.status !== "scheduled"
    ? s
    : {
        ...s,
        ptSessions: s.ptSessions.map((l) =>
          l.id === i ? { ...l, status: "noshow", markedAt: s.clock } : l,
        ),
        audit: [
          {
            id: mt("a"),
            type: "ptNoShow",
            params: { memberId: a.memberId, trainerId: Oe },
            at: s.clock,
          },
          ...s.audit,
        ].slice(0, 80),
      };
}
function qx(s, i, a) {
  const l = Wf(s, i, Oe, a.en);
  return {
    ...l,
    documents: [{ ...l.documents[0], title: a }, ...l.documents.slice(1)],
  };
}
function _x(s, i, a) {
  if (!a.trim()) return s;
  const l = {
    id: mt("n"),
    memberId: i,
    trainerId: Oe,
    text: { en: a.trim(), ar: a.trim() },
    at: xe,
    clock: s.clock,
  };
  return { ...s, trainerNotes: [l, ...(s.trainerNotes || [])] };
}
const Dx = [
    {
      id: "n-seed1",
      memberId: "m1",
      at: "2026-10-19",
      text: {
        en: "Right knee: no deep flexion under load. Hip thrust progressing well, add 5 kg next week.",
        ar: "الركبة اليمنى: بدون ثني عميق تحت حمل. دفع الحوض يتحسن، نزود ٥ كجم الأسبوع الجاي.",
      },
    },
    {
      id: "n-seed2",
      memberId: "m7",
      at: "2026-10-15",
      text: {
        en: "Goal: posture and shoulder mobility for desk work. Prefers mornings on weekends.",
        ar: "الهدف: القوام وحركة الكتف بسبب الشغل على المكتب. تفضّل الصبح في الويك إند.",
      },
    },
  ],
  Hx = (s, i) => [
    ...(s.trainerNotes || []).filter(
      (a) => a.memberId === i && a.trainerId === Oe,
    ),
    ...Dx.filter((a) => a.memberId === i),
  ],
  pu = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ];
function hu(s, i, a) {
  const l = i * 1440 + Ve(a);
  return l < s.clock
    ? "past"
    : Ya(s).some(
          (h) =>
            h.status === "scheduled" && h.day === i && Math.abs(ss(h) - l) < Xs,
        )
      ? "pt"
      : Ho(s).some((h) => h.day === i && l < bt(h) + h.dur && bt(h) < l + Xs)
        ? "class"
        : null;
}
const $o = [
    {
      id: "fuel",
      title: { en: "Everyday fuelling guide", ar: "دليل التغذية اليومي" },
    },
    {
      id: "hydrate",
      title: {
        en: "Hydration on training days",
        ar: "الترطيب في أيام التمرين",
      },
    },
    {
      id: "snacks",
      title: {
        en: "Pre- and post-workout snacks",
        ar: "سناكس قبل وبعد التمرين",
      },
    },
    {
      id: "protein",
      title: {
        en: "Protein basics for women who lift",
        ar: "أساسيات البروتين للسيدات في تمارين القوة",
      },
    },
  ],
  Bo = Qo.find((s) => s.id === "pt").pts;
function sr() {
  const { t: s, f: i } = me();
  return (a, l = "long") =>
    a === 0 ? s("today") : a === 1 ? s("tomorrow") : i.weekday(Ye(xe, a), l);
}
function Bx() {
  const { s, t: i } = me();
  return (a) => {
    const l = a - s.clock;
    if (l <= 0) return null;
    const c = Math.floor(l / 60),
      m = l % 60;
    return c
      ? m
        ? i("tr.inHM", { h: c, m })
        : i("tr.inH", { h: c })
      : i("tr.inM", { m });
  };
}
function ar({ memberId: s, dark: i = !1 }) {
  const { s: a, t: l, f: c } = me(),
    m = qt(a, s);
  return m
    ? e.jsxs("span", {
        className: `tr-in ${i ? "dark" : ""}`,
        children: [
          e.jsx("i", { "aria-hidden": "true" }),
          l("tr.inClub", { time: c.time(m.inAt) }),
        ],
      })
    : e.jsxs("span", {
        className: `tr-in off ${i ? "dark" : ""}`,
        children: [e.jsx("i", { "aria-hidden": "true" }), l("tr.notIn")],
      });
}
function np({ pt: s, mode: i, onClose: a }) {
  const { s: l, act: c, t: m, f: h, L: p, notify: f } = me(),
    y = ze(l, s.memberId),
    j = en(l, s.memberId, Oe),
    C = j && zn(j),
    v = j ? El(j) : 0,
    g = Js(l, v),
    N = p(y.name).split(" ")[0],
    k = `${s.day === 0 ? m("today") : h.weekday(Ye(xe, s.day), "long")} · ${h.clock(s.time)}`,
    b = Ol(l, s) === "upcoming",
    w = () => {
      (i === "confirm"
        ? (c(wl, s.id),
          f(m("tr.confirmToast", { name: N, n: j.remaining - 1 })))
        : i === "noshow"
          ? (c(Fx, s.id), f(m("tr.noshowToast", { name: N }), "bad"))
          : (c(Df, s.id), f(m("tr.cancelToast"))),
        a());
    };
  return e.jsxs(et, {
    title: m(`tr.sheet.${i}`),
    onClose: a,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, { variant: "ghost", onClick: a, children: m("tr.keep") }),
        e.jsx(Z, {
          variant: i === "confirm" ? "primary" : "danger",
          icon: i === "confirm" ? "check" : i === "noshow" ? "flag" : "x",
          disabled: i === "confirm" && !j,
          onClick: w,
          children: m(`tr.sheet.${i}.do`),
        }),
      ],
    }),
    children: [
      e.jsxs("div", {
        className: "tr-sheet-who",
        children: [
          e.jsx(Ke, { name: p(y.name), tone: "ladies" }),
          e.jsxs("span", {
            className: "tr-who-body",
            children: [
              e.jsx("strong", { children: p(y.name) }),
              e.jsx("small", { className: "tnum", children: k }),
            ],
          }),
          e.jsx(ar, { memberId: y.id }),
        ],
      }),
      i === "confirm"
        ? j
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsxs("ul", {
                  className: "tr-effects",
                  children: [
                    e.jsxs("li", {
                      children: [
                        e.jsxs("span", {
                          children: [
                            e.jsx(M, { name: "package", size: 16 }),
                            m("tr.eff.package"),
                          ],
                        }),
                        e.jsx("b", {
                          className: "tnum",
                          children: m("tr.eff.pkgFromTo", {
                            a: j.remaining,
                            b: j.remaining - 1,
                            n: C.sessions,
                          }),
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      children: [
                        e.jsxs("span", {
                          children: [
                            e.jsx(M, { name: "gift", size: 16 }),
                            m("tr.eff.points", { name: N }),
                          ],
                        }),
                        e.jsx("b", {
                          className: "tnum",
                          children: m("tr.eff.ptsN", { n: Bo }),
                        }),
                      ],
                    }),
                    e.jsxs("li", {
                      children: [
                        e.jsxs("span", {
                          children: [
                            e.jsx(M, { name: "wallet", size: 16 }),
                            m("tr.eff.you"),
                          ],
                        }),
                        e.jsxs("b", {
                          className: "tnum",
                          children: ["+", h.money(g)],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "tr-calc tnum",
                  children: m("tr.eff.calc", {
                    value: h.money(v),
                    pct: h.pct(l.settings.trainerSharePct),
                    you: h.money(g),
                    gym: h.money(v - g),
                  }),
                }),
                b &&
                  e.jsxs("p", {
                    className: "sheet-note warn",
                    children: [
                      e.jsx(M, { name: "clock", size: 16 }),
                      m("tr.eff.early"),
                    ],
                  }),
                e.jsx("p", {
                  className: "muted small",
                  children: m("tr.eff.only"),
                }),
              ],
            })
          : e.jsxs("p", {
              className: "sheet-note bad",
              children: [
                e.jsx(M, { name: "package", size: 16 }),
                m("tr.eff.noPkg", { name: N }),
              ],
            })
        : i === "noshow"
          ? e.jsxs("p", {
              className: "sheet-note warn",
              children: [
                e.jsx(M, { name: "info", size: 16 }),
                m("tr.eff.noshow"),
              ],
            })
          : e.jsxs("p", {
              className: "sheet-note",
              children: [
                e.jsx(M, { name: "info", size: 16 }),
                m("tr.eff.cancel", { name: N }),
              ],
            }),
    ],
  });
}
function Wx({ memberId: s, onClose: i }) {
  const { s: a, act: l, t: c, f: m, L: h, notify: p } = me(),
    f = sr(),
    y = ze(a, s),
    j = en(a, s, Oe),
    [C, v] = V.useState(
      () =>
        [0, 1, 2, 3, 4, 5, 6].find((w) => pu.some((S) => !hu(a, w, S))) ?? 1,
    ),
    [g, N] = V.useState(null),
    k = Sl(a, s).filter((w) => w.status === "scheduled").length,
    b = j && k >= j.remaining;
  return e.jsxs(et, {
    title: c("tr.sch.title", { name: h(y.name).split(" ")[0] }),
    onClose: i,
    footer: e.jsx(Z, {
      block: !0,
      size: "lg",
      icon: "calendarClock",
      disabled: !j || !g,
      onClick: () => {
        (l(Hf, s, Oe, C, g),
          p(c("tr.sch.toast", { when: `${f(C)} ${m.clock(g)}` })),
          i());
      },
      children: g
        ? c("tr.sch.do", { when: `${f(C)} · ${m.clock(g)}` })
        : c("tr.sch.pick"),
    }),
    children: [
      j
        ? e.jsxs("p", {
            className: "sheet-note",
            children: [
              e.jsx(M, { name: "package", size: 16 }),
              c("tr.sch.pkg", { n: j.remaining, k }),
            ],
          })
        : e.jsxs("p", {
            className: "sheet-note bad",
            children: [
              e.jsx(M, { name: "package", size: 16 }),
              c("tr.sch.noPkg"),
            ],
          }),
      e.jsx("div", {
        className: "daystrip",
        role: "tablist",
        "aria-label": c("tr.sch.day"),
        children: [0, 1, 2, 3, 4, 5, 6].map((w) => {
          const S = Ye(xe, w);
          return e.jsxs(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": C === w,
              className: C === w ? "on" : "",
              onClick: () => {
                (v(w), N(null));
              },
              children: [
                e.jsx("small", {
                  children: w === 0 ? c("today") : m.weekday(S),
                }),
                e.jsx("b", {
                  className: "tnum",
                  children: m.num(Number(S.slice(8))),
                }),
              ],
            },
            w,
          );
        }),
      }),
      e.jsx("div", {
        className: "tr-times",
        role: "radiogroup",
        "aria-label": c("tr.sch.time"),
        children: pu.map((w) => {
          const S = hu(a, C, w);
          return e.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": g === w,
              disabled: !!S,
              className: `${g === w ? "on" : ""} ${S ? `busy-${S}` : ""}`,
              onClick: () => N(w),
              children: [
                e.jsx("b", { className: "tnum", children: m.clock(w) }),
                S &&
                  S !== "past" &&
                  e.jsx("small", { children: c(`tr.sch.busy.${S}`) }),
              ],
            },
            w,
          );
        }),
      }),
      b &&
        e.jsxs("p", {
          className: "sheet-note warn",
          children: [e.jsx(M, { name: "warn", size: 16 }), c("tr.sch.over")],
        }),
      e.jsx("p", { className: "muted small", children: c("tr.sch.note") }),
    ],
  });
}
function sp({ memberId: s, onClose: i }) {
  const { s: a, act: l, t: c, L: m, notify: h } = me(),
    p = ze(a, s),
    [f, y] = V.useState($o[1].id),
    j = $o.find((v) => v.id === f),
    C = (v) => a.documents.some((g) => g.memberId === s && m(g.title) === m(v));
  return e.jsxs(et, {
    title: c("tr.nu.title", { name: m(p.name).split(" ")[0] }),
    onClose: i,
    footer: e.jsx(Z, {
      block: !0,
      size: "lg",
      icon: "send",
      disabled: C(j.title),
      onClick: () => {
        (l(qx, s, j.title),
          h(c("tr.nu.toast", { name: m(p.name).split(" ")[0] })),
          i());
      },
      children: C(j.title) ? c("tr.nu.already") : c("tr.nu.share"),
    }),
    children: [
      e.jsx("div", {
        className: "choice-list",
        role: "radiogroup",
        "aria-label": c("tr.nu.pick"),
        children: $o.map((v) =>
          e.jsxs(
            "button",
            {
              type: "button",
              role: "radio",
              "aria-checked": f === v.id,
              className: `choice ${f === v.id ? "on" : ""}`,
              onClick: () => y(v.id),
              children: [
                e.jsxs("span", {
                  children: [
                    e.jsx("strong", { children: m(v.title) }),
                    e.jsx("small", {
                      children: C(v.title) ? c("tr.nu.sent") : c("tr.nu.kind"),
                    }),
                  ],
                }),
                e.jsx(M, { name: "file", size: 18 }),
              ],
            },
            v.id,
          ),
        ),
      }),
      e.jsxs("p", {
        className: "sheet-note warn",
        children: [e.jsx(M, { name: "shield", size: 16 }), c("tr.nu.medical")],
      }),
    ],
  });
}
function ap({ memberId: s, compact: i = !1 }) {
  const { s: a, t: l, f: c, L: m } = me(),
    h = ze(a, s),
    p = $x(a, s),
    f = m(h.name).split(" ")[0];
  if (p === "shared") {
    const y = l(`m.h.${a.consent.wearableSource || "healthkit"}`);
    return i
      ? e.jsxs("span", {
          className: "tr-shared",
          children: [
            e.jsx(M, { name: "shield", size: 14 }),
            l("tr.h.compact", { n: c.num(8420) }),
          ],
        })
      : e.jsxs("div", {
          className: `tr-health ${i ? "compact" : ""}`,
          children: [
            e.jsxs("div", {
              className: "tr-health-stats",
              children: [
                e.jsxs("span", {
                  children: [
                    e.jsx("small", { children: l("m.h.steps") }),
                    e.jsx("b", { className: "tnum", children: c.num(8420) }),
                  ],
                }),
                e.jsxs("span", {
                  children: [
                    e.jsx("small", { children: l("m.h.active") }),
                    e.jsx("b", { className: "tnum", children: c.num(52) }),
                  ],
                }),
                e.jsxs("span", {
                  children: [
                    e.jsx("small", { children: l("m.h.rhr") }),
                    e.jsx("b", { className: "tnum", children: c.num(64) }),
                  ],
                }),
              ],
            }),
            !i &&
              e.jsxs("p", {
                className: "muted small",
                children: [
                  e.jsx(M, { name: "shield", size: 14 }),
                  " ",
                  l("tr.h.shared", { name: f, src: y }),
                ],
              }),
          ],
        });
  }
  return e.jsxs("div", {
    className: `tr-locked ${i ? "compact" : ""}`,
    children: [
      e.jsx(M, { name: "lock", size: i ? 15 : 18 }),
      e.jsxs("span", {
        children: [
          e.jsx("strong", {
            children: l(i ? "tr.h.notSharedShort" : "tr.h.notShared"),
          }),
          !i &&
            e.jsx("small", {
              children: l(
                p === "notShared" ? "tr.h.connectedNotShared" : "tr.h.none",
                { name: f },
              ),
            }),
        ],
      }),
    ],
  });
}
function lc({ pp: s }) {
  const i = zn(s);
  return e.jsx("div", {
    className: "pkg-dots",
    "aria-hidden": "true",
    children: Array.from({ length: i.sessions }).map((a, l) =>
      e.jsx("i", { className: l < i.sessions - s.remaining ? "used" : "" }, l),
    ),
  });
}
function rp() {
  const { s, t: i, f: a } = me(),
    l = sr();
  return {
    next: (c) => {
      const m = Zu(s, c);
      return m ? `${l(m.day, "short")} · ${a.clock(m.time)}` : i("tr.cl.none");
    },
    last: (c) => {
      const m = Ax(s, c);
      return m
        ? m.kind === "visit" && m.active
          ? i("tr.cl.inNow")
          : m.kind === "class"
            ? i("tr.cl.lastClass", { time: a.time(m.at) })
            : i("tr.cl.lastVisit", { time: a.time(m.at) })
        : i("tr.cl.noVisit");
    },
  };
}
function Ux() {
  const { s, go: i, t: a, f: l, L: c } = me(),
    m = rp(),
    h = na(s);
  return e.jsxs("div", {
    className: "mscreen tr-clients",
    children: [
      e.jsxs("header", {
        className: "mhead",
        children: [
          e.jsxs("div", {
            className: "tr-head-row",
            children: [
              e.jsx("h1", { children: a("tr.cl.title") }),
              e.jsx("span", {
                className: "tr-count tnum",
                children: l.num(h.length),
              }),
            ],
          }),
          e.jsx("p", { className: "muted tr-lead", children: a("tr.cl.lead") }),
        ],
      }),
      e.jsx("div", {
        className: "tr-client-list",
        children: h.map((p) => {
          const f = Rl(s, p.id),
            y = f && zn(f),
            j = lt(s, p);
          return e.jsxs(
            "button",
            {
              type: "button",
              className: "tr-client",
              onClick: () => i("trainer", "clients", p.id),
              children: [
                e.jsxs("span", {
                  className: "tr-client-top",
                  children: [
                    e.jsx(Ke, {
                      name: c(p.name),
                      tone: p.id === be ? "lime" : "ladies",
                    }),
                    e.jsxs("span", {
                      className: "tr-client-name",
                      children: [
                        e.jsx("strong", { children: c(p.name) }),
                        e.jsx("small", {
                          children: a(`tr.cl.status.${j}`, {
                            date: l.date(p.end),
                          }),
                        }),
                      ],
                    }),
                    e.jsx(ar, { memberId: p.id }),
                  ],
                }),
                f
                  ? e.jsxs("span", {
                      className: "tr-client-pkg",
                      children: [
                        e.jsxs("span", {
                          className: "tr-client-pkg-row",
                          children: [
                            e.jsx("b", {
                              className: "tnum",
                              children: a("tr.cl.pkgLeft", {
                                a: f.remaining,
                                n: y.sessions,
                              }),
                            }),
                            e.jsx("small", {
                              className: "tnum",
                              children: a("tr.cl.until", {
                                date: l.date(f.expires),
                              }),
                            }),
                          ],
                        }),
                        e.jsx(lc, { pp: f }),
                      ],
                    })
                  : e.jsxs("span", {
                      className: "tr-client-pkg none",
                      children: [
                        e.jsx(M, { name: "package", size: 15 }),
                        a("tr.td.noPkg"),
                      ],
                    }),
                e.jsxs("span", {
                  className: "tr-facts",
                  children: [
                    e.jsxs("span", {
                      children: [
                        e.jsx("small", { children: a("tr.cl.next") }),
                        e.jsx("b", {
                          className: "tnum",
                          children: m.next(p.id),
                        }),
                      ],
                    }),
                    e.jsxs("span", {
                      children: [
                        e.jsx("small", { children: a("tr.cl.last") }),
                        e.jsx("b", {
                          className: "tnum",
                          children: m.last(p.id),
                        }),
                      ],
                    }),
                    e.jsxs("span", {
                      children: [
                        e.jsx("small", { children: a("tr.cl.health") }),
                        e.jsx(ap, { memberId: p.id, compact: !0 }),
                      ],
                    }),
                  ],
                }),
              ],
            },
            p.id,
          );
        }),
      }),
      e.jsxs("p", {
        className: "policy",
        children: [e.jsx(M, { name: "shield", size: 15 }), a("tr.cl.policy")],
      }),
    ],
  });
}
function Vx({ id: s }) {
  const { s: i, act: a, go: l, t: c, f: m, L: h, notify: p } = me(),
    f = sr(),
    y = rp(),
    j = ze(i, s),
    C = h(j.name).split(" ")[0],
    v = Rl(i, s),
    g = v && zn(v),
    N = v ? El(v) : 0,
    k = Sl(i, s),
    b = i.programs.find((O) => O.memberId === s && O.trainerId === Oe),
    w = i.documents.filter((O) => O.memberId === s),
    S = Hx(i, s),
    ae = lt(i, j),
    [_, L] = V.useState(null),
    [G, H] = V.useState("");
  return e.jsxs("div", {
    className: "mscreen tr-detail",
    children: [
      e.jsxs("header", {
        className: "tr-detail-head",
        children: [
          e.jsx(Ke, {
            name: h(j.name),
            tone: j.id === be ? "lime" : "ladies",
            size: "lg",
          }),
          e.jsxs("div", {
            children: [
              e.jsx("h2", { children: h(j.name) }),
              e.jsx("p", {
                className: "tnum",
                children: c("tr.cl.meta", {
                  age: j.age,
                  code: m.digits(j.code),
                }),
              }),
              e.jsxs("span", {
                className: "tr-detail-tags",
                children: [
                  e.jsx(_e, { value: ae }),
                  e.jsx(ar, { memberId: j.id }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "tr-actions",
        children: [
          e.jsx(Z, {
            icon: "calendarClock",
            onClick: () => L({ kind: "schedule" }),
            disabled: !en(i, s, Oe),
            children: c("tr.cl.schedule"),
          }),
          e.jsx(Z, {
            variant: "secondary",
            icon: "chat",
            onClick: () => l("trainer", "messages", s),
            children: c("tr.act.message"),
          }),
        ],
      }),
      e.jsx("section", {
        className: "mcard pkg",
        "aria-label": c("tr.cl.package"),
        children: v
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsxs("div", {
                  className: "pkg-top",
                  children: [
                    e.jsxs("span", {
                      children: [
                        e.jsx("small", {
                          children: c("m.co.package", { n: g.sessions }),
                        }),
                        e.jsx("strong", {
                          className: "tnum",
                          children: c("m.co.left", { n: v.remaining }),
                        }),
                      ],
                    }),
                    e.jsx(ge, {
                      tone: "forest",
                      children: c("m.co.expires", { date: m.date(v.expires) }),
                    }),
                  ],
                }),
                e.jsx(lc, { pp: v }),
                e.jsx("p", {
                  className: "muted small tnum",
                  children: c("tr.cl.value", {
                    value: m.money(N),
                    you: m.money(Js(i, N)),
                  }),
                }),
              ],
            })
          : e.jsx(Ze, {
              icon: "package",
              title: c("tr.td.noPkg"),
              children: c("tr.al.noPkgMeta"),
            }),
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: c("tr.cl.sessions") }),
          }),
          e.jsxs("div", {
            className: "later-list",
            children: [
              k.map((O) => {
                const R = Ol(i, O),
                  K = ["upcoming", "live", "due"].includes(R);
                return e.jsx(
                  Ue,
                  {
                    icon: "calendarClock",
                    iconTone: K ? "" : "plain",
                    title: e.jsxs("span", {
                      className: "tnum",
                      children: [f(O.day), " · ", m.clock(O.time)],
                    }),
                    meta: K
                      ? c(`tr.ph.${R}`)
                      : O.confirmedAt != null
                        ? c("tr.cl.confirmedAt", {
                            time: m.time(O.confirmedAt),
                          })
                        : c(`status.${O.status}`),
                    end:
                      K && O.day === 0
                        ? e.jsx(Z, {
                            size: "sm",
                            variant: R === "upcoming" ? "secondary" : "primary",
                            onClick: () =>
                              L({ kind: "pt", pt: O, mode: "confirm" }),
                            children: c("tr.act.confirm"),
                          })
                        : K
                          ? e.jsx(Z, {
                              size: "sm",
                              variant: "ghost",
                              onClick: () =>
                                L({ kind: "pt", pt: O, mode: "cancel" }),
                              children: c("tr.act.cancel"),
                            })
                          : e.jsx(_e, { value: O.status }),
                  },
                  O.id,
                );
              }),
              !k.length &&
                e.jsx("p", {
                  className: "muted small-pad",
                  children: c("tr.cl.noSessions"),
                }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { children: c("tr.cl.program") }),
              b &&
                e.jsx("button", {
                  type: "button",
                  className: "link",
                  onClick: () => l("trainer", "programs", s),
                  children: c("tr.cl.editProgram"),
                }),
            ],
          }),
          b
            ? e.jsxs("div", {
                className: "mcard tr-prog-card",
                children: [
                  e.jsx("strong", { children: h(b.name) }),
                  e.jsx("ol", {
                    children: b.items.map((O, R) => {
                      const K = de(i.equipment, O.equipmentId);
                      return K
                        ? e.jsxs(
                            "li",
                            {
                              className:
                                K.status === "maintenance" ? "maint" : "",
                              children: [
                                e.jsxs("span", {
                                  children: [
                                    h(Xt(K).name),
                                    " ",
                                    e.jsx("small", { children: K.label }),
                                  ],
                                }),
                                e.jsx("b", {
                                  className: "tnum",
                                  children:
                                    O.unit === "min"
                                      ? c("min", { n: O.reps })
                                      : c("tr.pg.sxr", {
                                          s: O.sets,
                                          r: O.reps,
                                        }),
                                }),
                                K.status === "maintenance" &&
                                  e.jsx(_e, { value: "maintenance" }),
                              ],
                            },
                            R,
                          )
                        : null;
                    }),
                  }),
                  b.note &&
                    e.jsxs("p", {
                      className: "tr-quote",
                      children: ["“", h(b.note), "”"],
                    }),
                ],
              })
            : e.jsx("div", {
                className: "mcard",
                children: e.jsx(Ze, {
                  icon: "dumbbell",
                  title: c("tr.cl.noProgram", { name: C }),
                  action: e.jsx(Z, {
                    icon: "edit",
                    onClick: () => l("trainer", "programs", s),
                    children: c("tr.cl.build"),
                  }),
                  children: c("tr.cl.noProgramText"),
                }),
              }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { children: c("tr.cl.health") }),
              e.jsx(ge, {
                tone: "neutral",
                icon: "shield",
                children: c("tr.h.law"),
              }),
            ],
          }),
          e.jsx(ap, { memberId: s }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { children: c("tr.cl.notes") }),
              e.jsx("span", {
                className: "muted small",
                children: c("tr.cl.private"),
              }),
            ],
          }),
          e.jsx("div", {
            className: "later-list",
            children: S.map((O) =>
              e.jsx(
                Ue,
                {
                  icon: "edit",
                  iconTone: "plain",
                  title: e.jsx("span", {
                    className: "tr-note-text",
                    children: h(O.text),
                  }),
                  meta: e.jsx("span", {
                    className: "tnum",
                    children:
                      O.at === xe
                        ? `${c("today")} · ${m.time(O.clock)}`
                        : m.date(O.at),
                  }),
                },
                O.id,
              ),
            ),
          }),
          e.jsxs("form", {
            className: "composer tr-note-form",
            onSubmit: (O) => {
              (O.preventDefault(), a(_x, s, G), H(""), p(c("tr.cl.noteSaved")));
            },
            children: [
              e.jsx("input", {
                className: "input",
                value: G,
                onChange: (O) => H(O.target.value),
                placeholder: c("tr.cl.addNote"),
                "aria-label": c("tr.cl.addNote"),
              }),
              e.jsx(Z, {
                type: "submit",
                icon: "plus",
                disabled: !G.trim(),
                "aria-label": c("save"),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { children: c("tr.cl.files") }),
              e.jsx("button", {
                type: "button",
                className: "link",
                onClick: () => L({ kind: "share" }),
                children: c("tr.cl.shareFile"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "later-list",
            children: [
              w.map((O) =>
                e.jsx(
                  Ue,
                  {
                    icon: "file",
                    title: h(O.title),
                    meta: e.jsxs("span", {
                      className: "tnum",
                      children: [
                        c("m.co.general"),
                        " · ",
                        O.at === xe ? c("today") : m.date(O.at),
                      ],
                    }),
                  },
                  O.id,
                ),
              ),
              !w.length &&
                e.jsx("p", {
                  className: "muted small-pad",
                  children: c("tr.cl.noFiles"),
                }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", { children: c("tr.cl.membership") }),
          }),
          e.jsxs("div", {
            className: "mcard tr-kv",
            children: [
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: c("tr.cl.plan") }),
                  e.jsx("b", { children: h(En(j).name) }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: c("tr.cl.ends") }),
                  e.jsx("b", {
                    className: "tnum",
                    children: m.date(j.end, {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    }),
                  }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: c("tr.cl.last") }),
                  e.jsx("b", { className: "tnum", children: y.last(s) }),
                ],
              }),
            ],
          }),
          e.jsxs("p", {
            className: "policy",
            children: [
              e.jsx(M, { name: "info", size: 15 }),
              c("tr.cl.memNote"),
            ],
          }),
        ],
      }),
      (_ == null ? void 0 : _.kind) === "schedule" &&
        e.jsx(Wx, { memberId: s, onClose: () => L(null) }),
      (_ == null ? void 0 : _.kind) === "share" &&
        e.jsx(sp, { memberId: s, onClose: () => L(null) }),
      (_ == null ? void 0 : _.kind) === "pt" &&
        e.jsx(np, { pt: _.pt, mode: _.mode, onClose: () => L(null) }),
    ],
  });
}
const fu = (s) => ({
    id: s == null ? void 0 : s.id,
    name: (s == null ? void 0 : s.name) ?? null,
    nameText: null,
    note: (s == null ? void 0 : s.note) ?? null,
    noteText: null,
    items: s ? s.items.map((i) => ({ ...i })) : [],
    dirty: !1,
  }),
  Gx = ["strength", "free", "cardio"];
function Qx({ initial: s }) {
  var z;
  const { s: i, act: a, t: l, f: c, L: m, notify: h } = me(),
    p = na(i),
    f = (F) => F && Ku(i, F),
    [y, j] = V.useState(f(s) ? s : (z = p[0]) == null ? void 0 : z.id);
  V.useEffect(() => {
    f(s) && j(s);
  }, [s]);
  const C = ze(i, y),
    v = i.programs.find((F) => F.memberId === y && F.trainerId === Oe),
    [g, N] = V.useState(() => fu(v));
  V.useEffect(() => N(fu(v)), [y, v == null ? void 0 : v.id]);
  const [k, b] = V.useState(null);
  if (!C)
    return e.jsx("div", {
      className: "mscreen",
      children: e.jsx(Ze, { icon: "users", title: l("tr.cl.empty") }),
    });
  const w = (F) => C.name[F].split(" ")[0],
    S = {
      en: Qa.en["tr.pg.defaultName"].replace("{name}", w("en")),
      ar: Qa.ar["tr.pg.defaultName"].replace("{name}", w("ar")),
    },
    ae = g.nameText ?? m(g.name ?? S),
    _ = g.noteText ?? (g.note ? m(g.note) : ""),
    L = (F) => N((A) => ({ ...A, ...F, dirty: !0 })),
    G = (F, A) =>
      L({ items: g.items.map((Y, je) => (je === F ? { ...Y, ...A } : Y)) }),
    H = (F) => L({ items: g.items.filter((A, Y) => Y !== F) }),
    O = (F) => {
      const A = Xt(F);
      L({
        items: [
          ...g.items,
          A.cat === "cardio"
            ? { equipmentId: F.id, sets: 1, reps: 10, unit: "min" }
            : { equipmentId: F.id, sets: 3, reps: 12 },
        ],
      });
    },
    R = g.items.filter((F) => {
      var A;
      return (
        ((A = de(i.equipment, F.equipmentId)) == null ? void 0 : A.status) ===
        "maintenance"
      );
    }).length,
    K = () => {
      const F =
          g.nameText != null
            ? { en: g.nameText, ar: g.nameText }
            : (g.name ?? S),
        A =
          g.noteText != null
            ? g.noteText.trim()
              ? { en: g.noteText, ar: g.noteText }
              : null
            : g.note;
      (a(Bf, {
        id: g.id,
        memberId: y,
        trainerId: Oe,
        name: F,
        items: g.items,
        note: A,
      }),
        N((Y) => ({ ...Y, dirty: !1 })),
        h(l("tr.pg.saved", { name: m(C.name).split(" ")[0] })));
    },
    E = i.documents.filter((F) => F.memberId === y);
  return e.jsxs("div", {
    className: "mscreen tr-programs",
    children: [
      e.jsxs("header", {
        className: "mhead",
        children: [
          e.jsx("h1", { children: l("tr.pg.title") }),
          e.jsx(nt, {
            size: "block",
            value: y,
            onChange: j,
            label: l("tr.pg.client"),
            options: p.map((F) => ({
              value: F.id,
              label: m(F.name).split(" ")[0],
            })),
          }),
        ],
      }),
      e.jsxs("section", {
        className: "mcard tr-pg-meta",
        children: [
          e.jsx(It, {
            label: l("tr.pg.name"),
            children: e.jsx("input", {
              value: ae,
              onChange: (F) => L({ nameText: F.target.value }),
            }),
          }),
          e.jsx("p", {
            className: "muted small",
            children: v
              ? l("tr.pg.editing", { name: m(C.name).split(" ")[0] })
              : l("tr.pg.new", { name: m(C.name).split(" ")[0] }),
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-ex-h",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsxs("h2", {
                id: "tr-ex-h",
                children: [
                  l("tr.pg.exercises"),
                  " ",
                  e.jsx("span", {
                    className: "muted tnum",
                    children: c.num(g.items.length),
                  }),
                ],
              }),
              e.jsx(Z, {
                size: "sm",
                variant: "secondary",
                icon: "plus",
                onClick: () => b("add"),
                children: l("tr.pg.add"),
              }),
            ],
          }),
          R > 0 &&
            e.jsxs("p", {
              className: "sheet-note warn",
              children: [
                e.jsx(M, { name: "wrench", size: 16 }),
                l("tr.pg.brokenNote", { n: R }),
              ],
            }),
          g.items.length
            ? e.jsx("ol", {
                className: "tr-exlist",
                children: g.items.map((F, A) => {
                  const Y = de(i.equipment, F.equipmentId);
                  if (!Y) return null;
                  const je = Xt(Y),
                    he = Y.status === "maintenance",
                    ee = he
                      ? i.equipment
                          .filter(
                            (ie) =>
                              ie.status === "active" &&
                              ie.id !== Y.id &&
                              Xt(ie).muscles.some((oe) =>
                                je.muscles.includes(oe),
                              ) &&
                              !g.items.some((oe) => oe.equipmentId === ie.id),
                          )
                          .slice(0, 3)
                      : [];
                  return e.jsxs(
                    "li",
                    {
                      className: `tr-ex ${he ? "maint" : ""}`,
                      children: [
                        e.jsxs("div", {
                          className: "tr-ex-top",
                          children: [
                            e.jsx("span", {
                              className: "tr-ex-n tnum",
                              children: c.num(A + 1),
                            }),
                            e.jsxs("span", {
                              className: "tr-ex-body",
                              children: [
                                e.jsx("strong", { children: m(je.name) }),
                                e.jsxs("small", {
                                  children: [
                                    Y.label,
                                    " · ",
                                    l(`zone.${Y.zone}`),
                                    " · ",
                                    je.muscles
                                      .map((ie) => l(`muscle.${ie}`))
                                      .join(" · "),
                                  ],
                                }),
                              ],
                            }),
                            he && e.jsx(_e, { value: "maintenance" }),
                            e.jsx(yn, {
                              icon: "x",
                              size: 16,
                              label: l("tr.pg.remove", { name: m(je.name) }),
                              onClick: () => H(A),
                            }),
                          ],
                        }),
                        he
                          ? e.jsxs("div", {
                              className: "tr-swap",
                              children: [
                                e.jsx("span", {
                                  className: "small",
                                  children: l("tr.pg.swapFor"),
                                }),
                                ee.map((ie) =>
                                  e.jsxs(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () =>
                                        G(A, { equipmentId: ie.id }),
                                      children: [
                                        e.jsx(M, { name: "reset", size: 14 }),
                                        m(Xt(ie).name),
                                        " ",
                                        e.jsx("small", { children: ie.label }),
                                      ],
                                    },
                                    ie.id,
                                  ),
                                ),
                                !ee.length &&
                                  e.jsx("span", {
                                    className: "muted small",
                                    children: l("tr.pg.noAlt"),
                                  }),
                              ],
                            })
                          : e.jsx("div", {
                              className: "tr-ex-steps",
                              children:
                                F.unit === "min"
                                  ? e.jsx(Oo, {
                                      label: l("tr.pg.minutes"),
                                      value: F.reps,
                                      min: 5,
                                      max: 60,
                                      step: 5,
                                      onChange: (ie) => G(A, { reps: ie }),
                                    })
                                  : e.jsxs(e.Fragment, {
                                      children: [
                                        e.jsx(Oo, {
                                          label: l("tr.pg.sets"),
                                          value: F.sets,
                                          min: 1,
                                          max: 6,
                                          onChange: (ie) => G(A, { sets: ie }),
                                        }),
                                        e.jsx("span", {
                                          className: "tr-x",
                                          "aria-hidden": "true",
                                          children: "×",
                                        }),
                                        e.jsx(Oo, {
                                          label: l("tr.pg.reps"),
                                          value: F.reps,
                                          min: 4,
                                          max: 30,
                                          onChange: (ie) => G(A, { reps: ie }),
                                        }),
                                      ],
                                    }),
                            }),
                      ],
                    },
                    `${F.equipmentId}-${A}`,
                  );
                }),
              })
            : e.jsx("div", {
                className: "mcard",
                children: e.jsx(Ze, {
                  icon: "dumbbell",
                  title: l("tr.pg.emptyTitle"),
                  action: e.jsx(Z, {
                    icon: "plus",
                    onClick: () => b("add"),
                    children: l("tr.pg.add"),
                  }),
                  children: l("tr.pg.emptyText"),
                }),
              }),
        ],
      }),
      e.jsx("section", {
        className: "mcard tr-pg-meta",
        children: e.jsx(It, {
          label: l("tr.pg.note"),
          hint: l("tr.pg.noteHint"),
          children: e.jsx("textarea", {
            rows: 3,
            value: _,
            onChange: (F) => L({ noteText: F.target.value }),
            placeholder: l("tr.pg.notePh"),
          }),
        }),
      }),
      e.jsxs("div", {
        className: "tr-save",
        children: [
          e.jsx(Z, {
            block: !0,
            size: "lg",
            icon: "check",
            disabled: !g.dirty || !g.items.length,
            onClick: K,
            children: g.dirty
              ? l("tr.pg.save", { name: m(C.name).split(" ")[0] })
              : l("tr.pg.savedState"),
          }),
          e.jsxs("p", {
            className: "policy",
            children: [
              e.jsx(M, { name: "map", size: 15 }),
              l("tr.pg.only", { n: i.equipment.length }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-nu-h",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { id: "tr-nu-h", children: l("tr.nu.section") }),
              e.jsx(Z, {
                size: "sm",
                variant: "secondary",
                icon: "file",
                onClick: () => b("share"),
                children: l("tr.nu.shareShort"),
              }),
            ],
          }),
          e.jsxs("p", {
            className: "sheet-note warn",
            children: [
              e.jsx(M, { name: "shield", size: 16 }),
              l("tr.nu.medical"),
            ],
          }),
          e.jsxs("div", {
            className: "later-list",
            children: [
              E.map((F) =>
                e.jsx(
                  Ue,
                  {
                    icon: "file",
                    title: m(F.title),
                    meta: e.jsx("span", {
                      className: "tnum",
                      children: l("tr.nu.sharedOn", {
                        date: F.at === xe ? l("today") : c.date(F.at),
                      }),
                    }),
                  },
                  F.id,
                ),
              ),
              !E.length &&
                e.jsx("p", {
                  className: "muted small-pad",
                  children: l("tr.nu.none", { name: m(C.name).split(" ")[0] }),
                }),
            ],
          }),
        ],
      }),
      k === "add" &&
        e.jsx(Yx, { items: g.items, onAdd: O, onClose: () => b(null) }),
      k === "share" && e.jsx(sp, { memberId: y, onClose: () => b(null) }),
    ],
  });
}
function Oo({ label: s, value: i, min: a, max: l, step: c = 1, onChange: m }) {
  const { t: h, f: p } = me();
  return e.jsxs("span", {
    className: "tr-stepper",
    role: "group",
    "aria-label": s,
    children: [
      e.jsx("button", {
        type: "button",
        "aria-label": h("tr.pg.less", { label: s }),
        disabled: i <= a,
        onClick: () => m(Math.max(a, i - c)),
        children: e.jsx(M, { name: "minus", size: 15 }),
      }),
      e.jsx("b", {
        className: "tnum",
        "aria-live": "polite",
        children: p.num(i),
      }),
      e.jsx("button", {
        type: "button",
        "aria-label": h("tr.pg.more", { label: s }),
        disabled: i >= l,
        onClick: () => m(Math.min(l, i + c)),
        children: e.jsx(M, { name: "plus", size: 15 }),
      }),
      e.jsx("small", { children: s }),
    ],
  });
}
function Yx({ items: s, onAdd: i, onClose: a }) {
  const { s: l, t: c, f: m, L: h } = me(),
    p = new Set(l.equipment.map((y) => y.libId)),
    f = fn.filter((y) => !p.has(y.id));
  return e.jsxs(et, {
    title: c("tr.pg.addTitle"),
    onClose: a,
    footer: e.jsx(Z, {
      block: !0,
      variant: "secondary",
      onClick: a,
      children: c("done"),
    }),
    children: [
      e.jsx("p", {
        className: "muted small",
        children: c("tr.pg.addLead", {
          n: l.equipment.length,
          branch: h(l.gym.branch).split(" · ")[0],
        }),
      }),
      Gx.map((y) => {
        const j = l.equipment.filter((C) => Xt(C).cat === y);
        return j.length
          ? e.jsxs(
              "div",
              {
                className: "tr-pick",
                children: [
                  e.jsx("h3", {
                    className: "mini-h",
                    children: c(`eqcat.${y}`),
                  }),
                  j.map((C) => {
                    const v = Xt(C),
                      g = C.status === "maintenance",
                      N = s.filter((k) => k.equipmentId === C.id).length;
                    return e.jsxs(
                      "button",
                      {
                        type: "button",
                        className: `tr-pick-row ${g ? "maint" : ""}`,
                        disabled: g,
                        onClick: () => i(C),
                        children: [
                          e.jsx("span", {
                            className: `row-icon ${g ? "warn" : ""}`,
                            children: e.jsx(M, {
                              name: g ? "wrench" : v.icon,
                              size: 18,
                            }),
                          }),
                          e.jsxs("span", {
                            className: "row-body",
                            children: [
                              e.jsx("span", {
                                className: "row-title",
                                children: h(v.name),
                              }),
                              e.jsxs("span", {
                                className: "row-meta",
                                children: [
                                  C.label,
                                  " · ",
                                  v.muscles
                                    .map((k) => c(`muscle.${k}`))
                                    .join(" · "),
                                ],
                              }),
                            ],
                          }),
                          g
                            ? e.jsx(_e, { value: "maintenance" })
                            : N
                              ? e.jsx(ge, {
                                  tone: "ok",
                                  icon: "check",
                                  children:
                                    N > 1
                                      ? c("tr.pg.addedN", { n: m.num(N) })
                                      : c("tr.pg.added"),
                                })
                              : e.jsx(M, {
                                  name: "plus",
                                  size: 18,
                                  className: "tr-pick-plus",
                                }),
                        ],
                      },
                      C.id,
                    );
                  }),
                ],
              },
              y,
            )
          : null;
      }),
      f.length > 0 &&
        e.jsxs("div", {
          className: "tr-missing",
          children: [
            e.jsx("h3", { className: "mini-h", children: c("tr.pg.notHere") }),
            e.jsx("p", {
              className: "muted small",
              children: f.map((y) => h(y.name)).join(" · "),
            }),
            e.jsx("p", {
              className: "muted small",
              children: c("tr.pg.notHereNote"),
            }),
          ],
        }),
    ],
  });
}
function Kx() {
  const { s, go: i, t: a, f: l, L: c } = me(),
    m = Ja(s, Oe),
    h = s.settings.trainerSharePct,
    p = s.trainerEarningsSeed[Oe] || 0,
    f = s.ledger.filter((k) => k.kind === "pt" && k.trainerId === Oe),
    y = Ju(s),
    j = y.reduce((k, b) => k + zn(b).sessions, 0),
    C = y.reduce((k, b) => k + zn(b).sessions - b.remaining, 0),
    v = y.reduce((k, b) => k + zn(b).price, 0),
    g = s.payouts.filter((k) => k.trainerId === Oe),
    N = (k) => de(s.ptSessions, k.replace(/^pt-/, ""));
  return e.jsxs("div", {
    className: "mscreen tr-earnings",
    children: [
      e.jsxs("header", {
        className: "tr-earn-head",
        children: [
          e.jsxs("div", {
            className: "tr-earn-top",
            children: [
              e.jsx("h1", { children: a("tr.ea.title") }),
              e.jsx(ge, { tone: "forest", children: a("tr.ea.month") }),
            ],
          }),
          e.jsx("p", {
            className: "tr-earn-num tnum",
            children: l.money(m.month),
          }),
          e.jsxs("div", {
            className: "tr-earn-split",
            children: [
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: a("tr.ea.owed") }),
                  e.jsx("b", { className: "tnum", children: l.money(m.owed) }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: a("tr.ea.paid") }),
                  e.jsx("b", { className: "tnum", children: l.money(m.paid) }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("small", { children: a("tr.ea.today") }),
                  e.jsx("b", {
                    className: "tnum",
                    children: a("tr.ea.sessionsN", { n: f.length }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-split-h",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", {
                id: "tr-split-h",
                children: a("tr.ea.splitTitle"),
              }),
              e.jsx("span", {
                className: "muted small",
                children: a("tr.ea.setBy"),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mcard tr-split",
            children: [
              e.jsxs("div", {
                className: "tr-bar",
                role: "img",
                "aria-label": a("tr.ea.barLabel", {
                  you: l.pct(h),
                  gym: l.pct(100 - h),
                }),
                children: [
                  e.jsxs("span", {
                    className: "you",
                    style: { inlineSize: `${h}%` },
                    children: [
                      e.jsx("b", { className: "tnum", children: l.pct(h) }),
                      a("tr.ea.you"),
                    ],
                  }),
                  e.jsxs("span", {
                    className: "gym",
                    children: [
                      e.jsx("b", {
                        className: "tnum",
                        children: l.pct(100 - h),
                      }),
                      a("tr.ea.gym"),
                    ],
                  }),
                ],
              }),
              e.jsxs("table", {
                className: "tr-table",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      children: [
                        e.jsx("th", {
                          scope: "col",
                          children: a("tr.ea.colPkg"),
                        }),
                        e.jsx("th", {
                          scope: "col",
                          children: a("tr.ea.colPer"),
                        }),
                        e.jsx("th", {
                          scope: "col",
                          children: a("tr.ea.colYou"),
                        }),
                        e.jsx("th", {
                          scope: "col",
                          children: a("tr.ea.colGym"),
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: Jt.map((k) => {
                      const b = Math.round(k.price / k.sessions),
                        w = Js(s, b);
                      return e.jsxs(
                        "tr",
                        {
                          children: [
                            e.jsxs("th", {
                              scope: "row",
                              children: [
                                e.jsx("span", {
                                  children: a("sessionsN", { n: k.sessions }),
                                }),
                                e.jsx("small", {
                                  className: "tnum",
                                  children: l.money(k.price),
                                }),
                              ],
                            }),
                            e.jsx("td", {
                              className: "tnum",
                              children: l.money(b),
                            }),
                            e.jsx("td", {
                              className: "tnum you",
                              children: l.money(w),
                            }),
                            e.jsx("td", {
                              className: "tnum",
                              children: l.money(b - w),
                            }),
                          ],
                        },
                        k.id,
                      );
                    }),
                  }),
                ],
              }),
              e.jsx("p", {
                className: "muted small",
                children: a("tr.ea.formula", { pct: l.pct(h) }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-month-h",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", {
              id: "tr-month-h",
              children: a("tr.ea.breakdown"),
            }),
          }),
          e.jsxs("div", {
            className: "mcard tr-ledger",
            children: [
              e.jsxs("div", {
                className: "tr-line",
                children: [
                  e.jsxs("span", {
                    children: [
                      a("tr.ea.earlier"),
                      e.jsx("small", { children: a("tr.ea.earlierNote") }),
                    ],
                  }),
                  e.jsx("b", { className: "tnum", children: l.money(p) }),
                ],
              }),
              f.map((k) => {
                const b = N(k.key);
                return e.jsxs(
                  "div",
                  {
                    className: "tr-line plus",
                    children: [
                      e.jsxs("span", {
                        children: [
                          a("tr.ea.confirmedLine", {
                            name: c(ze(s, k.memberId).name),
                            time: b ? l.clock(b.time) : "",
                          }),
                          e.jsx("small", {
                            className: "tnum",
                            children: a("tr.ea.calcLine", {
                              value: l.money(k.value),
                              pct: l.pct(h),
                            }),
                          }),
                        ],
                      }),
                      e.jsxs("b", {
                        className: "tnum",
                        children: ["+", l.money(Js(s, k.value))],
                      }),
                    ],
                  },
                  k.id,
                );
              }),
              !f.length &&
                e.jsxs("div", {
                  className: "tr-line hint",
                  children: [
                    e.jsxs("span", {
                      children: [
                        a("tr.ea.noneToday"),
                        e.jsx("small", { children: a("tr.ea.noneTodayHint") }),
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      className: "link",
                      onClick: () => i("trainer", "today"),
                      children: a("tr.nav.today"),
                    }),
                  ],
                }),
              m.paid > 0 &&
                e.jsxs("div", {
                  className: "tr-line minus",
                  children: [
                    e.jsx("span", { children: a("tr.ea.paidOut") }),
                    e.jsxs("b", {
                      className: "tnum",
                      children: ["−", l.money(m.paid)],
                    }),
                  ],
                }),
              e.jsxs("div", {
                className: "tr-line total",
                children: [
                  e.jsx("span", { children: a("tr.ea.owedTotal") }),
                  e.jsx("b", { className: "tnum", children: l.money(m.owed) }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-sold-h",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", {
              id: "tr-sold-h",
              children: a("tr.ea.sold"),
            }),
          }),
          e.jsxs("div", {
            className: "tr-stats",
            children: [
              e.jsxs("span", {
                children: [
                  e.jsx("b", { className: "tnum", children: l.num(y.length) }),
                  e.jsx("small", { children: a("tr.ea.packages") }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("b", {
                    className: "tnum",
                    children: a("of", { a: l.num(C), b: l.num(j) }),
                  }),
                  e.jsx("small", { children: a("tr.ea.delivered") }),
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("b", { className: "tnum", children: l.money(v) }),
                  e.jsx("small", { children: a("tr.ea.soldValue") }),
                ],
              }),
            ],
          }),
          e.jsx("div", {
            className: "later-list",
            children: y.map((k) => {
              const b = zn(k);
              return e.jsx(
                Ue,
                {
                  icon:
                    k.method === "cash"
                      ? "cash"
                      : k.method === "card"
                        ? "card"
                        : "receipt",
                  title: `${c(ze(s, k.memberId).name)} · ${a("sessionsN", { n: b.sessions })}`,
                  meta: e.jsxs("span", {
                    className: "tnum",
                    children: [
                      l.money(b.price),
                      " · ",
                      a(`method.${k.method}`),
                      " · ",
                      k.at === xe ? a("today") : l.date(k.at),
                    ],
                  }),
                  end: e.jsx("span", {
                    className: "tr-left tnum",
                    children: a("tr.ea.leftOf", {
                      a: k.remaining,
                      n: b.sessions,
                    }),
                  }),
                  onClick: () => i("trainer", "clients", k.memberId),
                },
                k.id,
              );
            }),
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-pay-h",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", {
              id: "tr-pay-h",
              children: a("tr.ea.payouts"),
            }),
          }),
          g.length
            ? e.jsx("div", {
                className: "later-list",
                children: g.map((k) =>
                  e.jsx(
                    Ue,
                    {
                      icon: "coins",
                      iconTone: "lime",
                      title: l.money(k.amount),
                      meta: e.jsx("span", {
                        className: "tnum",
                        children: a("tr.ea.payoutMeta", { time: l.time(k.at) }),
                      }),
                      end: e.jsx(ge, {
                        tone: "ok",
                        children: a("status.paid"),
                      }),
                    },
                    k.id,
                  ),
                ),
              })
            : e.jsx("div", {
                className: "mcard",
                children: e.jsx(Ze, {
                  icon: "coins",
                  title: a("tr.ea.noPayouts"),
                  children: a("tr.ea.noPayoutsText"),
                }),
              }),
          e.jsxs("p", {
            className: "policy",
            children: [e.jsx(M, { name: "info", size: 15 }), a("tr.ea.policy")],
          }),
        ],
      }),
    ],
  });
}
function Zx() {
  const { s, go: i, t: a, f: l, L: c } = me(),
    m = na(s)
      .map((h) => ({ m: h, msgs: nr(s, h.id) }))
      .sort((h, p) => {
        var f, y;
        return (
          ((f = p.msgs.at(-1)) == null ? void 0 : f.at) || ""
        ).localeCompare(((y = h.msgs.at(-1)) == null ? void 0 : y.at) || "");
      });
  return e.jsxs("div", {
    className: "mscreen tr-messages",
    children: [
      e.jsxs("header", {
        className: "mhead",
        children: [
          e.jsx("h1", { children: a("tr.msg.title") }),
          e.jsx("p", {
            className: "muted tr-lead",
            children: a("tr.msg.lead"),
          }),
        ],
      }),
      e.jsx("ul", {
        className: "tr-threads",
        children: m.map(({ m: h, msgs: p }) => {
          const f = p.at(-1),
            y = rc(s, h.id);
          return e.jsx(
            "li",
            {
              children: e.jsxs("button", {
                type: "button",
                className: `tr-thread ${y ? "unread" : ""}`,
                onClick: () => i("trainer", "messages", h.id),
                children: [
                  e.jsx(Ke, {
                    name: c(h.name),
                    tone: h.id === be ? "lime" : "ladies",
                  }),
                  e.jsxs("span", {
                    className: "tr-thread-body",
                    children: [
                      e.jsxs("span", {
                        className: "tr-thread-top",
                        children: [
                          e.jsx("strong", { children: c(h.name) }),
                          f && e.jsx("time", { children: l.clock(f.at) }),
                        ],
                      }),
                      e.jsxs("span", {
                        className: "tr-thread-last",
                        children: [
                          e.jsx("span", {
                            children: f
                              ? `${f.from === Oe ? `${a("tr.msg.you")}: ` : ""}${c(f.text)}`
                              : a("tr.msg.empty"),
                          }),
                          y > 0 &&
                            e.jsx("b", {
                              className: "tr-badge tnum",
                              "aria-label": a("tr.msg.unreadN", { n: y }),
                              children: l.num(y),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            },
            h.id,
          );
        }),
      }),
      e.jsxs("p", {
        className: "policy",
        children: [e.jsx(M, { name: "shield", size: 15 }), a("tr.msg.policy")],
      }),
    ],
  });
}
const Xx = ["tr.q.see", "tr.q.program", "tr.q.renew"];
function Jx({ id: s }) {
  const { s: i, act: a, go: l, t: c, f: m, L: h } = me(),
    p = sr(),
    f = ze(i, s),
    y = nr(i, s),
    [j, C] = V.useState(""),
    v = V.useRef(null),
    g = Zu(i, s),
    N = en(i, s, Oe),
    k = { en: f.name.en.split(" ")[0], ar: f.name.ar.split(" ")[0] },
    b = g ? g.time : "";
  return (
    V.useEffect(() => {
      var w, S;
      (S = (w = v.current) == null ? void 0 : w.scrollIntoView) == null ||
        S.call(w, { block: "nearest" });
    }, [y.length]),
    e.jsxs("div", {
      className: "mscreen tr-chat",
      children: [
        e.jsxs("button", {
          type: "button",
          className: "tr-chat-head",
          onClick: () => l("trainer", "clients", s),
          children: [
            e.jsx(Ke, {
              name: h(f.name),
              tone: f.id === be ? "lime" : "ladies",
            }),
            e.jsxs("span", {
              className: "tr-chat-who",
              children: [
                e.jsx("strong", { children: h(f.name) }),
                e.jsxs("small", {
                  className: "tnum",
                  children: [
                    g
                      ? c("tr.msg.next", {
                          when: `${p(g.day)} · ${m.clock(g.time)}`,
                        })
                      : c("tr.cl.none"),
                    N ? ` · ${c("tr.td.pkgLeft", { n: N.remaining })}` : "",
                  ],
                }),
              ],
            }),
            e.jsx(ar, { memberId: s }),
          ],
        }),
        y.length
          ? e.jsxs("div", {
              className: "chat",
              "aria-live": "polite",
              children: [
                y.map((w) =>
                  e.jsxs(
                    "p",
                    {
                      className: `bubble ${w.from === Oe ? "mine" : ""}`,
                      children: [
                        h(w.text),
                        e.jsx("time", { children: m.clock(w.at) }),
                      ],
                    },
                    w.id,
                  ),
                ),
                e.jsx("span", { ref: v }),
              ],
            })
          : e.jsx(Ze, {
              icon: "chat",
              title: c("tr.msg.empty"),
              children: c("tr.msg.emptyText"),
            }),
        e.jsx("div", {
          className: "tr-quick",
          role: "group",
          "aria-label": c("tr.msg.quick"),
          children: Xx.filter((w) =>
            w === "tr.q.see"
              ? !!g
              : w === "tr.q.renew"
                ? !!N && N.remaining <= 5
                : !0,
          ).map((w) =>
            e.jsx(
              "button",
              {
                type: "button",
                onClick: () => a(tp, s, Oe, w, { name: k, time: b }),
                children: c(w, { name: h(k), time: m.clock(b) }),
              },
              w,
            ),
          ),
        }),
        e.jsxs("form", {
          className: "composer",
          onSubmit: (w) => {
            (w.preventDefault(), a(tc, s, Oe, j), C(""));
          },
          children: [
            e.jsx("input", {
              className: "input",
              value: j,
              onChange: (w) => C(w.target.value),
              placeholder: c("m.co.write"),
              "aria-label": c("m.co.write"),
            }),
            e.jsx(Z, {
              type: "submit",
              icon: "send",
              disabled: !j.trim(),
              "aria-label": c("m.co.send"),
            }),
          ],
        }),
      ],
    })
  );
}
const vl = [
    { id: "today", icon: "home", label: "tr.nav.today" },
    { id: "clients", icon: "users", label: "tr.nav.clients" },
    { id: "programs", icon: "dumbbell", label: "tr.nav.programs" },
    { id: "earnings", icon: "wallet", label: "tr.nav.earnings" },
    { id: "messages", icon: "chat", label: "tr.nav.messages" },
  ],
  gu = (s) => {
    var i;
    return (
      ((i = de(s.ptSessions, "pt2")) == null ? void 0 : i.status) !==
      "scheduled"
    );
  },
  e1 = {
    today: {
      phase: "2",
      ref: "§7",
      lead: "tr.p.today.lead",
      points: ["tr.p.today.1", "tr.p.today.2", "tr.p.today.3"],
      tries: [
        {
          label: "tr.try.confirm",
          icon: "check",
          run: (s) => wl(s, "pt2"),
          disabled: gu,
        },
        {
          label: "tr.try.checkin",
          icon: "scan",
          run: (s) => Zs(s, "m1", { method: "qr", by: "reception" }),
          disabled: (s) => !!qt(s, "m1"),
        },
        { label: "tr.try.memberSees", icon: "phone", go: ["member", "coach"] },
      ],
    },
    clients: {
      phase: "2",
      ref: "§7 · Law 151",
      lead: "tr.p.clients.lead",
      points: ["tr.p.clients.1", "tr.p.clients.2", "tr.p.clients.3"],
      tries: [
        {
          label: "tr.try.share",
          icon: "watch",
          run: (s) =>
            js(s, {
              wearable: !0,
              wearableSource: s.consent.wearableSource || "healthkit",
              shareWithTrainer: !0,
            }),
          disabled: (s) => s.consent.shareWithTrainer,
        },
        {
          label: "tr.try.revoke",
          icon: "eyeOff",
          run: (s) => js(s, { shareWithTrainer: !1 }),
          disabled: (s) => !s.consent.shareWithTrainer,
        },
        {
          label: "tr.try.memberHealth",
          icon: "phone",
          go: ["member", "health"],
        },
      ],
    },
    programs: {
      phase: "2",
      ref: "§5 · §7",
      lead: "tr.p.programs.lead",
      points: ["tr.p.programs.1", "tr.p.programs.2", "tr.p.programs.3"],
      tries: [
        {
          label: "tr.try.breakLegPress",
          icon: "wrench",
          run: (s) => _o(s, "e5", "maintenance"),
          disabled: (s) => {
            var i;
            return (
              ((i = de(s.equipment, "e5")) == null ? void 0 : i.status) ===
              "maintenance"
            );
          },
        },
        {
          label: "tr.try.fixPulldown",
          icon: "ok",
          run: (s) => _o(s, "e8", "active"),
          disabled: (s) => {
            var i;
            return (
              ((i = de(s.equipment, "e8")) == null ? void 0 : i.status) !==
              "maintenance"
            );
          },
        },
        {
          label: "tr.try.memberProgram",
          icon: "phone",
          go: ["member", "training"],
        },
      ],
    },
    earnings: {
      phase: "2",
      ref: "§7",
      lead: "tr.p.earnings.lead",
      points: ["tr.p.earnings.1", "tr.p.earnings.2", "tr.p.earnings.3"],
      tries: [
        {
          label: "tr.try.confirm",
          icon: "check",
          run: (s) => wl(s, "pt2"),
          disabled: gu,
        },
        {
          label: "tr.try.payout",
          icon: "coins",
          run: (s) => Iu(s, Oe),
          disabled: (s) => Ja(s, Oe).owed <= 0,
        },
        { label: "tr.try.adminStaff", icon: "chart", go: ["admin", "staff"] },
      ],
    },
    messages: {
      phase: "2",
      ref: "§7",
      lead: "tr.p.messages.lead",
      points: ["tr.p.messages.1", "tr.p.messages.2"],
      tries: [
        {
          label: "tr.try.salmaWrites",
          icon: "chat",
          run: (s) => tp(s, "m1", "m1", "tr.demo.salmaMsg"),
        },
        { label: "tr.try.memberChat", icon: "phone", go: ["member", "coach"] },
        { label: "tr.try.advance", icon: "timer", run: (s) => ts(s, 60) },
      ],
    },
  };
function t1({ page: s, param: i }) {
  const { s: a, go: l, t: c } = me(),
    m = vl.find((y) => y.id === s) || vl[0],
    h = i && (s === "clients" || s === "messages") && Ku(a, i);
  (V.useEffect(() => {
    var y, j;
    ((y = document.querySelector(".tr-app .mapp-scroll")) == null ||
      y.scrollTo({ top: 0 }),
      (j = window.scrollTo) == null || j.call(window, { top: 0 }));
  }, [s, i]),
    h && s === "messages" && Ox(nr(a, i).map((y) => y.id)));
  const p = Rx(a);
  let f;
  return (
    s === "clients"
      ? (f = h ? e.jsx(Vx, { id: i }) : e.jsx(Ux, {}))
      : s === "programs"
        ? (f = e.jsx(Qx, { initial: i }))
        : s === "earnings"
          ? (f = e.jsx(Kx, {}))
          : s === "messages"
            ? (f = h ? e.jsx(Jx, { id: i }) : e.jsx(Zx, {}))
            : (f = e.jsx(n1, {})),
    e.jsxs("div", {
      className: "mapp tr-app",
      children: [
        e.jsxs("div", {
          className: "mapp-scroll",
          children: [
            h &&
              e.jsxs("div", {
                className: "mbar",
                children: [
                  e.jsx(yn, {
                    icon: "back",
                    label: c("back"),
                    onClick: () => l("trainer", s),
                  }),
                  e.jsx("h1", {
                    children: c(
                      s === "clients" ? "tr.cl.detail" : "tr.msg.chat",
                    ),
                  }),
                ],
              }),
            f,
          ],
        }),
        e.jsx("nav", {
          className: "tabbar",
          "aria-label": c("tr.nav.label"),
          children: vl.map((y) =>
            e.jsxs(
              "button",
              {
                type: "button",
                className: m.id === y.id ? "on" : "",
                "aria-current": m.id === y.id ? "page" : void 0,
                onClick: () => l("trainer", y.id),
                children: [
                  e.jsxs("span", {
                    className: "tab-ico",
                    children: [
                      e.jsx(M, { name: y.icon, size: 21 }),
                      y.id === "messages" &&
                        p > 0 &&
                        e.jsx("b", {
                          className: "tr-badge tnum",
                          "aria-label": c("tr.msg.unreadN", { n: p }),
                          children: p,
                        }),
                    ],
                  }),
                  e.jsx("span", {
                    className: "tab-label",
                    children: c(y.label),
                  }),
                ],
              },
              y.id,
            ),
          ),
        }),
      ],
    })
  );
}
function n1() {
  const { s, go: i, t: a, f: l, L: c } = me(),
    m = sr(),
    [h, p] = V.useState(null),
    f = Ix(),
    y = Ya(s).filter((S) => S.day === 0),
    j = Ho(s).filter((S) => S.day === 0),
    C = y.filter((S) => S.status === "scheduled").length,
    v = Ja(s, Oe),
    g =
      s.clock < 720
        ? "tr.greet.morning"
        : s.clock < 1020
          ? "tr.greet.afternoon"
          : "tr.greet.evening",
    N = [
      ...y.map((S) => ({ key: S.id, at: ss(S), pt: S })),
      ...j.map((S) => ({ key: S.id, at: bt(S), c: S })),
    ].sort((S, ae) => S.at - ae.at),
    k = N.findIndex((S) => S.at > s.clock),
    b = [
      ...Ya(s)
        .filter((S) => S.day > 0 && S.status === "scheduled")
        .map((S) => ({ key: S.id, at: ss(S), pt: S })),
      ...Ho(s)
        .filter((S) => S.day > 0)
        .map((S) => ({ key: S.id, at: bt(S), c: S })),
    ].sort((S, ae) => S.at - ae.at),
    w = l1();
  return e.jsxs("div", {
    className: "mscreen tr-today",
    children: [
      e.jsxs("header", {
        className: "home-head",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                children: a(g, { name: c(f.name).split(" ")[0] }),
              }),
              e.jsxs("p", {
                className: "home-gym",
                children: [
                  l.weekday(xe, "long"),
                  " ",
                  l.date(xe),
                  " · ",
                  c(f.specialty),
                ],
              }),
            ],
          }),
          e.jsx(Ke, { name: c(f.name), tone: "ladies" }),
        ],
      }),
      e.jsx(s1, { onSheet: p }),
      e.jsxs("div", {
        className: "tr-stats",
        children: [
          e.jsxs("span", {
            children: [
              e.jsx("b", { className: "tnum", children: l.num(N.length) }),
              e.jsx("small", { children: a("tr.td.sessions") }),
            ],
          }),
          e.jsxs("span", {
            className: C ? "hot" : "",
            children: [
              e.jsx("b", { className: "tnum", children: l.num(C) }),
              e.jsx("small", { children: a("tr.td.toConfirm") }),
            ],
          }),
          e.jsxs("button", {
            type: "button",
            onClick: () => i("trainer", "earnings"),
            children: [
              e.jsx("b", { className: "tnum", children: l.money(v.month) }),
              e.jsx("small", { children: a("tr.td.month") }),
            ],
          }),
        ],
      }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-day-h",
        children: [
          e.jsxs("div", {
            className: "msec-head",
            children: [
              e.jsx("h2", { id: "tr-day-h", children: a("tr.td.schedule") }),
              e.jsx(Ge, { phase: "2" }),
            ],
          }),
          e.jsxs("ol", {
            className: "tr-timeline",
            children: [
              N.map((S, ae) =>
                e.jsxs(
                  Tn.Fragment,
                  {
                    children: [
                      ae === k && e.jsx(yu, {}),
                      S.pt
                        ? e.jsx(a1, { pt: S.pt, onSheet: p })
                        : e.jsx(r1, { c: S.c }),
                    ],
                  },
                  S.key,
                ),
              ),
              k === -1 && e.jsx(yu, {}),
            ],
          }),
        ],
      }),
      w.length > 0 &&
        e.jsxs("section", {
          className: "msec",
          "aria-labelledby": "tr-al-h",
          children: [
            e.jsxs("div", {
              className: "msec-head",
              children: [
                e.jsx("h2", { id: "tr-al-h", children: a("tr.td.attention") }),
                e.jsx("span", {
                  className: "muted small tnum",
                  children: l.num(w.length),
                }),
              ],
            }),
            e.jsx("div", {
              className: "later-list",
              children: w.map((S) =>
                e.jsx(
                  Ue,
                  {
                    icon: S.icon,
                    iconTone: S.tone,
                    title: S.title,
                    meta: S.meta,
                    onClick: () => i("trainer", ...S.go),
                  },
                  S.id,
                ),
              ),
            }),
          ],
        }),
      e.jsxs("section", {
        className: "msec",
        "aria-labelledby": "tr-week-h",
        children: [
          e.jsx("div", {
            className: "msec-head",
            children: e.jsx("h2", {
              id: "tr-week-h",
              children: a("tr.td.week"),
            }),
          }),
          e.jsx("div", {
            className: "later-list",
            children: b.slice(0, 5).map((S) => {
              const ae = S.pt ? S.pt.day : S.c.day,
                _ = S.pt ? S.pt.time : S.c.time;
              return S.pt
                ? e.jsx(
                    Ue,
                    {
                      lead: e.jsxs("span", {
                        className: "tr-when tnum",
                        children: [
                          l.clock(_),
                          e.jsx("small", { children: m(ae, "short") }),
                        ],
                      }),
                      title: a("tr.td.ptWith", {
                        name: c(ze(s, S.pt.memberId).name),
                      }),
                      meta: a("tr.td.ptMeta"),
                      onClick: () => i("trainer", "clients", S.pt.memberId),
                    },
                    S.key,
                  )
                : e.jsx(
                    Ue,
                    {
                      lead: e.jsxs("span", {
                        className: "tr-when tnum",
                        children: [
                          l.clock(_),
                          e.jsx("small", { children: m(ae, "short") }),
                        ],
                      }),
                      title: c(S.c.title),
                      meta: `${a("tr.td.booked", { a: Xu(s, S.c), b: S.c.cap })}${S.c.womenOnly ? ` · ${a("ladiesOnly")}` : ""}`,
                    },
                    S.key,
                  );
            }),
          }),
        ],
      }),
      h && e.jsx(np, { pt: h.pt, mode: h.mode, onClose: () => p(null) }),
    ],
  });
}
function yu() {
  const { s, t: i, f: a } = me();
  return e.jsxs("li", {
    className: "tr-now",
    "aria-label": i("tr.td.now", { time: a.time(s.clock) }),
    children: [
      e.jsx("span", { className: "tnum", children: a.time(s.clock) }),
      e.jsx("i", {}),
    ],
  });
}
function s1({ onSheet: s }) {
  const { s: i, go: a, t: l, f: c, L: m } = me(),
    h = Bx(),
    p = Ya(i).filter((S) => S.day === 0),
    f = p.find((S) => S.status === "scheduled"),
    y =
      !f &&
      p
        .filter((S) => S.status === "completed" && S.confirmedAt != null)
        .sort((S, ae) => ae.confirmedAt - S.confirmedAt)[0];
  if (!f && !y)
    return e.jsxs("section", {
      className: "tr-hero tr-hero-empty",
      children: [
        e.jsx("h2", { children: l("tr.hero.clearTitle") }),
        e.jsx("p", { children: l("tr.hero.clearText") }),
      ],
    });
  const j = f || y,
    C = ze(i, j.memberId),
    v = m(C.name).split(" ")[0],
    g = Rl(i, j.memberId),
    N = g && zn(g),
    k = g ? El(g) : 0,
    b = Ol(i, j),
    w = h(ss(j));
  return y
    ? e.jsxs("section", {
        className: "tr-hero is-done",
        "aria-live": "polite",
        children: [
          e.jsxs("div", {
            className: "tr-hero-top",
            children: [
              e.jsx("h2", { children: l("tr.hero.confirmed") }),
              e.jsx(ge, {
                tone: "dark",
                icon: "check",
                children: l("tr.hero.at", { time: c.time(j.confirmedAt) }),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "tr-hero-done",
            children: [
              e.jsx("span", {
                className: "pass-check",
                children: e.jsx(M, { name: "check", size: 34 }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("strong", {
                    children: l("tr.hero.doneWith", {
                      name: m(C.name),
                      time: c.clock(j.time),
                    }),
                  }),
                  e.jsxs("ul", {
                    children: [
                      e.jsx("li", {
                        className: "tnum",
                        children: g
                          ? l("tr.hero.doneLeft", {
                              a: g.remaining,
                              n: N.sessions,
                            })
                          : "",
                      }),
                      e.jsx("li", {
                        className: "tnum",
                        children: l("tr.hero.donePts", { name: v, n: Bo }),
                      }),
                      e.jsx("li", {
                        className: "tnum",
                        children: l("tr.hero.doneYou", {
                          money: c.money(Js(i, k)),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "tr-hero-actions",
            children: [
              e.jsx(Z, {
                variant: "accent",
                iconEnd: "arrow",
                onClick: () => a("trainer", "earnings"),
                children: l("tr.hero.seeEarnings"),
              }),
              e.jsx(Z, {
                variant: "ghost",
                onClick: () => a("trainer", "messages", C.id),
                children: l("tr.hero.message", { name: v }),
              }),
            ],
          }),
        ],
      })
    : e.jsxs("section", {
        className: `tr-hero phase-${b}`,
        "aria-labelledby": "tr-hero-h",
        children: [
          e.jsxs("div", {
            className: "tr-hero-top",
            children: [
              e.jsx("h2", { id: "tr-hero-h", children: l("tr.hero.next") }),
              e.jsx(ge, {
                tone: b === "upcoming" ? "dark" : "lime",
                icon: "clock",
                children:
                  b === "live"
                    ? l("tr.hero.live")
                    : b === "due"
                      ? l("tr.hero.due")
                      : w,
              }),
            ],
          }),
          e.jsxs("button", {
            type: "button",
            className: "tr-hero-who",
            onClick: () => a("trainer", "clients", C.id),
            children: [
              e.jsx("span", {
                className: "tr-hero-time tnum",
                children: c.clock(j.time),
              }),
              e.jsxs("span", {
                className: "tr-hero-name",
                children: [
                  e.jsx("strong", { children: m(C.name) }),
                  e.jsx("small", { children: l("tr.hero.kind", { n: Xs }) }),
                ],
              }),
              e.jsx(M, { name: "chevron", size: 18 }),
            ],
          }),
          e.jsxs("div", {
            className: "tr-hero-facts",
            children: [
              e.jsx(ar, { memberId: C.id, dark: !0 }),
              g
                ? e.jsxs("div", {
                    className: "tr-hero-pkg",
                    children: [
                      e.jsx("span", {
                        className: "tnum",
                        children: l("tr.hero.pkg", {
                          a: g.remaining,
                          n: N.sessions,
                        }),
                      }),
                      e.jsx(lc, { pp: g }),
                    ],
                  })
                : e.jsxs("span", {
                    className: "tr-hero-warn",
                    children: [
                      e.jsx(M, { name: "warn", size: 15 }),
                      l("tr.hero.noPkg"),
                    ],
                  }),
            ],
          }),
          e.jsx(Z, {
            variant: "accent",
            size: "lg",
            block: !0,
            icon: "check",
            disabled: !en(i, j.memberId, Oe),
            onClick: () => s({ pt: j, mode: "confirm" }),
            children: l("tr.hero.confirm"),
          }),
          e.jsx("p", {
            className: "tr-hero-note tnum",
            children: l("tr.hero.note", {
              money: c.money(Js(i, k)),
              name: v,
              n: Bo,
            }),
          }),
          e.jsxs("div", {
            className: "tr-hero-minor",
            children: [
              e.jsxs("button", {
                type: "button",
                onClick: () => s({ pt: j, mode: "noshow" }),
                children: [
                  e.jsx(M, { name: "flag", size: 15 }),
                  l("tr.act.noshow"),
                ],
              }),
              e.jsxs("button", {
                type: "button",
                onClick: () => s({ pt: j, mode: "cancel" }),
                children: [
                  e.jsx(M, { name: "x", size: 15 }),
                  l("tr.act.cancel"),
                ],
              }),
              e.jsxs("button", {
                type: "button",
                onClick: () => a("trainer", "messages", C.id),
                children: [
                  e.jsx(M, { name: "chat", size: 15 }),
                  l("tr.act.message"),
                ],
              }),
            ],
          }),
        ],
      });
}
function a1({ pt: s, onSheet: i }) {
  const { s: a, go: l, t: c, f: m, L: h } = me(),
    p = ze(a, s.memberId),
    f = Ol(a, s),
    y = Rl(a, s.memberId);
  return e.jsxs("li", {
    className: `tr-item pt ${["completed", "cancelled", "noshow"].includes(f) ? "is-past" : ""}`,
    children: [
      e.jsxs("span", {
        className: "tr-item-time tnum",
        children: [
          m.clock(s.time),
          e.jsx("small", { children: c("min", { n: Xs }) }),
        ],
      }),
      e.jsxs("button", {
        type: "button",
        className: "tr-item-body",
        onClick: () => l("trainer", "clients", p.id),
        children: [
          e.jsx("strong", { children: c("tr.td.ptWith", { name: h(p.name) }) }),
          e.jsxs("small", {
            children: [
              y ? c("tr.td.pkgLeft", { n: y.remaining }) : c("tr.td.noPkg"),
              qt(a, p.id) ? ` · ${c("tr.td.inNow")}` : "",
            ],
          }),
        ],
      }),
      e.jsx("span", {
        className: "tr-item-end",
        children:
          f === "upcoming" || f === "live" || f === "due"
            ? e.jsx(Z, {
                size: "sm",
                variant: f === "upcoming" ? "secondary" : "primary",
                onClick: () => i({ pt: s, mode: "confirm" }),
                children: c("tr.act.confirm"),
              })
            : e.jsx(_e, { value: f }),
      }),
    ],
  });
}
function r1({ c: s }) {
  const { s: i, t: a, f: l, L: c } = me(),
    m = gn(i, s),
    h = Xu(i, s);
  return e.jsxs("li", {
    className: `tr-item cls ${m === "ended" ? "is-past" : ""}`,
    children: [
      e.jsxs("span", {
        className: "tr-item-time tnum",
        children: [
          l.clock(s.time),
          e.jsx("small", { children: a("min", { n: s.dur }) }),
        ],
      }),
      e.jsxs("span", {
        className: "tr-item-body",
        children: [
          e.jsx("strong", { children: c(s.title) }),
          e.jsxs("small", {
            className: "tnum",
            children: [
              a("tr.td.booked", { a: h, b: s.cap }),
              s.womenOnly ? ` · ${a("ladiesOnly")}` : "",
            ],
          }),
        ],
      }),
      e.jsx("span", {
        className: "tr-item-end",
        children:
          m === "live"
            ? e.jsx(ge, { tone: "lime", children: a("m.book.live") })
            : m === "ended"
              ? e.jsx("span", {
                  className: "muted small",
                  children: a("tr.td.ended"),
                })
              : h >= s.cap
                ? e.jsx(ge, { tone: "forest", children: a("tr.td.full") })
                : e.jsx(ge, { tone: "neutral", children: a("tr.td.class") }),
      }),
    ],
  });
}
function l1() {
  const { s, t: i, f: a, L: l } = me(),
    c = [],
    m = (p) => l(ze(s, p).name).split(" ")[0],
    h = na(s);
  for (const p of h) {
    const f = rc(s, p.id);
    if (f) {
      const y = nr(s, p.id).at(-1);
      c.push({
        id: `msg-${p.id}`,
        icon: "chat",
        tone: "lime",
        title: i("tr.al.unread", { name: m(p.id), n: f }),
        meta: `“${l(y.text)}”`,
        go: ["messages", p.id],
      });
    }
  }
  for (const p of s.equipment.filter((f) => f.status === "maintenance")) {
    const f = Xt(p),
      y = s.programs.filter(
        (j) =>
          j.trainerId === Oe && j.items.some((C) => C.equipmentId === p.id),
      );
    y.length
      ? y.forEach((j) =>
          c.push({
            id: `eq-${p.id}-${j.id}`,
            icon: "wrench",
            tone: "bad",
            title: i("tr.al.maintProg", {
              machine: l(f.name),
              label: p.label,
              name: m(j.memberId),
            }),
            meta: i("tr.al.maintProgMeta"),
            go: ["programs", j.memberId],
          }),
        )
      : c.push({
          id: `eq-${p.id}`,
          icon: "wrench",
          tone: "warn",
          title: i("tr.al.maint", { machine: l(f.name), label: p.label }),
          meta: i("tr.al.maintMeta"),
          go: ["programs"],
        });
  }
  for (const p of h) {
    const f = en(s, p.id, Oe);
    if (!f) {
      c.push({
        id: `pk-${p.id}`,
        icon: "package",
        tone: "bad",
        title: i("tr.al.noPkg", { name: m(p.id) }),
        meta: i("tr.al.noPkgMeta"),
        go: ["clients", p.id],
      });
      continue;
    }
    const y = Ks(xe, f.expires);
    (f.remaining <= 2 || y <= 30) &&
      c.push({
        id: `pk-${p.id}`,
        icon: "package",
        tone: "warn",
        title: i(f.remaining <= 2 ? "tr.al.pkgLow" : "tr.al.pkgExp", {
          name: m(p.id),
          n: f.remaining,
          d: y,
        }),
        meta: i("tr.al.pkgMeta", { n: f.remaining, date: a.date(f.expires) }),
        go: ["clients", p.id],
      });
  }
  for (const p of h) {
    const f = lt(s, p),
      y = Mn(p);
    f === "frozen" || f === "expired"
      ? c.push({
          id: `mb-${p.id}`,
          icon: f === "frozen" ? "snow" : "lock",
          tone: f === "frozen" ? "frost" : "bad",
          title: i(`tr.al.${f}`, { name: m(p.id) }),
          meta: i("tr.al.holdMeta"),
          go: ["clients", p.id],
        })
      : y <= 31 &&
        c.push({
          id: `mb-${p.id}`,
          icon: "calendar",
          tone: "warn",
          title: i("tr.al.memEnds", { name: m(p.id), n: y }),
          meta: i("tr.al.memMeta", { date: a.date(p.end) }),
          go: ["clients", p.id],
        });
  }
  for (const p of h)
    s.programs.some((f) => f.memberId === p.id) ||
      c.push({
        id: `pg-${p.id}`,
        icon: "edit",
        tone: "plain",
        title: i("tr.al.noProgram", { name: m(p.id) }),
        meta: i("tr.al.noProgramMeta"),
        go: ["programs", p.id],
      });
  return c;
}
function wt() {
  const s = me(),
    { t: i, f: a } = s;
  return Tn.useMemo(
    () => ({ ...s, t: (l, c) => a.digits(i(l, c)) }),
    [s, i, a],
  );
}
function rs({ title: s, lead: i, phase: a, actions: l }) {
  return e.jsxs("header", {
    className: "ad-pagehead",
    children: [
      e.jsxs("div", {
        className: "ad-pagehead-text",
        children: [
          e.jsxs("div", {
            className: "ad-title-row",
            children: [
              e.jsx("h1", { children: s }),
              a && e.jsx(Ge, { phase: a }),
            ],
          }),
          i && e.jsx("p", { children: i }),
        ],
      }),
      l && e.jsx("div", { className: "ad-pagehead-actions", children: l }),
    ],
  });
}
function qe({
  title: s,
  sub: i,
  tools: a,
  children: l,
  className: c = "",
  id: m,
  pad: h = !0,
}) {
  return e.jsxs("section", {
    className: `ad-panel ${c}`,
    "aria-labelledby": m,
    children: [
      (s || a) &&
        e.jsxs("header", {
          className: "ad-panel-head",
          children: [
            e.jsxs("div", {
              className: "ad-panel-titles",
              children: [
                s && e.jsx("h2", { id: m, children: s }),
                i && e.jsx("p", { children: i }),
              ],
            }),
            a && e.jsx("div", { className: "ad-panel-tools", children: a }),
          ],
        }),
      e.jsx("div", {
        className: h ? "ad-panel-body" : "ad-panel-flush",
        children: l,
      }),
    ],
  });
}
function He({
  label: s,
  value: i,
  sub: a,
  tone: l = "",
  icon: c,
  onClick: m,
  badge: h,
}) {
  const p = m ? "button" : "div";
  return e.jsxs(p, {
    type: m ? "button" : void 0,
    className: `ad-kpi ${l ? `ad-kpi-${l}` : ""} ${m ? "is-click" : ""}`,
    onClick: m,
    children: [
      e.jsxs("span", {
        className: "ad-kpi-label",
        children: [
          c && e.jsx(M, { name: c, size: 16 }),
          e.jsx("span", { children: s }),
        ],
      }),
      e.jsxs("span", {
        className: "ad-kpi-value",
        children: [e.jsx("span", { children: i }), h],
      }),
      a && e.jsx("span", { className: "ad-kpi-sub", children: a }),
    ],
  });
}
function i1({ value: s, target: i, max: a, good: l, label: c }) {
  const m = Math.max(0, Math.min(100, (s / a) * 100)),
    h = Math.max(0, Math.min(100, (i / a) * 100));
  return e.jsxs("div", {
    className: "ad-bullet",
    role: "meter",
    "aria-valuemin": 0,
    "aria-valuemax": a,
    "aria-valuenow": s,
    "aria-label": c,
    children: [
      e.jsx("span", {
        className: `ad-bullet-fill ${l ? "" : "is-off"}`,
        style: { inlineSize: `${m}%` },
      }),
      e.jsx("span", {
        className: "ad-bullet-target",
        style: { insetInlineStart: `${h}%` },
        "aria-hidden": "true",
      }),
    ],
  });
}
function xu({ value: s, max: i, tone: a = "" }) {
  const l = i ? Math.max(0, Math.min(100, (s / i) * 100)) : 0;
  return e.jsx("span", {
    className: `ad-fill ${a}`,
    "aria-hidden": "true",
    children: e.jsx("span", { style: { inlineSize: `${l}%` } }),
  });
}
function Ba({
  value: s,
  min: i,
  max: a,
  step: l = 1,
  onChange: c,
  unit: m,
  label: h,
}) {
  const { f: p } = wt();
  return e.jsxs("div", {
    className: "ad-stepper",
    role: "group",
    "aria-label": h,
    children: [
      e.jsx("button", {
        type: "button",
        onClick: () => c(Math.max(i, s - l)),
        disabled: s <= i,
        "aria-label": `− ${h}`,
        children: e.jsx(M, { name: "minus", size: 16 }),
      }),
      e.jsxs("output", {
        className: "tnum",
        "aria-live": "polite",
        children: [
          e.jsx("b", { children: p.num(s) }),
          m && e.jsx("small", { children: m }),
        ],
      }),
      e.jsx("button", {
        type: "button",
        onClick: () => c(Math.min(a, s + l)),
        disabled: s >= a,
        "aria-label": `+ ${h}`,
        children: e.jsx(M, { name: "plus", size: 16 }),
      }),
    ],
  });
}
function Ua({ kind: s = "sample", children: i }) {
  const { t: a } = wt();
  return e.jsxs("span", {
    className: `ad-source ad-source-${s}`,
    children: [e.jsx("i", { "aria-hidden": "true" }), i || a(`a.src.${s}`)],
  });
}
function o1({ height: s = 168 }) {
  const { s: i, t: a, f: l } = wt(),
    c = Tl(i),
    m = Ml(),
    h = i.gym.capacity,
    p = Math.floor(i.clock / 60),
    [f, y] = V.useState(null),
    j = [0, 0.5, 1],
    C = ((i.clock - 360) / 1080) * 100,
    v = Ve(i.settings.ladiesHours.from),
    g = Ve(i.settings.ladiesHours.to),
    N = ((v - 360) / 1080) * 100,
    k = ((g - 360) / 1080) * 100,
    b = f != null ? m.find((w) => w.h === f) : null;
  return e.jsxs("figure", {
    className: "ad-occ",
    "aria-label": a("a.occ.figure"),
    children: [
      e.jsxs("div", {
        className: "ad-occ-plot",
        style: { blockSize: s },
        dir: "ltr",
        onMouseLeave: () => y(null),
        children: [
          e.jsx("div", {
            className: "ad-occ-grid",
            "aria-hidden": "true",
            children: j.map((w) =>
              e.jsx(
                "span",
                {
                  style: { insetBlockEnd: `${w * 100}%` },
                  children: e.jsx("b", {
                    className: "tnum",
                    children: l.num(Math.round(w * h)),
                  }),
                },
                w,
              ),
            ),
          }),
          k > N &&
            N >= 0 &&
            e.jsx("span", {
              className: "ad-occ-ladies",
              style: { insetInlineStart: `${N}%`, inlineSize: `${k - N}%` },
              "aria-hidden": "true",
              children: e.jsx("small", { children: a("ladiesHours") }),
            }),
          e.jsx("div", {
            className: "ad-occ-bars",
            children: m.map((w) => {
              const S = Math.round(w.pct * h);
              return e.jsx(
                "span",
                {
                  className: `ad-occ-col ${w.h === p ? "now" : w.h < p ? "past" : ""} ${f === w.h ? "hover" : ""}`,
                  tabIndex: 0,
                  role: "img",
                  "aria-label": a("a.occ.barLabel", {
                    time: l.time(w.h * 60),
                    n: S,
                  }),
                  onMouseEnter: () => y(w.h),
                  onFocus: () => y(w.h),
                  onBlur: () => y(null),
                  children: e.jsx("i", {
                    style: { blockSize: `${Math.max(2, w.pct * 100)}%` },
                  }),
                },
                w.h,
              );
            }),
          }),
          C >= 0 &&
            C <= 100 &&
            e.jsxs("span", {
              className: "ad-occ-now",
              style: {
                insetInlineStart: `${C}%`,
                insetBlockEnd: `${Math.min(100, c.pct * 100)}%`,
              },
              children: [
                e.jsx("i", { "aria-hidden": "true" }),
                e.jsx("b", {
                  className: "tnum",
                  children: a("a.occ.nowLabel", { n: l.num(c.count) }),
                }),
              ],
            }),
          b &&
            e.jsxs("span", {
              className: "ad-tip",
              style: {
                insetInlineStart: `${((b.h - 6 + 0.5) / 18) * 100}%`,
                insetBlockEnd: `calc(${b.pct * 100}% + 10px)`,
              },
              role: "presentation",
              children: [
                e.jsx("b", {
                  className: "tnum",
                  children: l.num(Math.round(b.pct * h)),
                }),
                e.jsx("small", {
                  children: a("a.occ.tip", { time: l.time(b.h * 60) }),
                }),
              ],
            }),
        ],
      }),
      e.jsx("div", {
        className: "ad-occ-axis tnum",
        dir: "ltr",
        "aria-hidden": "true",
        children: [6, 9, 12, 15, 18, 21].map((w) =>
          e.jsx(
            "span",
            {
              style: { insetInlineStart: `${((w - 6 + 0.5) / 18) * 100}%` },
              children: l.time(w * 60),
            },
            w,
          ),
        ),
      }),
      e.jsxs("figcaption", {
        className: "ad-legend",
        children: [
          e.jsxs("span", {
            children: [
              e.jsx("i", { className: "sw sw-typ" }),
              a("a.occ.legendTypical"),
            ],
          }),
          e.jsxs("span", {
            children: [
              e.jsx("i", { className: "sw sw-now" }),
              a("a.occ.legendNow"),
            ],
          }),
          e.jsxs("span", {
            children: [
              e.jsx("i", { className: "sw sw-ladies" }),
              a("ladiesHours"),
            ],
          }),
        ],
      }),
      e.jsxs("details", {
        className: "ad-tableview",
        children: [
          e.jsx("summary", { children: a("a.tableView") }),
          e.jsxs("table", {
            className: "ad-table ad-table-mini",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", { children: a("a.col.hour") }),
                    e.jsx("th", {
                      className: "num",
                      children: a("a.occ.colTypical"),
                    }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: m.map((w) =>
                  e.jsxs(
                    "tr",
                    {
                      children: [
                        e.jsx("td", {
                          className: "tnum",
                          children: l.time(w.h * 60),
                        }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: l.num(Math.round(w.pct * h)),
                        }),
                      ],
                    },
                    w.h,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Et = (s, i = (a) => a) => s.reduce((a, l) => a + i(l), 0),
  lp = ["card", "fawry", "instapay"];
function Fl(s) {
  const i = {
    all: s.members.length,
    active: 0,
    expiring: 0,
    expired: 0,
    frozen: 0,
    noApp: 0,
  };
  for (const a of s.members) ((i[lt(s, a)] += 1), a.app || (i.noApp += 1));
  return i;
}
function c1(s, i) {
  return s.payments.find((a) => a.memberId === i) || null;
}
function Va(s, i) {
  return i.cap - Pn(s, i);
}
function Wo(s, i) {
  return s.bookings.filter(
    (a) => a.sessionId === i && a.status === "waitlisted",
  );
}
function d1(s) {
  const i = s.visits,
    a = i.filter((g) => g.method === "qr" || g.method === "nfc").length,
    l = s.payments.filter((g) => g.at === xe),
    c = l.filter((g) => g.status === "paid"),
    m = c.filter((g) => g.method === "cash"),
    h = s.payments.filter((g) => g.status === "pending"),
    p = l.filter((g) => g.label === "renewal"),
    f = s.sessions.filter((g) => g.day === 0),
    y = new Set(f.map((g) => g.id)),
    j = s.bookings.filter((g) => y.has(g.sessionId)),
    C = Et(f, (g) => Va(s, g)),
    v = Et(f, (g) => g.cap);
  return {
    checkins: i.length,
    digital: a,
    inNow: zl(s).length,
    autoOut: i.filter((g) => g.auto).length,
    denied: s.audit.filter((g) => g.type === "entryDenied").length,
    collected: Et(c, (g) => g.amount),
    paidCount: c.length,
    cash: Et(m, (g) => g.amount),
    cashCount: m.length,
    online: Et(
      c.filter((g) => lp.includes(g.method)),
      (g) => g.amount,
    ),
    renewals: p.length,
    renewalsPaid: p.filter((g) => g.status === "paid").length,
    pending: h,
    pendingAmount: Et(h, (g) => g.amount),
    sessions: f,
    booked: C,
    cap: v,
    attended: j.filter((g) => g.status === "attended").length,
    noshows: j.filter((g) => g.status === "noshow").length,
    waitlisted: j.filter((g) => g.status === "waitlisted").length,
  };
}
function ip(s) {
  const i = s.payments.filter((m) => m.status === "paid"),
    a = {};
  for (const m of ["cash", "card", "fawry", "instapay"])
    a[m] = Et(
      i.filter((h) => h.method === m),
      (h) => h.amount,
    );
  const l = Et(
      i.filter((m) => m.by !== "app"),
      (m) => m.amount,
    ),
    c = Et(
      i.filter((m) => m.by === "app"),
      (m) => m.amount,
    );
  return {
    total: Et(i, (m) => m.amount),
    count: i.length,
    cash: a.cash,
    online: a.card + a.fawry + a.instapay,
    byMethod: a,
    byStaff: l,
    byApp: c,
    pending: Et(
      s.payments.filter((m) => m.status === "pending"),
      (m) => m.amount,
    ),
    pendingCount: s.payments.filter((m) => m.status === "pending").length,
  };
}
const m1 = 6,
  u1 = [!1, !0, !0, !0, !0];
function p1(s) {
  const i = Ko(s),
    a = i.every((h) => h.good),
    l = [...u1, a];
  let c = 0;
  for (let h = l.length - 1; h >= 0 && l[h]; h--) c++;
  const m = i.filter((h) => h.good).length;
  return {
    weeks: l,
    streak: c,
    liveOk: a,
    met: m,
    total: i.length,
    needed: 8,
    goWeek: a ? m1 + (8 - c) : null,
  };
}
function h1(s, i) {
  const a = s.packagePurchases.filter((f) => f.trainerId === i),
    l = new Set([
      ...s.members.filter((f) => f.trainerId === i).map((f) => f.id),
      ...a.map((f) => f.memberId),
    ]),
    c = Et(a, (f) => de(Jt, f.packageId).price),
    m = s.ptSessions.filter(
      (f) => f.trainerId === i && f.status === "completed",
    ).length,
    h = s.ptSessions.filter(
      (f) => f.trainerId === i && f.status === "scheduled",
    ).length,
    p = Et(a, (f) => f.remaining);
  return {
    clients: l.size,
    packages: a.length,
    sold: c,
    delivered: m,
    upcoming: h,
    remaining: p,
    ...Ja(s, i),
  };
}
const f1 = {
  entry: [
    "checkIn",
    "checkInOffline",
    "checkOut",
    "entryDenied",
    "wentOffline",
    "synced",
  ],
  payments: [
    "paid",
    "paymentPending",
    "paymentConfirmed",
    "packageSold",
    "payout",
  ],
  memberships: ["frozen", "unfrozen", "guest", "newMember"],
  bookings: [
    "booked",
    "waitlisted",
    "promoted",
    "cancelled",
    "lateCancel",
    "attended",
    "noshow",
    "ptConfirmed",
    "ptCancelled",
    "ptScheduled",
  ],
  points: [
    "redeemed",
    "promo",
    "promoRedeemed",
    "selfLog",
    "consent",
    "invite",
    "blocked",
  ],
  admin: [
    "setting",
    "equipmentAdded",
    "equipmentStatus",
    "programSaved",
    "docShared",
  ],
};
function gl(s) {
  for (const [i, a] of Object.entries(f1)) if (a.includes(s)) return i;
  return "admin";
}
function g1(s) {
  const i = s.ledger.filter((a) => a.at === xe);
  return {
    earnedToday: Et(
      i.filter((a) => a.pts > 0),
      (a) => a.pts,
    ),
    redeemedToday: Math.abs(
      Et(
        i.filter((a) => a.pts < 0),
        (a) => a.pts,
      ),
    ),
    selfLogs: s.workoutLogs.length,
  };
}
const op = (s, i, a, l) => {
  if (i === "app") return a("by.app");
  const c = de(as, i);
  return c ? l(c.name) : a("by.reception");
};
function y1({ param: s }) {
  const { s: i, go: a, t: l, f: c } = wt(),
    m = s === "payments" ? "payments" : s === "plans" ? "plans" : "members",
    [h, p] = V.useState(m),
    [f, y] = V.useState(s && s.startsWith("m") && ze(i, s) ? s : null);
  V.useEffect(() => {
    s === "payments" || s === "plans"
      ? p(s)
      : s && ze(i, s) && (p("members"), y(s));
  }, [s]);
  const j = ip(i),
    C = Fl(i);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, {
        title: l("a.mem.title"),
        lead: l("a.mem.lead"),
        phase: "pilot",
        actions: e.jsx(Z, {
          variant: "secondary",
          icon: "tablet",
          onClick: () => a("reception", "desk"),
          children: l("a.mem.openDesk"),
        }),
      }),
      e.jsx("div", {
        className: "ad-tabs",
        children: e.jsx(nt, {
          value: h,
          onChange: p,
          label: l("a.mem.title"),
          options: [
            { value: "members", label: l("a.mem.tab.members"), count: C.all },
            {
              value: "payments",
              label: l("a.mem.tab.payments"),
              count: j.pendingCount || null,
            },
            { value: "plans", label: l("a.mem.tab.plans") },
          ],
        }),
      }),
      h === "members" && e.jsx(x1, { onOpen: y }),
      h === "payments" && e.jsx(j1, {}),
      h === "plans" && e.jsx(k1, {}),
      f && e.jsx(v1, { id: f, onClose: () => y(null) }),
    ],
  });
}
function x1({ onOpen: s }) {
  const { s: i, t: a, f: l, L: c } = wt(),
    [m, h] = V.useState("all"),
    [p, f] = V.useState(!1),
    [y, j] = V.useState(""),
    C = Fl(i),
    v = i.members
      .map((N) => ({ m: N, st: lt(i, N), plan: En(N), pay: c1(i, N.id) }))
      .filter((N) => m === "all" || N.st === m)
      .filter((N) => !p || !N.m.app)
      .filter((N) => {
        const k = y.trim().toLowerCase();
        return k
          ? [N.m.name.en, N.m.name.ar, N.m.code, N.m.phone].some((b) =>
              String(b).toLowerCase().includes(k),
            )
          : !0;
      }),
    g = i.members.filter((N) => N.app).length;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "ad-kpis ad-kpis-4",
        children: [
          e.jsx(He, {
            label: a("status.active"),
            value: l.num(C.active),
            sub: a("a.mem.kActive"),
            icon: "ok",
          }),
          e.jsx(He, {
            label: a("a.mem.kExpiring"),
            value: l.num(C.expiring + C.expired),
            sub: a("a.mem.kExpiringSub", {
              a: l.num(C.expiring),
              b: l.num(C.expired),
            }),
            icon: "calendarClock",
            tone: C.expiring + C.expired ? "warn" : "",
            onClick: () => h("expiring"),
          }),
          e.jsx(He, {
            label: a("status.frozen"),
            value: l.num(C.frozen),
            sub: a("a.mem.kFrozen", { n: l.num(i.settings.freezeDaysPerYear) }),
            icon: "snow",
            onClick: () => h("frozen"),
          }),
          e.jsx(He, {
            label: a("a.mem.kApp"),
            value: l.pct(Math.round((g / i.members.length) * 100)),
            sub: a("a.mem.kAppSub", { n: l.num(C.noApp) }),
            icon: "phone",
            onClick: () => f(!0),
          }),
        ],
      }),
      e.jsxs(qe, {
        id: "ad-mem-table",
        pad: !1,
        title: a("a.mem.listTitle"),
        sub: a("a.mem.listSub", {
          n: l.num(v.length),
          total: l.num(i.members.length),
        }),
        children: [
          e.jsxs("div", {
            className: "ad-filters",
            children: [
              e.jsx(nt, {
                value: m,
                onChange: h,
                label: a("a.mem.filterStatus"),
                options: ["all", "active", "expiring", "expired", "frozen"].map(
                  (N) => ({
                    value: N,
                    label: a(N === "all" ? "all" : `status.${N}`),
                    count: N === "all" ? null : C[N] || null,
                  }),
                ),
              }),
              e.jsxs("label", {
                className: "ad-check",
                children: [
                  e.jsx("input", {
                    type: "checkbox",
                    checked: p,
                    onChange: (N) => f(N.target.checked),
                  }),
                  e.jsx("span", { children: a("a.mem.noApp") }),
                  e.jsx("span", {
                    className: "ad-check-count tnum",
                    children: l.num(C.noApp),
                  }),
                ],
              }),
              e.jsx("span", { className: "grow" }),
              e.jsxs("label", {
                className: "searchbox ad-search",
                children: [
                  e.jsx(M, { name: "search", size: 16 }),
                  e.jsx("input", {
                    type: "search",
                    value: y,
                    onChange: (N) => j(N.target.value),
                    placeholder: a("a.mem.search"),
                    "aria-label": a("a.mem.search"),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "ad-scroll",
            children: [
              e.jsxs("table", {
                className: "ad-table ad-table-members",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      children: [
                        e.jsx("th", { children: a("a.col.member") }),
                        e.jsx("th", { children: a("a.col.status") }),
                        e.jsx("th", { children: a("a.col.plan") }),
                        e.jsx("th", { children: a("a.col.ends") }),
                        e.jsx("th", { children: a("a.col.freeze") }),
                        e.jsx("th", { children: a("a.col.app") }),
                        e.jsx("th", {
                          className: "num",
                          children: a("a.col.noshows"),
                        }),
                        e.jsx("th", { children: a("a.col.lastPay") }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: v.map(({ m: N, st: k, plan: b, pay: w }) => {
                      const S =
                        i.settings.noShowPenalty &&
                        N.noShows >= i.settings.noShowLimit;
                      return e.jsxs(
                        "tr",
                        {
                          children: [
                            e.jsx("td", {
                              children: e.jsxs("button", {
                                type: "button",
                                className: "ad-person",
                                onClick: () => s(N.id),
                                children: [
                                  e.jsx(Ke, { name: c(N.name), size: "sm" }),
                                  e.jsxs("span", {
                                    children: [
                                      e.jsx("strong", { children: c(N.name) }),
                                      e.jsxs("small", {
                                        className: "tnum",
                                        children: [
                                          l.digits(N.code),
                                          N.age < 18
                                            ? ` · ${a("a.mem.minor")}`
                                            : "",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("td", { children: e.jsx(_e, { value: k }) }),
                            e.jsx("td", { children: c(b.name) }),
                            e.jsxs("td", {
                              className: "tnum",
                              children: [
                                l.date(N.end, {
                                  day: "numeric",
                                  month: "short",
                                }),
                                e.jsx("small", {
                                  className: "ad-sub",
                                  children:
                                    k === "expired"
                                      ? a("a.mem.daysAgo", { n: l.num(-Mn(N)) })
                                      : a("a.mem.daysLeft", {
                                          n: l.num(Mn(N)),
                                        }),
                                }),
                              ],
                            }),
                            e.jsx("td", {
                              className: "tnum",
                              children:
                                N.freeze && k === "frozen"
                                  ? e.jsxs("span", {
                                      className: "ad-frz",
                                      children: [
                                        e.jsx(M, { name: "snow", size: 14 }),
                                        a("a.mem.frozenUntil", {
                                          date: l.date(
                                            Ye(N.freeze.start, N.freeze.days),
                                          ),
                                        }),
                                      ],
                                    })
                                  : e.jsx("span", {
                                      children: a("a.mem.freezeUsed", {
                                        a: l.num(N.freezeUsed),
                                        b: l.num(i.settings.freezeDaysPerYear),
                                      }),
                                    }),
                            }),
                            e.jsx("td", {
                              children: N.app
                                ? e.jsxs("span", {
                                    className: "ad-yes",
                                    children: [
                                      e.jsx(M, { name: "check", size: 14 }),
                                      a("a.yes"),
                                    ],
                                  })
                                : e.jsx(ge, {
                                    tone: "warn",
                                    children: a("a.mem.notInstalled"),
                                  }),
                            }),
                            e.jsxs("td", {
                              className: "num tnum",
                              children: [
                                e.jsx("span", {
                                  className: S
                                    ? "ad-bad-num"
                                    : N.noShows
                                      ? ""
                                      : "muted",
                                  children: l.num(N.noShows),
                                }),
                                S &&
                                  e.jsx("small", {
                                    className: "ad-sub bad",
                                    children: a("a.mem.paused"),
                                  }),
                              ],
                            }),
                            e.jsx("td", {
                              children: w
                                ? e.jsxs("span", {
                                    className: "ad-paycell",
                                    children: [
                                      e.jsxs("span", {
                                        children: [
                                          a(`method.${w.method}`),
                                          w.status === "pending" &&
                                            e.jsxs(e.Fragment, {
                                              children: [
                                                " ",
                                                "· ",
                                                e.jsx(_e, { value: "pending" }),
                                              ],
                                            }),
                                        ],
                                      }),
                                      e.jsxs("small", {
                                        className: "ad-sub tnum",
                                        children: [
                                          l.date(w.at),
                                          " · ",
                                          op(i, w.by, a, c),
                                        ],
                                      }),
                                    ],
                                  })
                                : e.jsx("span", {
                                    className: "muted",
                                    children: a("a.mem.noPay"),
                                  }),
                            }),
                          ],
                        },
                        N.id,
                      );
                    }),
                  }),
                ],
              }),
              !v.length &&
                e.jsx(Ze, {
                  icon: "search",
                  title: a("a.mem.emptyTitle"),
                  action: e.jsx(Z, {
                    size: "sm",
                    variant: "secondary",
                    onClick: () => {
                      (h("all"), f(!1), j(""));
                    },
                    children: a("a.mem.clear"),
                  }),
                  children: a("a.mem.emptyText"),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function v1({ id: s, onClose: i }) {
  const { s: a, go: l, t: c, f: m, L: h } = wt(),
    p = ze(a, s);
  if (!p) return null;
  const f = lt(a, p),
    y = En(p),
    j = a.payments.filter((g) => g.memberId === s),
    C = p.trainerId && de(dt, p.trainerId),
    v = a.bookings.filter((g) => g.memberId === s && g.status !== "cancelled");
  return e.jsxs(et, {
    title: h(p.name),
    onClose: i,
    wide: !0,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, { variant: "ghost", onClick: i, children: c("close") }),
        e.jsx(Z, {
          variant: "primary",
          icon: "tablet",
          onClick: () => l("reception", "members", p.id),
          children: c("a.mem.openAtDesk"),
        }),
      ],
    }),
    children: [
      e.jsxs("div", {
        className: "ad-sheet-id",
        children: [
          e.jsx(Ke, {
            name: h(p.name),
            tone: p.gender === "F" ? "ladies" : "lime",
            size: "lg",
          }),
          e.jsxs("div", {
            children: [
              e.jsx(_e, { value: f }),
              e.jsxs("p", {
                className: "tnum muted",
                children: [
                  m.digits(p.code),
                  " · ",
                  m.digits(p.phone),
                  " · ",
                  c(`gender.${p.gender}`),
                  " ",
                  "· ",
                  c("a.mem.age", { n: m.num(p.age) }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("dl", {
        className: "ad-facts",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.col.plan") }),
              e.jsxs("dd", { children: [h(y.name), " · ", m.money(y.price)] }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.mem.period") }),
              e.jsxs("dd", {
                className: "tnum",
                children: [m.date(p.start), " – ", m.date(p.end)],
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.col.freeze") }),
              e.jsx("dd", {
                className: "tnum",
                children:
                  p.freeze && f === "frozen"
                    ? c("a.mem.frozenUntil", {
                        date: m.date(Ye(p.freeze.start, p.freeze.days)),
                      })
                    : c("a.mem.freezeLeft", { n: m.num(ks(a, p)) }),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.mem.guests") }),
              e.jsx("dd", {
                className: "tnum",
                children: c("of", {
                  a: m.num(p.guestUsed),
                  b: m.num(y.guestPasses),
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.col.app") }),
              e.jsx("dd", {
                children: p.app
                  ? c("a.mem.installed")
                  : c("a.mem.notInstalled"),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.col.noshows") }),
              e.jsx("dd", {
                className: "tnum",
                children: c("of", {
                  a: m.num(p.noShows),
                  b: m.num(a.settings.noShowLimit),
                }),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.mem.trainer") }),
              e.jsx("dd", { children: C ? h(C.name) : "—" }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: c("a.mem.since") }),
              e.jsx("dd", {
                className: "tnum",
                children: m.date(`${p.since}-01`, {
                  month: "short",
                  year: "numeric",
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsx("h3", { className: "ad-h3", children: c("a.mem.payHistory") }),
      j.length
        ? e.jsx("table", {
            className: "ad-table ad-table-mini",
            children: e.jsx("tbody", {
              children: j.map((g) =>
                e.jsxs(
                  "tr",
                  {
                    children: [
                      e.jsx("td", {
                        className: "tnum",
                        children: m.digits(g.receipt),
                      }),
                      e.jsx("td", {
                        className: "tnum",
                        children: m.date(g.at),
                      }),
                      e.jsx("td", { children: c(`method.${g.method}`) }),
                      e.jsx("td", {
                        className: "num tnum",
                        children: m.money(g.amount),
                      }),
                      e.jsx("td", { children: e.jsx(_e, { value: g.status }) }),
                    ],
                  },
                  g.id,
                ),
              ),
            }),
          })
        : e.jsx("p", { className: "muted", children: c("a.mem.noPay") }),
      v.length > 0 &&
        e.jsxs(e.Fragment, {
          children: [
            e.jsx("h3", { className: "ad-h3", children: c("a.mem.bookings") }),
            e.jsx("ul", {
              className: "ad-mini-list",
              children: v.map((g) => {
                const N = de(a.sessions, g.sessionId);
                return e.jsxs(
                  "li",
                  {
                    children: [
                      e.jsxs("span", {
                        children: [
                          h(N.title),
                          " ",
                          e.jsxs("span", {
                            className: "muted tnum",
                            children: [
                              "·",
                              " ",
                              N.day === 0 ? c("today") : m.weekday(ea(N)),
                              " ",
                              m.clock(N.time),
                            ],
                          }),
                        ],
                      }),
                      e.jsx(_e, { value: g.status }),
                    ],
                  },
                  g.id,
                );
              }),
            }),
          ],
        }),
      !p.app &&
        e.jsxs("p", {
          className: "ad-note",
          children: [
            e.jsx(M, { name: "phone", size: 16 }),
            c("a.mem.noAppNote"),
          ],
        }),
    ],
  });
}
function j1() {
  const { s, act: i, go: a, t: l, f: c, L: m, notify: h } = wt(),
    [p, f] = V.useState("all"),
    y = ip(s),
    j = s.payments.filter((g) => g.status === "pending"),
    C = s.payments.filter(
      (g) =>
        p === "all" ||
        (p === "online" ? lp.includes(g.method) : g.method === p),
    ),
    v = Math.max(1, ...Object.values(y.byMethod));
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("div", {
        className: "ad-kpis ad-kpis-4",
        children: [
          e.jsx(He, {
            icon: "wallet",
            label: l("a.pay.total"),
            value: c.money(y.total),
            sub: l("a.pay.totalSub", { n: c.num(y.count) }),
          }),
          e.jsx(He, {
            icon: "cash",
            label: l("a.pay.cash"),
            value: c.money(y.cash),
            sub: l("a.pay.cashSub", {
              p: c.pct(y.total ? Math.round((y.cash / y.total) * 100) : 0),
            }),
          }),
          e.jsx(He, {
            icon: "card",
            label: l("a.pay.online"),
            value: c.money(y.online),
            sub: l("a.pay.onlineSub"),
          }),
          e.jsx(He, {
            icon: "hourglass",
            tone: y.pendingCount ? "warn" : "",
            label: l("a.pay.pending"),
            value: c.money(y.pending),
            sub: l("a.pay.pendingSub", { n: c.num(y.pendingCount) }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "ad-grid ad-grid-pay",
        children: [
          e.jsx(qe, {
            id: "ad-pay-pending",
            title: l("a.pay.pendingTitle"),
            sub: l("a.pay.pendingLead"),
            pad: !1,
            children: j.length
              ? e.jsx("ul", {
                  className: "ad-attn",
                  children: j.map((g) => {
                    const N = ze(s, g.memberId);
                    return e.jsxs(
                      "li",
                      {
                        children: [
                          e.jsx("span", {
                            className: "ad-attn-ico warn",
                            children: e.jsx(M, { name: "hourglass", size: 16 }),
                          }),
                          e.jsxs("span", {
                            className: "ad-attn-body",
                            children: [
                              e.jsxs("strong", {
                                children: [
                                  N ? m(N.name) : "",
                                  " ·",
                                  " ",
                                  e.jsx("span", {
                                    className: "tnum",
                                    children: c.money(g.amount),
                                  }),
                                ],
                              }),
                              e.jsxs("small", {
                                className: "tnum",
                                children: [
                                  l(`method.${g.method}`),
                                  g.ref
                                    ? ` · ${l("a.pay.ref")} ${c.digits(g.ref)}`
                                    : "",
                                  " ",
                                  "· ",
                                  c.digits(g.receipt),
                                  g.clock != null
                                    ? ` · ${c.time(g.clock)}`
                                    : "",
                                ],
                              }),
                            ],
                          }),
                          e.jsx(Z, {
                            size: "sm",
                            variant: "primary",
                            icon: "check",
                            onClick: () => {
                              (i(Mu, g.id),
                                h(
                                  l("a.pay.confirmed", {
                                    member: N ? m(N.name) : "",
                                  }),
                                ));
                            },
                            children: l("a.pay.confirm"),
                          }),
                        ],
                      },
                      g.id,
                    );
                  }),
                })
              : e.jsx(Ze, {
                  icon: "ok",
                  title: l("a.pay.noneTitle"),
                  action: e.jsx(Z, {
                    size: "sm",
                    variant: "secondary",
                    icon: "tablet",
                    onClick: () => a("reception", "payments", "m4"),
                    children: l("a.pay.tryFawry"),
                  }),
                  children: l("a.pay.noneText"),
                }),
          }),
          e.jsxs(qe, {
            id: "ad-pay-mix",
            title: l("a.pay.mixTitle"),
            sub: l("a.pay.mixSub"),
            children: [
              e.jsx("ul", {
                className: "ad-hbars",
                children: Object.entries(y.byMethod).map(([g, N]) =>
                  e.jsxs(
                    "li",
                    {
                      children: [
                        e.jsx("span", {
                          className: "ad-hbar-label",
                          children: l(`method.${g}`),
                        }),
                        e.jsx("span", {
                          className: "ad-hbar-track",
                          children: e.jsx("span", {
                            style: { inlineSize: `${(N / v) * 100}%` },
                          }),
                        }),
                        e.jsx("span", {
                          className: "ad-hbar-val tnum",
                          children: c.money(N),
                        }),
                      ],
                    },
                    g,
                  ),
                ),
              }),
              e.jsxs("div", {
                className: "ad-split",
                children: [
                  e.jsxs("div", {
                    className: "ad-split-row",
                    children: [
                      e.jsx("span", { children: l("a.pay.byStaff") }),
                      e.jsx("b", {
                        className: "tnum",
                        children: c.money(y.byStaff),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "ad-split-row",
                    children: [
                      e.jsx("span", { children: l("a.pay.byApp") }),
                      e.jsx("b", {
                        className: "tnum",
                        children: c.money(y.byApp),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(qe, {
        id: "ad-ledger",
        pad: !1,
        title: l("a.pay.ledgerTitle"),
        sub: l("a.pay.ledgerSub"),
        tools: e.jsx(nt, {
          value: p,
          onChange: f,
          label: l("a.pay.ledgerTitle"),
          options: [
            { value: "all", label: l("all") },
            { value: "cash", label: l("method.cash") },
            { value: "online", label: l("a.pay.onlineShort") },
          ],
        }),
        children: e.jsx("div", {
          className: "ad-scroll",
          children: e.jsxs("table", {
            className: "ad-table",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", { children: l("a.col.receipt") }),
                    e.jsx("th", { children: l("a.col.date") }),
                    e.jsx("th", { children: l("a.col.member") }),
                    e.jsx("th", { children: l("a.col.item") }),
                    e.jsx("th", { children: l("a.col.method") }),
                    e.jsx("th", { children: l("a.col.recordedBy") }),
                    e.jsx("th", {
                      className: "num",
                      children: l("a.col.amount"),
                    }),
                    e.jsx("th", { children: l("a.col.status") }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: C.map((g) => {
                  var b, w;
                  const N = ze(s, g.memberId),
                    k =
                      g.label === "renewal"
                        ? m((b = de(Wt, g.planId)) == null ? void 0 : b.name)
                        : l("a.pay.package", {
                            n: c.num(
                              ((w = de(Jt, g.packageId)) == null
                                ? void 0
                                : w.sessions) || 0,
                            ),
                          });
                  return e.jsxs(
                    "tr",
                    {
                      className: g.at === xe ? "is-new" : "",
                      children: [
                        e.jsx("td", {
                          className: "tnum",
                          children: c.digits(g.receipt),
                        }),
                        e.jsxs("td", {
                          className: "tnum",
                          children: [
                            c.date(g.at),
                            g.clock != null &&
                              e.jsx("small", {
                                className: "ad-sub",
                                children: c.time(g.clock),
                              }),
                          ],
                        }),
                        e.jsx("td", { children: N ? m(N.name) : "—" }),
                        e.jsx("td", { children: k }),
                        e.jsx("td", {
                          children: e.jsxs("span", {
                            className: "ad-method",
                            children: [
                              e.jsx(M, {
                                name:
                                  g.method === "cash"
                                    ? "cash"
                                    : g.method === "card"
                                      ? "card"
                                      : "wallet",
                                size: 14,
                              }),
                              l(`method.${g.method}`),
                            ],
                          }),
                        }),
                        e.jsx("td", { children: op(s, g.by, l, m) }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: e.jsx("b", { children: c.money(g.amount) }),
                        }),
                        e.jsx("td", {
                          children: e.jsx(_e, { value: g.status }),
                        }),
                      ],
                    },
                    g.id,
                  );
                }),
              }),
              e.jsx("tfoot", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("td", {
                      colSpan: 6,
                      children: l("a.pay.footTotal", {
                        n: c.num(C.filter((g) => g.status === "paid").length),
                      }),
                    }),
                    e.jsx("td", {
                      className: "num tnum",
                      children: e.jsx("b", {
                        children: c.money(
                          C.filter((g) => g.status === "paid").reduce(
                            (g, N) => g + N.amount,
                            0,
                          ),
                        ),
                      }),
                    }),
                    e.jsx("td", {}),
                  ],
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function k1() {
  const { s, go: i, t: a, f: l, L: c } = wt();
  return e.jsxs("div", {
    className: "ad-grid ad-grid-2",
    children: [
      e.jsxs(qe, {
        id: "ad-plans",
        title: a("a.plans.title"),
        sub: a("a.plans.sub"),
        pad: !1,
        children: [
          e.jsxs("table", {
            className: "ad-table",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", { children: a("a.col.plan") }),
                    e.jsx("th", {
                      className: "num",
                      children: a("a.plans.length"),
                    }),
                    e.jsx("th", {
                      className: "num",
                      children: a("a.plans.price"),
                    }),
                    e.jsx("th", {
                      className: "num",
                      children: a("a.plans.guests"),
                    }),
                    e.jsx("th", {
                      className: "num",
                      children: a("a.plans.members"),
                    }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: Wt.map((m) =>
                  e.jsxs(
                    "tr",
                    {
                      children: [
                        e.jsx("td", {
                          children: e.jsx("span", {
                            className: "ad-cell-title",
                            children: c(m.name),
                          }),
                        }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: a("a.plans.months", { n: l.num(m.months) }),
                        }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: l.money(m.price),
                        }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: l.num(m.guestPasses),
                        }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: l.num(
                            s.members.filter((h) => h.planId === m.id).length,
                          ),
                        }),
                      ],
                    },
                    m.id,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("p", {
            className: "ad-panel-note",
            children: [e.jsx(M, { name: "info", size: 15 }), a("a.plans.note")],
          }),
        ],
      }),
      e.jsx(qe, {
        id: "ad-rules",
        title: a("a.rules.title"),
        sub: a("a.rules.sub"),
        tools: e.jsx(Z, {
          size: "sm",
          variant: "ghost",
          icon: "sliders",
          onClick: () => i("admin", "settings"),
          children: a("a.rules.edit"),
        }),
        children: e.jsxs("dl", {
          className: "ad-rules",
          children: [
            e.jsxs("div", {
              children: [
                e.jsxs("dt", {
                  children: [
                    e.jsx(M, { name: "snow", size: 16 }),
                    a("a.rules.freeze"),
                  ],
                }),
                e.jsx("dd", {
                  children: a("a.rules.freezeV", {
                    n: l.num(s.settings.freezeDaysPerYear),
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("dt", {
                  children: [
                    e.jsx(M, { name: "calendarClock", size: 16 }),
                    a("a.rules.cancel"),
                  ],
                }),
                e.jsx("dd", {
                  children: a("a.rules.cancelV", {
                    n: l.num(s.settings.cancelWindowHrs),
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("dt", {
                  children: [
                    e.jsx(M, { name: "flag", size: 16 }),
                    a("a.rules.noshow"),
                  ],
                }),
                e.jsx("dd", {
                  children: s.settings.noShowPenalty
                    ? a("a.rules.noshowV", { n: l.num(s.settings.noShowLimit) })
                    : a("a.rules.off"),
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("dt", {
                  children: [
                    e.jsx(M, { name: "shield", size: 16 }),
                    a("ladiesHours"),
                  ],
                }),
                e.jsxs("dd", {
                  className: "tnum",
                  children: [
                    l.clock(s.settings.ladiesHours.from),
                    " –",
                    " ",
                    l.clock(s.settings.ladiesHours.to),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("dt", {
                  children: [
                    e.jsx(M, { name: "cash", size: 16 }),
                    a("a.rules.cash"),
                  ],
                }),
                e.jsx("dd", { children: a("a.rules.cashV") }),
              ],
            }),
            e.jsxs("div", {
              children: [
                e.jsxs("dt", {
                  children: [
                    e.jsx(M, { name: "wallet", size: 16 }),
                    a("a.rules.online"),
                  ],
                }),
                e.jsx("dd", { children: a("a.rules.onlineV") }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const b1 = [0, 1, 2, 3, 4, 5, 6];
function w1() {
  const { s, go: i, t: a, f: l, L: c } = wt(),
    [m, h] = V.useState("all"),
    p = Ve(s.settings.ladiesHours.from),
    f = Ve(s.settings.ladiesHours.to),
    y = (S) =>
      m === "all" ||
      (m === "ladies"
        ? S.womenOnly
        : m === "facility"
          ? S.kind === "facility"
          : S.kind === "class"),
    j = [...s.sessions].sort((S, ae) => bt(S) - bt(ae)),
    C = j.reduce((S, ae) => S + ae.cap, 0),
    v = j.reduce((S, ae) => S + Va(s, ae), 0),
    g = s.bookings.filter((S) => S.status === "waitlisted").length,
    N = s.bookings.filter((S) => ["attended", "noshow"].includes(S.status)),
    k = N.filter((S) => S.status === "noshow").length,
    b = s.members.filter(
      (S) => s.settings.noShowPenalty && S.noShows >= s.settings.noShowLimit,
    ),
    w = j.filter((S) => S.womenOnly).length;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, {
        title: a("a.sch.title"),
        lead: a("a.sch.lead"),
        phase: "pilot",
      }),
      e.jsxs("div", {
        className: "ad-kpis ad-kpis-4",
        children: [
          e.jsx(He, {
            icon: "calendar",
            label: a("a.sch.kFill"),
            value: l.pct(Math.round((v / C) * 100)),
            sub: a("a.sch.kFillSub", { a: l.num(v), b: l.num(C) }),
          }),
          e.jsx(He, {
            icon: "hourglass",
            label: a("a.sch.kWait"),
            value: l.num(g),
            sub: a("a.sch.kWaitSub"),
          }),
          e.jsx(He, {
            icon: "flag",
            tone: N.length && k / N.length >= 0.15 ? "warn" : "",
            label: a("a.sch.kNoshow"),
            value: N.length ? l.pct(Math.round((k / N.length) * 100)) : "—",
            sub: a("a.sch.kNoshowSub", { a: l.num(k), b: l.num(N.length) }),
          }),
          e.jsx(He, {
            icon: "shield",
            label: a("a.sch.kLadies"),
            value: l.num(w),
            sub: a("a.sch.kLadiesSub", {
              from: l.clock(s.settings.ladiesHours.from),
              to: l.clock(s.settings.ladiesHours.to),
            }),
          }),
        ],
      }),
      e.jsx(qe, {
        id: "ad-week",
        title: a("a.sch.weekTitle"),
        sub: a("a.sch.weekSub"),
        tools: e.jsx(nt, {
          value: m,
          onChange: h,
          label: a("a.sch.filter"),
          options: ["all", "class", "facility", "ladies"].map((S) => ({
            value: S,
            label: a(`a.sch.k.${S}`),
          })),
        }),
        children: e.jsx("div", {
          className: "ad-weekgrid",
          children: b1.map((S) => {
            const ae = Ye(xe, S),
              _ = j.filter((R) => R.day === S),
              L = [];
            let G = !1;
            const H = e.jsxs(
              "li",
              {
                className: "ad-ladiesband",
                children: [
                  e.jsx(M, { name: "shield", size: 14 }),
                  e.jsxs("span", {
                    children: [
                      e.jsxs("b", {
                        className: "tnum",
                        children: [
                          l.clock(s.settings.ladiesHours.from),
                          "–",
                          l.clock(s.settings.ladiesHours.to),
                        ],
                      }),
                      " ",
                      a("ladiesHours"),
                    ],
                  }),
                ],
              },
              "ladies",
            );
            for (const R of _) {
              if ((!G && Ve(R.time) >= p && (L.push(H), (G = !0)), !y(R)))
                continue;
              const K = Va(s, R),
                E = Pn(s, R),
                z = Wo(s, R.id).length,
                F = gn(s, R),
                A = R.trainerId && de(dt, R.trainerId),
                Y = Ve(R.time) >= p && Ve(R.time) < f;
              L.push(
                e.jsxs(
                  "li",
                  {
                    className: `ad-slot ${R.womenOnly ? "is-ladies" : ""} ${F === "ended" ? "is-ended" : ""} ${F === "live" ? "is-live" : ""}`,
                    children: [
                      e.jsxs("span", {
                        className: "ad-slot-time tnum",
                        children: [
                          l.clock(R.time),
                          e.jsx("small", { children: a("min", { n: R.dur }) }),
                        ],
                      }),
                      e.jsx("strong", { children: c(R.title) }),
                      e.jsxs("small", {
                        className: "ad-slot-meta",
                        children: [
                          A ? c(A.name) : a(`cat.${R.cat}`),
                          R.price ? ` · ${l.money(R.price)}` : "",
                        ],
                      }),
                      e.jsxs("span", {
                        className: "ad-slot-fill",
                        children: [
                          e.jsx(xu, {
                            value: K,
                            max: R.cap,
                            tone: E === 0 ? "full" : "",
                          }),
                          e.jsxs("span", {
                            className: "tnum",
                            children: [l.num(K), "/", l.num(R.cap)],
                          }),
                        ],
                      }),
                      e.jsxs("span", {
                        className: "ad-slot-tags",
                        children: [
                          R.womenOnly &&
                            e.jsx(ge, {
                              tone: "ladies",
                              children: a("ladiesOnly"),
                            }),
                          !R.womenOnly &&
                            Y &&
                            e.jsx(ge, {
                              tone: "ladies",
                              children: a("ladiesHours"),
                            }),
                          E === 0 &&
                            e.jsx(ge, {
                              tone: "warn",
                              children: z
                                ? a("a.sch.fullWait", { n: l.num(z) })
                                : a("a.sch.full"),
                            }),
                          F === "live" &&
                            e.jsx(ge, {
                              tone: "lime",
                              children: a("a.sess.live"),
                            }),
                        ],
                      }),
                    ],
                  },
                  R.id,
                ),
              );
            }
            !G && _.length && L.push(H);
            const O = L.filter((R) => R.key !== "ladies").length;
            return e.jsxs(
              "div",
              {
                className: `ad-day ${S === 0 ? "is-today" : ""}`,
                children: [
                  e.jsxs("h3", {
                    className: "ad-day-head",
                    children: [
                      e.jsx("span", {
                        children: S === 0 ? a("today") : l.weekday(ae, "long"),
                      }),
                      e.jsx("small", {
                        className: "tnum",
                        children: l.date(ae),
                      }),
                    ],
                  }),
                  O
                    ? e.jsx("ol", { children: L })
                    : e.jsx("p", {
                        className: "ad-day-empty",
                        children: _.length
                          ? a("a.sch.noneMatch")
                          : a("a.sch.noneDay"),
                      }),
                ],
              },
              S,
            );
          }),
        }),
      }),
      e.jsxs("div", {
        className: "ad-grid ad-grid-sch",
        children: [
          e.jsx(qe, {
            id: "ad-fill",
            title: a("a.sch.fillTitle"),
            sub: a("a.sch.fillSub"),
            pad: !1,
            children: e.jsx("div", {
              className: "ad-scroll",
              children: e.jsxs("table", {
                className: "ad-table",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      children: [
                        e.jsx("th", { children: a("a.col.session") }),
                        e.jsx("th", { children: a("a.col.when") }),
                        e.jsx("th", { children: a("a.col.fill") }),
                        e.jsx("th", {
                          className: "num",
                          children: a("a.col.left"),
                        }),
                        e.jsx("th", {
                          className: "num",
                          children: a("a.col.waitlist"),
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: j.map((S) => {
                      const ae = Va(s, S),
                        _ = Pn(s, S),
                        L = Wo(s, S.id).length;
                      return e.jsxs(
                        "tr",
                        {
                          className: gn(s, S) === "ended" ? "is-dim" : "",
                          children: [
                            e.jsxs("td", {
                              children: [
                                e.jsx("span", {
                                  className: "ad-cell-title",
                                  children: c(S.title),
                                }),
                                S.womenOnly &&
                                  e.jsx(ge, {
                                    tone: "ladies",
                                    children: a("ladiesOnly"),
                                  }),
                              ],
                            }),
                            e.jsxs("td", {
                              className: "tnum ad-nowrap",
                              children: [
                                S.day === 0 ? a("today") : l.weekday(ea(S)),
                                " ",
                                "· ",
                                l.clock(S.time),
                              ],
                            }),
                            e.jsx("td", {
                              children: e.jsxs("span", {
                                className: "ad-fillcell",
                                children: [
                                  e.jsx(xu, {
                                    value: ae,
                                    max: S.cap,
                                    tone: _ === 0 ? "full" : "",
                                  }),
                                  e.jsx("span", {
                                    className: "tnum",
                                    children: l.pct(
                                      Math.round((ae / S.cap) * 100),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                            e.jsx("td", {
                              className: "num tnum",
                              children:
                                _ === 0
                                  ? e.jsx(ge, {
                                      tone: "warn",
                                      children: a("a.sch.full"),
                                    })
                                  : l.num(_),
                            }),
                            e.jsx("td", {
                              className: "num tnum",
                              children: L
                                ? e.jsx("b", { children: l.num(L) })
                                : e.jsx("span", {
                                    className: "muted",
                                    children: "0",
                                  }),
                            }),
                          ],
                        },
                        S.id,
                      );
                    }),
                  }),
                ],
              }),
            }),
          }),
          e.jsxs("div", {
            className: "ad-stack",
            children: [
              e.jsxs(qe, {
                id: "ad-att",
                title: a("a.sch.attTitle"),
                sub: a("a.sch.attSub"),
                pad: !1,
                children: [
                  N.length
                    ? e.jsx("ul", {
                        className: "ad-mini-list ad-pad-list",
                        children: N.concat(
                          s.bookings.filter((S) => S.status === "waitlisted"),
                        ).map((S) => {
                          const ae = ze(s, S.memberId),
                            _ = de(s.sessions, S.sessionId);
                          return e.jsxs(
                            "li",
                            {
                              children: [
                                e.jsxs("span", {
                                  children: [
                                    e.jsx("strong", {
                                      children: ae ? c(ae.name) : "",
                                    }),
                                    " ",
                                    e.jsxs("span", {
                                      className: "muted",
                                      children: ["· ", c(_.title)],
                                    }),
                                  ],
                                }),
                                e.jsx(_e, { value: S.status }),
                              ],
                            },
                            S.id,
                          );
                        }),
                      })
                    : e.jsx(Ze, {
                        icon: "calendar",
                        title: a("a.sch.attEmpty"),
                        children: a("a.sch.attEmptyText"),
                      }),
                  e.jsxs("p", {
                    className: "ad-panel-note",
                    children: [
                      e.jsx(M, { name: "info", size: 15 }),
                      a("a.sch.attNote"),
                    ],
                  }),
                ],
              }),
              e.jsx(qe, {
                id: "ad-paused",
                title: a("a.sch.pausedTitle"),
                sub: s.settings.noShowPenalty
                  ? a("a.sch.pausedSub", { n: l.num(s.settings.noShowLimit) })
                  : a("a.sch.pausedOff"),
                pad: !1,
                children: b.length
                  ? e.jsx("ul", {
                      className: "ad-mini-list ad-pad-list",
                      children: b.map((S) =>
                        e.jsxs(
                          "li",
                          {
                            children: [
                              e.jsxs("span", {
                                children: [
                                  e.jsx("strong", { children: c(S.name) }),
                                  " ",
                                  e.jsxs("span", {
                                    className: "muted tnum",
                                    children: [
                                      "· ",
                                      a("a.sch.pausedN", {
                                        n: l.num(S.noShows),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(Z, {
                                size: "sm",
                                variant: "ghost",
                                onClick: () => i("admin", "members", S.id),
                                children: a("view"),
                              }),
                            ],
                          },
                          S.id,
                        ),
                      ),
                    })
                  : e.jsx("p", {
                      className: "ad-panel-note",
                      children: a("a.sch.pausedNone"),
                    }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function N1() {
  const { s, act: i, go: a, t: l, f: c, L: m, notify: h } = wt(),
    p = s.settings.trainerSharePct,
    f = dt.map((k) => ({ tr: k, st: h1(s, k.id) })),
    y = f.reduce((k, b) => k + Math.max(0, b.st.owed), 0),
    j = f.reduce((k, b) => k + b.st.sold, 0),
    C = f.reduce((k, b) => k + b.st.delivered, 0),
    v = Jt[0],
    g = Math.round(v.price / v.sessions),
    N = Math.round(g * (p / 100));
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, { title: l("a.st.title"), lead: l("a.st.lead"), phase: "2" }),
      e.jsxs("div", {
        className: "ad-kpis ad-kpis-4",
        children: [
          e.jsx(He, {
            icon: "users",
            label: l("a.st.kTrainers"),
            value: c.num(dt.length),
            sub: l("a.st.kTrainersSub"),
          }),
          e.jsx(He, {
            icon: "package",
            label: l("a.st.kSold"),
            value: c.money(j),
            sub: l("a.st.kSoldSub", { n: c.num(s.packagePurchases.length) }),
          }),
          e.jsx(He, {
            icon: "check",
            label: l("a.st.kDelivered"),
            value: c.num(C),
            sub: l("a.st.kDeliveredSub"),
          }),
          e.jsx(He, {
            icon: "coins",
            tone: y ? "warn" : "",
            label: l("a.st.kOwed"),
            value: c.money(y),
            sub: l("a.st.kOwedSub"),
          }),
        ],
      }),
      e.jsxs(qe, {
        id: "ad-trainers",
        title: l("a.st.tableTitle"),
        sub: l("a.st.tableSub", { p: c.pct(p) }),
        pad: !1,
        children: [
          e.jsx("div", {
            className: "ad-scroll",
            children: e.jsxs("table", {
              className: "ad-table",
              children: [
                e.jsx("thead", {
                  children: e.jsxs("tr", {
                    children: [
                      e.jsx("th", { children: l("a.col.trainer") }),
                      e.jsx("th", {
                        className: "num",
                        children: l("a.col.clients"),
                      }),
                      e.jsx("th", {
                        className: "num",
                        children: l("a.col.packages"),
                      }),
                      e.jsx("th", {
                        className: "num",
                        children: l("a.col.delivered"),
                      }),
                      e.jsx("th", {
                        className: "num",
                        children: l("a.col.earned"),
                      }),
                      e.jsx("th", {
                        className: "num",
                        children: l("a.col.paid"),
                      }),
                      e.jsx("th", {
                        className: "num",
                        children: l("a.col.owed"),
                      }),
                      e.jsx("th", {}),
                    ],
                  }),
                }),
                e.jsx("tbody", {
                  children: f.map(({ tr: k, st: b }) =>
                    e.jsxs(
                      "tr",
                      {
                        children: [
                          e.jsx("td", {
                            children: e.jsxs("span", {
                              className: "ad-person",
                              children: [
                                e.jsx(Ke, {
                                  initials: k.initials,
                                  size: "sm",
                                  tone: k.gender === "F" ? "ladies" : "",
                                }),
                                e.jsxs("span", {
                                  children: [
                                    e.jsx("strong", { children: m(k.name) }),
                                    e.jsx("small", {
                                      children: m(k.specialty),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsx("td", {
                            className: "num tnum",
                            children: c.num(b.clients),
                          }),
                          e.jsxs("td", {
                            className: "num tnum",
                            children: [
                              c.num(b.packages),
                              e.jsx("small", {
                                className: "ad-sub",
                                children: c.money(b.sold),
                              }),
                            ],
                          }),
                          e.jsxs("td", {
                            className: "num tnum",
                            children: [
                              c.num(b.delivered),
                              e.jsx("small", {
                                className: "ad-sub",
                                children: l("a.st.upcoming", {
                                  n: c.num(b.upcoming),
                                }),
                              }),
                            ],
                          }),
                          e.jsx("td", {
                            className: "num tnum",
                            children: c.money(b.month),
                          }),
                          e.jsx("td", {
                            className: "num tnum",
                            children: c.money(b.paid),
                          }),
                          e.jsx("td", {
                            className: "num tnum",
                            children: e.jsx("b", {
                              children: c.money(Math.max(0, b.owed)),
                            }),
                          }),
                          e.jsx("td", {
                            className: "ad-td-act",
                            children: e.jsx(Z, {
                              size: "sm",
                              variant: b.owed > 0 ? "primary" : "quiet",
                              icon: "coins",
                              disabled: b.owed <= 0,
                              onClick: () => {
                                (i(Iu, k.id),
                                  h(
                                    l("a.st.paidToast", {
                                      name: m(k.name),
                                      amount: c.money(b.owed),
                                    }),
                                  ));
                              },
                              children:
                                b.owed > 0
                                  ? l("a.st.recordPayout")
                                  : l("a.st.settled"),
                            }),
                          }),
                        ],
                      },
                      k.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
          e.jsxs("p", {
            className: "ad-panel-note",
            children: [
              e.jsx(M, { name: "info", size: 15 }),
              l("a.st.earnNote"),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "ad-grid ad-grid-2",
        children: [
          e.jsxs(qe, {
            id: "ad-split",
            title: l("a.st.splitTitle"),
            sub: l("a.st.splitSub"),
            children: [
              e.jsx(nt, {
                value: p,
                onChange: (k) => {
                  (i(Lu, "trainerSharePct", k),
                    h(l("a.st.splitToast", { p: c.pct(k) })));
                },
                label: l("a.st.splitTitle"),
                options: [50, 55, 60, 65, 70].map((k) => ({
                  value: k,
                  label: c.pct(k),
                })),
              }),
              e.jsxs("div", {
                className: "ad-splitbar",
                "aria-hidden": "true",
                children: [
                  e.jsx("span", {
                    className: "tr",
                    style: { inlineSize: `${p}%` },
                    children: l("a.st.trainerShare", { p: c.pct(p) }),
                  }),
                  e.jsx("span", {
                    className: "gym",
                    style: { inlineSize: `${100 - p}%` },
                    children: l("a.st.gymShare", { p: c.pct(100 - p) }),
                  }),
                ],
              }),
              e.jsx("p", {
                className: "ad-example tnum",
                children: l("a.st.example", {
                  n: c.num(v.sessions),
                  price: c.money(v.price),
                  per: c.money(g),
                  tr: c.money(N),
                  gym: c.money(g - N),
                }),
              }),
              e.jsxs("p", {
                className: "ad-panel-note flush",
                children: [
                  e.jsx(M, { name: "info", size: 15 }),
                  l("a.st.splitNote"),
                ],
              }),
            ],
          }),
          e.jsxs(qe, {
            id: "ad-desk",
            title: l("a.st.deskTitle"),
            sub: l("a.st.deskSub"),
            children: [
              e.jsx("ul", {
                className: "ad-staff",
                children: as.map((k) =>
                  e.jsxs(
                    "li",
                    {
                      children: [
                        e.jsx(Ke, {
                          name: m(k.name),
                          size: "sm",
                          tone: k.role === "admin" ? "lime" : "",
                        }),
                        e.jsxs("span", {
                          className: "ad-staff-body",
                          children: [
                            e.jsx("strong", { children: m(k.name) }),
                            e.jsx("small", {
                              children: l(`a.st.role.${k.role}`),
                            }),
                          ],
                        }),
                        e.jsx(ge, {
                          tone: k.role === "admin" ? "forest" : "neutral",
                          children: l(`a.st.access.${k.role}`),
                        }),
                      ],
                    },
                    k.id,
                  ),
                ),
              }),
              e.jsxs("div", {
                className: "ad-perms",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "ad-h3",
                        children: l("a.st.canTitle"),
                      }),
                      e.jsx("ul", {
                        children: [
                          "checkin",
                          "renew",
                          "cash",
                          "freeze",
                          "guest",
                        ].map((k) =>
                          e.jsxs(
                            "li",
                            {
                              children: [
                                e.jsx(M, { name: "check", size: 14 }),
                                l(`a.st.can.${k}`),
                              ],
                            },
                            k,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "ad-h3",
                        children: l("a.st.cannotTitle"),
                      }),
                      e.jsx("ul", {
                        className: "no",
                        children: ["dash", "settings", "refund", "payout"].map(
                          (k) =>
                            e.jsxs(
                              "li",
                              {
                                children: [
                                  e.jsx(M, { name: "x", size: 14 }),
                                  l(`a.st.cannot.${k}`),
                                ],
                              },
                              k,
                            ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx(Z, {
                size: "sm",
                variant: "ghost",
                iconEnd: "arrow",
                onClick: () => a("trainer", "today"),
                children: l("a.st.openTrainer"),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function S1({ param: s }) {
  const { s: i, act: a, t: l, f: c, L: m, notify: h } = wt(),
    [p, f] = V.useState(s && de(i.equipment, s) ? s : null),
    [y, j] = V.useState(""),
    [C, v] = V.useState("all"),
    g = V.useRef(i.equipment.length);
  V.useEffect(() => {
    (i.equipment.length > g.current &&
      f(i.equipment[i.equipment.length - 1].id),
      (g.current = i.equipment.length));
  }, [i.equipment]);
  const N = i.equipment.map((_) => ({ ..._, lib: Xt(_) })),
    k = p && N.find((_) => _.id === p),
    b = y.trim().toLowerCase(),
    w = fn
      .filter((_) => C === "all" || _.cat === C)
      .filter(
        (_) =>
          !b ||
          [_.name.en, _.name.ar, _.brand].some((L) =>
            L.toLowerCase().includes(b),
          ),
      ),
    S = N.filter((_) => _.status === "maintenance").length,
    ae = (_) => N.filter((L) => L.libId === _).length;
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, { title: l("a.eq.title"), lead: l("a.eq.lead"), phase: "2" }),
      e.jsxs("div", {
        className: "ad-kpis ad-kpis-4",
        children: [
          e.jsx(He, {
            icon: "map",
            label: l("a.eq.kMapped"),
            value: c.num(N.length),
            sub: l("a.eq.kMappedSub", {
              n: c.num(new Set(N.map((_) => _.libId)).size),
            }),
          }),
          e.jsx(He, {
            icon: "wrench",
            tone: S ? "warn" : "",
            label: l("status.maintenance"),
            value: c.num(S),
            sub: l("a.eq.kMaintSub"),
          }),
          e.jsx(He, {
            icon: "library",
            label: l("a.eq.kLibrary"),
            value: c.pct(100),
            sub: l("a.eq.kLibrarySub", { n: c.num(N.length) }),
          }),
          e.jsx(He, {
            icon: "timer",
            label: l("a.eq.kTime"),
            value: l("a.eq.kTimeV", { n: c.num(N.length * 2) }),
            sub: l("a.eq.kTimeSub", { n: c.num(N.length * 12) }),
            badge: e.jsx(ge, {
              tone: "neutral",
              children: l("a.src.illustrative"),
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "ad-grid ad-grid-eq",
        children: [
          e.jsxs(qe, {
            id: "ad-floor",
            title: l("a.eq.floorTitle"),
            sub: l("a.eq.floorSub"),
            tools: e.jsx(Ua, {
              kind: "live",
              children: l("a.eq.liveToMembers"),
            }),
            children: [
              e.jsx("div", {
                className: "ad-floor",
                children: e.jsx(Du, {
                  items: N,
                  editable: !0,
                  selected: p,
                  onPick: (_) => f(_.id),
                  onMove: (_, L, G) => a(Vf, _, L, G),
                }),
              }),
              e.jsxs("div", {
                className: "ad-legend",
                children: [
                  e.jsxs("span", {
                    children: [
                      e.jsx("i", { className: "sw sw-pin" }),
                      l("status.active"),
                    ],
                  }),
                  e.jsxs("span", {
                    children: [
                      e.jsx("i", { className: "sw sw-maint" }),
                      l("status.maintenance"),
                    ],
                  }),
                  e.jsxs("span", {
                    children: [
                      e.jsx("i", { className: "sw sw-sel" }),
                      l("a.eq.selected"),
                    ],
                  }),
                  e.jsxs("span", {
                    children: [
                      e.jsx("i", { className: "sw sw-ladies" }),
                      l("zone.ladies"),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "ad-stack",
            children: [
              e.jsx(qe, {
                id: "ad-eq-sel",
                title: k ? `${m(k.lib.name)} · ${k.label}` : l("a.eq.selTitle"),
                sub: k
                  ? `${k.lib.brand !== "—" ? `${k.lib.brand} · ` : ""}${l(`eqcat.${k.lib.cat}`)} · ${l(`zone.${k.zone}`)}`
                  : l("a.eq.selHint"),
                children: k
                  ? e.jsxs("div", {
                      className: "ad-eq-detail",
                      children: [
                        e.jsx(nt, {
                          value: k.status,
                          onChange: (_) => {
                            (a(_o, k.id, _),
                              h(
                                l(
                                  _ === "maintenance"
                                    ? "a.eq.toMaint"
                                    : "a.eq.toActive",
                                  { name: `${m(k.lib.name)} ${k.label}` },
                                ),
                              ));
                          },
                          label: l("a.col.status"),
                          options: [
                            {
                              value: "active",
                              label: l("status.active"),
                              icon: "ok",
                            },
                            {
                              value: "maintenance",
                              label: l("status.maintenance"),
                              icon: "wrench",
                            },
                          ],
                        }),
                        e.jsx("p", {
                          className: "ad-eq-how",
                          children: m(k.lib.how),
                        }),
                        e.jsx("p", {
                          className: "ad-eq-muscles",
                          children: k.lib.muscles.map((_) =>
                            e.jsx(ge, { children: l(`muscle.${_}`) }, _),
                          ),
                        }),
                        e.jsx("p", {
                          className: "ad-eq-pos tnum muted",
                          children: l("a.eq.pos", {
                            x: c.num(k.x),
                            y: c.num(k.y),
                          }),
                        }),
                        e.jsxs("div", {
                          className: "ad-row-actions",
                          children: [
                            e.jsx(Z, {
                              size: "sm",
                              variant: "danger-ghost",
                              icon: "x",
                              onClick: () => {
                                (a(Gf, k.id), f(null), h(l("a.eq.removed")));
                              },
                              children: l("remove"),
                            }),
                            e.jsx(Z, {
                              size: "sm",
                              variant: "ghost",
                              onClick: () => f(null),
                              children: l("a.eq.deselect"),
                            }),
                          ],
                        }),
                        k.status === "maintenance" &&
                          e.jsxs("p", {
                            className: "ad-note warn",
                            children: [
                              e.jsx(M, { name: "warn", size: 16 }),
                              l("a.eq.maintNote"),
                            ],
                          }),
                      ],
                    })
                  : e.jsxs("p", {
                      className: "ad-eq-empty",
                      children: [
                        e.jsx(M, { name: "move", size: 18 }),
                        l("a.eq.dragHint"),
                      ],
                    }),
              }),
              e.jsxs(qe, {
                id: "ad-lib",
                title: l("a.eq.libTitle"),
                sub: l("a.eq.libSub", { n: c.num(fn.length) }),
                pad: !1,
                children: [
                  e.jsxs("div", {
                    className: "ad-lib-tools",
                    children: [
                      e.jsxs("label", {
                        className: "searchbox ad-search",
                        children: [
                          e.jsx(M, { name: "search", size: 16 }),
                          e.jsx("input", {
                            type: "search",
                            value: y,
                            onChange: (_) => j(_.target.value),
                            placeholder: l("a.eq.search"),
                            "aria-label": l("a.eq.search"),
                          }),
                        ],
                      }),
                      e.jsx(nt, {
                        value: C,
                        onChange: v,
                        label: l("a.eq.libTitle"),
                        options: ["all", "cardio", "strength", "free"].map(
                          (_) => ({
                            value: _,
                            label: l(_ === "all" ? "all" : `eqcat.${_}`),
                          }),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("ul", {
                    className: "ad-lib",
                    children: [
                      w.map((_) =>
                        e.jsxs(
                          "li",
                          {
                            children: [
                              e.jsx("span", {
                                className: "ad-lib-ico",
                                children: e.jsx(M, { name: _.icon, size: 16 }),
                              }),
                              e.jsxs("span", {
                                className: "ad-lib-body",
                                children: [
                                  e.jsx("strong", { children: m(_.name) }),
                                  e.jsxs("small", {
                                    children: [
                                      _.brand !== "—" ? `${_.brand} · ` : "",
                                      _.muscles
                                        .map((L) => l(`muscle.${L}`))
                                        .join(l("a.sep")),
                                      ae(_.id)
                                        ? ` · ${l("a.eq.onFloor", { n: c.num(ae(_.id)) })}`
                                        : "",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(Z, {
                                size: "sm",
                                variant: "secondary",
                                icon: "plus",
                                onClick: () => {
                                  (a(Uf, _.id),
                                    h(l("a.eq.added", { name: m(_.name) })));
                                },
                                children: l("a.eq.add"),
                              }),
                            ],
                          },
                          _.id,
                        ),
                      ),
                      !w.length &&
                        e.jsx("li", {
                          className: "ad-lib-none",
                          children: e.jsx(Ze, {
                            icon: "library",
                            title: l("a.eq.noMatch"),
                            children: l("a.eq.noMatchText"),
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(qe, {
        id: "ad-onboard",
        title: l("a.eq.whyTitle"),
        sub: l("a.eq.whySub"),
        children: e.jsxs("div", {
          className: "ad-compare",
          children: [
            e.jsxs("div", {
              className: "ad-compare-col is-lib",
              children: [
                e.jsxs("h3", {
                  children: [
                    e.jsx(M, { name: "library", size: 18 }),
                    l("a.eq.libCol"),
                  ],
                }),
                e.jsx("ul", {
                  children: ["1", "2", "3"].map((_) =>
                    e.jsxs(
                      "li",
                      {
                        children: [
                          e.jsx(M, { name: "check", size: 14 }),
                          l(`a.eq.lib.${_}`),
                        ],
                      },
                      _,
                    ),
                  ),
                }),
                e.jsxs("p", {
                  className: "ad-compare-time",
                  children: [
                    e.jsx("b", { children: l("a.eq.libTime") }),
                    e.jsx("small", { children: l("a.src.illustrative") }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "ad-compare-col",
              children: [
                e.jsxs("h3", {
                  children: [
                    e.jsx(M, { name: "edit", size: 18 }),
                    l("a.eq.customCol"),
                  ],
                }),
                e.jsx("ul", {
                  children: ["1", "2", "3"].map((_) =>
                    e.jsxs(
                      "li",
                      {
                        children: [
                          e.jsx(M, { name: "minus", size: 14 }),
                          l(`a.eq.custom.${_}`),
                        ],
                      },
                      _,
                    ),
                  ),
                }),
                e.jsxs("p", {
                  className: "ad-compare-time",
                  children: [
                    e.jsx("b", { children: l("a.eq.customTime") }),
                    e.jsx("small", { children: l("a.src.illustrative") }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "ad-compare-note",
              children: [
                e.jsx("p", { children: l("a.eq.why1") }),
                e.jsx("p", { className: "muted", children: l("a.eq.why2") }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function C1() {
  const { s, act: i, go: a, t: l, f: c, L: m, notify: h } = wt(),
    p = Su(s),
    f = g1(s),
    y = Xo(s),
    j = s.promoReveals,
    C = Cl("2026-10-01", 1);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, { title: l("a.en.title"), lead: l("a.en.lead"), phase: "3" }),
      e.jsxs("div", {
        className: "ad-kpis ad-kpis-4",
        children: [
          e.jsx(He, {
            icon: "coins",
            label: l("a.en.kOutstanding"),
            value: c.num(p.outstanding),
            sub: l("a.en.kOutstandingSub"),
            badge: e.jsx(ge, { tone: "neutral", children: l("a.src.sample") }),
          }),
          e.jsx(He, {
            icon: "wallet",
            label: l("a.en.kLiability"),
            value: c.money(p.egp),
            sub: l("a.en.kLiabilitySub", {
              v: c.num(s.settings.pointValueEgp),
            }),
          }),
          e.jsx(He, {
            icon: "sparkles",
            label: l("a.en.kEarned"),
            value: c.num(f.earnedToday),
            sub: l("a.en.kEarnedSub", { n: c.num(f.redeemedToday) }),
          }),
          e.jsx(He, {
            icon: "hourglass",
            label: l("a.en.kExpiry"),
            value: l("a.en.kExpiryV", {
              n: c.num(s.settings.pointsExpiryMonths),
            }),
            sub: l("a.en.kExpirySub", {
              date: c.date(C, { day: "numeric", month: "long" }),
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "ad-grid ad-grid-2",
        children: [
          e.jsxs("div", {
            className: "ad-stack",
            children: [
              e.jsxs(qe, {
                id: "ad-rewards",
                title: l("a.en.rewardsTitle"),
                sub: l("a.en.rewardsSub"),
                pad: !1,
                tools: e.jsx(Ge, { phase: "3" }),
                children: [
                  e.jsx("div", {
                    className: "ad-scroll",
                    children: e.jsxs("table", {
                      className: "ad-table",
                      children: [
                        e.jsx("thead", {
                          children: e.jsxs("tr", {
                            children: [
                              e.jsx("th", { children: l("a.col.reward") }),
                              e.jsx("th", {
                                className: "num",
                                children: l("a.col.cost"),
                              }),
                              e.jsx("th", { children: l("a.col.funded") }),
                              e.jsx("th", {
                                className: "num",
                                children: l("a.col.stock"),
                              }),
                              e.jsx("th", {
                                className: "num",
                                children: l("a.col.redeemed"),
                              }),
                            ],
                          }),
                        }),
                        e.jsx("tbody", {
                          children: Jn.map((v) => {
                            const g = s.rewardStock[v.id] ?? 0,
                              N = s.redemptions.filter(
                                (k) => k.rewardId === v.id,
                              ).length;
                            return e.jsxs(
                              "tr",
                              {
                                children: [
                                  e.jsxs("td", {
                                    children: [
                                      e.jsx("span", {
                                        className: "ad-cell-title",
                                        children: m(v.name),
                                      }),
                                      v.partner &&
                                        e.jsx("small", {
                                          className: "ad-sub",
                                          children: v.partner,
                                        }),
                                    ],
                                  }),
                                  e.jsx("td", {
                                    className: "num tnum",
                                    children: l("pts", { n: c.num(v.pts) }),
                                  }),
                                  e.jsx("td", {
                                    children: e.jsx(ge, {
                                      tone:
                                        v.funded === "gym"
                                          ? "forest"
                                          : "neutral",
                                      children: l(`a.en.funded.${v.funded}`),
                                    }),
                                  }),
                                  e.jsx("td", {
                                    className: "num tnum",
                                    children:
                                      g <= 3
                                        ? e.jsx(ge, {
                                            tone: "warn",
                                            children: c.num(g),
                                          })
                                        : c.num(g),
                                  }),
                                  e.jsx("td", {
                                    className: "num tnum",
                                    children: c.num(N),
                                  }),
                                ],
                              },
                              v.id,
                            );
                          }),
                        }),
                      ],
                    }),
                  }),
                  e.jsxs("p", {
                    className: "ad-panel-note",
                    children: [
                      e.jsx(M, { name: "info", size: 15 }),
                      l("a.en.fundNote"),
                    ],
                  }),
                  s.redemptions.length > 0 &&
                    e.jsx("ul", {
                      className: "ad-mini-list ad-pad-list",
                      children: s.redemptions.map((v) => {
                        const g = ze(s, v.memberId),
                          N = de(Jn, v.rewardId);
                        return e.jsxs(
                          "li",
                          {
                            children: [
                              e.jsxs("span", {
                                children: [
                                  e.jsx("strong", {
                                    children: g ? m(g.name) : "",
                                  }),
                                  " ",
                                  e.jsxs("span", {
                                    className: "muted",
                                    children: [
                                      "· ",
                                      m(N.name),
                                      " ·",
                                      " ",
                                      e.jsx("span", {
                                        className: "tnum",
                                        children: v.code,
                                      }),
                                      " ·",
                                      " ",
                                      c.time(v.at),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx(_e, { value: v.status }),
                            ],
                          },
                          v.id,
                        );
                      }),
                    }),
                ],
              }),
              e.jsxs(qe, {
                id: "ad-challenge",
                title: l("a.en.chTitle"),
                sub: l("a.en.chSub", { n: c.num(s.challenge.target) }),
                tools: e.jsx(Ge, { phase: "3" }),
                children: [
                  e.jsxs("div", {
                    className: "ad-challenge",
                    children: [
                      e.jsxs("div", {
                        className: "ad-ch-stat",
                        children: [
                          e.jsx("b", { children: c.pct(33) }),
                          e.jsx("small", {
                            children: l("a.en.chJoined", {
                              a: c.num(212),
                              b: c.num(640),
                            }),
                          }),
                          e.jsx(Ua, { kind: "sample" }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "ad-ch-stat",
                        children: [
                          e.jsx("b", { children: c.pct(41) }),
                          e.jsx("small", { children: l("a.en.chDone") }),
                          e.jsx(Ua, { kind: "sample" }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "ad-ch-stat",
                        children: [
                          e.jsx("b", {
                            className: "tnum",
                            children: l("of", {
                              a: c.num(Math.min(y, s.challenge.target)),
                              b: c.num(s.challenge.target),
                            }),
                          }),
                          e.jsx("small", {
                            children: l("a.en.chSalma", {
                              name: m(ze(s, be).name),
                            }),
                          }),
                          e.jsx(Ua, { kind: "live" }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "ad-panel-note flush",
                    children: [
                      e.jsx(M, { name: "info", size: 15 }),
                      l("a.en.chNote"),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "ad-toggle-line",
                    children: [
                      e.jsx("span", { children: l("a.en.matching") }),
                      e.jsx(ge, {
                        tone: s.settings.partnerMatching ? "ok" : "neutral",
                        children: s.settings.partnerMatching
                          ? l("a.on")
                          : l("a.off"),
                      }),
                      e.jsx(Z, {
                        size: "sm",
                        variant: "ghost",
                        iconEnd: "arrow",
                        onClick: () => a("admin", "settings"),
                        children: l("a.en.matchingEdit"),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "ad-stack",
            children: [
              e.jsxs(qe, {
                id: "ad-earn",
                title: l("a.en.earnTitle"),
                sub: l("a.en.earnSub"),
                pad: !1,
                children: [
                  e.jsxs("table", {
                    className: "ad-table",
                    children: [
                      e.jsx("thead", {
                        children: e.jsxs("tr", {
                          children: [
                            e.jsx("th", { children: l("a.col.event") }),
                            e.jsx("th", { children: l("a.col.verifiedBy") }),
                            e.jsx("th", {
                              className: "num",
                              children: l("a.col.points"),
                            }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        children: Qo.map((v) =>
                          e.jsxs(
                            "tr",
                            {
                              className: v.pts === 0 ? "is-zero" : "",
                              children: [
                                e.jsx("td", {
                                  children: e.jsx("span", {
                                    className: "ad-cell-title",
                                    children: l(`earn.${v.id}`),
                                  }),
                                }),
                                e.jsx("td", {
                                  className: "ad-td-wrap",
                                  children: l(`earn.${v.id}.how`),
                                }),
                                e.jsx("td", {
                                  className: "num tnum",
                                  children: e.jsx("b", {
                                    children: v.pts
                                      ? `+${c.num(v.pts)}`
                                      : c.num(0),
                                  }),
                                }),
                              ],
                            },
                            v.id,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "ad-panel-note",
                    children: [
                      e.jsx(M, { name: "shield", size: 15 }),
                      l("a.en.earnNote", { n: c.num(f.selfLogs) }),
                    ],
                  }),
                ],
              }),
              e.jsxs(qe, {
                id: "ad-partners",
                title: l("a.en.partnersTitle"),
                sub: l("a.en.partnersSub"),
                tools: e.jsx(Ge, { phase: "4" }),
                pad: !1,
                children: [
                  e.jsxs("table", {
                    className: "ad-table",
                    children: [
                      e.jsx("thead", {
                        children: e.jsxs("tr", {
                          children: [
                            e.jsx("th", { children: l("a.col.offer") }),
                            e.jsx("th", {
                              className: "num",
                              children: l("a.col.reveals"),
                            }),
                            e.jsx("th", {
                              className: "num",
                              children: l("a.col.redeemedCodes"),
                            }),
                            e.jsx("th", { children: l("a.col.fee") }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        children: qo.map((v) => {
                          const g = j.filter((N) => N.offerId === v.id);
                          return e.jsxs(
                            "tr",
                            {
                              children: [
                                e.jsxs("td", {
                                  children: [
                                    e.jsx("span", {
                                      className: "ad-cell-title",
                                      children: v.partner,
                                    }),
                                    e.jsxs("small", {
                                      className: "ad-sub",
                                      children: [
                                        m(v.title),
                                        " · ",
                                        e.jsx("span", {
                                          className: "tnum",
                                          children: v.code,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                e.jsx("td", {
                                  className: "num tnum",
                                  children: c.num(g.length),
                                }),
                                e.jsx("td", {
                                  className: "num tnum",
                                  children: c.num(
                                    g.filter((N) => N.redeemed).length,
                                  ),
                                }),
                                e.jsx("td", {
                                  className: "muted ad-nowrap",
                                  children: l("a.en.feeTbd"),
                                }),
                              ],
                            },
                            v.id,
                          );
                        }),
                      }),
                    ],
                  }),
                  j.length
                    ? e.jsx("ul", {
                        className: "ad-mini-list ad-pad-list",
                        children: j.map((v) => {
                          const g = ze(s, v.memberId),
                            N = de(qo, v.offerId);
                          return e.jsxs(
                            "li",
                            {
                              children: [
                                e.jsxs("span", {
                                  children: [
                                    e.jsx("strong", {
                                      children: g ? m(g.name) : "",
                                    }),
                                    " ",
                                    e.jsxs("span", {
                                      className: "muted",
                                      children: [
                                        "· ",
                                        N.partner,
                                        " · ",
                                        c.time(v.at),
                                      ],
                                    }),
                                  ],
                                }),
                                v.redeemed
                                  ? e.jsx(_e, { value: "used" })
                                  : e.jsx(Z, {
                                      size: "sm",
                                      variant: "secondary",
                                      onClick: () => {
                                        (i(qf, v.id),
                                          h(
                                            l("a.en.redeemedToast", {
                                              partner: N.partner,
                                            }),
                                          ));
                                      },
                                      children: l("a.en.markRedeemed"),
                                    }),
                              ],
                            },
                            v.id,
                          );
                        }),
                      })
                    : e.jsxs("div", {
                        className: "ad-feed-empty",
                        children: [
                          e.jsx("p", { children: l("a.en.noReveals") }),
                          e.jsx("div", {
                            className: "ad-row-actions",
                            children: e.jsx(Z, {
                              size: "sm",
                              variant: "secondary",
                              icon: "phone",
                              onClick: () => a("member", "rewards"),
                              children: l("a.en.openMember"),
                            }),
                          }),
                        ],
                      }),
                  e.jsxs("p", {
                    className: "ad-panel-note",
                    children: [
                      e.jsx(M, { name: "info", size: 15 }),
                      l("a.en.feeNote"),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(qe, {
        id: "ad-food",
        title: l("a.en.foodTitle"),
        sub: l("a.en.foodSub"),
        tools: e.jsx(Ge, { phase: "4" }),
        children: e.jsx("ol", {
          className: "ad-steps",
          children: ["1", "2", "3"].map((v) =>
            e.jsxs(
              "li",
              {
                className: v === "1" ? "is-now" : "",
                children: [
                  e.jsx("span", {
                    className: "ad-step-n tnum",
                    children: c.num(Number(v)),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", { children: l(`a.en.food.${v}`) }),
                      e.jsx("p", { children: l(`a.en.food.${v}.what`) }),
                      e.jsxs("p", {
                        className: "ad-step-when",
                        children: [
                          e.jsx("b", { children: l("a.en.moveOn") }),
                          " ",
                          l(`a.en.food.${v}.when`),
                        ],
                      }),
                    ],
                  }),
                  v === "1" &&
                    e.jsx(ge, { tone: "lime", children: l("a.en.foodNow") }),
                ],
              },
              v,
            ),
          ),
        }),
      }),
    ],
  });
}
function Zn({ label: s, hint: i, affects: a, phase: l, children: c }) {
  return e.jsxs("div", {
    className: "ad-set",
    children: [
      e.jsxs("div", {
        className: "ad-set-text",
        children: [
          e.jsxs("span", {
            className: "ad-set-label",
            children: [s, l && e.jsx(Ge, { phase: l })],
          }),
          i && e.jsx("small", { children: i }),
          a &&
            e.jsxs("small", {
              className: "ad-set-affects",
              children: [e.jsx(M, { name: "arrow", size: 13 }), a],
            }),
        ],
      }),
      e.jsx("div", { className: "ad-set-control", children: c }),
    ],
  });
}
const vu = Array.from(
  { length: 18 },
  (s, i) => `${String(i + 6).padStart(2, "0")}:00`,
);
function z1() {
  const { s, act: i, t: a, f: l, notify: c } = wt(),
    m = s.settings,
    h = (f, y) => {
      (i(Lu, f, y), c(a("a.set.saved")));
    },
    p = (f, y) => {
      const j = { ...m.ladiesHours, [f]: y };
      if (Ve(j.to) <= Ve(j.from)) return c(a("a.set.ladiesInvalid"), "bad");
      h("ladiesHours", j);
    };
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, {
        title: a("a.set.title"),
        lead: a("a.set.lead"),
        phase: "pilot",
      }),
      e.jsxs("div", {
        className: "ad-settings",
        children: [
          e.jsxs(qe, {
            id: "ad-set-entry",
            title: a("a.set.entryTitle"),
            sub: a("a.set.entrySub"),
            children: [
              e.jsx(Zn, {
                label: a("a.set.avgVisit"),
                hint: a("a.set.avgVisitHint"),
                affects: a("a.set.avgVisitAffects"),
                children: e.jsx(Ba, {
                  value: m.avgVisitMin,
                  min: 45,
                  max: 180,
                  step: 15,
                  unit: a("minShort"),
                  label: a("a.set.avgVisit"),
                  onChange: (f) => h("avgVisitMin", f),
                }),
              }),
              e.jsx(Zn, {
                label: a("a.set.minStay"),
                hint: a("a.set.minStayHint"),
                affects: a("a.set.minStayAffects"),
                children: e.jsx(Ba, {
                  value: m.minStayMin,
                  min: 15,
                  max: 90,
                  step: 5,
                  unit: a("minShort"),
                  label: a("a.set.minStay"),
                  onChange: (f) => h("minStayMin", f),
                }),
              }),
              e.jsx(Zn, {
                label: a("ladiesHours"),
                hint: a("a.set.ladiesHint"),
                affects: a("a.set.ladiesAffects"),
                children: e.jsxs("div", {
                  className: "ad-timerange",
                  children: [
                    e.jsx("select", {
                      className: "input",
                      value: m.ladiesHours.from,
                      onChange: (f) => p("from", f.target.value),
                      "aria-label": a("a.set.from"),
                      children: vu.map((f) =>
                        e.jsx("option", { value: f, children: l.clock(f) }, f),
                      ),
                    }),
                    e.jsx("span", { "aria-hidden": "true", children: "–" }),
                    e.jsx("select", {
                      className: "input",
                      value: m.ladiesHours.to,
                      onChange: (f) => p("to", f.target.value),
                      "aria-label": a("a.set.to"),
                      children: vu.map((f) =>
                        e.jsx("option", { value: f, children: l.clock(f) }, f),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
          e.jsxs(qe, {
            id: "ad-set-mem",
            title: a("a.set.memTitle"),
            sub: a("a.set.memSub"),
            children: [
              e.jsx(Zn, {
                label: a("a.set.freeze"),
                hint: a("a.set.freezeHint"),
                affects: a("a.set.freezeAffects"),
                children: e.jsx(Ba, {
                  value: m.freezeDaysPerYear,
                  min: 0,
                  max: 90,
                  step: 5,
                  unit: a("a.set.days"),
                  label: a("a.set.freeze"),
                  onChange: (f) => h("freezeDaysPerYear", f),
                }),
              }),
              e.jsx(Zn, {
                label: a("a.set.cancel"),
                hint: a("a.set.cancelHint"),
                affects: a("a.set.cancelAffects"),
                children: e.jsx(Ba, {
                  value: m.cancelWindowHrs,
                  min: 0,
                  max: 24,
                  step: 1,
                  unit: a("a.set.hrs"),
                  label: a("a.set.cancel"),
                  onChange: (f) => h("cancelWindowHrs", f),
                }),
              }),
              e.jsx("div", {
                className: "ad-set ad-set-toggle",
                children: e.jsx(es, {
                  checked: m.noShowPenalty,
                  onChange: (f) => h("noShowPenalty", f),
                  label: a("a.set.penalty"),
                  description: a("a.set.penaltyHint"),
                }),
              }),
              e.jsx(Zn, {
                label: a("a.set.limit"),
                hint: a("a.set.limitHint"),
                affects: a("a.set.limitAffects"),
                children: e.jsx(Ba, {
                  value: m.noShowLimit,
                  min: 1,
                  max: 10,
                  step: 1,
                  label: a("a.set.limit"),
                  onChange: (f) => h("noShowLimit", f),
                }),
              }),
            ],
          }),
          e.jsxs(qe, {
            id: "ad-set-eng",
            title: a("a.set.engTitle"),
            sub: a("a.set.engSub"),
            children: [
              e.jsx("div", {
                className: "ad-set ad-set-toggle",
                children: e.jsx(es, {
                  checked: m.partnerMatching,
                  onChange: (f) => h("partnerMatching", f),
                  label: e.jsxs(e.Fragment, {
                    children: [
                      a("a.set.matching"),
                      " ",
                      e.jsx(Ge, { phase: "3" }),
                    ],
                  }),
                  description: a("a.set.matchingHint"),
                }),
              }),
              e.jsx(Zn, {
                label: a("a.set.expiry"),
                hint: a("a.set.expiryHint"),
                affects: a("a.set.expiryAffects"),
                phase: "3",
                children: e.jsx(nt, {
                  value: m.pointsExpiryMonths,
                  onChange: (f) => h("pointsExpiryMonths", f),
                  label: a("a.set.expiry"),
                  options: [6, 12, 18, 24].map((f) => ({
                    value: f,
                    label: a("a.set.months", { n: l.num(f) }),
                  })),
                }),
              }),
            ],
          }),
          e.jsxs(qe, {
            id: "ad-set-lang",
            title: a("a.set.langTitle"),
            sub: a("a.set.langSub"),
            children: [
              e.jsx(Zn, {
                label: a("a.set.lang"),
                hint: a("a.set.langHint"),
                children: e.jsx(nt, {
                  value: s.lang,
                  onChange: (f) => i((y) => ({ ...y, lang: f })),
                  label: a("a.set.lang"),
                  options: [
                    { value: "ar", label: "العربية" },
                    { value: "en", label: "English" },
                  ],
                }),
              }),
              e.jsx("div", {
                className: "ad-set ad-set-toggle",
                children: e.jsx(es, {
                  checked: s.arabicDigits,
                  onChange: (f) => i((y) => ({ ...y, arabicDigits: f })),
                  label: a("digits.label"),
                  description: a("a.set.digitsHint", { sample: l.money(1200) }),
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("p", {
        className: "ad-footnote",
        children: [e.jsx(M, { name: "info", size: 15 }), a("a.set.footnote")],
      }),
    ],
  });
}
const T1 = [
    "all",
    "entry",
    "payments",
    "memberships",
    "bookings",
    "points",
    "admin",
  ],
  M1 = {
    entry: "door",
    payments: "cash",
    memberships: "users",
    bookings: "calendar",
    points: "gift",
    admin: "settings",
  };
function P1() {
  const { s, act: i, go: a, t: l, f: c } = wt(),
    [m, h] = V.useState("all"),
    [p, f] = V.useState(!1),
    y = s.audit.filter((v) => p || v.type !== "clock"),
    j = {};
  for (const v of y) j[gl(v.type)] = (j[gl(v.type)] || 0) + 1;
  const C = y.filter((v) => m === "all" || gl(v.type) === m);
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, {
        title: l("a.act.title"),
        lead: l("a.act.lead"),
        phase: "pilot",
      }),
      e.jsxs(qe, {
        id: "ad-log",
        pad: !1,
        title: l("a.act.logTitle"),
        sub: l("a.act.logSub", { n: c.num(C.length) }),
        children: [
          e.jsxs("div", {
            className: "ad-filters",
            children: [
              e.jsx(nt, {
                value: m,
                onChange: h,
                label: l("a.act.filter"),
                options: T1.map((v) => ({
                  value: v,
                  label: l(`a.act.g.${v}`),
                  count: v === "all" ? null : j[v] || null,
                })),
              }),
              e.jsx("span", { className: "grow" }),
              e.jsxs("label", {
                className: "ad-check",
                children: [
                  e.jsx("input", {
                    type: "checkbox",
                    checked: p,
                    onChange: (v) => f(v.target.checked),
                  }),
                  e.jsx("span", { children: l("a.act.showClock") }),
                ],
              }),
            ],
          }),
          C.length
            ? e.jsx("div", {
                className: "ad-scroll",
                children: e.jsxs("table", {
                  className: "ad-table ad-table-log",
                  children: [
                    e.jsx("thead", {
                      children: e.jsxs("tr", {
                        children: [
                          e.jsx("th", { children: l("a.col.time") }),
                          e.jsx("th", { children: l("a.col.category") }),
                          e.jsx("th", { children: l("a.col.event") }),
                        ],
                      }),
                    }),
                    e.jsx("tbody", {
                      children: C.map((v) => {
                        var k;
                        const g = gl(v.type),
                          N = ["entryDenied", "noshow", "lateCancel"].includes(
                            v.type,
                          );
                        return e.jsxs(
                          "tr",
                          {
                            className: N ? "is-bad" : "",
                            children: [
                              e.jsx("td", {
                                className: "tnum",
                                children: c.time(v.at),
                              }),
                              e.jsx("td", {
                                children: e.jsxs("span", {
                                  className: "ad-grp",
                                  children: [
                                    e.jsx(M, { name: M1[g], size: 14 }),
                                    l(`a.act.g.${g}`),
                                  ],
                                }),
                              }),
                              e.jsxs("td", {
                                children: [
                                  oc(v, s, c),
                                  v.type === "setting" &&
                                    ((k = v.params) == null ? void 0 : k.key) &&
                                    e.jsx("small", {
                                      className: "ad-sub",
                                      children: l(`a.act.key.${v.params.key}`),
                                    }),
                                ],
                              }),
                            ],
                          },
                          v.id,
                        );
                      }),
                    }),
                  ],
                }),
              })
            : e.jsx(Ze, {
                icon: "history",
                title: l(m === "all" ? "a.act.emptyTitle" : "a.act.emptyGroup"),
                action: e.jsxs("div", {
                  className: "ad-row-actions",
                  children: [
                    e.jsx(Z, {
                      size: "sm",
                      variant: "secondary",
                      icon: "scan",
                      onClick: () => a("reception", "desk"),
                      children: l("a.feed.tryDesk"),
                    }),
                    e.jsx(Z, {
                      size: "sm",
                      variant: "ghost",
                      icon: "timer",
                      onClick: () => i(ts, 30),
                      children: l("a.feed.tryClock"),
                    }),
                  ],
                }),
                children: l("a.act.emptyText"),
              }),
          e.jsxs("p", {
            className: "ad-panel-note",
            children: [e.jsx(M, { name: "shield", size: 15 }), l("a.act.note")],
          }),
        ],
      }),
    ],
  });
}
const cp = [
    { id: "overview", icon: "home", label: "a.nav.overview", group: "pilot" },
    { id: "members", icon: "users", label: "a.nav.members", group: "pilot" },
    {
      id: "schedule",
      icon: "calendar",
      label: "a.nav.schedule",
      group: "pilot",
    },
    {
      id: "settings",
      icon: "sliders",
      label: "a.nav.settings",
      group: "pilot",
    },
    {
      id: "activity",
      icon: "history",
      label: "a.nav.activity",
      group: "pilot",
    },
    {
      id: "staff",
      icon: "dumbbell",
      label: "a.nav.staff",
      group: "later",
      phase: "2",
    },
    {
      id: "equipment",
      icon: "map",
      label: "a.nav.equipment",
      group: "later",
      phase: "2",
    },
    {
      id: "engagement",
      icon: "gift",
      label: "a.nav.engagement",
      group: "later",
      phase: "3",
    },
  ],
  E1 = {},
  I1 = {
    overview: dp,
    members: y1,
    schedule: w1,
    staff: N1,
    equipment: S1,
    engagement: C1,
    settings: z1,
    activity: P1,
  };
function L1({ page: s, param: i }) {
  const { s: a, go: l, t: c, f: m, L: h } = wt(),
    p = I1[s] || dp,
    f = Fl(a),
    y = a.payments.filter((v) => v.status === "pending").length,
    j = { members: f.expiring + f.expired + y || null };
  V.useEffect(() => {
    window.scrollTo({ top: 0 });
    const v = document.querySelector(".ad-nav"),
      g = v == null ? void 0 : v.querySelector("button.on");
    if (v && g && v.scrollWidth > v.clientWidth) {
      const N = v.getBoundingClientRect(),
        k = g.getBoundingClientRect();
      v.scrollBy({ left: k.left + k.width / 2 - (N.left + N.width / 2) });
    }
  }, [s]);
  const C = de(as, "s2");
  return e.jsxs("div", {
    className: "ad",
    children: [
      e.jsxs("aside", {
        className: "ad-side",
        "aria-label": c("a.nav.label"),
        children: [
          e.jsxs("div", {
            className: "ad-gym",
            children: [
              e.jsx("span", {
                className: "ad-gym-mark",
                "aria-hidden": "true",
                children: "P",
              }),
              e.jsxs("span", {
                className: "ad-gym-text",
                children: [
                  e.jsx("strong", { children: h(a.gym.name) }),
                  e.jsx("small", { children: h(a.gym.branch).split(" · ")[0] }),
                ],
              }),
            ],
          }),
          e.jsx("nav", {
            className: "ad-nav",
            children: ["pilot", "later"].map((v) =>
              e.jsxs(
                "div",
                {
                  className: "ad-nav-group",
                  children: [
                    e.jsx("span", {
                      className: "ad-nav-head",
                      children: c(`a.nav.group.${v}`),
                    }),
                    e.jsx("ul", {
                      children: cp
                        .filter((g) => g.group === v)
                        .map((g) =>
                          e.jsx(
                            "li",
                            {
                              children: e.jsxs("button", {
                                type: "button",
                                className: s === g.id ? "on" : "",
                                "aria-current": s === g.id ? "page" : void 0,
                                onClick: () => l("admin", g.id),
                                children: [
                                  e.jsx(M, { name: g.icon, size: 18 }),
                                  e.jsx("span", {
                                    className: "ad-nav-label",
                                    children: c(g.label),
                                  }),
                                  j[g.id]
                                    ? e.jsx("span", {
                                        className: "ad-nav-badge tnum",
                                        "aria-label": c(
                                          "a.nav.needsAttention",
                                          { n: j[g.id] },
                                        ),
                                        children: m.num(j[g.id]),
                                      })
                                    : null,
                                  g.phase && e.jsx(Ge, { phase: g.phase }),
                                ],
                              }),
                            },
                            g.id,
                          ),
                        ),
                    }),
                  ],
                },
                v,
              ),
            ),
          }),
          e.jsxs("div", {
            className: "ad-me",
            children: [
              e.jsx(Ke, { name: h(C.name), tone: "lime", size: "sm" }),
              e.jsxs("span", {
                children: [
                  e.jsx("strong", { children: h(C.name) }),
                  e.jsx("small", { children: c("a.me.role") }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "ad-main",
        children: [
          e.jsxs("div", {
            className: "ad-topline",
            children: [
              e.jsxs("span", {
                className: "ad-live",
                children: [
                  e.jsx("i", { "aria-hidden": "true" }),
                  c("a.live", { time: m.time(a.clock) }),
                ],
              }),
              e.jsx("span", {
                className: "ad-topline-sep",
                "aria-hidden": "true",
              }),
              e.jsx("span", { className: "muted", children: c("a.today") }),
              !a.online &&
                e.jsx(ge, {
                  tone: "warn",
                  icon: "wifiOff",
                  children: c("a.offlineDesk"),
                }),
              e.jsx("span", { className: "grow" }),
              e.jsx(ge, {
                tone: "neutral",
                icon: "info",
                children: c("a.sampleData"),
              }),
            ],
          }),
          e.jsx(
            "div",
            { className: "ad-content", children: e.jsx(p, { param: i }) },
            s,
          ),
        ],
      }),
    ],
  });
}
const A1 = {
  activation: 100,
  engagement: 100,
  digital: 100,
  accuracy: 30,
  noshow: 30,
  payments: 100,
};
function $1(s, i) {
  return i.id === "activation" ||
    i.id === "payments" ||
    (i.id === "noshow" &&
      s.bookings.some((a) => ["attended", "noshow"].includes(a.status)))
    ? "live"
    : "sample";
}
function dp() {
  const { s, go: i, t: a, f: l, L: c } = wt(),
    m = Ko(s),
    h = p1(s),
    p = d1(s),
    f = Tl(s),
    y = Fl(s),
    j = s.members.filter((b) => ["expiring", "expired"].includes(lt(s, b))),
    C = s.equipment.filter((b) => b.status === "maintenance");
  Math.floor(s.clock / 60);
  const v = c(de(as, "s2").name).split(" ")[0],
    g =
      s.clock < 720
        ? "a.ov.morning"
        : s.clock < 1020
          ? "a.ov.afternoon"
          : "a.ov.evening",
    N = (b) =>
      b.id === "accuracy"
        ? a("a.pm.within", { n: l.pct(b.value) })
        : l.pct(b.value),
    k = (b) =>
      b.id === "accuracy"
        ? a("a.pm.targetWithin", { n: l.pct(b.target) })
        : b.lowerIsBetter
          ? a("a.pm.targetBelow", { n: l.pct(b.target) })
          : a("a.pm.targetAtLeast", { n: l.pct(b.target) });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(rs, { title: a(g, { name: v }), lead: a("a.ov.lead") }),
      e.jsxs("div", {
        className: "ad-kpis",
        children: [
          e.jsx(He, {
            icon: "users",
            label: a("a.ov.inNow"),
            badge: e.jsx(ge, { tone: "neutral", children: a("estimated") }),
            value: e.jsxs(e.Fragment, {
              children: [
                l.num(f.count),
                e.jsxs("small", {
                  className: "ad-kpi-of",
                  children: ["/ ", l.num(f.capacity)],
                }),
              ],
            }),
            sub: e.jsxs("span", {
              className: `ad-crowd ad-crowd-${f.level}`,
              children: [
                a(`crowd.${f.level}`),
                " ·",
                " ",
                a("a.ov.inNowSub", { n: l.num(p.inNow) }),
              ],
            }),
          }),
          e.jsx(He, {
            icon: "qr",
            label: a("a.ov.checkins"),
            value: l.num(p.checkins),
            sub: a("a.ov.checkinsSub", {
              n: l.num(p.digital),
              auto: l.num(p.autoOut),
            }),
            onClick: () => i("admin", "activity"),
          }),
          e.jsx(He, {
            icon: "cash",
            label: a("a.ov.collected"),
            value: l.money(p.collected),
            sub: a("a.ov.collectedSub", {
              cash: l.money(p.cash),
              n: l.num(p.renewals),
            }),
            onClick: () => i("admin", "members", "payments"),
          }),
          e.jsx(He, {
            icon: "hourglass",
            tone: p.pending.length ? "warn" : "",
            label: a("a.ov.pending"),
            value: l.num(p.pending.length),
            sub: p.pending.length
              ? a("a.ov.pendingSub", { amount: l.money(p.pendingAmount) })
              : a("a.ov.pendingNone"),
            onClick: () => i("admin", "members", "payments"),
          }),
          e.jsx(He, {
            icon: "calendar",
            label: a("a.ov.bookings"),
            value: e.jsxs(e.Fragment, {
              children: [
                l.num(p.booked),
                e.jsxs("small", {
                  className: "ad-kpi-of",
                  children: ["/ ", l.num(p.cap)],
                }),
              ],
            }),
            sub: a("a.ov.bookingsSub", {
              a: l.num(p.attended),
              n: l.num(p.noshows),
              w: l.num(p.waitlisted),
            }),
            onClick: () => i("admin", "schedule"),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "ad-grid ad-grid-ov",
        children: [
          e.jsxs(qe, {
            id: "ad-score",
            className: "ad-score",
            title: a("a.score.title"),
            sub: a("a.score.sub"),
            tools: e.jsxs("span", {
              className: `ad-gate-pill ${h.liveOk ? "ok" : "off"}`,
              children: [
                e.jsx(M, { name: h.liveOk ? "ok" : "alert", size: 16 }),
                a("a.score.met", { n: l.num(h.met), total: l.num(h.total) }),
              ],
            }),
            children: [
              e.jsx("ol", {
                className: "ad-metrics",
                children: m.map((b) => {
                  const w = $1(s, b);
                  return e.jsxs(
                    "li",
                    {
                      className: `ad-metric ${b.good ? "" : "is-off"}`,
                      children: [
                        e.jsxs("div", {
                          className: "ad-metric-name",
                          children: [
                            e.jsx("strong", { children: a(`a.pm.${b.id}`) }),
                            e.jsx("small", { children: a(`a.pm.${b.id}.how`) }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "ad-metric-val",
                          children: [
                            e.jsx("b", { children: N(b) }),
                            e.jsx("small", {
                              className: "tnum",
                              children: k(b),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "ad-metric-bar",
                          children: [
                            e.jsx(i1, {
                              value: b.value,
                              target: b.target,
                              max: A1[b.id],
                              good: b.good,
                              label: a(`a.pm.${b.id}`),
                            }),
                            e.jsxs("div", {
                              className: "ad-metric-foot",
                              children: [
                                e.jsxs("span", {
                                  className: `ad-verdict ${b.good ? "ok" : "off"}`,
                                  children: [
                                    e.jsx(M, {
                                      name: b.good ? "ok" : "alert",
                                      size: 14,
                                    }),
                                    a(
                                      b.good
                                        ? "a.pm.onTarget"
                                        : "a.pm.offTarget",
                                    ),
                                  ],
                                }),
                                e.jsx(Ua, {
                                  kind: w,
                                  children:
                                    w === "live"
                                      ? a("a.src.live")
                                      : b.id === "digital"
                                        ? a("a.src.sampleDigital", {
                                            n: l.num(p.checkins),
                                          })
                                        : b.id === "accuracy"
                                          ? a("a.src.sampleAudit")
                                          : a("a.src.sample"),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    b.id,
                  );
                }),
              }),
              e.jsxs("div", {
                className: "ad-gate",
                children: [
                  e.jsxs("div", {
                    className: "ad-gate-head",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("h3", { children: a("a.gate.title") }),
                          e.jsx("p", { children: a("a.gate.rule") }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "ad-gate-count",
                        children: [
                          e.jsx("b", { children: l.num(h.streak) }),
                          e.jsx("small", {
                            children: a("a.gate.of", { n: l.num(h.needed) }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("ol", {
                    className: "ad-weeks",
                    "aria-label": a("a.gate.weeks"),
                    children: Array.from({ length: 8 }, (b, w) => {
                      const S = h.weeks[w],
                        ae = w === h.weeks.length - 1,
                        _ = S === void 0 ? "future" : S ? "met" : "miss";
                      return e.jsxs(
                        "li",
                        {
                          className: `ad-week ${_} ${ae ? "live" : ""}`,
                          children: [
                            e.jsx("span", {
                              className: "ad-week-cell",
                              "aria-hidden": "true",
                              children:
                                _ === "met"
                                  ? e.jsx(M, { name: "check", size: 14 })
                                  : _ === "miss"
                                    ? e.jsx(M, { name: "x", size: 14 })
                                    : null,
                            }),
                            e.jsx("small", {
                              className: "tnum",
                              children: ae
                                ? a("a.gate.now")
                                : a("a.gate.wk", { n: l.num(w + 1) }),
                            }),
                            e.jsx("span", {
                              className: "sr-only",
                              children: a(`a.gate.state.${_}`),
                            }),
                          ],
                        },
                        w,
                      );
                    }),
                  }),
                  e.jsxs("p", {
                    className: "ad-gate-note",
                    children: [
                      h.liveOk
                        ? a("a.gate.onPace", { w: l.num(h.goWeek) })
                        : a("a.gate.reset"),
                      " ",
                      e.jsx("span", {
                        className: "muted",
                        children: a("a.gate.sampleNote"),
                      }),
                    ],
                  }),
                  e.jsx("ul", {
                    className: "ad-gate-qual",
                    children: ["staff", "retention", "pay"].map((b) =>
                      e.jsxs(
                        "li",
                        {
                          children: [
                            e.jsx(M, { name: "list", size: 16 }),
                            e.jsxs("span", {
                              className: "ad-qual-body",
                              children: [
                                e.jsx("strong", { children: a(`a.qual.${b}`) }),
                                e.jsx("small", {
                                  children: a(`a.qual.${b}.how`),
                                }),
                              ],
                            }),
                            e.jsx(ge, {
                              tone: "neutral",
                              children: a("a.qual.later"),
                            }),
                          ],
                        },
                        b,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "ad-stack",
            children: [
              e.jsx(qe, {
                id: "ad-occ",
                title: a("a.occ.title"),
                sub: a("a.occ.sub", { n: l.num(s.settings.avgVisitMin) }),
                tools: e.jsx(ge, {
                  tone: "neutral",
                  icon: "info",
                  children: a("estimated"),
                }),
                children: e.jsx(o1, {}),
              }),
              e.jsx(qe, {
                id: "ad-attn",
                title: a("a.attn.title"),
                sub: a("a.attn.sub"),
                pad: !1,
                children: e.jsxs("ul", {
                  className: "ad-attn",
                  children: [
                    p.pending.map((b) => {
                      const w = ze(s, b.memberId);
                      return e.jsxs(
                        "li",
                        {
                          children: [
                            e.jsx("span", {
                              className: "ad-attn-ico warn",
                              children: e.jsx(M, {
                                name: "hourglass",
                                size: 16,
                              }),
                            }),
                            e.jsxs("span", {
                              className: "ad-attn-body",
                              children: [
                                e.jsx("strong", {
                                  children: a("a.attn.pending", {
                                    member: w ? c(w.name) : "",
                                    amount: l.money(b.amount),
                                  }),
                                }),
                                e.jsxs("small", {
                                  children: [
                                    a(`method.${b.method}`),
                                    b.ref ? ` · ${l.digits(b.ref)}` : "",
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(Z, {
                              size: "sm",
                              variant: "secondary",
                              onClick: () => i("admin", "members", "payments"),
                              children: a("view"),
                            }),
                          ],
                        },
                        b.id,
                      );
                    }),
                    j.map((b) => {
                      const w = lt(s, b);
                      return e.jsxs(
                        "li",
                        {
                          children: [
                            e.jsx("span", {
                              className: `ad-attn-ico ${w === "expired" ? "bad" : "warn"}`,
                              children: e.jsx(M, {
                                name:
                                  w === "expired" ? "lock" : "calendarClock",
                                size: 16,
                              }),
                            }),
                            e.jsxs("span", {
                              className: "ad-attn-body",
                              children: [
                                e.jsx("strong", { children: c(b.name) }),
                                e.jsxs("small", {
                                  children: [
                                    e.jsx(_e, { value: w }),
                                    " ·",
                                    " ",
                                    w === "expired"
                                      ? a("a.attn.ended", {
                                          date: l.date(b.end),
                                        })
                                      : a("a.attn.ends", {
                                          date: l.date(b.end),
                                          n: l.num(Mn(b)),
                                        }),
                                    !b.app &&
                                      e.jsxs(e.Fragment, {
                                        children: [" · ", a("a.attn.noApp")],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(Z, {
                              size: "sm",
                              variant: "secondary",
                              onClick: () => i("admin", "members", b.id),
                              children: a("view"),
                            }),
                          ],
                        },
                        b.id,
                      );
                    }),
                    C.map((b) =>
                      e.jsxs(
                        "li",
                        {
                          children: [
                            e.jsx("span", {
                              className: "ad-attn-ico plain",
                              children: e.jsx(M, { name: "wrench", size: 16 }),
                            }),
                            e.jsxs("span", {
                              className: "ad-attn-body",
                              children: [
                                e.jsxs("strong", {
                                  children: [c(Xt(b).name), " · ", b.label],
                                }),
                                e.jsxs("small", {
                                  children: [
                                    a("a.attn.maint"),
                                    " · ",
                                    e.jsx(Ge, { phase: "2" }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx(Z, {
                              size: "sm",
                              variant: "secondary",
                              onClick: () => i("admin", "equipment", b.id),
                              children: a("view"),
                            }),
                          ],
                        },
                        b.id,
                      ),
                    ),
                    !p.pending.length &&
                      !j.length &&
                      !C.length &&
                      e.jsxs("li", {
                        className: "ad-attn-empty",
                        children: [
                          e.jsx(M, { name: "ok", size: 18 }),
                          a("a.attn.clear"),
                        ],
                      }),
                  ],
                }),
              }),
              e.jsx(qe, {
                id: "ad-feed",
                title: a("a.feed.title"),
                sub: a("a.feed.sub"),
                tools: e.jsx(Z, {
                  size: "sm",
                  variant: "ghost",
                  iconEnd: "arrow",
                  onClick: () => i("admin", "activity"),
                  children: a("a.feed.all"),
                }),
                children: e.jsx(O1, { limit: 7 }),
              }),
            ],
          }),
        ],
      }),
      e.jsx(qe, {
        id: "ad-classes",
        title: a("a.ov.classesTitle"),
        sub: a("a.ov.classesSub"),
        tools: e.jsx(Z, {
          size: "sm",
          variant: "ghost",
          iconEnd: "arrow",
          onClick: () => i("admin", "schedule"),
          children: a("a.ov.openSchedule"),
        }),
        pad: !1,
        children: e.jsx("div", {
          className: "ad-scroll",
          children: e.jsxs("table", {
            className: "ad-table",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", { children: a("a.col.time") }),
                    e.jsx("th", { children: a("a.col.session") }),
                    e.jsx("th", { children: a("a.col.trainer") }),
                    e.jsx("th", { children: a("a.col.fill") }),
                    e.jsx("th", {
                      className: "num",
                      children: a("a.col.left"),
                    }),
                    e.jsx("th", {
                      className: "num",
                      children: a("a.col.waitlist"),
                    }),
                    e.jsx("th", { children: a("a.col.state") }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: p.sessions.map((b) => {
                  const w = Va(s, b),
                    S = gn(s, b),
                    ae = b.trainerId && de(dt, b.trainerId),
                    _ = Wo(s, b.id).length;
                  return e.jsxs(
                    "tr",
                    {
                      className: S === "ended" ? "is-dim" : "",
                      children: [
                        e.jsx("td", {
                          className: "tnum",
                          children: l.clock(b.time),
                        }),
                        e.jsxs("td", {
                          children: [
                            e.jsx("span", {
                              className: "ad-cell-title",
                              children: c(b.title),
                            }),
                            b.womenOnly &&
                              e.jsx(ge, {
                                tone: "ladies",
                                children: a("ladiesOnly"),
                              }),
                          ],
                        }),
                        e.jsx("td", {
                          className: "muted",
                          children: ae ? c(ae.name) : a(`cat.${b.cat}`),
                        }),
                        e.jsx("td", {
                          children: e.jsxs("span", {
                            className: "ad-fillcell",
                            children: [
                              e.jsx("span", {
                                className: "ad-fill",
                                children: e.jsx("span", {
                                  style: {
                                    inlineSize: `${(w / b.cap) * 100}%`,
                                  },
                                  className: w >= b.cap ? "full" : "",
                                }),
                              }),
                              e.jsx("span", {
                                className: "tnum",
                                children: a("of", {
                                  a: l.num(w),
                                  b: l.num(b.cap),
                                }),
                              }),
                            ],
                          }),
                        }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: l.num(Pn(s, b)),
                        }),
                        e.jsx("td", {
                          className: "num tnum",
                          children: _
                            ? e.jsx("b", { children: l.num(_) })
                            : e.jsx("span", {
                                className: "muted",
                                children: l.num(0),
                              }),
                        }),
                        e.jsx("td", {
                          children:
                            S === "live"
                              ? e.jsx(ge, {
                                  tone: "lime",
                                  children: a("a.sess.live"),
                                })
                              : S === "ended"
                                ? e.jsx("span", {
                                    className: "muted",
                                    children: a("a.sess.ended"),
                                  })
                                : e.jsx("span", {
                                    className: "muted",
                                    children: a("a.sess.upcoming"),
                                  }),
                        }),
                      ],
                    },
                    b.id,
                  );
                }),
              }),
            ],
          }),
        }),
      }),
      e.jsxs("p", {
        className: "ad-footnote",
        children: [
          e.jsx(M, { name: "info", size: 15 }),
          a("a.ov.footnote", { cap: l.num(s.gym.capacity), n: l.num(y.all) }),
        ],
      }),
    ],
  });
}
function O1({ limit: s = 7 }) {
  const { s: i, go: a, act: l, t: c, f: m } = wt(),
    h = i.audit.filter((p) => p.type !== "clock").slice(0, s);
  return h.length
    ? e.jsx("ol", {
        className: "ad-feed",
        "aria-live": "polite",
        children: h.map((p) =>
          e.jsxs(
            "li",
            {
              className: ["entryDenied", "noshow", "lateCancel"].includes(
                p.type,
              )
                ? "bad"
                : "",
              children: [
                e.jsx("time", { children: m.time(p.at) }),
                e.jsx("span", { children: oc(p, i, m) }),
              ],
            },
            p.id,
          ),
        ),
      })
    : e.jsxs("div", {
        className: "ad-feed-empty",
        children: [
          e.jsx("p", { children: c("a.feed.empty") }),
          e.jsxs("div", {
            className: "ad-row-actions",
            children: [
              e.jsx(Z, {
                size: "sm",
                variant: "secondary",
                icon: "scan",
                onClick: () => a("reception", "desk"),
                children: c("a.feed.tryDesk"),
              }),
              e.jsx(Z, {
                size: "sm",
                variant: "ghost",
                icon: "timer",
                onClick: () => l(ts, 30),
                children: c("a.feed.tryClock"),
              }),
            ],
          }),
        ],
      });
}
const Uo = ["lead", "interview", "demo", "pilot"],
  Ro = ["core", "pro", "chain"],
  Ga = [
    { key: "plan", owner: "powerline", go: ["admin", "settings"] },
    {
      key: "floor",
      owner: "powerline",
      phase: "2",
      fee: !0,
      go: ["member", "explore"],
    },
    {
      key: "library",
      owner: "powerline",
      phase: "2",
      fee: !0,
      go: ["platform", "library"],
    },
    { key: "members", owner: "both", fee: !0, go: ["admin", "members"] },
    { key: "staff", owner: "powerline", fee: !0, go: ["reception", "desk"] },
    {
      key: "payments",
      owner: "gym",
      decision: !0,
      go: ["reception", "payments"],
    },
    { key: "pilotTargets", owner: "both", go: ["platform", "overview"] },
  ];
function R1(s, i) {
  return i in s.onboarding
    ? { ...s, onboarding: { ...s.onboarding, [i]: !s.onboarding[i] } }
    : s;
}
function mp(s) {
  return {
    done: Ga.filter((a) => s.onboarding[a.key]).length,
    total: Ga.length,
    left: Ga.filter((a) => !s.onboarding[a.key]),
  };
}
function F1(s) {
  const i = s.gyms,
    a = Uo.map((l) => {
      const c = i.filter((m) => m.stage === l);
      return {
        stage: l,
        gyms: c,
        count: c.length,
        members: c.reduce((m, h) => m + h.members, 0),
      };
    });
  return {
    gyms: i.length,
    pilots: i.filter((l) => l.stage === "pilot").length,
    branches: i.reduce((l, c) => l + c.branches, 0),
    members: i.reduce((l, c) => l + c.members, 0),
    byStage: a,
    interviewed: i.filter((l) => l.stage !== "lead").length,
  };
}
const jl = 8,
  Vo = 3;
function ic(s) {
  const i = Ko(s),
    a = i.filter((m) => m.good).length,
    l = a === i.length,
    c = l ? Vo + 1 : 0;
  return { metrics: i, met: a, total: i.length, allMet: l, streak: c };
}
function up(s, i) {
  const a = s.equipment.filter((l) => l.libId === i);
  return { units: a, gyms: a.length ? 1 : 0 };
}
const Ys = [
    {
      id: "pilot",
      n: 1,
      min: 8,
      max: 12,
      scope: [
        "entry",
        "members",
        "bookings",
        "occupancy",
        "reception",
        "admin",
      ],
    },
    {
      id: "2",
      n: 2,
      min: 6,
      max: 10,
      scope: [
        "library",
        "floor",
        "trainer",
        "programs",
        "nutrition",
        "chat",
        "packages",
      ],
    },
    {
      id: "3",
      n: 3,
      min: 6,
      max: 8,
      scope: ["ledger", "challenges", "rewards", "matching", "health"],
    },
    {
      id: "4",
      n: 4,
      min: 4,
      max: 10,
      scope: ["offers", "promo", "ordering", "multi", "branded"],
    },
  ],
  q1 = [
    "switch",
    "install",
    "occupancy",
    "farming",
    "matching",
    "mapping",
    "payments",
    "scope",
  ],
  _1 = {
    switch: "pilot",
    install: "pilot",
    occupancy: "pilot",
    farming: "3",
    matching: "3",
    mapping: "2",
    payments: "pilot",
    scope: "pilot",
  },
  yl = [
    "pilotGym",
    "segment",
    "app",
    "hardware",
    "provider",
    "trainer",
    "funding",
    "equipment",
    "food",
  ];
function rr({ title: s, sub: i, children: a, phase: l }) {
  return e.jsxs("header", {
    className: "pl-head",
    children: [
      e.jsxs("div", {
        className: "pl-head-text",
        children: [
          e.jsxs("h1", { children: [s, l] }),
          i && e.jsx("p", { children: i }),
        ],
      }),
      a && e.jsx("div", { className: "pl-head-actions", children: a }),
    ],
  });
}
function ft({
  title: s,
  meta: i,
  actions: a,
  children: l,
  className: c = "",
  id: m,
  flush: h = !1,
}) {
  return e.jsxs("section", {
    className: `pl-panel ${h ? "flush" : ""} ${c}`,
    "aria-labelledby": m,
    children: [
      (s || a) &&
        e.jsxs("header", {
          className: "pl-panel-head",
          children: [
            e.jsxs("div", {
              children: [
                s && e.jsx("h2", { id: m, children: s }),
                i && e.jsx("p", { className: "pl-panel-meta", children: i }),
              ],
            }),
            a && e.jsx("div", { className: "pl-panel-actions", children: a }),
          ],
        }),
      l,
    ],
  });
}
function pp({ on: s, label: i, onChange: a, size: l = "" }) {
  return e.jsx("button", {
    type: "button",
    role: "checkbox",
    "aria-checked": s,
    "aria-label": i,
    className: `pl-check ${s ? "on" : ""} ${l}`,
    onClick: a,
    children: s && e.jsx(M, { name: "check", size: l === "lg" ? 16 : 14 }),
  });
}
function D1({ on: s, label: i }) {
  return s
    ? e.jsxs("span", {
        className: "pl-yes",
        title: i,
        children: [
          e.jsx(M, { name: "check", size: 16 }),
          e.jsx("span", { className: "sr-only", children: i }),
        ],
      })
    : e.jsx("span", {
        className: "pl-no",
        "aria-hidden": "true",
        children: "—",
      });
}
const H1 = {
  pilot: "lime",
  demo: "forest",
  interview: "frost",
  lead: "neutral",
};
function B1({ stage: s }) {
  const { t: i } = me();
  return e.jsx(ge, {
    tone: H1[s],
    className: "pl-stage",
    children: i(`pl.stage.${s}`),
  });
}
const hp = (s) => `⁦${s}⁩`;
function W1(s, i) {
  return s.unit === "±%" ? hp(`±${i.pct(s.value)}`) : i.pct(s.value);
}
function fp(s, i, a) {
  const l = i.pct(s.target);
  return s.id === "accuracy"
    ? a("pl.target.within", { v: hp(`±${l}`) })
    : s.lowerIsBetter
      ? a("pl.target.max", { v: l })
      : s.target === 100
        ? a("pl.target.all", { v: l })
        : a("pl.target.min", { v: l });
}
function gp() {
  const { s, t: i, f: a, L: l, go: c } = me(),
    m = F1(s),
    h = ic(s),
    p = s.gyms.find((y) => y.stage === "pilot"),
    f = Math.max(...m.byStage.map((y) => y.count), 1);
  return e.jsxs("div", {
    className: "pl-page",
    children: [
      e.jsx(rr, {
        title: i("pl.ov.title"),
        sub: i("pl.ov.sub"),
        children: e.jsx(ge, { icon: "info", children: i("pl.sample") }),
      }),
      e.jsx("section", {
        className: "pl-kpis",
        "aria-label": i("pl.ov.kpis"),
        children: [
          ["gyms", m.gyms],
          ["pilots", m.pilots],
          ["branches", m.branches],
          ["members", m.members],
        ].map(([y, j]) =>
          e.jsxs(
            "div",
            {
              className: "pl-kpi",
              children: [
                e.jsx("span", {
                  className: "pl-kpi-label",
                  children: i(`pl.kpi.${y}`),
                }),
                e.jsx("b", { className: "pl-kpi-value", children: a.num(j) }),
                e.jsx("small", { children: i(`pl.kpi.${y}.note`) }),
              ],
            },
            y,
          ),
        ),
      }),
      e.jsxs("div", {
        className: "pl-grid pl-grid-main",
        children: [
          e.jsxs(ft, {
            id: "pl-pilot-h",
            className: "pl-pilot",
            title: i("pl.ov.pilotTitle", { gym: l(s.gym.name) }),
            meta: i("pl.ov.pilotMeta", {
              area: l(p == null ? void 0 : p.area),
              tier: i(`pl.tier.${(p == null ? void 0 : p.tier) || "core"}`),
              n: (p == null ? void 0 : p.members) ?? 0,
            }),
            actions: e.jsx(Z, {
              variant: "secondary",
              size: "sm",
              iconEnd: "arrow",
              onClick: () => c("admin", "overview"),
              children: i("pl.ov.openAdmin"),
            }),
            children: [
              e.jsxs("div", {
                className: `pl-gate ${h.allMet ? "ok" : "bad"}`,
                children: [
                  e.jsxs("div", {
                    className: "pl-gate-head",
                    children: [
                      e.jsx("span", {
                        className: "pl-gate-icon",
                        children: e.jsx(M, {
                          name: h.allMet ? "ok" : "warn",
                          size: 20,
                        }),
                      }),
                      e.jsxs("div", {
                        className: "grow",
                        children: [
                          e.jsx("strong", {
                            children: h.allMet
                              ? i("pl.gate.onTrack")
                              : i("pl.gate.missed", { n: h.total - h.met }),
                          }),
                          e.jsx("p", {
                            children: i("pl.gate.rule", { n: jl }),
                          }),
                        ],
                      }),
                      e.jsx("span", {
                        className: "pl-gate-count tnum",
                        children: i("pl.gate.streak", {
                          n: h.streak,
                          total: jl,
                        }),
                      }),
                    ],
                  }),
                  e.jsx("ol", {
                    className: "pl-weeks",
                    "aria-label": i("pl.gate.weeksLabel"),
                    children: Array.from({ length: jl }, (y, j) => {
                      const C = j + 1,
                        v =
                          C <= Vo
                            ? "done"
                            : C === Vo + 1
                              ? h.allMet
                                ? "now"
                                : "miss"
                              : "todo";
                      return e.jsxs(
                        "li",
                        {
                          className: `pl-week ${v}`,
                          title: `${i("pl.week.n", { n: C })} · ${i(`pl.week.${v}`)}`,
                          children: [
                            e.jsx("span", {
                              className: "tnum",
                              children: a.num(C),
                            }),
                            e.jsx("span", {
                              className: "sr-only",
                              children: i(`pl.week.${v}`),
                            }),
                          ],
                        },
                        C,
                      );
                    }),
                  }),
                  e.jsx("p", {
                    className: "pl-fine",
                    children: i("pl.gate.sample"),
                  }),
                ],
              }),
              e.jsx("ul", {
                className: "pl-metrics",
                children: h.metrics.map((y) =>
                  e.jsxs(
                    "li",
                    {
                      className: `pl-metric ${y.good ? "good" : "below"}`,
                      children: [
                        e.jsxs("div", {
                          className: "pl-metric-text",
                          children: [
                            e.jsx("strong", {
                              children: i(`pl.metric.${y.id}`),
                            }),
                            e.jsx("small", {
                              children: i(`pl.metric.${y.id}.how`),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "pl-bullet",
                          "aria-hidden": "true",
                          children: [
                            e.jsx("span", {
                              className: "pl-bullet-bar",
                              style: {
                                inlineSize: `${Math.min(100, (y.value / 100) * 100)}%`,
                              },
                            }),
                            e.jsx("span", {
                              className: "pl-bullet-target",
                              style: {
                                insetInlineStart: `${(y.target / 100) * 100}%`,
                              },
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "pl-metric-num",
                          children: [
                            e.jsx("b", {
                              className: "tnum",
                              children: W1(y, a),
                            }),
                            e.jsx("small", {
                              className: "tnum",
                              children: fp(y, a, i),
                            }),
                          ],
                        }),
                        e.jsxs("span", {
                          className: `pl-flag ${y.good ? "ok" : "bad"}`,
                          children: [
                            e.jsx(M, {
                              name: y.good ? "ok" : "alert",
                              size: 15,
                            }),
                            y.good ? i("pl.met") : i("pl.below"),
                          ],
                        }),
                      ],
                    },
                    y.id,
                  ),
                ),
              }),
              e.jsxs("div", {
                className: "pl-qual",
                children: [
                  e.jsx("span", {
                    className: "pl-qual-title",
                    children: i("pl.qual.title"),
                  }),
                  e.jsx("ul", {
                    children: ["staff", "retention", "pay"].map((y) =>
                      e.jsxs(
                        "li",
                        {
                          children: [
                            e.jsx(M, { name: "hourglass", size: 15 }),
                            i(`pl.qual.${y}`),
                          ],
                        },
                        y,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "pl-stack",
            children: [
              e.jsx(ft, {
                id: "pl-funnel-h",
                title: i("pl.funnel.title"),
                meta: i("pl.funnel.meta"),
                children: e.jsx("ol", {
                  className: "pl-funnel",
                  children: m.byStage.map((y) =>
                    e.jsxs(
                      "li",
                      {
                        children: [
                          e.jsxs("div", {
                            className: "pl-funnel-top",
                            children: [
                              e.jsx("span", {
                                className: "pl-funnel-name",
                                children: i(`pl.stage.${y.stage}`),
                              }),
                              e.jsx("span", {
                                className: "pl-funnel-sub tnum",
                                children: i("pl.funnel.members", {
                                  n: a.num(y.members),
                                }),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "pl-funnel-track",
                            children: [
                              e.jsx("span", {
                                className: `pl-funnel-bar s-${y.stage}`,
                                style: {
                                  inlineSize: `${(y.count / f) * 100}%`,
                                },
                              }),
                              e.jsx("b", {
                                className: "tnum",
                                children: a.num(y.count),
                              }),
                            ],
                          }),
                          e.jsx("span", {
                            className: "pl-funnel-gyms",
                            children:
                              y.gyms.map((j) => j.name).join(" · ") ||
                              i("pl.funnel.none"),
                          }),
                        ],
                      },
                      y.stage,
                    ),
                  ),
                }),
              }),
              e.jsxs(ft, {
                id: "pl-iso-h",
                className: "pl-iso",
                title: i("pl.iso.title"),
                meta: i("pl.iso.meta"),
                children: [
                  e.jsx("ul", {
                    className: "pl-iso-list",
                    children: [
                      ["shield", "rls"],
                      ["building", "branch"],
                      ["history", "audit"],
                    ].map(([y, j]) =>
                      e.jsxs(
                        "li",
                        {
                          children: [
                            e.jsx("span", {
                              className: "pl-iso-icon",
                              children: e.jsx(M, { name: y, size: 17 }),
                            }),
                            e.jsxs("span", {
                              children: [
                                e.jsx("strong", { children: i(`pl.iso.${j}`) }),
                                e.jsx("small", {
                                  children: i(`pl.iso.${j}.text`),
                                }),
                              ],
                            }),
                          ],
                        },
                        j,
                      ),
                    ),
                  }),
                  e.jsxs("p", {
                    className: "pl-note",
                    children: [
                      e.jsx(M, { name: "info", size: 15 }),
                      i("pl.iso.proto"),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(ft, {
        id: "pl-tenants-h",
        title: i("pl.tenants.title"),
        meta: i("pl.tenants.meta", { n: m.gyms }),
        flush: !0,
        children: e.jsx("div", {
          className: "pl-table-wrap",
          children: e.jsxs("table", {
            className: "pl-table",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", { scope: "col", children: i("pl.col.gym") }),
                    e.jsx("th", { scope: "col", children: i("pl.col.stage") }),
                    e.jsx("th", { scope: "col", children: i("pl.col.tier") }),
                    e.jsx("th", {
                      scope: "col",
                      className: "num",
                      children: i("pl.col.branches"),
                    }),
                    e.jsx("th", {
                      scope: "col",
                      className: "num",
                      children: i("pl.col.members"),
                    }),
                    e.jsx("th", {
                      scope: "col",
                      className: "pl-hide-sm",
                      children: i("pl.col.next"),
                    }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: [...s.gyms]
                  .sort((y, j) => Uo.indexOf(j.stage) - Uo.indexOf(y.stage))
                  .map((y) =>
                    e.jsxs(
                      "tr",
                      {
                        className: y.stage === "pilot" ? "is-pilot" : "",
                        children: [
                          e.jsx("td", {
                            children: e.jsxs("div", {
                              className: "pl-gym",
                              children: [
                                e.jsx("span", {
                                  className: "pl-gym-mark",
                                  "aria-hidden": "true",
                                  children: y.name
                                    .split(" ")
                                    .map((j) => j[0])
                                    .slice(0, 2)
                                    .join(""),
                                }),
                                e.jsxs("span", {
                                  children: [
                                    y.stage === "pilot"
                                      ? e.jsx("button", {
                                          type: "button",
                                          className: "pl-link",
                                          onClick: () =>
                                            c("platform", "onboarding"),
                                          children: y.name,
                                        })
                                      : e.jsx("strong", { children: y.name }),
                                    e.jsx("small", { children: l(y.area) }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          e.jsx("td", {
                            children: e.jsx(B1, { stage: y.stage }),
                          }),
                          e.jsx("td", { children: i(`pl.tier.${y.tier}`) }),
                          e.jsx("td", {
                            className: "num tnum",
                            children: a.num(y.branches),
                          }),
                          e.jsx("td", {
                            className: "num tnum",
                            children: a.num(y.members),
                          }),
                          e.jsx("td", {
                            className: "pl-hide-sm pl-next",
                            children: i(`pl.next.${y.stage}`),
                          }),
                        ],
                      },
                      y.id,
                    ),
                  ),
              }),
            ],
          }),
        }),
      }),
      e.jsx(ft, {
        id: "pl-research-h",
        title: i("pl.research.title"),
        meta: i("pl.research.meta"),
        children: e.jsxs("div", {
          className: "pl-research",
          children: [
            e.jsxs("div", {
              className: "pl-task",
              children: [
                e.jsxs("div", {
                  className: "pl-task-head",
                  children: [
                    e.jsx("span", {
                      className: "pl-task-icon",
                      children: e.jsx(M, { name: "chat", size: 18 }),
                    }),
                    e.jsxs("div", {
                      className: "grow",
                      children: [
                        e.jsx("strong", {
                          children: i("pl.research.interviews"),
                        }),
                        e.jsx("small", {
                          children: i("pl.research.interviews.text"),
                        }),
                      ],
                    }),
                    e.jsx(ge, {
                      tone: m.interviewed >= 5 ? "ok" : "warn",
                      children:
                        m.interviewed >= 5
                          ? i("pl.research.enough")
                          : i("pl.research.inProgress"),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "pl-range",
                  "aria-label": i("pl.research.progress", { n: m.interviewed }),
                  children: [
                    e.jsxs("div", {
                      className: "pl-range-track",
                      children: [
                        e.jsx("span", {
                          className: "pl-range-fill",
                          style: {
                            inlineSize: `${(Math.min(m.interviewed, 10) / 10) * 100}%`,
                          },
                        }),
                        e.jsx("span", {
                          className: "pl-range-band",
                          style: { insetInlineStart: "50%", inlineSize: "50%" },
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className: "pl-range-labels tnum",
                      children: [
                        e.jsx("span", {
                          children: i("pl.research.progress", {
                            n: m.interviewed,
                          }),
                        }),
                        e.jsx("span", { children: i("pl.research.goal") }),
                      ],
                    }),
                  ],
                }),
                e.jsx("span", {
                  className: "pl-sub",
                  children: i("pl.research.ask"),
                }),
                e.jsx("ul", {
                  className: "pl-chips",
                  children: [
                    "today",
                    "cash",
                    "freeze",
                    "ladies",
                    "pay",
                    "basis",
                  ].map((y) =>
                    e.jsx("li", { children: i(`pl.research.q.${y}`) }, y),
                  ),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "pl-task",
              children: [
                e.jsxs("div", {
                  className: "pl-task-head",
                  children: [
                    e.jsx("span", {
                      className: "pl-task-icon",
                      children: e.jsx(M, { name: "map", size: 18 }),
                    }),
                    e.jsxs("div", {
                      className: "grow",
                      children: [
                        e.jsx("strong", {
                          children: i("pl.research.competitors"),
                        }),
                        e.jsx("small", {
                          children: i("pl.research.competitors.text"),
                        }),
                      ],
                    }),
                    e.jsx(ge, { children: i("pl.research.notStarted") }),
                  ],
                }),
                e.jsxs("div", {
                  className: "pl-mini-table",
                  role: "table",
                  "aria-label": i("pl.research.competitors"),
                  children: [
                    e.jsx("div", {
                      role: "row",
                      className: "pl-mini-head",
                      children: [
                        "product",
                        "price",
                        "app",
                        "arabic",
                        "cash",
                        "offline",
                      ].map((y) =>
                        e.jsx(
                          "span",
                          {
                            role: "columnheader",
                            children: i(`pl.research.col.${y}`),
                          },
                          y,
                        ),
                      ),
                    }),
                    e.jsx("div", {
                      role: "row",
                      className: "pl-mini-empty",
                      children: e.jsxs("span", {
                        role: "cell",
                        children: [
                          e.jsx(M, { name: "search", size: 16 }),
                          i("pl.research.empty"),
                        ],
                      }),
                    }),
                  ],
                }),
                e.jsx(Z, {
                  variant: "ghost",
                  size: "sm",
                  iconEnd: "arrow",
                  onClick: () => c("platform", "pricing"),
                  children: i("pl.research.seeLandscape"),
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const U1 = [
  { key: "floor", icon: "map" },
  { key: "library", icon: "library" },
  { key: "members", icon: "file" },
  { key: "staff", icon: "users" },
];
function V1() {
  const { s, t: i, f: a, L: l, act: c, go: m, notify: h } = me(),
    p = mp(s),
    f = p.left.length === 0,
    y = ic(s),
    j = {
      library: i("pl.ob.library.meta", {
        n: s.equipment.length,
        m: new Set(s.equipment.map((v) => v.libId)).size,
      }),
      members: i("pl.ob.members.meta", { n: s.members.length }),
      staff: i("pl.ob.staff.meta", { n: as.length }),
      plan: i("pl.ob.plan.meta", { n: Wt.length }),
    },
    C = (v) => {
      const g = s.onboarding[v];
      (c(R1, v),
        h(
          i(g ? "pl.ob.toastUndone" : "pl.ob.toastDone", {
            step: i(`pl.ob.${v}`),
          }),
        ));
    };
  return e.jsxs("div", {
    className: "pl-page",
    children: [
      e.jsx(rr, {
        title: i("pl.ob.title"),
        sub: i("pl.ob.sub", { gym: l(s.gym.name), branch: l(s.gym.branch) }),
        children: e.jsx(Z, {
          variant: "secondary",
          size: "sm",
          icon: "grid",
          onClick: () => m("platform", "overview"),
          children: i("pl.ob.toHealth"),
        }),
      }),
      e.jsxs("section", {
        className: `pl-progress ${f ? "ready" : ""}`,
        "aria-live": "polite",
        children: [
          e.jsxs("div", {
            className: "pl-progress-num",
            children: [
              e.jsx("b", { children: a.num(p.done) }),
              e.jsx("span", { children: i("pl.ob.ofSteps", { n: p.total }) }),
            ],
          }),
          e.jsxs("div", {
            className: "pl-progress-body",
            children: [
              e.jsx("strong", {
                children: f
                  ? i("pl.ob.ready")
                  : i("pl.ob.left", { n: p.left.length }),
              }),
              e.jsx("p", {
                children: f
                  ? i("pl.ob.readyText")
                  : p.left.map((v) => i(`pl.ob.${v.key}`)).join(" · "),
              }),
              e.jsx("div", {
                className: "pl-steps",
                "aria-hidden": "true",
                children: Ga.map((v) =>
                  e.jsx(
                    "span",
                    { className: s.onboarding[v.key] ? "on" : "" },
                    v.key,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "pl-grid pl-grid-ob",
        children: [
          e.jsx(ft, {
            id: "pl-ob-h",
            title: i("pl.ob.checklist"),
            meta: i("pl.ob.checklistMeta"),
            flush: !0,
            children: e.jsx("ol", {
              className: "pl-checklist",
              children: Ga.map((v, g) => {
                const N = !!s.onboarding[v.key];
                return e.jsxs(
                  "li",
                  {
                    className: N ? "done" : "",
                    children: [
                      e.jsx(pp, {
                        on: N,
                        size: "lg",
                        label: i(`pl.ob.${v.key}`),
                        onChange: () => C(v.key),
                      }),
                      e.jsxs("div", {
                        className: "pl-ck-body",
                        children: [
                          e.jsxs("div", {
                            className: "pl-ck-title",
                            children: [
                              e.jsx("span", {
                                className: "pl-ck-n tnum",
                                children: a.num(g + 1),
                              }),
                              e.jsx("strong", {
                                children: i(`pl.ob.${v.key}`),
                              }),
                              v.phase && e.jsx(Ge, { phase: v.phase }),
                              v.fee &&
                                e.jsx(ge, {
                                  tone: "forest",
                                  children: i("pl.ob.inFee"),
                                }),
                              v.decision &&
                                e.jsx(ge, {
                                  tone: "warn",
                                  icon: "flag",
                                  children: i("pl.ob.openDecision"),
                                }),
                            ],
                          }),
                          e.jsx("p", { children: i(`pl.ob.${v.key}.text`) }),
                          v.key === "pilotTargets" &&
                            e.jsxs("ul", {
                              className: "pl-targets",
                              children: [
                                y.metrics.map((k) =>
                                  e.jsxs(
                                    "li",
                                    {
                                      children: [
                                        e.jsx("span", {
                                          children: i(`pl.metric.${k.id}`),
                                        }),
                                        e.jsx("b", {
                                          className: "tnum",
                                          children: fp(k, a, i),
                                        }),
                                      ],
                                    },
                                    k.id,
                                  ),
                                ),
                                ["staff", "retention", "pay"].map((k) =>
                                  e.jsxs(
                                    "li",
                                    {
                                      children: [
                                        e.jsx("span", {
                                          children: i(`pl.qual.${k}`),
                                        }),
                                        e.jsx("b", {
                                          children: i("pl.ob.atGate"),
                                        }),
                                      ],
                                    },
                                    k,
                                  ),
                                ),
                              ],
                            }),
                          e.jsxs("div", {
                            className: "pl-ck-foot",
                            children: [
                              e.jsxs("span", {
                                className: "pl-owner",
                                children: [
                                  e.jsx(M, {
                                    name:
                                      v.owner === "gym"
                                        ? "building"
                                        : v.owner === "both"
                                          ? "users"
                                          : "shield",
                                    size: 14,
                                  }),
                                  i(`pl.owner.${v.owner}`),
                                ],
                              }),
                              j[v.key] &&
                                e.jsx("span", {
                                  className: "pl-ck-meta tnum",
                                  children: j[v.key],
                                }),
                              e.jsx("span", { className: "grow" }),
                              e.jsxs("button", {
                                type: "button",
                                className: "pl-link pl-ck-go",
                                onClick: () => m(...v.go),
                                children: [
                                  i(`pl.ob.${v.key}.go`),
                                  e.jsx(M, { name: "arrow", size: 14 }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  v.key,
                );
              }),
            }),
          }),
          e.jsxs("div", {
            className: "pl-stack",
            children: [
              e.jsxs(ft, {
                id: "pl-fee-h",
                title: i("pl.fee.title"),
                meta: i("pl.fee.meta"),
                children: [
                  e.jsx("ul", {
                    className: "pl-fee",
                    children: U1.map((v) => {
                      const g = !!s.onboarding[v.key];
                      return e.jsxs(
                        "li",
                        {
                          className: g ? "on" : "",
                          children: [
                            e.jsx("span", {
                              className: "pl-fee-icon",
                              children: e.jsx(M, { name: v.icon, size: 17 }),
                            }),
                            e.jsxs("span", {
                              className: "grow",
                              children: [
                                e.jsx("strong", {
                                  children: i(`pl.fee.${v.key}`),
                                }),
                                e.jsx("small", {
                                  children: i(`pl.fee.${v.key}.text`),
                                }),
                              ],
                            }),
                            e.jsxs("span", {
                              className: `pl-flag ${g ? "ok" : "todo"}`,
                              children: [
                                e.jsx(M, {
                                  name: g ? "ok" : "clock",
                                  size: 15,
                                }),
                                i(g ? "pl.fee.delivered" : "pl.fee.todo"),
                              ],
                            }),
                          ],
                        },
                        v.key,
                      );
                    }),
                  }),
                  e.jsxs("div", {
                    className: "pl-price-tbd",
                    children: [
                      e.jsx("span", { children: i("pl.fee.price") }),
                      e.jsx("b", { children: i("pl.tbd") }),
                    ],
                  }),
                ],
              }),
              e.jsx(ft, {
                id: "pl-golive-h",
                title: i("pl.golive.title"),
                children: e.jsx("ul", {
                  className: "pl-golive",
                  children: ["cash", "offline", "estimate", "weekly"].map((v) =>
                    e.jsxs(
                      "li",
                      {
                        children: [
                          e.jsx(M, { name: "check", size: 15 }),
                          i(`pl.golive.${v}`),
                        ],
                      },
                      v,
                    ),
                  ),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const G1 = [
    { id: "members", phase: "pilot", tiers: ["core", "pro", "chain"] },
    { id: "payments", phase: "pilot", tiers: ["core", "pro", "chain"] },
    { id: "entry", phase: "pilot", tiers: ["core", "pro", "chain"] },
    { id: "bookings", phase: "pilot", tiers: ["core", "pro", "chain"] },
    { id: "occupancy", phase: "pilot", tiers: ["core", "pro", "chain"] },
    { id: "reception", phase: "pilot", tiers: ["core", "pro", "chain"] },
    { id: "memberApp", phase: "pilot", tiers: ["core", "pro", "chain"] },
    { id: "trainer", phase: "2", tiers: ["pro", "chain"] },
    { id: "map", phase: "2", tiers: ["pro", "chain"] },
    { id: "points", phase: "3", tiers: ["pro", "chain"] },
    { id: "multi", phase: "4", tiers: ["chain"] },
    { id: "analytics", phase: "4", tiers: ["chain"] },
    { id: "branded", phase: "4", tiers: ["chain"], optional: !0 },
  ],
  Q1 = ["global", "local", "today", "forma"];
function Y1() {
  const { t: s, f: i } = me(),
    [a, l] = V.useState(200),
    [c, m] = V.useState(10),
    h = Math.round((a * c) / 100),
    p = a - h;
  return e.jsxs("div", {
    className: "pl-page",
    children: [
      e.jsx(rr, {
        title: s("pl.pr.title"),
        sub: s("pl.pr.sub"),
        children: e.jsx(ge, {
          tone: "warn",
          icon: "info",
          children: s("pl.pr.notSet"),
        }),
      }),
      e.jsx(ft, {
        id: "pl-tiers-h",
        title: s("pl.tiers.title"),
        meta: s("pl.tiers.meta"),
        flush: !0,
        children: e.jsx("div", {
          className: "pl-table-wrap",
          children: e.jsxs("table", {
            className: "pl-table pl-tiers",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", {
                      scope: "col",
                      className: "pl-tiers-feature",
                      children: s("pl.tiers.feature"),
                    }),
                    Ro.map((f) =>
                      e.jsxs(
                        "th",
                        {
                          scope: "col",
                          className: `pl-tier-col t-${f}`,
                          children: [
                            e.jsx("span", {
                              className: "pl-tier-name",
                              children: s(`pl.tier.${f}`),
                            }),
                            e.jsx("span", {
                              className: "pl-tier-for",
                              children: s(`pl.tier.${f}.for`),
                            }),
                          ],
                        },
                        f,
                      ),
                    ),
                  ],
                }),
              }),
              e.jsxs("tbody", {
                children: [
                  G1.map((f) =>
                    e.jsxs(
                      "tr",
                      {
                        children: [
                          e.jsx("th", {
                            scope: "row",
                            children: e.jsxs("span", {
                              className: "pl-feat",
                              children: [
                                s(`pl.feat.${f.id}`),
                                e.jsx(Ge, { phase: f.phase }),
                              ],
                            }),
                          }),
                          Ro.map((y) =>
                            e.jsx(
                              "td",
                              {
                                className: `pl-tier-cell t-${y}`,
                                children:
                                  f.optional && f.tiers.includes(y)
                                    ? e.jsx("span", {
                                        className: "pl-optional",
                                        children: s("pl.tiers.optional"),
                                      })
                                    : e.jsx(D1, {
                                        on: f.tiers.includes(y),
                                        label: s("pl.tiers.included"),
                                      }),
                              },
                              y,
                            ),
                          ),
                        ],
                      },
                      f.id,
                    ),
                  ),
                  e.jsxs("tr", {
                    className: "pl-price-row",
                    children: [
                      e.jsx("th", {
                        scope: "row",
                        children: s("pl.tiers.price"),
                      }),
                      Ro.map((f) =>
                        e.jsx(
                          "td",
                          {
                            className: `pl-tier-cell t-${f}`,
                            children: e.jsx("span", {
                              className: "pl-tbd",
                              children: s("pl.tbd"),
                            }),
                          },
                          f,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      e.jsxs("div", {
        className: "pl-grid pl-grid-3",
        children: [
          e.jsxs(ft, {
            id: "pl-basis-h",
            title: s("pl.basis.title"),
            meta: s("pl.basis.meta"),
            children: [
              e.jsx("ol", {
                className: "pl-formula",
                "aria-label": s("pl.basis.formula"),
                children: ["tier", "branches", "band"].map((f, y) =>
                  e.jsxs(
                    "li",
                    {
                      children: [
                        e.jsx("span", {
                          className: "pl-formula-op",
                          "aria-hidden": "true",
                          children: y === 0 ? "" : "×",
                        }),
                        e.jsx("span", {
                          className: "pl-formula-term",
                          children: s(`pl.basis.${f}`),
                        }),
                      ],
                    },
                    f,
                  ),
                ),
              }),
              e.jsx("span", {
                className: "pl-sub",
                children: s("pl.basis.test"),
              }),
              e.jsx("ul", {
                className: "pl-bullets",
                children: ["1", "2", "3", "4"].map((f) =>
                  e.jsx("li", { children: s(`pl.basis.q${f}`) }, f),
                ),
              }),
            ],
          }),
          e.jsxs(ft, {
            id: "pl-setup-h",
            title: s("pl.fee.title"),
            meta: s("pl.pr.feeMeta"),
            children: [
              e.jsx("ul", {
                className: "pl-bullets pl-bullets-icon",
                children: [
                  ["map", "floor"],
                  ["library", "library"],
                  ["file", "members"],
                  ["users", "staff"],
                ].map(([f, y]) =>
                  e.jsxs(
                    "li",
                    {
                      children: [
                        e.jsx(M, { name: f, size: 16 }),
                        e.jsxs("span", {
                          children: [
                            e.jsx("strong", { children: s(`pl.fee.${y}`) }),
                            " ",
                            e.jsx("small", { children: s(`pl.fee.${y}.text`) }),
                          ],
                        }),
                      ],
                    },
                    y,
                  ),
                ),
              }),
              e.jsxs("div", {
                className: "pl-price-tbd",
                children: [
                  e.jsx("span", { children: s("pl.fee.price") }),
                  e.jsx("b", { children: s("pl.tbd") }),
                ],
              }),
            ],
          }),
          e.jsx(ft, {
            id: "pl-modules-h",
            title: s("pl.mod.title"),
            meta: s("pl.mod.meta"),
            children: e.jsx("ul", {
              className: "pl-modules",
              children: [
                ["trainer", "2", !0],
                ["branded", "4", !0],
                ["hardware", "pilot", !0],
                ["food", "4", !1],
              ].map(([f, y, j]) =>
                e.jsxs(
                  "li",
                  {
                    children: [
                      e.jsxs("div", {
                        className: "pl-mod-top",
                        children: [
                          e.jsx("strong", { children: s(`pl.mod.${f}`) }),
                          e.jsx(Ge, { phase: y }),
                        ],
                      }),
                      e.jsx("small", { children: s(`pl.mod.${f}.text`) }),
                      j &&
                        e.jsxs("span", {
                          className: "pl-open",
                          children: [
                            e.jsx(M, { name: "flag", size: 13 }),
                            s("pl.ob.openDecision"),
                          ],
                        }),
                    ],
                  },
                  f,
                ),
              ),
            }),
          }),
        ],
      }),
      e.jsx(ft, {
        id: "pl-food-h",
        title: s("pl.food.title"),
        meta: s("pl.food.meta"),
        children: e.jsxs("div", {
          className: "pl-food",
          children: [
            e.jsxs("ol", {
              className: "pl-food-steps",
              children: [
                e.jsxs("li", {
                  className: "now",
                  children: [
                    e.jsx("span", {
                      className: "pl-food-n tnum",
                      children: i.num(1),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("div", {
                          className: "pl-mod-top",
                          children: [
                            e.jsx("strong", { children: s("pl.food.promo") }),
                            e.jsx(ge, {
                              tone: "forest",
                              children: s("pl.food.first"),
                            }),
                          ],
                        }),
                        e.jsx("p", { children: s("pl.food.promo.text") }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("li", {
                  children: [
                    e.jsx("span", {
                      className: "pl-food-n tnum",
                      children: i.num(2),
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("div", {
                          className: "pl-mod-top",
                          children: [
                            e.jsx("strong", { children: s("pl.food.order") }),
                            e.jsx(ge, { children: s("pl.food.ifBuilt") }),
                          ],
                        }),
                        e.jsx("p", { children: s("pl.food.order.text") }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "pl-example",
              children: [
                e.jsxs("div", {
                  className: "pl-example-head",
                  children: [
                    e.jsx("strong", { children: s("pl.food.example") }),
                    e.jsx(ge, { icon: "info", children: s("pl.illustrative") }),
                  ],
                }),
                e.jsxs("div", {
                  className: "pl-example-controls",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "pl-sub",
                          children: s("pl.food.orderValue"),
                        }),
                        e.jsx(nt, {
                          size: "sm",
                          label: s("pl.food.orderValue"),
                          value: a,
                          onChange: l,
                          options: [150, 200, 300, 500].map((f) => ({
                            value: f,
                            label: i.num(f),
                          })),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("span", {
                          className: "pl-sub",
                          children: s("pl.food.rate"),
                        }),
                        e.jsx(nt, {
                          size: "sm",
                          label: s("pl.food.rate"),
                          value: c,
                          onChange: m,
                          options: [5, 10, 15].map((f) => ({
                            value: f,
                            label: i.pct(f),
                          })),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "pl-split",
                  role: "img",
                  "aria-label": s("pl.food.aria", {
                    order: i.money(a),
                    c: i.money(h),
                  }),
                  children: [
                    e.jsx("span", {
                      className: "pl-split-partner",
                      style: { flexGrow: p },
                    }),
                    e.jsx("span", {
                      className: "pl-split-comm",
                      style: { flexGrow: h },
                    }),
                  ],
                }),
                e.jsxs("dl", {
                  className: "pl-split-legend",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsxs("dt", {
                          children: [
                            e.jsx("i", { className: "sw partner" }),
                            s("pl.food.partnerKeeps"),
                          ],
                        }),
                        e.jsx("dd", {
                          className: "tnum",
                          children: i.money(p),
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsxs("dt", {
                          children: [
                            e.jsx("i", { className: "sw comm" }),
                            s("pl.food.commission", { r: i.pct(c) }),
                          ],
                        }),
                        e.jsx("dd", {
                          className: "tnum",
                          children: i.money(h),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "pl-example-sum",
                  children: s("pl.food.sum", {
                    order: i.money(a),
                    r: i.pct(c),
                    c: i.money(h),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      e.jsx(ft, {
        id: "pl-comp-h",
        title: s("pl.comp.title"),
        meta: s("pl.comp.meta"),
        flush: !0,
        children: e.jsx("div", {
          className: "pl-table-wrap",
          children: e.jsxs("table", {
            className: "pl-table pl-comp",
            children: [
              e.jsx("thead", {
                children: e.jsxs("tr", {
                  children: [
                    e.jsx("th", {
                      scope: "col",
                      children: s("pl.comp.col.who"),
                    }),
                    e.jsx("th", {
                      scope: "col",
                      children: s("pl.comp.col.examples"),
                    }),
                    e.jsx("th", {
                      scope: "col",
                      children: s("pl.comp.col.good"),
                    }),
                    e.jsx("th", {
                      scope: "col",
                      children: s("pl.comp.col.gap"),
                    }),
                  ],
                }),
              }),
              e.jsx("tbody", {
                children: Q1.map((f) =>
                  e.jsxs(
                    "tr",
                    {
                      className: f === "forma" ? "is-us" : "",
                      children: [
                        e.jsx("th", {
                          scope: "row",
                          children: s(`pl.comp.${f}`),
                        }),
                        e.jsx("td", { children: s(`pl.comp.${f}.ex`) }),
                        e.jsx("td", { children: s(`pl.comp.${f}.good`) }),
                        e.jsx("td", { children: s(`pl.comp.${f}.gap`) }),
                      ],
                    },
                    f,
                  ),
                ),
              }),
            ],
          }),
        }),
      }),
      e.jsx(ft, {
        id: "pl-diff-h",
        title: s("pl.diff.title"),
        children: e.jsx("ul", {
          className: "pl-diff",
          children: [
            "arabic",
            "cash",
            "freeze",
            "ladies",
            "local",
            "offline",
            "map",
            "verified",
          ].map((f) =>
            e.jsxs(
              "li",
              {
                children: [
                  e.jsx("strong", { children: s(`pl.diff.${f}`) }),
                  e.jsx("small", { children: s(`pl.diff.${f}.text`) }),
                ],
              },
              f,
            ),
          ),
        }),
      }),
    ],
  });
}
const yp = ["cardio", "strength", "free"];
function K1({ proposals: s, setProposals: i }) {
  const { s: a, t: l, f: c, L: m, notify: h, go: p } = me(),
    [f, y] = V.useState(""),
    [j, C] = V.useState("all"),
    [v, g] = V.useState(null),
    [N, k] = V.useState(null),
    b = V.useMemo(() => {
      const L = f.trim().toLowerCase();
      return fn.filter(
        (G) =>
          (j === "all" || G.cat === j) &&
          (!L ||
            [G.name.en, G.name.ar, G.brand, l(`eqcat.${G.cat}`)].some((H) =>
              H.toLowerCase().includes(L),
            )),
      );
    }, [f, j, l]),
    w = new Set(fn.map((L) => L.brand).filter((L) => L !== "—")).size,
    S = new Set(a.equipment.map((L) => L.libId)).size,
    ae = a.lang === "ar" ? "en" : "ar",
    _ = (L) => {
      (i((G) => [{ id: `pr-${Date.now()}`, ...L, at: a.clock }, ...G]),
        k(null),
        g(null),
        h(l("pl.lib.queued")));
    };
  return e.jsxs("div", {
    className: "pl-page",
    children: [
      e.jsx(rr, {
        title: l("pl.lib.title"),
        sub: l("pl.lib.sub"),
        phase: e.jsx(Ge, { phase: "2" }),
        children: e.jsx(Z, {
          icon: "plus",
          size: "sm",
          onClick: () => k({ mode: "new" }),
          children: l("pl.lib.propose"),
        }),
      }),
      e.jsx("section", {
        className: "pl-kpis pl-kpis-tight",
        "aria-label": l("pl.lib.title"),
        children: [
          ["entries", fn.length],
          ["brands", w],
          ["mapped", S],
          ["gyms", a.equipment.length ? 1 : 0],
        ].map(([L, G]) =>
          e.jsxs(
            "div",
            {
              className: "pl-kpi",
              children: [
                e.jsx("span", {
                  className: "pl-kpi-label",
                  children: l(`pl.lib.kpi.${L}`),
                }),
                e.jsx("b", { className: "pl-kpi-value", children: c.num(G) }),
                e.jsx("small", {
                  children: l(`pl.lib.kpi.${L}.note`, {
                    n: a.equipment.length,
                  }),
                }),
              ],
            },
            L,
          ),
        ),
      }),
      e.jsx("ol", {
        className: "pl-flow",
        "aria-label": l("pl.lib.flow"),
        children: ["propose", "review", "publish"].map((L, G) =>
          e.jsxs(
            "li",
            {
              children: [
                e.jsx("span", {
                  className: "pl-flow-n tnum",
                  children: c.num(G + 1),
                }),
                e.jsxs("span", {
                  children: [
                    e.jsx("strong", { children: l(`pl.lib.flow.${L}`) }),
                    e.jsx("small", { children: l(`pl.lib.flow.${L}.text`) }),
                  ],
                }),
              ],
            },
            L,
          ),
        ),
      }),
      s.length > 0 &&
        e.jsx(ft, {
          id: "pl-queue-h",
          title: l("pl.lib.queue"),
          meta: l("pl.lib.queueMeta", { n: s.length }),
          children: e.jsx("ul", {
            className: "pl-queue",
            children: s.map((L) =>
              e.jsxs(
                "li",
                {
                  children: [
                    e.jsx("span", {
                      className: "pl-eq-icon",
                      children: e.jsx(M, {
                        name: L.mode === "edit" ? "edit" : "plus",
                        size: 17,
                      }),
                    }),
                    e.jsxs("span", {
                      className: "grow",
                      children: [
                        e.jsx("strong", {
                          children:
                            L.mode === "edit"
                              ? l("pl.lib.editOf", { name: m(L.name) })
                              : m(L.name) || L.name.en,
                        }),
                        e.jsx("small", {
                          children:
                            L.mode === "edit"
                              ? L.note
                              : `${L.name.en} · ${L.name.ar} · ${l(`eqcat.${L.cat}`)}${L.brand ? ` · ${L.brand}` : ""}`,
                        }),
                      ],
                    }),
                    e.jsx("span", {
                      className: "pl-ck-meta tnum",
                      children: c.time(L.at),
                    }),
                    e.jsx(ge, {
                      tone: "warn",
                      icon: "hourglass",
                      children: l("pl.lib.inReview"),
                    }),
                  ],
                },
                L.id,
              ),
            ),
          }),
        }),
      e.jsxs(ft, {
        id: "pl-lib-h",
        flush: !0,
        children: [
          e.jsxs("div", {
            className: "pl-toolbar",
            children: [
              e.jsxs("label", {
                className: "searchbox pl-search",
                children: [
                  e.jsx(M, { name: "search", size: 18 }),
                  e.jsx("input", {
                    value: f,
                    onChange: (L) => y(L.target.value),
                    placeholder: l("pl.lib.search"),
                    "aria-label": l("pl.lib.search"),
                  }),
                  f &&
                    e.jsx("button", {
                      type: "button",
                      className: "pl-clear",
                      "aria-label": l("pl.lib.clear"),
                      onClick: () => y(""),
                      children: e.jsx(M, { name: "x", size: 16 }),
                    }),
                ],
              }),
              e.jsx(nt, {
                label: l("pl.lib.category"),
                value: j,
                onChange: C,
                options: [
                  { value: "all", label: l("all"), count: fn.length },
                  ...yp.map((L) => ({
                    value: L,
                    label: l(`eqcat.${L}`),
                    count: fn.filter((G) => G.cat === L).length,
                  })),
                ],
              }),
            ],
          }),
          b.length
            ? e.jsx("div", {
                className: "pl-table-wrap",
                children: e.jsxs("table", {
                  className: "pl-table pl-lib",
                  children: [
                    e.jsx("thead", {
                      children: e.jsxs("tr", {
                        children: [
                          e.jsx("th", {
                            scope: "col",
                            children: l("pl.lib.col.name"),
                          }),
                          e.jsx("th", {
                            scope: "col",
                            children: l("pl.lib.col.cat"),
                          }),
                          e.jsx("th", {
                            scope: "col",
                            className: "pl-hide-sm",
                            children: l("pl.lib.col.muscles"),
                          }),
                          e.jsx("th", {
                            scope: "col",
                            className: "pl-hide-sm",
                            children: l("pl.lib.col.brand"),
                          }),
                          e.jsx("th", {
                            scope: "col",
                            className: "pl-hide-md",
                            children: l("pl.lib.col.how"),
                          }),
                          e.jsx("th", {
                            scope: "col",
                            children: l("pl.lib.col.used"),
                          }),
                        ],
                      }),
                    }),
                    e.jsx("tbody", {
                      children: b.map((L) => {
                        const G = up(a, L.id);
                        return e.jsxs(
                          "tr",
                          {
                            className: "pl-row-click",
                            onClick: () => g(L),
                            children: [
                              e.jsx("td", {
                                children: e.jsxs("button", {
                                  type: "button",
                                  className: "pl-eq",
                                  onClick: (H) => {
                                    (H.stopPropagation(), g(L));
                                  },
                                  children: [
                                    e.jsx("span", {
                                      className: "pl-eq-icon",
                                      children: e.jsx(M, {
                                        name: L.icon,
                                        size: 17,
                                      }),
                                    }),
                                    e.jsxs("span", {
                                      children: [
                                        e.jsx("strong", {
                                          children: m(L.name),
                                        }),
                                        e.jsx("small", {
                                          lang: ae,
                                          children: L.name[ae],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              e.jsx("td", { children: l(`eqcat.${L.cat}`) }),
                              e.jsx("td", {
                                className: "pl-hide-sm",
                                children: e.jsx("span", {
                                  className: "pl-muscles",
                                  children: L.muscles.map((H) =>
                                    e.jsx(
                                      "span",
                                      { children: l(`muscle.${H}`) },
                                      H,
                                    ),
                                  ),
                                }),
                              }),
                              e.jsx("td", {
                                className: "pl-hide-sm",
                                children:
                                  L.brand === "—"
                                    ? e.jsx("span", {
                                        className: "muted",
                                        children: l("pl.lib.generic"),
                                      })
                                    : L.brand,
                              }),
                              e.jsx("td", {
                                className: "pl-hide-md",
                                children: e.jsxs("span", {
                                  className: "pl-langs",
                                  children: [
                                    e.jsx("span", { children: "EN" }),
                                    e.jsx("span", { children: "عربي" }),
                                  ],
                                }),
                              }),
                              e.jsx("td", {
                                children: G.units.length
                                  ? e.jsxs("span", {
                                      className: "pl-used tnum",
                                      children: [
                                        e.jsx("b", {
                                          children: l("pl.lib.gymsN", {
                                            n: G.gyms,
                                          }),
                                        }),
                                        e.jsx("small", {
                                          children: l(
                                            G.units.length === 1
                                              ? "pl.lib.units1"
                                              : "pl.lib.unitsN",
                                            { n: G.units.length },
                                          ),
                                        }),
                                      ],
                                    })
                                  : e.jsx("span", {
                                      className: "muted",
                                      children: l("pl.lib.unused"),
                                    }),
                              }),
                            ],
                          },
                          L.id,
                        );
                      }),
                    }),
                  ],
                }),
              })
            : e.jsx(Ze, {
                icon: "search",
                title: l("pl.lib.emptyTitle"),
                action: e.jsx(Z, {
                  variant: "secondary",
                  size: "sm",
                  icon: "plus",
                  onClick: () => k({ mode: "new", name: f }),
                  children: l("pl.lib.propose"),
                }),
                children: l("pl.lib.emptyText"),
              }),
        ],
      }),
      v &&
        !N &&
        e.jsx(et, {
          wide: !0,
          title: m(v.name),
          onClose: () => g(null),
          footer: e.jsxs(e.Fragment, {
            children: [
              e.jsx(Z, {
                variant: "ghost",
                onClick: () => p("admin", "equipment"),
                children: l("pl.lib.seeFloor"),
              }),
              e.jsx("span", { className: "grow" }),
              e.jsx(Z, {
                variant: "secondary",
                icon: "edit",
                onClick: () => k({ mode: "edit", lib: v }),
                children: l("pl.lib.proposeEdit"),
              }),
            ],
          }),
          children: e.jsx(Z1, { lib: v }),
        }),
      N && e.jsx(X1, { propose: N, onClose: () => k(null), onSubmit: _ }),
    ],
  });
}
function Z1({ lib: s }) {
  const { s: i, t: a, L: l } = me(),
    c = up(i, s.id);
  return e.jsxs("div", {
    className: "pl-detail",
    children: [
      e.jsxs("dl", {
        className: "pl-facts",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: a("pl.lib.col.cat") }),
              e.jsx("dd", { children: a(`eqcat.${s.cat}`) }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: a("pl.lib.col.brand") }),
              e.jsx("dd", {
                children: s.brand === "—" ? a("pl.lib.generic") : s.brand,
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: a("pl.lib.col.muscles") }),
              e.jsx("dd", {
                children: s.muscles.map((m) => a(`muscle.${m}`)).join(" · "),
              }),
            ],
          }),
          e.jsxs("div", {
            children: [
              e.jsx("dt", { children: a("pl.lib.status") }),
              e.jsx("dd", {
                children: e.jsxs("span", {
                  className: "pl-flag ok",
                  children: [
                    e.jsx(M, { name: "shield", size: 15 }),
                    a("pl.lib.reviewed"),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "pl-bilingual",
        children: [
          e.jsxs("section", {
            lang: "en",
            dir: "ltr",
            children: [
              e.jsx("span", { className: "pl-sub", children: "English" }),
              e.jsx("strong", { children: s.name.en }),
              e.jsx("p", { children: s.how.en }),
            ],
          }),
          e.jsxs("section", {
            lang: "ar",
            dir: "rtl",
            children: [
              e.jsx("span", { className: "pl-sub", children: "العربية" }),
              e.jsx("strong", { children: s.name.ar }),
              e.jsx("p", { children: s.how.ar }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        children: [
          e.jsx("span", { className: "pl-sub", children: a("pl.lib.usedAt") }),
          c.units.length
            ? e.jsx("ul", {
                className: "pl-units",
                children: c.units.map((m) =>
                  e.jsxs(
                    "li",
                    {
                      children: [
                        e.jsx("span", {
                          className: "pl-unit-label tnum",
                          dir: "ltr",
                          children: m.label,
                        }),
                        e.jsx("span", {
                          className: "grow",
                          children: a("pl.lib.unitAt", {
                            gym: l(i.gym.name),
                            zone: a(`zone.${m.zone}`),
                          }),
                        }),
                        e.jsx(_e, { value: m.status }),
                      ],
                    },
                    m.id,
                  ),
                ),
              })
            : e.jsx("p", {
                className: "muted pl-small",
                children: a("pl.lib.notUsedYet"),
              }),
        ],
      }),
    ],
  });
}
function X1({ propose: s, onClose: i, onSubmit: a }) {
  const { t: l, L: c } = me(),
    m = s.mode === "edit",
    [h, p] = V.useState(m ? s.lib.name.en : s.name || ""),
    [f, y] = V.useState(m ? s.lib.name.ar : ""),
    [j, C] = V.useState(m ? s.lib.cat : "strength"),
    [v, g] = V.useState(m ? (s.lib.brand === "—" ? "" : s.lib.brand) : ""),
    [N, k] = V.useState(""),
    b = m ? N.trim().length > 0 : h.trim() && f.trim();
  return e.jsxs(et, {
    title: m
      ? l("pl.lib.editTitle", { name: c(s.lib.name) })
      : l("pl.lib.newTitle"),
    onClose: i,
    footer: e.jsxs(e.Fragment, {
      children: [
        e.jsx(Z, { variant: "ghost", onClick: i, children: l("cancel") }),
        e.jsx(Z, {
          icon: "send",
          disabled: !b,
          onClick: () =>
            a(
              m
                ? { mode: "edit", name: s.lib.name, note: N.trim() }
                : {
                    mode: "new",
                    name: { en: h.trim(), ar: f.trim() },
                    cat: j,
                    brand: v.trim(),
                  },
            ),
          children: l("pl.lib.send"),
        }),
      ],
    }),
    children: [
      e.jsx("p", {
        className: "pl-sheet-lead",
        children: l(m ? "pl.lib.editLead" : "pl.lib.newLead"),
      }),
      m
        ? e.jsx(It, {
            label: l("pl.lib.change"),
            hint: l("pl.lib.changeHint"),
            children: e.jsx("textarea", {
              value: N,
              onChange: (w) => k(w.target.value),
            }),
          })
        : e.jsxs(e.Fragment, {
            children: [
              e.jsxs("div", {
                className: "pl-form-2",
                children: [
                  e.jsx(It, {
                    label: l("pl.lib.nameEn"),
                    children: e.jsx("input", {
                      lang: "en",
                      dir: "ltr",
                      value: h,
                      onChange: (w) => p(w.target.value),
                    }),
                  }),
                  e.jsx(It, {
                    label: l("pl.lib.nameAr"),
                    children: e.jsx("input", {
                      lang: "ar",
                      dir: "rtl",
                      value: f,
                      onChange: (w) => y(w.target.value),
                    }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "pl-form-2",
                children: [
                  e.jsx(It, {
                    label: l("pl.lib.col.cat"),
                    children: e.jsx("select", {
                      value: j,
                      onChange: (w) => C(w.target.value),
                      children: yp.map((w) =>
                        e.jsx(
                          "option",
                          { value: w, children: l(`eqcat.${w}`) },
                          w,
                        ),
                      ),
                    }),
                  }),
                  e.jsx(It, {
                    label: l("pl.lib.col.brand"),
                    hint: l("pl.lib.brandHint"),
                    children: e.jsx("input", {
                      value: v,
                      onChange: (w) => g(w.target.value),
                    }),
                  }),
                ],
              }),
              e.jsxs("p", {
                className: "pl-note",
                children: [
                  e.jsx(M, { name: "info", size: 15 }),
                  l("pl.lib.newNote"),
                ],
              }),
            ],
          }),
    ],
  });
}
const xl = 12;
function J1({ decisions: s, setDecisions: i }) {
  const { s: a, t: l, f: c, go: m } = me(),
    h = ic(a),
    p = Ys.reduce((g, N) => g + N.min, 0),
    f = Ys.reduce((g, N) => g + N.max, 0),
    y = Su(a),
    j = Math.ceil(dt.length / 2),
    C = yl.filter((g) => s[g]).length,
    v = {
      pilot: {
        status: h.allMet ? "ok" : "bad",
        live: h.allMet
          ? l("pl.rm.gate1.live", { n: h.streak, total: jl })
          : l("pl.gate.missed", { n: h.total - h.met }),
        action: () => m("platform", "overview"),
      },
      2: {
        status: "later",
        live: l("pl.rm.gate2.live", { n: j, total: dt.length }),
      },
      3: {
        status: "later",
        live: l("pl.rm.gate3.live", {
          pts: c.num(y.outstanding),
          egp: c.money(y.egp),
        }),
      },
    };
  return e.jsxs("div", {
    className: "pl-page",
    children: [
      e.jsx(rr, { title: l("pl.rm.title"), sub: l("pl.rm.sub") }),
      e.jsxs("section", {
        className: "pl-rail-wrap",
        "aria-label": l("pl.rm.railLabel"),
        children: [
          e.jsx("div", {
            className: "pl-rail",
            children: Ys.map((g, N) =>
              e.jsxs(
                Tn.Fragment,
                {
                  children: [
                    e.jsxs("div", {
                      className: `pl-rail-seg ${g.id === "pilot" ? "committed" : "gated"}`,
                      style: { flexGrow: g.max },
                      children: [
                        e.jsx("span", {
                          className: "pl-rail-name",
                          children: l(`pl.rm.p${g.n}`),
                        }),
                        e.jsx("span", {
                          className: "pl-rail-weeks tnum",
                          children: l("pl.weeksRange", { a: g.min, b: g.max }),
                        }),
                      ],
                    }),
                    N < Ys.length - 1 &&
                      e.jsx("span", {
                        className: `pl-rail-gate ${N === 0 ? (h.allMet ? "ok" : "bad") : ""}`,
                        title: l(`pl.rm.gate${N + 1}`),
                        children: e.jsx("span", { className: "pl-diamond" }),
                      }),
                  ],
                },
                g.id,
              ),
            ),
          }),
          e.jsxs("div", {
            className: "pl-rail-foot",
            children: [
              e.jsxs("span", {
                className: "pl-legend-item",
                children: [
                  e.jsx("i", { className: "sw committed" }),
                  l("pl.rm.committed"),
                ],
              }),
              e.jsxs("span", {
                className: "pl-legend-item",
                children: [
                  e.jsx("i", { className: "sw gated" }),
                  l("pl.rm.gated"),
                ],
              }),
              e.jsxs("span", {
                className: "pl-legend-item",
                children: [
                  e.jsx("span", { className: "pl-diamond sm" }),
                  l("pl.rm.gateLegend"),
                ],
              }),
              e.jsx("span", { className: "grow" }),
              e.jsx("span", {
                className: "pl-rail-total tnum",
                children: l("pl.rm.total", { a: p, b: f }),
              }),
            ],
          }),
        ],
      }),
      e.jsx("ol", {
        className: "pl-timeline",
        children: Ys.map((g, N) => {
          const k = g.id === "pilot",
            b = v[g.id];
          return e.jsxs(
            Tn.Fragment,
            {
              children: [
                e.jsxs("li", {
                  className: `pl-tl-phase ${k ? "committed" : "gated"}`,
                  children: [
                    e.jsx("span", {
                      className: "pl-tl-node",
                      "aria-hidden": "true",
                      children: c.num(g.n),
                    }),
                    e.jsxs("article", {
                      className: "pl-tl-card",
                      children: [
                        e.jsxs("header", {
                          className: "pl-tl-head",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsxs("h2", {
                                  children: [
                                    l(`pl.rm.p${g.n}`),
                                    " ",
                                    e.jsx("span", {
                                      className: "pl-tl-theme",
                                      children: l(`pl.rm.p${g.n}.theme`),
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  children: l(`pl.rm.p${g.n}.goal`),
                                }),
                              ],
                            }),
                            e.jsxs("span", {
                              className: `pl-commit ${k ? "on" : ""}`,
                              children: [
                                e.jsx(M, {
                                  name: k ? "check" : "lock",
                                  size: 14,
                                }),
                                l(k ? "pl.rm.committed" : "pl.rm.gated"),
                              ],
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "pl-dur",
                          children: [
                            e.jsxs("div", {
                              className: "pl-dur-track",
                              "aria-hidden": "true",
                              children: [
                                e.jsx("span", {
                                  className: "pl-dur-min",
                                  style: {
                                    inlineSize: `${(g.min / xl) * 100}%`,
                                  },
                                }),
                                e.jsx("span", {
                                  className: "pl-dur-ext",
                                  style: {
                                    insetInlineStart: `${(g.min / xl) * 100}%`,
                                    inlineSize: `${((g.max - g.min) / xl) * 100}%`,
                                  },
                                }),
                                [0, 4, 8, 12].map((w) =>
                                  e.jsx(
                                    "i",
                                    {
                                      style: {
                                        insetInlineStart: `${(w / xl) * 100}%`,
                                      },
                                    },
                                    w,
                                  ),
                                ),
                              ],
                            }),
                            e.jsx("span", {
                              className: "pl-dur-label tnum",
                              children: l("pl.weeksRange", {
                                a: g.min,
                                b: g.max,
                              }),
                            }),
                          ],
                        }),
                        e.jsx("ul", {
                          className: "pl-scope",
                          children: g.scope.map((w) =>
                            e.jsx("li", { children: l(`pl.rm.s.${w}`) }, w),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                N < Ys.length - 1 &&
                  e.jsxs("li", {
                    className: `pl-tl-gate g-${b.status}`,
                    children: [
                      e.jsx("span", {
                        className: "pl-tl-diamond",
                        "aria-hidden": "true",
                        children: e.jsx("span", { className: "pl-diamond" }),
                      }),
                      e.jsxs("div", {
                        className: "pl-tl-gate-body",
                        children: [
                          e.jsxs("div", {
                            className: "pl-tl-gate-top",
                            children: [
                              e.jsx("strong", {
                                children: l("pl.rm.gateN", { n: g.n }),
                              }),
                              e.jsx("span", {
                                className: "pl-tl-gate-rule",
                                children: l(`pl.rm.gate${g.n}`),
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "pl-tl-gate-live",
                            children: [
                              e.jsxs("span", {
                                className: `pl-flag ${b.status === "ok" ? "ok" : b.status === "bad" ? "bad" : "todo"}`,
                                children: [
                                  e.jsx(M, {
                                    name:
                                      b.status === "ok"
                                        ? "ok"
                                        : b.status === "bad"
                                          ? "alert"
                                          : "hourglass",
                                    size: 15,
                                  }),
                                  l(`pl.rm.gateState.${b.status}`),
                                ],
                              }),
                              e.jsx("span", {
                                className: "pl-tl-gate-detail tnum",
                                children: b.live,
                              }),
                              b.action &&
                                e.jsxs("button", {
                                  type: "button",
                                  className: "pl-link",
                                  onClick: b.action,
                                  children: [
                                    l("pl.rm.seeHealth"),
                                    " ",
                                    e.jsx(M, { name: "arrow", size: 14 }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            },
            g.id,
          );
        }),
      }),
      e.jsxs("div", {
        className: "pl-grid pl-grid-rm",
        children: [
          e.jsx(ft, {
            id: "pl-risk-h",
            title: l("pl.risk.title"),
            meta: l("pl.risk.meta"),
            flush: !0,
            children: e.jsx("div", {
              className: "pl-table-wrap",
              children: e.jsxs("table", {
                className: "pl-table pl-risks",
                children: [
                  e.jsx("thead", {
                    children: e.jsxs("tr", {
                      children: [
                        e.jsx("th", {
                          scope: "col",
                          children: l("pl.risk.col.risk"),
                        }),
                        e.jsx("th", {
                          scope: "col",
                          children: l("pl.risk.col.mitigation"),
                        }),
                        e.jsx("th", {
                          scope: "col",
                          className: "pl-hide-sm",
                          children: l("pl.risk.col.phase"),
                        }),
                      ],
                    }),
                  }),
                  e.jsx("tbody", {
                    children: q1.map((g) =>
                      e.jsxs(
                        "tr",
                        {
                          children: [
                            e.jsx("th", {
                              scope: "row",
                              children: e.jsxs("span", {
                                className: "pl-risk",
                                children: [
                                  e.jsx(M, { name: "warn", size: 15 }),
                                  l(`pl.risk.${g}`),
                                ],
                              }),
                            }),
                            e.jsx("td", { children: l(`pl.risk.${g}.fix`) }),
                            e.jsx("td", {
                              className: "pl-hide-sm",
                              children: e.jsx(Ge, { phase: _1[g] }),
                            }),
                          ],
                        },
                        g,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          }),
          e.jsxs(ft, {
            id: "pl-dec-h",
            title: l("pl.dec.title"),
            meta: l("pl.dec.meta", { n: C, total: yl.length }),
            flush: !0,
            children: [
              e.jsx("div", {
                className: "pl-dec-meter",
                "aria-hidden": "true",
                children: yl.map((g) =>
                  e.jsx("span", { className: s[g] ? "on" : "" }, g),
                ),
              }),
              e.jsx("ul", {
                className: "pl-decisions",
                children: yl.map((g) =>
                  e.jsxs(
                    "li",
                    {
                      className: s[g] ? "done" : "",
                      children: [
                        e.jsx(pp, {
                          on: !!s[g],
                          label: l(`pl.dec.${g}`),
                          onChange: () => i((N) => ({ ...N, [g]: !N[g] })),
                        }),
                        e.jsxs("span", {
                          className: "grow",
                          children: [
                            e.jsx("strong", { children: l(`pl.dec.${g}`) }),
                            e.jsx("small", { children: l(`pl.dec.${g}.opts`) }),
                          ],
                        }),
                        s[g]
                          ? e.jsx(ge, {
                              tone: "ok",
                              children: l("pl.dec.decided"),
                            })
                          : e.jsx(ge, { children: l("pl.dec.open") }),
                      ],
                    },
                    g,
                  ),
                ),
              }),
              e.jsx("div", {
                className: "pl-dec-foot",
                children: e.jsx(Z, {
                  variant: "ghost",
                  size: "sm",
                  icon: "reset",
                  disabled: C === 0,
                  onClick: () => i({}),
                  children: l("pl.dec.clear"),
                }),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const xp = [
    { id: "overview", icon: "grid", label: "pl.nav.overview" },
    { id: "onboarding", icon: "list", label: "pl.nav.onboarding" },
    { id: "pricing", icon: "tag", label: "pl.nav.pricing" },
    { id: "library", icon: "library", label: "pl.nav.library" },
    { id: "roadmap", icon: "route", label: "pl.nav.roadmap" },
  ],
  ev = {},
  tv = { overview: gp, onboarding: V1, pricing: Y1, library: K1, roadmap: J1 };
function nv({ page: s, param: i }) {
  const { s: a, go: l, t: c } = me(),
    [m, h] = V.useState({ pilotGym: !0 }),
    [p, f] = V.useState([]),
    y = tv[s] || gp,
    j = mp(a);
  return (
    V.useEffect(() => {
      window.scrollTo({ top: 0 });
      const C = document.querySelector(".pl-nav button.on"),
        v = document.querySelector(".pl-side");
      C &&
        v &&
        v.scrollWidth > v.clientWidth &&
        C.scrollIntoView({ inline: "center", block: "nearest" });
    }, [s]),
    e.jsxs("div", {
      className: "pl",
      children: [
        e.jsxs("aside", {
          className: "pl-side",
          "aria-label": c("pl.nav.label"),
          children: [
            e.jsxs("div", {
              className: "pl-brand",
              children: [
                e.jsxs("span", {
                  className: "pl-mark",
                  dir: "ltr",
                  children: ["forma", e.jsx("i", { children: "." })],
                }),
                e.jsx("span", {
                  className: "pl-brand-sub",
                  children: c("pl.brand.console"),
                }),
              ],
            }),
            e.jsx("nav", {
              className: "pl-nav",
              children: xp.map((C) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: s === C.id ? "on" : "",
                    "aria-current": s === C.id ? "page" : void 0,
                    onClick: () => l("platform", C.id),
                    children: [
                      e.jsx(M, { name: C.icon, size: 18 }),
                      e.jsx("span", {
                        className: "pl-nav-label",
                        children: c(C.label),
                      }),
                      C.id === "onboarding" &&
                        j.left.length > 0 &&
                        e.jsx("span", {
                          className: "pl-nav-count tnum",
                          children: j.left.length,
                        }),
                    ],
                  },
                  C.id,
                ),
              ),
            }),
            e.jsxs("div", {
              className: "pl-side-foot",
              children: [
                e.jsxs("div", {
                  className: "pl-env",
                  children: [
                    e.jsx(M, { name: "lock", size: 15 }),
                    e.jsxs("span", {
                      children: [
                        e.jsx("b", { children: c("pl.env.title") }),
                        e.jsx("small", { children: c("pl.env.text") }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "pl-who",
                  children: [
                    e.jsx("span", {
                      className: "pl-who-av",
                      "aria-hidden": "true",
                      children: "PL",
                    }),
                    e.jsxs("span", {
                      children: [
                        e.jsx("b", { children: c("pl.who.name") }),
                        e.jsx("small", { children: c("pl.who.role") }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsx("div", {
          className: "pl-main",
          children: e.jsx(y, {
            param: i,
            decisions: m,
            setDecisions: h,
            proposals: p,
            setProposals: f,
          }),
        }),
      ],
    })
  );
}
const Xn = {
    member: { pages: Do, presenter: Yy, App: Ky, device: "phone" },
    reception: { pages: Yu, presenter: Mx, App: Ex, device: "tablet" },
    trainer: { pages: vl, presenter: e1, App: t1, device: "phone" },
    admin: { pages: cp, presenter: E1, App: L1, device: "web" },
    platform: { pages: xp, presenter: ev, App: nv, device: "web" },
  },
  sv = {
    member: "phone",
    reception: "tablet",
    trainer: "dumbbell",
    admin: "chart",
    platform: "building",
  };
function ju() {
  var l;
  const [s, i, a] = window.location.hash.replace(/^#\/?/, "").split("/");
  return (l = Xn[s]) != null && l.pages.some((c) => c.id === i)
    ? { role: s, page: i, param: a ? decodeURIComponent(a) : void 0 }
    : Xn[s]
      ? { role: s, page: Xn[s].pages[0].id }
      : { role: "member", page: "home" };
}
const Zt = [
  { role: "member", page: "home", key: "1" },
  { role: "member", page: "pass", key: "2" },
  {
    role: "reception",
    page: "desk",
    param: "m1",
    key: "3",
    run: (s) => Zs(s, be, { method: "qr", by: "reception" }),
  },
  { role: "member", page: "home", key: "4", run: (s) => ts(s, 30) },
  { role: "member", page: "book", key: "5", run: (s) => Ll(s, "c3") },
  {
    role: "reception",
    page: "payments",
    param: "m4",
    key: "6",
    run: (s) => er(s, "m4", "monthly", "cash"),
  },
  { role: "member", page: "me", key: "7" },
  { role: "trainer", page: "today", key: "8", run: (s) => wl(s, "pt2") },
  { role: "admin", page: "overview", key: "9" },
  {
    role: "admin",
    page: "overview",
    key: "10",
    run: (s) => ({ ...s, lang: s.lang === "ar" ? "en" : "ar" }),
  },
];
function av() {
  useOrbitMotion();
  const [s, i] = V.useState(() => {
      try {
        return Xf(window.localStorage);
      } catch {
        return kl();
      }
    }),
    [a, l] = V.useState(ju),
    [c, m] = V.useState(null),
    [h, p] = V.useState(-1),
    [f, y] = V.useState({}),
    [j, C] = V.useState(!1),
    [v, g] = V.useState(!1),
    N = V.useRef(),
    k = V.useMemo(() => Au(s.lang, s.arabicDigits), [s.lang, s.arabicDigits]);
  (V.useEffect(() => {
    try {
      localStorage.setItem(wu, JSON.stringify(s));
    } catch {}
  }, [s]),
    V.useEffect(() => {
      ((document.documentElement.lang = s.lang),
        (document.documentElement.dir = s.lang === "ar" ? "rtl" : "ltr"),
        (document.title =
          s.lang === "ar"
            ? "FORMA / ORBIT · تجاوزي الحدود"
            : "FORMA / ORBIT — Beyond limits."));
    }, [s.lang]),
    V.useEffect(() => {
      const E = () => l(ju());
      return (
        window.addEventListener("hashchange", E),
        () => window.removeEventListener("hashchange", E)
      );
    }, []));
  const b = V.useCallback((E, ...z) => i((F) => E(F, ...z)), []),
    w = V.useCallback((E, z, F) => {
      window.scrollTo({ top: 0, behavior: "instant" });
      const A = Xn[E] ? E : "member",
        Y = z && Xn[A].pages.some((he) => he.id === z) ? z : Xn[A].pages[0].id;
      (l({ role: A, page: Y, param: F }),
        window.history.replaceState(
          null,
          "",
          `#/${A}/${Y}${F ? `/${encodeURIComponent(F)}` : ""}`,
        ));
    }, []),
    S = V.useCallback((E, z = "ok") => {
      (m({ text: E, tone: z, id: Date.now() }),
        clearTimeout(N.current),
        (N.current = setTimeout(() => m(null), 4200)));
    }, []),
    ae = V.useMemo(
      () => ({ s, act: b, go: w, route: a, notify: S, f: k, t: k.t, L: k.L }),
      [s, b, w, a, S, k],
    ),
    _ = Xn[a.role],
    L = _.pages.find((E) => E.id === a.page),
    G = _.presenter[a.page] || {},
    H = _.App,
    O = () => {
      (y({}), p(0), w(Zt[0].role, Zt[0].page, Zt[0].param));
    },
    R = (E) => {
      if (!(E < 0)) {
        if (E >= Zt.length) {
          p(-1);
          return;
        }
        (p(E), w(Zt[E].role, Zt[E].page, Zt[E].param));
      }
    },
    K = h >= 0 ? Zt[h] : null;
  return e.jsx(Al.Provider, {
    value: ae,
    children: e.jsxs("div", {
      className: `stage stage-${_.device}`,
      "data-page": a.page,
      "data-role": a.role,
      children: [
        e.jsx(OrbitChrome, {}),
        e.jsx("a", {
          className: "skip",
          href: "#app-main",
          children: s.lang === "ar" ? "تخطَّ إلى المحتوى" : "Skip to content",
        }),
        e.jsxs("header", {
          className: "demobar",
          children: [
            e.jsxs("div", {
              className: "demobar-brand",
              children: [
                e.jsxs("span", {
                  className: "logo",
                  "aria-label": "forma.",
                  children: ["forma", e.jsx("i", { children: "." })],
                }),
                e.jsx("span", {
                  className: "demobar-note",
                  children: k.t("demo.sample"),
                }),
              ],
            }),
            e.jsx("nav", {
              className: "rolebar",
              "aria-label": k.t("demo.role"),
              children: Object.keys(Xn).map((E) =>
                e.jsxs(
                  "button",
                  {
                    type: "button",
                    className: a.role === E ? "on" : "",
                    "aria-current": a.role === E ? "page" : void 0,
                    onClick: () => w(E),
                    children: [
                      e.jsx(M, { name: sv[E], size: 16 }),
                      e.jsx("span", { children: k.t(`role.${E}`) }),
                    ],
                  },
                  E,
                ),
              ),
            }),
            e.jsxs("div", {
              className: "demobar-tools",
              children: [
                e.jsxs("div", {
                  className: "clock",
                  title: k.t("clock.hint"),
                  children: [
                    e.jsx(M, { name: "timer", size: 16 }),
                    e.jsxs("span", {
                      className: "clock-time",
                      children: [
                        e.jsx("small", { children: k.t("clock.day") }),
                        e.jsx("b", { children: k.time(s.clock) }),
                      ],
                    }),
                    [15, 30, 60].map((E) =>
                      e.jsx(
                        "button",
                        {
                          type: "button",
                          className: "clock-step",
                          onClick: () => b(ts, E),
                          disabled: s.clock >= 1425,
                          children: k.t("clock.advance", { n: E }),
                        },
                        E,
                      ),
                    ),
                  ],
                }),
                e.jsxs("button", {
                  type: "button",
                  className: "tool-btn lang-btn",
                  onClick: () =>
                    b((E) => ({ ...E, lang: E.lang === "ar" ? "en" : "ar" })),
                  "aria-label": k.t("lang.switchLabel"),
                  children: [
                    e.jsx(M, { name: "lang", size: 16 }),
                    e.jsx("span", {
                      lang: s.lang === "ar" ? "en" : "ar",
                      children: k.t("lang.switch"),
                    }),
                  ],
                }),
                e.jsxs("button", {
                  type: "button",
                  className: "tool-btn tour-btn",
                  "aria-label": k.t("tour.start"),
                  onClick: O,
                  children: [
                    e.jsx(M, { name: "play", size: 16 }),
                    e.jsx("span", { children: k.t("tour.start") }),
                  ],
                }),
                e.jsx(yn, {
                  icon: "reset",
                  label: k.t("reset"),
                  className: "tool-btn",
                  onClick: () => C(!0),
                }),
              ],
            }),
          ],
        }),
        e.jsx("main", {
          className: "stage-main",
          id: "app-main",
          children:
            _.device === "web"
              ? e.jsx(H, { page: a.page, param: a.param })
              : e.jsxs("div", {
                  className: `device-stage device-stage-${_.device}`,
                  children: [
                    e.jsx(rv, {
                      kind: _.device,
                      clock: k.time(s.clock),
                      online: s.online,
                      children: e.jsx(H, { page: a.page, param: a.param }),
                    }),
                    e.jsx(lv, {
                      info: G,
                      pageLabel: L ? k.t(L.label) : "",
                      device: k.t(`role.${a.role}.device`),
                      open: v,
                      setOpen: g,
                    }),
                  ],
                }),
        }),
        K &&
          e.jsxs("aside", {
            className: "tour",
            "aria-live": "polite",
            "aria-label": k.t("tour.start"),
            children: [
              e.jsxs("div", {
                className: "tour-top",
                children: [
                  e.jsx("span", {
                    className: "tour-count",
                    children: k.t("tour.step", { n: h + 1, total: Zt.length }),
                  }),
                  e.jsx(yn, {
                    icon: "x",
                    label: k.t("close"),
                    onClick: () => p(-1),
                  }),
                ],
              }),
              e.jsx("div", {
                className: "tour-progress",
                "aria-hidden": "true",
                children: Zt.map((E, z) =>
                  e.jsx("i", { className: z <= h ? "on" : "" }, z),
                ),
              }),
              e.jsx("h2", { children: k.t(`tour.${K.key}.title`) }),
              e.jsx("p", { children: k.t(`tour.${K.key}.text`) }),
              e.jsxs("div", {
                className: "tour-actions",
                children: [
                  K.run &&
                    e.jsx(Z, {
                      variant: f[h] ? "quiet" : "accent",
                      icon: f[h] ? "check" : "play",
                      disabled: !!f[h],
                      onClick: () => {
                        (b(K.run), y((E) => ({ ...E, [h]: !0 })));
                      },
                      children: f[h]
                        ? k.t("tour.done")
                        : k.t(`tour.${K.key}.do`),
                    }),
                  e.jsx("span", { className: "grow" }),
                  h > 0 &&
                    e.jsx(Z, {
                      variant: "ghost",
                      onClick: () => R(h - 1),
                      children: k.t("tour.back"),
                    }),
                  e.jsx(Z, {
                    variant: "primary",
                    iconEnd: h < Zt.length - 1 ? "arrow" : void 0,
                    onClick: () => R(h + 1),
                    children:
                      h < Zt.length - 1 ? k.t("tour.next") : k.t("tour.finish"),
                  }),
                ],
              }),
            ],
          }),
        c &&
          e.jsxs(
            "div",
            {
              className: `toast toast-${c.tone}`,
              role: "status",
              children: [
                e.jsx(M, { name: c.tone === "bad" ? "alert" : "ok", size: 18 }),
                e.jsx("span", { children: c.text }),
              ],
            },
            c.id,
          ),
        j &&
          e.jsx(et, {
            title: k.t("reset"),
            onClose: () => C(!1),
            footer: e.jsxs(e.Fragment, {
              children: [
                e.jsx(Z, {
                  variant: "ghost",
                  onClick: () => C(!1),
                  children: k.t("cancel"),
                }),
                e.jsx(Z, {
                  variant: "danger",
                  icon: "reset",
                  onClick: () => {
                    const E = s.lang;
                    (i({ ...kl(), lang: E }),
                      C(!1),
                      p(-1),
                      w("member", "home"));
                  },
                  children: k.t("reset.yes"),
                }),
              ],
            }),
            children: e.jsx("p", { children: k.t("reset.confirm") }),
          }),
      ],
    }),
  });
}
function rv({ kind: s, children: i, clock: a, online: l }) {
  const c = V.useRef(null);
  return e.jsx("div", {
    className: `device device-${s}`,
    children: e.jsxs("div", {
      className: "device-screen",
      children: [
        s === "phone"
          ? e.jsxs("div", {
              className: "statusbar",
              "aria-hidden": "true",
              children: [
                e.jsx("b", { children: a }),
                e.jsx("span", { className: "island" }),
                e.jsxs("span", {
                  className: "sb-icons",
                  children: [
                    e.jsx(M, { name: l ? "wifi" : "wifiOff", size: 14 }),
                    e.jsx("i", { className: "battery" }),
                  ],
                }),
              ],
            })
          : e.jsxs("div", {
              className: "statusbar statusbar-tablet",
              "aria-hidden": "true",
              children: [
                e.jsx("b", { children: a }),
                e.jsxs("span", {
                  className: "sb-icons",
                  children: [
                    e.jsx(M, { name: l ? "wifi" : "wifiOff", size: 14 }),
                    e.jsx("i", { className: "battery" }),
                  ],
                }),
              ],
            }),
        e.jsx(Ru.Provider, {
          value: null,
          children: e.jsx("div", { className: "device-app", children: i }),
        }),
        e.jsx("div", { className: "device-layer", ref: c }),
      ],
    }),
  });
}
function lv({ info: s, pageLabel: i, device: a, open: l, setOpen: c }) {
  var C, v;
  const m = iv(),
    { s: h, act: p, go: f, f: y, notify: j } = m;
  return e.jsxs("aside", {
    className: `presenter ${l ? "is-open" : ""}`,
    "aria-label": y.t("presenter.title"),
    children: [
      e.jsxs("div", {
        className: "presenter-card",
        children: [
          e.jsxs("div", {
            className: "presenter-meta",
            children: [
              e.jsx("span", { children: a }),
              s.phase && e.jsx(Ge, { phase: s.phase }),
            ],
          }),
          e.jsx("h2", { children: i }),
          s.lead &&
            e.jsx("p", { className: "presenter-lead", children: y.t(s.lead) }),
          ((C = s.points) == null ? void 0 : C.length) > 0 &&
            e.jsx("ul", {
              className: "presenter-points",
              children: s.points.map((g) =>
                e.jsx("li", { children: y.t(g) }, g),
              ),
            }),
          s.ref &&
            e.jsx("p", {
              className: "presenter-ref",
              children: y.t("presenter.planRef", { ref: s.ref }),
            }),
          ((v = s.tries) == null ? void 0 : v.length) > 0 &&
            e.jsxs("div", {
              className: "presenter-tries",
              children: [
                e.jsx("span", {
                  className: "presenter-sub",
                  children: y.t("presenter.try"),
                }),
                s.tries.map((g) => {
                  var N;
                  return e.jsxs(
                    "button",
                    {
                      type: "button",
                      className: "try",
                      disabled:
                        (N = g.disabled) == null ? void 0 : N.call(g, h),
                      onClick: () => {
                        (g.run && p(g.run),
                          g.go && f(...g.go),
                          g.toast && j(y.t(g.toast)));
                      },
                      children: [
                        e.jsx(M, { name: g.icon || "play", size: 16 }),
                        e.jsx("span", { children: y.t(g.label) }),
                        g.go &&
                          e.jsx(M, {
                            name: "arrow",
                            size: 14,
                            className: "try-go",
                          }),
                      ],
                    },
                    g.label,
                  );
                }),
              ],
            }),
        ],
      }),
      e.jsx(ov, {}),
      e.jsxs("button", {
        type: "button",
        className: "presenter-toggle",
        onClick: () => c(!l),
        "aria-expanded": l,
        children: [
          e.jsx(M, { name: "info", size: 16 }),
          e.jsx("span", { children: y.t("presenter.title") }),
        ],
      }),
    ],
  });
}
function iv() {
  return Tn.useContext(Al);
}
function oc(s, i, a) {
  const l = s.params || {},
    c = l.memberId && ze(i, l.memberId),
    m = l.sessionId && de(i.sessions, l.sessionId),
    h = l.trainerId && de(dt, l.trainerId),
    p = l.rewardId && de(Jn, l.rewardId);
  return a.t(`audit.${s.type}`, {
    member: c ? a.L(c.name) : "",
    session: m ? a.L(m.title) : "",
    trainer: h ? a.L(h.name) : "",
    reward: p ? a.L(p.name) : "",
    method: l.method ? a.t(`method.${l.method}`) : "",
    reason: l.reason ? a.t(`deny.${l.reason}`) : "",
    amount: l.amount != null ? a.money(l.amount) : "",
    days: l.days,
    n: l.n,
    minutes: l.minutes,
    guest: l.guest,
  });
}
function ov({ limit: s = 7, compact: i = !1 }) {
  const { s: a, f: l } = Tn.useContext(Al),
    c = a.audit.filter((m) => m.type !== "clock").slice(0, s);
  return e.jsxs("section", {
    className: `feed ${i ? "compact" : ""}`,
    "aria-live": "polite",
    children: [
      e.jsx("h3", {
        className: "presenter-sub",
        children: l.t("presenter.feed"),
      }),
      c.length
        ? e.jsx("ol", {
            children: c.map((m) =>
              e.jsxs(
                "li",
                {
                  className: `feed-${m.type}`,
                  children: [
                    e.jsx("time", { children: l.time(m.at) }),
                    e.jsx("span", { children: oc(m, a, l) }),
                  ],
                },
                m.id,
              ),
            ),
          })
        : e.jsx("p", {
            className: "feed-empty",
            children: l.t("presenter.feedEmpty"),
          }),
    ],
  });
}
export default av;
export {
  Al,
  me,
  M,
  Z,
  Ge,
  Ke,
  ge,
  Zy,
  _u,
  ze,
  lt,
  Tl,
  qt,
  Lf,
  If,
  Ml,
  Pl,
  Xo,
  en,
  de,
  dt,
  be,
  gn,
  Pn,
  Xa,
  bt,
  ea,
};
