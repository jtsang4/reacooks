import { renderHook, act } from '@testing-library/react-hooks';
import useToggleValue from '../useToggleValue';

describe('useToggleValue', () => {
  it('should return truthyValue when passes without the third parameter', function () {
    const { result } = renderHook(() => useToggleValue('foo', 'bar'));
    expect(result.current[0]).toBe('foo');
    expect(typeof result.current[1]).toBe('function');
  });

  it('should return falsyValue when passes false as the third parameter', function () {
    const { result } = renderHook(() => useToggleValue('foo', 'bar', false));
    expect(result.current[0]).toBe('bar');
    expect(typeof result.current[1]).toBe('function');
  });

  it('should toggle value after calling toggleValue function', function () {
    const { result } = renderHook(() => useToggleValue('foo', 'bar'));
    expect(result.current[0]).toBe('foo');
    expect(typeof result.current[1]).toBe('function');
    act(() => { result.current[1](); });
    expect(result.current[0]).toBe('bar');
    act(() => { result.current[1](); });
    expect(result.current[0]).toBe('foo');
    act(() => { result.current[1](true); });
    expect(result.current[0]).toBe('foo');
  });
});
